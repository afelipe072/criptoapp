import './App.css';
import { useEffect , useState} from 'react';
import axios from 'axios'
import Tabla from './components/Tabla'

function App() {

  const [coins,setCoins]=useState([])

  const [buscar,setBuscar]=useState('')

  const getData = async ()=>{
    const respuesta = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    //console.log(respuesta.data)
    setCoins(respuesta.data)
  }
  
  useEffect(()=>{
    getData()
  },[])


  return (
    <div className="container ">
      <div className='row'>
        <h1 className='text-center mt-2'>ARF CrytoAPP</h1>
        <input 
        type='text' 
        className='mt-4 form-control text-center bg-dark text-light' 
        placeholder='Digita una moneda a buscar...' 
        onChange={(e)=>setBuscar(e.target.value)}></input>
        <Tabla  coins={coins} buscar={buscar}/>

      </div>    
    </div>
  );
}

export default App;
