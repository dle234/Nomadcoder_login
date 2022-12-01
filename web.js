
const loginForm= document.querySelector(".loginForm");
const loginInput =document.querySelector(".loginForm input");


function onLoginSubmit(event){
    event.preventDefault(); 
    // 어떤 event 의 기본 행동이든지 발생되지 않도록 막음
    // 기본적으로 submit 할때마다 발동되는 새로고침을 막음.
    console.log(loginInput.value);
    
}
loginForm.addEventListener("submit",onLoginSubmit);


const link= document.querySelector("a");