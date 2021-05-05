import Router from "next/router"

import Image from '$src/assets/images/goodBye.png'
import Layout from '../components/Layout'

import styles from './styles.module.scss'

const IndexPage = () => {
  return (
    <Layout title="Trefle Plant">
      <div className={styles.wrapper}>
        <div className={styles.illustration}>
          <img src={Image} alt="Trefle plant" />
        </div>
       <div className={styles.content}>
        <h1 style={{ marginBottom: '1rem', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '2.2rem' }}>
          Good Bye, Trefle
        </h1>
        <p style={{ fontFamily: 'Roboto', fontSize: '.9rem', lineHeight: '1.3rem', marginBottom: '1.5rem' }}>
        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié <span
            style={{ cursor: 'pointer', fontStyle: 'italic', color: '#359160', textDecoration: 'underline' }}
            onClick={() => Router.push('/plant')}
          >
            See example
          </span>.
        </p>
        <p style={{ textDecorationLine: 'none', fontStyle: 'normal', fontFamily: 'Dancing Script', marginTop: '0.5rem', fontSize: '2rem' }}>Cindy Stf.</p>
       </div>
      </div>
    </Layout>
  )
}

export default IndexPage
