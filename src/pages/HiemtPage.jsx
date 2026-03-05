import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Phone, CheckCircle2 } from 'lucide-react'
import ScrollytellingCounter from '../components/ScrollytellingCounter'
import Accordion from '../components/Accordion'

const contraindications = [
    {
        title: 'Közös ellenjavallatok alakformáló kezelésekhez',
        content: (
            <ul className="space-y-2 list-disc pl-4 text-slate-600 dark:text-slate-400">
                <li>Terhesség, szoptatás</li>
                <li>Keringési rendellenesség</li>
                <li>Epilepszia</li>
                <li>Hasi sérv</li>
                <li>Szív- és érrendszeri betegség, keringési rendellenesség</li>
                <li>Trombózis, trombózisra való hajlam</li>
                <li>Daganatos, krónikus vagy rákos megbetegedés</li>
                <li>Beépített elektromos műszer (pacemaker, fémimplantátum, elektromos implantátum, neurostimulátor, defibrillátor)</li>
                <li>Bőrbetegség a kezelendő területen</li>
                <li>Laparaszkópos vagy nyílt műtét a kezelt területen az elmúlt 6 hónapban</li>
                <li>Légzési problémák, tüdővel kapcsolatos megbetegedések, tüdőgyengeség</li>
                <li>Máj betegség</li>
                <li>Veseelégtelenség</li>
                <li>Autoimmun vagy szisztémás betegség</li>
                <li>Immunelégtelenség, immunszuppresszív gyógyszerek</li>
                <li>Aktuális fertőzés, megbetegedés, láz</li>
                <li>Izomsorvadás, izombetegség</li>
                <li>Menstruáció ideje (hason)</li>
                <li className="mt-4 italic font-medium">Kérdés esetén egyeztessünk — szükség esetén orvosi jóváhagyás javasolt.</li>
            </ul>
        )
    }
]

