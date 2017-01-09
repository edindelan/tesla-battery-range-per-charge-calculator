const defaultState = {
    climate: 'on',
    speed: 45,
    temperature: 10,
    wheel: '19'
};

export default function (state = defaultState, action) {
    switch (action.type){
        case 'INCREASE_SELECTOR_VALUE':
            const increasedSelectorValue = state[action.selectorType] + action.step;
            if(increasedSelectorValue <= action.max){
                return {
                    ...state,
                    [action.selectorType]: increasedSelectorValue
                };
            };
            return state;
        case 'DECREASE_SELECTOR_VALUE':
            const decreasedSelectorValue = state[action.selectorType] - action.step;
            if(decreasedSelectorValue >= action.min){
                return {
                    ...state,
                    [action.selectorType]: decreasedSelectorValue
                }
            };
            return state;
        case 'SWITCH_CLIMATE':
            return {
                ...state,
                climate: state.climate === 'on' ? 'off' : 'on'
            };
        default: return state;
    }
};