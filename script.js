function CalculateBMI(){
    let feet = document.getElementById('feet').value 
    let inch = document.getElementById('inch').value
    let weight= document.getElementById('KG').value

    feet = parseInt(feet)
    inch = parseInt(inch)
    weight = parseInt(weight)

    let height = (feet*12 + inch ) / 39.37007874;
    
    let bmi = weight / (height*height)

    if(bmi<18.5){
    document.getElementById('result').innerHTML=" Your BMI is : ["+bmi+"] You are Underweight" }

    else if(bmi>18.5 && bmi<24.9){ document.getElementById('result').innerHTML="Your BMI is: ["+bmi+"] You are Healthy weight"}

    else if(bmi>25.0 && bmi<29.9){ document.getElementById('result').innerHTML=" Your BMI is: ["+bmi+"] You are Overweight"}
    
    else{ document.getElementById('result').innerHTML=" Your BMI is: ["+bmi+"] Your weight is Obese"}
}