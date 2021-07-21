module.exports = function (bmi) {
    if (bmi <= 18.4)
        return 'Under Weight'
    else if (18.5 <= bmi && bmi <= 24.9)
        return 'Normal'
    else if (25 <= bmi && bmi<= 29.9)
        return 'Over Weight'
    else if (30 <= bmi && bmi<= 34.9)
        return 'Moderately Obese'
    else if (35 <= bmi && bmi<= 39.9)
        return 'Severely Obese'
    else
        return 'Very Severely Obese'
};