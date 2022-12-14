const sayHi = () =>{
    alert ("Hello World")
}

const FreeTime = () => {
    return (
        <div className="card">
            <h2 className="tittle">En mi tiempo libre</h2>
            <ul className='list'>
                <li>Netflix</li>
                <li>Cine</li>
                <li>Cena</li>
            </ul>
            <button onClick={sayHi}> Say Hi!</button>
        </div>
    )
}

export default FreeTime