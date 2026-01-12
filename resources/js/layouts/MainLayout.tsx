
import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';


function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <main className="container-fluid p-0 flex-grow-1">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default MainLayout;