import Header from '../components/componentes/Header.jsx';
import Footer from '../components/componentes/Footer.jsx';


function MainLayout({ children }) {
    return (
        <div className="d-flex flex-column min-vh-100">

            <Header />

            <main className="container flex-grow-1" style={{padding: "0px", width: "100vw", maxWidth: "100vw"}}>
                {children}
            </main>
             

            <Footer />

        </div>
    );
}

export default MainLayout;