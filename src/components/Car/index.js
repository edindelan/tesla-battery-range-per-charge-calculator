import React, { Component } from 'react';
import './car.css';

export default class Car extends Component {
    render() {
        return (
            <div className="car-container">
                <div className="car-body">
                    <div className="tesla-wheels">
                        <div className={'wheel front  speed-' + this.props.state.speed}></div>
                        <div className={'wheel rear   speed-' + this.props.state.speed}></div>
                    </div>
                </div>
            </div>
        )
    }
}