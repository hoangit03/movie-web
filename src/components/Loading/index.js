import styles from './Loading.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Loading() {
    return (
        <div
            className={`${cx(
                'wrapper',
            )} position-fixed top-0 end-0 bottom-0 start-0`}
        >
            <div
                className={`${cx(
                    'container',
                )} d-flex w-100 h-100 align-items-center justify-content-center`}
            >
                <img
                    src="https://themehut.co/wp/movflx/wp-content/themes/movflx/assets/img/preloader.svg"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Loading;
