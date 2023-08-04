import { Link } from 'react-router-dom';
import styles from './CastItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CastItem({ data }) {
    return (
        <div
            className={`${cx(
                'wrapper',
            )} rounded overflow-hidden ms-2 me-2 d-flex flex-column`}
        >
            <div className={`${cx('img')} flex-grow-1`}>
                <img
                    src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${data.profile_path}`}
                    alt=""
                />
            </div>
            <div className={`${cx('content')} p-2 pt-3 text-white f-family`}>
                <Link
                    to={`/person/${data.id}`}
                    className={`${cx(
                        'name',
                    )} fw-bold-600 m-0 mb-1 text--hover text-decoration-none text-white`}
                >
                    {data.name}
                </Link>
                <p className={`${cx('character')} m-0`}>{data.character}</p>
            </div>
        </div>
    );
}

export default CastItem;
