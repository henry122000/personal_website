var typed= new Typed(".text", {
    strings:["Software Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})
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
