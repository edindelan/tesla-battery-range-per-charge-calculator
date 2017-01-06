export function increaseSpeed(speed){
    console.log("Clicked change speed action.");
    return {
        type: 'CHANGE_SPEED',
        speed
    }

}