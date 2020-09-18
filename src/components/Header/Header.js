import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: '100%',
    color: 'goldenRod',
    borderBottom: '4px solid skyBlue',
  }
});

const Header = () => {

  const classes = useStyles();

  return (


    
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h4" component="h2">
            News feed
        </Typography>
      </CardContent>
    </Card>
  );
}


export default Header;