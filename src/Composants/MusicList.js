import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';


export default class ListMusic extends Component {
   /*  App(){
        const[data, setData] = useState([]);

        useEffect(() => {
            const fetchData = async () => {
                const result = await axios('https://www.azuracast.com/api/index.html#/',);

                setData(result.data);
            };
            fetchData();
        }, [])
    } */
    constructor(props){
        super(props);
        this.state={
            test:'',
            nowplaying:'',
            nextplaying:'',
            list_music: ''
        }
    }
    componentDidMount(){
        axios.get('https://blockchain.info/tobtc?currency=EUR&value=1')
        .then(reponse=>{
            this.setState({
                test:reponse.data
            })
        })

        axios.get('http://88.140.197.167/api/nowplaying')
        .then(response => {
            this.setState({
                nowplaying:response.data["0"].now_playing.song.text,
                nextplaying:response.data["0"].playing_next.song.text
            })
        })
        .catch((error) => {
            console.error(error);
        })
    }

    
    render() {

    
        return(
            <div>
                <header className="App-header">
                <h1>Musique en cours</h1>
                <p>{this.state.nowplaying}</p>
                <h3>Musique suivante</h3>
                <p>{this.state.nextplaying}</p>
                <br></br>
                <br></br>
                <br></br>

                 </header>
            </div>
            
        )
    }
}