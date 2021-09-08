//Perfil do Atleta escolhido
//O usuário pode ver todas as informações desejadas sobre aquele atleta

import '../Styles/PerfilAtleta.css';
import Box from '@material-ui/core/Box';
import Card1Atleta from '../components/card1Atleta';
import Card2Atleta from '../components/card2Atleta';
import Card3Atleta from '../components/card3Atleta';
import { useEffect, useState } from 'react';
import api from '../services/api';
import Navbar from '../components/navbar';

function PerfilAtleta(props) {

  const [
    perfilAtleta,
    setPerfilatleta
  ] = useState([]);

  const getPerfilatleta = async () => {
    const res = await api.get(`/atleta/findByNome/${props.match.params.nome}`);
    setPerfilatleta(res.data);
    console.log("PerfilAtleta");
    console.log(res.data);
  };

  useEffect(() => {
    getPerfilatleta();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="PerfilAtleta" style={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 5 }}>
        <Box display="flex" bgcolor="background.paper">
          <Box p={1} flexShrink={1} bgcolor="grey.300">
            {
              perfilAtleta.map(item => <Card1Atleta>{item}</Card1Atleta>)
            }
          </Box>
          <Box p={1} width="100%" bgcolor="grey.300">
            {
              perfilAtleta.map(item => <Card2Atleta>{item}</Card2Atleta>)
            }
          </Box>
        </Box>  
      </div>
      
      <div style={{ paddingLeft: 10, paddingRight: 10 }}>
        <Box display="flex" bgcolor="background.paper">
          <Box p={1} width="100%" bgcolor="grey.300">
            {
              perfilAtleta.map(item => <Card3Atleta>{item}</Card3Atleta>)
            }
          </Box>
        </Box>      
      </div>
    </div>
  );
}

export default PerfilAtleta;
