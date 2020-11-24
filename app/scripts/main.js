/**
 * The Initial React Setup file
 * ...
 * 
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 * 
 * == JS
 * All files in here start from this init point for the React Components.
 *  
 * 
 * Firstly we need to import the React JS Library
 */
import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/menu';
import Home from './components/home';

import data from '../data/data';

/**
 * We can start our initial App here in the main.js file
 */
class App extends React.Component {

    constructor(){
        super();
        this.state = { 
            products: data.filter(d => d.isActive == "true")
         };
    }

    //componentDidMount(){
    //    this.fetchOptions();
    //}

    fetchOptions(){
        fetch('http://localhost:3035/',{})
        .then((res) => {
            return res.json();
        }).then((json) => {
            this.setState({products: json});
        })
        .catch((error) => {
            console.log(error);
            throw new Error('Failed to load products');
        });
    }

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof App
    */
    render() {
        return (
            <div className="App">
                <Menu productList={this.state.products}/>
                <Home />
            </div>
        );
    }

}

// Render this out
ReactDOM.render(<App />, document.getElementById('root'));
