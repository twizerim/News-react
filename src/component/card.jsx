

function Cards(props){
    return (
        <div className="card">
                <img src={props.photo} alt="card" />
                <h2>{props.name}</h2>
                <p>{props.destinate}</p>
                <div className="btnn">
                    <button>Andi makura ...</button>
                </div>
        </div>
    )
}
export default Cards