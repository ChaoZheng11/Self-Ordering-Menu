import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import Cart from './Cart';


class Home extends Component {

    constructor(props){
        super(props);
        this.state={
            list:[],
            W:'LLLLLLL'
        }
    }

    getData=()=>{
        

        const axios = require("axios");

        //menu.json is in public file
        axios.get('food.json')
        .then((response)=> {
          // handle success
          

          this.setState({
              list:response.data.result
          })
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
       

    }

    componentDidMount(){
        this.getData();
    }
    render() {
        return (
            
            <div className="home">

                {
                    this.state.list.map((value,key)=>{
                        return (
                            <div className="list" key={key}>
                                <h1>{value.title}</h1>
                                <ul className="item">
                                    {
                                        value.list.map((v,i)=>{
                                            return (
                                                <li key={i}>
                                                    <Link to={`/products/${v.id}`}>
                                                        <img src={v.img_url} alt=""/>
                                                        <p>{v.title}</p>
                                                        <p>{v.price}</p>
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>

                                

                            </div>
                        )
                    })
                }

            <footer className="pfooter">
                  <Cart tt={this.state.W} home={this}></Cart>      
                 
                
            </footer>
            </div>

            
        );
    }
}

export default Home;