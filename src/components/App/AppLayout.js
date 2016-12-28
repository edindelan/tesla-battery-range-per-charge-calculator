import React, {Component} from 'react';
import './App.css';
import Car from '../Car';
import ModelRange from '../ModelRange';
import Selector from '../Selector';
import Climate from '../Climate';

const models = ['60', '60D', '75', '75D', '90D', 'P100D'];

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            climate: 'on',
            speed: 45,
            temperature: 10,
            wheel: '19'
        }
    }

    increase(property, max, step) {
        if (this.state[property] >= max) return;
        this.setState({[property]: this.state[property] + step})
    }

    decrease(property, min, step) {
        if (this.state[property] <= min) return;
        this.setState({[property]: this.state[property] - step})
    }

    switchClimate() {
        this.setState({climate: this.state.climate === 'on' ? 'off' : 'on'})
    }

    render() {
        return (
            <div className="App">
                <Car state={this.state}/>
                <div className="stats">
                    {models.map((model, index) => <ModelRange key={index} model={model} state={this.state}/>)}
                </div>
                <div className="selectors">
                    <Selector
                        stateProperty={'speed'}
                        state={this.state}
                        name={'Speed'}
                        min={45}
                        max={70}
                        defaultValue={this.state.speed}
                        metric={'MPH'}
                        step={5}
                        increase={this.increase.bind(this)}
                        decrease={this.decrease.bind(this)}
                    />

                    <Selector
                        stateProperty={'temperature'}
                        state={this.state}
                        name={'Outside Temperature'}
                        min={-10}
                        max={40}
                        defaultValue={this.state.temperature}
                        metric={'°'}
                        step={10}
                        increase={this.increase.bind(this)}
                        decrease={this.decrease.bind(this)}
                    />
                    <Climate
                        state={this.state}
                        switchClimate={this.switchClimate.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

export default App;
