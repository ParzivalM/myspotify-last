import React from 'react'
import './CardCategory.css'
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CardCategory extends React.Component{
    render(){
        return(
            <div className="icon">
                <FontAwesomeIcon
                    icon={faMusic}/>
                <p>{Category}</p>
            </div>
        )
    }
}


export default CardCategory