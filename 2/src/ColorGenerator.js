
import React ,{Component} from react
import Color from "./color"

export default class ColorGenerator extends Component{
    constructor(props){
        super(props)
        this.state={
            new_color:''
            color:""
        }
        this.addColor=this.addColor.bind(this)
    }
    addColor(){
        this.state.new_color=randomColor();

    }
    render(){
        return(
            <React.Fragment>
<div className="colorGenerator">
<button onClick={this.addColor}> AddColor</button>
{this.state.color,map(colors=><Color colorItems={colors}/>)}
</div>
            </React.Fragment>
        )
    }
}
