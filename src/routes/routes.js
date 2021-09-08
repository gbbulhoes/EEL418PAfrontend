import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';

import Login from './Login';
import Cadastro from './Cadastro';
import ListaEsportes from './Esportes';
import ListaAtletas from './Atletas';
import PerfilAtleta from './PerfilAtleta';

import '../Styles/App.css';

class Routes extends Component{
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Route path="/" exact component={Login} />
                        <Route path="/cadastro" exact component={Cadastro} />

                        <Route path="/esportes" exact component={ListaEsportes} />

                        <Route path="/atletas/:esporte/:modalidade" exact component={ListaAtletas} />
                        
                        <Route path="/perfilatleta/:nome" exact component={PerfilAtleta} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default Routes;