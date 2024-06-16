
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import HomePage from './Components/HomePage';
import Service from './Components/Service';
import Resume from './Components/Resume';
import Aboutme from './Components/Aboutme';
import Skills from './Components/Skills';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/service" element={<Service/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/aboutme" element={<Aboutme/>}/>
          <Route path="/skill" element={<Skills/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
