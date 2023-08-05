import classNames from 'classnames/bind';
import styles from './Movie.module.scss';
import { useEffect, useState } from 'react';
import MovieItem from '~/components/MovieItem';
import Loading from '~/components/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeftLong,
    faArrowRightLong,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Movie() {
    const [movies, setMovies] = useState([]);
    const [cate, setCate] = useState('');
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalPage, setTotalPage] = useState(0);
    const [page, setPage] = useState(1);

    function renderPage(page) {
        var pages = [];

        const handleSetPage = (page) => {
            setPage(page);
            window.scrollTo({
                top: 700,
                behavior: 'smooth',
            });
        };

        if (page > 1) {
            pages.push(
                <span
                    key={0}
                    style={{ width: 35, height: 35, cursor: 'pointer' }}
                    className={`rounded border--no-color d-flex justify-content-center align-items-center border--color--primary lh-1 text-white f-family ms-2 me-2`}
                    onClick={() => handleSetPage(page - 1)}
                >
                    <FontAwesomeIcon icon={faArrowLeftLong} />
                </span>,
            );
        }

        for (let i = page; i < page + 10; i++) {
            pages.push(
                <span
                    key={i}
                    style={{ width: 35, height: 35, cursor: 'pointer' }}
                    className={`${
                        i === page ? 'bg--primary' : 'text-white'
                    } rounded border--no-color d-flex justify-content-center align-items-center border--color--primary lh-1 f-family ms-2 me-2`}
                    onClick={() => handleSetPage(i)}
                >
                    {i}
                </span>,
            );
        }

        if (page < totalPage) {
            pages.push(
                <span
                    key={page + 10}
                    style={{ width: 35, height: 35, cursor: 'pointer' }}
                    className={`rounded border--no-color d-flex justify-content-center align-items-center border--color--primary lh-1 text-white f-family ms-2 me-2`}
                    onClick={() => handleSetPage(page + 1)}
                >
                    <FontAwesomeIcon icon={faArrowRightLong} />
                </span>,
            );
        }

        return pages;
    }

    useEffect(() => {
        setLoading(true);

        fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=d1726c3024603cccff7d39494637902d&with_genres=${cate}&page=${page}`,
        )
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
                setTimeout(() => {
                    setLoading(false);
                }, 1500);
            });
    }, [page]);

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=d1726c3024603cccff7d39494637902d`,
        )
            .then((res) => res.json())
            .then((data) => {
                setTotalPage(data.total_pages);
                setMovies(data.results);
                setTimeout(() => {
                    setLoading(false);
                }, 1500);
            });
    }, []);

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US`,
        )
            .then((res) => res.json())
            .then((data) =>
                setCategories([{ id: '', name: 'All items' }, ...data.genres]),
            );
    }, []);

    useEffect(() => {
        setLoading(true);

        fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=d1726c3024603cccff7d39494637902d&with_genres=${cate}`,
        )
            .then((res) => res.json())
            .then((data) => {
                setTotalPage(data.total_pages);
                setMovies(data.results);
                setTimeout(() => {
                    setLoading(false);
                }, 1500);
            });
    }, [cate]);

    useEffect(() => {
        document.title = 'Our Movies - Movflx';
    }, []);

    return (
        <>
            <div className={`${cx('wrapper')} pt-5 pb-5`}>
                <div className={`mt-3`}>
                    <div
                        className={` justify-content-between align-items-start pb-5 row`}
                    >
                        <div className={`col-lg-4 mb-4`}>
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
                                )} text-white fw-bold-700 f-family mb-0 lh-1`}
                            >
                                New Release Movies
                            </p>
                        </div>
                        <div className="col-lg-8">
                            <ul
                                className={`p-0 m-0 list-unstyled d-flex flex-wrap`}
                            >
                                {categories.map((category, index) => (
                                    <li
                                        key={index}
                                        className={`${
                                            cate === category.id
                                                ? 'border--color--primary'
                                                : ''
                                        } ${cx(
                                            'items',
                                        )} pt-2 pb-2 ps-4 pe-4 me-3 mb-2 rounded-pill f-family text-white fw-bold-700 border--no-color`}
                                        onClick={() => {
                                            setCate(category.id);
                                            setPage(1);
                                        }}
                                    >
                                        {category.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={`pt-4`}>
                        <div className="row">
                            {movies.map((movie) => (
                                <MovieItem key={movie.id} data={movie} />
                            ))}
                        </div>
                    </div>
                </div>
                <div
                    className={`${cx()} d-flex align-items-center justify-content-center mt-3 pb-5 flex-wrap row-gap-3`}
                >
                    {totalPage > 0 && renderPage(page)}
                </div>
            </div>
            {loading && <Loading />}
        </>
    );
}

export default Movie;
