import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import {Contact, Footer, Header} from './components'
import {
  Home,
  About,
  NotFound,
  Blog,
  Portfolio,
  Contact as ContactPage,
  Single
} from './pages'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>
        <Route path='/blog/:id' element={<Single />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
