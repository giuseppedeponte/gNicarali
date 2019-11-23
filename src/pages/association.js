import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import style from "../assets/style/association.module.css"

const Association = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="L'association" />
      <article>
        <h2>L'association</h2>
        <p>
          <iframe
            src="https://www.youtube.com/embed/vQEHqTqnJs4"
            allowfullscreen
            width="560"
            height="315"
            frameborder="0"
          ></iframe>
        </p>
        <h4>Nos activités</h4>
        <p>
          L’association <strong>Nicarali</strong>, sise à Strasbourg, est née en
          2010 du constat fait par ses membres fondateurs de la modicité des
          ressources dont dispose le Nicaragua pour l’éducation, la culture
          écrite et la lecture. L’association se propose dans ce but de
          travailler main dans la main avec l’association nicaraguayenne{" "}
          <abbr title="Asociación para el Desarrollo de Villa Chagüitillo">
            ADCH
          </abbr>
          , initiatrice du projet de bibliothèque
        </p>
        <h4>Nos bénévoles</h4>
        <p>
          L’association <strong>Nicarali</strong> se compose de membres
          bénévoles, adhérents et de membres d’honneur. Elle est gérée par un
          bureau composé de trois personnes élu pour deux ans par l’assemblée
          générale.
        </p>
        <ul className={style.list}>
          <li className={style.listItem}>Claudine MULLER, présidente</li>
          <li className={style.listItem}>Jean-Sébastien PIETRI, secrétaire</li>
          <li className={style.listItem}>Laurence BEGUIN, trésorière</li>
        </ul>
        <h4>Nos financements</h4>
        <p>
          <strong>Nicarali</strong> souhaite devenir le premier mécène français
          de cette bibliothèque et envisage diverses actions pour y parvenir.
        </p>
        <p>
          <strong>Nicarali</strong> recherche des financements pour mener à bien
          son projet :
        </p>
        <ul className={style.list}>
          <li className={style.listItem}>
            par un <strong>appel à cotisations</strong>
          </li>
          <li className={style.listItem}>
            par le biais de l’<strong>auto-financement</strong> (participation à
            des manifestations culturelles, à des fêtes, à des vide-grenier,
            organisation d’activités)
          </li>
          <li className={style.listItem}>
            par un appel aux <strong>financements publics</strong> (subvention,
            dons, soutien matériel)
          </li>
          <li className={style.listItem}>
            par la recherche de <strong>financements privés</strong> (dons,
            parrainage, sponsoring, mécénat)
          </li>
          <li className={style.listItem}>
            par une <strong>collecte de livres en espagnol</strong>, de
            littérature principalement, mais toutes les oeuvres d’intérêt sont
            bienvenues
          </li>
          <li className={style.listItem}>
            par la <strong>collecte de toutes sortes d’objets</strong>{" "}
            susceptibles d’être vendus dans des brocantes, ainsi que des livres
            en français
          </li>
        </ul>
      </article>
    </Layout>
  )
}

export default Association

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
