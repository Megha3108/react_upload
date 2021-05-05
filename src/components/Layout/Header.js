import React, { Component } from 'react';
import Navigation from './Navigation';

class Header extends Component{
    render(){
        return(
            <div className = "header">
                <div>
                    <h1 className = "title">Phone Book Application</h1>
                </div>
            </div>
            
        );
    }
}
export default Header;