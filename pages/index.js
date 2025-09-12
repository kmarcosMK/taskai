import Head from 'next/head'
export default function Home(){
  return (
    <div className="page">
      <Head><title>TaskAI – Inspiracje i trendy AI</title></Head>
      <header className="hero">
        <div className="container">
          <h1 className="logo">TaskAI</h1>
          <p className="subtitle">Inspiracje, narzędzia i pomysły: jak AI usprawnia zadania i produktywność.</p>
          <div className="cta">
            <a className="btn primary" href="/blog">Czytaj blog</a>
            <a className="btn ghost" href="/about">O projekcie</a>
          </div>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="container">
            <h2>Tematy</h2>
            <div className="grid">
              <div className="card"><h3>Automatyzacja zadań</h3><p>Boty, integracje, przepływy pracy.</p></div>
              <div className="card"><h3>Asystenci pisania</h3><p>AI wspomagające treści i komunikację.</p></div>
              <div className="card"><h3>Analiza danych</h3><p>Raporty, wsparcie decyzji, wizualizacje.</p></div>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <h2>AI w różnych odsłonach</h2>
            <p>Subtelne odniesienia do powiązanych domen i kierunków – bez nachalnej reklamy.</p>
            <div className="partners">
              <a className="partner" href="https://irobo.pl" target="_blank" rel="noopener noreferrer"><strong>iRobo</strong><span>robotyka i inteligentne maszyny</span></a>
              <a className="partner" href="https://taskbot.pl" target="_blank" rel="noopener noreferrer"><strong>TaskBot</strong><span>automatyzacja procesów i boty</span></a>
              <a className="partner" href="https://ejep.pl" target="_blank" rel="noopener noreferrer"><strong>Ejep</strong><span>przyszłość pracy i nowe zawody</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© 2025 TaskAI · Treści informacyjne. Częściowo generowane przy użyciu narzędzi AI. Przed wykorzystaniem sprawdź źródła.</p>
          <nav className="footnav"><a href="/about">O nas</a> <a href="/privacy">Polityka prywatności</a> <a href="/contact">Kontakt</a></nav>
        </div>
      </footer>

      <style jsx>{`
        :root{ --bg1:#0f0c29; --bg2:#302b63; --accent1:#00ffe7; --accent2:#a855f7; }
        .page{ min-height:100%; background: linear-gradient(135deg,var(--bg1),var(--bg2)); color:#fff; font-family:Inter,system-ui,Segoe UI,Roboto,Arial; }
        .container{ max-width:1100px; margin:0 auto; padding:0 20px; }
        .hero{ padding:80px 0; text-align:center; }
        .logo{ font-size:48px; margin:0; background: linear-gradient(90deg,var(--accent1),var(--accent2)); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
        .subtitle{ color:#ccd; max-width:700px; margin:10px auto 20px; }
        .cta .btn{ display:inline-block; margin:8px; padding:12px 22px; border-radius:999px; text-decoration:none; font-weight:600; }
        .btn.primary{ background: linear-gradient(90deg,var(--accent1),var(--accent2)); color:#000; }
        .btn.ghost{ border:1px solid rgba(255,255,255,0.12); color:#fff; background:transparent; }

        .section{ padding:60px 0; text-align:center; }
        .section.alt{ background: rgba(255,255,255,0.02); }
        .grid{ display:grid; grid-template-columns: repeat(auto-fit,minmax(220px,1fr)); gap:20px; margin-top:24px; }
        .card{ background: rgba(255,255,255,0.04); padding:18px; border-radius:12px; text-align:left; }
        .partners{ display:flex; gap:16px; justify-content:center; flex-wrap:wrap; margin-top:18px; }
        .partner{ display:block; width:220px; padding:14px; border-radius:10px; text-decoration:none; color:#fff; background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); border:1px solid rgba(255,255,255,0.04); text-align:left; }
        .partner strong{ display:block; font-size:16px; color:var(--accent1); }
        .partner span{ display:block; font-size:13px; color:#bbb; margin-top:6px; }

        .footer{ padding:28px 0; background:#07060a; font-size:14px; color:#9aa; }
        .footnav a{ color:#9aa; margin-left:12px; text-decoration:none; }
      `}</style>
    </div>
  )
}
