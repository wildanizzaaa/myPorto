'use client';

const profileContent = "I am a Cyber Security student at Bina Nusantara University and a Full Stack JavaScript Developer, with a background in professional aviation. I graduated from Hacktiv8’s Fullstack JavaScript Immersive Program in August 2024 and the Polytechnic of Aviation Indonesia, Curug (STPI), in 2021.\n\nI am a qualified Commercial Pilot holding a Commercial Pilot License (CPL), Instrument Rating (IR), and Multi-Engine Land Rating (MER). As a former Military Pilot Student at Sekolah Penerbang TNI AU, I developed strong technical skills and discipline through training in aerobatic, low-level, and formation flying. I have accumulated 240 total flight hours, including experience on both single-engine and multi-engine aircraft.\n\nMy aviation background has shaped my approach to technology: **discipline, situational awareness, precision, SOP compliance, and risk management**. Today, I combine this pilot mindset with my passion for Cyber Security and Full Stack Development to build secure, reliable, and practical technology solutions.";
const profileImage = '/in_cockpit.jpeg';
const profileAlt = 'Foto profil';

export default function About() {



    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8" style={{ background: '#ffffff' }}>
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
                    <p className="text-xl text-gray-600">Welcome to my portfolio!</p>
                </div>

                {/* Content */}
                <div className="rounded-lg shadow-lg p-8 mb-8" style={{ background: 'rgba(255,255,255,0.85)' }}>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Profile</h2>

                    <div className="flex flex-col md:flex-row items-start md:items-start gap-6">
                        <div className="flex-1">
                            <p className="text-gray-700 leading-relaxed mb-4">{profileContent}</p>
                        </div>

                        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden bg-gray-100 shrink-0 self-start">
                            <img src={profileImage} alt={profileAlt} className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="rounded-lg shadow-lg p-8" style={{ background: 'rgba(255,255,255,0.85)' }}>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">Skill</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-indigo-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-indigo-900 mb-2">Frontend</h3>
                            <p className="text-gray-700">React, JavaScript, CSS, Tailwind</p>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-indigo-900 mb-2">Backend</h3>
                            <p className="text-gray-700">Node.js, Express, SQL</p>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-indigo-900 mb-2">Security</h3>
                            <p className="text-gray-700">Git, Testing, Auditor</p>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-indigo-900 mb-2">Aviation</h3>
                            <p className="text-gray-700">Pilot Situation Awareness, Formation Flying, Low-Terrain Flying, Basic Aerobatic Maneuvers</p>
                        </div>
                    </div>
                </div>

                {/* Language */}
                <div className="rounded-lg shadow-lg p-8 mt-6" style={{ background: 'rgba(255,255,255,0.85)' }}>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">Language</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-indigo-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-indigo-900 mb-2">Bahasa Indonesia</h3>
                            <p className="text-gray-700">Native</p>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-indigo-900 mb-2">English</h3>
                            <p className="text-gray-700">Fluent</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
