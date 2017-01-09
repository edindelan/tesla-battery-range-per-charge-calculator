export function increaseSelectorValue(args){
    const {min, max, step, selectorType} = args;
    console.log("Increasing selector value!");
    return {
        type: 'INCREASE_SELECTOR_VALUE',
        min,
        max,
        step,
        selectorType
    }

}

export function decreaseSelectorValue(args) {
    const {min, max, step, selectorType} = args;
    console.log("Decreasing selector value!");
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