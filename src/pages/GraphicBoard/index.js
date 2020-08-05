import React from 'react';
import Styles from './styles.scss'

import Button from '../../components/Button';

class GraphicBoard extends React.Component {

    render() {
        return (
            <div>
                <div className="row">

                    <h1 className="title">Gráficos globais</h1>
                    <Button label="Gráficos do Jogo" />

                </div>

                <div className="row">

                    <div className="display_container">

                        <div className="text_container">

                            <strong>Perfil gráfico</strong>
                            <p>Aplica as melhores configurações baseado no seu tipo de usuário</p>

                            <strong>Padrão</strong>
                            <p>Aplica as melhores configurações baseado no seu tipo de usuário</p>

                        </div>
                        <div className="nav_container">
                            <ul>
                                <li className="activated">
                                    <a href="#">
                                        <span class="material-icons">videogame_asset</span>
                                        Jogos
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="material-icons">headset_mic</span>
                                        eSports
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="material-icons">battery_full</span>
                                        Redutor de energia
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="material-icons">gamepad</span>
                                        Padrão
                                    </a>
                                </li>
                                <li className="deactivated">
                                    <a href="#">
                                        <span class="material-icons">toggle_off</span>
                                        Persoanlizado
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        );
    }

}

export default GraphicBoard;