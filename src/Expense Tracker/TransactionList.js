import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction';


const TransactionList = () => {
  //  const context = useContext(GlobalContext);
  const { transactions} = useContext(GlobalContext);

  //  console.log(context);--- to see our transactions list


  return (
    <div className='container'>

      <h3>History</h3>

      <ul className='list'>

        {transactions.map(transaction =>(
        //    <li className='minus'>
        //    {Transaction.text}
        //    <span>-$400</span>
 
        //    <button
        //      className='delete-btn'>
        //      x
        //    </button>
        //  </li>
        <Transaction key={transaction.id} transaction={transaction} />
        ))}

      </ul>

    </div>
  )
}

export default TransactionList
