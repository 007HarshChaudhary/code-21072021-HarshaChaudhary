// Importing mocha and chai
const mocha = require('mocha');
const chai = require('chai');
const fs = require('fs');
  
// importing processed data
let json_object;
try {
    json_object = require('../app.js');    
} catch (error) {
    console.log(error.message);
    process.exit();
}

// count of total over weight people
const data = json_object.patientData_new;
const testItem = data[data.length - 1]['Total Over-Weight People'];

const expect = chai.expect;

// Getting actual count
let count = 0;

function countOverWeight() {
    let patientData = JSON.parse(fs.readFileSync('InputData.json', 'utf-8'));
    for (let i = 0; i < patientData.length; i++){
        let bmi = patientData[i].WeightKg / ( (patientData[i].HeightCm/100) **2);
        if (25 <= bmi && bmi<= 29.9)
            count ++;
    }
}

countOverWeight(); 
// Test case
describe('testItem', () => {
  
    // We will describe each single test using it
    it(`Count should be ${count}`, () => {
        expect(testItem).to.equal(count);
    })
})
