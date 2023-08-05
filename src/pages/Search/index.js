import { useLocation } from 'react-router-dom';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import SearchItem from '~/components/SearchItem';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeftLong,
    faArrowRightLong,
} from '@fortawesome/free-solid-svg-icons';
import Loading from '~/components/Loading';

const cx = classNames.bind(styles);

const searchResult = [
    {
        id: 1,
        name: 'Movies',
        total_results: 0,
        type: 'movie',
    },
    {
        id: 2,
        name: 'TV Shows',
        total_results: 0,
        type: 'tv',
    },
    {
        id: 3,
        name: 'People',
        total_results: 0,
        type: 'person',
    },
];

function Search() {
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get('search');
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [cate, setCate] = useState(1);
    const [loading, setLoading] = useState(true);

    const renderPage = (page) => {
        var pages = new Array(totalPage + 1);
        var countPage = totalPage > 7 ? 7 : totalPage;
        let contentPage;
        const handleSetPage = (page) => {
            setPage(page);
            window.scrollTo({
                top: 400,
                behavior: 'smooth',
            });
        };

        if (page > 1) {
            pages[0] = (
                <span
                    key={0}
                    style={{ width: 35, height: 35, cursor: 'pointer' }}
                    className={`rounded border--no-color d-flex justify-content-center align-items-center border--color--primary lh-1 text-white f-family ms-2 me-2`}
                    onClick={() => handleSetPage(page - 1)}
                >
                    <FontAwesomeIcon icon={faArrowLeftLong} />
                </span>
            );
        }

        if (page > 4) {
            countPage = page + 3;
        }

        for (let i = 1; i < 3; i++) {
            pages[i] = (
                <span
                    key={i}
                    style={{
                        width: 35,
                        height: 35,
                        cursor: 'pointer',
                    }}
                    className={`${
                        i === page ? 'bg--primary' : 'text-white'
                    } rounded border--no-color d-flex justify-content-center align-items-center border--color--primary lh-1 f-family ms-2 me-2`}
                    onClick={() => handleSetPage(i)}
                >
                    {i}
                </span>
            );
        }

        pages[3] = (
            <span
                key={3}
                style={{
                    width: 35,
                    height: 35,
                    cursor: 'pointer',
                }}
                className={`${
                    3 === page ? 'bg--primary' : 'text-white'
                } rounded border--no-color d-flex justify-content-center align-items-center border--color--primary lh-1 f-family ms-2 me-2`}
                onClick={() => handleSetPage(3)}
            >
                {page > 7 ? '...' : '3'}
            </span>
        );

        if (page > 7) {
            for (
                let i = totalPage - page >= 8 ? page - 3 : totalPage - 8;
                i <= (page + 3 > totalPage ? totalPage : page + 3);
                i++
            ) {
                pages[i] = (
                    <span
                        key={i}
                        style={{
                            width: 35,
                            height: 35,
                            cursor: 'pointer',
                        }}
                        className={`${
                            i === page ? 'bg--primary' : 'text-white'
                        } rounded border--no-color d-flex justify-content-center align-items-center border--color--primary lh-1 f-family ms-2 me-2`}
                        onClick={() => {
                            handleSetPage(i);
                        }}
                    >
                        {i}
                    </span>
                );
            }
        } else {
            for (let i = 4; i <= (totalPage > 11 ? 11 : totalPage); i++) {
                if (i > countPage) {
                    break;
                }
                pages[i] = (
                    <span
                        key={i}
                        style={{
                            width: 35,
                            height: 35,
                            cursor: 'pointer',
                        }}
                        className={`${
                            i === page ? 'bg--primary' : 'text-white'
                        } rounded border--no-color d-flex justify-content-center align-items-center border--color--primary lh-1 f-family ms-2 me-2`}
                        onClick={() => {
                            handleSetPage(i);
                        }}
                    >
                        {i}
                    </span>
                );
            }
        }

        if (totalPage - page > 6) {
            pages[pages.length - 3] = (
                <span
                    key={pages.length - 3}
                    style={{
                        width: 35,
                        height: 35,
                        cursor: 'pointer',
                    }}
                    className={` rounded border--no-color d-flex justify-content-center align-items-center border--color--primary lh-1 f-family ms-2 me-2`}
                >
                    ...
                </span>
            );
        }

        pages[pages.length - 2] = (
            <span
                key={pages.length - 2}
                style={{ width: 35, height: 35, cursor: 'pointer' }}
                className={`${
                    totalPage - 1 === page ? 'bg--primary' : 'text-white'
                } rounded border--no-color d-flex justify-content-center align-items-center border--color--primary lh-1 f-family ms-2 me-2`}
                onClick={() => handleSetPage(totalPage - 1)}
            >
                {totalPage - 1}
            </span>
        );

        pages[pages.length - 1] = (
            <span
                key={pages.length - 1}
                style={{ width: 35, height: 35, cursor: 'pointer' }}
                className={`${
                    totalPage === page ? 'bg--primary' : 'text-white'
                } rounded border--no-color d-flex justify-content-center align-items-center border--color--primary lh-1 f-family ms-2 me-2`}
                onClick={() => handleSetPage(totalPage)}
            >
                {totalPage}
            </span>
        );

        if (page < totalPage) {
            pages.push(
                <span
                    key={totalPage + 10}
                    style={{ width: 35, height: 35, cursor: 'pointer' }}
                    className={`rounded border--no-color d-flex justify-content-center align-items-center border--color--primary lh-1 text-white f-family ms-2 me-2`}
                    onClick={() => handleSetPage(page + 1)}
                >
                    <FontAwesomeIcon icon={faArrowRightLong} />
                </span>,
            );
        }
        return pages;
    };

    useEffect(() => {
        var result = searchResult.find((item) => item.id === cate);
        setLoading(true);

        fetch(
            `https://api.themoviedb.org/3/search/${result.type}?api_key=e9e9d8da18ae29fc430845952232787c&query=${searchQuery}&page=${page}`,
        )
            .then((res) => res.json())
            .then((data) => {
                setResults(data.results);
                setTimeout(() => {
                    setLoading(false);
                }, 1800);
            });
    }, [page, searchQuery]);

    useEffect(() => {
        searchResult.map((result) => {
            fetch(
                `https://api.themoviedb.org/3/search/${result.type}?api_key=e9e9d8da18ae29fc430845952232787c&query=${searchQuery}`,
            )
                .then((res) => res.json())
                .then((data) => {
                    result.total_results = data.total_results;
                });
        });
        setCate(1);
    }, [searchQuery]);

    useEffect(() => {
        setLoading(true);
        var result = searchResult.find((item) => item.id === cate);

        fetch(
            `https://api.themoviedb.org/3/search/${result.type}?api_key=e9e9d8da18ae29fc430845952232787c&page=1&query=${searchQuery}`,
        )
            .then((res) => res.json())
            .then((data) => {
                setTotalPage(data.total_pages);
                setResults(data.results);
                setTimeout(() => {
                    setLoading(false);
                }, 1600);
            });
    }, [cate, searchQuery]);

    useEffect(() => {
        document.title = `Search Result for "${searchQuery}" - Movflx`;
    }, [searchQuery]);

    return (
        <>
            <div className={`${cx('wrapper')} f-family text-white pb-5`}>
                <div className={`row`}>
                    <div className={` col-lg-3`}>
                        <div
                            className={`${cx(
                                'table--result',
                            )} rounded overflow-hidden mb-4`}
                        >
                            <h5
                                className={`${cx(
                                    '',
                                )} p-3 pt-4 pb-4 bg--primary fw-bold-700 m-0`}
                            >
                                Search Result
                            </h5>
                            <ul className={`p-0 m-0 pt-2 pb-2`}>
                                {searchResult.map((result) => (
                                    <li
                                        key={result.id}
                                        className={`${
                                            cate === result.id
                                                ? `bg--primary`
                                                : `bg--hover`
                                        } p-2 ps-3 pe-3 d-flex align-items-center justify-content-between`}
                                        onClick={() => {
                                            setCate(result.id);
                                            setPage(1);
                                        }}
                                    >
                                        <span className={`fw-bold-700`}>
                                            {result.name}
                                        </span>
                                        <span className={`p-2`}>
                                            {result.total_results}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={` col-lg-9`}>
                        <div className={`result`}>
                            {results.map((result) => (
                                <SearchItem
                                    key={result.id}
                                    data={result}
                                    type={
                                        searchResult.find(
                                            (item) => item.id === cate,
                                        ).type
                                    }
                                />
                            ))}
                        </div>
                        <div
                            className={`${cx()} d-flex align-items-center justify-content-center pt-4 mt-3 pb-4 flex-wrap row-gap-3`}
                        >
                            {totalPage > 1 && renderPage(page)}
                        </div>
                    </div>
                </div>
            </div>
            {loading && <Loading />}
        </>
    );
}

export default Search;
