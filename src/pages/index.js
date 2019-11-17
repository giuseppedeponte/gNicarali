import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import style from "../assets/style/home.module.css"

class Home extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Accueil" />
        <article>
          <h3>Pourquoi ?</h3>
          <figure class="right">
            <img
              src="http://nicarali.files.wordpress.com/2010/08/img11.jpg?w=500&amp;h=332"
              alt="Peinture murale à Chagüitillo"
              class=""
              title="Peinture murale à Chagüitillo"
            />
            <figcaption>Peinture murale à Chagüitillo</figcaption>
          </figure>
          <p>
            En France, les projets de solidarité envers les pays plus démunis
            vont surtout vers les pays africains. Une histoire commune
            particulière, les liens que cette histoire a tissés, une communauté
            de langue expliquent cette préférence presque naturelle. Aussi
            l’Amérique hispanique n’apparaît-elle pas comme une priorité aux
            yeux des français. C’est une région du monde, et particulièrement
            l’Amérique centrale, qui est bien mal connue ici, qui ne fait
            l’actualité chez nous que lors de tremblements de terre, d’éruptions
            volcaniques ou, hélas de plus en plus fréquemment d’ouragans
            dévastateurs. Pourtant ces petits pays souffrent de ce désintérêt,
            encore accentué quand toute la communauté internationale se mobilise
            face à des tragédies de l’ampleur de celle de Haïti en 2010 par
            exemple. Or, il nous semble, à nous, membres fondateurs de NICARALI,
            qu’il nous faut penser au développement des populations démunies à
            moyen et à long terme, en oeuvrant pour un accès efficace à
            l’éducation et à la culture par la lecture.
          </p>
        </article>
        <article>
          <h3>Le mot de la présidente</h3>
          <p>
            Ma rencontre avec l’Amérique latine, faite à l’adolescence, s’est
            depuis enrichie de mon expérience dans l’enseignement de l’espagnol.
            Les voyages se sont répétés, en Amérique centrale ces derniers
            années, pour à chaque fois en connaître un peu plus. Sans but
            précis, au gré des rencontres, des envies, des coups de cœur.
          </p>
          <Link to="/fr/22-08-2010-le-mot-de-la-presidente">Lire la suite</Link>
        </article>
        <article>
          <h3>Pourquoi le Nicaragua ?</h3>
          <figure class="left">
            <img
              src="http://nicarali.files.wordpress.com/2010/08/mapa2.jpg?w=257&amp;h=228"
              alt="L'Amérique Centrale"
              class=""
              title="L'Amérique Centrale"
            />
            <figcaption>L'Amérique Centrale</figcaption>
          </figure>
          <p>
            La population du Nicaragua est très jeune, plus de la moitié de la
            population a moins de vingt ans. 56% de la population enfantine vit
            dans la pauvreté ou l’extrême pauvreté (le quart souffre de
            dénutrition chronique). Plus de 600.000 enfants de moins de quinze
            ans travaillent pour participer au budget familial.
          </p>
          <Link to="/fr/23-08-2010-pourquoi-le-nicaragua.html">
            Lire la suite
          </Link>
        </article>
        <article>
          <h3>Pourquoi des bibliothèques publiques ?</h3>
          <p>
            Ainsi malgré les efforts fournis, les carences sont énormes. Or, il
            nous paraît fondamental d’œuvrer à ce que la population,
            particulièrement la plus pauvre, c’est-à-dire la plus grande partie,
            ait accès à la culture écrite. Le Nicaragua est un pays où la
            culture orale prédomine, une culture riche et précieuse, mais dans
            le monde d’ aujourd’hui, pour le développement plein de l’être
            humain, la lecture est un facteur fondamental. On ne peut parler de
            développement, de démocratie et de participation citoyenne quand une
            grande partie de la population n’a pas accès à la culture écrite ni
            au numérique et ne possède pas les outils de base pour y accéder. Le
            citoyen se doit de chercher à comprendre la réalité par lui-même, et
            pour cela il faut lire. Pour pouvoir imaginer, il faut avoir accès à
            la lecture qui ouvre la porte à la connaissance universelle, à la
            mémoire accumulée de l’humanité.
          </p>
        </article>
        <article>
          <h3>Pourquoi Chagüitillo ?</h3>
          <figure class="right">
            <img
              src="http://nicarali.files.wordpress.com/2010/07/image3.jpg?w=400&amp;h=268"
              alt="Classe unique à l'école de Monte Grande"
              class=""
              title="Classe unique à l'école de Monte Grande"
            />
            <figcaption>Classe unique à l'école de Monte Grande</figcaption>
          </figure>
          <p>
            C’est à <strong>Chagüitillo</strong> que nous avons décidé d’œuvrer
            à la création d’une première bibliothèque publique car là existe une
            association nicaraguayenne,{" "}
            <strong>
              <abbr title="Association pour le Développement de Chagüitillo">
                ADCH
              </abbr>
            </strong>
            , dont Nicarali est le partenaire et avec qui a été élaboré le
            projet. L’association ADCH œuvre depuis 1984 dans la vallée de
            Sébaco. Elle a été à l’origine de nombreux projets dans tous les
            domaines et est fortement implantée sur place. D’autre part, le
            projet de bibliothèque s’inscrit à l’intérieur d’un projet culturel
            plus vaste qui concerne la ville de Chagüitillo, la vallée de Sébaco
            et les 26 communautés indigènes qui s’y trouvent. Ainsi ont été
            construits un Collège, le Musée précolombien, un centre pour enfants
            handicapés, etc (voir{" "}
            <Link to="/fr/partners">« Nos Partenaires »</Link>)… La bibliothèque
            participe naturellement à cette dynamique locale et contribue au
            développement culturel de toute la région et du pays.
          </p>
        </article>
      </Layout>
    )
  }
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
