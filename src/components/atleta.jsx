//Componente referente a cada item da lista dos atletas
//São cards com foto e algumas informações do atleta, organizadas uma do lado da outra

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { useEffect, useState } from 'react';
import api from '../services/api';

import fotoatleta from '../assets/atleta1.jpeg';


export default function Atleta({children}) {

  const [
    atleta,
    setAtleta
  ] = useState([]);

  const getAtleta = async () => {
    const res = await api.get(`/atleta/findByNome/${children}`);
    setAtleta(res.data);
    console.log("atleta");
    console.log(res.data)
  };

  useEffect(() => {
    getAtleta();
  }, []); 

  return (
    <div>
        <Button
            href={"/perfilatleta/" + children}
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="primary"
        >
            <Avatar
                src={fotoatleta} 
                alt={children}
            />
            {children}
        </Button>
    
    </div>
  );
}