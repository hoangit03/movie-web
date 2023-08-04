import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './BackgroundTitle.module.scss';
import { useEffect } from 'react';
import { useState } from 'react';

const cx = classNames.bind(styles);

function BackgroundTitle({ name, search = '' }) {
    const params = useParams();
    const id_genre = parseInt(params.id);
    const [genre, setGenre] = useState('');

    useEffect(() => {
        if (name === 'Movies Category' || name === 'Tv Shows Category') {
            fetch(
                `https://api.themoviedb.org/3/genre/movie/list?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US`,
            )
                .then((res) => res.json())
                .then((data) =>
                    setGenre(
                        data.genres.find((genre) => genre.id === id_genre).name,
                    ),
                );
        }
    }, []);

    return (
        <div className={`${cx('wrapper')} position-relative`}>
            <div
                className={`${cx(
                    'content',
                )} position-absolute translate-middle top-50 start-50 text-center f-family`}
            >
                <h1 className=" text-white text-capitalize fw-bold-700">
                    {name === 'Movies Category' || name === 'Tv Shows Category'
                        ? `${name} : ${genre}`
                        : name === 'search'
                        ? `Search Results for : ${search}`
                        : name}
                </h1>
                <Link
                    to="/"
                    className="text-uppercase text-decoration-none me-4 fw-bold-700"
                >
                    home
                </Link>
                {(name === 'Movies Category' && (
                    <Link
                        to="/movie"
                        className="text-uppercase text-decoration-none me-4 fw-bold-700"
                    >
                        Movie
                    </Link>
                )) ||
                    (name === 'Tv Shows Category' && (
                        <Link
                            to="/tv-show    "
                            className="text-uppercase text-decoration-none me-4 fw-bold-700"
                        >
                            tv shows
                        </Link>
                    ))}
                <span className=" text-uppercase text-white fw-bold-700">
                    {name === 'Movies Category' || name === 'Tv Shows Category'
                        ? `${genre}`
                        : name === 'search'
                        ? `Search Results for : ${search}`
                        : name}
                </span>
            </div>
        </div>
    );
}

export default BackgroundTitle;
