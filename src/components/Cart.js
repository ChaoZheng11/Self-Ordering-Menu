import React, { Component } from 'react';

import arr from 'querystring'
import Details from './Details';
import storage from './Localstorge';


class Cart extends Component {

    constructor(props){
        super(props);
        this.state={
            
            newdiv:'33332222222222222222222222',
            list: []


        };

    }

    getData=()=>{
        this.setState({
            list: this.props.all
        })
    }


    parsedata=()=>{
        var data=storage.get('list')
        

        
        
    }





    componentDidMount(){
        

        this.parsedata()
    }

    

    
    
    
    
    render() {

          
        



        return (

            
            <div>

                

                

                
            </div>
        );
    }
}

export default Cart;