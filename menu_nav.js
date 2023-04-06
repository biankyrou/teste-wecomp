const menuLinks = document.querySelectorAll('.nav_cabecalho a[href^="#"');

function scrollToSection(event){
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute("href");
    const section = document.querySelector(id);
}


menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
    });

