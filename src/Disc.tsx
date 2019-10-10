import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import { DiscStatus } from './logic/Othello';

const useStyles = makeStyles(theme => ({
    block: {
        backgroundColor: "#72c513",
        width: "48px",
        height: "48px",
        borderWidth: "1px",
        borderColor: "rgb(0%, 39.2%, 0%)",
        borderStyle: "Solid",
    },
    disc: {
        borderRadius: "50%",
        width: "46px",
        height: "46px",
    },
    discWhite: {
        backgroundColor: "white",
    },
    discBlack: {
        backgroundColor: "black",
    }
}));

type DiscProps = {
    discStatus: DiscStatus;
}

const Disc: React.SFC<DiscProps> = (props: DiscProps) => {
    const classes = useStyles();

    return (
        <Box display="flex" alignItems="center" justifyContent="center"
            className={classes.block}>
            {(() => {
                if (props.discStatus === DiscStatus.White) {
                    return <Box component="div"
                        className={`${classes.disc} ${classes.discWhite}`}></Box>
                } else if (props.discStatus === DiscStatus.Black) {
                    return <Box component="div"
                        className={`${classes.disc} ${classes.discBlack}`}></Box>
                }
            })()}
        </Box>
    );
}

export default Disc;