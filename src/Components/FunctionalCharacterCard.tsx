import { TCharacter } from "../data";

export const CharacterCard = ({
  character: { name, description, image, nickName },
}: {
  character: TCharacter;
}) => {
  return (
    <div className="card">
      <div className="card-titles">
        <h3>{name}</h3>
        <h4>{nickName}</h4>
      </div>
      <img src={image} alt="" />
      <p>{description}</p>
    </div>
  );
};
