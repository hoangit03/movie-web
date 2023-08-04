import Header from '../components/Header';
import Footer from '../components/Footer';
import BackgroundTitle from './BackgroundTitle';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function DefaultLayout({ name, path, children }) {
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get('search');

    return (
        <div className={``}>
            <Header />
            <BackgroundTitle
                name={name}
                path={path}
                search={searchQuery}
                genre={1}
            />
            <div className={`${cx('bg--main')} pt-5`}>
                <div className=" container-xl">
                    <div className="content">{children}</div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
