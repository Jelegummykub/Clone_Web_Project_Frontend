import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Data from './components/data';
import Navbar from './components/Navbar';
import Readdata from './components/readdata';
import Accordion from './notuse/Accordion';
import FileListViewer from './notuse/FileListViewer';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/Data" element={<Data />} />
          <Route path="/Accordion" element={<Accordion />} />
          <Route path="/FileListViewer" element={<FileListViewer />} />
          <Route path="/Readdata" element={<Readdata />} />

        </Routes>
      </Router>

      {/* <Navbar/> */}
    </>
  )
}

export default App
