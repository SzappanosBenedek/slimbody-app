import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ items }) {
    const [openIndex, setOpenIndex] = useState(null)

    return (
        <div className="space-y-4">
            {items.map((item, idx) => (
                <div
                    key={idx}
                    className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 overflow-hidden"
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                        <span className="font-semibold text-slate-900 dark:text-white pr-4">
                            {item.title}
                        </span>
                        <ChevronDown
                            className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${openIndex === idx ? 'rotate-180' : ''
                                }`}
                        />
                    </button>
                    <AnimatePresence>
                        {openIndex === idx && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="px-6 pb-4"
                            >
                                <div className="text-slate-600 dark:text-slate-400 text-sm prose dark:prose-invert">
                                    {item.content}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    )
}
