
import './App.css';
import { BrowserRouter as Router,Route } from "react-router-dom";
import {Container} from 'react-bootstrap'; 

import Homepage from "./pages/Homepage";
import PokemonPages from "./pages/PokemonPages";

import Header from "./components/Header";


// const url ='https://pokeapi.co/api/v2/pokemon/ditto';
//DA DEBUGGARE
const App = () => {
  return (

     <Router>
       <Header/>
           <Container>
              <Route exact path='/' component={Homepage}/>
              <Route path='/pokemon/:id' component={PokemonPages}/>
          </Container>  
     </Router>
   
  );
}

export default App;
