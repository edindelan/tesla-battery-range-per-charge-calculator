import CONSTANTS from '../constants';

const defaultState = {
    climate: 'on',
    speed: 55,
    temperature: 10,
    wheel: 21
};

export default function (state = defaultState, action) {
    switch (action.type){
        case CONSTANTS.INCREASE_SELECTOR_VALUE:
            const increasedSelectorValue = state[action.selectorType] + action.step;
            if(increasedSelectorValue <= action.max){
                return {
                    ...state,
                    [action.selectorType]: increasedSelectorValue
                };
            };
            return state;
        case CONSTANTS.DECREASE_SELECTOR_VALUE:
            const decreasedSelectorValue = state[action.selectorType] - action.step;
            if(decreasedSelectorValue >= action.min){
                return {
                    ...state,
                    [action.selectorType]: decreasedSelectorValue
                }
            };
            return state;
        case CONSTANTS.SWITCH_CLIMATE:
            return {
                ...state,
                climate: state.climate === 'on' ? 'off' : 'on'
            };
        case CONSTANTS.SWITCH_WHEELS:
            return {
                ...state,
                wheel: action.size
            };
        default: return state;
    }
};