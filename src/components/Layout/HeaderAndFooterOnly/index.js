const { default: Footer } = require('../components/Footer');
const { default: Header } = require('../components/Header');

function HeaderAndFooterOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default HeaderAndFooterOnly;
