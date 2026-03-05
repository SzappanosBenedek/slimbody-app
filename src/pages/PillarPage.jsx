import SEO from '../components/SEO'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import LazyMap from '../components/LazyMap'
import { CheckCircle2, Heart, Clock, ArrowRight, ChevronRight, Zap, MapPin, Phone } from 'lucide-react'
import BodyMap from '../components/BodyMap'

export default function PillarPage() {
    const location = useLocation()
    return (
        <>
            <SEO
                title="Alakformálás Szentendrén | HIEMT & Testtekercselés | SlimBody"
                description="Professzionális alakformáló kezelések Szentendrén. HIEMT elektromágneses izomstimulátor és Wiener testtekercselés. Fogyas, izomépítés, cellulit kezelés. Hívjon most: +36 20 456 2314"
                path="/"
                isLocalBusiness={true}
            />

            {/* Hero Section */}
            <section className="relative w-full min-h-[100dvh] flex flex-col md:h-[85vh] md:min-h-[600px] md:flex-row md:items-center pt-24 pb-12 md:py-0">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    {/* Mobile Background Image (matches stitch-9 reference) */}
                    <img
                        alt="Prémium alakformálás Szentendre"
                        className="w-full h-full object-cover object-center grayscale-[0.3] opacity-60 dark:opacity-40 md:hidden"
                        src="/images/heroimage.webp"
                        loading="eager"
                        fetchpriority="high"
                        decoding="sync"
                        style={{ willChange: 'opacity', backfaceVisibility: 'hidden' }}
                    />
                    {/* Desktop Background Image (Original) */}
                    <img
                        alt="Prémium alakformálás Szentendre - Has"
                        className="w-full h-full object-cover object-center hidden md:block"
                        src="/images/heroimage.webp"
                        loading="eager"
                    />
                    {/* Gradients */}
                    {/* Mobile Gradient (Top to Bottom) */}
                    <div className="absolute inset-0 bg-gradient-to-b from-background-light/40 to-background-light/95 dark:from-background-dark/50 dark:to-background-dark/95 md:hidden"></div>

                    {/* Desktop Gradient (Left to Right) */}
                    <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-background-light/90 via-background-light/40 to-transparent dark:from-background-dark/95 dark:via-background-dark/50 dark:to-transparent"></div>
                    <div className="hidden md:block absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background-light to-transparent dark:from-background-dark dark:to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center flex-grow text-center max-w-lg mx-auto md:w-full md:max-w-7xl md:px-6 md:justify-center md:items-start md:text-left">
                    <motion.div
                        key={location.key}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.05, ease: 'easeOut' }}
                        className="w-full px-8 md:px-0 md:max-w-xl"
                        style={{
                            willChange: 'transform, opacity',
                            backfaceVisibility: 'hidden',
                            transform: 'translateZ(0)',
                        }}
                    >
                        {/* Mobile Badge */}
                        <div className="mb-4 md:hidden">
                            <span className="text-xs uppercase tracking-[0.3em] text-slate-900 dark:text-white font-medium">Prémium Esztétika</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-[2.6rem] leading-[1.1] md:text-[3.5rem] lg:text-[4rem] font-display text-slate-900 dark:text-white mb-4 md:mb-6 md:font-medium md:leading-tight">
                            Alakformáló <br className="md:hidden" />
                            <span className="italic font-normal md:hidden">kezelések</span>

                            {/* Desktop specific title parts */}
                            <span className="hidden md:inline">kezelések <br /></span>
                            <span className="hidden md:inline italic text-primary">Szentendrén</span>
                        </h1>

                        {/* Mobile Subtitle */}
                        <h2 className="text-2xl font-display italic text-slate-900 dark:text-white mb-8 tracking-wide md:hidden">
                            Szentendrén
                        </h2>

                        {/* Description */}
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light mb-12 px-2 text-sm md:text-base md:text-lg md:mb-10 text-balance md:px-0 md:font-normal">
                            Modern, nem invazív alakformáló megoldások prémium, diszkrét környezetben. Célzott területek: has, fenék, comb, kar, vádli — egyéni célokhoz igazított javaslattal.
                        </p>

                        {/* Buttons */}
                        <div className="w-full space-y-6 md:space-y-0 md:flex md:flex-row md:gap-4 md:justify-start">
                            {/* Érdeklődöm Button */}
                            <Link
                                to="/kapcsolat"
                                className="inline-flex items-center justify-center w-full md:w-auto py-5 px-8 md:py-4 md:px-8 bg-primary hover:bg-primary-dark text-slate-900 font-medium tracking-widest text-sm uppercase transition-transform active:scale-[0.98] md:active:scale-100 shadow-lg shadow-primary/20 md:rounded-full md:font-semibold md:normal-case md:tracking-normal group"
                            >
                                Érdeklődöm
                                <ArrowRight className="ml-2 w-5 h-5 md:ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            {/* Árlista Button */}
                            <div className="flex justify-center md:block">
                                <Link
                                    to="/arlista"
                                    className="group inline-flex items-center text-slate-800 dark:text-slate-200 text-sm font-medium tracking-widest uppercase border-b border-primary/40 pb-1 transition-all hover:border-primary md:border-slate-300 md:dark:border-slate-700 md:bg-white/50 md:dark:bg-slate-900/50 md:backdrop-blur-sm md:border md:rounded-full md:py-4 md:px-8 md:normal-case md:tracking-normal md:hover:border-primary"
                                >
                                    <span className="md:hidden">Árlista megtekintése</span>
                                    <span className="hidden md:inline">Árlista</span>
                                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform md:hidden" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Vertical Line on Mobile */}
                    <div className="relative z-10 w-full flex justify-center mt-6 md:hidden hover:opacity-100 transition-opacity opacity-80">
                        <div className="w-[1px] h-8 bg-gradient-to-b from-primary/60 to-transparent"></div>
                    </div>
                </div>
            </section>

            {/* 3 Directions Section (stitch-10 layout with enhanced background) */}
            <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 relative via-[#FDFBF7] to-slate-100/80 dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800/50">

                {/* Subtle SVG Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C5A070' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>

                {/* Decorative blurred background elements */}
                <div className="absolute top-0 right-0 w-[50vh] h-[50vh] bg-primary/10 dark:bg-primary/5 rounded-full blur-[100px] -translate-y-1/4 translate-x-1/4 pointer-events-none"></div>
                <div className="absolute bottom-1/4 left-0 w-[60vh] h-[60vh] bg-primary/10 dark:bg-primary/5 rounded-full blur-[120px] -translate-x-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 right-1/4 w-[40vh] h-[40vh] bg-[#E9EDC9]/20 dark:bg-[#E9EDC9]/5 rounded-full blur-[100px] translate-y-1/3 pointer-events-none"></div>

                <div className="relative pt-12 pb-12 md:py-24 px-4 max-w-4xl mx-auto z-10">
                    <header className="text-center mb-16 md:mb-28">
                        <h2 className="font-display text-[2.6rem] md:text-5xl leading-[1.1] tracking-tight text-slate-900 dark:text-white mb-6">
                            3 irány, 1 cél:<br />
                            <span className="italic font-normal text-primary">tónusosabb testkontúr</span>
                        </h2>
                        <div className="w-12 h-[1px] bg-primary/40 mx-auto mb-6"></div>
                        <p className="text-slate-500 dark:text-slate-400 text-[0.85rem] leading-relaxed max-w-[280px] md:max-w-none mx-auto uppercase tracking-[0.1em] font-light">
                            Egyedülálló technológiák a prémium esztétika szolgálatában.
                        </p>
                    </header>

                    <main className="space-y-24 md:space-y-36">
                        {/* Item 01 */}
                        <div className="relative flex items-center justify-between group">
                            <div className="w-[42%] aspect-[3/4] overflow-hidden rounded-sm shadow-2xl z-10 bg-slate-100 dark:bg-slate-800" style={{ contain: 'layout style paint' }}>
                                <img
                                    alt="HIEMT gép és kezelőfejek"
                                    className="w-full h-full object-cover object-center md:object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                                    src="/images/hiemtgep1.webp"
                                    loading="eager"
                                    fetchpriority="high"
                                    decoding="async"
                                    width={400}
                                    height={533}
                                    style={{ willChange: 'transform' }}
                                />
                            </div>
                            <div className="w-[55%] pl-6 pr-2 md:pl-12">
                                <span className="block font-display text-primary text-sm tracking-widest mb-1 opacity-80">01</span>
                                <h3 className="font-display text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">HIEMT</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-xs md:text-base leading-relaxed mb-5 md:mb-8 italic">
                                    Célzott elektromágneses izomstimuláció a tónusosabb megjelenésért.
                                </p>
                                <Link to="/hiemt-kezeles-szentendre" className="text-underline-link text-[0.7rem] md:text-sm uppercase tracking-[0.2em] font-medium text-slate-800 dark:text-slate-300 hover:text-primary transition-colors">
                                    Részletek
                                </Link>
                            </div>
                        </div>

                        {/* Item 02 */}
                        <div className="relative flex flex-row-reverse items-center justify-between group">
                            <div className="w-[42%] aspect-[3/4] overflow-hidden rounded-sm shadow-2xl z-10 bg-slate-100 dark:bg-slate-800" style={{ contain: 'layout style paint' }}>
                                <img
                                    alt="Intimpad szék kezelés"
                                    className="w-full h-full object-cover object-center md:object-[center_top] transition-transform duration-700 group-hover:scale-105"
                                    src="/images/intimpad.webp"
                                    loading="eager"
                                    decoding="async"
                                    width={400}
                                    height={533}
                                    style={{ willChange: 'transform' }}
                                />
                            </div>
                            <div className="w-[55%] pr-6 pl-2 md:pr-12 text-right">
                                <span className="block font-display text-primary text-sm tracking-widest mb-1 opacity-80">02</span>
                                <h3 className="font-display text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">Intimpad</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-xs md:text-base leading-relaxed mb-5 md:mb-8 italic">
                                    Medencefenék-erősítés diszkréten, ruhában a tudatosabb izomkontrollért.
                                </p>
                                <Link to="/intimpad-medencefenek-erosites-szentendre" className="text-underline-link text-[0.7rem] md:text-sm uppercase tracking-[0.2em] font-medium text-slate-800 dark:text-slate-300 hover:text-primary transition-colors">
                                    Részletek
                                </Link>
                            </div>
                        </div>

                        {/* Item 03 */}
                        <div className="relative flex items-center justify-between group">
                            <div className="w-[42%] aspect-[3/4] overflow-hidden rounded-sm shadow-2xl z-10 bg-slate-100 dark:bg-slate-800" style={{ contain: 'layout style paint' }}>
                                <img
                                    alt="Wiener aromaterápiás testtekercselés"
                                    className="w-full h-full object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-105"
                                    src="/images/wienertesttekercseles.webp"
                                    loading="eager"
                                    decoding="async"
                                    width={400}
                                    height={533}
                                    style={{ willChange: 'transform' }}
                                />
                            </div>
                            <div className="w-[55%] pl-6 pr-2 md:pl-12">
                                <span className="block font-display text-primary text-sm tracking-widest mb-1 opacity-80">03</span>
                                <h3 className="font-display text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight leading-tight">Wiener<br className="md:hidden" /> Testtekercselés</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-xs md:text-base leading-relaxed mb-5 md:mb-8 italic">
                                    Prémium aromaterápiás kúra a feszesebb megjelenés támogatásáért.
                                </p>
                                <Link to="/wiener-testtekercseles-szentendre" className="text-underline-link text-[0.7rem] md:text-sm uppercase tracking-[0.2em] font-medium text-slate-800 dark:text-slate-300 hover:text-primary transition-colors">
                                    Részletek
                                </Link>
                            </div>
                        </div>
                    </main>

                    <div className="text-center mt-12 md:mt-24">
                        <p className="text-[0.65rem] uppercase tracking-[0.3em] text-slate-400 mb-2 font-medium">Időpontfoglalás</p>
                        <a href="tel:+36204562314" className="font-display text-xl md:text-2xl text-primary tracking-wider hover:text-primary-dark transition-colors">
                            +36 20 456 2314
                        </a>
                    </div>
                </div>
            </section>

            {/* HIEMT Highlight Section */}
            <section className="bg-primary/5 dark:bg-primary/10 pt-12 pb-14 md:py-24 px-6 border-y border-primary/10" >
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2 p-4">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                            <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-10 shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center text-center">
                                <Zap className="w-12 h-12 text-primary mb-6" />
                                <span className="text-5xl font-display font-bold text-slate-900 dark:text-white mb-2">30 perc</span>
                                <div className="h-px w-12 bg-slate-200 dark:bg-slate-800 my-4"></div>
                                <span className="text-3xl font-display text-primary">~20 000</span>
                                <span className="text-xs uppercase tracking-widest text-slate-500 mt-2">összehúzódás</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-display mb-6">HIEMT – amikor nem csak a zsírra, az izmokra is fókuszálunk</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                            Az izomtónus fontos szerepet játszik a feszesebb, formásabb megjelenésben. A HIEMT technológia a motoros neuronok stimulálásán keresztül aktiválhatja az izmokat, így olyan intenzív összehúzódások jöhetnek létre, amelyek hagyományos edzéssel nehezebben érhetők el.
                        </p>
                        <p className="text-xs text-slate-500 italic mb-8 border-l-2 border-primary/30 pl-4 py-1">
                            * 1 alkalom jellemzően ~30 perc. A gyártói leírások szerint ez akár ~20 000 erőteljes izomösszehúzódással is egyenértékű lehet.
                        </p>
                        <Link to="/hiemt-kezeles-szentendre" className="inline-flex items-center gap-2 text-primary font-semibold group border-b border-primary/30 pb-1">
                            Részletek a HIEMT kezelésről <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section >

            {/* Interactive Body Map */}
            < BodyMap />

            {/* Intimpad Section */}
            <section className="py-12 md:py-24 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 border-b border-slate-100 dark:border-slate-800" >
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-display mb-6">Intimpad – medencefenék erősítés diszkréten</h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-8">
                        Az elektromágneses intimpad kezelés célzottan aktiválhatja a medencefenék izmait, és támogathatja a tudatosabb izomkontrollt. A kezelés ruhában történik, nem igényel átöltözést, és jellemzően 30 perces alkalmakra tervezett.
                    </p>
                    <Link to="/intimpad-medencefenek-erosites-szentendre" className="inline-flex items-center gap-2 text-primary font-semibold group">
                        Intimpad részletek <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
                <div className="w-full md:w-1/2 h-[400px] rounded-3xl overflow-hidden">
                    <img src="/images/intimpad.webp" className="w-full h-full object-cover" alt="Intimpad kezelés" />
                </div>
            </section >

            {/* Wiener Section */}
            <section className="py-12 md:py-24 px-6 max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16" >
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-display mb-6">Wiener testtekercselés – prémium aromaterápiás tekercselés</h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-8">
                        A Wiener testtekercselés aromaterápiás, hideg–meleg érzetre épülő módszer, amely a bőr és kötőszövet stimulálásán keresztül támogathatja a feszesebb megjelenést. 45–60 perces, relaxáló protokoll.
                    </p>
                    <Link to="/wiener-testtekercseles-szentendre" className="inline-flex items-center gap-2 text-primary font-semibold group">
                        Wiener részletek <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
                <div className="w-full md:w-1/2 h-[400px] rounded-3xl overflow-hidden">
                    <img src="/images/wienertesttekercseles.webp" className="w-full h-full object-cover" alt="Wiener aromaterápiás testtekercselés" />
                </div>
            </section >

            {/* Pricing Quick Overview Section */}
            < section className="bg-slate-900 text-white py-24 px-6 border-t font-sans selection:bg-primary" >
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display mb-4 text-white">Gyors ár-áttekintés</h2>
                        <div className="w-12 h-[2px] bg-primary mx-auto"></div>
                    </div>

                    <div className="bg-slate-800/80 rounded-[2.5rem] p-8 md:p-12 border border-slate-700 shadow-2xl">
                        <div className="space-y-6 max-w-2xl mx-auto">
                            <div className="flex justify-between items-center py-4 border-b border-slate-700">
                                <span className="font-medium text-lg">HIEMT 1 (1 terület)</span>
                                <span className="text-primary text-xl font-bold font-display tracking-wide">12 000 Ft</span>
                            </div>
                            <div className="flex justify-between items-center py-4 border-b border-slate-700">
                                <span className="font-medium text-lg">HIEMT 2 (2 terület)</span>
                                <span className="text-primary text-xl font-bold font-display tracking-wide">16 000 Ft</span>
                            </div>
                            <div className="flex justify-between items-center py-4 border-b border-slate-700">
                                <span className="font-medium text-lg">HIEMT Intimpad</span>
                                <span className="text-primary text-xl font-bold font-display tracking-wide">7 900 Ft</span>
                            </div>
                            <div className="flex justify-between items-center py-4">
                                <span className="font-medium text-lg">Wiener (1 alkalom)</span>
                                <span className="text-primary text-xl font-bold font-display tracking-wide">13 500 Ft</span>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <Link to="/arlista" className="px-8 py-4 bg-primary text-slate-900 hover:bg-white hover:text-slate-900 font-semibold rounded-full shadow-lg transition-all border border-transparent inline-flex items-center gap-2">
                                Teljes árlista <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section >

            {/* Contact & Map Banner */}
            < section className="py-24 px-6 bg-slate-50 dark:bg-background-dark border-t border-slate-100 dark:border-slate-800" >
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-display mb-8">Kapcsolat</h2>
                        <div className="space-y-6 mb-10">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-1">Cím</p>
                                    <p className="text-lg font-medium text-slate-900 dark:text-white">2000 Szentendre, Korona u. 3.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-1">Telefon</p>
                                    <a href="tel:+36204562314" className="text-lg font-medium text-slate-900 dark:text-white hover:text-primary transition-colors">+36 20 456 2314</a>
                                </div>
                            </div>
                        </div>
                        <Link to="/kapcsolat" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2 group">
                            Érdeklődöm <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                    <div className="w-full md:w-1/2 h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl relative border border-slate-200 dark:border-slate-800 ios-blur">
                        <LazyMap
                            classNameWrap="absolute inset-0"
                            iframeClassName="w-full h-full grayscale contrast-125 opacity-80 mix-blend-multiply dark:mix-blend-screen"
                        />
                        {/* Map marker overlay */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="bg-white p-3 rounded-full shadow-2xl text-primary animate-bounce">
                                <MapPin className="w-8 h-8 pointer-events-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
