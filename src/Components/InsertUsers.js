import React from 'react'
import { useState } from 'react'
import Button from './Button'
import Card from './Card'
import Input from './Input'
import styles from './insertUsers.module.css'
import useFormulario from './useFormulario'

const InsertUsers = () => {
    const [formulario, hundleChange, restaurar] = useFormulario({
        name: '',
        lastname: '',
        email: ''
    })

    const [usuarios, setUsuarios] = useState([]) 
    const submit = (e) => {
        e.preventDefault();

        const Nombre = /^[a-z ,.'-]+$/i;
        const Correo =  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

        const noExiste = (usuarios.some(u => (u.name === formulario.name && u.lastname === formulario.lastname && u.email === formulario.email)))

        //console.log(e.target.children[0].children[1].focus())

        if(Correo.test(formulario.email) && Nombre.test(formulario.name) && Nombre.test(formulario.lastname) && !noExiste){
            //let usuarioIngresado = formulario.split()
            //console.log(usuarioIngresado)
            setUsuarios([
                ...usuarios,
                formulario,
            ])
            restaurar()
        }else{
            let mensaje = []
            //console.log(formulario.email)
            if(!Correo.test(formulario.email)){
                mensaje.push("El correo esta mal ")
                e.target.children[2].children[1].focus()
            }
            if(!Nombre.test(formulario.name)){
                mensaje.push("El nombre esta mal ")
                e.target.children[0].children[1].focus()
            }
            if(!Nombre.test(formulario.lastname)){
                mensaje.push("El apellido esta mal ")
                e.target.children[1].children[1].focus()
            }
            if(noExiste){
                mensaje.push("El usuario que quieres ingresar ya esta ingresado ")
            }
            alert(mensaje)
        }

        
    }

    //console.log(usuarios, "ERROR")
    return (
        <div className={styles.contenedor}>
            <form onSubmit={submit}>
                <Input label="Name" name="name" value={formulario.name} onChange={hundleChange}/>
                <Input label="Lastname" name="lastname" value={formulario.lastname} onChange={hundleChange}/>
                <Input label="Email Address" name="email" value={formulario.email} onChange={hundleChange}/>
                <Button>Send</Button>
            </form>
            <div className={styles.view}>
                {
                    usuarios.map((user, index) => 
                        <Card key={index} nombre={user.name} apellido={user.lastname} mail={user.email}/>)
                }
            </div>
        </div>
    )
}

export default InsertUsers
