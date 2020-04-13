import React, { Component } from 'react';
import fire from '../config/fire';
import axios from 'axios';

class FirstComponent extends Component {

    constructor(){
        super();
        this.state = { 

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
                <br/><br/>
                <iframe title= "myFrame" class= "frame" src="http://88.140.197.167/public/radio_bitcoin/embed" frameborder="0" allowtransparency="true" ></iframe>
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