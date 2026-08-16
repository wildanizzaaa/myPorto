'use client';

import { useState } from 'react';

const defaultProfile = `I am a Cyber Security student at Bina Nusantara University and a Full Stack JavaScript Developer, with a background in professional aviation. I graduated from Hacktiv8’s Fullstack JavaScript Immersive Program in August 2024 and the Polytechnic of Aviation Indonesia, Curug (STPI), in 2021.

I am a qualified Commercial Pilot holding a Commercial Pilot License (CPL), Instrument Rating (IR), and Multi-Engine Land Rating (MER). As a former Military Pilot Student at Sekolah Penerbang TNI AU, I developed strong technical skills and discipline through training in aerobatic, low-level, and formation flying. I have accumulated 240 total flight hours, including experience on both single-engine and multi-engine aircraft.

My aviation background has shaped my approach to technology: discipline, situational awareness, precision, SOP compliance, and risk management. Today, I combine this pilot mindset with my passion for Cyber Security and Full Stack Development to build secure, reliable, and practical technology solutions.`;

export default function CmsAboutPage() {
  const [profileText, setProfileText] = useState(defaultProfile);
  const [imagePreview, setImagePreview] = useState('/in_cockpit.jpeg');

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Data About Me berhasil disimpan (simulasi CMS lokal).');
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-6">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-5 shadow-sm md:p-8">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">CMS</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">Edit About Me</h1>
          </div>

          <button
            type="button"
            className="rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Save Changes
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <label className="mb-2 block text-sm font-semibold text-slate-700">Profile Content</label>
              <textarea
                value={profileText}
                onChange={(e) => setProfileText(e.target.value)}
                rows={12}
                className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
              />
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <label className="mb-2 block text-sm font-semibold text-slate-700">Skills</label>
              <div className="grid gap-3 md:grid-cols-2">
                <input className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500" defaultValue="Frontend" />
                <input className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500" defaultValue="React, JavaScript, CSS, Tailwind" />
                <input className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500" defaultValue="Backend" />
                <input className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500" defaultValue="Node.js, Express, SQL" />
                <input className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500" defaultValue="Security" />
                <input className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500" defaultValue="Git, Testing, Auditor" />
                <input className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500" defaultValue="Aviation" />
                <input className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500" defaultValue="Pilot mindset, risk management" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <label className="mb-3 block text-sm font-semibold text-slate-700">Profile Photo</label>
              <div className="overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-white p-3">
                <img
                  src={imagePreview}
                  alt="Profile preview"
                  className="h-64 w-full rounded-xl object-cover"
                />
              </div>

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-4 block w-full text-sm text-slate-600 file:mr-4 file:rounded-xl file:border-0 file:bg-slate-900 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
              />
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <label className="mb-2 block text-sm font-semibold text-slate-700">Language</label>
              <div className="space-y-3">
                <input className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500" defaultValue="Bahasa Indonesia - Native" />
                <input className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500" defaultValue="English - Fluent" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
            >
              Simpan About Me
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
