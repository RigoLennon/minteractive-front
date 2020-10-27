import React, {Component} from 'react';

export default class Child extends Component{

    render(){
        return this.props.dataProducts.map((product, id)=>{
            return(
                <ul key={id}>
                    <li>{product.name}</li>
                </ul>
            )
        })
    }
}