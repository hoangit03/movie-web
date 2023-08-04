import { Link } from 'react-router-dom';
import styles from './SearchItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SearchItem({ data, type = 'movie' }) {
    function formatDate(date) {
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', options);
    }

    return (
        <div
            className={`${cx(
                'wrapper',
            )} f-family rounded overflow-hidden d-flex align-items-center mb-4`}
        >
            <div className={`${cx('poster')}`}>
                <img
                    style={{ backgroundColor: !data.poster_path && '#dbdbdb' }}
                    src={`${
                        data.poster_path || data.profile_path
                            ? `https://www.themoviedb.org/t/p/w94_and_h141_bestv2/${
                                  data.poster_path || data.profile_path
                              }`
                            : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`
                    } `}
                    alt=""
                    className={`w-100 h-100`}
                />
            </div>
            <div className={`${cx('content')}`}>
                <Link
                    to={`/${type}/${data.id}`}
                    className={`fw-bold-600 text--hover text-decoration-none text-white fs-6`}
                >
                    {data.title || data.name}
                </Link>
                <p className={`${cx('text--search')}`}>
                    {data.known_for_department ? (
                        <>
                            <span className={`pe-2`}>
                                {data.known_for_department}
                            </span>
                            {data.known_for.map((know) => {
                                var title = know.title || know.name;

                                if (
                                    title !==
                                    (data.known_for[data.known_for.length - 1]
                                        .title ||
                                        data.known_for[
                                            data.known_for.length - 1
                                        ].name)
                                ) {
                                    title += ', ';
                                }

                                return (
                                    <Link
                                        className={` text-decoration-none text-white text--hover`}
                                        key={know.id}
                                        to={`/${know.media_type}/${know.id}`}
                                    >
                                        {title}
                                    </Link>
                                );
                            })}
                        </>
                    ) : (
                        (data.release_date || data.first_air_date) &&
                        formatDate(data.release_date || data.first_air_date)
                    )}
                </p>
                <p className={`${cx('overview')} m-0 text-white`}>
                    {data.overview}
                </p>
            </div>
        </div>
    );
}

export default SearchItem;
