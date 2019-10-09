import {DiscStatus} from './Othello';

export default class Player {
    private name: string;
    private chosenColor: DiscStatus;

    constructor(name: string, chosenColor: DiscStatus) {
        this.name = name;
        this.chosenColor = chosenColor;
    }
}