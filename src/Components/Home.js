import React from 'react'

const estilos = {
    div: {
        fontSize: '3rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(43, 40, 40)',
        color: 'white',
        width: '100%',
        textAlign: 'center',
        height: '100vh'
    }
}

const Home = () => {
    return (
        <div style={estilos.div}>
            <h1>PRESS INSERT TO START</h1>
        </div>
    )
}

export default Home
