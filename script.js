let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloseleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioseleccionado = document.getElementById("precio");

//funcion que carga la info del item seleccionado
function cargar(item) {
    quitarbordes();
    mostrador.style.width = "60%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid red";

    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

    modeloseleccionado.innerHTML = item.getElementsByTagName("p")[0].innerHTML;



    precioseleccionado.innerHTML = item.getElementsByTagName("span")[0].innerHTML
}
function quitarbordes() {
    var items = document.getElementsByClassName("item");
    for (i = 0; i < items.length; i++) {
        items[i].style.border = "none"
    }
}

function cerrar() {
    mostrador.style.width = "100%";
    seleccion.style.width = "0";
    seleccion.style.opacity = "0";
    quitarbordes();
}
document.addEventListener('keyup', e => {
    if (e.target.matches('#buscador')) {
        document.querySelectorAll('.contenedor-foto').forEach(pape => {
            pape.textContent.toLocaleLowerCase().includes(e.target.value)
                ? pape.classList.remove('filtro')
                : pape.classList.add('filtro');
        })
    }
})
document.addEventListener('keyup', e => {
    if (e.target.matches('#buscador')) {
        document.querySelectorAll('.serie').forEach(pape => {
            pape.textContent.toLocaleLowerCase().includes(e.target.value)
                ? pape.classList.remove('filtro')
                : pape.classList.add('filtro');
        })
    }
})
document.addEventListener('keyup', e => {
    if (e.target.matches('#buscador')) {
        document.querySelectorAll('.descripcion').forEach(pape => {
            pape.textContent.toLocaleLowerCase().includes(e.target.value)
                ? pape.classList.remove('filtro')
                : pape.classList.add('filtro');
        })
    }
})
document.addEventListener('keyup', e => {
    if (e.target.matches('#buscador')) {
        document.querySelectorAll('.precio').forEach(pape => {
            pape.textContent.toLocaleLowerCase().includes(e.target.value)
                ? pape.classList.remove('filtro')
                : pape.classList.add('filtro');
        })
    }
})