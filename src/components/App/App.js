import React, {Component} from 'react';
import './App.css';
import Car from '../Car';
import ModelRange from '../ModelRange';
import Selector from '../Selector';
import Climate from '../Climate';
import Wheels from '../Wheels';
import {connect} from 'react-redux';

const models = ['60', '60D', '75', '75D', '90D', 'P100D'];

class App extends Component {
    render() {
        const {speed, temperature} = this.props
        const speedSelectorProps = {
            selectorType: 'speed',
            name: 'Speed',
            value: speed,
            min: 45,
            max: 70,
            metric: 'MPH',
            step: 5
        };
        const temperatureSelectorProps = {
            selectorType: 'temperature',
            name: 'Outside Temperature',
            value: temperature,
            min: -10,
            max: 40,
            metric: '°',
            step: 10
        }
        return (
            <div className="App">
                <h1>Tesla Range per Charge Calculator</h1>
                <h4>React / Redux</h4>
                <Car />
                <div className="stats">
                    {models.map((model, index) => <ModelRange key={index} model={model}/>)}
                </div>
                <div className="selectors">
                    <Selector {...speedSelectorProps}/>
                    <div className="tesla-climate">
                        <Selector {...temperatureSelectorProps}/>
                        <Climate/>
                    </div>
                    <Wheels/>
                </div>
                <span className="declaimer">
                    The actual amount of range that you experience will vary based on your particular use conditions. See how particular use conditions may affect your range in our simulation model.
                    Vehicle range may vary depending on the vehicle configuration, battery age and condition, driving style and operating, environmental and climate conditions.
                </span>
                <a href="https://github.com/edindelan/tesla-battery-range-per-charge-calculator" className="source-link">Source code - GitHub</a>
            </div>
        );
    }
}

export default connect(
    state => ({
        speed: state.speed,
        temperature: state.temperature
    }),
    dispatch => ({})
)(App);
