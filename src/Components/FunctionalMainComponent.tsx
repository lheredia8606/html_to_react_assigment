import { characters } from "../data";
import { ClassTopCharacters } from "./ClassTopCharacters";
import { FunctionalCharacterCard } from "./FunctionalCharacterCard";
export const FunctionalMainComponent = () => {
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
          </tbody>
        </table>
      </section>
      <section id="character-cards">
        {characters.map((character) => {
          return (
            <FunctionalCharacterCard
              key={character.name}
              character={character}
            />
          );
        })}
      </section>
    </>
  );
};
