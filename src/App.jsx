import { useState } from 'react'
import './index.css'
import './App.css'
import QueueForm from './components/QueueForm'
import QueueDisplay from './components/QueueDisplay'

function App() {
  const [queue, setQueue] = useState([])

  const addQueqe = (customer) => {
    setQueue([...queue, {...customer, id : Date.now(), status: "pending"}])
  }

  const updateStatus = (id, newStatus) =>{
    setQueue(queue.map((customer)=> 
      customer.id === id ? {...customer, status : newStatus}  : customer))
  }

  const removeCustomer = (id)=>{
    setQueue(queue.filter((customer)=>
      customer.id !== id
    ))
  }

  return (
    <>
      <h1 className='heading'>Queue Managment Form</h1>
      <div className='wrap'>
        <QueueForm addOn={addQueqe} />
        <QueueDisplay 
        queue={queue}
        onUpdateStatus={updateStatus}
        onRemove={removeCustomer}
        />
      </div>
    </>
  )
}

export default App
