import React, {Component} from 'react';
import './selector.css';

export default class Selector extends Component {

    increase() {
        this.props.increase(this.props.stateProperty, this.props.max, this.props.step);
    }

    decrease() {
        this.props.decrease(this.props.stateProperty, this.props.min, this.props.step);
    }

    render() {
        return (
        <div className="selector-container">
            <div className="selector-name">{this.props.name}</div>
            <div className="selector-wrapper">
                <div className="selector-value">{this.props.defaultValue}<span className="metric">{this.props.metric}</span></div>
                <div className="button button-up" onClick={this.increase.bind(this)}></div>
                <div className="seperator"></div>
                <div className="button button-down" onClick={this.decrease.bind(this)}></div>
            </div>
        </div>
        )
    }
}