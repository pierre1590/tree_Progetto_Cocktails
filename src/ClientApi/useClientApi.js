import { useState } from 'react'
import axios from 'axios'

function useClientApi(){

  const  [loading, setLoading] = useState(true)
  const  [data, setData] = useState()
  const  [error, setError] = useState()

  const FetchData = async (name) => {
       
    try{
        setLoading(true)
        // setLoading(true)
        const result = await axios({
          baseURL: "https://www.thecocktaildb.com/api",
          url: "json/v1/1/search.php",
          method: "GET",
          headers:{
              Accept: "*/*",
          },
          params:{
              f: name,
          },
        })
  
        setData(result.data.drinks)
        console.log(result.data.drinks)
        return result.data.drinks
  
      }catch(e){  
        console.log(e) 
        setError(e)   
        throw e;
  
      }finally{
        setLoading(false)
      }

  }
  // const obj = {
  //   fetchDrink,
  //   loading,
  //   data,
  //   error
  // }

  // return obj

  return {
    FetchData,
    loading,
    data,
    error
  }


}
export default useClientApi