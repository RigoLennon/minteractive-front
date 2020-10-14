import React, {Component} from 'react';

//import Child from './testing/Child'; //Testing
import ListProducts from './ListProducts';
import MainAppBar from './AppBar';

export default class MainPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            products: []
        };
        this.getProd = this.getProd.bind(this);
    }

    componentDidMount() {
        this.getProd()
    }

    getProd(){
        fetch('http://mas.diagonal-software.com/api/products/')
        .then(res => res.json())
        .then((data) => {
            this.setState({products:data});
        });
    }

    render(){
        //var data = this.state.products;
        //console.log(this.state.products)

        return(
            <div>
                {/*<Child dataProducts = {this.state.products} />*/}
                <MainAppBar />
                <ListProducts dataProducts = {this.state.products} />
            </div>
        )

        /*return data.map((product,id)=>{
            return(
                <div>
                    <ul key={product.id}>
                        <li>{product.name}</li>
                    </ul>
                </div>
            )
        })*/
        
        /*return this.state.products.map((product, id) => {
            return(
                <div>
                    {<ul key={id}>
                        <li>{product.name}</li>
                    </ul>}
                </div>
            )
        });*/
    }
}