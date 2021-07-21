const express = require('express');
const app = express();

// importing processed array
const json_object = require('./app.js');

// preprocessing array
const patientData_new = json_object.patientData_new
const totalPatients = patientData_new.length-1;
const dataPerPage = 100;
const totalPages = Math.ceil(totalPatients/dataPerPage);

function fetchPatientsData (requestedPageNo) {
    // page 1 -> data[0], data[1], data[2], ... data[99];
    // page 2 -> data[100], data[101], data[102], ... data[199];
    let startIndex = dataPerPage*(requestedPageNo-1);
    let patients = [];
    for (let i = startIndex; i < startIndex+dataPerPage; i++)
        patients.push(patientData_new[i]);
    
    return patients;
};


// API to get patient's data based on page number
app.get('/patientdata/:pageNo', (req, res)=>{

    // get page number requested by user
    let requestedPageNo = req.params.pageNo;

    // 1 <= page number <= totalPages
    requestedPageNo = Math.max(1, requestedPageNo);
    requestedPageNo = Math.min(totalPages, requestedPageNo);

    // getting data records for requested page number
    let requestedDataArray = fetchPatientsData(requestedPageNo);

    // creating response
    const response = {
        pageNumber: requestedPageNo,
        TotalPatients: totalPatients,
        TotalPages: totalPages,
        Details: requestedDataArray
    };

    // sending data
    res.json(response);
});

// API to get total count of over-weight people
app.get('/totalOverWeight', (req, res)=>{
    res.json(patientData_new[totalPatients]);
});

app.listen(8080);

console.log('Starting listening to port: 8080');
