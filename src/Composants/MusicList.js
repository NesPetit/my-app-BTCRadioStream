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
            test:''
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
    
    render() {

    
        return(
            <div>
                 <header className="App-header">
                 {this.state.test}
                 </header>
            </div>
            
        )
    }
}