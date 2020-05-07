import React from 'react';
import { withRouter } from 'react-router-dom';
import {faMusic} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./Category.css"

class Category extends React.Component {

    componentDidMount() {
        console.log(this.props);
    }

    render() {

        // let categoryId;
        // if (this.props.match !== null) {
        //     categoryId = this.props.match.params.id;
        // } else {
        //     categoryId = 'Unknown';
        // }

        const categoryId = this.props.match !== null ? this.props.match.params.id : 'Unknown';

        return (
            <div className=".icon">
                <FontAwesomeIcon
                    icon={faMusic}/>
                {`Category page for ${ this.props.match !== null ? this.props.match.params.id : 'Unknown' }`}
            </div>
        )
    }
}

export default withRouter(Category);