import ResultsSummary from "./components/ResultSummary/ResultsSummary";
import { HeadingLevelContext } from "./contexts/HeadingLevelContext";
import "./styles.css";

function App() {
  return (
    <HeadingLevelContext.Provider value={0}>
      <main>
        <ResultsSummary />
      </main>
      <footer className="attribution">
        <p>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://www.frontendmentor.io/profile/AnaCarol2001">
            AnaCarolina
          </a>
          .
        </p>
      </footer>
    </HeadingLevelContext.Provider>
  );
}

export default App;
