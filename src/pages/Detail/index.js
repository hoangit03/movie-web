import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Detail.module.scss';
import classNames from 'classnames/bind';
import { Link, useLocation, useParams } from 'react-router-dom';
import {
    faCalendarDays,
    faPlay,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useRef, useState } from 'react';
import Loading from '~/components/Loading';
import CastItem from '~/components/CastItem';
import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RecommendItem from '~/components/RecommendItem';
import CommentItem from '~/components/CommentItem';

const cx = classNames.bind(styles);

function Detail() {
    const { pathname } = useLocation();
    const type = pathname.split('/')[1];
    const [loading, setLoading] = useState(true);
    const [key, setKey] = useState();
    const [casts, setCasts] = useState([]);
    const [comments, setComments] = useState([]);
    const params = useParams();
    const [data, setData] = useState();
    const [recommendations, setRecommendations] = useState([]);
    const videoRef = useRef();
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const settingsMovie = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const settingsVideos = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        variableWidth: true,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    function formatDate(date) {
        return new Date(date).getFullYear();
    }

    function formatTime(time) {
        var hour = Math.floor(time / 60);
        return `${hour > 0 ? `${hour}h ${time - hour * 60}m` : `${time} min`}`;
    }

    useEffect(() => {
        setLoading(true);

        fetch(
            `https://api.themoviedb.org/3/${type}/${params.id}?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos`,
        )
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    setLoading(false);
                }, 1500);
                setData(data);
            });
    }, [params.id]);

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/${type}/${params.id}/credits?api_key=e9e9d8da18ae29fc430845952232787c`,
        )
            .then((res) => res.json())
            .then((data) => setCasts(data.cast));
    }, [params.id]);

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/${type}/${params.id}/recommendations?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1`,
        )
            .then((res) => res.json())
            .then((data) => setRecommendations(data.results));
    }, [params.id]);

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/${type}/${params.id}/reviews?api_key=e9e9d8da18ae29fc430845952232787c`,
        )
            .then((res) => res.json())
            .then((data) => setComments(data.results));
    }, [params.id]);

    useEffect(() => {
        if (data) document.title = `${data.title || data.name} - Movflx`;
    }, [data]);

    return (
        <>
            {data && (
                <div className={`${cx('wrapper')}`}>
                    <div
                        style={{
                            backgroundImage: data.backdrop_path
                                ? `url('https://image.tmdb.org/t/p/original${data.backdrop_path}')`
                                : `url('https://themehut.co/wp/movflx/wp-content/themes/movflx/assets/img/bg/movie_details_bg.jpg')`,
                        }}
                        className={`${cx('movie-detail-bg')}`}
                    >
                        <div className={`container-xl position-relative z-1`}>
                            <div className={`row align-items-center`}>
                                <div className="col-lg-3 col-md-4 col-sm-12">
                                    <div
                                        className={`${cx(
                                            'poster',
                                        )} rounded overflow-hidden mb-4`}
                                    >
                                        <img
                                            src={`${
                                                data.poster_path
                                                    ? `https://image.tmdb.org/t/p/original${data.poster_path}`
                                                    : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`
                                            }`}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-8 col-sm-12">
                                    <div
                                        className={`${cx(
                                            'movie--content',
                                        )} text-white f-family`}
                                    >
                                        <h2 className={`fw-bold-700 mb-4`}>
                                            {data.title || data.name}
                                        </h2>
                                        <div
                                            className={`d-flex align-items-center mb-4`}
                                        >
                                            <div
                                                className={`${cx(
                                                    'resolution',
                                                )} text-uppercase p-1 ps-2 pe-2 f-family text-white fw-bold-700 lh-1`}
                                            >
                                                hd
                                            </div>
                                            <div
                                                className={`${cx(
                                                    'genres',
                                                    'fs-14',
                                                    'text--detail',
                                                )} me-3 ms-3`}
                                            >
                                                {data.genres.map(
                                                    (genre, index) => {
                                                        var name = genre.name;
                                                        if (
                                                            name !=
                                                            data.genres[
                                                                data.genres
                                                                    .length - 1
                                                            ].name
                                                        ) {
                                                            name += ', ';
                                                        }
                                                        return (
                                                            <Link
                                                                to={`/${type}/genre/${genre.id}`}
                                                                className={`text--hover text-decoration-none ${cx(
                                                                    'text--detail',
                                                                )}`}
                                                                key={index}
                                                            >
                                                                {name}
                                                            </Link>
                                                        );
                                                    },
                                                )}
                                            </div>
                                            <div
                                                className={`${cx(
                                                    'fs-14',
                                                    'text--detail',
                                                )}`}
                                            >
                                                <span className={`me-3`}>
                                                    <FontAwesomeIcon
                                                        icon={faCalendarDays}
                                                        className={`me-2 text--primary`}
                                                    />
                                                    {formatDate(
                                                        data.release_date ||
                                                            data.first_air_date,
                                                    )}
                                                </span>
                                                <span className={``}>
                                                    {data.runtime && (
                                                        <>
                                                            <FontAwesomeIcon
                                                                icon={faClock}
                                                                className={`me-2 text--primary`}
                                                            />
                                                            {formatTime(
                                                                data.runtime,
                                                            )}
                                                        </>
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                        <p
                                            className={`${cx(
                                                'lh-18',
                                                'text--detail',
                                            )}`}
                                        >
                                            {data.overview}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${cx('detail-main-bg')} pt-5 pb-5`}>
                        <div className={`container-xl`}>
                            {casts.length > 0 && (
                                <div className={`${cx('cast--container')}`}>
                                    <h3
                                        className={`text-white f-family fw-bold-700`}
                                    >
                                        {type === 'movie'
                                            ? 'Top Billed Cast'
                                            : 'Series Cast'}
                                    </h3>
                                    <div
                                        className={`pt-3 ${cx(
                                            'border--bottom',
                                        )} pb-5`}
                                    >
                                        <Slider {...settings}>
                                            {casts.map((cast) => {
                                                if (
                                                    cast.profile_path !== null
                                                ) {
                                                    return (
                                                        <CastItem
                                                            key={cast.id}
                                                            data={cast}
                                                        />
                                                    );
                                                }
                                            })}
                                        </Slider>
                                    </div>
                                </div>
                            )}
                            {recommendations.length > 0 && (
                                <div className={`${cx('recommendations')}`}>
                                    <h3
                                        className={`text-white f-family fw-bold-700 mt-5`}
                                    >
                                        Recommendations
                                    </h3>
                                    <div
                                        className={`pt-3 ${cx(
                                            'border--bottom',
                                        )} pb-5`}
                                    >
                                        <Slider {...settingsMovie}>
                                            {recommendations.map(
                                                (recommendation, index) => {
                                                    if (
                                                        recommendation.backdrop_path !==
                                                        null
                                                    ) {
                                                        return (
                                                            <RecommendItem
                                                                key={index}
                                                                data={
                                                                    recommendation
                                                                }
                                                                type={type}
                                                            />
                                                        );
                                                    }
                                                },
                                            )}
                                        </Slider>
                                    </div>
                                </div>
                            )}
                            {data.videos.results.length > 0 && (
                                <div className={`${cx('media')}`}>
                                    <h3
                                        className={`text-white f-family fw-bold-700 mt-5`}
                                    >
                                        Videos
                                    </h3>
                                    <div
                                        className={`pt-3 ${cx(
                                            'border--bottom',
                                            'custom--scroll',
                                        )} pb-5 d-flex overflow-x-scroll`}
                                    >
                                        {data.videos.results.map((video) => (
                                            <div
                                                key={video.id}
                                                className={`${cx(
                                                    'video--container',
                                                )} me-2`}
                                            >
                                                <div
                                                    style={{
                                                        width: 533,
                                                    }}
                                                    className={`${cx(
                                                        'video',
                                                    )} rounded overflow-hidden me-3 position-relative`}
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#modalVideo"
                                                    onClick={() =>
                                                        setKey(video.key)
                                                    }
                                                >
                                                    <img
                                                        src={`https://i.ytimg.com/vi/${video.key}/hqdefault.jpg`}
                                                        alt=""
                                                    />
                                                    <a
                                                        className={`position-absolute top-50 start-50 translate-middle`}
                                                    >
                                                        <div
                                                            className={`${cx(
                                                                'play',
                                                            )} d-flex align-items-center justify-content-center rounded-circle`}
                                                        >
                                                            <FontAwesomeIcon
                                                                className="text-white"
                                                                icon={faPlay}
                                                            />
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {comments.length > 0 && (
                                <div className={`${cx('review--container')}`}>
                                    <h3
                                        className={`text-white f-family fw-bold-700 mt-5`}
                                    >
                                        Reviews
                                    </h3>
                                    <div className={`pt-3 pb-5`}>
                                        {comments.map((comment, index) => (
                                            <CommentItem
                                                key={index}
                                                data={comment}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
            <div
                ref={videoRef}
                className="modal fade"
                id="modalVideo"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                role="dialog"
                aria-labelledby="modalTitleId"
                aria-hidden="true"
            >
                <div
                    style={{ maxWidth: '97%' }}
                    className="modal-dialog modal-dialog-centered rounded overflow-hidden"
                    role="document"
                >
                    <div style={{ height: 700 }} className="modal-content">
                        <div className="modal-header bg-black border-0">
                            <button
                                type="button"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                className={`border-0 bg-transparent text-white`}
                                onClick={() => setKey('')}
                            >
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>
                        <div className="modal-body">
                            <iframe
                                src={`https://www.youtube.com/embed/${key}`}
                                allowFullScreen
                                className={` position-absolute top-0 start-0 w-100 h-100`}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            {loading && <Loading />}
        </>
    );
}

export default Detail;
