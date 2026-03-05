import { Phone } from 'lucide-react'

export default function FloatingCTA() {
    return (
        <a
            href="tel:+36204562314"
            className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary-dark text-white p-4 rounded-full shadow-2xl shadow-primary/40 transition-transform hover:scale-110 active:scale-95 group flex items-center justify-center animate-bounce-slow"
            aria-label="Hívjon minket"
        >
            <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100 blur-sm pointer-events-none"></div>
            <Phone className="w-6 h-6 relative z-10" />
        </a>
    )
}
