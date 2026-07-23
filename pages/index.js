import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AstroMind - Astrophysics Explorer</title>
        <meta name="description" content="Explore the wonders of astrophysics with AstroMind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.highlight}>AstroMind</span>
        </h1>

        <p className={styles.description}>
          Explore the cosmos and unlock the mysteries of astrophysics
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>🌟 Stars &rarr;</h2>
            <p>Discover the life cycles of stars and their characteristics</p>
          </div>

          <div className={styles.card}>
            <h2>🪐 Planets &rarr;</h2>
            <p>Learn about planets in our solar system and beyond</p>
          </div>

          <div className={styles.card}>
            <h2>🌌 Galaxies &rarr;</h2>
            <p>Explore different types of galaxies across the universe</p>
          </div>

          <div className={styles.card}>
            <h2>🚀 Space &rarr;</h2>
            <p>Understand the vast expanse of space and cosmic phenomena</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Made with ❤️ for space enthusiasts | Powered by AstroMind 🚀</p>
      </footer>
    </div>
  )
}
