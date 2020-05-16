import React from "react";
import {withRouter} from "react-router-dom";
import Player from "../componente/Player";
import {checkAndReturnToken} from "../componente/utile.js";


/*
if (token === null){
    return;
}
*/



class  Tracks extends React.Component {
    state = {
        tracks: [],
        currentTrackId: null,
    };

    componentDidMount() {
        const playlistId = this.props.match && this.props.match.params ?
            this.props.match.params.id : null;

        if (playlistId ){
            /*const token = localStorage.getItem('token');
            const parsedToken = JSON.parse(token);*/
            const token = checkAndReturnToken(this.props.history);

            if (token === null){
                return;
            }


            fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=25`, {
                method: `GET`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(result => {
                console.log(result)
                return result.json();
            }).then(data =>{
                const tracks = data.items.map( item => {
                    const track = item.track ||{}
                    return{
                        id: track.id,
                        name: track.name,
                        duration: track.duration_ms ?
                                track.duration_ms/60000 : 0,
                        artists: track.artists ?
                            track.artists.map(artist => {
                             return artist.name;
                                }) :[]

                    }
                });

                this.setState({
                    tracks: tracks
                })
            });


        }
        }
onTrackClikedHandler = (id) =>{
this.setState({
    currentTrackId: id
})
};

    render() {
        const playlistName = this.props.location && this.props.location.state ?
            this.props.location.state.playlistName : 'Default';

        return (
        <div>
               <h1>
                   {playlistName}
               </h1>
            <section>
                {this.state.tracks.map(track => {
                    return (
                        <section
                        onClick={(event)=>{
                            this.onTrackClikedHandler(track.id);
                        }}>
                            <h6>
                                {track.name}
                            </h6>
                            <section>
                                <ul>
                                {track.artists.map( artist =>{
                                    return(
                                        <ol>
                                            {artist}
                                        </ol>
                                    )
                                })
                                }
                                </ul>
                            </section>
                            <p>
                            {track.duration.toFixed(2)}
                            </p>
                        </section>
                    )
                })}
            </section>
            <aside>
                <Player
                 trackId = {this.state.currentTrackId}
                />
            </aside>
        </div>
        )
    }

}

export default Tracks;