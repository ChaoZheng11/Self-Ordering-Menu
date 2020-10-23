import React, { Component } from 'react';

import '../assets/css/test.css'
import Cart from './Cart';

import storage from './Localstorge'

class Details extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[],
            count: 0,
            list2:[],

            t:'eeeeee',

            p:'',

            price:''

        };

        this.co=React.createRef();
    }

    getData=()=>{
        var data=require('./menu.json');

        for(var i=0; i<data.result.length;i++){
            var obj=data.result[i]


            for(var j=0; j<obj.list.length;j++){

                var result=obj.list[j]

                var itemid=result.id

                var url=result.img_url

                var p=result.price

                let t=this.props.match.params.id;

                if(t===itemid){

                    this.setState({
                        list:result
                    })

                    this.setState({
                        price: p
                    })

                    
                }
                
            }
            
        }
      

        
    }

    
    add=()=>{
        var i=this.state.count
        this.setState({
            count: i+1
        })
    }

    delete=()=>{
        var i=this.state.count

        if(i>0){
            this.setState({
                count: i-1
            })
        }
        
    }

    onChangeCount=(e)=>{

        this.setState({
            count : e.target.value
        })

    }

    onChangeP(e){
        var number=this.state.count
        var unitp=Number(this.state.price)

        var price= Number(this.state.count)*Number(this.state.price.slice(1))
        this.setState({
            p : price
        })
    }



    addTo=()=>{

        // // console.log(this.props.history.push(this.state.list))

        // let path={

        //     pathname: '/cart',

            
            
        // }

       
        // this.props.history.push(path);

        var number=this.state.count
        var unitp=Number(this.state.price)

        var price= Number(this.state.count)*Number(this.state.price.slice(1))


        this.setState({
            p: String(price)
        })


       
        
    }

    updatedata=()=>{
        var data=storage.get('list')

        this.state.list2.push(this.add)
        

    }

     componentDidMount(){
        this.getData();

        this.addTo()

        
        
    }



    render() {

        storage.set('list',this.state.list)

        // let array=[]

        // array.push(data)


       


       

        return(
            
            <div>
                <img src={this.state.list.img_url} alt=""/>
                <h1>{this.state.list.title}</h1>
                <p>{this.state.price.slice(1)}</p>

                <p>Description</p>{this.state.list.description}

                <input readOnly value={this.state.p} onChange={this.onChangeP}></input>


                <footer className="pfooter">
                        
                <div className="cart">				
                    <strong>数量:</strong>
                    <div className="cart_num">
                        <div className="input_left" onClick={this.delete} onChange={this.onChangeCount.bind(this)}>-</div>
                        <div className="input_center">
                            <input type="number" readOnly value={this.state.count} className="input" onChange={this.onChangeCount.bind()}/>
                        </div>
                        <div className="input_right" onClick={this.add} >+</div>				      
                    </div>								
                        
                </div>


                
            <button className="addcart" >加入购物车</button>	

   	

                
                
            </footer>

            <Cart all={this.state.list} total={this.state.p} details={this}></Cart>


            </div>



                
            
        );
    }
}

export default Details;