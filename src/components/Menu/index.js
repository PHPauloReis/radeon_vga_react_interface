import React from 'react';
import Styles from './styles.scss';

import Brand from '../../images/brand.png';

class Menu extends React.Component {

    render() {
        return (
            <nav className="header">

                <div className="bg_menu elevated">

                    <div className="container_menu">

                        <section className="left_section">
                            <div className="brand">
                                <img src={Brand} alt=""/>
                            </div>

                            <ul className="menu">
                                <li><a href="#">Página inicial</a></li>
                                <li><a href="#">Jogos</a></li>
                                <li><a href="#">Desempenho</a></li>
                            </ul>
                        </section>

                        <section className="right_section">
                            
                            <input 
                                type="text" 
                                name="search" 
                                className="top_search_textfield" 
                                placeholder="Pesquisar"
                            />

                            <ul className="menu">
                                <li><a href="#"><span class="material-icons">public</span></a></li>
                                <li><a href="#"><span class="material-icons">grade</span></a></li>
                                <li><a href="#"><span class="material-icons">notifications</span></a></li>
                                <li className="active"><a href="#"><span class="material-icons">settings</span></a></li>
                                <li><a href="#"><span class="material-icons">exit_to_app</span></a></li>
                            </ul>

                        </section>

                    </div>

                </div>

            </nav>
        );
    }

}

export default Menu;