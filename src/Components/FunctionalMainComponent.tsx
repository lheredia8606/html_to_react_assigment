import { characters } from "../data";
import { ClassTopCharacters } from "./ClassTopCharacters";
import { CharacterCard } from "./FunctionalCharacterCard";
export const Functional = () => {
  const mostVoted = () => {
    return characters
      .sort((item1, item2) => item2.votes - item1.votes)
      .slice(0, 5);
  };

  return (
    <>
      <header>
        <h1>Fullmetal Alchemist</h1>
        <nav>
          <li>about us</li>
          <li>info</li>
          <li>support us</li>
        </nav>
      </header>
      <section id="character-ratings">
        <h4>Top Characters</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Skillset</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>
            {mostVoted().map((topCharacter, index) => (
              <ClassTopCharacters
                character={topCharacter}
                isOdd={index % 2 === 1}
                key={topCharacter.name}
              />
            ))}
            {/*             
            <tr className="dark">
              <td>Alfonse Elrich</td>
              <td>Being Loveable, Alchemy</td>
              <td>110</td>
            </tr>
            <tr className="light">
              <td>Edward Elrich "Full Metal Alchemist"</td>
              <td>Alchemy, Human Transmutation</td>
              <td>100</td>
            </tr>
            <tr className="dark">
              <td>Hawkeye</td>
              <td>Sniper, Loyal AF</td>
              <td>95</td>
            </tr>
            <tr className="light">
              <td>Mj. Armstrong</td>
              <td>Alchemy, Muscles</td>
              <td>94</td>
            </tr>
            <tr className="dark">
              <td>Nina</td>
              <td>Loving Dogs, being adorable</td>
              <td>93</td>
            </tr> */}
          </tbody>
        </table>
      </section>
      <section id="character-cards">
        {characters.map((character) => {
          return <CharacterCard key={character.name} character={character} />;
        })}
      </section>
    </>
  );
};
