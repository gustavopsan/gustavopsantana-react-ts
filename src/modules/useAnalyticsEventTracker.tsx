import ReactGA from "react-ga";

const useAnalyticsEventTracker = (category="Portifolo Category") => {
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}
export default useAnalyticsEventTracker;