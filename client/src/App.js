import ContactDetails from './components/ContactDetails';
import Thankyou from './components/Thankyou';
import { BrowserRouter as Router, Route, Routes, Form } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactDetails />} />
        <Route path="/Thankyou" element={<Thankyou />} />
      </Routes>
    </Router>
  );
}

export default App;
