import ResultsSummary from "./components/ResultSummary/ResultsSummary";
import { HeadingLevelContext } from "./contexts/HeadingLevelContext";
import "./styles.css";

function App() {
  return (
    <HeadingLevelContext.Provider value={0}>
      <main>
        <ResultsSummary />
      </main>
    </HeadingLevelContext.Provider>
  );
}

export default App;
