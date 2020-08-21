import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
// import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

export default function ImageList(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {props.searchResult.map((title) => (
          <GridListTile key={title.img} cols={title.cols || 1}>
            <img className="image-list" src={title} alt={"puppy"} />;
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
