import Head from 'next/head'
import Link from 'next/link'

export default function MainLayout({ children, title = 'My Next Website', page = 'not-home' }) {
  return (
    <div className={`main-container ${page}`}>
      <Head>
        <title>{title} | First Version</title>
      </Head>
      <header className="pt-3 pb-3">
        <div className="container">
          <div className="logo">
            <Link href="/"><a><img src="/assets/images/logo.jpg" alt="Logo" /></a></Link>
          </div>
          <nav className="header-nav">
              <Link href="/"><a>Home</a></Link>
              <Link href="/contact"><a className="ml-3">Contact</a></Link>
          </nav>
        </div>
      </header>
      <main>
        { children }
      </main>
    </div>
  )
}