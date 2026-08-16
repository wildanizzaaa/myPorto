import About from './about/page';
import ProjectPage from './project/page';
import Contact from './contact/page';

export default function Home() {
  return (
    <div>
      <section id="home" className="flex items-center justify-center min-h-[70vh] w-full px-4 py-12">
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 overflow-hidden p-0 md:p-0">
          <div className="order-1 md:order-2 flex items-center justify-center p-0 md:p-8">
            <img
              src="/Muhammad Wildan Izzaturrahman - Crop-jukebox-bg-removed.png"
              alt="Foto Muhammad Wildan Izzaturrahman"
              width={300}
              height={320}
              style={{ borderRadius: 0, border: 'none', boxShadow: 'none', background: 'transparent' }}
            />
          </div>

          <div className="order-2 md:order-1 flex flex-col justify-center items-center md:items-start px-8 py-12 md:py-20 w-full md:max-w-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 flex items-center gap-2">
              Hi, I'm Wildan
              <span
                role="img"
                aria-label="Waving Hand"
                style={{
                  fontSize: '1.2em',
                  display: 'inline-block',
                  animation: 'wave 1.5s infinite ease-in-out'
                }}
              >
                👋
              </span>
            </h1>
            <p className="text-lg md:text-xl font-medium mb-8 max-w-md" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.25)' }}>
              Your Pilot, Security Engineer &amp; Full Stack Developer
            </p>
            <div className="flex gap-4">
              <a
                href="#about"
                className="inline-block px-8 py-3 rounded-full font-semibold text-lg bg-blue-600 hover:bg-blue-500 text-white border border-blue-700 transition-all duration-200 shadow-lg backdrop-blur"
                style={{ textDecoration: 'none', letterSpacing: '0.02em' }}
              >
                About Me
              </a>
              <a
                href="mailto:wildanmuhammad78@gmail.com"
                className="inline-block px-8 py-3 rounded-full font-semibold text-lg bg-green-600 hover:bg-green-500 text-white border border-green-700 transition-all duration-200 shadow-lg backdrop-blur"
                style={{ textDecoration: 'none', letterSpacing: '0.02em' }}
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      <div id="about">
        <About />
      </div>

      <div id="project">
        <ProjectPage />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  );
}
