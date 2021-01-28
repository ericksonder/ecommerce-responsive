// MOSTRAR MENU MOVIL
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId)

    if (toggle && navId){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show');
        })

    }
}

showMenu('nav-toggle', 'nav-menu');  


// REMOVER MENU MOVIL
const navLink = document.querySelectorAll('.nav__link');


function linkAction() {
    // Activar link
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active')

    //Ocultar menu movil
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction)); 