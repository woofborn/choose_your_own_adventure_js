
console.log("hello script js");


const input = document.getElementById("input");
input.placeholder = "Please type your name.";
var inputValues = {
    name:"",
    door:"",
    doorQuestions: "",
    doorAnswers: [
        {
            age:null,
            BMI:null,
            hobby:null,
        },
        {
            spouse:null,
            kids:null,
            pet:null,
        }
    ]
}




var inputCount = 0;

var inputHappened = function(currentInput){
  console.log( currentInput );

  // user inputs name

  if (inputCount === 0) {
    inputValues.name = input.value;
    inputCount ++;
    input.placeholder = "Please input H or F."
    document.getElementById("question").textContent = "Would you like to purchase Health insurance or Family insurance?"
    return `Welcome to InsureCo, ${inputValues["name"]}!`
  };

//inputs for type of insurance
//user wants health insurance
  if (inputCount === 1){
    if (input.value === "H") {
        inputValues.door = input.value;
        console.log(inputCount);
        inputCount ++;
        document.getElementById("question").textContent = "Would you like to tell me about your age, BMI or hobby? "
        input.placeholder = "Please input A, B or H."
        return `Thank you for selecting Health insurance, ${inputValues["name"]}!`
    }
    //user wants family insurance
    else if (input.value === "F") {
        inputValues.door = input.value;
        console.log(inputCount);
        inputCount ++;
        document.getElementById("question").textContent = "Would you like to tell me about your spouse, kids or pets? "
        input.placeholder = "Please input S, K or P."
        return `Thank you for selecting Family insurance, ${inputValues["name"]}!`
    }
  };

  if (inputCount === 2){
    // Three branches for Health Insurance
    if (input.value === "A"){
        console.log(inputCount);
        inputValues.doorQuestions = input.value;
        inputCount ++;
        document.getElementById("question").textContent = "Please tell me your age. ";
        input.placeholder = "Please type your age in numbers."
        return `Thank you for selecting "age", ${inputValues["name"]}!`
    } else if (input.value === "B"){
        console.log(inputCount);
        inputValues.doorQuestions = input.value;
        inputCount ++;
        document.getElementById("question").textContent = "Please tell me your BMI. ";
        input.placeholder = "Please type your BMI in numbers."
        return `Thank you for selecting "BMI", ${inputValues["name"]}!`
    } else if (input.value === "H"){
        console.log(inputCount);
        inputValues.doorQuestions = input.value;
        inputCount ++;
        document.getElementById("question").textContent = "Please tell me your hobby. ";
        input.placeholder = `Please input "S", "D" or "B".`
        return `Thank you for selecting "hobby", ${inputValues["name"]}!`
    }
    // Three branches for Family Insurance
     if (input.value === "S"){
            console.log(inputCount);
            inputValues.doorQuestions = input.value;
            inputCount ++;
            document.getElementById("question").textContent = "Are you married? ";
            input.placeholder = `Please type "Y" or "N".`
            return `Thank you for selecting "spouse", ${inputValues["name"]}!`
    } else if (input.value === "K"){
            console.log(inputCount);
            inputValues.doorQuestions = input.value;
            inputCount ++;
            document.getElementById("question").textContent = "Do you have kids? ";
            input.placeholder = `Please type "Y" or "N".`
            return `Thank you for selecting "kids", ${inputValues["name"]}!`
    } else if (input.value === "P"){
            console.log(inputCount);
            inputValues.doorQuestions = input.value;
            inputCount ++;
            document.getElementById("question").textContent = "What kind of pet do you have? ";
            input.placeholder = `Please input "C", "O" or "A".`
            return `Thank you for selecting "pet", ${inputValues["name"]}!`
    }
  };

    if (inputCount === 3){
    console.log(inputCount);
        if (inputValues.doorAnswers[0]["age"] === null || inputValues.doorAnswers[0]["BMI"] === null|| inputValues.doorAnswers[0]["hobby"]=== null){
            if (inputValues.doorQuestions === "A"){
            document.getElementById("question").textContent = "Would you like to tell me about your BMI or hobby? "
            input.placeholder = "Please input B or H."
            inputCount --;
                if (input.value > 60){
                inputValues.doorAnswers[0]["age"] = input.value;
                return `something about how old you are`
                } else if (input.value <= 20){
                inputValues.doorAnswers[0]["age"] = input.value;
                return `something about how young you are`
                } else {
                inputValues.doorAnswers[0]["age"] = input.value;
                return `something about how uninspiring you are`
                }

            } else if (inputValues.doorQuestions === "B"){
            document.getElementById("question").textContent = "Would you like to tell me about your age or hobby? "
            input.placeholder = "Please input A or H."
            inputCount --;
                if (input.value > 25){
                inputValues.doorAnswers[0]["BMI"] = input.value;
                return `ssomething about consider lowering BMI`
                } else if (input.value <= 18){
                inputValues.doorAnswers[0]["BMI"] = input.value;
                return `something about consider raising BMI`
                } else {
                inputValues.doorAnswers[0]["BMI"] = input.value;
                return `something about recognized as normal`
                }

            } else if (inputValues.doorQuestions === "H"){
            document.getElementById("question").textContent = "Would you like to tell me about your age or BMI? "
            input.placeholder = "Please input A or B."
            inputCount --;
                if (input.value === "S"){
                inputValues.doorAnswers[0]["hobby"] = input.value;
                return `I hope you use a dive cage.`
                } else if (input.value === "D"){
                inputValues.doorAnswers[0]["hobby"] = input.value;
                return `bad snake pun`
                } else if (input.value === "B"){
                inputValues.doorAnswers[0]["hobby"] = input.value;
                return `Parachutes are just a meaningless expenditure, really.`
                }

            }
        } else {
        input.placeholder = "Please input H or F.";
        document.getElementById("question").textContent = "Would you like to purchase additional Health or Family Insurance?";
        inputCount -=2;}
    };

}