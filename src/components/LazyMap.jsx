import { useState, useRef, useEffect } from 'react'

const MAP_SRC =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2688.397072979253!2d19.074744315629424!3d47.66989497984462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741d6b04bd60f77%3A0xe67dbdef5dd8d3ba!2sSzentendre%2C%20Korona%20u.%203%2C%202000%20Hungary!5e0!3m2!1sen!2sus!4v1714070000000!5m2!1sen!2sus'

/**
 * LazyMap – az iframe csak akkor tölt be, ha a térképszekció megjelenik a nézetablakban.
 * classNameWrap : a wrapper div osztályai (méret, border-radius stb.)
 * iframeClassName : az iframe osztályai (grayscale, opacity stb.)
 */
export default function LazyMap({ classNameWrap = '', iframeClassName = '' }) {
    const [load, setLoad] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setLoad(true)
                    observer.disconnect()
                }
            },
            { rootMargin: '300px' } // 300px előre elkezdjük betölteni
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <div ref={ref} className={classNameWrap}>
            {load ? (
                <iframe
                    title="SlimBody Szentendre helyszín térkép"
                    src={MAP_SRC}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    referrerPolicy="no-referrer-when-downgrade"
                    className={iframeClassName}
                />
            ) : (
                /* Placeholder: addig jelenik meg amíg betölt */
                <div className="w-full h-full bg-slate-100 dark:bg-slate-800 flex flex-col items-center justify-center gap-3 text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm">Szentendre, Korona u. 3.</span>
                </div>
            )}
        </div>
    )
}
