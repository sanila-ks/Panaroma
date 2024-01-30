
export default function CoffeeItem(props) {
    return (
        <div className="card my-2 card-container">
            <img className="card-img-top d-block img-fluid"
                src={props.details.image}
                alt="..." />
            <div className="card-body card-details text-wrap">
                <h4 className="card-title text-center">{props.details.title}</h4>
                <p className="card-text">{props.details.description}</p>
                <p className="break-word">Ingredients: {props.details.ingredients.toString()}</p>
            </div>
        </div>
    )
}