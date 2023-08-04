import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import {
    faEnvelopeOpen,
    faLocationDot,
    faPhone,
    faRocket,
} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebookF,
    faLinkedinIn,
    faPinterestP,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={`${cx('wrapper')}`}>
            <div className={`${cx('footer-bg')}`}>
                <div className={`container-xl`}>
                    <div className={`row`}>
                        <div className={`col-lg-3`}>
                            <div className={`${cx('items')} mb-3`}>
                                <a href="/" className="pb-2 d-inline-block">
                                    <img
                                        width={154}
                                        src="https://themehut.co/wp/movflx/wp-content/themes/movflx/assets/img/logo/logo.png"
                                        alt=""
                                    />
                                </a>
                                <p
                                    className={`f-family fw-bold-500 mt-4 mb-4 ${cx(
                                        'text--footer',
                                    )}`}
                                >
                                    Movflx Online the relase etras thats sheets
                                    continig passag.
                                </p>
                                <ul className={`p-0 m-0`}>
                                    <li
                                        className={`d-flex align-items-center f-family mb-3 ${cx(
                                            'text--footer',
                                        )}`}
                                    >
                                        <FontAwesomeIcon
                                            icon={faLocationDot}
                                            className="me-2"
                                        />
                                        <span className={`me-2`}>
                                            Address :{' '}
                                        </span>
                                        <span>PO Box W75 Street</span>
                                    </li>
                                    <li
                                        className={`d-flex align-items-center f-family mb-3 ${cx(
                                            'text--footer',
                                        )}`}
                                    >
                                        <FontAwesomeIcon
                                            icon={faPhone}
                                            className="me-2"
                                        />
                                        <span className={`me-2`}>Phone : </span>
                                        <span>+24 1245 654 235</span>
                                    </li>
                                    <li
                                        className={`d-flex align-items-center f-family mb-3 ${cx(
                                            'text--footer',
                                        )}`}
                                    >
                                        <FontAwesomeIcon
                                            icon={faEnvelopeOpen}
                                            className="me-2"
                                        />
                                        <span className={`me-2`}>Email : </span>
                                        <span>info@exemple.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`col-lg-3`}>
                            <div className={`${cx('items')} mb-3`}>
                                <p
                                    className={`underlined--letters text-white f-family`}
                                >
                                    The basic
                                </p>
                                <ul className={`p-0 m-0 mt-4 f-family`}>
                                    <li className={`mb-3`}>
                                        <Link
                                            className={`${cx(
                                                'text--footer',
                                            )} text-decoration-none `}
                                        >
                                            About us
                                        </Link>
                                    </li>
                                    <li className={`mb-3`}>
                                        <Link
                                            className={`${cx(
                                                'text--footer',
                                            )} text-decoration-none `}
                                        >
                                            Contact us
                                        </Link>
                                    </li>
                                    <li className={`mb-3`}>
                                        <Link
                                            className={`${cx(
                                                'text--footer',
                                            )} text-decoration-none `}
                                        >
                                            Support Forums
                                        </Link>
                                    </li>
                                    <li className={``}>
                                        <Link
                                            className={`${cx(
                                                'text--footer',
                                            )} text-decoration-none `}
                                        >
                                            System Status
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`col-lg-3`}>
                            <div className={`${cx('items')} mb-3`}>
                                <p
                                    className={`underlined--letters text-white f-family`}
                                >
                                    Legal
                                </p>
                                <ul className={`p-0 m-0 mt-4 f-family`}>
                                    <li className={`mb-3`}>
                                        <Link
                                            className={`${cx(
                                                'text--footer',
                                            )} text-decoration-none `}
                                        >
                                            Terms of Use
                                        </Link>
                                    </li>
                                    <li className={`mb-3`}>
                                        <Link
                                            className={`${cx(
                                                'text--footer',
                                            )} text-decoration-none `}
                                        >
                                            DMCA Takedown Request
                                        </Link>
                                    </li>
                                    <li className={``}>
                                        <Link
                                            className={`${cx(
                                                'text--footer',
                                            )} text-decoration-none `}
                                        >
                                            Privacy Policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`col-lg-3`}>
                            <div className={`${cx('items')} mb-3`}>
                                <p
                                    className={`underlined--letters text-white f-family`}
                                >
                                    Follow Us
                                </p>
                                <div className={`d-flex mt-4`}>
                                    <div
                                        className={`rounded d-flex align-items-center justify-content-center me-2 ${cx(
                                            'icon',
                                            'facebook',
                                        )}`}
                                    >
                                        <FontAwesomeIcon
                                            icon={faFacebookF}
                                            className={`text-white`}
                                        />
                                    </div>
                                    <div
                                        className={`rounded d-flex align-items-center justify-content-center me-2 ${cx(
                                            'icon',
                                            'twitter',
                                        )}`}
                                    >
                                        <FontAwesomeIcon
                                            icon={faTwitter}
                                            className={`text-white`}
                                        />
                                    </div>
                                    <div
                                        className={`rounded d-flex align-items-center justify-content-center me-2 ${cx(
                                            'icon',
                                            'pinterestP',
                                        )}`}
                                    >
                                        <FontAwesomeIcon
                                            icon={faPinterestP}
                                            className={`text-white`}
                                        />
                                    </div>
                                    <div
                                        className={`rounded d-flex align-items-center justify-content-center me-2 ${cx(
                                            'icon',
                                            'linkedinIn',
                                        )}`}
                                    >
                                        <FontAwesomeIcon
                                            icon={faLinkedinIn}
                                            className={`text-white`}
                                        />
                                    </div>
                                </div>
                                <div
                                    className={`mt-4 d-flex ${cx(
                                        'contact',
                                    )} align-items-center`}
                                >
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className={`border-0 bg-transparent f-family text-white`}
                                    />
                                    <button
                                        className={`${cx(
                                            'icon',
                                        )} d-flex align-items-center justify-content-center rounded-circle`}
                                    >
                                        <FontAwesomeIcon icon={faRocket} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${cx('copy-right-bg')} `}>
                <div className={`container-xl`}>
                    <div
                        className={`d-flex align-items-center justify-content-between`}
                    >
                        <p
                            className={`m-0 p-0 f-family ${cx(
                                'text--footer',
                            )} fw-bold-500`}
                        >
                            Copyright © 2022 All Rights Reserved By Movflx
                        </p>
                        <div className={`d-flex`}>
                            <img
                                src="https://themehut.co/wp/movflx/wp-content/uploads/2022/08/card_img.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
