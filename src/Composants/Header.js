import React, {Component} from 'react';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {item:"none"};  
    }


    componentDidMount(){
        if(localStorage.getItem('connected') === true) {
            this.state.stateConnect = "connecté";
            this.setState = ({item:"navbar-item" })
        }
    }

    render(){
        if(localStorage.getItem('connected') === true) {
            this.state.stateConnect = "connecté";
        }

        return(
                <nav className= "navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0" >
                    <a href="/" className="navbar-brand">Accueil</a>
                    <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                        <a href="/ListMusic" className="nav-link">Liste des stations disponibles</a>
                        </li>
                        <li className="navbar-item">
                        <a href="/Inscription" className="nav-link">Espace Artiste</a>
                        </li>
                        <li className="navbar-item">
                        <a href="/Paiement" className="nav-link">Paiement</a>
                        </li>
                        <li className= {this.state.item} >
                        <a href="./Inscription" className="nav-link"> {this.stateConnect}couv </a>
                        </li>
                    </ul>
                    </div>
                </nav>
        )
    }
}