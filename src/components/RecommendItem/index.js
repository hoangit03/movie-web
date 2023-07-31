import styles from './RecommendItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function RecommendItem({ data, type = 'movie' }) {
    const [runTime, setRunTime] = useState();

    function convert(number) {
        return Math.round((number * 5) / 10);
    }

    function formatTime(time) {
        var hour = Math.floor(time / 60);
        return `${hour > 0 ? `${hour}h ${time - hour * 60}m` : `${time} min`}`;
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
        <div className={`${cx('wrapper')} me-3`}>
            <div className={`${cx('poster')} rounded overflow-hidden`}>
                <img
                    src={`https://www.themoviedb.org/t/p/w250_and_h141_face/${data.backdrop_path}`}
                    alt=""
                />
            </div>
            <div
                className={`d-flex align-items-center justify-content-between text-white f-family mt-3 `}
            >
                <Link
                    className={`${cx(
                        'name',
                    )} m-0 text-white text-decoration-none text--hover`}
                    to={`/${type}/${data.id}`}
                >
                    {data.title || data.name}
                </Link>
                <div className="d-flex align-items-center">
                    <div className={`${cx('movie--desc')} f-family me-3`}>
                        {runTime && (
                            <>
                                <FontAwesomeIcon
                                    icon={faClock}
                                    className="me-2 text--primary"
                                />
                                <span>
                                    {runTime > 0 && formatTime(runTime)}
                                </span>
                            </>
                        )}
                    </div>
                    <div className={`${cx('movie--desc')} f-family`}>
                        <FontAwesomeIcon
                            icon={faThumbsUp}
                            className="me-2 text--primary"
                        />
                        <span>{`${convert(data.vote_average)}.0`}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecommendItem;
