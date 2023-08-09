import React from 'react'
import MontaCard from './MontaCard'

export default function Cards({Fotos, styles}) {
    return (
        <ul className={styles.Galeria__cards}>
            {Fotos.map((foto) => {
                return (
                    <MontaCard foto={foto} styles={styles} />
                )
            })}
        </ul>
    )
}
