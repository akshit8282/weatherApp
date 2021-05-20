import React from 'react'
import natural from '../images/natural.jpg'
import cloud from '../images/cloud11.jpg'
const background=(props)=>{


    return(
        
            <div >
                {props.ok==true?
        <div style={{backgroundImage:`url(${props.back==='natural'?natural:cloud})`}}>
            
            {props.children}
        </div>:
        <div className="bg-danger opacity-0.3">
            {props.children}
        </div>
        }
        </div>
    )
}
export default background;