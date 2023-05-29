import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './page/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
