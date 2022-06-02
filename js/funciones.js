/*Animaciones*/
window.addEventListener("load", function(){
   AOS.init();
});

/*menú hamburguesa*/

const menuDesplegable = document.getElementsByClassName('menu-hamburguesa')[0]
const navbarSecciones = document.getElementsByClassName('navbar-secciones')[0]

menuDesplegable.addEventListener('click', () => {
  navbarSecciones.classList.toggle('active')
})

/* Nav estático */
window.addEventListener("scroll", function(){
     if(this.pageYOffset > 60){
         document.querySelector(".navbar").classList.add("sticky");
     }
     else{
        document.querySelector(".navbar").classList.remove("sticky");
     }
});


