import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";
import Sidebar from "./components/Sidebar";
import News from "./pages/News"
import Events from "./pages/Events"
import Blog from "./pages/Blog"
import Recrutement from "./pages/Recrutement"
import NewsDetail from "./pages/pagesdetail/NewsDetail"
import EventDetail from "./pages/pagesdetail/EventDetail"
import BlogDetail from "./pages/pagesdetail/BlogDetail"
import RecrutementDetail from "./pages/pagesdetail/RecrutementDetail"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/news" element={<News />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/recruitment" element={<Recrutement />} />
          <Route path="/newsdetail" element={<NewsDetail />} />
          <Route path="/eventdetail" element={<EventDetail />} />
          <Route path="/blogdetail" element={<BlogDetail />} />
          <Route path="/recrutementdetail" element={<RecrutementDetail />} />
        </Routes>
      </Router>
    
    </>
  );
}

export default App;
