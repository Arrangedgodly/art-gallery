import { Card } from "./Card.js";

/*
{
    prompt: "",
    link: ""
  }
*/

const initialCards = [
  {
    prompt: "Dubstep as an Anime Character",
    link: "https://mj-gallery.com/8f1c7f4f-06a3-4589-aa0a-7fd991955fa0/grid_0.png"
  },
  {
    prompt: "Dubstep as an Anime Character",
    link: "https://mj-gallery.com/20149e07-e784-4d0b-81c2-951bfdf74e52/grid_0.png"
  },
  {
    prompt: "Pashmina Death Sauce",
    link: "https://mj-gallery.com/48b63c63-c8e7-4bfe-b18b-4895b8ac905b/grid_0.png"
  },
  {
    prompt: "Hacker Breaking the Mainframe",
    link: "https://mj-gallery.com/b0b56099-55e0-4971-af81-2b147d8d8f57/grid_0.png"
  },
  {
    prompt: "Muppet Mugshot Prison",
    link: "https://mj-gallery.com/8d8c15b1-eac4-4d96-af43-0dda49a002d7/grid_0.png"
  },
  {
    prompt: "The Birth of LSD",
    link: "https://mj-gallery.com/94e688c2-b9a2-44b5-b9a8-7b9e44c8c667/grid_0.png"
  },
  {
    prompt: "Baboon Cyborg",
    link: "https://mj-gallery.com/85a7ae5b-b9fc-4194-b790-d018a460e240/grid_0.png"
  },
  {
    prompt: "Notorious Big as a White Bearded Male",
    link: "https://mj-gallery.com/1934200e-8d61-48e3-80da-eeb88389bfe5/grid_0.png"
  },
  {
    prompt: "Round Face Circular Sunglasses Well Trimmed Beard Wearing a Baseball Hat",
    link: "https://mj-gallery.com/2b6180c7-2eea-4f1d-8017-8b1c2021d31d/grid_0.png"
  },
  {
    prompt: "Witch Preparing her Sacrifice",
    link: "https://mj-gallery.com/9717fd82-b333-4335-864b-c30194fdc731/grid_0.png"
  },
  {
    prompt: "Gamer Dream Lounge",
    link: "https://mj-gallery.com/d889f5f2-d85b-424a-a336-ce73ea7ffac9/grid_0.png"
  },
  {
    prompt: "DMT",
    link: "https://mj-gallery.com/6eabec1d-1d77-43ed-9b48-94b9efc2ab67/grid_0.png"
  },
  {
    prompt: "DMT",
    link: "https://mj-gallery.com/acff2f9e-e9a7-470b-896a-a6b230e5b41b/grid_0.png"
  },
  {
    prompt: "DMT",
    link: "https://mj-gallery.com/708b3be0-9791-4bb2-8294-bd9bef487a4d/grid_0.png"
  },
  {
    prompt: "Zombie Hologram",
    link: "https://mj-gallery.com/2ad6a62c-2914-4c82-90bd-0ca379f2ee82/grid_0.png"
  },
  {
    prompt: "Dropping a Torch into a Cave",
    link: "https://mj-gallery.com/42f199fc-97ce-4373-bb69-bda7c8fbc788/grid_0.png"
  },
  {
    prompt: "Endless Chasms into the Earth",
    link: "https://mj-gallery.com/0f2de38f-f09b-4f8d-b640-b6ba8a0240cf/grid_0.png"
  },
  {
    prompt: "Beetlejuice",
    link: "https://mj-gallery.com/e354e97a-ed5f-4c7c-804e-aaba09cd28ca/grid_0.png"
  },
  {
    prompt: "The Birth of LSD",
    link: "https://mj-gallery.com/e434a7f6-5744-473f-b771-c7d8e5bdc81b/grid_0.png"
  },
  {
    prompt: "Bird Brained Homonculi",
    link: "https://mj-gallery.com/e6e1780d-dd4a-4340-9b91-3dcf39514e78/grid_0.png"
  },
  {
    prompt: "Courage the Cowardly Dog",
    link: "https://mj-gallery.com/13ab395e-d413-47b3-8426-a1538609940f/grid_0.png"
  },
  {
    prompt: "Danny Devito on Acid",
    link: "https://mj-gallery.com/032f4436-6ccd-4d1f-86a6-f10bb603546b/grid_0.png"
  },
  {
    prompt: "Animar Soul of Elements",
    link: "https://mj-gallery.com/7b443326-1733-4f95-bfdd-67ad16de3def/grid_0.png"
  },
  {
    prompt: "The Birth of LSD",
    link: "https://mj-gallery.com/950f7b06-ef81-4151-a7fe-267d995aeb13/grid_0.png"
  },
  {
    prompt: "THC",
    link: "https://mj-gallery.com/5385ca72-0669-42aa-8193-7968d99542c6/grid_0.png"
  },
  {
    prompt: "Winston Meets Tarzan",
    link: "https://mj-gallery.com/94ffacfe-6e7d-41f1-80be-575dde31cdf2/grid_0.png"
  },
  {
    prompt: "The Birth of LSD",
    link: "https://mj-gallery.com/114808c2-422f-4b37-b5e8-2684933a7e2e/grid_0.png"
  },
  {
    prompt: "Fibonacci Sequence",
    link: "https://mj-gallery.com/42b88e5e-9db4-46b8-aedc-cbdc9c743796/grid_0.png"
  },
  {
    prompt: "Falling into an Endless Hole",
    link: "https://mj-gallery.com/ac1b0424-ebb7-45d1-8ee8-fce11c12df97/grid_0.png"
  },
  {
    prompt: "Traveling at the Speed of Light",
    link: "https://mj-gallery.com/0ae42155-d24c-4134-af56-c582befb8a2e/grid_0.png"
  },
  {
    prompt: "The Birth of LSD",
    link: "https://mj-gallery.com/cce63dd9-b5b3-4ec2-a5fc-9e7974d5a565/grid_0.png"
  },
  {
    prompt: "Fibonacci Sequence",
    link: "https://mj-gallery.com/938ddef7-4b24-4164-8929-e82adb92bf2c/grid_0.png"
  },
  {
    prompt: "Lava Tree",
    link: "https://mj-gallery.com/a4a175d4-45d9-4464-be5f-c73c183b0e47/grid_0.png"
  },
  {
    prompt: "Aesop Rock Album Cover",
    link: "https://mj-gallery.com/d0c4b032-c06a-4d57-83d6-359b9cdbc934/grid_0.png"
  },
  {
    prompt: "City Folk Discover a Goliath",
    link: "https://mj-gallery.com/36924e02-3198-41e8-a95f-5c1479e07242/grid_0.png"
  },
  {
    prompt: "Sewer Dwellers",
    link: "https://mj-gallery.com/92add88c-2ab0-43ee-ac63-4c4af64ee8e5/grid_0.png"
  },
  {
    prompt: "Gamer Dream House",
    link: "https://mj-gallery.com/7c735dd9-74c6-4926-bfe8-ae3dd9cc2e0b/grid_0.png"
  },
  {
    prompt: "Gamer Dream House",
    link: "https://mj-gallery.com/b4e2462f-edce-4b69-8ce4-255a82e997ca/grid_0.png"
  },
  {
    prompt: "Minecraft Dungeon",
    link: "https://mj-gallery.com/b632e422-27ab-4a1a-92f6-7fbb02eba4d7/grid_0.png"
  },
  {
    prompt: "Turning Back Time",
    link: "https://mj-gallery.com/107c738a-a8c5-4041-a5c8-92976fc92c05/grid_0.png"
  },
  {
    prompt: "Sewer Dwellers",
    link: "https://mj-gallery.com/cb4d6862-de19-4651-a6b5-21d321529518/grid_0.png"
  },
  {
    prompt: "Sewer Dwellers",
    link: "https://mj-gallery.com/2094627d-76b0-4fcb-a204-82187d8bdac7/grid_0.png"
  },
  {
    prompt: "Mordecai Destroyer of Worlds",
    link: "https://mj-gallery.com/9e20ff0f-907d-476e-9070-19d23ea13233/grid_0.png"
  },
  {
    prompt: "Mordecai Destroyer of Worlds",
    link: "https://mj-gallery.com/9bc6a467-c020-4421-aeb6-918b86bb3b3c/grid_0.png"
  },
  {
    prompt: "Mordecai Destroyer of Worlds",
    link: "https://mj-gallery.com/6cae927c-146d-4002-b2b3-728d52d12a9e/grid_0.png"
  },
  {
    prompt: "Ludicrous Amounts of Applesauce",
    link: "https://mj-gallery.com/b752cf67-4914-4217-b4a5-616fe059cd9a/grid_0.png"
  },
  {
    prompt: "Interstellar Teleportation",
    link: "https://mj-gallery.com/5733838b-becc-4243-b763-e98a304c80e0/grid_0.png"
  },
  {
    prompt: "Interstellar Teleportation",
    link: "https://mj-gallery.com/92492f48-85d2-4ba3-9150-76be4a5004ad/grid_0.png"
  },
  {
    prompt: "Zombies Climbing a Tower",
    link: "https://mj-gallery.com/612f1bea-27da-4f6a-85a4-a83fe93d99ed/grid_0.png"
  },
  {
    prompt: "Face Melting Bass",
    link: "https://mj-gallery.com/e656bc6d-865c-479a-ae5e-bd7908d5b028/grid_0.png"
  },
  {
    prompt: "Tyriq with a U E",
    link: "https://mj-gallery.com/5d45f98a-365b-47a6-8b52-b1fdc95a26ef/grid_0.png"
  },
  {
    prompt: "Tyriq with a U E",
    link: "https://mj-gallery.com/14ae2847-23cc-4208-ae38-ac5350449689/grid_0.png"
  },
  {
    prompt: "Dubstep as an Anime Character",
    link: "https://mj-gallery.com/45575db5-6720-4359-a15c-b618ae2d5808/grid_0.png"
  },
  {
    prompt: "Little Shop of Horrors",
    link: "https://mj-gallery.com/7dbd6bc8-a82b-4344-909b-906cf327c2f6/grid_0.png"
  },
  {
    prompt: "Little Shop of Horrors",
    link: "https://mj-gallery.com/7f848229-e26d-4de9-9f67-f1e294bf3084/grid_0.png"
  },
  {
    prompt: "Overwatch Insanity",
    link: "https://mj-gallery.com/a7052a02-bd94-48f6-98ee-071e300d12bd/grid_0.png"
  },
  {
    prompt: "Eye of Mordor Clown",
    link: "https://mj-gallery.com/c27e8ce7-c3a0-4ca9-a276-6d58c314c2d1/grid_0.png"
  },
  {
    prompt: "Stoner Kitty",
    link: "https://mj-gallery.com/dde0c207-b7ba-4bb2-9f51-31bb285c378e/grid_0.png"
  },
  {
    prompt: "Superhero made out of Stardust and Unicorn Glitter",
    link: "https://mj-gallery.com/ebf44cfe-8c69-4ecd-acbd-70c10fd4093b/grid_0.png"
  },
  {
    prompt: "New Run the Jewels Album Cover",
    link: "https://mj-gallery.com/78b8ec64-2df6-45e6-a726-d809fda5f507/grid_0.png"
  },
  {
    prompt: "Donald Trump Russian Superhero",
    link: "https://mj-gallery.com/b3513fb3-a1ab-4e50-acbc-980e378deff5/grid_0.png"
  },
  {
    prompt: "King Kitty, Lord of the Meatsticks",
    link: "https://mj-gallery.com/0da5b74e-33cd-40ad-94d6-79cd1e3a5b7d/grid_0.png"
  },
  {
    prompt: "Tim Burton's Acid Dream",
    link: "https://mj-gallery.com/b50395f5-2bbb-418b-b4cf-a3e1b29a2600/grid_0.png"
  },
  {
    prompt: "Disney as a Horror Park",
    link: "https://mj-gallery.com/70e5d941-cedb-4ea1-be59-62cb5570bf0c/grid_0.png"
  },
  {
    prompt: "Cybernetic Venus Flytrap",
    link: "https://mj-gallery.com/515bf591-4cf4-4734-ade6-d530d8eb1615/grid_0.png"
  },
  {
    prompt: "Archangel Ascended",
    link: "https://mj-gallery.com/234e7984-c897-4453-8cb3-7295193952f1/grid_0.png"
  },
  {
    prompt: "Comic Cover for the Trashman",
    link: "https://mj-gallery.com/ceb81f2b-fdbc-4186-8d41-18089335afe2/grid_0.png"
  },
  {
    prompt: "Texas Chainsaw Cyberpunk",
    link: "https://mj-gallery.com/12267ab0-78a3-47dd-b8ba-55e94aed7c4d/grid_0.png"
  },
  {
    prompt: "Grave of Bigfoot",
    link: "https://mj-gallery.com/39b303ff-f8fd-4410-bc5b-594c992cda88/grid_0.png"
  },
  {
    prompt: "Superman Statue Destroyed by Zombies",
    link: "https://mj-gallery.com/73f27c65-27bd-407e-94ac-4ade13e54dd9/grid_0.png"
  },
  {
    prompt: "Space Pirate Gangster",
    link: "https://mj-gallery.com/f3358286-af7f-409b-ac07-f94a5572bf31/grid_0.png"
  },
  {
    prompt: "Nuclear War inside Space",
    link: "https://mj-gallery.com/652c810e-f0f5-44a9-b0cb-9757233b83cd/grid_0.png"
  }
];

const cards = document.querySelector(".cards");

initialCards.forEach((data) => {
  const card = new Card(data, "#card");
  const cardElement = card.generateCard();
  cards.append(cardElement);
})