import React from 'react';
import Styles from './styles.scss';

class SecondaryMenu extends React.Component {

    render() {
        return (
            <section className="secondary_nav">
                <div className="bg_menu">
                    <div className="container_menu">

                        <section className="left_section">

                            <ul className="menu">
                                <li><a href="#">Sistema</a></li>
                                <li className="active"><a href="#">Placa gráfica</a></li>
                                <li><a href="#">Tela</a></li>
                                <li><a href="#">Vídeo</a></li>
                                <li><a href="#">Teclas rápidas</a></li>
                                <li><a href="#">Dispositivos</a></li>
                                <li><a href="#">Geral</a></li>
                            </ul>
                            
                        </section>

                        <section className="right_section">

                            <ul className="menu">
                                <li><a href="#"><span class="material-icons">refresh</span></a></li>
                            </ul>

                        </section>

                    </div>
                </div>
            </section>
        );
    }

}

export default SecondaryMenu;