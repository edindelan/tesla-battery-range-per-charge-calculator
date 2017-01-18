import React, {Component} from 'react';
import {connect} from 'react-redux';
import Wheel from '../Wheel';
import './wheels.css';

class Wheels extends Component {
    constructor(){
        super();
        this.state = {
            focused: false
        }
    }
    handleFocus = () => {
        this.setState({focused: true});
    }

    handleBlur = () => {
       this.setState({focused: false});

    }

    render() {
        const {focused} = this.state;
        return (
            <div className="wheels-container">
                <div className="wheels-wrapper">
                    <div className="wheels-component-name">Wheels</div>
                    <div tabIndex="0" onFocus={this.handleFocus} onBlur={this.handleBlur}>
                        <Wheel size={19} focused={focused}/>
                        <Wheel size={21} focused={focused}/>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {...state}
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Wheels);