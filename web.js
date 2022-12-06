
const loginForm= document.querySelector("#loginForm");
const loginInput= document.querySelector("#loginForm input");
const greeting =document.querySelector("#greeting");
const HIDDEN_CLASSNAME="hidden"; //보통 문자열은 대문자로 선언
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintGreeting(username){  // 헬로 보이게하기.
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
}

function onLoginSubmit(event){
    event.preventDefault(); 
    const username= loginInput.value; // 폼에 적은내용 유저네임에 저장
    localStorage.setItem(USERNAME_KEY,username); //로컬저장소에 키 유저네임에 유저네임저장
    //greeting.innerText= "Hello"+ username;
    paintGreeting(username);  
    loginForm.classList.add(HIDDEN_CLASSNAME);
}


if(savedUsername === null){ // 널일때(아무것도 안했을때)
    loginForm.classList.remove(HIDDEN_CLASSNAME); //로그인폼 보이게
    loginForm.addEventListener("submit",onLoginSubmit); // 저장했을때 유저저장

}else{
    paintGreeting(savedUsername); //새로고침하면 핼로보임.
}

//null일 때(처음) form 화면 보임
//유저네임 입력했을 때 로컬저장소에 올라가고 greeting Hello표시
// 새로고침했을 때 유저네임에 그대로 있고 폼화면 사라짐. 

