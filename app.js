//variable declaration
function time() {
  //declare variable to the name input
  let name = document.getElementById("name").value;
  //condition to print dynamic result
  name? name=name:name='Hello!';
  //declare variable to the age input
  let age = document.getElementById("age1").value;
  //declare variable to the registration input
  let registration = document.getElementById("yn").value;
  //writing condition to convert true or false
  if (registration == 'yes') {
    registration = true;
  } else if (registration == 'no') {
    registration = false;
  }else{
    registration='none';
  };
  //declare variable to generate roll number
  let rollNum = Math.floor(Math.random() * 1000);
  //declare variable to print dynamic result
  let result = "";
  //condition to print roll number more than 1000 for registrants
  if (age > 18 && registration ==true){
    rollNum+=1000;
  };
  //condition to print dynamic result on the basis of age and registration
  if(age>18 && registration==true){
    result=document.getElementById("timing").innerText =(`${name} will start race at 9:30 am. Your Number is ${rollNum}`);
  }else if (age>18 && registration==false){
    result=document.getElementById("timing").innerText =(`${name} will start race at 11:00 am. Your Number is ${rollNum}`);
  }else if (age<18 && age>0){
    result=document.getElementById("timing").innerText =(`${name} will start race at 12:30 pm. Your Number is ${rollNum}`);
  }else if (age==18){
    result=document.getElementById("timing").innerText =("Registration Desk");
  }else if (registration=='none'){
    result=document.getElementById("timing").innerText =("please fill all the fields");
  }else{
    result=document.getElementById("timing").innerText =("please fill all the fields")
  }

  //print data in HTML document
  document.getElementById("timing").innerText = result;



}


