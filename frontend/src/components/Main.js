import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Login from './Login/Login';
import Home from './Home/Home';
import QuestionDisplay from './QuestionDisplay/QuestionDisplay';
import TopicDisplay from './TopicDisplay/TopicDisplay';
import ProfileDisplay from './ProfileDisplay/ProfileDisplay';
import Topic from './TopicDisplay/Topic';



import Navbar from './LandingPage/Navbar';
//Create a Main Component
class Main extends Component {
    render(){
        return(
            <div>
       
                {/*Render Different Component based on Route*/}
                <Route path="/" component={Navbar}/>
                <Route path="/login" component={Login}/>
                <Route path="/home" component={Home}/>
                <Route path="/questiondisplay" component={QuestionDisplay}/>
                <Route path="/topicdisplay" component={TopicDisplay}/>
                <Route path="/profiledisplay" component={ProfileDisplay}/>
                <Route path="/topic" component={Topic}/>

               
            </div>
         
        )
    }
}
//Export The Main Component
export default Main;