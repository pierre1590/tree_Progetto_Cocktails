import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './views/Home/Home'
import List from './views/List/List'
import PageNotFound from './views/PageNotFound'
import CocktailDetail from './views/CocktailDetail/CocktailDetail'

export default function CustomRoutes(){
    return <Router>
        <Routes>
            <Route path = "/" element ={<Home/>} />
            <Route path = "/List" element ={<List/>} />            
            <Route path = "*" element ={<PageNotFound/>} />
            <Route path = "/cocktail/:idDrink" element ={<CocktailDetail/>}/>
        </Routes>
    </Router>
}

{/* <Route path = "/Single_drink" element ={<Single_drink/>} /> */}