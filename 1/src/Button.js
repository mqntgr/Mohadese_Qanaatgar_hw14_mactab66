import React ,{Component} from  "react";

class  Button extends React.Component{
render(){
    return(
<button onClick={this.props.clickhandler}> {this.props.title}</button>

    )
}
}
export default Button