import React from "react";
import {useState} from "react"

export default function ProgressBarBox({color, fullfilment}) {
    const [style, setStyle] = useState({});

	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${fullfilment}%`,
            backgroundColor: color,
		}
		
		setStyle(newStyle);
	}, 200);

    return( 

        
        <div className="progress">
        <div className="progress-done" style={style}>
            
        </div>
    </div>        
    )
}