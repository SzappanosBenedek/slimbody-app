import { lazy, Suspense } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './components/MainLayout'

// Eager: főoldal azonnal betölt
import PillarPage from './pages/PillarPage'

// Lazy: többi oldal csak akkor tölt, amikor a felhasználó oda navigál
const HiemtPage = lazy(() => import('./pages/HiemtPage'))
const IntimpadPage = lazy(() => import('./pages/IntimpadPage'))
const WienerPage = lazy(() => import('./pages/WienerPage'))
const PricingPage = lazy(() => import('./pages/PricingPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const FaqPage = lazy(() => import('./pages/FaqPage'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'))

// Fallback: töltés közben tartja a lapmagasságot, footer nem ugrik fel
const Fallback = () => <div style={{ minHeight: '100vh' }} />

// App indulása után idle időben prefetcheli az összes chunk-ot
// → első navigáció is azonnal tölt frissítés után
const prefetchAllRoutes = () => {
  import('./pages/HiemtPage')
  import('./pages/IntimpadPage')
  import('./pages/WienerPage')
  import('./pages/PricingPage')
  import('./pages/ContactPage')
  import('./pages/FaqPage')
  import('./pages/PrivacyPage')
}

if (typeof window !== 'undefined') {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(prefetchAllRoutes, { timeout: 2000 })
  } else {
    setTimeout(prefetchAllRoutes, 1500)
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <PillarPage /> },
      { path: "alakformalo-kezelesek-szentendre", element: <PillarPage /> },
      { path: "hiemt-kezeles-szentendre", element: <Suspense fallback={<Fallback />}><HiemtPage /></Suspense> },
      { path: "intimpad-medencefenek-erosites-szentendre", element: <Suspense fallback={<Fallback />}><IntimpadPage /></Suspense> },
      { path: "wiener-testtekercseles-szentendre", element: <Suspense fallback={<Fallback />}><WienerPage /></Suspense> },
      { path: "arlista", element: <Suspense fallback={<Fallback />}><PricingPage /></Suspense> },
      { path: "kapcsolat", element: <Suspense fallback={<Fallback />}><ContactPage /></Suspense> },
      { path: "gyik", element: <Suspense fallback={<Fallback />}><FaqPage /></Suspense> },
      { path: "adatkezelesi-tajekoztato", element: <Suspense fallback={<Fallback />}><PrivacyPage /></Suspense> },
    ]
  }
])

function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}

export default App
