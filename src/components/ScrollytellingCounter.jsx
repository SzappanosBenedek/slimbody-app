import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

export default function ScrollytellingCounter() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const controls = useAnimation()

    const [count, setCount] = useState(0)

    useEffect(() => {
        if (isInView) {
            controls.start("visible")

            let startTimestamp = null
            const duration = 2500 // 2.5 seconds

            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp
                const progress = Math.min((timestamp - startTimestamp) / duration, 1)

                // easeOutExpo
                const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)

                setCount(Math.floor(easeProgress * 20000))

                if (progress < 1) {
                    window.requestAnimationFrame(step)
                } else {
                    setCount(20000)
                }
            }
            window.requestAnimationFrame(step)
        }
    }, [isInView, controls])

    return (
        <div ref={ref} className="text-center">
            <motion.div
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
                }}
                className="flex flex-col items-center"
            >
                <span className="text-4xl md:text-5xl font-display font-medium text-slate-900 dark:text-white mb-2">
                    30 perc
                </span>
                <div className="h-10 w-px bg-primary my-4 opacity-50"></div>
                <span className="text-5xl md:text-7xl font-display font-bold text-primary mb-2 min-w-[300px]">
                    ~{count.toLocaleString('hu-HU')}
                </span>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                    izomösszehúzódás
                </span>
            </motion.div>
        </div>
    )
}
