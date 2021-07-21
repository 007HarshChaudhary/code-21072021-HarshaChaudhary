let data = []
let genders = ['Male', 'Female'];

// No. of records to be created
let N = 10**7;

let fs = require('fs');
for (let index = 0; index < N; index++) {
    // generating random values
    randomHeight = Math.floor(Math.random() * (180 - 150) ) + 150;
    randomWeight = Math.floor(Math.random() * (100 - 50) ) + 50;
    randomGender = genders[Math.floor(Math.random() * genders.length)];
    
    // creating random object
    obj = {
        "Gender": randomGender,
        "HeightCm": randomHeight,
        "WeightKg": randomWeight
    };

    // pushing object into array
    data.push(obj);
}

// Saving data into a file
fs.writeFileSync("./InputData.json", JSON.stringify(data), (err) => {
    if (err) {
        console.error(err);
        return;
    };
});

