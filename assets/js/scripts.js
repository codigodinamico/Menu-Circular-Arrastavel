//obtendo elementos HTML
const nav = document.querySelector("nav"),
    toggleBtn = nav.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () =>{
    toggleBtn.classList.toggle('active');
});

//código js para tornar a navegação arrastável
function onDrag({movementY}) { //o moviment obtém o valor vertical do mouse
    const navStyle = window.getComputedStyle(nav), //obtendo todo o estilo css de navegação 
        navTop = parseInt(navStyle.top), //obtendo o valor superior da navegação e convertendo-o em string
        navHeight = parseInt(navStyle.height), //obtendo o valor da altura de navegação e convertendo-o em string
        windHeight = window.innerHeight; //obtendo altura da janela

    nav.style.top = navTop > 0 ? `${navTop + movementY}px` : "1px";
    if(navTop > windHeight - navHeight){
        nav.style.top = `${windHeight - navHeight}px`;
    }
};

//esta função será chamada quando o usuário clicar no botão do mouse e mover o mouse na navegação
nav.addEventListener("mousedown", () =>{
    nav.addEventListener("mousemove", onDrag);
});

//essa função chamará o botão de mouse de liberação do usuário e deixará o mouse da navegação
nav.addEventListener("mouseup", () =>{
    nav.removeEventListener("mousemove", onDrag);
});
nav.addEventListener("mouseleave", () =>{
    nav.removeEventListener("mousemove", onDrag);
});


