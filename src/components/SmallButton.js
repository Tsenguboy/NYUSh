import React from "react";
import { useState } from "react";

const SmallButton = ({icon, label = '', color = {}, expandable = false}) => {

    const [clicked, setClicked] = useState(false)

    if (expandable) {
        return (
            <div>
                <button className="smallButton" onClick = {() => setClicked(!clicked)} style={{textAlign: 'start'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{display: 'flex'}}>
                            <img src={icon} alt={toString(icon)} style={{padding: '0.5vw'}}/>
                            <div style={{padding: '0.5vw'}}>
                                <span>
                                    {label}
                                </span>
                            </div>
                        </div>
                        <div style={{padding: '0.5vw', justifyContent: 'flex-end'}}>
                            <svg width="9" height="10" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.6875 0.808594C4.51172 0.632812 4.21875 0.632812 4.04297 0.808594L0.234375 4.59766C0.0585938 4.79297 0.0585938 5.08594 0.234375 5.26172L0.683594 5.71094C0.859375 5.88672 1.15234 5.88672 1.34766 5.71094L4.375 2.70312L7.38281 5.71094C7.57812 5.88672 7.87109 5.88672 8.04688 5.71094L8.49609 5.26172C8.67188 5.08594 8.67188 4.79297 8.49609 4.59766L4.6875 0.808594Z"
                                style={{
                                    transition: "transform .5s",
                                    transform: `rotate(${clicked ? 180: 90}deg)`,
                                    transformOrigin: 'center center',
                                }}
                                fill={'black'}
                                />
                            </svg>
                        </div>
                    </div>
                </button>
            </div>
        )
    } else {
        return (
            <div>
                <button className="smallButton" onClick = {() => setClicked(!clicked)} style={{textAlign: 'start'}}>
                    <div style={{display: 'flex'}}>
                        <img src={icon} alt={toString(icon)} style={{padding: '0.5vw'}}/>
                        <div style={{padding: '0.5vw'}}>
                            <span>
                                {label}
                            </span>
                        </div>
                    </div>
                </button>
            </div>
        )
    }

}

export default SmallButton