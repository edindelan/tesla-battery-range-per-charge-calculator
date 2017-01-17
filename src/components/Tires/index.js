import React, {Component} from 'react';
import './tires.css';

class Tires extends Component {
    render() {
        return (
            <div className="tires-container">
                <div className="tires-wrapper">
                    <div className="tires-component-name">Wheels</div>
                    <div className="tire-wrapper">
                        <div className="tire-icon tire-19"></div>
                        <div className="tire-size">19"</div>
                    </div>
                    <div className="tire-wrapper">
                        <div className="tire-icon tire-21"></div>
                        <div className="tire-size">21"</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tires;