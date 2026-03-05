import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Phone, UserCheck, Clock, ShieldCheck, Zap } from 'lucide-react'
import Accordion from '../components/Accordion'

const intimpadFaq = [
    {
        title: 'Mire való a HIEMT intimpad kezelés?',
        content: 'A medencefenék izmainak erősítését és tudatosabb kontrollját támogathatja, különösen terhesség vagy szülés után visszamaradt, esetleg az életmódból eredő elgyengült izomzat esetén.'
    },
    {
        title: 'Hogyan működik a HIEMT technológia?',
        content: 'Elektromágneses energiával stimulálja a motoros neuronokat, ezáltal a hagyományos (pl. Kegel) minőséget jócskán meghaladó, intenzív izomösszehúzódásokat válthat ki.'
    },
    {
        title: 'Milyen eredményekre számíthatok?',
        content: 'Természetesen egyénfüggő; de a kontroll és a komfortérzet fokozatosan javulhat a rendszeresség függvényében, ami hozzájárulhat az életminőség emelkedéséhez.'
    },
    {
        title: 'Mennyire biztonságos a kezelés?',
        content: 'Teljesen nem invazív jellegű és fájdalommentes; azonban mint minden kezelésnél, ellenjavallatok esetén (pl. fém implantátum) nem alkalmazható. Kérdés esetén egyeztessünk.'
    },
    {
        title: 'Milyen hosszú egy kezelés, és hányszor szükséges megismételni?',
        content: 'Jellemzően 30 perc alatt zajlik. A kúra hossza az egyéni céltól és állapottól függ, általában sorozatszerűen javasolt heti rendszerességgel.'
    },
    {
        title: 'Kell vetkőzni vagy átöltözni a kezeléshez?',
        content: 'Nem. A kezelés teljes mértékben ruhában történik, így maximálisan diszkrét és kényelmes.'
    }
]

