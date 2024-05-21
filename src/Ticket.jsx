import React from 'react'
import TicketNum from './TicketNum';
function Ticket({ticket}) { // ticket = ticket array
  return (
    <div>
        {ticket.map((num,idx)=>(
            <TicketNum num={num} key={idx}></TicketNum>
        ))}
    </div>
  )
}

export default Ticket;
