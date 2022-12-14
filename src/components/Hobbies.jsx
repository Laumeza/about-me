const sayHi = () =>{
    alert ("Hello World")
}

const Hobbies = () => {
    return (
        <div className="card">
            <h2 className="tittle">Mis Pasatiempos</h2>
            <ul className='list'>
                <li>Viajar</li>
                <li>Fotografía</li>
                <li>Hacer Ejercicio</li>
            </ul>
            <button onClick={sayHi}> Say Hi!</button>
        </div>
    )
}

export default Hobbies