import { useState } from "react";

const useFormulario = (initial) => {
    const [formulario, setFormulario] = useState(initial)

    const hundleChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        })
    }

    const restaurar = () => {
        setFormulario(initial)
    }

    return [formulario, hundleChange, restaurar]
}

export default useFormulario