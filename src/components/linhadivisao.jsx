import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
});

export default function LinhaDivisao() {
  const classes = useStyles();

  return (
    <div style={{ borderTop: "1px solid #C8C8C8 ", marginTop: 10, marginBottom: 10 }}></div>
  );
}