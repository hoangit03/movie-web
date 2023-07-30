import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from './components/Layout';
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {publicRoutes.map((publicRoute, index) => {
                        const Page = publicRoute.component;
                        const Layout = publicRoute.layout || DefaultLayout;
                        return (
                            <Route
                                key={index}
                                path={publicRoute.path}
                                element={
                                    <Layout
                                        name={publicRoute.name}
                                        path={publicRoute.path}
                                    >
                                        <Page />
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
