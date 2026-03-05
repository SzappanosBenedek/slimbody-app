import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import Accordion from '../components/Accordion'

const generalFaq = [
    {
        title: 'Mennyi ideig tart egy kezelés?',
        content: 'A HIEMT és az Intimpad kezelések jellemzően kb. 30 percesek, míg a Wiener testtekercselés 45–60 percet vesz igénybe (előkészületekkel együtt érdemes egy órát számolni).'
    },
    {
        title: 'Mikor látható változás?',
        content: 'A változás egyénfüggő, számos tényezőtől (alkat, életmód, étkezés) függ. A rendszeresség és az életmódhoz illesztett kúra segíthet a célok tartósabb támogatásában. Általában egy komplett kúra után látványosabb a különbség.'
    },
    {
        title: 'Fájdalmasak a kezelések?',
        content: 'Nem invazív jellegűek, és általában fájdalommentesek. A HIEMT intenzív izomlázhoz hasonló érzéssel járhat, a Wiener tekercselés hideg-meleg érzetet ad. A komfortérzet egyéni, így a kezelések is egyénre szabva, fokozatosan végezhetők. Kérdés esetén mindig egyeztessünk.'
    },
    {
        title: 'Mit érdemes felvenni a kezelésekre?',
        content: 'Kényelmes ruházat javasolt, amelyben könnyen tud ellazulni. Az Intimpad kezelés esetén különösen kényelmes, mivel a kezelés teljesen utcai ruhában történik, nincs szükség átöltözésre.'
    }
]

const intimpadFaq = [
    {
        title: 'Mire való a HIEMT intimpad kezelés?',
        content: 'A medencefenék izmainak erősítését és tudatosabb kontrollját támogathatja, különösen terhesség vagy szülés után visszamaradt, esetleg az életmódból eredő elgyengült izomzat esetén.'
    },
    {
        title: 'Hogyan működik a HIEMT technológia a medencefenéken?',
        content: 'Elektromágneses energiával stimulálja a motoros neuronokat, ezáltal a hagyományos (pl. Kegel) minőséget jócskán meghaladó, intenzív izomösszehúzódásokat válthat ki a gátizmoknál.'
    },
    {
        title: 'Milyen eredményekre számíthatok?',
        content: 'Természetesen egyénfüggő; de a kontroll és a komfortérzet fokozatosan javulhat a rendszeresség függvényében, ami hozzájárulhat az életminőség emelkedéséhez.'
    },
    {
        title: 'Mennyire biztonságos az intimpad kezelés?',
        content: 'Teljesen nem invazív jellegű és fájdalommentes; azonban mint minden elektromágneses kezelésnél, ellenjavallatok esetén (pl. fém implantátum a medencében) nem alkalmazható.'
    },
    {
        title: 'Milyen hosszú egy intimpad kezelés, és hányszor kell eljönni?',
        content: 'Jellemzően 30 perc alatt zajlik. A kúra hossza az egyéni céltól és állapottól függ, általában 6-8 alkalmas sorozat javasolt heti rendszerességgel.'
    },
    {
        title: 'Az intimpadhoz is kell vetkőzni?',
        content: 'Nem. A kezelés teljes mértékben utcai ruhában történik az erre a célra kialakított speciális széken ülve.'
    }
]

const wienerFaq = [
    {
        title: 'Wiener kezelésnél miért kell figyelni az evésre és a vízfogyasztásra?',
        content: 'A Kneipp-effektuson alapuló folyamat a szervezet belső kompenzációs mechanizmusát (vér-nyirok keringés fokozása) indítja be. A megfelelő folyadékbevitel és a kezelési koplalási szabályok betartása támogatja ezt az intenzív méregtelenítő, keringésnövelő folyamatot és a komfortérzetet.'
    },
    {
        title: 'Mikor nem ajánlott a Wiener tekercselés?',
        content: 'Terhesség, szoptatás, erőteljes visszérgyulladás, valamint a kezelő krémekben lévő illóolajok (pl. fahéj) esetleges allergiája esetén a kezelés nem javasolt.'
    }
]

const allFaqs = [...generalFaq, ...intimpadFaq, ...wienerFaq]

export default function FaqPage() {
    return (
        <>
            <SEO
                title="GYIK | HIEMT, Intimpad és Wiener – kérdések és válaszok"
                description="Gyakori kérdések alakformáló kezelésekről: HIEMT, Intimpad és Wiener. Hogyan zajlik, mennyi ideig tart, mire figyeljen?"
                path="/gyik"
                breadcrumbs={[{ name: 'GYIK', path: '/gyik' }]}
                faq={allFaqs}
            />

            {/* Header */}
            <section className="bg-slate-50 dark:bg-background-dark pt-24 pb-16 px-6 relative overflow-hidden border-b border-slate-100 dark:border-slate-800">
                <div className="absolute top-0 left-0 w-1/2 h-full bg-primary/5 blur-[100px] rounded-full translate-x-1/2 pointer-events-none"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-6 text-slate-900 dark:text-white leading-tight">
                        Gyakran ismételt <br className="hidden md:block" />
                        <span className="italic text-primary">kérdések</span>
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-balance">
                        Összegyűjtöttük a kezeléseinkkel kapcsolatos legfontosabb tudnivalókat, hogy Ön felkészülten érkezhessen stúdiónkba.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-24 px-6 max-w-4xl mx-auto space-y-20">

                <div>
                    <h2 className="text-3xl font-display mb-8">Általános kérdések</h2>
                    <Accordion items={generalFaq} />
                </div>

                <div>
                    <h2 className="text-3xl font-display mb-8">HIEMT Intimpad GYIK</h2>
                    <Accordion items={intimpadFaq} />
                </div>

                <div>
                    <h2 className="text-3xl font-display mb-8">Wiener testtekercselés – tudnivalók</h2>
                    <Accordion items={wienerFaq} />
                </div>

                {/* Biztonság és ellenjavallatok */}
                <div className="bg-primary/5 border border-primary/20 p-8 md:p-10 rounded-3xl text-center">
                    <h2 className="text-2xl font-display mb-4">Biztonság és ellenjavallatok</h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto mb-6">
                        Az Ön biztonsága és kényelme az első. Bár a kezelések nem invazívak, bizonyos egészségügyi állapotok fennállása esetén (ellenjavallatok) a kezelés nem végezhető. Kérjük, tájékozódjon a részletes ellenjavallatokról az egyes szolgáltatások oldalán!
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/hiemt-kezeles-szentendre" className="px-5 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 text-sm font-semibold hover:border-primary hover:text-primary transition-colors">HIEMT Ellenjavallatok</Link>

                        <Link to="/wiener-testtekercseles-szentendre" className="px-5 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 text-sm font-semibold hover:border-primary hover:text-primary transition-colors">Wiener Ellenjavallatok</Link>
                    </div>
                </div>

            </section>
        </>
    )
}
