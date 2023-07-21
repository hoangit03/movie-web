import { Link } from 'react-router-dom';

function BackgroundTitle({ name }) {
    return (
        <div
            style={{
                backgroundImage:
                    'url(https://themehut.co/wp/movflx/wp-content/uploads/2022/08/breadcrumb_bg.jpg)',
                backgroundColor: 'rgb(89, 89, 89)',
                height: 620,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
            className="background position-relative"
        >
            <div className="content position-absolute translate-middle top-50 start-50 text-center">
                <h1 className=" text-white text-capitalize">{name}</h1>
                <Link
                    to="./"
                    className="text-uppercase text-decoration-none me-4"
                >
                    home
                </Link>
                <span className=" text-uppercase text-white">{name}</span>
            </div>
        </div>
    );
}

export default BackgroundTitle;
