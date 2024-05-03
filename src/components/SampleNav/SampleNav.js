import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Institute from '../Institute';
import Welfareadw from '../Welfareadw';


const SampleNav = () => {
	return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Institute</Link>
            </li>
            <li>
              <Link to="/welfare">Welfareadw</Link>
            </li>
          </ul>
        </nav>

				<Routes>
          <Route path="/" element={<Institute/>} />
          <Route path="/welfare" element={<Welfareadw />} />
        </Routes>
      </div>
    </Router>
  );
}

export default SampleNav