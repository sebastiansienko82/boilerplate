import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainContainer />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
