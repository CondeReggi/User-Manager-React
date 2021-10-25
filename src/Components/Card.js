import React from 'react'
import styles from './Card.module.css'

const Card = ({ nombre, apellido, mail }) => {
    const fecha = new Date();

    return (
        <div className={styles.Card}>
            <div>
                <p>{nombre} {apellido}</p>
                <span>{mail} - {fecha.getDate()}/{fecha.getMonth() + 1}/{fecha.getFullYear()}</span>
            </div>
        </div>
    )
}

export default Card
