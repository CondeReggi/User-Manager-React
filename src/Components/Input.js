import React from 'react'
import styles from './Input.module.css'

const Input = ({ label, ...rest }) => {
    return (
        <div className={styles.caja}>
            <label>
                {label}
            </label>
            <input
                {...rest}
                placeholder={label}
            />
        </div>

    )
}

export default Input
