import './Home.css'
import TextField from '../../components/TextField/TextField';
import { Formik, Field, Form } from 'formik';
import { Button } from '@material-ui/core'
import useClientApi from '../../ClientApi/useClientApi';
import CocktailCard from '../../components/CocktailCard/CocktailCard';

export default function Home(){

  const ClientApi = useClientApi()

  const onSubmit = (values)=>{
    ClientApi.FetchData(values.name)
  }

    return <div className="home-bd">
      <header className="home-head">
        <h1>The Cocktail DB Search Engine</h1>
      </header>
      <main className="home-main">         
          <Formik
            initialValues={{ }} 
            onSubmit={onSubmit} 
          >
                  <Form
                  style={
                    {display: "flex", flexDirection: "column",
                      width: "300px", gap: "0.5em", padding: "2em", 
                      color: "black", backgroundColor: "white", borderRadius: "6px",marginBottom:35}
                    }        
                  >  
                  <TextField name="name" type="text" label="Name" />
                  <Button type="submit">Submit</Button>
                  </Form>
                  
                </Formik>
        <div>
            List
        </div>
        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',flexGrow:'grow'}}>
            {ClientApi.data?.map((drink, index)=>{
              return<CocktailCard drink={drink} index={index}/>
            })}
        </div>
      </main>
  </div>

}
