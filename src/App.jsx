import { useEffect, useState } from "react";

import {
  diceIcon,
  dividerDesktopPattern,
  dividerMobilePattern,
} from "./assets/images";

const API = "https://api.adviceslip.com/advice";

const App = () => {
  const [advice, setAdvice] = useState({});

  const getAdvice = async () => {
    await fetch(API)
      .then((response) => response.json())
      .then((data) => setAdvice(data.slip))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <main className="main">
      <div className="card">
        <p className="advice-id">
          Advice {advice.id}
        </p>
        <h3 className="advice">&quot;{advice.advice}&quot;</h3>
        <picture className="advice-divider">
          <source media="min-width:780px" srcSet={dividerDesktopPattern} />
          <img
            src={dividerMobilePattern}
            alt="divider-pattern"
            className="w-full"
          />
        </picture>
        <figure className="dice" onClick={() => getAdvice()}>
          <img src={diceIcon} alt="dice-icon" />
        </figure>
      </div>
    </main>
  );
};

export default App;
