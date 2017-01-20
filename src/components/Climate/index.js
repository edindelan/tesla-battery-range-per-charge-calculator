import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {switchClimate} from '../../actions';
import './climate.css';

class Climate extends Component {
    handleKeyDown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const key = e.keyCode;
        if(key === 32){
            this.props.switchClimate();
        }
    }

    render() {
        const {climate, temperature} = this.props;
        const climateMode = temperature <= 10 ? 'heat' : 'ac';
        return (
            <div className="climate-wrapper">
                <div tabIndex="0" className={'circle ' + climateMode + '-' + climate}
                     onClick={() => this.props.switchClimate()}
                     onKeyDown={this.handleKeyDown}>
                    <div className="label">{climateMode + ' ' + climate}</div>
                    <div className="icon"></div>
                </div>
            </div>
        )
    }
}

function mapPropsToState(state) {
    return {
        climate: state.climate,
        temperature: state.temperature
    }
}

function mapDispatchToState(dispatch) {
    return bindActionCreators({
        switchClimate
    }, dispatch)
}

export default connect(mapPropsToState, mapDispatchToState)(Climate)