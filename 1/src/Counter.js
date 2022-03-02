import React,{Component} from "react";
import Button from "./Button";
//Counter esm componet mane
class  Counter extends Component{
constructor(props){
    super(props)
    this.state={
        ccounter:0
    }
    this.increase=this.increase.bind(this)
    this.decrease=this.decrease.bind(this)
}
increase=()=>{

    this.setState({ccounter:this.state.ccounter+1})
    }


decrease=()=>{ 
    if(this.state.ccounter>0){
        this.setState({ccounter:this.state.ccounter-1})
      }
    }
    
    render(){
        return(
            <div>
                <div>
    <span>{this.state.ccounter}</span>
  </div>
        <Button title="increase" clickhandler={this.increase}/>
<Button title="decrease" clickhandler={this.decrease}/> 

  </div> 

        )
    }
}
 export default Counter