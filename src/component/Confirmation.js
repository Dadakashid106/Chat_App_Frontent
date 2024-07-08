import React from 'react';
import '../component/Confirmation.css';
import star from '../asserts/star.svg'
import newstar from '../asserts/newstar.svg'

export default function Confirmation() {
    return (
        <>
            <div className="container">
                <div className="top">
                    <p className='start'>
                        Your order has been whisked of f to the kitchen. while our chefs work their magic, sit back and relax and awaken me to let me know if there's anything else I can assists you with we'll have your meal ready in a blink!
                    </p>
                </div>
                <div className='card'>
                    <span className='star'>Selected Stars</span>
                    <div className='star-container'>
                        <img src={star} className="App-logo" alt="logo" />
                        <img src={star} className="App-logo" alt="logo" />
                        <img src={star} className="App-logo" alt="logo" />
                        <img src={newstar} className="App-logo" alt="logo" />
                        <img src={newstar} className="App-logo" alt="logo" />
                    </div>
                    <div className='third-container'>
                        <span className='star-new'>Subject</span>
                    </div>
                    <input type="text" className='input-text' />
                    <div>
                        <span className='star-new'>Comments</span>
                    </div>
                    <textarea className='input-textarea'></textarea>
                    <button>Submit</button>
                </div>
            </div>
        </>
    )
}
