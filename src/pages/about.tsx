import React from 'react';

import styles from './about.css';

export default function() {
  return (
    <div className={styles.normal}>
    <body>
        <div id = "bloc">
            <div id="lisere"></div>
                <header>
        
                    <h1>Zakaria Bukarsa</h1>
                        <p class = "statut">Etudiant en bloc 3 à l'ECAM</p>
                </header>
         
        <div id = "conteneur">
            <section>
                <h2>Mon expérience</h2>
                    <ul>
                        <li><strong>2015-2016</strong>
                            <p>Acquis du CESS </p></li>
                        <li><strong>2016-2017</strong>
                            <p>1er année à l'ULB</p></li>
                        <li><strong>2017-2018</strong>
                            <p>1er année à l'ECAM</p></li>
                        <li><strong>2018-2019</strong>
                            <p>2eme année à l'ECAM</p></li>
                        <li><strong>2019-2020</strong>
                            <p>3eme année à l'ECAM</p></li>
                    </ul>
            </section>
            <section>
                <h2>Mes compétences</h2>
                    <ul>
                        <li>Python</li>
                        <li>C/C++</li>
                        <li>Html5/CSS3</li> 
                    </ul>
            </section>
        </div>
        </div>
    </body>
    </div>
  );
}