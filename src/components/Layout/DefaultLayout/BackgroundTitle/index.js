import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './BackgroundTitle.module.scss';

const cx = classNames.bind(styles);

function BackgroundTitle({ name, search = '' }) {
    return (
        <div className={`${cx('wrapper')} position-relative`}>
            <div
                className={`${cx(
                    'content',
                )} position-absolute translate-middle top-50 start-50 text-center f-family`}
            >
                <h1 className=" text-white text-capitalize fw-bold-700">
                    {name === 'search'
                        ? `Search Results for : ${search}`
                        : name}
                </h1>
                <Link
                    to="/"
                    className="text-uppercase text-decoration-none me-4 fw-bold-700"
                >
                    home
                </Link>
                <span className=" text-uppercase text-white fw-bold-700">
                    {name === 'search'
                        ? `Search Results for : ${search}`
                        : name}
                </span>
            </div>
        </div>
    );
}

export default BackgroundTitle;
