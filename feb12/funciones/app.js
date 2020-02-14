//function statement
function greet(){
  console.log("hi");
}
greet();

//ejemplo de nueva notacion
/*let greet = () =>{
  console.log('hi');
}
greet();*/

//funtions are first-class
/*function logGreeting(fn){
  fn();
}
logGreeting(greet);*/

let logGreeting = (fn) =>{
  fn();
}
logGreeting(greet);

let logGreeting2 = fn => fn();
logGreeting2(greet);

logGreeting(()=>{console.log(`hi`);});
