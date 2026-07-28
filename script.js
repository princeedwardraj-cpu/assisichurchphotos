const PASSWORD = "14062026";

const DRIVE_LINK = "https://drive.google.com/drive/folders/1tg2SYVi5RMYL3jy-xgWjGJsy7BrGjSpy?usp=sharing";

function checkPassword(){

const pass=document.getElementById("password").value;

if(pass===PASSWORD){

window.location.href=DRIVE_LINK;

}else{

document.getElementById("error").innerHTML="❌ Wrong Password";

}

}
