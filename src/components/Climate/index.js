import React, {Component} from 'react';
import './climate.css';

export default class Climate extends Component {

    climateSwitch() {
        this.props.switchClimate();
    }

    render() {
        let climateMode = null;
        const climate = this.props.state.climate;
        const temp = this.props.state.temperature;

        temp <= 10 ? climateMode = 'heat' : climateMode = 'ac';

        return (
            <div className="climate-wrapper">
                <div className={'circle ' + climateMode + '-' + climate} onClick={this.climateSwitch.bind(this)}>
                    <div className="label">{climateMode + ' ' + climate}</div>
                    <div className="icon"></div>
                </div>
            </div>
        )
    }
}