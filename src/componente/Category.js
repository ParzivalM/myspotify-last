import React from 'react';
import { Link } from 'react-router-dom';
//import { render } from 'react-router-dom';

class Category extends React.Component {

    componentDidMount() {
        console.log(this.props);

        /*const token = localStorage.getItem('token');
        const parsedToken = JSON.parse(token);
        fetch('https://api.spotify.com/v1/browse/categories/{category_id}/playlists', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${parsedToken.token}`
            }
        }).then(result => {
            console.log(result)
            return result.json();
        }).then(data => {
            const category = data.category.items.map(item => {
                return {
                    images: item.images,
                    name: item.name,
                    category_id: item.category_id,
                    description: item.description,
                    /!*url: item.icons && item.icons.length > 0 ?
                        item.icons[0].url : ''*!/
                }
            });

            this.setState({
                category: category
            })
        })*/

    };


    render() {

            /*let categoryId;
            if (this.props.match !== null) {
            categoryId = this.props.match.params.id;
            } else {
            categoryId = 'Unknown';
            }*/

            // const categoryId = this.props.match !== null ? this.props.match.params.id : 'Unknown';
            //
            //
            // return (
            //     <div>
            //         {`Category page for ${ this.props.match !== null ? this.props.match.params.id : 'Unknown' }`}
            //     </div>
            // )

        return (

            <div>
                <Link
                    to={{
                        pathname: `/playlists/${this.props.id}`,
                        state: {
                            categoryName: this.props.name
                        }

                    }}
                >
                    {this.props.name}
                </Link>
            </div>
        )
        /*return this.state.category.map( category => {
            return (
                <div>
                    {this.props.name}
                </div>
            )
        });*/

        }





}


export default (Category);

