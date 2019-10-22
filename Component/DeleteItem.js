import React,{Component} from 'react';
export default class DeleteItem extends Component {
  constructor(props)
  {
    super(props);
  }
  render()
  {
    return(
        <li>
            {this.props.text} 
            <span onClick={()=> this.props.remove(this.props.text)}>X</span>
        </li>
    );
  }
}