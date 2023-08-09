import React from 'react'
import open from './open.png'
import favorito from './favorito.png'

export default function MontaCard({foto, styles}) {
    return (
        <li key={foto.id} className={styles.Galeria__card}>
            <img
                className={styles.Galeria__imagem}
                src={foto.imagem}
                alt={foto.titulo}
            />
            <p className={styles.Galeria__descricao}>
                {foto.titulo}
            </p>
            <div>
                <p>
                    {foto.creditos}
                </p>
                <span>
                    <img
                        src={favorito}
                        alt="icone coração de curtir"
                    />
                    <img
                        src={open}
                        alt="icone de abrir modal"
                    />
                </span>
            </div>
        </li>
    )
}
