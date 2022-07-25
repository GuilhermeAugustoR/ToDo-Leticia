import React from "react";
import motivate from "../motivation";

export function Header() {
  const [motivatePhrase, setMotivatePhrase] = React.useState<string>("");
  const [motivatePhraseSub, setMotivatePhraseSub] = React.useState<string>("");

  React.useEffect(() => {
    const randomMotivatePhrase =
      motivate[Math.floor(Math.random() * motivate.length)];
    setMotivatePhrase(randomMotivatePhrase.title);
    setMotivatePhraseSub(randomMotivatePhrase.subtitle);
  }, []);

  return (
    <header className="header">
      <div>
        <h1>Lista de Afazeres</h1>

        <div>
          {motivatePhrase}
          <h4>{motivatePhraseSub}</h4>
        </div>
      </div>
    </header>
  );
}
