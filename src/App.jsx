import { HelmetProvider } from 'react-helmet-async'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './components/MainLayout'

// Minden oldal eager import – nincs chunk letöltési késleltetés, nincs fehér villanás
import PillarPage from './pages/PillarPage'
import HiemtPage from './pages/HiemtPage'
import IntimpadPage from './pages/IntimpadPage'
import WienerPage from './pages/WienerPage'
import PricingPage from './pages/PricingPage'
import ContactPage from './pages/ContactPage'
import FaqPage from './pages/FaqPage'
import PrivacyPage from './pages/PrivacyPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <PillarPage /> },
      { path: "alakformalo-kezelesek-szentendre", element: <PillarPage /> },
      { path: "hiemt-kezeles-szentendre", element: <HiemtPage /> },
      { path: "intimpad-medencefenek-erosites-szentendre", element: <IntimpadPage /> },
      { path: "wiener-testtekercseles-szentendre", element: <WienerPage /> },
      { path: "arlista", element: <PricingPage /> },
      { path: "kapcsolat", element: <ContactPage /> },
      { path: "gyik", element: <FaqPage /> },
      { path: "adatkezelesi-tajekoztato", element: <PrivacyPage /> },
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
