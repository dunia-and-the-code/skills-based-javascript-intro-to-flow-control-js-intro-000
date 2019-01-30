function basicTeenager(age) {
if (age > 12 || age < 20) {
  return "You are a teenager!";
}
}

function teenager(age) {
if (age >=13 || age <= 19) {
return "You are a teenager!";
} else {
  return "You are not a teenager";
} 
}

function ageChecker(age) {
if (age <= 12) {
return "You are a kid";
} else if (age >= 20) {
return "You are a grownup";
} else if (age >= 13 || age <= 19) {
return "You are a teenager!"; 
}
}

function ternaryTeenager(age) { 
return age >= 13 || age <= 19 ?
"You are a teenager" :
"You are not a teenager";
}


function switchAge(age) {
switch(age) {
  case  13, 14, 15, 15, 17, 18, 19 :
    console.log("You are a teenager");
    break;
    default:
    console.log("You have an age");
}
}

