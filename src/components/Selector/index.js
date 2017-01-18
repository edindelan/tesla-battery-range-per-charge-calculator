import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './selector.css';

import {increaseSelectorValue, decreaseSelectorValue} from '../../actions';

class Selector extends Component {
    constructor() {
        super();
        this.state = {
            focused: false
        }
    }

    onFocus = () => {
        this.setState({
            focused: true
        });

    };

    onBlur = () => {
        this.setState({
            focused: false
        });

    };

    onKeyDown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const actionParams = this.getActionParams();
        const keyCode = e.keyCode;

        switch (keyCode) {
            case 38:
                this.props.increaseSelectorValue(actionParams);
                return;
            case 40:
                this.props.decreaseSelectorValue(actionParams);
                return;
            default:
                return
        }
    };

    getActionParams = () => {
        const {min, max, step, selectorType} = this.props;
        return {
            min,
            max,
            step,
            selectorType
        };
    };

    render() {
        const actionParams = this.getActionParams();
        const {value, name, metric, max, min} = this.props;
        const {focused} = this.state;
        return (
            <div className="selector-container">
                <div className="selector-name">{name}</div>
                <div className={"selector-wrapper " + (focused ? 'focused' : '')} tabIndex="-1"
                     onFocus={this.onFocus}
                     onBlur={this.onBlur}
                     onKeyDown={this.onKeyDown}>
                    <div className="selector-value">{value}<span
                        className="metric">{metric}</span></div>
                    <div className={"button button-up " + (value === max ? 'disabled' : '')}
                         onClick={() => this.props.increaseSelectorValue(actionParams)}></div>
                    <div className="seperator"></div>
                    <div className={"button button-down " + (value === min ? 'disabled' : '')}
                         onClick={() => this.props.decreaseSelectorValue(actionParams)}></div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        increaseSelectorValue,
        decreaseSelectorValue
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Selector);