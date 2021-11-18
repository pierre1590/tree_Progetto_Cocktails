import  './CocktailCard.css'
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core'

const CocktailCard = (props) => {
   
    return (
        <div className="cocktail-container">
            <h1 className="title">Cocktail</h1>
            <p className="cocktail-type">{props.drink.strDrink}</p>
            <img className="cocktail-img" src={props.drink.strDrinkThumb} alt="cocktail"/>
            <Link to={`/cocktail/${props.drink.idDrink}`}><Button >More info...</Button></Link>
        </div>
    )
}

export default CocktailCard;