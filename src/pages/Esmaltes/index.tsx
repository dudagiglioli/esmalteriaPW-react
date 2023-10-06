import styles from "./Esmalte.module.scss";
import Logo from "../../assets/logo.png";
import Buscador from "./Buscador"
import { useState } from "react";
import Filtros from "./Filtros";


export default function Esmalte() {

    const [busca, setBusca] = useState("");

 return(
<main>
    <div className="div">
    <nav className={styles.inicio}>
        <img src={Logo} alt="Logo Esmalteria"/>
    </nav>
    </div>

<header className={styles.header}>
<div className={styles.header__text}>
    Esmalteria!
</div>
           </header>

           <h2  className={styles.frase}>As unhas são uma forma de 
           se expressar e de mostrar sua criatividade</h2>

           <section className={styles.esmalte}>
               <h3 className={styles.esmalte__titulo}>Opções</h3>
               
           <Buscador busca={busca} setBusca={setBusca}></Buscador>

           <div className='styles.esmalte__filtros'> 
                <Filtros/>
           </div>
           </section>


</main>

 )
}
