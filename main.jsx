import React,{Component} from "react";
import Circle from "./circle";
import Content from "./content";
import Data from "./data";
import Home from "./home";
import Location from "./location";
import Navbar from "./navbar";
class MainView extends Component
{      state={
            data:[
                {card:"article",image:"./GroupData/image1.png",type:"./GroupData/article.png",topic:"What if famous brands had regular fonts? Meet RegulaBrands!",para:"I've worked in UX for the better part of a decade. From now on, I plan to rei…",dp:"./GroupData/dp1.png",name:"Sarthak Kamra",view:"1.4k views"},
                {card:"education",image:"./GroupData/image2.png",type:"./GroupData/education.png",topic:"Tax Benefits for Investment under National Pension Scheme launched by Government",para:"I’ve worked in UX for the better part of a decade. F..",dp:"./GroupData/dp2.png",name:"Sarah West",view:"4.8k views"},
                {card:"meetup",image:"./GroupData/image3.png",type:"./GroupData/meetup.png",topic:"Finance & Investment Elite Social Mixer @Lujiazui",dp:"./GroupData/dp3.png",name:"Ronal Jones",view:"1.4k views",calander:"Fri, 12 Oct, 2018",location:"Ahmedabad, India"},
                {card:"job",type:"./GroupData/job.png",topic:"Software Developer",dp:"./GroupData/dp4.png",name:"Joseph Gray",view:"1.4k views",job:"Innovaccer Analytics Private Ltd.",location:"Noida,India"},
            ],
            grpData:[
                {dp:"./GroupData/grpDp1.png",name:"Leisure",follow:"Follow"},
                {dp:"./GroupData/grpDp2.png",name:"Activism",follow:"Follow"},
                {dp:"./GroupData/grpDp3.png",name:"MBA",follow:"Follow"},
                {dp:"./GroupData/grpDp4.png",name:"Philosophy",follow:"Follow"},
            ],
            joinBtn:false
         }
        handleJoinBtn=()=>{
            let s1={...this.state};
            s1.joinBtn=!s1.joinBtn?true:false;
            this.setState(s1);
        }
        handleFollow=(index)=>{
            let s1={...this.state};
            s1.grpData[index].follow=s1.grpData[index].follow==="Follow"?"Followed":"Follow";
            this.setState(s1);
        }
        render(){
            let{data,joinBtn,grpData}=this.state;
            return(
            <div className="container-fill p-0 m-0">
                <div className="row m-0 p-0">
                    <Navbar/>
                </div>
                <div className="jumbotron">
                    <Home/>
                </div>
                <div className="cont1">
                    <Content joinBtn={joinBtn} onJoin={this.handleJoinBtn}/>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-12 col-sm-9 m-0 p-0">
                        <Data data={data}/>
                        <div className="row sticky">
                            <div className="col-10"></div>
                            <div className="col-2"><Circle/></div>
                        </div>
                    </div>
                    <div className="col-sm-3 locationBox">
                        <Location grpData={grpData} onFollow={this.handleFollow}/>
                    </div>
                </div>
            </div>
        )
    }

}export default MainView;