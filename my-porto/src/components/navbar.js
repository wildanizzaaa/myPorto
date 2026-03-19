"use client";

import React from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    return (
        <nav
            style={{
                width: '100%',
                padding: '1rem 2rem',
                background: 'rgba(255, 193, 7, 0.25)', // kuning transparan
                borderBottom: 'none',
                marginBottom: 0,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr',
                alignItems: 'center',
            }}
        >
            {/* Kotak 1: Nama di tengah */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ color: '#222', fontWeight: 600, fontSize: '20px' }}>
                    M. Wildan Izzaturrahman
                </span>
                <span style={{ color: '#555', fontWeight: 200, fontSize: '12px', marginTop: '3px', letterSpacing: '0.01em' }}>
                    The Pilot Who Secures the Clouds
                </span>
            </div>
            {/* Kotak 2: Kosong */}
            <div></div>
            {/* Kotak 3: Kosong */}
            <div></div>
            {/* Kotak 4: Menu (Home, About) mepet kiri */}
            <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '1.5rem' }}>
                <a
                    href="/"
                    style={{
                        textDecoration: 'none',
                        color: '#222',
                        fontWeight: 500,
                        borderBottom: pathname === '/' ? '2px solid #222' : 'none',
                        paddingBottom: '2px',
                        transition: 'border-bottom 0.2s',
                    }}
                >
                    Home
                </a>
                <a
                    href="/about"
                    style={{
                        textDecoration: 'none',
                        color: '#222',
                        fontWeight: 500,
                        borderBottom: pathname === '/about' ? '2px solid #222' : 'none',
                        paddingBottom: '2px',
                        transition: 'border-bottom 0.2s',
                    }}
                >
                    About
                </a>
                <a
                    href="/project"
                    style={{
                        textDecoration: 'none',
                        color: '#222',
                        fontWeight: 500,
                        borderBottom: pathname === '/project' ? '2px solid #222' : 'none',
                        paddingBottom: '2px',
                        transition: 'border-bottom 0.2s',
                    }}
                >
                    Project
                </a>
                <a
                    href="/contact"
                    style={{
                        textDecoration: 'none',
                        color: '#222',
                        fontWeight: 500,
                        borderBottom: pathname === '/contact' ? '2px solid #222' : 'none',
                        paddingBottom: '2px',
                        transition: 'border-bottom 0.2s',
                    }}
                >
                    Contact
                </a>
            </div>
        </nav>
    );
}