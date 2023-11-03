// typing animation
var typed= new Typed(".text", {
    strings:["Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})
// about me - open tab
var section_links = document.getElementsByClassName("sectionLink");
var section_contents = document.getElementsByClassName("sectionContent");
function openSection(sectionName){
    for(section_link of section_links){
        section_link.classList.remove("activeLink");
    }
    for(section_content of section_contents){
        section_content.classList.remove("activeContent");
    }
    event.currentTarget.classList.add("activeLink");
    document.getElementById(sectionName).classList.add("activeContent");
}
//active section
let sections = document.querySelectorAll('section');
let nav = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            nav.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('scrollAnimate');
        }
        else{
            sec.classList.remove('scrollAnimate');

        }
    });
}
//open/close side nav when screen < 1200px
var sideMenu = document.getElementById("menuBar");
function openMenu(){
    sideMenu.style.right = "0";
}
function closeMenu(){
    sideMenu.style.right = "-200px";
}