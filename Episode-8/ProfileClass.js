import React from "react"
class Profile extends React.Component{
    constructor(props){
      super(props)
      this.state={
          userInfo:{
            name:"dummy",
            location:"default"
          }
      };
      console.log(this.props.name +"child constructor")
    }
    async componentDidMount(){
        this.timer=setInterval(()=>{
           console.log("React webseries")
        },1000)
        console.log(this.props.name +"child Component Did Component")
       
    }
    componentDidUpdate(prevProps,prevState){
        if(this.state.count!=prevState.count){

        }
        if(this.state.count!=prevState.count){
            
        }
        console.log("component did update")
    }
    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("component will unmount")
    }
    render(){
    
        console.log(this.props.name +"child render")
        return(
            <div className="user">
                <img src={this.state.userInfo.avatar_url}></img>
                <h1>Name:{this.state.userInfo.name}</h1>
                <h2>Location:{this.state.userInfo.location}</h2>
                <h3>Contact:@akshaymarch7</h3>
            </div>
        )
    }
}
export default Profile;