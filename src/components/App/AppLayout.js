import React, {Component} from 'react';
import './App.css';
import Car from '../Car';
import ModelRange from '../ModelRange';
import Selector from '../Selector';

const models = ['60', '60D', '75', '75D', '90D', 'P100D'];

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            climate: 'on',
            speed: 45,
            temperature: '10',
            wheel: '19'
        }
    }

    changeStats(e) {
        const speed = e.target.value;
        this.setState({speed: +speed})
    }

    increase(max, step) {
        console.log("INC", this);
        if(this.state.speed >= max) return;
        this.setState({speed: this.state.speed + step})
    }

    decrease(min, step) {
        if(this.state.speed <= min) return;
        this.setState({speed: this.state.speed - step})
    }

    render() {
        return (
            <div className="App">
                <Car state={this.state}/>
                <div className="stats">
                    {models.map((model, index) => <ModelRange key={index} model={model} state={this.state}/>)}
                </div>
                <div className="selectors">
                    <input type="range" step="5" min="45" max="70"
                           value={this.state.speed}
                           onChange={this.changeStats.bind(this)}/>
                </div>
                <Selector
                    state={this.state}
                    min={45}
                    max={70}
                    step={5}
                    increase={this.increase.bind(this)}
                    decrease={this.decrease.bind(this)}
                />
            </div>
        );
    }
}

export default App;
