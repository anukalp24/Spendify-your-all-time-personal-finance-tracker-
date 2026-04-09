import React from 'react'
import "./Cards.css"
import { useContext } from 'react'
import { info } from './index'
const Cards = () => {

  const {addtransactions} = useContext(info)

let totalbalance = 0
let totalincome = 0
let totalexpenses = 0

addtransactions.forEach((val)=>{
  if(val.type === "income"){
    totalincome = totalincome + Number(val.amount)
    totalbalance = totalbalance + Number(val.amount)
  }

  else{
    totalexpenses = totalexpenses + Number(val.amount)
    totalbalance = totalbalance - Number(val.amount)
  }
})

function cleaner(num){
  const absnum = Math.abs(num)
  if(absnum >= 1_000_000_000_000_000) return (num/1_000_000_000_000_000.).toFixed(2) + "Q"
  if(absnum >= 1_000_000_000_000) return (num/1_000_000_000_000.).toFixed(2) + "T"
  if(absnum >= 1_000_000_000) return (num/1_000_000_000.).toFixed(2) + "B"
  if(absnum >= 1_000_000) return (num/1_000_000.).toFixed(2) + "M"
  if(absnum >= 1_000) return (num/1_000).toFixed(2) + "K"
  
return num
}



  return (
   
<div>

<div className="summary-content">
 
      <h1 id='heading-2'>Financial Summary</h1>
      <div className="summarized-boxes">
         
    
           <div className="totalbalance">Total Balance
            <p id='symbol'> ${cleaner(totalbalance)}</p>
           </div>
        <div className="totalincome">Total Income
          <p id='symbol'>${cleaner(totalincome)}</p>
        </div>
        <div className="totalexpenses">Total Expenses
          <p id='symbol'>${cleaner(totalexpenses)}</p>
        
        
        </div>
   
  
      </div>
</div> {/* summary contnet div */}
</div> // default div
  )
}

export default Cards













