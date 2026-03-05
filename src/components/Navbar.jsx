import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowLeft } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Prefetch all lazy route chunks (called once on menu open)
const prefetchRoutes = () => {
    import('../pages/HiemtPage')
    import('../pages/IntimpadPage')
    import('../pages/WienerPage')
    import('../pages/PricingPage')
    import('../pages/ContactPage')
    import('../pages/FaqPage')
    import('../pages/PrivacyPage')
}
let prefetched = false

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    const links = [
        { name: 'Kezelések', path: '/' },
        { name: 'HIEMT', path: '/hiemt-kezeles-szentendre' },
        { name: 'Intimpad', path: '/intimpad-medencefenek-erosites-szentendre' },
        { name: 'Wiener', path: '/wiener-testtekercseles-szentendre' },
        { name: 'Árlista', path: '/arlista' },
        { name: 'GYIK', path: '/gyik' },
    ]

    // Menü nyitva → body scroll zárolása (tartalom nem tekerhető át)
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
            document.body.style.position = 'fixed'
            document.body.style.width = '100%'
        } else {
            document.body.style.overflow = ''
            document.body.style.position = ''
            document.body.style.width = ''
        }
        return () => {
            document.body.style.overflow = ''
            document.body.style.position = ''
            document.body.style.width = ''
        }
    }, [isOpen])

    // Ha az útvonal megváltozott → menü bezárása
    useEffect(() => {
        setIsOpen(false)
    }, [location.pathname])

    // Menü megnyitásakor azonnal prefetch-eli az összes route chunkot
    const handleToggle = useCallback(() => {
        const opening = !isOpen
        setIsOpen(opening)
        if (opening && !prefetched) {
            prefetched = true
            prefetchRoutes()
        }
    }, [isOpen])

    const handleClose = useCallback(() => setIsOpen(false), [])

    const isActive = (path) => {
        if (path === '/' && location.pathname !== '/') return false
        return location.pathname.startsWith(path)
    }

    return (
        <>
            <nav
                className="fixed top-0 left-0 right-0 w-full z-[1000] bg-background-light/95 dark:bg-background-dark/95 border-b border-slate-100 dark:border-slate-800 transition-colors"
                style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                    <Link to="/" className="flex items-center gap-2 group z-50">
                        <span className="material-icons-outlined text-primary group-hover:scale-110 transition-transform">spa</span>
                        <span className="font-display text-2xl font-bold tracking-tight uppercase text-slate-800 dark:text-slate-100">SlimBody</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm tracking-wide font-medium transition-colors ${isActive(link.path)
                                    ? 'text-primary dark:text-primary'
                                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/kapcsolat"
                            className="ml-4 px-6 py-2.5 bg-primary hover:bg-primary-dark text-slate-900 text-sm font-semibold rounded-full transition-all shadow-md shadow-primary/20"
                        >
                            Kapcsolat
                        </Link>
                    </div>

                    {/* Mobile Toggle Button */}
                    <button
                        className="lg:hidden p-2 -mr-2 text-slate-600 dark:text-slate-300 z-50 focus:outline-none"
                        onClick={handleToggle}
                        aria-label={isOpen ? 'Menü bezárása' : 'Menü megnyitása'}
                        aria-expanded={isOpen}
                        style={{ touchAction: 'manipulation' }}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.15, ease: 'easeOut' }}
                        className="fixed inset-x-0 top-0 bg-slate-900 z-[60] lg:hidden flex flex-col"
                        style={{ willChange: 'transform', height: '100dvh', overscrollBehavior: 'contain' }}
                    >
                        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 shrink-0 bg-slate-900">
                            <button
                                onClick={handleClose}
                                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors px-2 py-1 -ml-2 rounded-lg"
                                style={{ touchAction: 'manipulation' }}
                            >
                                <ArrowLeft className="w-5 h-5" />
                                <span className="font-medium text-sm">Vissza</span>
                            </button>
                            <button
                                onClick={handleClose}
                                className="p-2 -mr-2 text-slate-300 hover:text-white rounded-lg transition-colors"
                                style={{ touchAction: 'manipulation' }}
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Links */}
                        <div className="flex flex-col gap-6 px-8 py-10 overflow-y-auto bg-slate-900 h-full">
                            <div className="flex flex-col gap-6">
                                {links.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        style={{ touchAction: 'manipulation' }}
                                        className={`text-2xl font-display font-medium px-4 py-3 w-full text-center rounded-2xl transition-all ${isActive(link.path)
                                            ? 'bg-primary/20 text-primary'
                                            : 'text-slate-200 hover:bg-slate-800 hover:text-white'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="mt-8 flex justify-center">
                                <Link
                                    to="/kapcsolat"
                                    style={{ touchAction: 'manipulation' }}
                                    className="inline-block px-10 py-4 bg-primary text-slate-900 text-lg font-bold rounded-full shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
                                >
                                    Érdeklődöm
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
