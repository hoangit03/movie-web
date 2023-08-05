import { useLocation, useParams } from 'react-router-dom';
import styles from './Genre.module.scss';
import classNames from 'classnames/bind';
import SearchItem from '~/components/SearchItem';
import { useEffect } from 'react';
import { useState } from 'react';
import Loading from '~/components/Loading';

const cx = classNames.bind(styles);

function Genre() {
    const { pathname } = useLocation();
    const type = pathname.split('/')[1];
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [loadMore, setLoadMore] = useState(false);
    const params = useParams();
    const id_genre = parseInt(params.id);

    useEffect(() => {
        setLoadMore(true);
        fetch(
            `https://api.themoviedb.org/3/discover/${type}?api_key=d1726c3024603cccff7d39494637902d&with_genres=${id}&page=${page}`,
        )
            .then((res) => res.json())
            .then((result) => {
                setData(() => [...data, ...result.results]);
                setLoadMore(false);
                setTimeout(() => {
                    setLoading(false);
                }, 1500);
            });
    }, [page]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/genre/movie/list?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US`,
                );
                const data = await response.json();
                const genreName = data.genres.find(
                    (genre) => genre.id === id_genre,
                ).name;
                document.title = `${genreName} - Movflx`;
            } catch (error) {
                console.error('Error fetching genre:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <div className={`${cx('wrapper')}`}>
                {data.map((item) => (
                    <SearchItem key={item.id} data={item} />
                ))}
                <button
                    style={{
                        width: 300,
                        height: 60,
                        fontSize: 18,
                    }}
                    className={`mt-5 bg-transparent f-family fw-bold-700 bg--hover border--primary rounded text-white d-flex align-items-center justify-content-center m-auto`}
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
            {loading && <Loading />}
        </>
    );
}

export default Genre;
