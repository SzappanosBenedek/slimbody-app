import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Zap, Sparkles } from 'lucide-react'

function PriceCard({ title, subtitle, price, unit, highlight = false, children }) {
    return (
        <div className={`relative rounded-3xl p-7 border flex flex-col gap-4 ${highlight
            ? 'bg-primary border-primary-dark shadow-xl text-white'
            : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 shadow-sm'
            }`}>
            <div>
                <h3 className={`text-xl font-display font-bold mb-1 ${highlight ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{title}</h3>
                {subtitle && <p className={`text-sm ${highlight ? 'text-white/75' : 'text-slate-500'}`}>{subtitle}</p>}
            </div>
            {price && (
                <div className="flex items-baseline gap-1.5">
                    <span className={`text-3xl font-display font-bold ${highlight ? 'text-white' : 'text-primary'}`}>{price}</span>
                    {unit && <span className={`text-sm font-medium ${highlight ? 'text-white/70' : 'text-slate-400'}`}>{unit}</span>}
                </div>
            )}
            {children}
        </div>
    )
}

function SectionTitle({ icon: Icon, title, color = 'text-primary' }) {
    return (
        <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon className={`w-5 h-5 ${color}`} />
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white">{title}</h2>
        </div>
    )
}

export default function PricingPage() {
    return (
        <>
            <SEO
                title="Árlista | HIEMT & Testtekercselés Árak | SlimBody Szentendre"
                description="SlimBody Szentendre árlista – HIEMT kezelés 12 000 Ft-tól, Wiener testtekercselés 13 500 Ft-tól. Kedvezményes bérletek. Nézze meg aktuális árainkat!"
                path="/arlista"
                breadcrumbs={[{ name: 'Árlista', path: '/arlista' }]}
            />

            {/* Header */}
            <section className="bg-slate-50 dark:bg-background-dark pt-24 pb-16 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-6 text-slate-900 dark:text-white">
                        Átlátható,{' '}
                        <span className="italic text-primary">fix árlista</span>
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
                        Válassza ki az Ön számára legideálisabb kezelést vagy bérletet – rejtett költségek nélkül.
                    </p>
                </div>
            </section>

            {/* Main Pricing */}
            <section className="py-16 px-6 max-w-5xl mx-auto space-y-20 mb-16">

                {/* ── HIEMT ── */}
                <div>
                    <SectionTitle icon={Zap} title="HIEMT Kezelés" />

                    {/* Egyedi alkalmak */}
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Egyedi alkalom</h3>
                    <div className="grid sm:grid-cols-3 gap-5 mb-10">
                        <PriceCard
                            title="HIEMT 1"
                            subtitle="1 alkalom – 1 választható terület"
                            price="12 000 Ft"
                            unit="/ alkalom"
                        />
                        <PriceCard
                            title="HIEMT 2"
                            subtitle="1 alkalom – 2 választható terület"
                            price="16 000 Ft"
                            unit="/ alkalom"
                            highlight
                        />
                        <PriceCard
                            title="HIEMT Intimpad"
                            subtitle="1 alkalom"
                            price="7 900 Ft"
                            unit="/ alkalom"
                        />
                    </div>

                    {/* Bérletek */}
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Bérletek</h3>
                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                        {/* 2-3 hetes kúra */}
                        <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-3xl p-7 shadow-sm">
                            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">2–3 hetes kúra</p>
                            <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4">6 alkalmas bérlet</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center py-2.5 px-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">1 testrész</span>
                                    <span className="text-xl font-bold text-primary">60 000 Ft</span>
                                </div>
                                <div className="flex justify-between items-center py-2.5 px-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">2 testrész</span>
                                    <span className="text-xl font-bold text-primary">84 000 Ft</span>
                                </div>
                            </div>
                        </div>

                        {/* 3-4 hetes kúra */}
                        <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-3xl p-7 shadow-sm">
                            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">3–4 hetes kúra</p>
                            <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4">8 alkalmas bérlet</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center py-2.5 px-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">1 testrész</span>
                                    <span className="text-xl font-bold text-primary">80 000 Ft</span>
                                </div>
                                <div className="flex justify-between items-center py-2.5 px-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">2 testrész</span>
                                    <span className="text-xl font-bold text-primary">112 000 Ft</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Intimpad bérletek */}
                    <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-3xl p-7 shadow-sm">
                        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Intimpad bérletek</p>
                        <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4">HIEMT Intimpad</h3>
                        <div className="grid sm:grid-cols-2 gap-3">
                            <div className="flex justify-between items-center py-2.5 px-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">6 alk. bérlet</span>
                                <span className="text-xl font-bold text-primary">39 000 Ft</span>
                            </div>
                            <div className="flex justify-between items-center py-2.5 px-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">8 alk. bérlet</span>
                                <span className="text-xl font-bold text-primary">45 000 Ft</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Wiener ── */}
                <div>
                    <SectionTitle icon={Sparkles} title="Wiener Testtekercselés" />
                    <div className="grid sm:grid-cols-3 gap-5">
                        <PriceCard
                            title="1 Alkalom"
                            subtitle="Kezelési idő: 60 perc"
                            price="13 500 Ft"
                            unit="/ alkalom"
                        />
                        <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-3xl p-7 shadow-sm flex flex-col gap-3">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Kedvezményes</p>
                                <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">6 alk. bérlet</h3>
                                <p className="text-sm text-slate-500 mt-1">Kezelési idő: 60 perc/alkalom</p>
                            </div>
                            <div>
                                <span className="text-3xl font-display font-bold text-primary">74 900 Ft</span>
                            </div>
                            <p className="text-sm text-slate-500">12 450 Ft / kezelés</p>
                        </div>
                        <div className="bg-primary border-primary-dark rounded-3xl p-7 shadow-xl flex flex-col gap-3 text-white">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-1">Legjobb ár</p>
                                <h3 className="text-xl font-display font-bold text-white">12 alk. bérlet</h3>
                                <p className="text-sm text-white/70 mt-1">Kezelési idő: 60 perc/alkalom</p>
                            </div>
                            <div>
                                <span className="text-3xl font-display font-bold text-white">132 600 Ft</span>
                            </div>
                            <p className="text-sm text-white/70">11 050 Ft / kezelés</p>
                        </div>
                    </div>
                </div>

            </section>

            {/* CTA */}
            <section className="py-24 px-6 bg-slate-900 border-t border-slate-800 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-display mb-6 text-white">Kérdése van az árakkal kapcsolatban?</h2>
                    <p className="text-slate-400 leading-relaxed text-lg mb-10">
                        Vegye fel velünk a kapcsolatot, és segítünk megtalálni az Önnek legjobban megfelelő kezelést vagy bérletet.
                    </p>
                    <Link
                        to="/kapcsolat"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-full hover:bg-slate-100 transition-colors shadow-xl"
                    >
                        Érdeklődöm <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </>
    )
}
