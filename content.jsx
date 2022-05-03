import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assignment.css';
import { Dropdown } from "react-bootstrap";
class Content extends Component
{      state={
        }
        render(){
            let{onJoin,joinBtn}=this.props;
            return(
            <div className="container-fill">
                <div className="row d-none d-sm-block m-0 p-0 cont1_rect border-bottom">
                    <div className="navbar m-0 p-0">
                        <ul className="nav float_Left m-0 p-0">
                            <li className="nav-item active">All Posts(32)
                            </li>
                            <li className="nav-item ms-3">Article
                            </li>
                            <li className="nav-item ms-3">Event
                            </li>
                            <li className="nav-item ms-3">Education
                            </li>
                            <li className="nav-item ms-3">Jobs
                            </li>
                        </ul>
                        <ul className="nav float_Right m-0 p-0">
                            <li className="nav-item ms-3">
                                <button className="btn btn-light border">Write a Post<img className="ms-2" src="./GroupData/Vector.svg"/></button>
                            </li>
                            <li className="nav-item ms-3">
                                {!joinBtn?
                                    <button className="btn btn-primary border" onClick={()=>onJoin()}><img className="m-0 p-0 me-2" src="./GroupData/joinGroup.png"/>Join Group</button>
                                    :<button className="btn btn-white border" onClick={()=>onJoin()}><img className="m-0 p-0 me-2" src="./GroupData/leaveGroup.png"/>Leave Group</button>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-2 d-sm-none d-md-none d-lg-none rect2">
                    <div className="col-6 p-0  pt-1 m-0 rect3">
                        Posts (368)
                    </div>
                    <div className="col-6 text_Right m-0 p-0">
                        <Dropdown className="m-0 p-0 pe-2">
                            <Dropdown.Toggle className="rect4" variant="light" id="dropdown-basic">
                                Filter All
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Article</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Event</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Education</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Jobs</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        )
    }

}export default Content;