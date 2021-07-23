# code-21072021-HarshaChaudhary

#### Dependencies
| Name | Command to install
| --- | --- |
| Node | https://nodejs.org/en/download/ |
| TypeScript | npm install -g typescript |
| Express | npm install express |
| Mocha | npm install mocha |
| Chai | npm install chai |

---

#### Steps to run the application
1. Download the project.
2. Install the required dependencies.
3. Use command `node createData.js` to create dummy data. This will create a file `InputData.json`.
4. Use command `npm run test` to run the test cases.
5. Use command `node api.js` to start the server, app will start on port 8080.

---

#### APIs
1. GET `http://localhost:8080/patientdata/:pageNo` where pageno >= 1. It will fetch patient's data with 100 entries per page.
2. GET `http://localhost:8080/totalOverWeight`. It will fetch total number of over weight people.

