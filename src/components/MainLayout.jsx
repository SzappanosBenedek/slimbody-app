import { useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingCTA from './FloatingCTA'

function ScrollToTop() {
    const { pathname } = useLocation()
    // useLayoutEffect: festés ELŐTT fut szinkronban → nincs scroll villanás
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
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
