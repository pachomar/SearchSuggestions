/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 * 
 */
import React from 'react';
import Item from './item';

class Menu extends React.Component {

    /**
     * Main constructor for the Menu Class
     * @memberof Menu
     */
    constructor(props) {
        super(props);
        this.state = {
            currentSearch: '',
            showingSearch: false,
            products: props.productList,
            filteredProducts: []
        };
    }

    /**
     * Shows or hides the search container
     * @memberof Menu
     * @param e [Object] - the event from a click handler
     */
    showSearchContainer(e) {
        if(e.target.value.length > 2)
            this.onSearch(e.target.value);

        this.setState({
            currentSearch: e.target.value,
            showingSearch: e.target.value.length > 2
        }); 
    }

    /**
     * Closes the search container
     * @memberof Menu
     * @param e [Object] - the even from a click handler
     */
    closeContainer(e){
        this.setState({
            showingSearch: false
        });
    }

    /**
     * Calls upon search change
     * @memberof Menu
     * @param e [Object] - the event from a text change handler
     */
    onSearch(newSearch) {
        if(this.state.currentSearch != newSearch)
        {
            let filtered = this.state.products.filter(d => d.name.toLowerCase().indexOf(newSearch) > -1);
            this.setState({ 
                filteredProducts: filtered,
                currentSearch: newSearch
            });
        }
    }

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof App
    */
    render() {
        return (
            <header className="menu" style={{height:"80px"}}>
                <div className="menu-container">
                    <div className="menu-holder">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="logo"></td>
                                    <td style={{width:'80%'}}>
                                        <a href="#" className="nav-item">HOLIDAY</a>
                                        <a href="#" className="nav-item">WHAT'S NEW</a>
                                        <a href="#" className="nav-item">PRODUCTS</a>
                                        <a href="#" className="nav-item">BESTSELLERS</a>
                                        <a href="#" className="nav-item">GOODBYES</a>
                                        <a href="#" className="nav-item">STORES</a>
                                        <a href="#" className="nav-item">INSPIRATION</a>
                                    </td>
                                    <td>
                                        <input type="text" className="nav-search" placeholder="SEARCH" name="searchInput"
                                            onKeyUp={(e) => this.showSearchContainer(e)}
                                            onFocus={(e) => this.showSearchContainer(e)}> 
                                        </input>
                                        <i className="material-icons search">search</i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={(this.state.showingSearch ? "showing " : "") + "search-container"}>
                    {
                        this.state.filteredProducts.map(function(prod){
                            return <Item key={prod._id} product={prod}></Item>
                        })
                    }
                    <a href="#" onClick={(e) => this.closeContainer(e)}>
                        <i className="material-icons close">close</i>
                    </a>
                </div>
            </header>
        );
    }
}

// Export out the React Component
module.exports = Menu;