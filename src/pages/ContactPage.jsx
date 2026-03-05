import SEO from '../components/SEO'
import LazyMap from '../components/LazyMap'
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

// ── EmailJS konfiguráció ──────────────────────────────────────────────────────
// Ezeket az emailjs.com fiókodból kell kitölteni (lásd: lentebb az útmutatót)
const EMAILJS_SERVICE_ID = 'service_xf91aes'
const EMAILJS_TEMPLATE_ID = 'template_n74250c'
const EMAILJS_PUBLIC_KEY = 'SNuNFnVa-xcD2rVNB'
// ─────────────────────────────────────────────────────────────────────────────


export default function ContactPage() {
    const [status, setStatus] = useState('idle') // idle | loading | success | error
    const formRef = useRef()
    return (
        <>
            <SEO
                title="Kapcsolat & Időpontfoglalás | SlimBody Szentendre | Korona u. 3."
                description="Vegyen fel velünk kapcsolatot! SlimBody Szentendre, Korona utca 3. Tel: +36 20 456 2314. Ingyenes parkolás! Alakformáló kezelések foglalása."
                path="/kapcsolat"
                breadcrumbs={[{ name: 'Kapcsolat', path: '/kapcsolat' }]}
            />

            {/* Header */}
            <section className="bg-slate-50 dark:bg-background-dark pt-24 pb-16 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full top-0 left-1/2 -translate-x-1/2 min-w-[800px] h-[500px]"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-6 text-slate-900 dark:text-white">
                        Kezdjen bele <br className="hidden md:block" />
                        <span className="italic text-primary">az átalakulásba</span>
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 text-balance">
                        Lépjen velünk kapcsolatba bátran! Tegye fel kérdéseit, vagy érdeklődjön szolgáltatásainkról – várjuk prémium környezetben Szentendrén.
                    </p>
                </div>
            </section>

            {/* Main Content (Contact Info & Form) */}
            <section className="py-12 px-6 max-w-7xl mx-auto mb-24">
                <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">

                    {/* Contact Info Column */}
                    <div className="w-full lg:w-5/12 space-y-10">
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                                <MapPin className="w-48 h-48 text-primary" />
                            </div>
                            <h2 className="text-2xl font-display font-bold mb-8 relative z-10">Elérhetőségeink</h2>

                            <div className="space-y-8 relative z-10">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-1">Cím</p>
                                        <p className="text-lg font-medium text-slate-900 dark:text-white">2000 Szentendre,<br /> Korona utca 3.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-1">Telefon</p>
                                        <a href="tel:+36204562314" className="text-lg font-medium text-slate-900 dark:text-white hover:text-primary transition-colors block">+36 20 456 2314</a>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-3">Nyitvatartás</p>
                                        <div className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                                            {[
                                                { nap: 'Hétfő', ido: '8:00–20:00' },
                                                { nap: 'Kedd', ido: '8:00–20:00' },
                                                { nap: 'Szerda', ido: '8:00–20:00' },
                                                { nap: 'Csütörtök', ido: '8:00–20:00' },
                                                { nap: 'Péntek', ido: '8:00–20:00' },
                                                { nap: 'Szombat', ido: 'Zárva', closed: true },
                                                { nap: 'Vasárnap', ido: 'Zárva', closed: true },
                                            ].map(({ nap, ido, closed }) => (
                                                <div key={nap} className="flex justify-between gap-6">
                                                    <span className="font-medium">{nap}</span>
                                                    <span className={closed ? 'text-red-400' : ''}>{ido}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-700 relative z-10">
                                <p className="text-sm text-slate-500 mb-4">Kövess minket közösségi oldalainkon:</p>
                                <div className="flex gap-4">
                                    <a href="https://www.facebook.com/profile.php?id=61586982996096" target="_blank" rel="noopener noreferrer" aria-label="SlimBody Szentendre Facebook oldala" className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-all">
                                        <Facebook className="w-5 h-5" />
                                    </a>
                                    <a href="https://www.instagram.com/slimbody.szentendre?igsh=NWpnenR3MDY5cWdl&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="SlimBody Szentendre Instagram oldala" className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-all">
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Map Embed */}
                        <div className="h-[300px] w-full rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 relative ios-blur">
                            <LazyMap
                                classNameWrap="absolute inset-0"
                                iframeClassName="w-full h-full grayscale contrast-125 opacity-90 dark:mix-blend-lighten"
                            />
                        </div>
                    </div>

                    {/* Contact Form Column */}
                    <div className="w-full lg:w-7/12">
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
                            <h2 className="text-3xl font-display font-medium mb-2">Üzenetküldés</h2>
                            <p className="text-slate-500 mb-8">Kérjük, töltse ki az alábbi űrlapot, és küldje el nekünk kérdését vagy érdeklődését e-mailben.</p>

                            <form
                                ref={formRef}
                                className="space-y-6"
                                onSubmit={async (e) => {
                                    e.preventDefault();
                                    setStatus('loading');
                                    try {
                                        await emailjs.sendForm(
                                            EMAILJS_SERVICE_ID,
                                            EMAILJS_TEMPLATE_ID,
                                            formRef.current,
                                            { publicKey: EMAILJS_PUBLIC_KEY }
                                        );
                                        setStatus('success');
                                        e.target.reset();
                                    } catch {
                                        setStatus('error');
                                    }
                                }}
                            >
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300 block">Név *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-slate-900 dark:text-white"
                                            placeholder="Teljes név"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-semibold text-slate-700 dark:text-slate-300 block">Telefonszám *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-slate-900 dark:text-white"
                                            placeholder="+36 20 123 4567"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300 block">E-mail cím *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-slate-900 dark:text-white"
                                        placeholder="pelda@email.hu"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="treatment" className="text-sm font-semibold text-slate-700 dark:text-slate-300 block">Kezelés *</label>
                                    <select
                                        id="treatment"
                                        name="treatment"
                                        required
                                        defaultValue=""
                                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none text-slate-900 dark:text-white"
                                    >
                                        <option value="" disabled>Válassza ki a kívánt kezelést</option>
                                        <option value="HIEMT (1 vagy 2 terület)">HIEMT (1 vagy 2 terület)</option>
                                        <option value="HIEMT Intimpad">HIEMT Intimpad</option>
                                        <option value="Wiener Testtekercselés">Wiener Testtekercselés</option>
                                        <option value="Kombinált / Egyéb kérdés">Kombinált / Egyéb kérdés</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300 block">Üzenet</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none text-slate-900 dark:text-white"
                                        placeholder="Miben segíthetünk? Milyen kérdése van?"
                                    ></textarea>
                                </div>

                                <div className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        id="privacy"
                                        required
                                        className="mt-1 w-4 h-4 text-primary bg-slate-100 border-slate-300 rounded focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-slate-700 dark:border-slate-600 accent-primary"
                                    />
                                    <label htmlFor="privacy" className="text-sm text-slate-600 dark:text-slate-400 leading-tight">
                                        Megismertem és elfogadom az <Link to="/adatkezelesi-tajekoztato" className="text-primary hover:underline">Adatkezelési Tájékoztatót</Link>, és hozzájárulok az adataim kezeléséhez a kapcsolatfelvétel céljából.
                                    </label>
                                </div>

                                {status === 'success' ? (
                                    <div className="py-12 flex flex-col items-center text-center gap-4">
                                        <CheckCircle className="w-14 h-14 text-green-500" />
                                        <h3 className="text-2xl font-display font-medium text-slate-900 dark:text-white">Üzenet elküldve!</h3>
                                        <p className="text-slate-500">Köszönjük érdeklődését, hamarosan felvesszük Önnel a kapcsolatot.</p>
                                        <button
                                            type="button"
                                            onClick={() => setStatus('idle')}
                                            className="mt-4 text-sm text-primary underline"
                                        >
                                            Új üzenet küldése
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        {status === 'error' && (
                                            <p className="text-red-500 text-sm">Hiba történt az üzenet küldésekor. Kérjük, próbálja újra.</p>
                                        )}
                                        <button
                                            type="submit"
                                            disabled={status === 'loading'}
                                            className="w-full bg-primary hover:bg-primary-dark disabled:opacity-60 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group mt-4"
                                        >
                                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            {status === 'loading' ? 'Küldés...' : 'Üzenet küldése'}
                                        </button>
                                    </>
                                )}
                            </form>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
