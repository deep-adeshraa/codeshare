import './App.scss';
import Header from './components/common/header';
import CodeEditor from './components/problemAndEditor';
import SignIn from './components/signin';
import SignUp from './components/signup';
import PageNotFound from './components/common/404';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PublicRoute, PrivateRoute } from './hooks/routeHooks';

function App() {
    return (
        <div className="App">
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<PrivateRoute/>}>
                        <Route path='/code' element={<CodeEditor/>} />
                    </Route>

                    <Route path='/' element={<PublicRoute restricted={true}/>}>
                        <Route path='/signin' element={<SignIn />} />
                        <Route path='/signup' element={<SignUp />} />
                    </Route>

                    <Route path='/' element={<PublicRoute/>}>
                        <Route path='*' element={<PageNotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
