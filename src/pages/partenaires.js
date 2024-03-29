import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import style from "../assets/style/partenaires.module.css"

const Partenaires = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Nos partenaires" />
      <article>
        <h2>Nos partenaires</h2>
        <h4 id="nos-partenaires-en-france">Nos partenaires en France</h4>
        <p>
          Nous avons pu réaliser notre premier projet de bibliothèque publique à
          Chagüitillo notamment grâce aux soutiens renouvelés du CONSEIL GENERAL
          DU BAS-RHIN, du CONSEIL REGIONAL D’ALSACE et de la VILLE DE
          STRASBOURG.
          <br />
          Pour notre projet de bibliothèque mobile pour les communautés
          indigènes, le CONSEIL GENERAL, le CONSEIL REGIONAL et la VILLE de
          Strasbourg ont à nouveau soutenu notre action en 2015. L’association
          alsacienne <a href="http://www.jossh.fr">JOSSH</a> a participé aussi à
          notre projet de bibliothèque mobile en finançant l’achat de livres
          éducatifs sur la santé et l’hygiène ainsi que l’organisation
          d’ateliers de sensibilisation pour les mères de famille.
        </p>

        <p>
          Nous faisons partie du collectif{" "}
          <a href="http://www.humanis.org">HUMANIS</a> grâce auquel nous pouvons
          participer à des évènements tels que la Rentrée des associations en
          septembre, le Village du partage pendant le Marché de Noël à
          Strasbourg.
        </p>

        <p>
          Nous avons le soutien de l’association ARTISANS DU MONDE de
          Strasbourg.
        </p>

        <h4 id="nos-partenaires-au-nicaragua">Nos partenaires au Nicaragua</h4>

        <p>
          <strong>
            <a href="http://www.adchchaguitillo.com">A D C H</a> (Asociación
            para el Desarrollo de Villa Chagüitillo)
          </strong>{" "}
          - Association pour le Développement de Villa Chagüitillo <br />
          Les principales actions d’{" "}
          <abbr title="Asociación para el Desarrollo de Villa Chagüitillo">
            ADCH
          </abbr>{" "}
          concernent l’éducation, la santé, la culture, l’habitat, le tourisme
          et les services communautaires aux personnes qui en ont le plus besoin
          pour la ville de Chagüitillo. Pour assurer le succès de ces activités,
          elle travaille en coordination avec différents organismes, d’état,
          privés, nationaux ou internationaux.{" "}
          <abbr title="Asociación para el Desarrollo de Villa Chagüitillo">
            ADCH
          </abbr>{" "}
          a mis à disposition de Nicarali les locaux d’une ancienne bibliothèque
          située à coté du collège au centre ville, nous a relayés localement
          pour les travaux de réhabilitation, et nous accompagne pour le
          fonctionnement et le développement de la bibliothèque de Chagüitillo.
        </p>

        <p>
          <strong>
            La COMUNIDAD INDIGENA DE SEBACO (
            <abbr title="Comunidad Indigena de Sebaco">CIS</abbr>)
          </strong>{" "}
          est une organisation officielle certifiée par l’état du Nicaragua. La{" "}
          <abbr title="Comunidad Indigena de Sebaco">CIS</abbr> conduit ses
          activités avec les objectifs suivants :
        </p>

        <ol className={style.list}>
          <li>
            <p>
              Promouvoir la défense légale de la population indigène et ses
              droits
            </p>
          </li>
          <li>
            <p>
              Promouvoir la réalisation des droits sociaux du peuple indigène de
              Sebaco, en gérant la prestation et l’assurance des services de
              base et tout ce qui implique l’amélioration des conditions de vie
            </p>
          </li>
          <li>
            <p>
              Promouvoir, sauvegarder et divulguer l’histoire du peuple
              indigène, promouvoir le développement de l’éducation et la
              culture.
            </p>
          </li>
          <li>
            <p>
              Travailler en harmonie, pour leur unité, avec les autres peuples
              indigènes, travail basé sur la reconnaissance de leurs propres
              réalités, traditions et intérêts pour promouvoir la réalisation de
              leurs droits
            </p>
          </li>
          <li>
            <p>
              Promouvoir la défense et la protection des ressources naturelles
              et le milieu ambiant dans les territoires des peuples indigènes
            </p>
          </li>
          <li>
            <p>
              Promouvoir l’égalité des chances entre les hommes et les femmes de
              tous âges.
            </p>
          </li>
          <li>
            <p>
              Promouvoir les relations de travail avec les institutions de
              l’Etat au niveau municipal comme avec les organismes non
              gouvernementaux nationaux et internationaux et agences de
              coopération, au moyen de programmes, plans et projets au bénéfice
              des peuples indigènes
            </p>
          </li>
          <li>
            <p>
              Promouvoir l’administration adéquate des ressources et améliorer
              leur utilisation et leur potentiel pour améliorer les conditions
              de vie du peuple indigène
            </p>
          </li>
        </ol>

        <p>
          La <abbr title="Comunidad Indigena de Sebaco">CIS</abbr> représentée
          par son président Victor Manuel CHAVARRIA DAVILA et NICARALI ont signé
          en Août 2014 une convention de partenariat pour la création d’une
          bibliothèque mobile pour les populations indigènes de 16 communautés.
          La <abbr title="Comunidad Indigena de Sebaco">CIS</abbr> s’est engagée
          à assurer le transport des livres en mettant à disposition une voiture
          et un chauffeur ainsi qu’ à assurer le salaire d’une bibliothécaire
          dédiée à la gestion de la bibliothèque mobile.
        </p>

        <p>
          Nous travaillons également avec la MAIRIE de Sébaco et le MINED
          (Ministère de l’éducation). La BIBLIOTECA DE SAN JUAN DEL SUR nous a
          apporté son soutien et ses conseils ainsi que l’ONG FONDO LIBROS PARA
          NINOS.
        </p>

        <p>
          En France et au Nicaragua nous comptons sur le soutien, la coopération
          et l’amitié sans faille de René et Annick Dufour de l’association
          VAULT EN VELIN- SEBACO, SOLIDARITE- DEVELOPPEMENT.
        </p>
      </article>
    </Layout>
  )
}

export default Partenaires

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
