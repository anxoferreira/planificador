import { formatearFecha } from "./utils"
import { describe , it, expect} from "vitest"

describe("formatear fecha", () => {
    it("formatea correctamente la fecha", () => {
        const fecha = new Date("2026-09-01T10:30:00")
        const fechaFormateada = formatearFecha(fecha)
        expect(fechaFormateada).toBe("01/09/2026 10:30")
    })
})