import { useEffect } from 'react';
import ReactGA from 'react-ga';

import MyRoutes from './Routes';

const TRACKING_ID = "G-EWWRYG4X97";

ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <MyRoutes />
  );
}

export default App;
