import Head from 'next/head'
export default function Home(){ return (
  <div className="page">
    <Head><title>TaskAI – AI w zadaniach i produktywności</title></Head>
    <header className="hero"><div className="container"><h1 className="logo">TaskAI</h1><p className="subtitle">Praktyczne inspiracje, analizy i narzędzia — jak sztuczna inteligencja usprawnia zadania, procesy i decyzje.</p><div><a className="btn primary" href="#why">Dlaczego AI</a><a className="btn" href="/blog">Zobacz artykuły</a></div></div></header>
    <main>
      <section id="why" className="section"><div className="container"><h2>Dlaczego AI w zadaniach?</h2><p>AI działa najlepiej tam, gdzie istnieją powtarzalne zadania i dane. Na początku warto mierzyć efekty i wdrażać stopniowo.</p></div></section>
    </main>
    <footer className="footer"><div className="container"><p>© 2025 TaskAI.pl · Treści informacyjne.</p><div className="partner-links"><a href="https://taskbot.pl" target="_blank" rel="noopener noreferrer">taskbot.pl</a><a href="https://ejep.pl" target="_blank" rel="noopener noreferrer">ejep.pl</a><a href="https://irobo.pl" target="_blank" rel="noopener noreferrer">irobo.pl</a></div></div></footer>
  </div>
) }
