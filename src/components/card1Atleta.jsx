import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import fotoatleta from '../assets/atleta1.jpeg';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
});

export default function Card1Atleta(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
          component="img"
          alt="Atleta"
          height="450"
          image={fotoatleta}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.children.nome}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            {props.children.esporte} - {props.children.modalidade} 
          </Typography>
        </CardContent>
    </Card>
  );
}
