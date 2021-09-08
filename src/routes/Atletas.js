//Tela referente a uma determinada modalidade de um esporte
//Possui uma lista de todos os atletas que atuam naquela modalidade
//O usuário pode selecionar um dos atletas para entrar em seu perfil

import '../Styles/Atletas.css';
import Box from '@material-ui/core/Box';
import Modalidade from '../components/modalidade';
import Atleta from '../components/atleta';
import { useEffect, useState } from 'react';
import api from '../services/api';
import Navbar from '../components/navbar';

function ListaAtletas(props) {

  const [
    atletas,
    setAtletas
  ] = useState([]);

  const getAtletas = async () => {
    const res = await api.get(`/atleta/findByEspMod/${props.match.params.esporte}/${props.match.params.modalidade}`);
    setAtletas(res.data);
  };

  useEffect(() => {
    getAtletas();
  }, []);

  return (
    <div className="ListaAtletas">
      <Navbar />
      {/* Mudar a tag modalidade para receber um texto personalizado, que ficará armazenado no banco de dados */}
      <Modalidade />
      <div>
        <Box display="flex" flexDirection="row">
          {
            atletas.map(item => 
              <div id="botaoAtleta">
                <Atleta>{item.nome}</Atleta>
              </div>)
          }
        </Box>
      </div>
    </div>
  );
}

export default ListaAtletas;
