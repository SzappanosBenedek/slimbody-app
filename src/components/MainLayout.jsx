import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingCTA from './FloatingCTA'

function ScrollToTop() {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, [pathname])
    return null
}

export default function MainLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <ScrollToTop />
            <Navbar />
            {/* key NÉLKÜL – React Router maga mountolja/unmountolja az Outlet-et */}
            <main className="flex-grow overflow-x-hidden pt-16">
                <Outlet />
            </main>
            <Footer />
            <FloatingCTA />
        </div>
    )
}
