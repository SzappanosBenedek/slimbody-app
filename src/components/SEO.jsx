import { Helmet } from 'react-helmet-async'

const DOMAIN = 'https://slimbodyszentendre.hu'
const BRAND_NAME = 'SlimBody Szentendre'
const PHONE = '+36204562314'
const ADDRESS = { street: 'Korona u. 3.', city: 'Szentendre', zip: '2000', country: 'HU' }
const GEO = { lat: 47.66985, lng: 19.07472 }
const FB_URL = 'https://www.facebook.com/profile.php?id=61586982996096'
const IG_URL = 'https://www.instagram.com/slimbody.szentendre'

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    "@id": `${DOMAIN}/#localbusiness`,
    "name": BRAND_NAME,
    "description": "Prémium alakformáló kezelések Szentendrén: HIEMT elektromágneses izomstimuláció, HIEMT Intimpad medencefenék-erősítés és Wiener aromaterápiás testtekercselés.",
    "url": DOMAIN,
    "telephone": PHONE,
    "email": "slimbodyszentendre@gmail.com",
    "image": `${DOMAIN}/images/heroimage.webp`,
    "address": {
        "@type": "PostalAddress",
        "streetAddress": ADDRESS.street,
        "addressLocality": ADDRESS.city,
        "postalCode": ADDRESS.zip,
        "addressCountry": ADDRESS.country
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": GEO.lat,
        "longitude": GEO.lng
    },
    "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "08:00", "closes": "20:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "00:00", "closes": "00:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "00:00", "closes": "00:00" }
    ],
    "priceRange": "7900–16000 HUF",
    "currenciesAccepted": "HUF",
    "paymentAccepted": "Cash, Credit Card",
    "areaServed": ["Szentendre", "Pest megye", "Budapest agglomeráció"],
    "sameAs": [FB_URL, IG_URL]
}

export default function SEO({
    title,
    description,
    path = '',
    ogImage = '/images/heroimage.webp',
    isLocalBusiness = false,
    breadcrumbs = [],
    faq = [],
    serviceOffers = null      // { name, description, offers: [{name, price}] }
}) {
    const currentUrl = `${DOMAIN}${path}`

    // BreadcrumbList
    const breadcrumbItems = [{ name: "Főoldal", path: "/" }, ...breadcrumbs]
        .map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": `${DOMAIN}${item.path}`
        }))
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems
    }

    // FAQPage
    const faqSchema = faq.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faq.map(q => ({
            "@type": "Question",
            "name": q.title,
            "acceptedAnswer": { "@type": "Answer", "text": typeof q.content === 'string' ? q.content : q.title }
        }))
    } : null

    // Service schema
    const serviceSchema = serviceOffers ? {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": serviceOffers.name,
        "description": serviceOffers.description,
        "provider": {
            "@type": "HealthClub",
            "@id": `${DOMAIN}/#localbusiness`,
            "name": BRAND_NAME
        },
        "areaServed": ["Szentendre", "Pest megye"],
        "offers": serviceOffers.offers.map(o => ({
            "@type": "Offer",
            "name": o.name,
            "price": o.price,
            "priceCurrency": "HUF"
        }))
    } : null

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={currentUrl} />

            {/* Hreflang */}
            <link rel="alternate" hrefLang="hu" href={currentUrl} />
            <link rel="alternate" hrefLang="hu-HU" href={currentUrl} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={`${DOMAIN}${ogImage}`} />
            <meta property="og:locale" content="hu_HU" />
            <meta property="og:site_name" content={BRAND_NAME} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${DOMAIN}${ogImage}`} />

            {/* Robots */}
            <meta name="robots" content="index, follow" />

            {/* Structured Data */}
            {isLocalBusiness && (
                <script type="application/ld+json">
                    {JSON.stringify(localBusinessSchema)}
                </script>
            )}
            {breadcrumbItems.length > 1 && (
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            )}
            {faqSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            )}
            {serviceSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(serviceSchema)}
                </script>
            )}
        </Helmet>
    )
}
