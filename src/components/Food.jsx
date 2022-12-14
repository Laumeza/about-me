const sayHi = () =>{
    alert ("Hello World")
}

const Food = () => {
    return (
        <div className="card">
            <h2 className="tittle">Mis platos favoritos</h2>
            <ul className='list'>
                <li>Ceviche Peruano</li>
                <li>Carne</li>
                <li>Cazuela Mariscos</li>
            </ul>
            <button onClick={sayHi}> Say Hi!</button>
        </div>
    )
}

export default Food