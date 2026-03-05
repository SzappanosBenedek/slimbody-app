import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Phone, AlertTriangle, Droplets, Wind, Sparkles } from 'lucide-react'
import Accordion from '../components/Accordion'

const wienerContraindications = [
    {
        title: 'Ellenjavallatok Wiener testtekercselés esetén',
        content: (
            <ul className="space-y-2 list-disc pl-4 text-slate-600 dark:text-slate-400">
                <li>Terhesség</li>
                <li>Szoptatás ideje alatt</li>
                <li>Erőteljes visszérgyulladás</li>
                <li>Illóolaj-allergia a kezelés során használt hatóanyagokra</li>
                <li className="mt-4 italic font-medium">Kérdés esetén egyeztessünk — szükség esetén orvosi jóváhagyás javasolt a kezelés megkezdése előtt.</li>
            </ul>
        )
    }
]

export default function WienerPage() {
    return (
        <>
            <SEO
                title="Wiener Testtekercselés Szentendrén | Prémium Alakformálás | SlimBody"
                description="Wiener testtekercselés Szentendrén – aromaterápiás, prémium alakformáló módszer. Centiméteres karcsúsodás, cellulit csökkentés, bőrfeszesítés. 13 500 Ft/alkalom. Hívjon: +36 20 456 2314"
                path="/wiener-testtekercseles-szentendre"
                breadcrumbs={[{ name: 'Wiener Testtekercselés', path: '/wiener-testtekercseles-szentendre' }]}
                serviceOffers={{
                    name: 'Wiener Testtekercselés Szentendrén',
                    description: 'Prémium aromaterápiás testtekercselés hideg-meleg effektussal. Bőrfeszesítés, cellulit csökkentés, karcsúsítás.',
                    offers: [
                        { name: 'Wiener testtekercselés – 1 alkalom (60 perc)', price: 13500 },
                        { name: 'Wiener testtekercselés – 6 alkalmas bérlet', price: 74900 },
                        { name: 'Wiener testtekercselés – 12 alkalmas bérlet', price: 132600 },
                    ]
                }}
            />

            {/* Hero Section */}
            <section className="bg-slate-50 dark:bg-background-dark pt-24 pb-16 px-6 relative overflow-hidden border-b border-slate-100 dark:border-slate-800">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/4 pointer-events-none"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary-dark text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-primary/20">
                        Prémium Aromaterápia
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-6 text-slate-900 dark:text-white leading-tight">
                        Wiener testtekercselés <br className="hidden md:block" />
                        <span className="italic text-primary">Szentendrén</span>
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10 text-balance">
                        A Wiener testtekercselés prémium aromaterápiás módszer, amely a bőr és kötőszövet stimulálásán keresztül támogathatja a feszesebb, karcsúbb megjelenést. Relaxáló, 45–60 perces protokoll, amely kúraszerűen is tervezhető.
                    </p>
                </div>
            </section>

            {/* Mi az a Wiener tekercselés */}
            <section className="py-14 md:py-24 px-6 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-display mb-8">Mi a Wiener testtekercselés lényege?</h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-6">
                    A módszer alapja a hideg–meleg effektus (Kneipp-hatás). A kezelés során az illóolajos, hatóanyagos fáslik felhelyezésekor a szervezet belső hőmérséklete megnő, míg a felszínen hűsítő érzés tapasztalható. Ez az ellentét intenzív működésre készteti a vér- és nyirokkeringést, hogy a szervezet kiegyenlítse a hőmérséklet-különbséget.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    A folyamat során a fókusz a problémás területek feszesítésén, a narancsbőr csökkentésének támogatásán van, komfortos pihenőidő keretében. Kúraszerű alkalmazás esetén (amely egyénfüggő) centiméterekben mérhető változás is lehetséges az érintett területeken.
                </p>
            </section>

            {/* A kezelés menete (Kártyás) */}
            <section className="py-14 md:py-24 px-6 bg-slate-50 dark:bg-background-dark border-y border-slate-100 dark:border-slate-800">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-display mb-12 text-center">A kezelés menete</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 relative overflow-hidden group hover:border-primary/50 transition-colors">
                            <div className="absolute top-0 left-0 w-full h-1 bg-primary/20 group-hover:bg-primary transition-colors"></div>
                            <div className="text-4xl font-display font-bold text-slate-200 dark:text-slate-700 mb-6">01</div>
                            <h3 className="text-xl font-bold mb-3">Előkészítés</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">Hatóanyagos, kifejezetten a problémának megfelelő krém vagy zselé felvitele a célterületre.</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 relative overflow-hidden group hover:border-primary/50 transition-colors">
                            <div className="absolute top-0 left-0 w-full h-1 bg-primary/20 group-hover:bg-primary transition-colors"></div>
                            <div className="text-4xl font-display font-bold text-slate-200 dark:text-slate-700 mb-6">02</div>
                            <h3 className="text-xl font-bold mb-3">Fáslizás</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">Speciális, aromaterápiás hatóoldattal átitatott, rugalmas fáslikkal történő szoros körbetekercselés.</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 relative overflow-hidden group hover:border-primary/50 transition-colors">
                            <div className="absolute top-0 left-0 w-full h-1 bg-primary/20 group-hover:bg-primary transition-colors"></div>
                            <div className="text-4xl font-display font-bold text-slate-200 dark:text-slate-700 mb-6">03</div>
                            <h3 className="text-xl font-bold mb-3">Pihenés</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">A fáslik fölé fólia réteg kerül, majd 45–50 perc teljes relaxáció és nyugalom a kellemes környezetben.</p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 relative overflow-hidden group hover:border-primary/50 transition-colors">
                            <div className="absolute top-0 left-0 w-full h-1 bg-primary/20 group-hover:bg-primary transition-colors"></div>
                            <div className="text-4xl font-display font-bold text-slate-200 dark:text-slate-700 mb-6">04</div>
                            <h3 className="text-xl font-bold mb-3">Utókezelés</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">A fáslik eltávolítása után rövid letisztítás, majd utóápoló, feszesítő krém alkalmazása.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 md:py-24 px-6 max-w-5xl mx-auto space-y-24">

                {/* Előnyök listája */}
                <div>
                    <h2 className="text-3xl font-display mb-10 text-center">A kezelés nyújtotta előnyök</h2>
                    <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                            <Sparkles className="text-primary w-8 h-8 flex-shrink-0" />
                            <span className="text-slate-700 dark:text-slate-300 font-medium">Bőrfeszesítés és a kötőszövet állapotának támogatása.</span>
                        </div>
                        <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                            <Droplets className="text-primary w-8 h-8 flex-shrink-0" />
                            <span className="text-slate-700 dark:text-slate-300 font-medium">A cellulit (narancsbőr) vizuális megjelenésének javítása.</span>
                        </div>
                        <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                            <div className="text-primary font-bold text-2xl flex-shrink-0 w-8 text-center">-cm</div>
                            <span className="text-slate-700 dark:text-slate-300 font-medium">Centiméterekben mérhető karcsúsító hatás (egyénfüggő).</span>
                        </div>
                        <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                            <Wind className="text-primary w-8 h-8 flex-shrink-0" />
                            <span className="text-slate-700 dark:text-slate-300 font-medium">Striák (terhességi csíkok) színének hallyányulásának támogatása.</span>
                        </div>
                    </div>
                    <p className="text-center text-xs text-slate-500 mt-6">* Az eredmények mértéke és gyorsasága minden egyén esetében változó.</p>
                </div>

                {/* Fontos tudnivalók */}
                <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 p-8 md:p-12 rounded-[2.5rem] relative">
                    <h2 className="text-3xl font-display mb-8 text-center flex items-center justify-center gap-3">
                        <AlertTriangle className="text-primary w-8 h-8" />
                        Fontos tudnivalók kezelés előtt és után
                    </h2>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-slate-700 dark:text-slate-300">
                        <ul className="space-y-4 list-disc pl-4">
                            <li>Kezelés előtt 3 órával már ne egyen szilárd táplálékot.</li>
                            <li>A kezelés utáni 2 órában szintén kerülje az étkezést.</li>
                            <li>Tekercselés után 3–5 óráig kerülje a zuhanyozást az utóhatás érdekében.</li>
                            <li>Általánosan napi 2,5–3 liter tiszta víz fogyasztása javasolt a kúra alatt.</li>
                        </ul>
                        <ul className="space-y-4 list-disc pl-4">
                            <li>Alkoholos, cukros, szénsavas italok kerülése a kúra ideje alatt kiemelten ajánlott.</li>
                            <li>Menstruáció intenzív napjain a kezelés nem javasolt.</li>
                            <li>Közvetlenül utána napozás, szauna vagy szolárium használata kerülendő.</li>
                            <li>Kúraszerűen ajánlott: ideális esetben heti 2 alkalommal, legalább 10 alkalmas sorozatban.</li>
                        </ul>
                    </div>
                    <p className="mt-8 text-center font-medium italic">A Wiener testtekercselés ráadásul nagyon jól kombinálható más alakformáló kezeléseinkkel, például a HIEMT-tel!</p>
                </div>

                {/* Ellenjavallatok */}
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-display mb-8 text-center">Ellenjavallatok & Biztonság</h2>
                    <Accordion items={wienerContraindications} />
                </div>

                {/* Árak Teaser */}
                <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 md:p-12 text-center max-w-3xl mx-auto shadow-2xl">
                    <h2 className="text-3xl font-display mb-2">Wiener Árak és bérletek</h2>
                    <p className="text-slate-400 mb-8">Kúraszerű alkalmazás esetén kedvezőbb árak állnak rendelkezésre.</p>
                    <div className="space-y-4 mb-10 text-lg max-w-md mx-auto">
                        <div className="flex justify-between items-center bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
                            <span className="font-medium">1 alkalom (60 perc)</span>
                            <span className="text-primary font-bold font-display text-xl">13 500 Ft</span>
                        </div>
                        <div className="flex justify-between items-center bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
                            <span className="font-medium">6 alkalmas bérlet</span>
                            <span className="text-primary font-bold font-display text-xl">74 900 Ft</span>
                        </div>
                        <div className="flex justify-between items-center bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
                            <span className="font-medium">12 alkalmas bérlet</span>
                            <span className="text-primary font-bold font-display text-xl">132 600 Ft</span>
                        </div>
                    </div>
                    <Link to="/arlista" className="px-8 py-4 bg-primary text-slate-900 hover:bg-white hover:text-slate-900 font-semibold rounded-full shadow-lg transition-all border border-transparent inline-flex items-center gap-2">
                        Teljes árlista megtekintése <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

            </section>

            {/* CTA Section */}
            <section className="py-14 md:py-24 px-6 bg-slate-50 dark:bg-background-dark border-t border-slate-100 dark:border-slate-800 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-display mb-6">Kapcsolatfelvétel</h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg">
                        Indítsa el testének megújulását aromaterápiás Wiener tekercseléssel. Vegye fel velünk a kapcsolatot!
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                        <a href="tel:+36204562314" className="flex items-center justify-center gap-3 px-8 py-4 bg-primary text-slate-900 font-bold rounded-full hover:bg-primary-dark transition-all shadow-lg">
                            <Phone className="w-5 h-5" /> +36 20 456 2314
                        </a>
                        <Link to="/kapcsolat" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-full hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-lg">
                            Közvetlen üzenetküldés
                        </Link>
                    </div>

                    <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 leading-relaxed text-left">
                        <p className="uppercase tracking-widest font-semibold mb-2 text-slate-400">Jogi Nyilatkozat</p>
                        <p>
                            Az oldalon szereplő információk tájékoztató jellegűek. A kezelések eredménye egyénfüggő, és nem helyettesíti az orvosi diagnózist vagy kezelést. Kérdés esetén egyeztessünk, szükség esetén orvosi konzultáció javasolt.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
