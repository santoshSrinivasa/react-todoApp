import React,{Component} from 'react';
import AddItem from './AddItem';
import ListItems from './ListItems';
import DeleteItem from './DeleteItem';
export default class Todo extends Component {
  constructor(props)
  {
    super(props);
    this.state={list:['Shopping','Assignment completion'],
    newItem:''    
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.removeItem=this.removeItem.bind(this);
  }
  handleChange(event)
  {
   const item=event.target.value;     
   //console.log(item);
   this.setState({newItem:item});
   console.log(this.state.newItem);
  }
  handleSubmit(e)
  {
    e.preventDefault();
    const newList=[...this.state.list,this.state.newItem]
    this.setState({list:newList})    
  }

  removeItem(_item)
  {
    console.log(_item);
    console.log(this.state.list);
     const updateState = this.state.list.filter( (item) => item != _item )
     console.log(updateState);
     this.setState({list:updateState})
  }
  render()
  {
    return(
      <div>
        <AddItem submit={this.handleSubmit} onChange={this.handleChange}/>
        <ListItems list={this.state.list} remove={this.removeItem}/>
       
      </div>
    );
  }
}