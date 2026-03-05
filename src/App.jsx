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

const Fallback = () => <div style={{ minHeight: '100vh' }} />

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
