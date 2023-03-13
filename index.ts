import inquirer from "inquirer";


// const answer = await inquirer .prompt([
//     {
//         type: "input",
//         name : "useid",
//         message : "Enter Your Id :"
//     },
//     {
//         type: "number",
//         name : "userpin",
//         message : "Enter Your Pin : "
//     },
//     {
//         type: "list",
//         name : "accounttype",
//         choices : [ "Current" , "saving"],
//         message : "Select your account"
//     },
//     {
//         type: "list",
//         name : "Transactiontype",
//         choices : [ "Fast Cash" , "Withdraw"],
//         message : "Select your Transaction",
//         when(answer){
//             return answer.accounttype
//         }},
//         {
//             type: "list",
//             name : "amount",
//             choices : [1000,2000,4000,5000],
//             message : "Select your amount : ",
//             when(answer){
//                 return answer.Transactiontype == "Fast Cash"
//             }

//     },
//     {
//         type: "number",
//         name : "amount",
//         message : "Enter amount ",
//         when(answer){
//             return answer.Transactiontype == "Withdraw"
//         },
//     },
// ])

// if(answer.useid && answer.userpin ){
//     const balance = 6000;
//     console.log( "You previous balance is " , balance)

//     const enteramount = answer.amount
//     if(balance >= enteramount){
// const remainbalance = balance - enteramount ;
//         console.log( "Your Remaining  balance is : " , remainbalance)
//     }
//     else{
//         console.log("Insufficient Balance")
//     }
// }


const answer = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: " Enter Your Id"

    }, {
        type: "number",
        name: "userpin",
        message: " Enter Your Pin"

    }, {
        type: "list",
        name: "acounttype",
        choices: ["Current" , "Saving"],
        message: " Select your account"

    }, {
        type: "list",
        name: "transactiontype",
        choices: ["Fast Cash" , "Withdraw"],
        message: " Select your transaction",
        when(answer){
            return answer.acounttype 
        }

    }
    , {
        type: "list",
        name: "amount",
        choices: [1000,2000,3000,40000,5000],
        message: " Select your amount",
        when(answer){
            return answer.transactiontype == "Fast Cash"
        }

    }
     , {
        type: "number",
        name: "amount", 
        message: "Enter Your Amount",
        when(answer){
            return answer.transactiontype == "Withdraw"
        }

    }

])



if(answer.userId && answer.userpin){
    const balance = 5000;
    console.log("Your Balance is : " , balance)
    const enteramount = answer.amount
    if(balance >= enteramount ){
    const remainingbalance = balance - enteramount
   console.log("Your remaining balance is " , remainingbalance )
    }
    else{
        console.log("You have insuficient balance")
    }
}