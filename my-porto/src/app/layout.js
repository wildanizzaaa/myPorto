import "./globals.css";
import Navbar from "@/components/navbar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Navbar utama di bagian atas */}
        <Navbar />

        {/* Konten utama halaman */}
        {children}

        {/* Footer di bagian bawah */}
        <footer
          style={{
            width: '100%',
            padding: '1rem 2rem',
            background: '#f4f4f5',
            borderTop: '1px solid #e5e7eb',
            marginTop: '2rem',
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
