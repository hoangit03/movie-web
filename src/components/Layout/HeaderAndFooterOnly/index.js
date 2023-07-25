const { default: Footer } = require('../components/Footer');
const { default: Header } = require('../components/Header');

function HeaderAndFooterOnly({ children }) {
    return (
        <div className="">
            <Header />
            <div className="">
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default HeaderAndFooterOnly;
