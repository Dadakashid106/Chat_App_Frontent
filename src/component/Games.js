import React from 'react'
import '../../src/component/Games.css'

export default function Games() {
    return (
        <>
            <div className="container">
                <div className="top">
                    <p className='start'>
                        During the downtime can be used and space to display restaurant items
                        /social engagaement <br /> ineractive games that tie to loyalty.
                    </p>
                </div>
                <div className="bottom">
                    <div>
                        <button className='first-button'>Order Something else / push dessert</button>
                    </div>
                    <div>
                        <button className='first-button'>Drink Refill</button>
                    </div>
                </div>
            </div>
        </>
    )
}
