/**
 * This file will hold the format in which items will be displayed in the search results
 * 
 */
import React from 'react';

class Item extends React.Component {
     /**
     * Main constructor for the Item Class
     * @memberof Item
     */
    constructor(props) {
        super(props);
        this.state = {
            product: props.product
        };
    }

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof App
    */
   render() {
        return (
                <div className="result-item">
                    <table>
                        <tbody>
                            <tr>
                                <td rowSpan="4">
                                    <img src={this.state.product.picture}></img>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><b>{this.state.product.name.toUpperCase()}</b></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>{this.state.product.about.substring(0, this.state.product.about.indexOf('.'))}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h1>${this.state.product.price}</h1><img src="/img/cart.png" className="addCart" title="Add to Cart"></img>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        );
   }
}

// Export out the React Component
module.exports = Item;