import React, {Component} from 'react';
import withBorder from './WithBorderHOC';

class Counter extends Component{

    state = {
        count: 10,
        message: "test"
    }
    inputRef = React.createRef();

    constructor(props){
        super(props);

        this.decr = this.decr.bind(this);

        // ES6
        // this.state = {
        //     count: 10,
        //     message: "test"
        // }
    }

    //event handler == Arrow functions
    inc = (evt) => {
        
        console.log("event", evt);

        //this.state.count++;
        const updatedCount = this.state.count + 1;
        //setState is async
        //this.setState(slice of the updated state, callback);
        this.setState({
            count: updatedCount
        }, () => {
            console.log("count", this.state.count);
        });
        
    }
    //event handler == bind function
    decr(){

        console.log(this)
        //this.state.count++;
        const updatedCount = this.state.count - 1;
        //setState is async
        //this.setState(slice of the updated state, callback);
        this.setState({
            count: updatedCount
        }, () => {
            console.log("count", this.state.count);
        });
    }
    change = (evt) => {
        
        const updateCount = evt.target.value;
        this.setState({
            count: updateCount ?  parseInt(updateCount) : 0
        });
    }
    update  = () => {

        if(this.inputRef.current.value)
        {
            this.setState({
                count: parseInt(this.inputRef.current.value)
            });
        }
        
    }
    render() {
        return ( 
            <div>
                <h4 id="title">Counter: {this.state.count}</h4>
                <p>Message: {this.props.message}</p>
                <div>
                    {/* <button onclick="foo()">Inc</button> */}
                    <button onClick={this.inc}>Inc</button>
                </div>
                <div>
                    <button onClick={this.decr}>Decr</button>
                </div>
                <div>
                    {/* Controlled input */}
                    Count: <input id="value" type="number" 
                                placeholder="Count"
                                value={this.state.count} onChange={this.change}/>
                </div>
                <div>
                    {/* Uncontrolled input */}
                    Count: <input type="number" ref={this.inputRef} placeholder="Update Count"/>
                    <button onClick={this.update}>Update</button>
                </div>
            </div>
        );
    }
}

export default withBorder(Counter);