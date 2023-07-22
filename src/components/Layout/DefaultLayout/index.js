import Header from '../components/Header';
import Footer from '../components/Footer';
import BackgroundTitle from './BackgroundTitle';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DefaultLayout({ name, path, children }) {
    return (
        <div className={``}>
            <Header />
            <BackgroundTitle name={name} path={path} />
            <div className={`${cx('bg--main')} pt-5`}>
                <div className="container">
                    <div className="content">{children}</div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
