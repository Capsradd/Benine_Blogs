import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import Browse from './pages/browse'
import Your from './pages/your'
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen justify-between flex flex-col">
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-10">
          <Link to="/"><img src="./benine_blogs.png" /></Link>
          <Link to="/"><h1 className="text-white text-2xl font-bold">{'<'} back</h1></Link>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/your" element={<Your />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}