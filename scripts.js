const formulario = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")



function  mostrarFormulario () {
    formulario.style.left = "50%"
    formulario.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function esconderFormulario ()  {
    formulario.style.left = "-300px"
    mascara.style.visibility = "hidden"
}


