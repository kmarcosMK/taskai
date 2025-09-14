import Link from "next/link";
import Script from "next/script";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>

      {/* Główny header */}
      <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">TaskAI</h1>
          <nav className="space-x-6">
            <Link href="/" className="hover:text-blue-600 font-medium">
              Strona główna
            </Link>
            <Link href="/blog" className="hover:text-blue-600 font-medium">
              Blog
            </Link>
            <Link href="/about" className="hover:text-blue-600 font-medium">
              O nas
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero / Intro */}
      <section className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Inteligentne rozwiązania dla Twojej pracy
          </h2>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-8">
            TaskAI pomaga w organizacji zadań, zarządzaniu projektami i
            automatyzacji procesów dzięki sztucznej inteligencji.
          </p>
          <Link
            href="/blog"
            className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Przeczytaj artykuły
          </Link>
        </div>
      </section>

      {/* Sekcja z blogiem */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Najnowsze wpisy na blogu
          </h3>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition bg-gray-50">
              <h4 className="text-xl font-semibold mb-2 text-blue-700">
                Jak AI zmienia zarządzanie zadaniami
              </h4>
              <p className="text-gray-700 mb-4">
                Sztuczna inteligencja rewolucjonizuje sposób, w jaki pracujemy.
                Dowiedz się, jak narzędzia AI pomagają w codziennym planowaniu.
              </p>
              <Link
                href="/blog/ai-zarzadzanie"
                className="text-blue-600 font-medium hover:underline"
              >
                Czytaj więcej →
              </Link>
            </div>

            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition bg-gray-50">
              <h4 className="text-xl font-semibold mb-2 text-blue-700">
                Automatyzacja procesów w firmie
              </h4>
              <p className="text-gray-700 mb-4">
                Automatyzacja to już nie przyszłość, ale teraźniejszość.
                Sprawdź, jak Twoja firma może oszczędzić czas i koszty.
              </p>
              <Link
                href="/blog/automatyzacja-procesow"
                className="text-blue-600 font-medium hover:underline"
              >
                Czytaj więcej →
              </Link>
            </div>

            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition bg-gray-50">
              <h4 className="text-xl font-semibold mb-2 text-blue-700">
                Przyszłość pracy zdalnej
              </h4>
              <p className="text-gray-700 mb-4">
                Remote work stała się normą. Jakie narzędzia i strategie
                sprawiają, że zespoły rozproszone działają efektywnie?
              </p>
              <Link
                href="/blog/przyszlosc-pracy-zdalnej"
                className="text-blue-600 font-medium hover:underline"
              >
                Czytaj więcej →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stopka */}
      <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} TaskAI. Wszystkie prawa zastrzeżone.
          </p>
          <div className="space-x-4 mt-4 md:mt-0">
            <a href="https://ejep.pl" className="hover:text-white">
              ejep.pl
            </a>
            <a href="https://taskbot.pl" className="hover:text-white">
              taskbot.pl
            </a>
            <a href="https://etuto.pl" className="hover:text-white">
              etuto.pl
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
