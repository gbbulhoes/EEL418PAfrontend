import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LinhaDivisao from './linhadivisao';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
});

export default function Card2Atleta(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
                Idade: {props.children.idade} anos
            </Typography>
            <Typography gutterBottom variant="h5" component="h3">
                Peso: {props.children.peso} kg
            </Typography>
            <Typography gutterBottom variant="h5" component="h3">
                Altura: {props.children.altura} cm
            </Typography>
            
            <LinhaDivisao />

            <Typography gutterBottom variant="h5" component="h3">
                História
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Local de Nascimento: {props.children.cidade} - {props.children.estado} - {props.children.pais}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Texto da História
            </Typography>

            <LinhaDivisao />
            
            <Typography gutterBottom variant="h5" component="h3">
                Títulos
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Texto dos Títulos
            </Typography>
        </CardContent>
    </Card>
  );
}
