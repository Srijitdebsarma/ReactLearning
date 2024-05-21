import React, { useState } from 'react';
import './Lottery.css';
import { generateTicket, sum } from './helper';
import Ticket from './Ticket';

function Lottery({n=3,winningSum=15}) {
    let [ticket, setTicket] = useState(generateTicket(n)); //State variable
    let isWinning = sum(ticket) === winningSum; 
    const regenerate = () => {
        setTicket(generateTicket(n));
    };

    return (
        <div>
            <h1 className="centered-div">Lottery Game</h1>
            <div className="ticket">
                <div className="center">
                   <Ticket ticket={ticket}></Ticket>
                </div>
                <button className="buy-ticket-button" onClick={regenerate}>Buy a Ticket</button>
                <h3>{isWinning && "Congratulations, you won!!"}</h3>
            </div>
        </div>
    );
}

export default Lottery;
