import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assignment.css';
class Circle extends Component
{      state={
        }
        render(){
        return(
            <div className="container-fill border-danger m-0 p-0">
                <img className="" src="./GroupData/circle.png"/>
                <img className="sticky2" src="./GroupData/edit.png" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"/>
                <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body small">
                        ...
                    </div>
                </div>
            </div>
        )
    }

}export default Circle;                 
                    
                    