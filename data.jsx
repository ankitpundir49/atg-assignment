import React,{Component} from "react";
import { Route,Switch,Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assignment.css';
import { Dropdown } from "react-bootstrap";
class Data extends Component
{   render()
    {   let{data}=this.props;
        console.log(data)
        return(
            <div className="container-fill card1">
                {data.map(st=>
                    <div className="card border mb-2">
                        {st.image?
                        <React.Fragment>
                            <img className="card-img-top m-0 p-0" src={st.image} alt="Card image cap"/>
                        </React.Fragment>
                        :""}
                        <div class="card-body">
                            <div className="row mt-2">
                                <div className="col-12 m-0 p-0 ps-2"><img className="" src={st.type}/></div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-10 m-0 p-0 ps-2 topicFont"><h4 className="card-text">{st.topic}</h4></div>
                                <div className="col-2 m-0 p-0 pe-1 text_Right">
                                    <Dropdown className="m-0 p-0 pe-1 DotEdit">
                                        <Dropdown.Toggle className="bg-light" variant="light" id="">
                                            <img className="" src="./GroupData/3Dot.svg"/>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            {!st.para&&st.card==="meetup"?
                                <React.Fragment>
                                    <div className="row mt-2">
                                        <div className="col-6 m-0 p-0 ps-2 textFont">
                                            <img src="./GroupData/calander.png"/> {st.calander}
                                        </div>
                                        <div className="col-4 m-0 p-0 ps-2 textFont">
                                            <img src="./GroupData/location.png"/> {st.location}
                                        </div>
                                    </div>
                                    <div className="row m-2">
                                        <button className="form-control btn border-secondary meetBtn">
                                            Visit Website
                                        </button>
                                    </div>
                                </React.Fragment>
                                :!st.para||st.card==="jobs"?
                                <React.Fragment>
                                    <div className="row mt-2">
                                        <div className="col-6 m-0 p-0 ps-2 textFont">
                                            <img src="./GroupData/company.png"/> {st.job}
                                        </div>
                                        <div className="col-4 m-0 p-0 ps-2 textFont">
                                            <img src="./GroupData/location.png"/> {st.location}
                                        </div>
                                    </div>
                                    <div className="row m-2">
                                        <button className="form-control btn border-secondary jobBtn">
                                            Apply on Timesjobs
                                        </button>
                                    </div>
                                </React.Fragment>
                                :<React.Fragment>
                                    <div className="row mt-2 textFont">
                                        <div className="col-12 m-0 p-0 ps-2"><p className="card-text">{st.para}</p></div>
                                    </div>
                                </React.Fragment>}
                            <div className="row mt-4">
                                <div className="col-2 col-sm-1 m-0 p-0"><img src={st.dp}/></div>
                                <div className="col-6 col-sm-9 m-0 pt-2 nameInfo">
                                    <div className="row m-0 p-0">
                                        <div className="col-sm-6 m-0 p-0">{st.name}</div>
                                        <div className="col-sm-6 viewInfo m-0 p-0"><img src="./GroupData/view.svg"/>{st.view}</div>
                                    </div>
                                </div>
                                <div className="col-4 col-sm-2 m-0 p-0 pt-2 text_Right">
                                    <button className="btn btn-sm btn-light shareBtn m-0 p-0 ps-1 border">
                                        <div className="row m-0 p-0">
                                            <div className="col-2 m-0 p-0">
                                                <img className="m-0 p-1" src="./GroupData/share.svg"/>    
                                            </div>
                                            <div className="col-8 m-0 p-0 pt-1 ps-2 d-sm-none float_Right shareFont">
                                                Share
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>)}
            </div>
        )
    }

}export default Data;