import React from 'react'

import './style/button.scss'

export default function Button(props) {
    return (
        <div className="Button">
            <a href={props.destino} >
                { props.children }
             </a>
        </div >
        
    )
}