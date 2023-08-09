import Cabecalho from "componentes/Cabecalho";
import Menu from "componentes/Menu";
import Banner from "componentes/Banner";
import Rodape from "componentes/Rodape";
import Galeria from "componentes/Galeria";
import Populares from "componentes/Populares";
import styles from './PaginaInicial.module.scss'

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho/>
            <main>
                <section className={styles.principal}>
                    <Menu/>
                    <div className={styles.principal__imagem}>
                        <h1>A galeria mais completa do espaço</h1>
                        <Banner/>
                    </div>
                </section>
                <div>
                    <Galeria/>
                    <Populares/>
                </div>
            </main>
            <Rodape/>
        </>
    )
}