export default function IntimpadPage() {
    return (
        <>
            <SEO
                title="HIEMT Intimpad Kezelés Szentendrén | Medencefenék Erősítés | SlimBody"
                description="HIEMT intimpad kezelés Szentendrén – hatékonyabb mint 10 000 Kegel-gyakorlat! Medencefenék erősítés, vizeletszivárgás csökkentése. Fájdalommentes, 30 perces kezelés."
                path="/intimpad-medencefenek-erosites-szentendre"
                breadcrumbs={[{ name: 'Intimpad Kezelés', path: '/intimpad-medencefenek-erosites-szentendre' }]}
                faq={intimpadFaq}
                serviceOffers={{
                    name: 'HIEMT Intimpad Kezelés Szentendrén',
                    description: 'Diszkrét, ruhában végezhető elektromágneses medencefenék-erősítő kezelés.',
                    offers: [
                        { name: 'HIEMT Intimpad – 1 alkalom', price: 7900 },
                        { name: 'HIEMT Intimpad – 6 alkalmas bérlet', price: 39000 },
                        { name: 'HIEMT Intimpad – 8 alkalmas bérlet', price: 45000 },
                    ]
                }}
            />

            {/* Hero Section */}
            <section className="bg-slate-50 dark:bg-background-dark pt-24 pb-16 px-6 relative overflow-hidden border-b border-slate-100 dark:border-slate-800">
                <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full top-1/2 left-1/2 -translate-x-1/2 w-3/4 h-3/4"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary-dark text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-primary/20">
                        Diszkrét Medencefenék-Erősítés
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-6 text-slate-900 dark:text-white leading-tight">
                        Intimpad kezelés <br className="hidden md:block" />
                        <span className="italic text-primary">Szentendrén</span>
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10 text-balance">
                        Az elektromágneses intimpad kezelés célzottan aktiválhatja a medencefenék izmait, és támogathatja a tudatosabb izomkontrollt. Diszkrét, ruhában végezhető, kényelmesen tervezhető időtartamú megoldás a mindennapokba.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-14 md:py-24 px-6 max-w-5xl mx-auto space-y-24">

                {/* Mire való & Hogyan működik */}
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-display mb-6">Mire való az Intimpad?</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                            Segíthet a medencefenék izmainak aktiválásában, erősítésében és a kontroll javításában, különösen terhesség vagy szülés után, illetve az életmódból eredő terhelés esetén. Sok nő küzd olyan intim, medencefenék gyengeségből eredő kihívásokkal, amelyekre ez az eljárás fókuszált választ adhat.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-display mb-6">Hogyan működik?</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                            Elektromágneses energia stimulálja a medencefenék területén lévő motoros neuronokat, mellyel intenzív izomösszehúzódásokat válthat ki. Olyan edzés-jellegű terhelést ad a területnek automatikusan, amely akaratlagos gyakorlatokkal sokkal nehezebben megvalósítható.
                        </p>
                    </div>
                </div>

                {/* Előnyök listája (Ikonsoros grid) */}
                <div className="bg-primary/5 border border-primary/10 rounded-[2.5rem] p-8 md:p-12">
                    <h2 className="text-3xl font-display mb-10 text-center">Előnyök – diszkréten, kényelmesen</h2>
                    <div className="grid sm:grid-cols-2 gap-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center flex-shrink-0 text-primary border border-slate-100 dark:border-slate-700">
                                <UserCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-1">Mindvégig ruhában maradva</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">A kezelés teljesen ruhában történik, nincs szükség átöltözésre vagy levetkőzésre, így rendkívül diszkrét.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center flex-shrink-0 text-primary border border-slate-100 dark:border-slate-700">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-1">30 perces alkalmak</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">1 alkalom kb. 30 percet vesz igénybe, ami könnyen beilleszthető egy ebédszünetbe vagy a rohanó mindennapokba.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center flex-shrink-0 text-primary border border-slate-100 dark:border-slate-700">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-1">Nem invazív és kényelmes</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">Műtét, vágás vagy altatás nélkül. A kezelés befejeztével azonnal folytathatja a napi teendőit, nincs felépülési idő.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center flex-shrink-0 text-primary border border-slate-100 dark:border-slate-700">
                                <Zap className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-1">Rendkívül intenzív</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">Több ezer összehúzódás egyetlen kezelés alatt, hihetetlen hatékonyságot nyújtva az otthoni intim tornával szemben.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Milyen változások várhatók? */}
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-display mb-6">Milyen változások várhatók?</h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                        A rendszeres intimpad kezelés támogathatja a medencefenék izmainak feszességét és aktivizálását. Hozzájárulhat ahhoz, hogy a mindennapi komfortérzet javuljon, de támogatóan hat a helyi vér- és nyirokkeringésre, valamint az idegi működésre is. Mivel minden test másképp reagál, <span className="font-semibold italic">az eredmények természetesen egyénfüggők.</span>
                    </p>
                </div>

                {/* GYIK */}
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-display mb-8 text-center">Gyakori Kérdések (GYIK)</h2>
                    <Accordion items={intimpadFaq} />
                </div>

                {/* Árak Teaser */}
                <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 md:p-12 text-center max-w-3xl mx-auto shadow-2xl">
                    <h2 className="text-3xl font-display mb-2">Ár és bérletek</h2>
                    <p className="text-slate-400 mb-8">Diszkrét intimpad kezelések elérhető árakon.</p>
                    <div className="space-y-4 mb-10 text-lg max-w-md mx-auto">
                        <div className="flex justify-between items-center bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
                            <span className="font-medium">1 alkalom</span>
                            <span className="text-primary font-bold font-display text-xl">7 900 Ft</span>
                        </div>
                        <div className="flex justify-between items-center bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
                            <span className="font-medium">6 alkalmas bérlet</span>
                            <span className="text-primary font-bold font-display text-xl">39 000 Ft</span>
                        </div>
                        <div className="flex justify-between items-center bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
                            <span className="font-medium">8 alkalmas bérlet</span>
                            <span className="text-primary font-bold font-display text-xl">45 000 Ft</span>
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
                        Jelentkezzen be hozzánk diszkrét intimpad kezelésünkre, és tegyen az életminőségéért még ma!
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
                            Az oldalon szereplő információk tájékoztató jellegűek. A kezelések eredménye egyénfüggő, és nem helyettesíti az orvosi diagnózist vagy szakszerű kezelést. Kérdés esetén egyeztessünk, szükség esetén nőgyógyászati vagy urológiai orvosi konzultáció javasolt a kezelés megkezdése előtt.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
