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

        temp <= 10
            ? climateMode = climate === 'on' ? 'heat-on' : 'heat-off'
            : climateMode = climate === 'on' ? 'ac-on' : 'ac-off';

        return (
            <div className="climate-wrapper">
                <div className={'circle ' + climateMode} onClick={this.climateSwitch.bind(this)}>
                    <div className="label">Heat On</div>
                    <div className="icon"></div>
                </div>
            </div>
        )
    }
}