import { useEffect, useState } from 'react'
import Header from './components/Header'
import Cards from './components/Cards'
import Charts from './components/Charts'
import Add from './components/Add'
import History from './components/History'
import './App.css'
import {info} from './components'



// this is one object isnide it there are many content
function App() {
     const [addtransaction, setaddtransaction] = useState({
          type: "income",
          title: "",
          amount: "",
          date: ""
      })  
      // cause inside his there is a function so we have to return as like initial value
  const [addtransactions, setaddtransactions] = useState(()=>{
    const saved = localStorage.getItem("transactions")
    // saved is null on first render
    if(saved){
      return JSON.parse(saved)
    }
    else{
      return []
    }
  })
  
  // only run when refresh
// on first render like first useeffect will run and it will check if transactions key exist or not so obviouly not yet so it returns null  ok then second one will run and now addtransactions is an empty array initial ok so then afterwards when we refresh so now saved is empty array and it is valid in js
// the saved local storage is hsown after refresh only and that too update them in state 

  useEffect(() => {
    
      localStorage.setItem("transactions" , JSON.stringify(addtransactions))

  }, [addtransactions])
  



  return (
    <>
    <info.Provider  value={{addtransactions , setaddtransactions , addtransaction , setaddtransaction}}>

<Header/>
<div className="parent-container">
<div className="add-process">
<Add/>
</div> {/* add process div */}
<div className="summarized-parent">
<Cards/>
<Charts/>
</div> {/* summarized projects div */}
</div> {/* parent container div */}
<History/>

    </info.Provider>

    </>
  )
}

export default App