import { Link } from 'react-router-dom';
import styles from './CommentItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

function CommentItem({ data }) {
    const contentRef = useRef();
    const [readMore, setReadMore] = useState(false);

    useEffect(() => {
        const height = contentRef.current.offsetHeight;
        if (height > 144) {
            contentRef.current.style.display = '-webkit-box';
            contentRef.current.style.webkitLineClamp = '6';
            contentRef.current.style.webkitBoxOrient = 'vertical';
            contentRef.current.style.overflow = 'hidden';
            setReadMore(true);
        }
    }, []);

    return (
        <div
            className={`${cx('wrapper')} p-3 f-family text-white rounded mb-5`}
        >
            <div className={`${cx('account')} mb-4`}>
                <div className={`d-flex align-items-center`}>
                    <div
                        className={`${cx(
                            'avatar',
                        )} rounded-circle overflow-hidden me-3`}
                    >
                        <img
                            src={`https://secure.gravatar.com/avatar/${
                                data.author_details.avatar_path &&
                                data.author_details.avatar_path.split('/').pop()
                            }?s=45`}
                            alt=""
                        />
                    </div>
                    <div className={`${cx('detail--account')}`}>
                        <Link
                            className={` d-inline-block text-decoration-none text-white fw-bold-700`}
                        >
                            A review by {data.author}
                        </Link>
                        <div className={` d-flex align-items-center`}>
                            <div
                                className={` rounded me-3 d-flex align-items-center justify-content-center`}
                            >
                                <FontAwesomeIcon icon={faStar} />
                                <span className={`ms-2`}>
                                    {data.author_details.rating
                                        ? data.author_details.rating + '.0'
                                        : 0}
                                </span>
                            </div>
                            <p className={`m-0 ${cx('text--account')}`}>
                                Written by{' '}
                                <span className={`fw-bold-500`}>
                                    {data.author}
                                </span>{' '}
                                on July 21, 2023
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${cx('content')}`}>
                <p ref={contentRef} className={`m-0`}>
                    {data.content}
                </p>
                {readMore && (
                    <Link
                        to={data.url}
                        className="text-white pt-1 d-inline-block"
                    >
                        read the rest
                    </Link>
                )}
            </div>
        </div>
    );
}

export default CommentItem;
