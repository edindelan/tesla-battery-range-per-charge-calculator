import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {switchClimate} from '../../actions';
import './climate.css';

class Climate extends Component {
    render() {

        const {climate, temperature} = this.props.state;

        const climateMode = temperature <= 10 ? 'heat' : 'ac';

        return (
            <div className="climate-wrapper">
                <div className={'circle ' + climateMode + '-' + climate} onClick={() => this.props.switchClimate()}>
                    <div className="label">{climateMode + ' ' + climate}</div>
                    <div className="icon"></div>
                </div>
            </div>
        )
    }
}

function mapPropsToState(state) {
    return {
        state
    }
}

function mapDispatchToState(dispatch) {
    return bindActionCreators({
        switchClimate
    }, dispatch)
}

export default connect(mapPropsToState, mapDispatchToState)(Climate)