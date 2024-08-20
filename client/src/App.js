import ContactForm from './components/ContactForm';
import Thankyou from './components/Thankyou';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactForm />} />
        <Route path="/Thankyou" element={<Thankyou />} />
      </Routes>
    </Router>
  );
}

export default App;
