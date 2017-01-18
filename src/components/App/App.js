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
        return (
            <div className="App">
                <h1>Tesla Range per Charge Calculator</h1>
                <h4>React / Redux</h4>
                <Car />
                <div className="stats">
                    {models.map((model, index) => <ModelRange key={index} model={model}/>)}
                </div>
                <div className="selectors">
                    <Selector
                        selectorType={'speed'}
                        name={'Speed'}
                        value={this.props.state.speed}
                        min={45}
                        max={70}
                        metric={'MPH'}
                        step={5}
                    />
                    <div className="tesla-climate">
                        <Selector
                            selectorType={'temperature'}
                            name={'Outside Temperature'}
                            value={this.props.state.temperature}
                            min={-10}
                            max={40}
                            metric={'°'}
                            step={10}
                        />
                        <Climate/>
                    </div>
                    <Wheels/>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({state}),
    dispatch => ({})
)(App);
