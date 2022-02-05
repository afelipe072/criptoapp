import React from 'react';
import Coin from './Coin'


const title =['#','Image','Symbol','Coin','Price','Volume']

const Tabla = ({coins,buscar}) => {
   
    const filtrado=coins.filter((coin)=>{
        return coin.name.toLowerCase().includes(buscar.toLowerCase())
    })
    
  return (
    <table className='table table-dark table-striped mt-5'>

        <thead>
            <tr>
                {
                    title.map((title,index)=>(
                        <td key={index}>{title}</td>
                    ))
                }
            </tr>

        </thead>

        <tbody>

            {
                filtrado.map((coin,index)=>(
                    <Coin coin={coin} index={index} key={index}/>
                ))
            }
            


        </tbody>


    </table>
  
    )
};

export default Tabla;
