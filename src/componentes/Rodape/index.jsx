import facebook from './facebook.svg';
import instagram from './instagram.svg';
import twitter from './twitter.svg';
import React from 'react'
import styles from './Rodape.module.scss'

export default function Rodape() {
    return (
        <footer className={styles.Rodape}>
            <div className={styles.Rodape__icones}>
                <a 
                    href="https://www.facebook.com/AluraCursosOnline/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={facebook} alt="icone do facebook" />
                </a>
                <a 
                    href="https://twitter.com/aluraonline?lang=en"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={twitter} alt="icone do twitter" />
                </a>
                <a 
                    href="https://www.instagram.com/aluraonline/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={instagram} alt="icone do instagram" />
                </a>
            </div>
            <p>
                Desenvolvido por Alura.
            </p>
        </footer>
    )
}
