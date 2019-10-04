import {DiscStatus} from './Othello';

export default class Player {
    private name: string;
    private chosenColor: DiscStatus;
    private myTurn: boolean;

    constructor(name: string, chosenColor: DiscStatus, myTurn: boolean) {
        this.name = name;
        this.chosenColor = chosenColor;
        this.myTurn = myTurn;
    }
}