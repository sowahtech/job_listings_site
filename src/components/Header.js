import React from 'react'

const Header = ({keywords, removeKeywords}) => {
    return (
       <div className="header-container">
           {
               keywords.map((key,id) => {
                   return <li key={id}>{key}
                        <button onClick={() => removeKeywords(key)}>
                            <img src= {require('./images/icon-remove.svg')} alt="" />
                        </button>
                   </li>
               })
           }
       </div>
    )
}

export default Header
