import { Component } from "react";
import UserClass from "./ProfileClass"
import ProfileFunctionalComponent from "./Profile";
class About extends Component{
    constructor(props){
        super(props);
        //console.log("parent constructor")
    }
    componentDidMount(){
        //console.log("parent component did mount")
    }
    render(){
        //console.log("parent render")
        return (
        <div>
            <h1>About us</h1>
            <h3>This is React webseries</h3>
       
            <ProfileFunctionalComponent/>
        </div>
        )
    }
}
export default About;