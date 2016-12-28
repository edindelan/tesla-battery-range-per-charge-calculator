import React, {Component} from 'react';
import './selector.css';

export default class Selector extends Component {

    increase() {
        console.log("PR", this.props);
        this.props.increase(this.props.max, this.props.step);
    }

    decrease() {
        this.props.decrease(this.props.min, this.props.step);
    }

    render() {
        console.log(this.props);
        return (
            <div className="selector-wrapper">
                <div className="selector-value">{this.props.state.speed}<span className="metric">MPH</span></div>
                <div className="button button-up" onClick={this.increase.bind(this)}>Up</div>
                <div className="button button-down" onClick={this.decrease.bind(this)}>Down</div>
            </div>
        )
    }
}