//Lista de esportes presentes nas Olimpíadas
//Ao clicar em algum dos esportes aparece um menu apresentando todas as modalidades presentes
//O usuário deve escolher a modalidade que deseja e será redirecionado para a página da modalidade, onde existe uma lista de todos os atletas

import '../Styles/Esportes.css';
import Box from '@material-ui/core/Box';
import Esporte from '../components/esporte';
import { useEffect, useState } from 'react';
import api from '../services/api';
import Navbar from '../components/navbar';

function ListaEsportes() {
  const [
    esportes,
    setEsportes
  ] = useState([]);

  const getEsportes = async () => {
    const res = await api.get("/esporte/findAll");
    setEsportes(res.data);
  };

  useEffect(() => {
    getEsportes();
  }, []);


  return (
    <div className="ListaEsportes">
      <Navbar />
      <Box display="flex" flexDirection="row">
        {
          esportes.map(item => <Esporte>{item.nome}</Esporte>)
        }
      </Box>
    </div>
  );
}

export default ListaEsportes;
