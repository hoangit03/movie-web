import Header from '../components/Header';
import Footer from '../components/Footer';
import BackgroundTitle from './BackgroundTitle';

function DefaultLayout({ name, path, children }) {
    return (
        <div className="">
            <Header />
            <BackgroundTitle name={name} path={path} />
            <div className="container">
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
