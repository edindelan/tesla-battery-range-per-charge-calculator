import React, { Component } from 'react';
import {connect} from 'react-redux';
import './car.css';

class Car extends Component {
    render() {
        const {speed, wheel} = this.props;
        return (
            <div className="car-container">
                <div className="car-body">
                    <div className="tesla-wheels">
                        <div className={'wheel wheel-' + wheel + ' front  speed-' + speed}></div>
                        <div className={'wheel wheel-' + wheel + ' rear   speed-' + speed}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({...state}),
    dispatch => ({})
)(Car)