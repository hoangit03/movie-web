import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from './components/Layout';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBVbxyp6cICidkzX4wkYoaa8LuxTkpbx40',
    authDomain: 'ndk-movie-app.firebaseapp.com',
    projectId: 'ndk-movie-app',
    storageBucket: 'ndk-movie-app.appspot.com',
    messagingSenderId: '105350086277',
    appId: '1:105350086277:web:17a4fe238f13d8864a33ec',
    measurementId: 'G-ZPZLPYX7CF',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
    return (
        <BrowserRouter>
            <div className="App overflow-hidden">
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
