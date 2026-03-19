import "./globals.css";
import Navbar from "@/components/navbar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Navbar utama di bagian atas */}
        <Navbar />


        {/* Konten utama halaman */}
        <main style={{ background: 'rgba(0, 255, 255, 0.18)', minHeight: '60vh', width: '100%' }}>
          {children}
        </main>

        {/* Footer di bagian bawah */}
        <footer
          style={{
            width: '100%',
            padding: '1rem 2rem',
            background: '#f4f4f5',
              borderTop: 'none',
              marginTop: 0,
            textAlign: 'center',
            color: '#666',
            fontSize: '1rem',
          }}
        >
          © {new Date().getFullYear()} MyPorto. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
