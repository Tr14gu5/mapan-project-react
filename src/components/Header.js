import React, { Component } from 'react';
import '../support/css/style.css';
import '../support/css/components/stylewallpaper.css';
//import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';
//import { onLogOut } from '../actions';

class Header extends Component  {
    render = () => {
        return (
            <div className="nav-menu fixed-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="navbar navbar-dark navbar-expand-lg">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                                <div className="collapse navbar-collapse" id="navbar">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item"> <a className="nav-link active" href="/home">HOME <span class="sr-only">(current)</span></a> </li>
                                        <li className="nav-item"> <a className="nav-link" href="/personal">PERSONAL</a> </li>
                                        <li className="nav-item"> <a className="nav-link" href="/umkm">UMKM</a> </li>
                                        <li className="nav-item"> <a className="nav-link" href="/coorporate">COORPORATE</a> </li>
                                        <li className="nav-item"> <a className="nav-link" href="/product">PRODUCT</a> </li>
                                        <li className="nav-item"> <a className="nav-link" href="/contact">CONTACT</a> </li>
                                        <li className="nav-item"><a href="" className="btn btn-outline-light my-3 my-sm-0 ml-lg-3">Download Event</a></li>
                                        <li className="nav-item"><a href="" className="btn btn-outline-light my-3 my-sm-0 ml-lg-3">Download E-Book</a></li>
                                
                                                                          
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
            
        
export default Header;