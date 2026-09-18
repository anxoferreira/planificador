//importar la libreria dayjs
import dayjs from "dayjs"

//importar el archivo de estilos
import "./styles.css"


//boton referenciado por id
const boton = document.getElementById("anadir")
//cuadro del texto referenciado por id
const input = document.getElementById("texto")
//lista referenciada por id
const lista = document.getElementById("lista")

//poner el boton a la escucha del evento click y que ejecute la funcion guardarPlan
boton.addEventListener("click", guardarPlan)

//funcion que guarda el plan en localStorage
function guardarPlan() {
    const fechaHoy = dayjs().format("DD/MM/YYYY HH:mm")
    const li = document.createElement("li")
    li.textContent = input.value + " - " + fechaHoy
    lista.appendChild(li)
    input.value = ""
}