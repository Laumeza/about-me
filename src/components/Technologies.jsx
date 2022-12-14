const sayHi = () =>{
    alert ("Hello World")
}

const Technologies = () => {
    return (
        <div className="card">
            <h2 className="tittle">Mis Stack es</h2>
            <ul className='list'>
                <li>HTML</li>
                <li>JavaScript</li>
                <li>CSS</li>
            </ul>
            <button onClick={sayHi}> Say Hi!</button>
        </div>
    )
}

export default Technologies