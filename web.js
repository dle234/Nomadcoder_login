
const loginForm= document.querySelector(".loginForm");
const loginInput =document.querySelector(".loginForm input");


function onLoginSubmit(event){
    event.preventDefault(); 
    // 어떤 event 의 기본 행동이든지 발생되지 않도록 막음
    // 기본적으로 submit 할때마다 발동되는 새로고침을 막음.
    console.log(loginInput.value);
    
}
loginForm.addEventListener("submit",onLoginSubmit);
/////////////////////

function handleLinkClick(event){
    event.preventDefault();
    console.dir(event) // 사용자가 클릭한 부분에 대한 정보를 알려줌(x축, y축 , html...)
}
const link= document.querySelector("a");
link.addEventListener("click",handleLinkClick)
// ok 누르기 전까지는 링크로 이동 X(alert 사용하면 브라우저 모든 행동이 창 끌때까지 멈춤)
// 뭐가 클릭 됐는지 정보 알고 싶음
