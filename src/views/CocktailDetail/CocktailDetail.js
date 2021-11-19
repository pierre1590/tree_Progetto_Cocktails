import React, {useState,useEffect} from "react";
import axios from "axios";
import {Link,useParams} from 'react-router-dom';
import './CocktailDetail.css';
import {Button} from '@material-ui/core'
import Footer from '../../components/Footer/Footer'

const DrinkDetail = () => {

    const {idDrink} = useParams();
    const [cocktail, setCocktail] = useState('');

   //Request to API 
   useEffect(()=> {
    console.log(idDrink);
    const FetchCocktail = async () => {
        try {
            const result = await axios.get(
                'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+idDrink
            );
            console.log(result.data);
            setCocktail(result.data);
        }
        catch (error){
            console.log(error);
        }
    };
    //Call the API
    FetchCocktail();
},[idDrink]);

return <div>
       
            {cocktail && (
                <div >
                
                    <div className="container-drink">
                    <Link to="/"><Button style={{marginTop:10}}>Home</Button></Link>
                        <h1>{cocktail.drinks[0].strDrink}</h1>
                        <h4>{cocktail.drinks[0].strAlcoholic}   </h4>
                        <img className="img-drink" src={cocktail.drinks[0].strDrinkThumb} alt=""/>
                        <h2>Ingredienti</h2>
                        <ul className="list-ingredients">
                            <li>{cocktail.drinks[0].strIngredient1}</li>
                            <li>{cocktail.drinks[0].strIngredient2}</li>    
                            <li>{cocktail.drinks[0].strIngredient3}</li>
                            <li>{cocktail.drinks[0].strIngredient4}</li>
                            <li>{cocktail.drinks[0].strIngredient5}</li>
                         </ul>
                        <h2>Istruzioni</h2>
                        <p className="Instructions">{cocktail.drinks[0].strInstructionsIT}</p>
                    </div>
                </div> 
            )}
            <Footer className="footer"/>
    </div>                 

}
export default DrinkDetail;