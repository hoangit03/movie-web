import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Pricing.module.scss';
import classNames from 'classnames/bind';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function Pricing() {
    useEffect(() => {
        document.title = 'Pricing Plan - Movflx';
    }, []);

    return (
        <div className={`${cx('wrapper')}`}>
            <div
                className={`${cx(
                    'title__container',
                )} text-center f-family text-white`}
            >
                <p className={` text-uppercase fw-bold-700`}>
                    our pricing plan
                </p>
                <h1 className={` text-capitalize fw-bold-700`}>
                    our pricing strategy
                </h1>
            </div>
            <div className={` m-auto`}>
                <div className={`row`}>
                    <div className={` col-lg-4 col-md-6 col-sm-12`}>
                        <div
                            className={` ${cx(
                                'items',
                            )} text-center rounded f-family border--no-color`}
                        >
                            <p
                                className={`${cx(
                                    'name',
                                )} text-uppercase text-white pb-4 fw-bold-700 mb-0`}
                            >
                                premium
                            </p>
                            <div
                                style={{ width: 140, height: 110 }}
                                className={` rounded d-flex align-items-center justify-content-center bg--primary m-auto mb-4`}
                            >
                                <div>
                                    <p
                                        className={`m-0 fw-bold-700 ${cx(
                                            'price',
                                        )}`}
                                    >
                                        $7.99
                                    </p>
                                    <p
                                        className={`m-0 fw-bold-700 ${cx(
                                            'time',
                                        )}`}
                                    >
                                        Monthly
                                    </p>
                                </div>
                            </div>
                            <div className={``}>
                                <div
                                    className={`d-flex align-items-center justify-content-between pb-3 pt-4 ${cx(
                                        'border--bottom',
                                    )}`}
                                >
                                    <div className={`text-white`}>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <span className={`ms-3 fw-bold-500`}>
                                            Video quality
                                        </span>
                                    </div>
                                    <div className={``}>
                                        <span
                                            className={` text--primary fw-bold-500`}
                                        >
                                            Good
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className={`d-flex align-items-center justify-content-between pb-3 pt-4 ${cx(
                                        'border--bottom',
                                    )}`}
                                >
                                    <div className={`text-white`}>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <span className={`ms-3 fw-bold-500`}>
                                            Resolution
                                        </span>
                                    </div>
                                    <div className={``}>
                                        <span
                                            className={` text--primary fw-bold-500`}
                                        >
                                            480p
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className={`d-flex align-items-center justify-content-between pb-3 pt-4 ${cx(
                                        'border--bottom',
                                    )}`}
                                >
                                    <div className={`text-white`}>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <span className={`ms-3 fw-bold-500`}>
                                            Screens you can watch
                                        </span>
                                    </div>
                                    <div className={``}>
                                        <span
                                            className={` text--primary fw-bold-500`}
                                        >
                                            02
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className={`d-flex align-items-center justify-content-between pb-3 pt-4 ${cx(
                                        'border--bottom',
                                    )}`}
                                >
                                    <div className={`text-white`}>
                                        <FontAwesomeIcon icon={faXmark} />
                                        <span className={`ms-3 fw-bold-500`}>
                                            Cancel anytime
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button
                                className={`${cx(
                                    'buy',
                                )} mt-5 mb-2 bg--hover rounded-pill text-capitalize border--primary f-family bg--dark text-white fw-bold-700`}
                            >
                                buy now
                            </button>
                        </div>
                    </div>
                    <div className={` col-lg-4 col-md-6 col-sm-12`}>
                        <div
                            className={` ${cx(
                                'items',
                            )} text-center rounded f-family border--primary`}
                        >
                            <p
                                className={`${cx(
                                    'name',
                                )} text-uppercase text-white pb-4 fw-bold-700 mb-0`}
                            >
                                standard
                            </p>
                            <div
                                style={{ width: 140, height: 110 }}
                                className={` rounded d-flex align-items-center justify-content-center bg--primary m-auto mb-4`}
                            >
                                <div>
                                    <p
                                        className={`m-0 fw-bold-700 ${cx(
                                            'price',
                                        )}`}
                                    >
                                        $9.99
                                    </p>
                                    <p
                                        className={`m-0 fw-bold-700 ${cx(
                                            'time',
                                        )}`}
                                    >
                                        Monthly
                                    </p>
                                </div>
                            </div>
                            <div className={``}>
                                <div
                                    className={`d-flex align-items-center justify-content-between pb-3 pt-4 ${cx(
                                        'border--bottom',
                                    )}`}
                                >
                                    <div className={`text-white`}>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <span className={`ms-3 fw-bold-500`}>
                                            Video quality
                                        </span>
                                    </div>
                                    <div className={``}>
                                        <span
                                            className={` text--primary fw-bold-500`}
                                        >
                                            Better
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className={`d-flex align-items-center justify-content-between pb-3 pt-4 ${cx(
                                        'border--bottom',
                                    )}`}
                                >
                                    <div className={`text-white`}>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <span className={`ms-3 fw-bold-500`}>
                                            Resolution
                                        </span>
                                    </div>
                                    <div className={``}>
                                        <span
                                            className={` text--primary fw-bold-500`}
                                        >
                                            1080p
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className={`d-flex align-items-center justify-content-between pb-3 pt-4 ${cx(
                                        'border--bottom',
                                    )}`}
                                >
                                    <div className={`text-white`}>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <span className={`ms-3 fw-bold-500`}>
                                            Screens you can watch
                                        </span>
                                    </div>
                                    <div className={``}>
                                        <span
                                            className={` text--primary fw-bold-500`}
                                        >
                                            04
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className={`d-flex align-items-center justify-content-between pb-3 pt-4 ${cx(
                                        'border--bottom',
                                    )}`}
                                >
                                    <div className={`text-white`}>
                                        <FontAwesomeIcon icon={faXmark} />
                                        <span className={`ms-3 fw-bold-500`}>
                                            Cancel anytime
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button
                                className={`${cx(
                                    'buy',
                                )} mt-5 mb-2 bg--hover rounded-pill text-capitalize border--primary f-family bg--dark text-white fw-bold-700`}
                            >
                                buy now
                            </button>
                        </div>
                    </div>
                    <div className={` col-lg-4 col-md-6 col-sm-12`}>
                        <div
                            className={` ${cx(
                                'items',
                            )} text-center rounded f-family border--no-color`}
                        >
                            <p
                                className={`${cx(
                                    'name',
                                )} text-uppercase text-white pb-4 fw-bold-700 mb-0`}
                            >
                                premium
                            </p>
                            <div
                                style={{ width: 140, height: 110 }}
                                className={` rounded d-flex align-items-center justify-content-center bg--primary m-auto mb-4`}
                            >
                                <div>
                                    <p
                                        className={`m-0 fw-bold-700 ${cx(
                                            'price',
                                        )}`}
                                    >
                                        $11.99
                                    </p>
                                    <p
                                        className={`m-0 fw-bold-700 ${cx(
                                            'time',
                                        )}`}
                                    >
                                        Monthly
                                    </p>
                                </div>
                            </div>
                            <div className={``}>
                                <div
                                    className={`d-flex align-items-center justify-content-between pb-3 pt-4 ${cx(
                                        'border--bottom',
                                    )}`}
                                >
                                    <div className={`text-white`}>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <span className={`ms-3 fw-bold-500`}>
                                            Video quality
                                        </span>
                                    </div>
                                    <div className={``}>
                                        <span
                                            className={` text--primary fw-bold-500`}
                                        >
                                            Best
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className={`d-flex align-items-center justify-content-between pb-3 pt-4 ${cx(
                                        'border--bottom',
                                    )}`}
                                >
                                    <div className={`text-white`}>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <span className={`ms-3 fw-bold-500`}>
                                            Resolution
                                        </span>
                                    </div>
                                    <div className={``}>
                                        <span
                                            className={` text--primary fw-bold-500`}
                                        >
                                            4k
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className={`d-flex align-items-center justify-content-between pb-3 pt-4 ${cx(
                                        'border--bottom',
                                    )}`}
                                >
                                    <div className={`text-white`}>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <span className={`ms-3 fw-bold-500`}>
                                            Screens you can watch
                                        </span>
                                    </div>
                                    <div className={``}>
                                        <span
                                            className={` text--primary fw-bold-500`}
                                        >
                                            06
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className={`d-flex align-items-center justify-content-between pb-3 pt-4 ${cx(
                                        'border--bottom',
                                    )}`}
                                >
                                    <div className={`text-white`}>
                                        <FontAwesomeIcon icon={faXmark} />
                                        <span className={`ms-3 fw-bold-500`}>
                                            Cancel anytime
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button
                                className={`${cx(
                                    'buy',
                                )} mt-5 mb-2 bg--hover rounded-pill text-capitalize border--primary f-family bg--dark text-white fw-bold-700`}
                            >
                                buy now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
