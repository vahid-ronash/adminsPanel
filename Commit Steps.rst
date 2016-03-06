Commit Steps
============
Before each commit please do the following steps:

- **Testing**
   Ensure that all written test will be passed. Run project tests and check if any test case fails, fix bugs related to your new code.

- **Coverage**
   Ensure that you have written enough tests with at least 95% of coverage (including branch coverage) for your code.

- **Commit message**
   Ensure that you are using smart commits while writing commit message. Each of your commits should contain an issue number. Also you can add some other info to your commits as well (strongly recommended).
     **e.g** : JRA-123 #time 2d 5h 30m #comment Task completed ahead of schedule #resolve

- **CI**
   After pushing your commits to remote repository, ensure that your CI build passes. The CI build result will be sent to you via email. If it has been failed, update the JIRA issue with the error and fix it in your code. Then follow commit steps again.

- **Codacy**
   Checkout your code analysis result at codacy, the codacy result will be sent to hipchat software room as well. Please read all reported issues carefully and take appropriate actions accordingly.