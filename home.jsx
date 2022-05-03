import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assignment.css';
class Home extends Component
{      state={
        }
        render(){
        return(
            <div className="container-fill">
                <div className="container arrowLoc d-sm-none d-md-none d-lg-none">
                    <div className="row m-0 p-0">
                        <div className="col-6 m-0 p-0">
                            <img className="m-0 p-0" src="./GroupData/arrow_back.svg"/>
                        </div>
                        <div className="col-6 p-0 text_Right">
                            <button className="btn btn-sm pe-2 border text-white">Join Group</button>
                        </div>
                    </div>
                </div>
                <div className="container p-0 rect_img2">
                    <h1 className="fontRec1Hed text-white">
                        Computer Engineering
                    </h1>
                    <p className="fontRec1Para text-white">
                        142,765 Computer Engineers follow this
                    </p>
                </div>
            </div>
        )
    }

}export default Home;