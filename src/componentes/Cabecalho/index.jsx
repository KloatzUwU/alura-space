import logo from './logo.png'
import search from './search.png'
import styles from './Cabecalho.module.scss'

export default function Cabecalho(){
    return(
        <header className={styles.cabecalho}>
            <img 
                src={logo}
                alt="Logo do Alura Space" 
            />
            <div className={styles.container}>
                <input 
                    className={styles.input}
                    type="text"
                    placeholder="O que voce procura?" 
                />
                <img 
                    src={search}
                    alt="Icone de Lupa" 
                />
            </div>
        </header>
    )
}