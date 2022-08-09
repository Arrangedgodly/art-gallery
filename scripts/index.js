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
  },
  {
    prompt: "Mission Impossible",
    link: "https://mj-gallery.com/25e23757-b485-4647-862d-fd8676b2c97d/grid_0.png"
  },
  {
    prompt: "Spy Diving Through Laser Alarms",
    link: "https://mj-gallery.com/ac85520d-f091-499d-bf13-1346dfb42acf/grid_0.png"
  },
  {
    prompt: "Sourjourned Warrior",
    link: "https://mj-gallery.com/1aced76d-5446-4385-ac76-2b65b21b5cba/grid_0.png"
  },
  {
    prompt: "Cyclops Using His Laserbeams",
    link: "https://mj-gallery.com/e1a0bb0b-0ad3-461f-9edd-ebe53cb1347d/grid_0.png"
  },
  {
    prompt: "Cyclops Using His Laserbeams",
    link: "https://mj-gallery.com/df685695-927f-4106-a00b-58b1c441a4c8/grid_0.png"
  },
  {
    prompt: "Fire Burning Across the Northern Lights",
    link: "https://mj-gallery.com/87f508c6-ca26-4e91-98f0-a42bffd41ca1/grid_0.png"
  },
  {
    prompt: "Rancid Tree",
    link: "https://mj-gallery.com/5502dd60-85a3-4131-900c-86d521e9fb97/grid_0.png"
  },
  {
    prompt: "Concert on the Moon",
    link: "https://mj-gallery.com/584ece45-eaae-468b-9002-cce1f1815dfd/grid_0.png"
  },
  {
    prompt: "Fighting for Attention in a Sea Filled with Vermin",
    link: "https://mj-gallery.com/ae7187bc-1896-46cd-b4ae-b77b3cac7df8/grid_0.png"
  },
  {
    prompt: "Addams Family Brady Bunch",
    link: "https://mj-gallery.com/38c75048-1f92-45ba-a20c-057bec12cf81/grid_0.png"
  },
  {
    prompt: "Bazooka Tooth",
    link: "https://mj-gallery.com/f8273e95-56a4-406e-9fd5-b010ea1865d0/grid_0.png"
  },
  {
    prompt: "Cthulu Bikini",
    link: "https://mj-gallery.com/474b569a-0468-430d-88db-dc2028941359/grid_0.png"
  },
  {
    prompt: "Falling into an Endless Hole",
    link: "https://mj-gallery.com/e78ea905-34ae-47ac-97c4-d585d68d0729/grid_0.png"
  },
  {
    prompt: "Pouring Water onto a Juicy Steak",
    link: "https://mj-gallery.com/ecc25ae3-5575-4ea3-aa14-1072de8ff1f0/grid_0.png"
  },
  {
    prompt: "Minecraft Dungeon",
    link: "https://mj-gallery.com/fc998ae4-b8fb-4c3b-b3af-c69072c9bbb6/grid_0.png"
  },
  {
    prompt: "Interstellar Teleporation",
    link: "https://mj-gallery.com/9bd157f9-5c19-4fc4-8eaf-697d77808837/grid_0.png"
  },
  {
    prompt: "Rocket Ship Colliding with an Asteroid",
    link: "https://mj-gallery.com/ded72e17-8416-4548-be7a-76aa370be537/grid_0.png"
  },
  {
    prompt: "Face Melting Bass",
    link: "https://mj-gallery.com/652cfb75-838f-42f4-8622-d25c5d2ec224/grid_0.png"
  },
  {
    prompt: "Studio Ghibli Creature",
    link: "https://mj-gallery.com/fe26ab2a-ad48-474c-b941-ad825fb2235b/grid_0.png"
  },
  {
    prompt: "Dubstep as an Anime Character",
    link: "https://mj-gallery.com/1f71165f-b43c-4a32-b22a-3be456df57ec/grid_0.png"
  },
  {
    prompt: "Miyazaki Studio Ghibli",
    link: "https://mj-gallery.com/dde7a76c-2fee-4341-9f7e-a5dd4b3c6b23/grid_0.png"
  },
  {
    prompt: "League of Legends as a Side Scroller",
    link: "https://mj-gallery.com/eac59c57-def4-4e62-8337-4784b55224ac/grid_0.png"
  },
  {
    prompt: "Firing a Laser Cannon",
    link: "https://mj-gallery.com/7c399fb7-c595-4ca4-8c04-b220c936540b/grid_0.png"
  },
  {
    prompt: "Cybernetic Teeth",
    link: "https://mj-gallery.com/914b46c5-88f7-4185-8264-f13b09572ff5/grid_0.png"
  },
  {
    prompt: "A Doorway to Another Dimension",
    link: "https://mj-gallery.com/e582a53b-e757-4450-af97-cb6f12bd489c/grid_0.png"
  },
  {
    prompt: "Cybernetic Teeth",
    link: "https://mj-gallery.com/3203257a-5cdd-43b0-a0bf-efb20c5dc88a/grid_0.png"
  },
  {
    prompt: "Firing a Laser Cannon",
    link: "https://mj-gallery.com/29a5a15b-856f-4d2d-8a37-9b26c98b82b2/grid_0.png"
  },
  {
    prompt: "Spy Diving Through Laser Alarms",
    link: "https://mj-gallery.com/7abefacf-3cbe-493d-8e41-3b24f56526ad/grid_0.png"
  },
  {
    prompt: "Cosmic Wasteland",
    link: "https://mj-gallery.com/f21ca6e6-2a70-4d5b-b6cf-e1d34a120d99/grid_0.png"
  },
  {
    prompt: "Cosmic Wasteland",
    link: "https://mj-gallery.com/08f59bd6-4cfb-4b5d-bfd1-ba5542907e9f/grid_0.png"
  },
  {
    prompt: "Galaxy Slayer Zed",
    link: "https://mj-gallery.com/06948bae-e4bc-4796-be17-9df8afd44824/grid_0.png"
  },
  {
    prompt: "Pharah in Space",
    link: "https://mj-gallery.com/af0dbaf6-b920-4b18-9063-991be521acbd/grid_0.png"
  },
  {
    prompt: "Doomfist Actually Carrying a Game",
    link: "https://mj-gallery.com/2015b666-d3a6-494b-801d-443cfdbe7150/grid_0.png"
  },
  {
    prompt: "RHSWUB but not Haunted",
    link: "https://mj-gallery.com/c67c319e-81d4-4403-bc29-fe2167b3c6e0/grid_0.png"
  },
  {
    prompt: "RSHWUB but not Haunted",
    link: "https://mj-gallery.com/344cea9c-de3e-4434-90b2-5d4ffd35c606/grid_0.png"
  },
  {
    prompt: "Goblins Blocking the Dungeon Exit",
    link: "https://mj-gallery.com/f9d75404-cf3b-48f5-9cd5-70573740031e/grid_0.png"
  },
  {
    prompt: "Female Knight",
    link: "https://mj-gallery.com/6fdeb97f-86a5-43f1-9b5a-0bb453da89a0/grid_0.png"
  },
  {
    prompt: "ARTOFFICIAL",
    link: "https://mj-gallery.com/77e1543f-fc3a-4457-953f-6718bfa4663a/grid_0.png"
  },
  {
    prompt: "Let Sleeping Dogs Lie",
    link: "https://mj-gallery.com/f4e941f0-7d1c-4ea6-b016-027e143213c8/grid_0.png"
  },
  {
    prompt: "Two Planets Colliding",
    link: "https://mj-gallery.com/1f5cae98-accc-4214-bc29-d6d3a4b08397/grid_0.png"
  },
  {
    prompt: "Disgraced Superhero",
    link: "https://mj-gallery.com/a23f394d-fa66-4d46-90fe-82e24df575bf/grid_0.png"
  },
  {
    prompt: "Pizza Pretzel",
    link: "https://mj-gallery.com/7f7b8212-56c5-40cc-ba38-90f4c212866a/grid_0.png"
  },
  {
    prompt: "Boxing Frogs",
    link: "https://mj-gallery.com/57204f1f-39cb-4971-8406-cf0ad2b1bab0/grid_0.png"
  },
  {
    prompt: "Cats Brawling",
    link: "https://mj-gallery.com/cb507818-b600-4974-aada-20300a945925/grid_0.png"
  },
  {
    prompt: "Psilocybin Cage",
    link: "https://mj-gallery.com/d6353e1d-772b-454b-a194-7c377979a213/grid_0.png"
  },
  {
    prompt: "Psilocybin Cage",
    link: "https://mj-gallery.com/597fba5d-9205-445a-911f-afa9d767fe1d/grid_0.png"
  },
  {
    prompt: "Mario the Ancient Tibetian Warrior",
    link: "https://mj-gallery.com/e8c51881-d934-4033-bc7f-15e3ce7acac9/grid_0.png"
  },
  {
    prompt: "Mario the Ancient Tibetian Warrior",
    link: "https://mj-gallery.com/73c5ce6e-d9dc-40cf-b6cb-434982f985b8/grid_0.png"
  },
  {
    prompt: "Love Entertwined",
    link: "https://mj-gallery.com/6cde5e42-4f48-49e9-b75c-f7b2bc556d98/grid_0.png"
  },
  {
    prompt: "Fat Man Eating a 1-Up Mushroom",
    link: "https://mj-gallery.com/0609b86f-bb4a-47c0-be3e-858911813440/grid_0.png"
  },
  {
    prompt: "Mario Powerups Sold Back Alley",
    link: "https://mj-gallery.com/217a7a0d-6876-4711-91af-b28c75eb36f5/grid_0.png"
  },
  {
    prompt: "Fat Man Eating a 1-Up Mushroom",
    link: "https://mj-gallery.com/2612797e-1ace-4129-b301-01182d5e3ae9/grid_0.png"
  },
  {
    prompt: "Fat Man Eating a 1-Up Mushroom",
    link: "https://mj-gallery.com/90208852-03c0-42f6-b0a5-d2bfeaaea68c/grid_0.png"
  },
  {
    prompt: "Mario Powerups Sold Back Alley",
    link: "https://mj-gallery.com/ad99e3d2-9bf6-4e21-b8ee-45725ca335a1/grid_0.png"
  },
  {
    prompt: "Mario Powerups Sold Back Alley",
    link: "https://mj-gallery.com/b6573f44-eb7d-4616-819a-1aa9a45de9d1/grid_0.png"
  },
  {
    prompt: "Jojo Punching Stritzo into a Volcano",
    link: "https://mj-gallery.com/18805618-e31f-49e6-8d53-f9f242a01538/grid_0.png"
  },
  {
    prompt: "Drunks Applauding the Bard",
    link: "https://mj-gallery.com/c6df0b56-7a8a-4fec-9ee3-80aeaac3f6af/grid_0.png"
  },
  {
    prompt: "Storming the Beaches of Normandy",
    link: "https://mj-gallery.com/64599f47-8ecb-4823-a5ad-22a1b0017f1a/grid_0.png"
  },
  {
    prompt: "Dinkin Flicka",
    link: "https://mj-gallery.com/1e4a5fe0-b4bb-4c5a-b555-105443854660/grid_0.png"
  },
  {
    prompt: "Morty Smith Cyberpunk",
    link: "https://mj-gallery.com/46388e7f-49b9-4425-aefc-39e9b6e9e6b8/grid_0.png"
  },
  {
    prompt: "Dinkin Flicka",
    link: "https://mj-gallery.com/d57f4fbc-35e8-49bb-8c20-48c35e1a0f4b/grid_0.png"
  },
  {
    prompt: "Pip Boy",
    link: "https://mj-gallery.com/f951eab1-22d5-4347-8498-764c21fd69ff/grid_0.png"
  },
  {
    prompt: "Against Giants We Rise",
    link: "https://mj-gallery.com/0b6c2085-07af-4643-a808-0ec35bb1b374/grid_0.png"
  },
  {
    prompt: "Killer Croc",
    link: "https://mj-gallery.com/3007ec3b-00c4-4de2-9fca-60d395ea58f6/grid_0.png"
  },
  {
    prompt: "Bioshock Big Daddy",
    link: "https://mj-gallery.com/97204d46-da83-4fd0-a9e3-5a9255cf5c61/grid_0.png"
  },
  {
    prompt: "Bioshock Big Daddy",
    link: "https://mj-gallery.com/f843d7bc-81da-4c52-abfd-f68ac3975272/grid_0.png"
  },
  {
    prompt: "Bioshock Big Daddy",
    link: "https://mj-gallery.com/01c30abb-c9fb-4fe2-9072-3521a0bf9420/grid_0.png"
  },
  {
    prompt: "Bioshock Big Daddy",
    link: "https://mj-gallery.com/7a209561-1704-4184-badd-b9ce96e4116b/grid_0.png"
  },
  {
    prompt: "Panda Wearing a Cape",
    link: "https://mj-gallery.com/bc8e24e7-6be2-4d10-9ccf-7df35534c76f/grid_0.png"
  },
  {
    prompt: "The Streets of Englehood",
    link: "https://mj-gallery.com/6df24362-c9aa-4dae-bcae-e3b43ecd4fca/grid_0.png"
  },
  {
    prompt: "Elmo with Terminal Cancer",
    link: "https://mj-gallery.com/23a29201-758b-4b96-a9ad-a50e6c0f4e67/grid_0.png"
  },
  {
    prompt: "Monster Olympics",
    link: "https://mj-gallery.com/34600977-c40a-4a37-a486-5ab56f58341b/grid_0.png"
  },
  {
    prompt: "Elmo Eating an Innocent Bystander",
    link: "https://mj-gallery.com/8d584b0e-4bd7-43cf-8dac-502cc2c3239c/grid_0.png"
  },
  {
    prompt: "Orange Cat Drinking Lean",
    link: "https://mj-gallery.com/abeeaa9c-637c-404d-a810-6f38726441b7/grid_0.png"
  },
  {
    prompt: "Assassination Classroom",
    link: "https://mj-gallery.com/921ebe3e-148f-4b92-82a0-456d72a0908a/grid_0.png"
  },
  {
    prompt: "Dinka Flicka",
    link: "https://mj-gallery.com/897765d1-f5f1-4cf9-87ce-e714de8f784c/grid_0.png"
  },
  {
    prompt: "Fat Man Eating a 1-Up Mushroom",
    link: "https://mj-gallery.com/0dc32b4f-2f16-4d55-ba41-9f8b911c3b83/grid_0.png"
  },
  {
    prompt: "Fat Man Eating a 1-Up Mushroom",
    link: "https://mj-gallery.com/c1aca714-feb2-44ea-8b39-453b572af3a3/grid_0.png"
  },
  {
    prompt: "Galaxy Slayer Zed",
    link: "https://mj-gallery.com/e3f03870-4c6e-4775-86a8-1be8420d75ad/grid_0.png"
  },
  {
    prompt: "Galaxy Slayer Zed",
    link: "https://mj-gallery.com/4fe0bbe2-579c-492f-ab01-397716990b83/grid_0.png"
  },
  {
    prompt: "Mort D'Angelo",
    link: "https://mj-gallery.com/90c46ba0-8f4e-426f-b225-c0f7a298e066/grid_0.png"
  },
  {
    prompt: "MF DOOM Mask Hologram",
    link: "https://mj-gallery.com/e0bbf847-1090-4863-806d-5a27e7a2b72a/grid_0.png"
  },
  {
    prompt: "Pipboy",
    link: "https://mj-gallery.com/548a4bdf-5677-415f-8785-ec115ad7626e/grid_0.png"
  },
  {
    prompt: "X-Ray Vision",
    link: "https://mj-gallery.com/fec7cf6e-d128-4040-ac92-2f5912b635f4/grid_0.png"
  },
  {
    prompt: "X-Ray Vision",
    link: "https://mj-gallery.com/fa894f9c-0bb5-4294-b20a-991594dfbf15/grid_0.png"
  },
  {
    prompt: "X-Ray Vision",
    link: "https://mj-gallery.com/bc3f1ecb-7404-4c27-ba31-91f3b793640b/grid_0.png"
  },
  {
    prompt: "Minecraft Dungeon",
    link: "https://mj-gallery.com/1077fdad-68e3-4fa1-ac86-2223df33f2b9/grid_0.png"
  },
  {
    prompt: "Minecraft Dungeon",
    link: "https://mj-gallery.com/d975542c-bdc7-4da0-aaa7-bc09f797c7de/grid_0.png"
  },
  {
    prompt: "Minecraft Dungeon",
    link: "https://mj-gallery.com/7efdea61-3c3d-4d76-9635-b887269d9c51/grid_0.png"
  },
  {
    prompt: "Minecraft Dungeon",
    link: "https://mj-gallery.com/75741a47-6305-4207-a9f4-c098264e1035/grid_0.png"
  },
  {
    prompt: "Minecraft Dungeon",
    link: "https://mj-gallery.com/408c2855-28be-4b6b-a2e9-fd7ed79a6de7/grid_0.png"
  },
  {
    prompt: "Minecraft Dungeon",
    link: "https://mj-gallery.com/0387ccb4-b0ba-4a00-a8a1-fc6998018fb1/grid_0.png"
  },
  {
    prompt: "Minecraft Dungeon",
    link: "https://mj-gallery.com/4c81593f-c13c-493e-bcc0-5d48c51790cb/grid_0.png"
  },
  {
    prompt: "Minecraft Dungeon",
    link: "https://mj-gallery.com/6355d081-7fc7-49f7-8fd0-4a3c5574ebaf/grid_0.png"
  },
  {
    prompt: "Minecraft Dungeon",
    link: "https://mj-gallery.com/4b3863e5-92b5-47c6-9370-019e57d34b83/grid_0.png"
  },
  {
    prompt: "Miyazaki Game of Thrones",
    link: "https://mj-gallery.com/9d3703e8-3d59-44ac-9ebf-cca28346aa9b/grid_0.png"
  },
  {
    prompt: "The Sopranos Anime",
    link: "https://mj-gallery.com/d5975e8c-5ec0-4b35-94de-7a8adbb118b8/grid_0.png"
  },
  {
    prompt: "Miyazaki Game of Thrones",
    link: "https://mj-gallery.com/21b973a2-e0b2-4fa5-b2d5-1f739c0f6c39/grid_0.png"
  },
  {
    prompt: "King Coroner",
    link: "https://mj-gallery.com/b1cb5d18-9d35-4ddd-9e47-5820cff05fe5/grid_0.png"
  },
  {
    prompt: "King Coroner",
    link: "https://mj-gallery.com/95b7c367-1a16-48d4-96e6-ac6c964ea46c/grid_0.png"
  },
  {
    prompt: "King Coroner",
    link: "https://mj-gallery.com/2cda96da-e727-4a4f-9dcb-283fe7caa2dc/grid_0.png"
  },
  {
    prompt: "Sailor Moon",
    link: "https://mj-gallery.com/fb7016b5-281c-493f-b243-e65ede6baad6/grid_0.png"
  },
  {
    prompt: "Band of Thieves",
    link: "https://mj-gallery.com/c5e97136-4401-4155-8d97-45c767561b71/grid_0.png"
  },
  {
    prompt: "The Hanged Man",
    link: "https://mj-gallery.com/249c90e6-5b82-42c5-890f-8af7b989ba95/grid_0.png"
  },
  {
    prompt: "Judgement",
    link: "https://mj-gallery.com/38834306-706b-4053-b4e2-580e9915c1ae/grid_0.png"
  },
  {
    prompt: "The Hanged Man",
    link: "https://mj-gallery.com/4f7cbd47-1315-4bd9-9398-b83ee12e3f68/grid_0.png"
  },
  {
    prompt: "Judgement",
    link: "https://mj-gallery.com/e978ca94-f1b8-44a7-9b28-75923fb3b28a/grid_0.png"
  },
  {
    prompt: "Chef Chicken Cooking Rice",
    link: "https://mj-gallery.com/7bd3a452-10ec-4c21-8d67-ff26083079ff/grid_0.png"
  },
  {
    prompt: "Chef Chicken Cooking Rice",
    link: "https://mj-gallery.com/11c5e956-ea2e-43ed-b389-383890bf637b/grid_0.png"
  },
  {
    prompt: "Galaxy in a Bottle",
    link: "https://mj-gallery.com/314d7697-5e31-495d-b518-14d9168c6c5b/grid_0.png"
  },
  {
    prompt: "Pits of Despair",
    link: "https://mj-gallery.com/1360c442-311b-4d8c-9cb2-07108583400a/grid_0.png"
  },
  {
    prompt: "Deep Sea Monster",
    link: "https://mj-gallery.com/72720bc9-404d-4524-9954-12d7cc32b2e8/grid_0.png"
  },
  {
    prompt: "Pits of Despair",
    link: "https://mj-gallery.com/4f8df3dd-0bca-4d76-9b2d-6421dc0db840/grid_0.png"
  },
  {
    prompt: "Stock Downspiral",
    link: "https://mj-gallery.com/63cfab63-d8d2-4f1e-b7d9-5487672ae361/grid_0.png"
  },
  {
    prompt: "Industrial Revolution",
    link: "https://mj-gallery.com/5a87e8f0-9ae5-408a-bae5-a37e4dc016d0/grid_0.png"
  },
  {
    prompt: "Alan Resnick Film",
    link: "https://mj-gallery.com/08e48ffc-3145-4fc8-8161-145dbf60f99f/grid_0.png"
  },
  {
    prompt: "Coffee at the End of the World",
    link: "https://mj-gallery.com/139c00fd-8f21-413c-922c-248f140e2fd1/grid_0.png"
  },
  {
    prompt: "Mr Rogers Horror",
    link: "https://mj-gallery.com/e932c2d3-5503-40e9-8bb2-50af71300649/grid_0.png"
  },
  {
    prompt: "Mr Rogers Horror",
    link: "https://mj-gallery.com/2c513c25-4499-4fa2-820c-055a510624d6/grid_0.png"
  },
  {
    prompt: "The Hanging Man",
    link: "https://mj-gallery.com/5e340632-feb0-4603-a040-a79b7d3cb6f2/grid_0.png"
  },
  {
    prompt: "Fire Breathing Toad",
    link: "https://mj-gallery.com/5dd7b606-61bb-4117-bf71-2a083bcac579/grid_0.png"
  },
  {
    prompt: "Fire Breathing Toad",
    link: "https://mj-gallery.com/eb338836-b152-45b1-9b76-2e05b4e1d194/grid_0.png"
  },
  {
    prompt: "Fire Breathing Toad",
    link: "https://mj-gallery.com/09137f88-8cf3-483f-aa9e-a32a41c195b6/grid_0.png"
  },
  {
    prompt: "Tiefling Battlemind",
    link: "https://mj-gallery.com/5d1a89cf-f40f-44a5-970c-1e0e8c12bdc1/grid_0.png"
  },
  {
    prompt: "Tiefling Battlemind",
    link: "https://mj-gallery.com/3f6d2dee-23e6-4b6b-86dc-a6aeec39aa09/grid_0.png"
  },
  {
    prompt: "Sensei Luigi",
    link: "https://mj-gallery.com/c644a318-d1e7-48a5-aa29-f039650e7ca6/grid_0.png"
  },
  {
    prompt: "Sensei Luigi",
    link: "https://mj-gallery.com/b7e06d0c-d43b-4031-814d-a6e24aaff969/grid_0.png"
  },
  {
    prompt: "Sensei Luigi",
    link: "https://mj-gallery.com/80767601-2f88-44ed-99d8-d81cf85622c4/grid_0.png"
  }
];

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

shuffle(initialCards);

const cards = document.querySelector(".cards");

initialCards.forEach((data) => {
  const card = new Card(data, "#card");
  const cardElement = card.generateCard();
  cards.prepend(cardElement);
})