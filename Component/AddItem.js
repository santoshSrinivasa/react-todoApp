import React,{Component} from 'react';

export default class AddItem extends Component {
  constructor(props)
  {
    super(props);
  }
  render()
  {
    return(
      <form onSubmit={this.props.submit}>
     <input type='text' onChange={this.props.onChange} />
     <input type='submit' value='Add Task'/>
     </form>
    );
  }
}

