import Stars from './components/Stars'

import './App.css';

const count = 5

function App() {
  return (
    <div className="App">
      {typeof count === 'number' ? <Stars count={count}/> : undefined}
    </div>
  );
}

export default App;
