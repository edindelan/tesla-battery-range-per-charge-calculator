import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './selector.css';

import {increaseSelectorValue, decreaseSelectorValue} from '../../actions';

class Selector extends Component {
    render() {
        const {min, max, step, selectorType} = this.props;
        const actionParams = {
            min,
            max,
            step,
            selectorType
        };

        return (
            <div className="selector-container">
                <div className="selector-name">{this.props.name}</div>
                <div className="selector-wrapper">
                    <div className="selector-value">{this.props.value}<span
                        className="metric">{this.props.metric}</span></div>
                    <div className="button button-up" onClick={() => this.props.increaseSelectorValue(actionParams)}></div>
                    <div className="seperator"></div>
                    <div className="button button-down" onClick={() => this.props.decreaseSelectorValue(actionParams)}></div>
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