import React, {Component} from 'react';
import './App.css';
import Car from '../Car';
import ModelRange from '../ModelRange';
import Selector from '../Selector';
import Climate from '../Climate';
import {connect} from 'react-redux';

const models = ['60', '60D', '75', '75D', '90D', 'P100D'];

class App extends Component {
    /*switchClimate() {
        this.setState({climate: this.state.climate === 'on' ? 'off' : 'on'})
    }*/

    render() {
        return (
            <div className="App">
                <Car state={this.props.state}/>
                <div className="stats">
                    {models.map((model, index) => <ModelRange key={index} model={model} state={this.state}/>)}
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
            </div>
        );
    }
}

export default connect(
    state => ({state}),
    dispatch => ({})
)(App);
