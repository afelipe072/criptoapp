import React from 'react';

const Coin = ({coin,index}) => {
  return  (
      <tr>
          <td>{index+1}</td>
          <td>
              <img
               src={coin.image}  
               className="img-fluid me-4"        
               style={{width:'30px'}}
               />
              
           </td>
          <td>{coin.symbol}</td>
          <td>{coin.name}</td>
          <td>{coin.current_price}</td>
          <td>{coin.total_volume}</td>
      </tr>

  )
};

export default Coin;
