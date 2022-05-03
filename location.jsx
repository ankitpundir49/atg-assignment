import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assignment.css';
class Location extends Component
{   render()
    {   let{grpData,onFollow}=this.props;
        return(
            <div className="container-fill m-0 p-0 d-none d-sm-block">
                <div className="row m-0 p-0 border-bottom">
                    <div className="col-2 m-0 p-1 ">
                        <img className="locOval" src="./GroupData/location.png" />
                        <img className="locDot" src="./GroupData/dot.png" />
                    </div>
                    <div className="col-8 m-0 p-0">
                        <input className="form-control border-0" type="search" placeholder="Location" aria-label="Search"/>
                    </div> 
                    <div className="col-2 m-0 p-1">
                        <img src="./GroupData/edit.png" />
                    </div> 
                </div>
                <div className="row m-0 p-0">
                    <div className="col-1 m-0 p-1">
                        <img src="./GroupData/error.png" />
                    </div> 
                    <div className="col-11 m-0 p-1 errorFont">
                        <p className="">Your location will help us serve better and extend a personalised experience.</p>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-1 m-0 p-1">
                        <img src="./GroupData/thumbsUp.png" />
                    </div> 
                    <div className="col-11 m-0 p-1 Recmnd">
                        <p className="p-2 ">RECOMMENDED GROUPS</p>
                    </div>
                </div>
                <div className="container-fill">
                    {grpData.map((st,index)=>
                        <div className="row m-0 p-0">
                            <div className="col-3 m-0 p-1">
                                <img src={st.dp} />
                            </div> 
                            <div className="col-6 m-0 p-2  followFont">
                                {st.name}
                            </div>
                            <div className="col-3 m-0 p-1  followFont">
                                {st.follow==="Follow"?
                                    <button className="btn btn-sm btn-light radiusCircle" onClick={()=>onFollow(index)}>{st.follow}</button>
                                    :<button className="btn btn-sm btn-dark radiusCircle" onClick={()=>onFollow(index)}>{st.follow}</button>}
                            </div>
                        </div>)}
                </div>
                <div className="container-fill m-0 p-0">
                    <div className="row m-0 p-0 ">
                        <div className="col-3 m-0 p-1"></div>
                        <div className="col-6 m-0 p-2"></div>
                        <div className="col-3 m-0 seeMore">See More..</div>
                    </div>
                </div>
            </div>
        )
    }

}export default Location;