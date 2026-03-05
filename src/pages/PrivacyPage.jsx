import SEO from '../components/SEO'
import { Link } from 'react-router-dom'

export default function PrivacyPage() {
    return (
        <>
            <SEO
                title="Adatkezelési tájékoztató | SlimBody Szentendre"
                description="Adatkezelési tájékoztató a kapcsolatfelvételhez kapcsolódó adatkezelésről."
                path="/adatkezelesi-tajekoztato"
                breadcrumbs={[{ name: 'Adatkezelési Tájékoztató', path: '/adatkezelesi-tajekoztato' }]}
            />

            {/* Header */}
            <section className="bg-slate-50 dark:bg-background-dark pt-24 pb-16 px-6 relative overflow-hidden border-b border-slate-100 dark:border-slate-800">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium mb-4 text-slate-900 dark:text-white">
                        Adatkezelési <span className="italic text-primary">tájékoztató</span>
                    </h1>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Tájékoztatás az e-mailes és telefonos kapcsolatfelvételhez kapcsolódó adatkezelésről, a GDPR előírásainak megfelelően.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-24 px-6 max-w-3xl mx-auto prose prose-slate dark:prose-invert prose-headings:font-display prose-headings:font-medium prose-a:text-primary">

                <h2>Milyen adatokat kezelünk?</h2>
                <p>
                    A kapcsolatfelvétel során kizárólag azokat az adatokat kezeljük, amelyeket Ön a weboldal űrlapján keresztül, vagy telefonos megkeresés során önkéntesen megad számunkra. Ezek a következők lehetnek:
                </p>
                <ul>
                    <li>Név (azonosítás)</li>
                    <li>Telefonszám (kapcsolatfelvétel és egyeztetés céljából)</li>
                    <li>E-mail cím (ha megadja, alternatív kapcsolattartási mód)</li>
                    <li>Az üzenet tartalma, preferált kezelés megnevezése</li>
                </ul>

                <h2>Az adatkezelés célja</h2>
                <p>
                    Az adatkezelés célja a weboldalon érdeklődők és a vállalkozás közötti kommunikáció biztosítása, azon belül:
                </p>
                <ul>
                    <li>Sikeres egyeztetés a kért szolgáltatásra (HIEMT, Intimpad, Wiener stb.)</li>
                    <li>Kérdések megválaszolása, visszahívás kérése esetén a kapcsolat felvétele</li>
                    <li>A későbbiekben nyújtott szolgáltatással kapcsolatos kommunikáció és emlékeztetők küldése</li>
                </ul>

                <h2>Meddig tároljuk az adatokat?</h2>
                <p>
                    Személyes adatait a megkeresés lezárásáig tároljuk, amennyiben nem történik szolgáltatás-igénybevétel. Sikeres egyeztetés és szolgáltatás esetén az adatokat a jogszabályi (pl. számviteli, adózási) kötelezettségeknek megfelelő ideig tároljuk. Ön bármikor kérheti az adatok törlését a kötelező megőrzési időn kívül eső adatok esetében.
                </p>

                <h2>Adattovábbítás harmadik fél részére</h2>
                <p>
                    A megadott személyes adatokat szigorúan bizalmasan kezeljük. Adatait harmadik félnek kereskedelmi vagy marketing célból nem adjuk át. Adattovábbítás kizárólag a jogszabályban rögzített esetekben (pl. hatósági megkeresés) történhet.
                </p>

                <h2>Az Ön jogai és kapcsolat a jogérvényesítés végett</h2>
                <p>
                    Az adatkezeléssel kapcsolatban Ön jogosult:
                </p>
                <ul>
                    <li>Tájékoztatást kérni személyes adatai kezeléséről (hozzáférés joga)</li>
                    <li>Kérni a pontatlan vagy hiányos adatok helyesbítését</li>
                    <li>Kérni adatai törlését ("elfeledtetéshez való jog"), ha azok kezelése már nem szükséges</li>
                    <li>Kérni az adatkezelés korlátozását</li>
                </ul>
                <p>
                    Bármilyen kérdésével, kérésével vagy panaszával kérjük, keressen minket az alábbi elérhetőségen:
                </p>
                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 mt-6 font-medium">
                    Telefon: <a href="tel:+36204562314">+36 20 456 2314</a>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
                    <Link to="/" className="text-primary font-semibold hover:underline flex items-center justify-center gap-2">
                        &larr; Vissza a főoldalra
                    </Link>
                </div>

            </section>
        </>
    )
}
