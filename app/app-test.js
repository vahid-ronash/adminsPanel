/**
 * Created by mojtaba on 3/8/16.
 */
describe('first Test', function() {
    it('body has to be one', function () {
        expect(10).toEqual(10);
        expect($('body').length).toEqual(1);
    });
});