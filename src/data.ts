export type TCharacter = {
  name: string;
  skillSet: string[];
  nickName: string;
  image: string;
  description: string;
  votes: number;
};

export const characters: TCharacter[] = [
  {
    name: "Alex Louis Armstrong",
    nickName: "Major Armstrong",
    description:
      "Major Armstrong may look big and strong, but deep down he's the biggest sap in the entire show",
    image:
      "https://www.giantbomb.com/a/uploads/original/1/19821/694167-armstrong.jpg",
    skillSet: ["Alchemy", "Muscles"],
    votes: 94,
  },
  {
    name: "Alphonse Elrich",
    nickName: "",
    description:
      "Alphonse is a walking suit of armor on a quest to find his real body",
    image:
      "https://upload.wikimedia.org/wikipedia/en/7/7c/AlphonseElricArakawa.jpg",
    skillSet: ["Being Loveable", "Alchemy"],
    votes: 110,
  },
  {
    name: "Edward Elrich",
    nickName: "The Fullmetal Alchemist",
    description:
      "Edward is a master alchemist and our main character... just don't call him short",
    image:
      "https://www.pngkit.com/png/detail/952-9524083_edward-elric-photo-edwardelric7-full-body-edward-elric.png",
    skillSet: ["Alchemy", "Human Transmutation"],
    votes: 100,
  },
  {
    name: "Greed",
    nickName: "Greed",
    description:
      "Greed is one of the seven deadly sins Homunculii. He's the most 'on our side' of all of them.",
    image:
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/08/greed-fullmetal-alchemist.jpg",
    skillSet: [],
    votes: 0,
  },
  {
    name: "Nina Tucker",
    nickName: "",
    description:
      "Nina is an adorable little girl! If you've watched FMA you know...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9dK-tXCnVxbSeSJuCKmiX0zUbnCEV1ss54DeOYgXUHSE0WB23TAUD4a3itwFbzJ9fkg&usqp=CAU",
    skillSet: ["Loving Dogs", "being adorable"],
    votes: 93,
  },
  {
    name: "Riza Hawkeye",
    nickName: "Hawkeye",
    description:
      "Hawkeye is Colonel Mustang's loyal assistant, and one of the strongest non-alchemist characters in the show",
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8171ae7d-9e3c-4aeb-b277-2a8308b0262a/d87573o-e22eb88b-1c20-449c-9093-1e4fba7856f3.png/v1/fill/w_622,h_350,strp/riza_hawkeye___minimalist_vector_wallpaper_by_rebeccaangoo_d87573o-350t.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvODE3MWFlN2QtOWUzYy00YWViLWIyNzctMmE4MzA4YjAyNjJhXC9kODc1NzNvLWUyMmViODhiLTFjMjAtNDQ5Yy05MDkzLTFlNGZiYTc4NTZmMy5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.InNg0JonI4tCcxkN-u8E2z7Z4aqvLLxClcDwujxbTJs",
    skillSet: ["Sniper", "Loyal AF"],
    votes: 95,
  },
  {
    name: "Solf J. Kimblee",
    nickName: "The Crimson Alchemist",
    description: "Kimblee suckkkkkssss, seriously he's not very nice",
    image:
      "https://i0.wp.com/news.qoo-app.com/en/wp-content/uploads/sites/3/2022/03/full-metal-alchemist-mobile-char-2.jpg?resize=640%2C457&ssl=1",
    skillSet: [],
    votes: 0,
  },
  {
    name: "Tim Marcoh",
    nickName: "Dr. Marcoh",
    description:
      "Dr. Marcoh did some F**ked up S**t in the war on ishval, but his redemption arc is strong",
    image:
      "https://m.media-amazon.com/images/M/MV5BYjljMjEzZmUtMjE2My00NWY1LTljMzAtYWNjOTI5Yzk5NmZjXkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_FMjpg_UX1000_.jpg",
    skillSet: [],
    votes: 0,
  },
  {
    name: "Winrey Rockbell",
    nickName: "",
    description:
      "Winrey is Edward and Al's best friend, and it's a good thing because her specialty is making the best automail out there",
    image:
      "https://s3.amazonaws.com/comicgeeks/characters/avatars/36066.jpg?t=1668454278",
    skillSet: [],
    votes: 0,
  },
];
