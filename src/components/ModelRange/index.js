import React, { Component } from 'react';
import {connect} from 'react-redux';
import Stats from './stats';
import './model-range.css';

class ModelRange extends Component {

    render() {
        const m = this.props.model,
              w = this.props.state.wheel,
              c = this.props.state.climate,
              s = this.props.state.speed,
              t = this.props.state.temperature;

        const range = Stats.getModelData()[m][w][c]['speed'][s][t];

        return (
            <div className="model-range-item">
                <div className={'model-number model-' + m}></div>
                <div className="range">{range}</div>
            </div>
        )
    }
}

export default connect(
    state => ({state}),
    dispatch => ({})
)(ModelRange)