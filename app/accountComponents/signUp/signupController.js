/**
 * Created by mojtaba on 3/12/16.
 */
/*global angular */
/**
 * @ngdoc controller
 * @name app.controller.signUpController
 * @description
 * control signUp page and make user able to register in pushe.co
 */
((function() {
    'use strict';
    angular
        .module('app')
        .controller('signUpController', ['$scope','AuthService','$location','$timeout','$filter',function($scope,$AuthService,$location,$timeout,$filter){
            var thisController=this;
            thisController.agreement=false;
            thisController.data={
                email:"",
                password:"",
                gRecaptchaResponse:""
            };
            $scope.$root.ErrorContent=thisController.registerError={err:""};
            thisController.isSigningUp=false;
            thisController.strength=50;
            thisController.minStrength=10;

            /**
             * @ngdoc method
             * @name measureStrength
             * @methodOf app.controller.signUpController
             * @description
             * it get strength of password
             */
            thisController.measureStrength = function (password) {
                var stringReverse = function (str) {
                        for (var i = str.length - 1, out = ''; i >= 0; out += str[i--]) {
                        }
                        return out;
                    },
                    matches = {
                        pos: {},
                        neg: {}
                    },
                    counts = {
                        pos: {},
                        neg: {
                            seqLetter: 0,
                            seqNumber: 0,
                            seqSymbol: 0
                        }
                    },
                    tmp,
                    strength = 0,
                    letters = 'abcdefghijklmnopqrstuvwxyz',
                    numbers = '01234567890',
                    symbols = '\\!@#$%&/()=?¿',
                    back,
                    forth,
                    i;

                if (password) {
                    // Benefits
                    matches.pos.lower = password.match(/[a-z]/g);
                    matches.pos.upper = password.match(/[A-Z]/g);
                    matches.pos.numbers = password.match(/\d/g);
                    matches.pos.symbols = password.match(/[$-/:-?{-~!^_`\[\]]/g);
                    matches.pos.middleNumber = password.slice(1, -1).match(/\d/g);
                    matches.pos.middleSymbol = password.slice(1, -1).match(/[$-/:-?{-~!^_`\[\]]/g);

                    counts.pos.lower = matches.pos.lower ? matches.pos.lower.length : 0;
                    counts.pos.upper = matches.pos.upper ? matches.pos.upper.length : 0;
                    counts.pos.numbers = matches.pos.numbers ? matches.pos.numbers.length : 0;
                    counts.pos.symbols = matches.pos.symbols ? matches.pos.symbols.length : 0;

                    tmp=0;
                    for(var i in counts.pos){tmp+=Math.min(1,counts.pos[i]);}
                    // tmp = _.reduce(counts.pos, function (memo, val) {
                    //     if has count will add 1
                    // return memo + Math.min(1, val);
                    // }, 0);

                    counts.pos.numChars = password.length;
                    tmp += (counts.pos.numChars >= 8) ? 1 : 0;

                    counts.pos.requirements = (tmp >= 3) ? tmp : 0;
                    counts.pos.middleNumber = matches.pos.middleNumber ? matches.pos.middleNumber.length : 0;
                    counts.pos.middleSymbol = matches.pos.middleSymbol ? matches.pos.middleSymbol.length : 0;

                    // Deductions
                    matches.neg.consecLower = password.match(/(?=([a-z]{2}))/g);
                    matches.neg.consecUpper = password.match(/(?=([A-Z]{2}))/g);
                    matches.neg.consecNumbers = password.match(/(?=(\d{2}))/g);
                    matches.neg.onlyNumbers = password.match(/^[0-9]*$/g);
                    matches.neg.onlyLetters = password.match(/^([a-z]|[A-Z])*$/g);

                    counts.neg.consecLower = matches.neg.consecLower ? matches.neg.consecLower.length : 0;
                    counts.neg.consecUpper = matches.neg.consecUpper ? matches.neg.consecUpper.length : 0;
                    counts.neg.consecNumbers = matches.neg.consecNumbers ? matches.neg.consecNumbers.length : 0;


                    // sequential letters (back and forth)
                    for (i = 0; i < letters.length - 2; i++) {
                        var p2 = password.toLowerCase();
                        forth = letters.substring(i, parseInt(i + 3));
                        back = stringReverse(forth);
                        if (p2.indexOf(forth) !== -1 || p2.indexOf(back) !== -1) {
                            counts.neg.seqLetter++;
                        }
                    }

                    // sequential numbers (back and forth)
                    for (i = 0; i < numbers.length - 2; i++) {
                        forth = numbers.substring(i, parseInt(i + 3));
                        back = stringReverse(forth);
                        if (password.indexOf(forth) !== -1 || password.toLowerCase().indexOf(back) !== -1) {
                            counts.neg.seqNumber++;
                        }
                    }

                    // sequential symbols (back and forth)
                    for (i = 0; i < symbols.length - 2; i++) {
                        forth = symbols.substring(i, parseInt(i + 3));
                        back = stringReverse(forth);
                        if (password.indexOf(forth) !== -1 || password.toLowerCase().indexOf(back) !== -1) {
                            counts.neg.seqSymbol++;
                        }
                    }


                    // repeated chars
                    var chs=password.toLowerCase().split('');
                    var seenChars={};
                    var repeated=0;
                    for(var i in chs){
                        if(seenChars[chs[i]])repeated++;
                        else seenChars[chs[i]]=1;
                    }
                    counts.neg.repeated = repeated;

                    // counts.neg.repeated = _.chain(p.toLowerCase().split('')).
                    //     countBy(function(val) {
                    //         return val;
                    //     })
                    //     .reject(function(val) {
                    //         return val === 1;
                    //     })
                    //     .reduce(function(memo, val) {
                    //         return memo + val;
                    //     }, 0)
                    //     .value();



                    // Calculations
                    strength += counts.pos.numChars * 4;
                    if (counts.pos.upper) {
                        strength += (counts.pos.numChars - counts.pos.upper) * 2;
                    }
                    if (counts.pos.lower) {
                        strength += (counts.pos.numChars - counts.pos.lower) * 2;
                    }
                    if (counts.pos.upper || counts.pos.lower) {
                        strength += counts.pos.numbers * 4;
                    }
                    strength += counts.pos.symbols * 6;
                    strength += (counts.pos.middleSymbol + counts.pos.middleNumber) * 2;
                    strength += counts.pos.requirements * 2;

                    strength -= counts.neg.consecLower * 2;
                    strength -= counts.neg.consecUpper * 2;
                    strength -= counts.neg.consecNumbers * 2;
                    strength -= counts.neg.seqNumber * 3;
                    strength -= counts.neg.seqLetter * 3;
                    strength -= counts.neg.seqSymbol * 3;

                    if (matches.neg.onlyNumbers) {
                        strength -= counts.pos.numChars;
                    }
                    if (matches.neg.onlyLetters) {
                        strength -= counts.pos.numChars;
                    }
                    if (counts.neg.repeated) {
                        strength -= (counts.neg.repeated / counts.pos.numChars) * 10;
                    }
                }

                return Math.max(0, Math.min(100, Math.round(strength)));
            };

            /**
             * @ngdoc method
             * @name passChange
             * @methodOf app.controller.signUpController
             * @description
             * it make errors on password change
             */
            thisController.passwordChange=function(){
                var pass=thisController.data.password;
                var $element=$scope.form.password;
                $element.strengthType="";
                if(pass.length<3)$element.$error.strength=$filter('translate')('MINIMUM_PASS_LEN');
                else {
                    thisController.strength=thisController.measureStrength(pass);
                    if (thisController.strength < thisController.minStrength){
                        $element.$error.strength = $filter('translate')('WEAK_STRENGTH');
                        $element.strengthType="weak";
                    }
                    else if (thisController.strength < 66){
                        $element.$error.strength= $filter('translate')('MEDIUM_STRENGTH');
                        $element.strengthType = "medium";
                    }
                    else {
                        $element.$error.strength= $filter('translate')('STRONG_STRENGTH');
                        $element.strengthType = "strong";
                    }
                }
            };

            /**
             * @ngdoc method
             * @name login
             * @methodOf app.controller.signUpController
             * @description
             * it pass credential(username,password,rememberMe) data to authService
             */
            thisController.register=function(){
                thisController.registerError.err="";
                if(thisController.strength<thisController.minStrength){
                    thisController.registerError.err=$filter('translate')('PASS_IS_WEAK');
                }
                else if(thisController.data.password!==thisController.repassword){
                    thisController.registerError.err=$filter('translate')('PASS_NOT_MATCH');
                    thisController.data.password="";
                    thisController.repassword="";
                }
                else if(!thisController.agreement){
                    thisController.registerError.err=$filter('translate')('CHECK_AGREEMENT');
                }   
                else {
                    thisController.isSigningUp=true;
                    return $AuthService.register(thisController.data).then(function (result) {
                        if (result.error) {
                            thisController.registerError.err = result.error;
                        }
                        else {
                            thisController.registerAlert = $filter('translate')('REGISTER_RESPONSE_MSG');
                        }
                        thisController.isSigningUp=false;
                    });
                }
            };
        }]);
})());