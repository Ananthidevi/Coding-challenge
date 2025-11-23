document.addEventListener("DOMContentLoaded",function(){
    const form =document.getElementById("userForm");

    form.addEventListener("submit",function(e){
       e.preventDefault();
        const quota = document.getElementById("quotaNumber").value.trim();
         const train = document.getElementById("trainNumber").value.trim();
         const date = document.getElementById("fromDate").value.trim();
         const edate = document.getElementById("endDate").value.trim();
         const journey = document.getElementById("travelPlace").value.trim();

         //regular ex pattern

const trainPattern = /^\[a-z]-d{5}$/;

const datePattern = /^(0[1-9]1[0-2])\/\d{2}$/;
const edatePattern = /^(0[1-9]1[0-2])\/\d{2}$/;
const journeyPattern = /^(0[1-9]1[0-2])\/\d{2}$/;

 let valid = true;
if(quota.trim() === ""){
        //trim-- find empty space
        // document.getElementById("quotaError").innerText = "Number must have be 7 digits"
        alert("Please Enter a validNumber");
        //topup box for error message

    }
const newTask = document.createElement("div");
    newTask.innerText = quota

      document.getElementById("taskList").appendChild(newTask);
   document.getElementById("quotaNumber").value = "";

   if(train.trim() === ""){
        //trim-- find empty space
        // document.getElementById("quotaError").innerText = "Number must have be 7 digits"
        alert("Please Enter a valid Train Number");
        //topup box for error message

    }
const newTrain = document.createElement("div");
    newTrain.innerText = train

      document.getElementById("taskList").appendChild(newTrain);
   document.getElementById("trainNumber").value = "";


     if(date.trim() === ""){
        //trim-- find empty space
        // document.getElementById("quotaError").innerText = "Number must have be 7 digits"
        alert("Please Enter a Date");
        //topup box for error message

    }
const newDate = document.createElement("div");
    newDate.innerText = date

      document.getElementById("taskList").appendChild(newDate);
   document.getElementById("fromDate").value = "";

     if(edate.trim() === ""){
        //trim-- find empty space
        // document.getElementById("quotaError").innerText = "Number must have be 7 digits"
        alert("Please Enter a endDate");
        //topup box for error message

    }
const neweDate = document.createElement("div");
    neweDate.innerText = edate

      document.getElementById("taskList").appendChild(neweDate);
   document.getElementById("endDate").value = "";

     if(journey.trim() === ""){
        //trim-- find empty space
        // document.getElementById("quotaError").innerText = "Number must have be 7 digits"
        alert("Please Enter a journeyPlace");
        //topup box for error message

    }
const newJourney = document.createElement("div");
    newJourney.innerText =journey

      document.getElementById("taskList").appendChild(newJourney);
   document.getElementById("travelPlace").value = "";

    })
})







//validation
// let valid = true;
// if(!quotaPattern.test(quota)){
//     document.getElementById("quotaError").innerText = "Number must have be 7 digits"

//     valid = false ;
// }else{
//     // document.getElementById("quotaError").innerText = "";
//      alert("Please Enter a Name");
// }
//  const newTask = document.createElement("div");
//     newTask.innerText = quota
//      document.getElementById("taskList").appendChild(newTask);
//    document.getElementById("taskInput").value = "";


// if(!edatePattern.test(edate)){
        //     document.getElementById("edateError").innerText = "Enter the valid format  MM/YY";

        // valid = false;
        // }else{
        //     document.getElementById("edateError").innerText= "";
        // }
         //      if(!journeyPattern.test(journey)){
    //         document.getElementById("journeyError").innerText = "Enter the valid format  MM/YY";

    //     valid = false;
    //     }else{
    //         document.getElementById("journeyError").innerText= "";
    //     }
    //    if(valid){
    //         document.getElementById("success").innerText = `payment sucess ,WELCOME ${train}`;
    //         form.reset();
    //         console.log({quota ,train, date,edate,journey});
    //     }