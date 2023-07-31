import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY >= 200);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = `/search?search=${search}`;
    };

    return (
        <div
            className={`${
                show
                    ? `position-fixed ${cx('bg--dark', 'animation--slipDown')}`
                    : 'position-absolute'
            } w-100 top-0 start-0 z-3`}
        >
            <div className="container">
                <div className={`${cx('header')} pt-4 pb-4`}>
                    <div className=" h-100 header__container d-flex align-items-center justify-content-between">
                        <div className="header__container--logo">
                            <a href="/">
                                <img
                                    width={154}
                                    src="https://themehut.co/wp/movflx/wp-content/themes/movflx/assets/img/logo/logo.png"
                                    alt=""
                                />
                            </a>
                        </div>
                        <nav className={`${cx('header__container--nav')} ms-3`}>
                            <ul className=" p-0 m-0 d-flex list-unstyled">
                                <li className="me-5">
                                    <Link
                                        className=" text--hover text-decoration-none text-white text-uppercase fw-bold-700 f-family"
                                        to="/"
                                    >
                                        home
                                    </Link>
                                </li>
                                <li className="me-5">
                                    <Link
                                        className=" text--hover text-decoration-none text-white text-uppercase fw-bold-700 f-family"
                                        to="/movie"
                                    >
                                        movie
                                    </Link>
                                </li>
                                <li className="me-5">
                                    <Link
                                        className=" text--hover text-decoration-none text-white text-uppercase fw-bold-700 f-family"
                                        to="/tv-show"
                                    >
                                        tv shows
                                    </Link>
                                </li>
                                <li className="me-5">
                                    <Link
                                        className=" text--hover text-decoration-none text-white text-uppercase fw-bold-700 f-family"
                                        to="/pricing-plan"
                                    >
                                        pricing
                                    </Link>
                                </li>
                                <li className="me-5">
                                    <Link
                                        className=" text--hover text-decoration-none text-white text-uppercase fw-bold-700 f-family"
                                        to="/contact"
                                    >
                                        contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="header__container--action">
                            <div className="d-flex">
                                <form
                                    onSubmit={handleSubmit}
                                    className={`${cx(
                                        'search__container',
                                    )} rounded-pill d-flex align-items-center pt-3 pb-3 ps-2 pe-2 me-4`}
                                >
                                    <input
                                        value={search}
                                        type="text"
                                        placeholder="Find Favorite Movie"
                                        onChange={(e) =>
                                            setSearch(e.target.value)
                                        }
                                        className="bg-transparent ps-2 pe-3 text-white f-family"
                                    />
                                    <button
                                        type="submit"
                                        className="border-0 bg-transparent p-0 flex-grow-1"
                                    >
                                        <FontAwesomeIcon
                                            icon={faMagnifyingGlass}
                                            className=" "
                                        />
                                    </button>
                                </form>
                                <button
                                    className={`${cx(
                                        'btn--login',
                                    )}  bg--hover rounded-pill text-uppercase border--primary f-family bg--dark text-white fw-bold-700`}
                                >
                                    Sign in
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
