export default function two_crystal_balls(breaks: boolean[]): number {
    let jumpDistanse = Math.floor(Math.sqrt(breaks.length));
    let i = jumpDistanse;
    for (; i < breaks.length; i += jumpDistanse) {
        if (breaks[i]) break;
    }
    i -= jumpDistanse;
    for (let j = 0; j <= jumpDistanse; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}
