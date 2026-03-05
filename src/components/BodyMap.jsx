import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const bodyParts = [
    {
        id: 'has',
        title: 'HAS',
        image: '/images/hiemthas.webp',
        description: 'Has területre célzott izomaktiválás és tónus támogatása. A cél a feszesebb kontúr megjelenésének támogatása — egyéni célokhoz igazítva.',
    },
    {
        id: 'fenek',
        title: 'FENÉK',
        image: '/images/hiemtfenek.webp',
        description: 'Fenék területén a cél az izomtónus és forma támogatása, prémium, diszkrét környezetben.',
    },
    {
        id: 'comb',
        title: 'COMB',
        image: '/images/hiemtcomb.webp',
        description: 'Elülső és hátsó comb területén célzott izomaktiválás és tónus támogatása, kúraszerűen tervezve.',
    },
    {
        id: 'kar',
        title: 'KAR',
        image: '/images/hiemtkar.webp',
        description: 'Bicepsz/tricepsz terület tónusának támogatása célzott izomaktiválással.',
    },
    {
        id: 'vadli',
        title: 'VÁDLI',
        image: '/images/hiemtvadli.webp',
        description: 'Vádli izomaktiválás és tónus támogatása — rövid, tervezhető alkalmakban.',
    }
]

export default function BodyMap() {
    const [activeTab, setActiveTab] = useState('has')
    const activePart = bodyParts.find(p => p.id === activeTab)

    return (
        <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-display mb-4">Interaktív Body Map – célzott kezelési területek</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">Válassza ki a kezelendő területet a részletekért</p>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {bodyParts.map((part) => (
                        <button
                            key={part.id}
                            onClick={() => setActiveTab(part.id)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === part.id
                                ? 'bg-primary text-white shadow-lg shadow-primary/30 transform scale-105'
                                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                                }`}
                        >
                            {part.title}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-6 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 max-w-4xl mx-auto relative overflow-hidden flex flex-col md:flex-row items-center gap-10 min-h-[400px]">

                    <div className="w-full md:w-1/2 h-64 md:h-[400px] rounded-2xl overflow-hidden relative">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activePart.id}
                                src={activePart.image}
                                alt={activePart.title}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full object-cover absolute inset-0"
                            />
                        </AnimatePresence>
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activePart.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                            >
                                <h3 className="text-3xl font-display font-medium mb-6 text-slate-900 dark:text-white">
                                    {activePart.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-8">
                                    {activePart.description}
                                </p>
                                <Link
                                    to="/kapcsolat"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 dark:bg-primary text-white font-semibold rounded-full hover:bg-slate-800 dark:hover:bg-primary-dark transition-all group w-full md:w-auto"
                                >
                                    Érdeklődöm
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    )
}
