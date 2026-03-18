'use client';

export default function About() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8" style={{ background: 'transparent' }}>
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Tentang Saya</h1>
                    <p className="text-xl text-gray-600">Selamat datang di portfolio saya</p>
                </div>

                {/* Content */}
                <div className="rounded-lg shadow-lg p-8 mb-8" style={{ background: 'rgba(255,255,255,0.85)' }}>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Profil</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Saya adalah seorang developer web dengan passion dalam membuat aplikasi yang inovatif dan user-friendly.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Saya memiliki pengalaman dalam JavaScript, React, dan teknologi web modern lainnya.
                    </p>
                </div>

                {/* Skills */}
                <div className="rounded-lg shadow-lg p-8" style={{ background: 'rgba(255,255,255,0.85)' }}>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">Keterampilan</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-indigo-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-indigo-900 mb-2">Frontend</h3>
                            <p className="text-gray-700">React, JavaScript, CSS, Tailwind</p>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-indigo-900 mb-2">Backend</h3>
                            <p className="text-gray-700">Node.js, Express, Database</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
