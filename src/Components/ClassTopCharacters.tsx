import { Component } from "react";
import { TCharacter } from "../data";
interface ClassTopCharactersProps {
  character: TCharacter;
  isOdd: boolean;
}

export class ClassTopCharacters extends Component<ClassTopCharactersProps> {
  render() {
    return (
      <>
        <tr className={this.props.isOdd ? "dark" : "light"}>
          <td>{this.props.character.name}</td>
          <td>{this.props.character.skillSet.join(" ")}</td>
          <td>{this.props.character.votes}</td>
        </tr>
      </>
    );
  }
}
