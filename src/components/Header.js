import React from 'react'

const Header = ({keywords, removeKeywords, clearAll}) => {
    return (
       <div className="header-container">
            <ul>
                {
                    keywords.map((key,id) => {
                        return (
                            <li key={id}>
                                {key}
                                <button onClick={() => removeKeywords(key)}>
                                    <img src= {require('./images/icon-remove.svg')} alt="" />
                                </button>
                            </li>
                        )
                    })
                }
                <a href="#" onClick={() => clearAll()}>Clear</a>
            </ul>
       </div>
    )
}

export default Header
