function saturdayFun(activity = "roller-skate") {
   return (`This Saturday, I want to ${activity}!`);
  }
  saturdayFun();
  saturdayFun(dotDotDot);
  

function mondayWork(place = "go to the office") {
    return (`This Monday, I will ${place}.`);
   }
   mondayWork();
   mondayWork("work from home");

function wrapAdjective(character = "*"){
   return function inner(adjective = "special"){
    return (`You are ${character}${adjective}${character}!`)
   }
     
}