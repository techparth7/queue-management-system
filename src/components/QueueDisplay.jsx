import React from 'react'

function QueueDisplay({queue , onUpdateStatus, onRemove}) {
    const getStatusColor = (status) =>{
        switch(status){
            case "pending" :
                return "var(--pending)";
            case "accepted" :
                return "var(--accepted)";
            case "done" :
                return "var(--done)";
            default:
                return "white";
        }
    }
  return (
    <div className='display-wrap'>
        <h3 className='display-heading'>Current Queue</h3>
        {queue.length === 0 ? (<p>No queue</p>) : (
            <div className='info-boxes'>
                {queue.map((customer)=>(
                    <div key={customer.id} className='info-box'>
                        <div className='info-list'>
                            <h3>{customer.name}</h3>
                            <p>{customer.services}</p>
                            <p 
                            style={{color : getStatusColor(customer.status)}}
                            >{customer.status}</p>
                        </div>
                        <div className='action-btn'>
                            {customer.status === "pending" && (
                                <p
                                onClick={() => onUpdateStatus(customer.id, "accepted")}
                                >Accept</p>
                            )}
                            {customer.status === "accepted" && (
                                <p
                                onClick={() => onUpdateStatus(customer.id, "done")}
                                >Done</p>
                            )}
                        </div>
                        <button className='submit-btn'
                        onClick={()=>onRemove(customer.id)}
                        >remove</button>
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}

export default QueueDisplay