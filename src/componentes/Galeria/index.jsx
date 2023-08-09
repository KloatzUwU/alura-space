import React, { useState } from 'react'
import Tags from '../Tags'
import Fotos from './fotos.json'
import styles from './Galeria.module.scss'
import Cards from './Cards'

export default function Galeria() {
  const [itens, setItens] = useState(Fotos)
  const tags = [...new Set (Fotos.map((valor) => valor.tag))]

  const filtrarFotos = (tag) => {
    const novasFotas = Fotos.filter((foto) => {
      return foto.tag === tag;
    })
    setItens(novasFotas)
  }

  return (
    <section>
      <h2 className={styles.Galeria__h2}>
        Navegue pela galeria
      </h2>
      <Tags tags={tags} filtrarFotos={filtrarFotos} setItens={setItens} />
      <Cards Fotos={itens} styles={styles} />
    </section>
  )
}
