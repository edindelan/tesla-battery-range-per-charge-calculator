export function increaseSelectorValue(payload){
    const {min, max, step, selectorType} = payload;
    return {
        type: 'INCREASE_SELECTOR_VALUE',
        min,
        max,
        step,
        selectorType
    }

}

export function decreaseSelectorValue(payload) {
    const {min, max, step, selectorType} = payload;
    return {
        type: 'DECREASE_SELECTOR_VALUE',
        min,
        max,
        step,
        selectorType
    }
}

export function switchClimate() {
    return {
        type: 'SWITCH_CLIMATE'
    }
}

export function switchWheels(payload) {
    const size = payload;
    return {
        type: 'SWITCH_WHEELS',
        size
    }
}