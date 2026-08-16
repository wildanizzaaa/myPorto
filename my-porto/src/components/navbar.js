"use client";

import React from 'react';

export default function Navbar() {
    return (
        <nav
            style={{
                width: '100%',
                padding: '1rem 2rem',
                background: 'rgba(255, 193, 7, 0.25)',
                borderBottom: 'none',
                marginBottom: 0,
                position: 'sticky',
                top: 0,
                zIndex: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                flexWrap: 'nowrap',
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minWidth: 0, flexShrink: 1 }}>
                <span style={{ color: '#222', fontWeight: 600, fontSize: '20px', whiteSpace: 'nowrap' }}>
                    M. Wildan Izzaturrahman
                </span>
                <span style={{ color: '#555', fontWeight: 200, fontSize: '12px', marginTop: '3px', letterSpacing: '0.01em', whiteSpace: 'nowrap' }}>
                    The Pilot Who Secures the Clouds
                </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '1.25rem', flexWrap: 'nowrap', overflowX: 'auto', whiteSpace: 'nowrap', minWidth: 0 }}>
                <a href="#home" style={{ textDecoration: 'none', color: '#222', fontWeight: 500, paddingBottom: '2px', flexShrink: 0 }}>
                    Home
                </a>
                <a href="#about" style={{ textDecoration: 'none', color: '#222', fontWeight: 500, paddingBottom: '2px', flexShrink: 0 }}>
                    About
                </a>
                <a href="#project" style={{ textDecoration: 'none', color: '#222', fontWeight: 500, paddingBottom: '2px', flexShrink: 0 }}>
                    Project
                </a>
                <a href="#contact" style={{ textDecoration: 'none', color: '#222', fontWeight: 500, paddingBottom: '2px', flexShrink: 0 }}>
                    Contact
                </a>
            </div>
        </nav>
    );
}