import React from "react";
import { Paper, Grid, Typography, makeStyles, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: -30,
    marginBottom: 60
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  avatar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Comment = (props) => {
  const { name, email, body } = props.comment;
  const classes = useStyles();

  return (
    <div>
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div className={classes.avatar}>
              <Avatar
                src={`https://loremflickr.com/600/400?random=${
                  Math.random() * 10
                }`}
                style={{ width: "50px", height: "50px", border: "2px solid blue" }}
              />
              <Typography variant="caption">{name}</Typography>
            </div>
          </Grid>
          <Grid item xs={8} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item>
                <Typography gutterBottom variant="subtitle1">
                  {email}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {body}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
    </div>
  );
};


export default Comment;