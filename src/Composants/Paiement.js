import React, { Component } from 'react';
import '../App.css';
import fire from '../config/fire';
import axios from 'axios';

const btcpay = require('btcpay')
//const keypair = btcpay.crypto.load_keypair('BN { negative: 0, words: [66839803, 50203804, 66633053, 35286205, 48582956, 43667733, 3955427, 12262438, 36021718, 884618, 0], length: 10, red: null },', 'hex')
//const client = new btcpay.BTCPayClient('https://btcpay.henril.eu/', keypair, {merchant: "HLzzQvQX4hTWMCTLhGgEnG7gcc2L6DhyRN9nEckL8bRc"})

const keypair = btcpay.crypto.load_keypair('BN { negative: 0, words: [40976936, 54911970, 15283137, 7965087, 10027032, 15598902, 14730883, 37542828, 60569923, 14749, 0], length: 10, red: null },', 'hex')
const client = new btcpay.BTCPayClient('https://testnet.demo.btcpayserver.org/', keypair, {merchant: "2voS9U1vSNFBxEVQbZz1rsKx45AY64NqzS33aPgX4aPV"})


/*client.get_rates(['BTC_USD'], 'ELmpqY2eArWCBf9y6GM8vihxBFRHYrDFpAdmKASa7i7c')
  .then(rates => console.log(rates))
  .catch(err => console.log(err))

*/
const invoices = []

class Paiement extends Component {

    logout= () =>{
        fire.auth().signOut();
    }

    constructor(props){
        super(props);

        this.state={
            test:'',
            amount:'',
            music_name:'',
            inv:''
        }
    }
    componentDidMount(){
        axios.get('https://blockchain.info/tobtc?currency=EUR&value=1')
        .then(reponse=>{
            this.setState({
                test:reponse.data
            })
        })
    }

    handle(event)
    {
        this.setState({
            amount:event.target.value,
            music_name:event.target.value
        })
    }

    create_invoice()
    {
        console.log(this.state.amount)
        if(this.state.amount !== "")
        {
            var invoice = ""
            var amount = Number(this.state.amount)
            if(amount > 0)
            {
                invoice = client.create_invoice({price: amount, currency: 'USD'})
                .then(invoice => {
                    window.open(invoice.url)
                    this.setState({inv: Number(invoice.id)})
                    return invoice.id
                })
                .catch(err => console.log(err))
            }
        }
    }

    get_invoice()
    {
        client.get_invoice(invoices[0])
        .then(invoice => console.log(invoice.status))
        .catch(err => console.log(err))
    }


    render(){
        return(
            <React.Fragment>
                 <header className="App-header">
                    <h1> Plateforme de paiement </h1>
                    <br/>
                    <p> Gérer mon portefeuille </p>
                    <h3 color = "rgb(0,255,0)" >1btc({1*this.state.test}€)</h3  >
                    <br/>
                    <p>Entrer le nom de la musique</p>
                    <input type ="text" onChange={this.handle.bind(this)} text-align="right"/>
                    <p>Entrer un montant</p>
                    <input type ="text" onChange={this.handle.bind(this)} text-align="right"/>
                    <button onClick={() => this.create_invoice()}>Ajouter des fonds</button>
                    <br/>
                    <br/><br/> 
                    
                    
                    <button onClick={this.logout}>Deconnexion</button>
                    <br/>
                </header>
            </React.Fragment>
            
        )
    }
}
 
export default Paiement;