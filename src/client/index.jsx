import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Tutorials from './Tutorials';
import FormTutorial from './FormTutorial';
import HabitTracker from './HabitTracker';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <div>
          {/* ナビゲーションボタン */}
          <nav style = {{ marginBottom : "20px"}}>
            <Link to = "/tutorials">
              <button>Tutorials</button>
            </Link>

            <Link to = "/form">
              <button>FormTutorial</button>
            </Link>

            <Link to = "/habit">
              <button>HabitTracker</button>
            </Link>
          </nav>

          {/* 画面切り替え */}
          <Routes>
            <Route path='/tutorials' element={<Tutorials />} />
            <Route path='/form' element={<FormTutorial />} />
            <Route path='/habit' element={<HabitTracker />} />
            <Route path='*' element={<main style={{ padding: '1rem' }}>
                  <p>There&apos;s nothing here! </p>
                  <h2>Click button!</h2>
                </main>
            }/>
          </Routes>
        </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('contents'),
);
