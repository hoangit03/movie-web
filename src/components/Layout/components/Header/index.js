import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import {
    faBars,
    faMagnifyingGlass,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState('');
    const [showModal, setShowModal] = useState(false);
    const isPcLow = useMediaQuery({ minWidth: 1100 });
    const isTabletMobile = useMediaQuery({ maxWidth: 989 });
    const isTablet = useMediaQuery({ minWidth: 767, maxWidth: 989 });
    const isMobile = useMediaQuery({ maxWidth: 766 });

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
        if (search.trim() !== '') {
            navigate(`/search?search=${search}`);
        }
        setSearch('');
    };

    return (
        <>
            <div
                className={`${
                    show
                        ? `position-fixed ${cx(
                              'bg--dark',
                              'animation--slipDown',
                          )}`
                        : 'position-absolute'
                } w-100 top-0 start-0 z-3`}
            >
                <div className="container-xl overflow-hidden">
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
                            {isTablet && (
                                <>
                                    <form
                                        onSubmit={handleSubmit}
                                        className={`${cx(
                                            'search__container',
                                        )} flex-grow-1 ms-5 me-5 rounded-pill d-flex align-items-center pt-3 pb-3 ps-2 pe-2`}
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
                                        className={`border-0 bg-transparent`}
                                        onClick={() => setShowModal(true)}
                                    >
                                        <FontAwesomeIcon
                                            className={`fs-3 text-white`}
                                            icon={faBars}
                                        />
                                    </button>
                                </>
                            )}

                            {isMobile && (
                                <div className={`d-flex align-items-center`}>
                                    <button
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalId"
                                        className={`border-0 bg-transparent`}
                                    >
                                        <FontAwesomeIcon
                                            className={`fs-3 text-white me-4`}
                                            icon={faMagnifyingGlass}
                                        />
                                    </button>
                                    <button
                                        onClick={() => setShowModal(true)}
                                        className={`border-0 bg-transparent`}
                                    >
                                        <FontAwesomeIcon
                                            className={`fs-3 text-white`}
                                            icon={faBars}
                                        />
                                    </button>
                                </div>
                            )}
                            {!isTabletMobile && (
                                <>
                                    <nav
                                        className={`${cx(
                                            'header__container--nav',
                                        )} ms-3`}
                                    >
                                        <ul className=" p-0 m-0 d-flex list-unstyled justify-content-center align-items-center">
                                            <li className="ms-4 me-4 text-center">
                                                <Link
                                                    className=" text--hover text-decoration-none text-white text-uppercase fw-bold-700 f-family"
                                                    to="/"
                                                >
                                                    home
                                                </Link>
                                            </li>
                                            <li className="ms-4 me-4 text-center">
                                                <Link
                                                    className=" text--hover text-decoration-none text-white text-uppercase fw-bold-700 f-family"
                                                    to="/movie"
                                                >
                                                    movie
                                                </Link>
                                            </li>
                                            <li className="ms-4 me-4 text-center">
                                                <Link
                                                    className=" text--hover text-decoration-none text-white text-uppercase fw-bold-700 f-family"
                                                    to="/tv-show"
                                                >
                                                    tv shows
                                                </Link>
                                            </li>
                                            <li className="ms-4 me-4 text-center">
                                                <Link
                                                    className=" text--hover text-decoration-none text-white text-uppercase fw-bold-700 f-family"
                                                    to="/pricing-plan"
                                                >
                                                    pricing
                                                </Link>
                                            </li>
                                            <li className="ms-4 me-4 text-center">
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
                                                )} rounded-pill d-flex align-items-center pt-3 pb-3 ps-2 pe-2`}
                                            >
                                                <input
                                                    value={search}
                                                    type="text"
                                                    placeholder="Find Favorite Movie"
                                                    onChange={(e) =>
                                                        setSearch(
                                                            e.target.value,
                                                        )
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
                                            {isPcLow && (
                                                <button
                                                    className={`${cx(
                                                        'btn--login',
                                                    )} ms-4 hidden--pc-low bg--hover rounded-pill text-uppercase border--primary f-family bg--dark text-white fw-bold-700`}
                                                >
                                                    Sign in
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {isTabletMobile && (
                <>
                    <div
                        style={{
                            zIndex: 100,
                        }}
                        onClick={() => setShowModal(false)}
                        className={` position-fixed w-100 h-100 top-0 start-0 f-family ${
                            showModal
                                ? `${cx('show-modal')}`
                                : `${cx('hidden-modal')}`
                        }`}
                    >
                        <div
                            style={{
                                backgroundColor: '#171d22',
                                width: '80%',
                                maxWidth: '400px',
                            }}
                            className=" position-absolute h-100 end-0"
                        >
                            <div
                                className={`d-flex align-items-center justify-content-between p-4  ${cx(
                                    'border--bottom',
                                )}`}
                            >
                                <div className="">
                                    <Link to={'/'}>
                                        <img
                                            width={154}
                                            src="https://themehut.co/wp/movflx/wp-content/themes/movflx/assets/img/logo/logo.png"
                                            alt=""
                                        />
                                    </Link>
                                </div>
                                <button
                                    type="button"
                                    className={`border-0 bg-transparent`}
                                    onClick={() => setShowModal(false)}
                                >
                                    <FontAwesomeIcon
                                        className={`text-white fs-3`}
                                        icon={faXmark}
                                    />
                                </button>
                            </div>
                            <ul className={`m-0 p-0 list-unstyled`}>
                                <li className={` ${cx('border--bottom')}`}>
                                    <Link
                                        to="/"
                                        className={`fw-bold-600 ps-4 pt-3 pb-3 d-block text-white text-decoration-none`}
                                        onClick={() => setShowModal(false)}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className={` ${cx('border--bottom')}`}>
                                    <Link
                                        to="/movie"
                                        className={`fw-bold-600 ps-4 pt-3 pb-3 d-block text-white text-decoration-none`}
                                        onClick={() => setShowModal(false)}
                                    >
                                        Movie
                                    </Link>
                                </li>
                                <li className={` ${cx('border--bottom')}`}>
                                    <Link
                                        to="/tv-show"
                                        className={`fw-bold-600 ps-4 pt-3 pb-3 d-block text-white text-decoration-none`}
                                        onClick={() => setShowModal(false)}
                                    >
                                        Tv show
                                    </Link>
                                </li>
                                <li className={` ${cx('border--bottom')}`}>
                                    <Link
                                        to="/pricing-plan"
                                        className={`fw-bold-600 ps-4 pt-3 pb-3 d-block text-white text-decoration-none`}
                                        onClick={() => setShowModal(false)}
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className={` ${cx('border--bottom')}`}>
                                    <Link
                                        to="/contact"
                                        className={`fw-bold-600 ps-4 pt-3 pb-3 d-block text-white text-decoration-none`}
                                        onClick={() => setShowModal(false)}
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {showModal && (
                        <div
                            style={{
                                background: 'rgba(0, 0, 0, 0.5)',
                                zIndex: 50,
                            }}
                            className={` position-fixed w-100 h-100 top-0 start-0 f-family ${
                                showModal
                                    ? `${cx('opacity-show')}`
                                    : `${cx('opacity-hide')}`
                            }`}
                        ></div>
                    )}
                </>
            )}

            <div className="modal fade" id="modalId">
                <div className="modal-dialog" role="document">
                    <div
                        style={{ backgroundColor: '#13151c' }}
                        className="modal-content rounded-3 overflow-hidden"
                    >
                        <form
                            onSubmit={handleSubmit}
                            className={`${cx(
                                'search__container',
                            )} flex-grow-1 w-100 d-flex align-items-center pt-3 pb-3 ps-2 pe-2`}
                        >
                            <input
                                value={search}
                                type="text"
                                placeholder="Find Favorite Movie"
                                onChange={(e) => setSearch(e.target.value)}
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
