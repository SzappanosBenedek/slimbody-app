import { Link } from 'react-router-dom'
import { Facebook, Instagram, Phone, MapPin, Mail } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-slate-900 pt-20 pb-10 border-t border-slate-800 text-slate-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand & Intro */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-2 text-white">
                            <span className="material-icons-outlined text-primary">spa</span>
                            <span className="font-display text-2xl font-bold tracking-tight uppercase">SlimBody</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Prémium alakformáló kezelések Szentendrén. HIEMT, Intimpad és Wiener aromaterápiás testtekercselés – diszkrét, professzionális környezetben.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/profile.php?id=61586982996096" target="_blank" rel="noopener noreferrer" aria-label="SlimBody Szentendre Facebook oldala" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://www.instagram.com/slimbody.szentendre?igsh=NWpnenR3MDY5cWdl&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="SlimBody Szentendre Instagram oldala" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Szolgáltatások */}
                    <div>
                        <h3 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Szolgáltatások</h3>
                        <ul className="space-y-4">
                            <li><Link to="/hiemt-kezeles-szentendre" className="text-slate-400 hover:text-primary transition-colors text-sm">HIEMT Kezelés</Link></li>

                            <li><Link to="/intimpad-medencefenek-erosites-szentendre" className="text-slate-400 hover:text-primary transition-colors text-sm">Intimpad Kezelés</Link></li>
                            <li><Link to="/wiener-testtekercseles-szentendre" className="text-slate-400 hover:text-primary transition-colors text-sm">Wiener Tekercselés</Link></li>
                        </ul>
                    </div>

                    {/* Információk */}
                    <div>
                        <h3 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Információk</h3>
                        <ul className="space-y-4">
                            <li><Link to="/arlista" className="text-slate-400 hover:text-primary transition-colors text-sm">Árlista & Bérletek</Link></li>
                            <li><Link to="/gyik" className="text-slate-400 hover:text-primary transition-colors text-sm">Gyakori Kérdések (GYIK)</Link></li>
                            <li><Link to="/kapcsolat" className="text-slate-400 hover:text-primary transition-colors text-sm">Kapcsolat</Link></li>
                        </ul>
                    </div>

                    {/* Elérhetőségek */}
                    <div>
                        <h3 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Elérhetőségek</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-slate-400 text-sm">2000 Szentendre, Korona u. 3.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                                <a href="tel:+36204562314" className="text-slate-400 hover:text-primary transition-colors text-sm">+36 20 456 2314</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                                <a href="mailto:slimbodyszentendre@gmail.com" className="text-slate-400 hover:text-primary transition-colors text-sm">slimbodyszentendre@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} SlimBody Studio. Minden jog fenntartva.
                    </p>
                    <div className="flex gap-6">
                        <Link to="/adatkezelesi-tajekoztato" className="text-sm text-slate-500 hover:text-white transition-colors">Adatkezelési Tájékoztató</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
