const defaultState = {
    climate: 'on',
    speed: 45,
    temperature: 10,
    wheel: '19'
};

export default function (state = defaultState, action) {
    switch (action.type){
        case 'SPEED_INCREASED':
            return {
                ...state,
                speed: this.state.speed + action.speed
            };
        default: return state;
    }
};