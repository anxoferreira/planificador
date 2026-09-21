import dayjs from "dayjs"


function formatearFecha(fecha) {
    const fechaFormateada = dayjs(fecha).format("DD/MM/YYYY HH:mm")
    return fechaFormateada
  }