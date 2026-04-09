import React from 'react'
import "./Charts.css"
import { PieChart , Pie , Cell , Tooltip } from 'recharts'
import { useContext } from 'react'
import { info } from './index'
const Charts = () => {


  const {addtransactions} = useContext(info)

  let totalincome = 0
  let totalexpense = 0
  const colors = ["#00C49F", "#FF4D4F"];
  
  addtransactions.forEach((val)=>{
    if(val.type === "income"){
      totalincome = totalincome + Number(val.amount)
    }

    else{
      totalexpense = totalexpense + Number(val.amount)
    }
  })
let data
  if(totalincome === 0 && totalexpense === 0){
     data = [
      {name: "Income" , value: 1},
      {name: "Expense" , value: 1} 
    ]
  }
  
  else{

   data = [
      {name: "Income" , value: totalincome } ,
      {name: "Expense" , value: totalexpense}
    ]
    
  }



  
  return (
    <div className="charts">
      <div className="name">
        <p id='inc'>🟢 Income</p>
        <p id='exp'>🔴 Expense</p>
         
      </div> {/* name div */}
      
   <PieChart id='piechart'  width={490} height={350}>
    <Pie data={data} dataKey="value" outerRadius={135}>
{data.map((entry , index)=>(
<Cell key={index} fill={colors[index]}></Cell>

  
))}
    </Pie>
<Tooltip/>
   </PieChart>
  </div>

  )
}

export default Charts










