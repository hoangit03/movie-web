import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Contact.module.scss';
import classNames from 'classnames/bind';
import {
    faEnvelopeOpen,
    faLocationDot,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function Contact() {
    useEffect(() => {
        document.title = 'Contact - Movflx';
    }, []);

    return (
        <div className={`${cx('wrapper')}`}>
            <div className="pb-5">
                <div className={`row`}>
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <form className={`mb-4`}>
                            <p
                                className={`underlined--letters text-white f-family mb-5`}
                            >
                                Contact Form
                            </p>

                            <div className={`${cx('contact--form')} p-4`}>
                                <div className={`row`}>
                                    <div
                                        className={`col-lg-6 col-md-6 col-sm-12`}
                                    >
                                        <input
                                            className={`f-family rounded pt-3 pb-3 ps-3 w-100`}
                                            placeholder="Your Name*"
                                            type="text"
                                        />
                                    </div>
                                    <div
                                        className={`col-lg-6 col-md-6 col-sm-12`}
                                    >
                                        <input
                                            className={`f-family rounded pt-3 pb-3 ps-3 w-100`}
                                            placeholder="Your Email*"
                                            type="email"
                                        />
                                    </div>
                                    <div className={`col-lg-12`}>
                                        <div className={`pt-2`}>
                                            <input
                                                className={`f-family rounded pt-3 pb-3 ps-3 w-100 mt-4`}
                                                placeholder="Subject*"
                                                type="email"
                                            />
                                        </div>
                                    </div>
                                    <div className={`col-lg-12`}>
                                        <div className={`pt-2`}>
                                            <textarea
                                                className={`f-family rounded pt-3 pb-3 ps-3 w-100 mt-4`}
                                                placeholder="Type Your Message"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className={`${cx(
                                        'send--mess',
                                    )} mt-4 mb-3 bg--hover rounded-pill text-uppercase border--primary f-family bg--dark text-white fw-bold-700`}
                                >
                                    send message
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div>
                            <p
                                className={`underlined--letters text-white f-family mb-5`}
                            >
                                Information
                            </p>
                            <div
                                className={`${cx('information')} p-4 pt-5 pb-5`}
                            >
                                <p
                                    className={`${cx(
                                        'border--bottom',
                                    )} f-family pb-4 m-0 mb-2`}
                                >
                                    <span
                                        className={`text-white pe-2 fw-bold-600`}
                                    >
                                        Find solutions :
                                    </span>
                                    <span>
                                        to common problems, or get help from a
                                        support agent industry's standard.
                                    </span>
                                </p>
                                <div
                                    className={`${cx(
                                        'border--bottom',
                                    )} d-flex align-items-center pb-4 pt-4`}
                                >
                                    <div
                                        className={`${cx(
                                            'items',
                                        )} d-flex align-items-center justify-content-center bg--primary rounded-circle`}
                                    >
                                        <FontAwesomeIcon icon={faLocationDot} />
                                    </div>
                                    <p className={`f-family m-0 ms-3`}>
                                        <span
                                            className={`text-white pe-2 fw-bold-600`}
                                        >
                                            Address :
                                        </span>
                                        <span>W38 Park Road New York</span>
                                    </p>
                                </div>
                                <div
                                    className={`${cx(
                                        'border--bottom',
                                    )} d-flex align-items-center pb-4 pt-4`}
                                >
                                    <div
                                        className={`${cx(
                                            'items',
                                        )} d-flex align-items-center justify-content-center bg--primary rounded-circle`}
                                    >
                                        <FontAwesomeIcon icon={faPhone} />
                                    </div>
                                    <p className={`f-family m-0 ms-3`}>
                                        <span
                                            className={`text-white pe-2 fw-bold-600`}
                                        >
                                            Phone :
                                        </span>
                                        <span>(09) 123 854 365</span>
                                    </p>
                                </div>
                                <div
                                    className={`${cx(
                                        'border--bottom',
                                    )} d-flex align-items-center pb-4 pt-4`}
                                >
                                    <div
                                        className={`${cx(
                                            'items',
                                        )} d-flex align-items-center justify-content-center bg--primary rounded-circle`}
                                    >
                                        <FontAwesomeIcon
                                            icon={faEnvelopeOpen}
                                        />
                                    </div>
                                    <p className={`f-family m-0 ms-3`}>
                                        <span
                                            className={`text-white pe-2 fw-bold-600`}
                                        >
                                            Email :
                                        </span>
                                        <span>support@movflx.com</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`${cx(
                    'map',
                )} position-absolute end-0 start-0 bottom-0`}
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4694.105181155695!2d106.684131322723!3d10.822132569833238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174deb3ef536f31%3A0x8b7bb8b7c956157b!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2hp4buHcCBUUC5IQ00!5e0!3m2!1svi!2s!4v1690132395159!5m2!1svi!2s"
                    style={{ border: 0, width: '100%', height: '100%' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
}

export default Contact;
