import React from 'react'
import './HeaderComponent.css'

class HeaderComponent extends React.Component {
    render(){
        return(
            <div>
                <nav className="header">
                    <p>Categories</p>
                    <p>Artists</p>
                    <p>About</p>
                </nav>
            </div>
        )
    }
}


export default HeaderComponent