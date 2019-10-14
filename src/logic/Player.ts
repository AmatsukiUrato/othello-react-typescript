import {DiscStatus} from './Othello';

export default class Player {
    public name: string;
    public chosenColor: DiscStatus;

    constructor(name: string, chosenColor: DiscStatus) {
        this.name = name;
        this.chosenColor = chosenColor;
    }
}