import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {switchWheels} from '../../actions';

class Wheel extends Component {
    componentDidUpdate = () => {
        const {wheel, size, focused} = this.props;
        if(wheel === size && focused){
            this.refs.wheelSelector.focus();
        }
    }

    handleKeyDown = (e) => {
        const {size} = this.props;
        const key = e.keyCode;
        if(key === 37 || key === 39){
            this.props.switchWheels(size === 19 ? 21 : 19)
        }
    }

    render() {
        const {wheel, size} = this.props;
        return (
            <div ref="wheelSelector" tabIndex="0" className={"wheel-wrapper " + (wheel === size ? 'selected' : '')}
                 onClick={() => this.props.switchWheels(size)}
                 onKeyDown={this.handleKeyDown}>
                <div className={"wheel-icon wheel-" + size}></div>
                <div className="wheel-size">{size}"</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {...state}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        switchWheels
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Wheel)