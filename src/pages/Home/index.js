import MovieItem from '~/components/MovieItem';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightToBracket,
    faTv,
    faVideoCamera,
} from '@fortawesome/free-solid-svg-icons';
import { faViacoin, faWindows } from '@fortawesome/free-brands-svg-icons';
import Loading from '~/components/Loading';

const cx = classNames.bind(styles);

function Home() {
    const [movies, setMovies] = useState([]);
    const [tvs, setTvs] = useState([]);
    const [moviesTopRate, setMoviesTopRate] = useState([]);
    const [loadMore, setLoadMore] = useState(false);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [pageTv, setPageTv] = useState(1);

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1`,
        )
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
                setTimeout(() => {
                    setLoading(false);
                }, 1500);
            });
    }, []);

    useEffect(() => {
        document.title = 'Movflx - Online Movies & TV Shows';
    }, []);

    useEffect(() => {
        setLoadMore(true);

        fetch(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=${page}`,
        )
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    setLoading(false);
                    setLoadMore(false);
                }, 1500);
                setMoviesTopRate(() => [...moviesTopRate, ...data.results]);
            });
    }, [page]);

    useEffect(() => {
        setLoadMore(true);

        fetch(
            `https://api.themoviedb.org/3/tv/top_rated?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=${pageTv}`,
        )
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    setLoading(false);
                    setLoadMore(false);
                }, 1500);
                setTvs(() => [...tvs, ...data.results]);
            });
    }, [pageTv]);

    return (
        <>
            <div className={``}>
                <div className={`${cx('bg-title')} position-relative`}>
                    <div
                        className={`${cx(
                            'content',
                        )} container position-absolute top-50 start-50 translate-middle f-family`}
                    >
                        <p
                            className={`text--primary fw-bold-700 ${cx(
                                'fs-26',
                            )} m-0`}
                        >
                            Movfix
                        </p>
                        <p className={`text-white fw-bold-700 ${cx('fs-60')}`}>
                            Unlimited{' '}
                            <span className={`text--primary`}>Movie</span>
                            , TVs <br /> Shows, & More.
                        </p>
                    </div>
                </div>
                <div className={``}>
                    <div className={`${cx('ucm-bg')}`}>
                        <div className={`container-xl`}>
                            <div
                                className={`${cx(
                                    'title-container',
                                )} f-family text-white`}
                            >
                                <p
                                    className={`${cx(
                                        'sub-title',
                                    )} text-uppercase text--primary f-family mb-3`}
                                >
                                    online streaming
                                </p>
                                <p
                                    className={`${cx(
                                        'title',
                                    )} text-white fw-bold-700 f-family mb-0`}
                                >
                                    Upcoming Movies
                                </p>
                            </div>
                            <div className={`pt-5 row`}>
                                {movies.map((movie, index) => (
                                    <MovieItem key={index} data={movie} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={`${cx('services-bg')}`}>
                        <div className={`container-xl`}>
                            <div className={`row`}>
                                <div className={` col-lg-6`}>
                                    <div
                                        className={`${cx(
                                            'service--img',
                                        )} d-flex align-items-end position-relative mb-4`}
                                    >
                                        <img
                                            src="https://themehut.co/wp/movflx/wp-content/uploads/2022/08/services_img.jpg"
                                            alt=""
                                            className={`w-100`}
                                        />
                                        <a
                                            className={`ms-4 text-decoration-none f-family ${cx(
                                                'services--download',
                                            )} rounded bg--primary  text-uppercase position-absolute end-0`}
                                            href="path_to_file"
                                            download="proposed_file_name"
                                        >
                                            <span className={``}>
                                                Download
                                                <FontAwesomeIcon
                                                    icon={faArrowRightToBracket}
                                                />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className={` col-lg-6`}>
                                    <div
                                        className={`${cx(
                                            'service--desc',
                                        )} text-white f-family`}
                                    >
                                        <p
                                            className={`${cx(
                                                'title',
                                            )} text-uppercase fw-bold-500`}
                                        >
                                            our services
                                        </p>
                                        <p
                                            className={`${cx(
                                                'name',
                                            )} text-capitalize fw-bold-700`}
                                        >
                                            download your shows <br /> watch
                                            offline.
                                        </p>
                                        <p className={`${cx('desc')} mb-5`}>
                                            Lorem ipsum dolor sit amet,
                                            consecetur adipiscing elseddo
                                            eiusmod tempor.There are many
                                            variations of passages of lorem
                                            Ipsum available, but the majority
                                            have suffered alteration in some
                                            injected humour.
                                        </p>
                                        <div
                                            className={`${cx(
                                                'items',
                                                'border--bottom',
                                            )} d-flex align-items-center pb-4 mb-4`}
                                        >
                                            <div className=" rounded-circle border--primary border-style-dashed">
                                                <div
                                                    style={{
                                                        width: 100,
                                                        height: 100,
                                                    }}
                                                    className={`d-flex align-items-center justify-content-center`}
                                                >
                                                    <div
                                                        className={`${cx(
                                                            'icon',
                                                        )} rounded-circle bg--hover d-flex align-items-center justify-content-center`}
                                                    >
                                                        <div
                                                            className={`${cx(
                                                                'icon-in',
                                                            )} d-flex align-items-center justify-content-center`}
                                                        >
                                                            <i>
                                                                <FontAwesomeIcon
                                                                    icon={faTv}
                                                                />
                                                            </i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`ms-4 flex-grow-1`}>
                                                <h5
                                                    className={`fw-bold-700 mb-3`}
                                                >
                                                    Enjoy on Your TV.
                                                </h5>
                                                <p
                                                    className={`${cx(
                                                        'desc',
                                                    )} m-0`}
                                                >
                                                    Lorem ipsum dolor sit amet,
                                                    consecetur adipiscing elit,
                                                    sed do eiusmod tempor.
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className={`${cx(
                                                'items',
                                            )} d-flex align-items-center`}
                                        >
                                            <div className=" rounded-circle border--primary border-style-dashed">
                                                <div
                                                    style={{
                                                        width: 100,
                                                        height: 100,
                                                    }}
                                                    className={`d-flex align-items-center justify-content-center`}
                                                >
                                                    <div
                                                        className={`${cx(
                                                            'icon',
                                                        )} rounded-circle bg--hover d-flex align-items-center justify-content-center`}
                                                    >
                                                        <div
                                                            className={`${cx(
                                                                'icon-in',
                                                            )} d-flex align-items-center justify-content-center`}
                                                        >
                                                            <i>
                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        faVideoCamera
                                                                    }
                                                                />
                                                            </i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`ms-4 flex-grow-1`}>
                                                <h5
                                                    className={`fw-bold-700 mb-3`}
                                                >
                                                    Watch Everywhere.
                                                </h5>
                                                <p
                                                    className={`${cx(
                                                        'desc',
                                                    )} m-0`}
                                                >
                                                    Lorem ipsum dolor sit amet,
                                                    consecetur adipiscing elit,
                                                    sed do eiusmod tempor.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${cx('top-rate-bg')}`}>
                        <div className={`${cx('container-xl')}`}>
                            <div
                                className={`${cx(
                                    'title__container',
                                )} text-center f-family text-white`}
                            >
                                <p
                                    className={`text--primary text-uppercase fw-bold-500`}
                                >
                                    ONLINE STREAMING
                                </p>
                                <h1 className={` text-capitalize fw-bold-700`}>
                                    Top Rated Movies
                                </h1>
                            </div>
                            <div className={`row`}>
                                {moviesTopRate.map((movie, index) => (
                                    <MovieItem key={index} data={movie} />
                                ))}
                            </div>
                            <button
                                style={{
                                    width: 300,
                                    height: 60,
                                    fontSize: 18,
                                }}
                                className={`mt-4 bg-transparent f-family fw-bold-700 bg--hover border--primary rounded text-white d-flex align-items-center justify-content-center m-auto`}
                                onClick={() => setPage(page + 1)}
                            >
                                {loadMore ? (
                                    <>
                                        <span className="me-3">Loading...</span>
                                        <img
                                            src="https://themehut.co/wp/movflx/wp-content/themes/movflx/assets/img/preloader.svg"
                                            alt=""
                                            className=" h-75 rounded-circle"
                                        />
                                    </>
                                ) : (
                                    'Load More'
                                )}
                            </button>
                        </div>
                    </div>
                    <div className={`${cx('live-bg')}`}>
                        <div className={`container-xl`}>
                            <div className={`row`}>
                                <div className={`col-lg-5`}>
                                    <div
                                        className={`${cx(
                                            'live--desc',
                                        )} text-white f-family `}
                                    >
                                        <p
                                            className={`${cx(
                                                'title',
                                            )} text-uppercase fw-bold-500 text-black`}
                                        >
                                            online streaming
                                        </p>
                                        <p
                                            className={`${cx(
                                                'name',
                                            )} text-capitalize fw-bold-700 text-black`}
                                        >
                                            Live Movie & TV Shows For <br />
                                            Friends & Family
                                        </p>
                                        <p
                                            className={`${cx(
                                                'desc',
                                            )} mb-5 text-black`}
                                        >
                                            Lorem ipsum dolor sit amet,
                                            consecetur adipiscing elseddo
                                            eiusmod There are many variations of
                                            passages of lorem Ipsum available,
                                            but the majority have suffered
                                            alteration.
                                        </p>
                                    </div>
                                </div>
                                <div className={`col-lg-7`}>
                                    <div className={`ms-5`}>
                                        <img
                                            src="https://themehut.co/wp/movflx/wp-content/uploads/2022/08/live_img.png"
                                            alt=""
                                            width="100%"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${cx('top-rate-bg')}`}>
                        <div className={`${cx('container-xl')}`}>
                            <div
                                className={`${cx(
                                    'title__container',
                                )} text-center f-family text-white`}
                            >
                                <p
                                    className={`text--primary text-uppercase fw-bold-500`}
                                >
                                    best tv series
                                </p>
                                <h1 className={` text-capitalize fw-bold-700`}>
                                    World Best TV Series
                                </h1>
                            </div>
                            <div className={`row`}>
                                {tvs.map((tv, index) => (
                                    <MovieItem
                                        key={index}
                                        data={tv}
                                        type="tv"
                                    />
                                ))}
                            </div>
                            <button
                                style={{
                                    width: 300,
                                    height: 60,
                                    fontSize: 18,
                                }}
                                className={`mt-4 bg-transparent f-family fw-bold-700 bg--hover border--primary rounded text-white d-flex align-items-center justify-content-center m-auto`}
                                onClick={() => setPageTv(pageTv + 1)}
                            >
                                {loadMore ? (
                                    <>
                                        <span className="me-3">Loading...</span>
                                        <img
                                            src="https://themehut.co/wp/movflx/wp-content/themes/movflx/assets/img/preloader.svg"
                                            alt=""
                                            className=" h-75 rounded-circle"
                                        />
                                    </>
                                ) : (
                                    'Load More'
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {loading && <Loading />}
        </>
    );
}

export default Home;