export default function HiemtPage() {
    return (
        <>
            <SEO
                title="HIEMT Kezelés Szentendrén | Elektromágneses Izomstimulátor | SlimBody"
                description="HIEMT kezelés Szentendrén – 30 perc alatt 20 000 izomösszehúzódás! Zsírcsökkentés, izomtömeg növelés. Egyéni és bérletes árak. Hívjon: +36 20 456 2314"
                path="/hiemt-kezeles-szentendre"
                breadcrumbs={[{ name: 'HIEMT Kezelés', path: '/hiemt-kezeles-szentendre' }]}
                serviceOffers={{
                    name: 'HIEMT Kezelés Szentendrén',
                    description: 'Elektromágneses izomstimulátor kezelés has, fenék, comb, kar és vádli területekre.',
                    offers: [
                        { name: 'HIEMT 1 – 1 terület, 1 alkalom', price: 12000 },
                        { name: 'HIEMT 2 – 2 terület, 1 alkalom', price: 16000 },
                        { name: '6 alkalmas bérlet – 1 terület', price: 60000 },
                        { name: '6 alkalmas bérlet – 2 terület', price: 84000 },
                        { name: '8 alkalmas bérlet – 1 terület', price: 80000 },
                        { name: '8 alkalmas bérlet – 2 terület', price: 112000 },
                    ]
                }}
            />

            {/* Hero Section */}
            <section className="relative w-full pt-12 pb-20 md:pb-24 overflow-hidden border-b border-slate-100 dark:border-slate-800">
                <div className="px-6 relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

                    <div className="w-full md:w-1/2">
                        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary-dark text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-primary/20">
                            Elektromágneses izomstimuláció
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight mb-8 text-slate-900 dark:text-white">
                            HIEMT kezelés <br />
                            <span className="italic text-primary">Szentendrén</span>
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed mb-8 text-balance">
                            A HIEMT (High Intensity Elektro-Magnetic Technology) célzott izomaktiválást támogató megoldás, amely a motoros neuronok stimulálásán keresztül intenzív izomösszehúzódásokat válthat ki. A cél a tónusosabb megjelenés és testkontúr támogatása — prémium, diszkrét környezetben.
                        </p>
                        <div className="flex gap-4">
                            <Link to="/kapcsolat" className="px-8 py-4 bg-primary hover:bg-primary-dark text-slate-900 font-semibold rounded-full shadow-lg transition-all text-center flex items-center justify-center gap-2 group">
                                Érdeklődöm <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] border border-slate-100 dark:border-slate-800">
                            <img
                                alt="HIEMT kezelés visual"
                                className="w-full h-full object-cover"
                                src="/images/hiemtgep2.webp"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* Mi az a HIEMT? */}
            <section className="py-14 md:py-24 px-6 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-display mb-8">Mi az a HIEMT?</h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-6">
                    A HIEMT egy kivételes technológia, amely nagy intenzitású elektromágneses impulzusok segítségével hat a testre. Ezek az impulzusok közvetlenül a motoros neuronokat stimulálják, ezáltal olyan folyamatos, határozott izomösszehúzódásokat váltanak ki, amik akaratlagosan edzéssel nem jöhetnének létre.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-medium bg-primary/5 p-6 rounded-2xl border border-primary/10">
                    A kezelés teljesen nem invazív jellegű, rendkívül komfortos, és pontosan tervezhető időtartamú – így ideális választás a sűrűbb mindennapokba is.
                </p>
            </section>

            {/* Hogyan zajlik a kezelés? & Scrollytelling */}
            <section className="py-14 md:py-24 px-6 bg-slate-50 dark:bg-background-dark border-y border-slate-100 dark:border-slate-800 overflow-hidden">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-display mb-8">Hogyan zajlik a kezelés?</h2>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold flex-shrink-0 mt-1">1</div>
                                <p className="text-slate-600 dark:text-slate-400 text-lg">A kényelmesen elhelyezkedő vendégnél a kezelőfej a kiválasztott problémás területre (pl. has, fenék) kerül.</p>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div>
                                <p className="text-slate-600 dark:text-slate-400 text-lg">A gép programozott impulzusai megkezdik az izomaktiválást hullámzó intenzitással, izomlázhoz hasonló, de komfortos érzést adva.</p>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold flex-shrink-0 mt-1">3</div>
                                <p className="text-slate-600 dark:text-slate-400 text-lg">A 30 perces kezelés alatt Ön relaxálhat, miközben az izomzat intenzív munkát végez.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full scale-150"></div>
                        <div className="relative z-10 w-full">
                            <ScrollytellingCounter />
                            <p className="mt-8 text-[11px] text-slate-400 italic text-center max-w-sm mx-auto">
                                *1 alkalom jellemzően ~30 perc. A gyártói leírások szerint akár ~20 000 erőteljes izomösszehúzódás is létrejöhet.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Kezelési területek (Listás nézet) */}
            <section className="py-14 md:py-24 px-6 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-display mb-4">Kezelési területek</h2>
                    <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: 'Has', src: '/images/hiemthas.webp', desc: 'A hasi zsírpárnák csökkentésének támogatása és az egyenes hasizom tónusának javítása.' },
                        { title: 'Fenék', src: '/images/hiemtfenek.webp', desc: 'Fenék lifting és volumenizálás műtét nélkül, a tartás javítása az izomépítés által.' },
                        { title: 'Comb', src: '/images/hiemtcomb.webp', desc: 'A belső és külső comb feszesítése, centiméterekben mérhető karcsúsítás és kerületcsökkentés.' },
                        { title: 'Kar', src: '/images/hiemtkar.webp', desc: 'Integetőizom feszesítése, a tricepsz és bicepsz területének tónusnövelése.' },
                        { title: 'Vádli', src: '/images/hiemtvadli.webp', desc: 'Formás és szálkás vádli, erőteljesebb izomtónus támogatása rövid idő alatt.' }
                    ].map((area, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="relative rounded-3xl overflow-hidden mb-4 h-80 shadow-md">
                                <img src={area.src} alt={`${area.title} kezelés`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur px-5 py-2 rounded-full shadow-lg">
                                    <span className="font-display font-bold tracking-widest uppercase text-primary">0{idx + 1}. {area.title}</span>
                                </div>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2 px-2">{area.desc}</p>
                            <Link to="/kapcsolat" className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-widest ml-2 group-hover:text-primary-dark transition-colors">
                                Érdeklődöm <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tájékoztató & Kinek Ajánlott */}
            <section className="py-14 md:py-24 px-6 bg-primary/5 dark:bg-primary/10 border-y border-primary/10">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div>
                        <h2 className="text-3xl font-display mb-8 text-center text-slate-900 dark:text-white">Kinek ajánlott?</h2>
                        <ul className="space-y-4 max-w-2xl mx-auto">
                            <li className="flex items-start gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                                <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-slate-600 dark:text-slate-300">Ha a cél a testkontúr és izomtónus támogatása aktív sportolás mellett vagy helyett.</span>
                            </li>
                            <li className="flex items-start gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                                <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-slate-600 dark:text-slate-300">Ha célzott területeken (has, fenék) szeretne intenzív izomaktiválást támogatni.</span>
                            </li>
                            <li className="flex items-start gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                                <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-slate-600 dark:text-slate-300">Ha edzés mellett kiegészítő megoldást keres a látványosabb eredményekért.</span>
                            </li>
                        </ul>
                        <p className="text-center text-xs text-slate-500 mt-6">* A kezelések eredményei egyénfüggők.</p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 md:p-10 rounded-3xl shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
                        <h2 className="text-2xl font-display mb-4">Tájékoztató jellegű vizsgálati eredmények</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Kutatásokban és klinikai tesztekben kezeléssorozatok után átlagos változásokat figyeltek meg (például az izomtömeg és a zsírszövet arányának változása). Ezek az információk tájékoztató jellegűek, és a konkrét eredmények egyénfüggők, nagyban múlnak az életmódon is.
                        </p>
                    </div>
                </div>
            </section>

            {/* Szétnyílt hasizom kiegészítő kezelése */}
            <section className="py-14 md:py-24 px-6 max-w-4xl mx-auto space-y-16 border-t border-slate-100 dark:border-slate-800">
                <div className="text-center">
                    <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary-dark text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-primary/20">
                        Szülés utáni regeneráció
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display mb-6">Szétnyílt hasizom kiegészítő kezelése</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto">
                        Szülés után előfordulhat, hogy az egyenes hasizom (rectus abdominis) eltávolodik egymástól. A cél ilyenkor a törzs stabilitásának és az izomaktiválás támogatása, kíméletes, nem invazív HIEMT technológiával.
                    </p>
                </div>

                {/* Mi az a szétnyílt hasizom? */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-display mb-4">Mi is a szétnyílt hasizom?</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                            A terhesség során a növekvő magzat és a hormonális változások miatt a hasfal kötőszövete (a linea alba) megnyúlhat, aminek következtében az egyenes hasizom két oldala eltávolodhat egymástól.
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Ez az állapot szülés után sok esetben önmagától is javul, azonban gyakran megmaradhat, ami a hasfal gyengébb tartásához, derékfájdalomhoz vagy a komfortérzet csökkenéséhez társulhat.
                        </p>
                    </div>
                    <div className="bg-primary/5 border border-primary/10 p-8 rounded-[2rem]">
                        <h3 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                            Miért fontos az óvatosság?
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Bizonyos, nagy hasűri nyomást okozó gyakorlatok (pl. hagyományos felülések) szétnyílt hasizom esetén nem minden esetben ideálisak. Ha bizonytalan a mozgásformát illetően, javasolt szakemberrel konzultálni.
                        </p>
                    </div>
                </div>

                {/* HIEMT szerepe */}
                <div className="text-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 md:p-10 rounded-3xl shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
                    <h3 className="text-2xl font-display mb-4">Hogyan segíthet a HIEMT?</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto mb-6">
                        A fókuszált elektromágneses impulzusok a motoros neuronokat stimulálják, ezzel intenzív izomösszehúzódást válthatnak ki a hasfalon. Fókuszáltan segítheti a törzsizom-csoportok aktiválását anélkül, hogy a gerincet vagy a medencét megterhelné.
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto italic">
                        Fontos hangsúlyozni, hogy nem csodamódszer, hanem egy hatékony kiegészítő terápia a regeneráció és stabilitás támogatásában. A vizsgálatokban megfigyelt átlagos változások (a nyílás mértékének, valamint az izom- és zsírszövet arányának változása) tájékoztató jellegűek, az eredmények egyénfüggők.
                    </p>
                </div>
            </section>

            {/* Ellenjavallatok */}
            <section className="py-14 md:py-24 px-6 max-w-3xl mx-auto">
                <h2 className="text-3xl font-display mb-8 text-center">Ellenjavallatok & Biztonság</h2>
                <Accordion items={contraindications} />
            </section>

            {/* Pricing Teaser */}
            <section className="py-14 md:py-24 px-6 bg-slate-900 text-slate-200 text-center border-t border-slate-800">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-display mb-6 text-white">HIEMT Ár és bérletek</h2>
                    <div className="space-y-4 mb-10 text-lg">
                        <div className="flex justify-between items-center bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
                            <span className="font-medium">HIEMT 1 (1 terület)</span>
                            <span className="text-primary font-bold font-display text-xl">12 000 Ft</span>
                        </div>
                        <div className="flex justify-between items-center bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
                            <span className="font-medium">HIEMT 2 (2 terület)</span>
                            <span className="text-primary font-bold font-display text-xl">16 000 Ft</span>
                        </div>
                        <div className="flex justify-between items-center bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
                            <span className="font-medium">6 Alkalmas bérlet (1 terület)</span>
                            <span className="text-primary font-bold font-display text-xl">60 000 Ft</span>
                        </div>
                        <div className="flex justify-between items-center bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
                            <span className="font-medium">8 Alkalmas bérlet (2 terület)</span>
                            <span className="text-primary font-bold font-display text-xl">112 000 Ft</span>
                        </div>
                    </div>
                    <Link to="/arlista" className="px-8 py-4 bg-primary text-slate-900 hover:bg-white hover:text-slate-900 font-semibold rounded-full shadow-lg transition-all border border-transparent inline-flex items-center gap-2">
                        Teljes árlista megtekintése <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-14 md:py-24 px-6 bg-slate-50 dark:bg-background-dark">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-display mb-6">Kapcsolatfelvétel</h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-8">
                        Kezdjen bele az átalakulásba még ma! Keressen minket elérhetőségeinken.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                        <a href="tel:+36204562314" className="flex items-center justify-center gap-3 bg-white dark:bg-slate-800 px-6 py-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-primary transition-colors group">
                            <Phone className="w-5 h-5 text-primary" />
                            <span className="font-medium">+36 20 456 2314</span>
                        </a>
                        <div className="flex items-center justify-center gap-3 bg-white dark:bg-slate-800 px-6 py-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <MapPin className="w-5 h-5 text-primary" />
                            <span className="font-medium">2000 Szentendre, Korona u. 3.</span>
                        </div>
                    </div>
                    <Link to="/kapcsolat" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2 group">
                        Érdeklődöm üzenetben <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="max-w-4xl mx-auto mt-24 border-t border-slate-200 dark:border-slate-800 pt-8 text-center text-xs text-slate-500 leading-relaxed">
                    <p className="uppercase tracking-widest font-semibold mb-2">Jogi Nyilatkozat</p>
                    <p>
                        Az oldalon szereplő információk tájékoztató jellegűek. A kezelések eredménye egyénfüggő, és nem helyettesíti az orvosi diagnózist vagy kezelést. Kérdés esetén egyeztessünk, szükség esetén orvosi konzultáció javasolt.
                    </p>
                </div>
            </section>
        </>
    )
}
