// importing FS module
const fs = require('fs');

// reading JSON file and parsing it into an object
let patientData = JSON.parse(fs.readFileSync('InputData.json'));

// importing BMI_Category-Health_Risk mapping object
const HealthRisk = require('./CategoryToRiskMapping.js');

// importing function that maps BMI score to a Category
const BmiCateogry = require('./BmiToCategoryMapping.js');

// variable to store number of OverWeight people
let countOfOverWeight = 0;

// creating a new JSON array to store additional data - BMI, Category and Risks
let patientData_new = patientData.map((data)=>{
    // new Data to put into JSON
    let bmi = data.WeightKg / ( (data.HeightCm/100) **2);
    let category = BmiCateogry(bmi);
    let risk = HealthRisk[category];

    if (category === 'Over Weight')
        countOfOverWeight++;

    data.BMI= parseFloat(bmi.toFixed(2));
    data.Category= category;
    data.Risks= risk;
    return data;
});

// adding the count of over-weighted people into the JSON object
patientData_new.push(
    {
        'Total Over-Weight People': countOfOverWeight
    }
);

// Writing to JSON
// fs.writeFileSync("./output.json", JSON.stringify(patientData_new), (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     };
// });

module.exports = { patientData_new };
