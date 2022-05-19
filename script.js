let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let title = document.getElementById("title");
let welcome = document.getElementById("welcome-text");
let about = document.getElementById("about");
let aboutText = document.getElementById("about-text");
let contact = document.getElementById("contact");

arabic.onclick = ()=>{
    setLanugage("arabic");
    localStorage.setItem("Lang","arabic");
};

english.onclick = ()=>{
    setLanugage("english");
    localStorage.setItem("Lang","english");
};

onload = ()=>{
    setLanugage(localStorage.getItem("Lang"));
};
function setLanugage(getLanuage){
if(getLanuage === "arabic"){
    title.innerHTML = "مبرمج سفيان";
    welcome.innerHTML = "مرحبا بكم  في صفحة المبرمج سفيان";
    about.innerHTML = "حولنا";
    aboutText.innerHTML = "انا مصمم مواقع إلكترونية";
    contact.innerHTML = "اتصل بنا";
}else if(getLanuage ==="english"){
    title.innerHTML = "Soufiane Zhiri";
    welcome.innerHTML = "Welcome to website of Soufiane Zhiri";
    about.innerHTML = "  About US";
    aboutText.innerHTML = "  I am a front-end developer";
    contact.innerHTML = "Contact us";

}


}
