import React ,{Component} from react

export default class Color extends Component{
    render(props){
        return(
<div>
    <div style={{background:`${this.props.color}`}}></div>
    <li>{this.props.color}</li>
    </div>
        )
    }
}