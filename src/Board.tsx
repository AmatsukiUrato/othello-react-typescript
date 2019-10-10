import React from "react";
import { Fade } from "@material-ui/core";

type BoardProps = {
    parentStatus: any;
}

const Board: React.FC<BoardProps> = (props: BoardProps) => {
    return (
        <Fade in={!props.parentStatus.showStart}>
            <div>
                <div style={{ backgroundColor: "lightblue" }}>test</div>
                <div style={{ backgroundColor: "blue" }}>test2</div>
            </div>
        </Fade>
    );
}


export default Board;