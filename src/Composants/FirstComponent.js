import React, { Component } from 'react';
import fire from '../config/fire';
import axios from 'axios';
import ReactPlayer from "react-player"

class FirstComponent extends Component {

    constructor(){
        super();
        this.state = { 
            play: false,
            pause: true,
            musique: 'Play'
        }
        this.url = "http://88.140.197.167/radio/8000/radio.mp3";
        this.audio = new Audio(this.url);
    }

    lecture = () => {
        this.setState({
            musique : 'Arreter la musique' 
        });
    }

    play = () => {
        this.setState({ play: true, pause: false, musique: 'Pause' })
          this.audio.play();
        }

    pause = () => {
        this.setState({ play: false, pause: true, musique: 'Play' })
            this.audio.pause();
        }

    change_status()
    {
        if(this.state.musique === 'Pause')
        {
            return this.pause
        }
        else
        {
            return this.play
        }
    }

    logout= () =>{
        fire.auth().signOut();
    }


    render(){
        return(
            <React.Fragment>

                <p> Ma plateforme de streaming musical en p2p ! ;) </p>
                <br/>
                <button onClick = {this.change_status()} > <h1> {this.state.musique} </h1> </button>
                <br/><br/>
                <p>Que souhaites-tu écouter ? </p>
                <input type ="text" name="musics"/>
                 <button>Entrer</button>
                 <br/><br/> 
                
                
                <button onClick={this.logout}>Deconnexion</button>
                
            </React.Fragment>
            
        )
    }
}
 
export default FirstComponent;