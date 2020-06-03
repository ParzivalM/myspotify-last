import React from 'react'
import './HeaderComponent.css'

class HeaderComponent extends React.Component {
    render(){
        return(
            <div>
                <nav className="header">
                    <p>Home</p>
                    <p>Login</p>
                    <p>Categories</p>
                    <p>About</p>
                </nav>
            </div>
        )
    }
}


export default HeaderComponent;