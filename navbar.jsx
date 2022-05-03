import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assignment.css';
class Navbar extends Component
{      state={
        }
        render(){
        return(
            <nav className="navbar navbar-expand-sm navbar-light bg-light navbar1 m-0 p-0">
                <div className="d-none d-sm-block">
                        <ul className="nav nav1">
                            <li className="nav-item whole">
                                <a class="navbar-brand" href="#">
                                    <span className="textATG">ATG.</span>
                                    <span className="textWorld">W</span>
                                    <img className="union1" src="./GroupData/Union1.svg" alt="union1" />
                                    <span className="textWorld">RLD</span>
                                </a>
                            </li>
                            <li className="nav-item searchBar">
                                <form className="mt-2 ms-3">
                                        <img src="./GroupData/Vector-1.svg" />
                                        <input className="searchInner border-0 ms-4 p-0" type="search" placeholder="Search for your favorite groups in ATG" aria-label="Search"/>
                                </form>
                            </li>
                            <li className="nav-item createAccount">
                                <a class="navbar-brand" href="#">
                                    <span className="">Create Account.</span>
                                    <span className="text-primary mr-1"><b>It's Free!</b></span>
                                    <span ><img className="ms-1" src="./GroupData/Vector.svg"/></span>
                                </a>
                            </li>
                    </ul>
                </div>
                <div className="navbar-nav ms-auto">
                    <ul className="nav ms-auto col-12 d-sm-none d-md-none d-lg-none hide_Div">
                        <li className="nav-item me-1">
                            <img src="./GroupData/Rectangle.svg"/>
                        </li>
                        <li className="nav-item me-1">
                            <img src="./GroupData/Oval.svg"/>
                        </li>
                        <li className="nav-item me-1">
                            <img src="./GroupData/Vector.svg"/>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

}export default Navbar;