import './App.scss';
import Header from './components/header';
import CodeEditor from './components/code-edior';
import SignIn from './components/signin';
import SignUp from './components/signup';
import PageNotFound from './components/404';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path='/code' element={<CodeEditor/>}></Route>
                    <Route path='/' element={<SignIn/>}></Route>
                    <Route path='/signup' element={<SignUp/>}></Route>
                    <Route path='*' element={<PageNotFound/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
