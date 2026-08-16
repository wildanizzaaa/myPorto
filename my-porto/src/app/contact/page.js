'use client';

import { useState } from 'react';

export default function Contact() {
    const recipient = 'wildanmuhammad78@gmail.com';
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const subject = encodeURIComponent(`Contact from ${name || 'Website Visitor'}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    }

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Contact Me</h1>
                    <p className="text-gray-600 mt-2">Send a message or email me directly at <a href={`mailto:${recipient}`} className="text-blue-600 underline">{recipient}</a>.</p>
                </div>

                <div className="rounded-lg shadow-lg p-6" style={{ background: 'rgba(255,255,255,0.95)' }}>
                    <form onSubmit={handleSubmit}>
                        <label className="block mb-2">
                            <span className="text-gray-700">Name</span>
                            <input value={name} onChange={e=>setName(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2" placeholder="Your name" />
                        </label>

                        <label className="block mb-2">
                            <span className="text-gray-700">Email</span>
                            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2" placeholder="you@example.com" />
                        </label>

                        <label className="block mb-4">
                            <span className="text-gray-700">Message</span>
                            <textarea value={message} onChange={e=>setMessage(e.target.value)} rows={6} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2" placeholder="Write your message..." />
                        </label>

                        <div className="flex items-center justify-between">
                            <button type="submit" className="inline-block px-6 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500">Send</button>
                            <a href={`mailto:${recipient}`} className="text-sm text-gray-600 underline">Or email directly</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
