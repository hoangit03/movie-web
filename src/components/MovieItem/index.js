import { Link } from 'react-router-dom';
import styles from './MovieItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function MovieItem({ data, type = 'movie' }) {
    const [runTime, setRunTime] = useState('');
    function convert(number) {
        return Math.round((number * 5) / 10);
    }

    function formatDate(date) {
        var newDate = new Date(date);

        return newDate.getFullYear();
    }

    function formatTime(time) {
        var hour = Math.floor(time / 60);
        return `${hour > 0 ? `${hour}h ${time - hour * 60}m` : `${time} min`}`;
    }

    function renderStar() {
        const stars = [];
        const numStars = convert(data.vote_average);

        if (numStars > 0) {
            stars.push(
                <FontAwesomeIcon
                    key={0}
                    className={`text--primary`}
                    icon={faStar}
                />,
            );
        }

        for (let index = 1; index < numStars; index++) {
            stars.push(
                <FontAwesomeIcon
                    key={index}
                    className={`text--primary`}
                    icon={faStar}
                />,
            );
        }

        for (let index = numStars; index < 5; index++) {
            stars.push(
                <FontAwesomeIcon
                    key={index}
                    className={`text--primary`}
                    icon={regularStar}
                />,
            );
        }

        return stars;
    }

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/${type}/${data.id}?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos`,
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.runtime) {
                    return setRunTime(data.runtime);
                }
            });
    }, []);

    return (
        <div className={`col-lg-3 col-md-4 col-sm-6 col-12`}>
            <div className={`${cx('movie')} mb-5`}>
                <div className={`movie__container`}>
                    <div
                        className={`movie__container--img overflow-hidden rounded position-relative`}
                    >
                        <img
                            className="w-100 h-100"
                            src={`${
                                data.poster_path
                                    ? `https://image.tmdb.org/t/p/original${data.poster_path}`
                                    : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'
                            }`}
                            alt=""
                        />
                        <div
                            className={`${cx(
                                'movie__container--action',
                            )} position-absolute top-0 end-0 bottom-0 start-0`}
                        >
                            <div
                                className={` position-absolute top-50 start-50 translate-middle`}
                            >
                                <ul
                                    className={`${cx(
                                        'movie--action',
                                    )} p-0 m-0 list-unstyled text-center`}
                                >
                                    <li className={`${cx('slip-down')} mb-1`}>
                                        {renderStar()}
                                    </li>
                                    <li className={`${cx('appear')}`}>
                                        <Link
                                            className={` d-inline-block mt-3 rounded-pill border--primary f-family bg--primary text-black text-decoration-none d-flex align-items-center justify-content-center`}
                                        >
                                            Watch Now
                                        </Link>
                                    </li>
                                    <li className={`${cx('slip-up')}`}>
                                        <Link
                                            to={`/${type}/${data.id}`}
                                            className={` bg--hover d-inline-block mt-3 rounded-pill border--primary f-family bg--dark text--primary text-decoration-none d-flex align-items-center justify-content-center`}
                                        >
                                            Details
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`${cx('movie__content')} mt-3`}>
                        <div className="d-flex justify-content-between align-item-center mb-3">
                            <Link
                                to={`/${type}/${data.id}`}
                                className={`text--hover movie--name text-white text-capitalize text-decoration-none f-family `}
                            >
                                {data.title || data.name}
                            </Link>
                            <span className="text--primary f-family">
                                {formatDate(
                                    data.release_date || data.first_air_date,
                                )}
                            </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <div
                                className={` ${cx(
                                    'resolution',
                                )} text-uppercase p-1 ps-2 pe-2 f-family text--primary fw-bold-700 lh-1`}
                            >
                                hd
                            </div>
                            <div className="d-flex align-items-center">
                                <div
                                    className={`${cx(
                                        'movie--desc',
                                    )} f-family me-3`}
                                >
                                    {runTime && (
                                        <>
                                            <FontAwesomeIcon
                                                icon={faClock}
                                                className="me-2 text--primary"
                                            />
                                            <span>
                                                {runTime > 0 &&
                                                    formatTime(runTime)}
                                            </span>
                                        </>
                                    )}
                                </div>
                                <div
                                    className={`${cx('movie--desc')} f-family`}
                                >
                                    <FontAwesomeIcon
                                        icon={faThumbsUp}
                                        className="me-2 text--primary"
                                    />
                                    <span>{`${convert(
                                        data.vote_average,
                                    )}.0`}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieItem;
