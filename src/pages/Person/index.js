import { Link, useParams } from 'react-router-dom';
import styles from './Person.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Loading from '~/components/Loading';

const cx = classNames.bind(styles);

function Person() {
    const { id } = useParams();
    const [combinedCredits, setCombinedCredits] = useState([]);
    const [person, setPerson] = useState();
    const [years, setYears] = useState([]);
    const [crews, setCrews] = useState([]);
    const [loading, setLoading] = useState(true);

    const getAge = (date) => {
        const currentYear = new Date().getFullYear();
        const yearOfBirth = new Date(date).getFullYear();
        return currentYear - yearOfBirth;
    };

    const timeRepeat = (array, number) => {
        let count = 0;

        array.map((item) => {
            if (item.credit_id === number) {
                count++;
            }
        });

        return count;
    };

    const getYear = (date) => new Date(date).getFullYear();

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/person/${id}?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=combined_credits`,
        )
            .then((res) => res.json())
            .then((data) => {
                setPerson(data);
                setTimeout(() => {
                    setLoading(false);
                }, 1800);
            });
    }, []);

    useEffect(() => {
        if (person) {
            // tính xem có bao nhiêu năm trong mảng cast rồi sau đó khi lặp qua mảng years thì sẽ lấy từ phần tử(năm) rồi đem đi so sánh với năm của phần tử trong mảng cast
            var years = [];
            person.combined_credits.cast.map((cast) => {
                var year = getYear(cast.first_air_date || cast.release_date);

                if (year) {
                    if (years.length == 0) {
                        years.push(year);
                    } else {
                        if (!years.includes(year)) {
                            years.push(year);
                        }
                    }
                }
            });
            years = years.sort().reverse();
            setYears(years);

            // tư tượng với logic trên thì tính xem có bao nhiêu department trong mảng crew vào bổ sung thêm năm của các department đó
            var departments = [];
            person.combined_credits.crew.map((cast) => {
                var category = {
                    department: cast.department,
                    year: [getYear(cast.first_air_date || cast.release_date)],
                };

                if (departments.length == 0) {
                    departments.push(category);
                } else {
                    var findDepartment = departments.find(
                        (item) => item.department === category.department,
                    );

                    if (findDepartment) {
                        if (
                            !findDepartment.year.includes(...category.year) &&
                            category.year[0]
                        ) {
                            findDepartment.year.push(...category.year);
                        }
                    } else {
                        departments.push(category);
                    }
                }
            });
            setCrews(departments);

            var combinedCredits = [];
            person.combined_credits.cast.map((cast) => {
                if (
                    combinedCredits.length == 0 ||
                    !combinedCredits.find((item) => item.id === cast.id)
                ) {
                    combinedCredits.push(cast);
                }
            });
            setCombinedCredits(combinedCredits);
            document.title = `${person.name} - Movflx`;
        }
    }, [person]);

    return (
        <>
            {person && (
                <div className={`${cx('wrapper')} f-family`}>
                    <div className={`container`}>
                        <div className={`row`}>
                            <div className={`col-lg-3`}>
                                <div className={`${cx('info--actor')} mb-4`}>
                                    <div
                                        className={`${cx(
                                            'avatar',
                                        )} rounded overflow-hidden`}
                                    >
                                        <img
                                            src={`${
                                                person.profile_path
                                                    ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${person.profile_path}`
                                                    : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`
                                            }`}
                                            alt=""
                                            className={`w-100 h-100`}
                                        />
                                    </div>
                                    <div
                                        className={`${cx(
                                            'person--info__container',
                                        )}  mt-5 text-white`}
                                    >
                                        <h4 className={`fw-bold-600`}>
                                            Personal Info
                                        </h4>
                                        <div className={`mt-4`}>
                                            <p className={`m-0 fw-bold-700`}>
                                                Known For
                                            </p>
                                            <p
                                                className={`m-0 ${cx(
                                                    'text--person',
                                                )}`}
                                            >
                                                {person.known_for_department}
                                            </p>
                                        </div>
                                        <div className={`mt-4`}>
                                            <p className={`m-0 fw-bold-700`}>
                                                Known Credits
                                            </p>
                                            <p
                                                className={`m-0 ${cx(
                                                    'text--person',
                                                )}`}
                                            >
                                                {
                                                    person.combined_credits.cast
                                                        .length
                                                }
                                            </p>
                                        </div>
                                        <div className={`mt-4`}>
                                            <p className={`m-0 fw-bold-700`}>
                                                Gender
                                            </p>
                                            <p
                                                className={`m-0 ${cx(
                                                    'text--person',
                                                )}`}
                                            >
                                                {person.gender === 1
                                                    ? 'Female'
                                                    : 'Male'}
                                            </p>
                                        </div>
                                        <div className={`mt-4`}>
                                            <p className={`m-0 fw-bold-700`}>
                                                Birthday
                                            </p>
                                            <p
                                                className={`m-0 ${cx(
                                                    'text--person',
                                                )}`}
                                            >
                                                {`${person.birthday} (${getAge(
                                                    person.birthday,
                                                )} years old)`}
                                            </p>
                                        </div>
                                        <div className={`mt-4`}>
                                            <p className={`m-0 fw-bold-700`}>
                                                Place of Birth
                                            </p>
                                            <p
                                                className={`m-0 ${cx(
                                                    'text--person',
                                                )}`}
                                            >
                                                {person.place_of_birth}
                                            </p>
                                        </div>
                                        <div className={`mt-4`}>
                                            <p className={`m-0 fw-bold-700`}>
                                                Also Known As
                                            </p>
                                            {person.also_known_as.map(
                                                (val, index) => (
                                                    <p
                                                        key={index}
                                                        className={`mb-2 ${cx(
                                                            'text--person',
                                                        )}`}
                                                    >
                                                        {val}
                                                    </p>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`col-lg-9`}>
                                <div
                                    className={`${cx(
                                        'desc--actor',
                                    )} text-white`}
                                >
                                    <h2 className={`fw-bold-600 mb-5`}>
                                        {person.name}
                                    </h2>
                                    <div className={`mb-5`}>
                                        <h5 className={`fw-bold-600 mb-3`}>
                                            Biography
                                        </h5>
                                        <p
                                            className={`${cx(
                                                'text--person',
                                                'pre-wrap',
                                            )} m-0`}
                                        >
                                            {person.biography}
                                        </p>
                                    </div>
                                    <div className={`mb-4`}>
                                        <h5 className={`fw-bold-600 mb-3`}>
                                            Known For
                                        </h5>
                                        <div
                                            className={`d-flex ${cx(
                                                'custom--scroll',
                                            )} overflow-x-scroll pb-3 `}
                                        >
                                            {combinedCredits.map((cast) => (
                                                <div
                                                    key={cast.id}
                                                    style={{
                                                        width: 130,
                                                    }}
                                                    className={`text-center me-3 `}
                                                >
                                                    <div
                                                        style={{
                                                            backgroundColor:
                                                                !cast.poster_path &&
                                                                '#dbdbdb',
                                                        }}
                                                        className={` rounded overflow-hidden mb-3 ${cx(
                                                            'know--container__film',
                                                        )}`}
                                                    >
                                                        <Link
                                                            to={`/${cast.media_type}/${cast.id}`}
                                                        >
                                                            <img
                                                                className={`w-100 h-100`}
                                                                src={`${
                                                                    cast.poster_path
                                                                        ? `https://www.themoviedb.org/t/p/w150_and_h225_bestv2/${cast.poster_path}`
                                                                        : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`
                                                                }`}
                                                                alt=""
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <Link
                                                            to={`/${cast.media_type}/${cast.id}`}
                                                            className={` text-decoration-none text-white ${cx(
                                                                'name--film',
                                                            )} text--hover`}
                                                        >
                                                            {cast.title ||
                                                                cast.name}
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className={``}>
                                        <h5 className={`fw-bold-600 mb-3`}>
                                            Acting
                                        </h5>
                                        <div
                                            className={`${cx(
                                                'bg-acting',
                                            )} rounded`}
                                        >
                                            {years.map((year, index) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        className={`${
                                                            year ===
                                                            years[
                                                                years.length - 1
                                                            ]
                                                                ? ''
                                                                : `${cx(
                                                                      'border--bottom',
                                                                  )}`
                                                        } p-4 mb-3`}
                                                    >
                                                        {combinedCredits.map(
                                                            (cast) => {
                                                                if (
                                                                    getYear(
                                                                        cast.first_air_date ||
                                                                            cast.release_date,
                                                                    ) ===
                                                                        year &&
                                                                    !cast.department
                                                                ) {
                                                                    return (
                                                                        <div
                                                                            key={
                                                                                cast.credit_id
                                                                            }
                                                                            className={`d-flex align-items-center mb-2`}
                                                                        >
                                                                            <p
                                                                                className={`m-0 me-5`}
                                                                            >
                                                                                {
                                                                                    year
                                                                                }
                                                                            </p>
                                                                            <div>
                                                                                <Link
                                                                                    to={`/${cast.media_type}/${cast.id}`}
                                                                                    className={` d-block fw-bold-600 text--hover text-decoration-none text-white`}
                                                                                >
                                                                                    {cast.title ||
                                                                                        cast.name}
                                                                                </Link>
                                                                                {cast.character && (
                                                                                    <p
                                                                                        className={`m-0 ms-3`}
                                                                                    >
                                                                                        as
                                                                                        <span
                                                                                            className={`ms-2 ${cx(
                                                                                                'text--person',
                                                                                            )}`}
                                                                                        >
                                                                                            {
                                                                                                cast.character
                                                                                            }
                                                                                        </span>
                                                                                    </p>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    );
                                                                }
                                                            },
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    {crews.map((crew, i) => {
                                        return (
                                            <div key={i} className={`mt-5`}>
                                                <h5
                                                    className={`fw-bold-600 mb-3`}
                                                >
                                                    {crew.department}
                                                </h5>
                                                <div
                                                    className={`${cx(
                                                        'bg-acting',
                                                    )} rounded`}
                                                >
                                                    {crew.year.map(
                                                        (year, index) => {
                                                            return (
                                                                <div
                                                                    key={index}
                                                                    className={`${
                                                                        year ===
                                                                        crew
                                                                            .year[
                                                                            crew
                                                                                .year
                                                                                .length -
                                                                                1
                                                                        ]
                                                                            ? ''
                                                                            : `${cx(
                                                                                  'border--bottom',
                                                                              )}`
                                                                    } p-4 mb-3`}
                                                                >
                                                                    {person.combined_credits.crew.map(
                                                                        (
                                                                            cast,
                                                                        ) => {
                                                                            if (
                                                                                getYear(
                                                                                    cast.first_air_date ||
                                                                                        cast.release_date,
                                                                                ) ===
                                                                                    year &&
                                                                                cast.department ===
                                                                                    crew.department
                                                                            ) {
                                                                                return (
                                                                                    <div
                                                                                        key={
                                                                                            cast.credit_id
                                                                                        }
                                                                                        className={`d-flex align-items-center mb-2`}
                                                                                    >
                                                                                        <p
                                                                                            className={`m-0 me-5`}
                                                                                        >
                                                                                            {
                                                                                                year
                                                                                            }
                                                                                        </p>
                                                                                        <div>
                                                                                            <Link
                                                                                                to={`/${cast.media_type}/${cast.id}`}
                                                                                                className={` d-block fw-bold-600 text--hover text-decoration-none text-white`}
                                                                                            >
                                                                                                {cast.title ||
                                                                                                    cast.name}
                                                                                            </Link>
                                                                                            {cast.job && (
                                                                                                <p
                                                                                                    className={`m-0 ms-3`}
                                                                                                >
                                                                                                    .
                                                                                                    .
                                                                                                    .
                                                                                                    <span
                                                                                                        className={`ms-1 ${cx(
                                                                                                            'text--person',
                                                                                                        )}`}
                                                                                                    >
                                                                                                        {
                                                                                                            cast.job
                                                                                                        }
                                                                                                    </span>
                                                                                                </p>
                                                                                            )}
                                                                                        </div>
                                                                                    </div>
                                                                                );
                                                                            }
                                                                        },
                                                                    )}
                                                                </div>
                                                            );
                                                        },
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {loading && <Loading />}
        </>
    );
}

export default Person;
