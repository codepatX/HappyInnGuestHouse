import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <HomePage />
      {/* Your other components */}
    </Router>
  );
}

export default App;
