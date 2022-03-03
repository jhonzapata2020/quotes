import React from 'react'


const Button = ({changeQuote, color}) => {
  return (
    <div>
        <button onClick={changeQuote} style={ {backgroundColor: color}}  >
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width="60" height="60" viewBox="0 0 24 24" stroke="#145476" fill="none">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="9 6 15 12 9 18"/>
            </svg>
        </button>
    </div>
  )
}

export default Button