import { useEffect } from 'react';
import ReactGA from 'react-ga';

import MyRoutes from './Routes';

const TRACKING_ID = "UA-226363006-1";

ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <MyRoutes />
  );
}

export default App;
