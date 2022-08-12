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
  },
  {
    prompt: "Origami Cannon",
    link: "https://mj-gallery.com/9b73d63d-2b38-4bc2-8a6b-ccf493a59b9c/grid_0.png"
  },
  {
    prompt: "Plague Doctor",
    link: "https://mj-gallery.com/eb1e081d-5de8-419f-bb81-192a9238ea60/grid_0.png"
  },
  {
    prompt: "Rocket Bow and Arrow",
    link: "https://mj-gallery.com/29c5aa7a-60bb-4169-856b-ab6c20c7dfd6/grid_0.png"
  },
  {
    prompt: "Zombie DJ",
    link: "https://mj-gallery.com/582cfce2-38ca-488c-9f37-ea04ca33036f/grid_0.png"
  },
  {
    prompt: "Zombie DJ",
    link: "https://mj-gallery.com/a30d273e-2346-4730-a953-508d17d2ffa3/grid_0.png"
  },
  {
    prompt: "Nuking the Moon",
    link: "https://mj-gallery.com/6b9c8730-8a3a-4962-bcaf-7125c86de51a/grid_0.png"
  },
  {
    prompt: "DJ End of the World",
    link: "https://mj-gallery.com/f529d563-9974-41a3-9b78-1dfe5ede4359/grid_0.png"
  },
  {
    prompt: "DJ End of the World",
    link: "https://mj-gallery.com/3e1d75ef-c14d-419f-82cd-9f74bd66966f/grid_0.png"
  },
  {
    prompt: "DJ End of the World",
    link: "https://mj-gallery.com/3096d2eb-7ed1-4ce4-9d01-2d580f83dd48/grid_0.png"
  },
  {
    prompt: "DJ End of the World",
    link: "https://mj-gallery.com/38b98a0a-ebe1-4d16-ac29-35f76a71d695/grid_0.png"
  },
  {
    prompt: "Ripping Face Off",
    link: "https://mj-gallery.com/3a48840d-e830-4a37-8d45-179d08c6683f/grid_0.png"
  },
  {
    prompt: "Crescendo of Violence",
    link: "https://mj-gallery.com/28113c17-114e-4f0a-a1eb-d083b0751666/grid_0.png"
  },
  {
    prompt: "King Wearing Crocs",
    link: "https://mj-gallery.com/74ed0510-edf2-4d0b-a6ad-b4fd823fb77e/grid_0.png"
  },
  {
    prompt: "Sneaker Heels",
    link: "https://mj-gallery.com/f806fd48-e5a4-459c-a9bc-7bb9c37b9b48/grid_0.png"
  },
  {
    prompt: "Sneaker Heels",
    link: "https://mj-gallery.com/42a255e1-882b-47ec-9a43-1a9dcb8390be/grid_0.png"
  },
  {
    prompt: "Acid Nightmares",
    link: "https://mj-gallery.com/0a8543bd-dc7e-451a-8c66-b7f5689dc22c/grid_0.png"
  },
  {
    prompt: "Convergence of Sun and a Black Hole",
    link: "https://mj-gallery.com/269f288a-cc3d-4419-9fe8-22d1dc0649d9/grid_0.png"
  },
  {
    prompt: "Face Melting Bass",
    link: "https://mj-gallery.com/8976354e-8be8-44bf-ab27-39927aa5d85d/grid_0.png"
  },
  {
    prompt: "Face Melting Bass",
    link: "https://mj-gallery.com/9e64ec80-19f9-4be1-8a55-c200118ea9ce/grid_0.png"
  },
  {
    prompt: "Ninja Lurking in Shadows Waiting to Kill King",
    link: "https://mj-gallery.com/efbb52a5-5715-4e41-83a8-a33207cbf51e/grid_0.png"
  },
  {
    prompt: "Archangel Ascended",
    link: "https://mj-gallery.com/dcf5b2af-cd5e-46e3-9b4e-1de83717e6a7/grid_0.png"
  },
  {
    prompt: "Kung Fu Panda",
    link: "https://mj-gallery.com/9e6e1d50-6a50-4a73-813f-d63b1d6eb18c/grid_0.png"
  },
  {
    prompt: "Cyberpunk Kungfu Panda Drunk as Hell",
    link: "https://mj-gallery.com/535e73b8-8a87-49a8-b9ff-cdf7c2d26e9f/grid_0.png"
  },
  {
    prompt: "Bearded Supervillian",
    link: "https://mj-gallery.com/26dab1f9-65ef-4e08-a6f1-75ced7f2c7fd/grid_0.png"
  },
  {
    prompt: "Cthulu Nightmare Sleep Paralysis Demon",
    link: "https://mj-gallery.com/0542c9f6-8f9e-42f1-abd4-35347da8c684/grid_0.png"
  },
  {
    prompt: "Cthulu Nightmare Sleep Paralysis Demon",
    link: "https://mj-gallery.com/936433af-679f-4623-824e-15cca56e1df9/grid_0.png"
  },
  {
    prompt: "Man Falling Through Music Notes Psychosis",
    link: "https://mj-gallery.com/092bcdcc-967e-4e4a-9437-cdfa6295c778/grid_0.png"
  },
  {
    prompt: "Cybernetic JFK Prepares for War",
    link: "https://mj-gallery.com/479da9a0-7a62-4a68-b667-854d1cf3734b/grid_0.png"
  },
  {
    prompt: "Kermit the Frog as a Zombie",
    link: "https://mj-gallery.com/e23e31a8-f4dc-4dc6-aadc-23e9ab27a8ec/grid_0.png"
  },
  {
    prompt: "Two Robots Merging Together",
    link: "https://mj-gallery.com/a2c07b3c-b34b-4144-903d-9b9a58ba57cc/grid_0.png"
  },
  {
    prompt: "Two Robots Merging Together",
    link: "https://mj-gallery.com/7105ec1d-f3f6-460b-aacd-1f74bfeb3593/grid_0.png"
  },
  {
    prompt: "Two Robots Merging Together",
    link: "https://mj-gallery.com/ad498ff0-0e31-4193-8b66-f21e9e44be12/grid_0.png"
  },
  {
    prompt: "Sci-Fi Futuristic Twister",
    link: "https://mj-gallery.com/1705f67c-b573-4806-8ac1-e1d351f9f322/grid_0.png"
  },
  {
    prompt: "Tim Burton's Acid Dream",
    link: "https://mj-gallery.com/eae0863d-17ae-4114-8667-38d2634bec00/grid_0.png"
  },
  {
    prompt: "Tim Burton's Acid Dream",
    link: "https://mj-gallery.com/efcf3682-baa3-424c-8be5-faef56ab6bfe/grid_0.png"
  },
  {
    prompt: "Tim Burton's Acid Dream",
    link: "https://mj-gallery.com/cd3a16f9-54fa-4f1e-9d0b-b022f95436cf/grid_0.png"
  },
  {
    prompt: "King Kitty, Lord of the Meat Sticks",
    link: "https://mj-gallery.com/ed638a9a-c66f-4c4d-9359-5b23765825fb/grid_0.png"
  },
  {
    prompt: "King of the Wicked",
    link: "https://mj-gallery.com/21cf687f-e06b-4143-be75-1f3fec1f71d8/grid_0.png"
  },
  {
    prompt: "King of the Wicked",
    link: "https://mj-gallery.com/f6aa2639-7bfa-445d-9113-c3543ae58384/grid_0.png"
  },
  {
    prompt: "Black Cat Yellow Eyes",
    link: "https://mj-gallery.com/fd052833-6e4a-4b37-8829-936725eb7489/grid_0.png"
  },
  {
    prompt: "Black Cat Yellow Eyes",
    link: "https://mj-gallery.com/978fcd68-eae8-4209-9dfd-1f4929df871c/grid_0.png"
  },
  {
    prompt: "The Wedding of the Bride and the Bastard",
    link: "https://mj-gallery.com/2df49c55-0489-42b6-beec-a8c6c0eb59f9/grid_0.png"
  },
  {
    prompt: "The Wedding of the Bride and the Bastard",
    link: "https://mj-gallery.com/06f0f11c-f43a-4a98-9145-4837e40b6318/grid_0.png"
  },
  {
    prompt: "The Wedding of the Bride and the Bastard",
    link: "https://mj-gallery.com/0b0d9ab1-b0e5-4e8f-ba45-eaf197a6b390/grid_0.png"
  },
  {
    prompt: "The Wedding of the Bride and the Bastard",
    link: "https://mj-gallery.com/b454f56e-ee1c-44cf-921a-6feb784db79c/grid_0.png"
  },
  {
    prompt: "Smoking a Mile Long Cigar",
    link: "https://mj-gallery.com/5d9c2cd8-7831-4bc2-9ec6-f04a30e3f562/grid_0.png"
  },
  {
    prompt: "Smoking a Mile Long Cigar",
    link: "https://mj-gallery.com/08549298-5613-4396-8d36-a3c98b6d7595/grid_0.png"
  },
  {
    prompt: "Rick and Morty Turned Acid Nightmare",
    link: "https://mj-gallery.com/7526d0d7-2422-46c2-ae18-61ecef529cf2/grid_0.png"
  },
  {
    prompt: "Rick and Morty Turned Acid Nightmare",
    link: "https://mj-gallery.com/d83ae9e2-6cf2-4d7a-9d18-67b529534d80/grid_0.png"
  },
  {
    prompt: "Rick and Morty Turned Acid Nightmare",
    link: "https://mj-gallery.com/c8ecb26a-1a2c-4a17-bf94-09c16f218378/grid_0.png"
  },
  {
    prompt: "Rick and Morty Turned Acid Nightmare",
    link: "https://mj-gallery.com/3d411cdc-e5c5-4f92-8b6f-035bb626f871/grid_0.png"
  },
  {
    prompt: "Self Portrait of Zeus Psychosis",
    link: "https://mj-gallery.com/1ab01d6a-a50d-42f7-b479-9490b22a55bf/grid_0.png"
  },
  {
    prompt: "Pit of Despair",
    link: "https://mj-gallery.com/b8d29d25-f36f-4eaf-9308-5225baafd518/grid_0.png"
  },
  {
    prompt: "New Run the Jewels Cover",
    link: "https://mj-gallery.com/6836ddb1-5a9f-4f47-8601-ea7368f65eed/grid_0.png"
  },
  {
    prompt: "New Run the Jewels Cover",
    link: "https://mj-gallery.com/b8517b3d-bd5c-4e76-b72d-be05621388d4/grid_0.png"
  },
  {
    prompt: "Run the Jewels 5",
    link: "https://mj-gallery.com/f0c6b8a5-b7a1-4e2a-ab89-79e14c3c9c71/grid_0.png"
  },
  {
    prompt: "Soldering Iron to the Face",
    link: "https://mj-gallery.com/7092009b-6ee2-4be6-93c3-c513153876f6/grid_0.png"
  },
  {
    prompt: "Cybernetic Korean Police",
    link: "https://mj-gallery.com/ce8a537c-7791-446d-bbcb-25e7f4de20c1/grid_0.png"
  },
  {
    prompt: "Corporate Hell",
    link: "https://mj-gallery.com/7e563f45-d1b7-47f8-b273-d8297839d767/grid_0.png"
  },
  {
    prompt: "Superhero Made Out of Stardust and Unicorn Glitter",
    link: "https://mj-gallery.com/3043cb29-2fe3-4240-8164-660007850d99/grid_0.png"
  },
  {
    prompt: "Demonic Uprising Against Robotic Regime",
    link: "https://mj-gallery.com/f25802eb-2823-4e1e-946d-e37b65df73b8/grid_0.png"
  },
  {
    prompt: "Demonic Uprising Against Robotic Regime",
    link: "https://mj-gallery.com/71e7be18-e179-49b4-bc9e-9533185886d6/grid_0.png"
  },
  {
    prompt: "Demonic Uprising Against Robotic Regime",
    link: "https://mj-gallery.com/f65b3674-75f4-4869-b95d-9539b169b366/grid_0.png"
  },
  {
    prompt: "Man Smiling Grimely After Destruction",
    link: "https://mj-gallery.com/07a5bbb9-bf39-4450-812c-5db51f06e117/grid_0.png"
  },
  {
    prompt: "Jake the Dog and Finn the Zombie",
    link: "https://mj-gallery.com/9cfc1e30-840b-4a58-a18f-875fb6288610/grid_0.png"
  },
  {
    prompt: "Superhero Made Out of Stardust and Unicorn Glitter",
    link: "https://mj-gallery.com/21ad9962-c894-4a56-b650-b110653dd325/grid_0.png"
  },
  {
    prompt: "Eye of Mordor from Space",
    link: "https://mj-gallery.com/0073d0e2-eaed-4244-9333-f926adcc7e93/grid_0.png"
  },
  {
    prompt: "Demonic Uprising Against Robotic Regime",
    link: "https://mj-gallery.com/b24f5f3f-21cc-48a6-a7cf-c34704519a3b/grid_0.png"
  },
  {
    prompt: "Eye of Mordor Clown",
    link: "https://mj-gallery.com/ebbe14c4-548f-4165-8a0e-25cc13064d00/grid_0.png"
  },
  {
    prompt: "Eye of Mordor Clown",
    link: "https://mj-gallery.com/741a0fd5-55bc-4858-97bd-6050451a3a9b/grid_0.png"
  },
  {
    prompt: "Indiana Jones in Phantom Menace",
    link: "https://mj-gallery.com/21c7b922-8401-4ddd-bf47-a87665cb26aa/grid_0.png"
  },
  {
    prompt: "Hazey Eyes Great Gatsby",
    link: "https://mj-gallery.com/f04d766e-9061-4829-8a2b-715c0b9eb9d7/grid_0.png"
  },
  {
    prompt: "Hazey Eyes Great Gatsby",
    link: "https://mj-gallery.com/114a6637-ae4c-4efa-9408-aad1dade8a0f/grid_0.png"
  },
  {
    prompt: "Bearded Thug with Baseball Hat and Microphone",
    link: "https://mj-gallery.com/6e36ff27-5433-4d0a-8a6d-646e09a476d7/grid_0.png"
  },
  {
    prompt: "Screaming into the Void",
    link: "https://mj-gallery.com/1bd3ff3b-ed27-4a01-878d-1dcfefc5d717/grid_0.png"
  },
  {
    prompt: "Screaming into the Void",
    link: "https://mj-gallery.com/a46a1674-5a01-485d-888d-482b6a71e375/grid_0.png"
  },
  {
    prompt: "Screaming into the Void",
    link: "https://mj-gallery.com/c6395682-2dbe-4216-8c68-3efc716e4713/grid_0.png"
  },
  {
    prompt: "Feather Hat Cigar Smoker",
    link: "https://mj-gallery.com/b8f9131b-aabf-48f1-a141-d0311e1cdbe1/grid_0.png"
  },
  {
    prompt: "Psychotic",
    link: "https://mj-gallery.com/33b4363c-3088-4db1-a8d5-7a1cf2e4f463/grid_0.png"
  },
  {
    prompt: "Joseph Joestar",
    link: "https://mj-gallery.com/f5f615a5-2a9a-41c4-a8fa-4281b7ae0f8a/grid_0.png"
  },
  {
    prompt: "Stoner Kitty",
    link: "https://mj-gallery.com/12c01841-98bd-49a9-b82d-b44e277d0978/grid_0.png"
  },
  {
    prompt: "Stoner Kitty",
    link: "https://mj-gallery.com/fb9dade6-645a-494d-81fb-43f54e9cb27c/grid_0.png"
  },
  {
    prompt: "Optimus Prime as a Stoner",
    link: "https://mj-gallery.com/ca6aa6e7-25e2-41c5-b175-aecccf9ff8d0/grid_0.png"
  },
  {
    prompt: "Dr Strange in the Evil Dead",
    link: "https://mj-gallery.com/592737b5-be61-45dc-9af5-c1a8b7835be1/grid_0.png"
  },
  {
    prompt: "Crying Clown Face Dollar Bill",
    link: "https://mj-gallery.com/717c6f91-8973-497f-ac80-b3a77a37a41e/grid_0.png"
  },
  {
    prompt: "Crying Clown Face Dollar Bill",
    link: "https://mj-gallery.com/e02bea96-5ae0-429a-90da-b25f3309a013/grid_0.png"
  },
  {
    prompt: "Slenderman Leading the US Military",
    link: "https://mj-gallery.com/92778974-2d22-482b-a414-f0bde74859f2/grid_0.png"
  },
  {
    prompt: "Drag Queen Transformer",
    link: "https://mj-gallery.com/3e5f60f3-c39b-48b6-aa0a-4ff87d265ec9/grid_0.png"
  },
  {
    prompt: "Drag Queen Transformer",
    link: "https://mj-gallery.com/16f307e5-6c00-4ffe-8144-72f96f65f757/grid_0.png"
  },
  {
    prompt: "Drag Queen Transformer",
    link: "https://mj-gallery.com/86455546-612c-47ca-bb10-4291f4c52c05/grid_0.png"
  },
  {
    prompt: "Crying Face Dollar Bill",
    link: "https://mj-gallery.com/b0280963-bd38-4645-8380-ae3aa77c0ff1/grid_0.png"
  },
  {
    prompt: "Crying Clown Face Dollar Bill",
    link: "https://mj-gallery.com/ae8c8b27-d834-4968-bd60-3b0142744136/grid_0.png"
  },
  {
    prompt: "Crying Clown Face Dollar Bill",
    link: "https://mj-gallery.com/0ab207e4-52bd-40ad-a4d4-65c106001765/grid_0.png"
  },
  {
    prompt: "Little Shop of Horrors",
    link: "https://mj-gallery.com/29cebe2f-d5c2-48ec-80bd-088706a44879/grid_0.png"
  },
  {
    prompt: "Little Shop of Horrors",
    link: "https://mj-gallery.com/cdb067cd-75f9-46e7-9ec8-5b6819e01548/grid_0.png"
  },
  {
    prompt: "Little Shop of Horrors",
    link: "https://mj-gallery.com/4916b32f-d3de-4098-beee-6659ff0289f3/grid_0.png"
  },
  {
    prompt: "Little Shop of Horrors",
    link: "https://mj-gallery.com/7f817597-caf9-4b0c-b78b-6c2e1b62f306/grid_0.png"
  },
  {
    prompt: "Little Shop of Horrors",
    link: "https://mj-gallery.com/ab4722cc-caf9-4870-8e18-7804d8618214/grid_0.png"
  },
  {
    prompt: "Little Shop of Horrors",
    link: "https://mj-gallery.com/dea1d527-da89-4414-b7c5-24d2d61177d3/grid_0.png"
  },
  {
    prompt: "Little Shop of Horrors",
    link: "https://mj-gallery.com/f006730f-c7b6-4323-946a-3055fde03c59/grid_0.png"
  },
  {
    prompt: "New York Subway",
    link: "https://mj-gallery.com/14360f9f-9505-492b-9d95-e8e5904cdbac/grid_0.png"
  },
  {
    prompt: "Cybernetic Rap Studio",
    link: "https://mj-gallery.com/2e326dc1-c41a-4772-a32d-f443eefbec79/grid_0.png"
  },
  {
    prompt: "My Homeboy, My Rotten Soldier",
    link: "https://mj-gallery.com/0ba5c6ab-b542-4c8c-88ca-3cbadf4ba9a6/grid_0.png"
  },
  {
    prompt: "High Vampiric Council",
    link: "https://mj-gallery.com/4c183c3e-bc78-4851-9b7c-9ade912418c3/grid_0.png"
  },
  {
    prompt: "High Vampiric Council",
    link: "https://mj-gallery.com/6c6ec262-6c1b-441b-b24c-9fea8cb859a9/grid_0.png"
  },
  {
    prompt: "High Vampiric Council",
    link: "https://mj-gallery.com/49689188-4584-4e67-8089-7f96e4de14cd/grid_0.png"
  },
  {
    prompt: "Heavy Set Bearded Man with Glasses",
    link: "https://mj-gallery.com/1a4db356-6de7-4595-9565-f6f8bff4fff7/grid_0.png"
  },
  {
    prompt: "Top Hat and Ghetto Gold Grills",
    link: "https://mj-gallery.com/c6e78d3c-c9ed-4fdf-8325-ca27e0fbff3d/grid_0.png"
  },
  {
    prompt: "Muppet Mugshot Prison",
    link: "https://mj-gallery.com/36cfb171-7f04-4b85-8dc0-8c717de13f6d/grid_0.png"
  },
  {
    prompt: "Muppet Mugshot Prison",
    link: "https://mj-gallery.com/d981dd3a-b4c0-4c9c-98f3-81ae04f1d750/grid_0.png"
  },
  {
    prompt: "Muppet Mugshot Prison",
    link: "https://mj-gallery.com/fb181435-0f42-4454-a320-374b44a709b6/grid_0.png"
  },
  {
    prompt: "Muppet Mugshot Prison",
    link: "https://mj-gallery.com/f60c95bd-4ca5-4fed-9b71-445f33a00677/grid_0.png"
  },
  {
    prompt: "Muppet Mugshot Prison",
    link: "https://mj-gallery.com/b23ccde7-6836-4d21-8bf8-cb3f7ab8a996/grid_0.png"
  },
  {
    prompt: "Muppet Mugshot Prison",
    link: "https://mj-gallery.com/b9ce2d05-c54a-48b5-a476-21eb490eff89/grid_0.png"
  },
  {
    prompt: "Muppet Mugshot Prison",
    link: "https://mj-gallery.com/7afd8b64-d8cc-4225-ab5a-82de05c551be/grid_0.png"
  },
  {
    prompt: "Muppet Mugshot Prison",
    link: "https://mj-gallery.com/fd5c3c6e-be68-4b9b-9891-b8f952cb4f7c/grid_0.png"
  },
  {
    prompt: "Muppet Mugshot Prison",
    link: "https://mj-gallery.com/349e53ea-b950-4acb-b766-e9b72c7478ae/grid_0.png"
  },
  {
    prompt: "Muppet Mugshot Prison",
    link: "https://mj-gallery.com/4c418f06-d66e-4fc5-afa2-02e792cc380d/grid_0.png"
  },
  {
    prompt: "Muppet Mugshot Prison",
    link: "https://mj-gallery.com/2f89dad1-1f18-44db-8d2b-9fdce4729c3e/grid_0.png"
  },
  {
    prompt: "Muppet Mugshot Prison",
    link: "https://mj-gallery.com/968fa156-a717-43f3-a5bd-68a6dd74f567/grid_0.png"
  },
  {
    prompt: "The Birth of LSD",
    link: "https://mj-gallery.com/9533ddf1-339d-40c4-badd-6e950ea8702a/grid_0.png"
  },
  {
    prompt: "The Birth of LSD",
    link: "https://mj-gallery.com/cd50e89f-fea6-4ae2-9f8e-67276bdcb2f1/grid_0.png"
  },
  {
    prompt: "The Birth of LSD",
    link: "https://mj-gallery.com/5ab32cbc-05d9-4ba9-9cff-61374d44329e/grid_0.png"
  },
  {
    prompt: "The Birth of LSD",
    link: "https://mj-gallery.com/319ecf89-7379-4c5f-818e-5757678da0c4/grid_0.png"
  },
  {
    prompt: "Muppet Mugshot Prison",
    link: "https://mj-gallery.com/b4e49c3d-2131-4415-ac21-db3670a39d43/grid_0.png"
  },
  {
    prompt: "Hacker Breaking the Mainframe",
    link: "https://mj-gallery.com/73ea7660-8346-4768-9e2a-f5c47aee5a85/grid_0.png"
  },
  {
    prompt: "Muppet Mugshot Prison",
    link: "https://mj-gallery.com/0f3dce51-0bdf-48f0-9b81-599d96b5741a/grid_0.png"
  },
  {
    prompt: "Two Midgets on the Sides of a Giant Oaf",
    link: "https://mj-gallery.com/e08b28ec-b719-46dc-95f7-911d54c3bdc0/grid_0.png"
  },
  {
    prompt: "Studio Ghibli",
    link: "https://mj-gallery.com/cefa9521-1f15-42ba-ac65-6eb1d6af83e4/grid_0.png"
  },
  {
    prompt: "Studio Ghibli Creature",
    link: "https://mj-gallery.com/3870152e-9e2a-4211-92a5-74d774a7d880/grid_0.png"
  },
  {
    prompt: "Face Melting Bass",
    link: "https://mj-gallery.com/fc806b3b-538a-4c86-9291-50a4a7f0eb59/grid_0.png"
  },
  {
    prompt: "Face Melting Bass",
    link: "https://mj-gallery.com/99451c1a-4491-482b-b43e-0c4931711498/grid_0.png"
  },
  {
    prompt: "Face Melting Bass",
    link: "https://mj-gallery.com/13a8da33-3ed3-4019-90f8-9b6e54d31439/grid_0.png"
  },
  {
    prompt: "Face Melting Bass",
    link: "https://mj-gallery.com/94384890-dd80-497d-b0e1-ddc328810425/grid_0.png"
  },
  {
    prompt: "Face Melting Bass",
    link: "https://mj-gallery.com/b0b968dc-0dd8-43e0-9959-74bbc9d89838/grid_0.png"
  },
  {
    prompt: "Face Melting Bass",
    link: "https://mj-gallery.com/02dec688-01cd-42e3-8631-44493cb83000/grid_0.png"
  },
  {
    prompt: "Face Melting Bass",
    link: "https://mj-gallery.com/e6fe7231-a275-48ba-baeb-9df1f71f08ba/grid_0.png"
  },
  {
    prompt: "Face Melting Bass",
    link: "https://mj-gallery.com/aac70a52-7099-428b-9bad-fd32184f5470/grid_0.png"
  },
  {
    prompt: "Ludicrous Amounts of Applesauce",
    link: "https://mj-gallery.com/2cd6939a-ada4-4072-9962-02ddebcd3ce9/grid_0.png"
  },
  {
    prompt: "Ludicrous Amounts of Applesauce",
    link: "https://mj-gallery.com/f821e0ac-73d1-4fd8-807b-61d4d1cf03b6/grid_0.png"
  },
  {
    prompt: "Lil Wayne Anime",
    link: "https://mj-gallery.com/332e26c9-19dd-4603-aadb-b787fed2565a/grid_0.png"
  },
  {
    prompt: "Icecube in Hell",
    link: "https://mj-gallery.com/aaf920e3-3667-4cc5-b322-0b5938f7496b/grid_0.png"
  },
  {
    prompt: "Sneaker Heel",
    link: "https://mj-gallery.com/f783b09c-24d6-4eb2-88e7-770145089c50/grid_0.png"
  },
  {
    prompt: "Love Potion",
    link: "https://mj-gallery.com/b70a6fcb-a3bf-43e2-bf58-c6ec5d91cbe2/grid_0.png"
  },
  {
    prompt: "Love Potion",
    link: "https://mj-gallery.com/1bf0b2fc-a0bb-4a2c-89d5-74437ebcefc5/grid_0.png"
  },
  {
    prompt: "Plasmid Overflowing",
    link: "https://mj-gallery.com/f15a7bfe-1a74-443a-9c31-7961a5e78876/grid_0.png"
  },
  {
    prompt: "Plasmid Overflowin",
    link: "https://mj-gallery.com/9e71f76f-09f4-4cea-b276-ba5632033ca7/grid_0.png"
  },
  {
    prompt: "Bioshock Plasmid",
    link: "https://mj-gallery.com/72c8bb3e-f460-4788-9256-4d282da6e967/grid_0.png"
  },
  {
    prompt: "Bioshock Plasmid",
    link: "https://mj-gallery.com/b3125b30-d887-4f31-893b-87449d5c95f9/grid_0.png"
  },
  {
    prompt: "Introspection on Insanity",
    link: "https://mj-gallery.com/fa5fba00-0af1-433a-a2a1-47d43d989448/grid_0.png"
  },
  {
    prompt: "Spaceship Salesman",
    link: "https://mj-gallery.com/806ccf94-f160-4724-a7c9-8e5faa3d57b2/grid_0.png"
  },
  {
    prompt: "Spaceship Salesman",
    link: "https://mj-gallery.com/9f00c345-bf2c-4ac5-98ea-ffb892019f39/grid_0.png"
  },
  {
    prompt: "Spaceship Salesman",
    link: "https://mj-gallery.com/fde528eb-ce8b-4c37-adca-28e60474b31a/grid_0.png"
  },
  {
    prompt: "Leaves of Grass",
    link: "https://mj-gallery.com/40d3136b-0b86-4f8a-8023-c0309d78e36b/grid_0.png"
  },
  {
    prompt: "Spaceship Salesman",
    link: "https://mj-gallery.com/f977870a-995b-471d-bbff-a4e93c3724f3/grid_0.png"
  },
  {
    prompt: "Spaceship Salesman",
    link: "https://mj-gallery.com/88aad875-e78f-4bc4-bf5d-52ac69eb4034/grid_0.png"
  },
  {
    prompt: "Underlings Crawl to Master",
    link: "https://mj-gallery.com/bec0a9f6-ba15-40ce-af5f-491465d290bc/grid_0.png"
  },
  {
    prompt: "Interstellar Enterprise",
    link: "https://mj-gallery.com/b8c75334-53b2-4c81-96c2-52e38e004d0e/grid_0.png"
  },
  {
    prompt: "Underlings Crawl to Master",
    link: "https://mj-gallery.com/8cc9cdb8-262b-45f6-9b09-cb252a6110dd/grid_0.png"
  },
  {
    prompt: "Skeleton Fortune Teller",
    link: "https://mj-gallery.com/2b137200-04ee-4568-8a90-68b6ea3ed6f2/grid_0.png"
  },
  {
    prompt: "Mars Farmer",
    link: "https://mj-gallery.com/e6c79fbb-5f15-4a19-914e-c1d9c926bb8c/grid_0.png"
  },
  {
    prompt: "Mars Farmer",
    link: "https://mj-gallery.com/b9d77647-ddcc-4239-922d-046a0577197f/grid_0.png"
  },
  {
    prompt: "Mars Attacks",
    link: "https://mj-gallery.com/c6ab05c0-a80d-4b2a-8299-84d41e289579/grid_0.png"
  },
  {
    prompt: "Death Metal",
    link: "https://mj-gallery.com/4a845098-6b91-4366-8330-32413f16eb59/grid_0.png"
  },
  {
    prompt: "Death Metal",
    link: "https://mj-gallery.com/75b3cb00-a89e-4387-b674-dd519109653e/grid_0.png"
  },
  {
    prompt: "Mars Attacks",
    link: "https://mj-gallery.com/eace8081-7c31-4e44-825c-91d70836901b/grid_0.png"
  },
  {
    prompt: "Mirror 1000 Years into the Future",
    link: "https://mj-gallery.com/43f8bc28-0756-41ea-8ca7-f6d7cdfd3d5f/grid_0.png"
  },
  {
    prompt: "Wish You Were Here Zombie",
    link: "https://mj-gallery.com/cf8e14c6-caa5-404f-89b8-619d2ff50474/grid_0.png"
  },
  {
    prompt: "Cyberpunk Doomfist",
    link: "https://mj-gallery.com/72b26a44-c7b0-4d89-9edc-cfe601dd12a2/grid_0.png"
  },
  {
    prompt: "It's Always Sunny in Philidelphia",
    link: "https://mj-gallery.com/be3166b8-e487-4b17-bac6-5085a972899b/grid_0.png"
  },
  {
    prompt: "It's Always Sunny in Philidelphia",
    link: "https://mj-gallery.com/59a3dac2-044c-436f-9038-4ceda0816a5c/grid_0.png"
  },
  {
    prompt: "Doomfist in the Style of Salvador Dali",
    link: "https://mj-gallery.com/53516bfd-2248-478e-ae60-0d6d344ec7f4/grid_0.png"
  },
  {
    prompt: "Echo League of Legends",
    link: "https://mj-gallery.com/f5adf7a5-34f2-48e7-858b-a5087c663fc0/grid_0.png"
  },
  {
    prompt: "Echo Through a Time Bomb",
    link: "https://mj-gallery.com/354ff346-3841-4417-811d-e4800474b0bc/grid_0.png"
  },
  {
    prompt: "Echo Through a Time Bomb",
    link: "https://mj-gallery.com/3d9e8e50-bd19-4eb1-abc8-b4f1ba98e2b9/grid_0.png"
  },
  {
    prompt: "Cyberpunk Doomfist",
    link: "https://mj-gallery.com/7869f473-1d7b-4e6a-816a-f72f52a675d7/grid_0.png"
  },
  {
    prompt: "Echo Through a Time Bomb",
    link: "https://mj-gallery.com/6cd5a357-4958-4c3f-9f6a-739b7d05cb57/grid_0.png"
  },
  {
    prompt: "Echo League of Legends",
    link: "https://mj-gallery.com/83326a0d-f436-4582-81ff-99ff77d81cbc/grid_0.png"
  },
  {
    prompt: "Echo League of Legends",
    link: "https://mj-gallery.com/f065fcee-2480-482d-9233-2796d410fd98/grid_0.png"
  },
  {
    prompt: "Echo Throwing a Time Bomb",
    link: "https://mj-gallery.com/aed56011-bf64-497d-9565-a3d2b6cdf679/grid_0.png"
  },
  {
    prompt: "Echo Throwing a Time Bomb",
    link: "https://mj-gallery.com/494cd2ff-7c09-497f-a208-620f893630a3/grid_0.png"
  },
  {
    prompt: "Awaiting Betrayal",
    link: "https://mj-gallery.com/a84a8780-c504-4bca-9a2d-fc7350919d76/grid_0.png"
  },
  {
    prompt: "Poisoned Apple",
    link: "https://mj-gallery.com/ab5830da-208c-4d78-bbf0-622e796bff67/grid_0.png"
  },
  {
    prompt: "Heart in Dismay",
    link: "https://mj-gallery.com/1339658f-f678-4d1d-9112-a2bae17d01c9/grid_0.png"
  },
  {
    prompt: "Pie Oh My",
    link: "https://mj-gallery.com/56afc14b-b770-497e-9987-4cccb5f03de3/grid_0.png"
  },
  {
    prompt: "Pie Oh My",
    link: "https://mj-gallery.com/ea988118-f2d9-4822-984a-99c52dcc5a94/grid_0.png"
  },
  {
    prompt: "Death of Soddom and Gomorrah",
    link: "https://mj-gallery.com/0adde534-7d7b-4135-bb53-705001639375/grid_0.png"
  },
  {
    prompt: "Orange Cat White Belly",
    link: "https://mj-gallery.com/37de2caa-c483-483f-8b9c-d31556726484/grid_0.png"
  },
  {
    prompt: "Orange Cat White Belly",
    link: "https://mj-gallery.com/1bed962b-d38f-42e5-860f-55c200bde105/grid_0.png"
  },
  {
    prompt: "Orange Cat White Belly",
    link: "https://mj-gallery.com/ef830095-9afa-4b8f-ade6-ab11c20558b8/grid_0.png"
  },
  {
    prompt: "Death of Soddom and Gomorrah",
    link: "https://mj-gallery.com/2d84d823-56ed-4841-af4f-996bee414bf3/grid_0.png"
  },
  {
    prompt: "Baking Bread Campfire",
    link: "https://mj-gallery.com/91797a6b-b028-4acf-983c-a16e26af226e/grid_0.png"
  },
  {
    prompt: "Tony Soprano Eating",
    link: "https://mj-gallery.com/14fa78fb-032c-4e1e-ad6a-66ddf20bde4e/grid_0.png"
  },
  {
    prompt: "Tony Soprano Eating",
    link: "https://mj-gallery.com/05445249-fc44-43ae-a7c8-155f31b72af4/grid_0.png"
  },
  {
    prompt: "Breath of the Wild",
    link: "https://mj-gallery.com/d49a7396-eb7d-4d64-96ee-a2badc934647/grid_0.png"
  },
  {
    prompt: "Calico Cartoon Cat",
    link: "https://mj-gallery.com/bb7ac1d0-43e2-428f-b852-33958e8f4fa6/grid_0.png"
  },
  {
    prompt: "Calico Cartoon Cat",
    link: "https://mj-gallery.com/6d821470-928e-4cab-a92e-4d54a8eea3f7/grid_0.png"
  },
  {
    prompt: "Calico Cartoon Cat",
    link: "https://mj-gallery.com/57f2c8b8-5141-40b6-8d61-3d144b46e8c9/grid_0.png"
  },
  {
    prompt: "Taxman",
    link: "https://mj-gallery.com/80d44de1-ea4b-4c54-b1e9-8e943631f018/grid_0.png"
  },
  {
    prompt: "Russian Invasion",
    link: "https://mj-gallery.com/a3d75630-0b08-46fe-bfbc-2be4cb7933fe/grid_0.png"
  },
  {
    prompt: "Taxman",
    link: "https://mj-gallery.com/48a18c8b-7648-44e8-98e6-1c1dee82a426/grid_0.png"
  },
  {
    prompt: "Taxman",
    link: "https://mj-gallery.com/cd3d67ce-2b21-4c0e-8a55-1b224671b6d7/grid_0.png"
  },
  {
    prompt: "Hacker Competition",
    link: "https://mj-gallery.com/7c6f8048-1d7b-4f1e-8587-d220661b13d4/grid_0.png"
  },
  {
    prompt: "Hacker Competition",
    link: "https://mj-gallery.com/25219002-e9d9-46d1-8762-8fd7be8589f3/grid_0.png"
  },
  {
    prompt: "Prohibition",
    link: "https://mj-gallery.com/0118fcdf-6f71-4110-834d-8d865102630c/grid_0.png"
  },
  {
    prompt: "Monster Olympics",
    link: "https://mj-gallery.com/b4124863-62e8-49e9-b2c2-bc7b42b6ab4a/grid_0.png"
  },
  {
    prompt: "Prohibition",
    link: "https://mj-gallery.com/a15a3a94-25a5-4db3-b830-d7306566d87a/grid_0.png"
  },
  {
    prompt: "Hacker Warfare",
    link: "https://mj-gallery.com/c40ccb42-318b-430f-86a8-cf6802d6605b/grid_0.png"
  },
  {
    prompt: "Hacker Warfare",
    link: "https://mj-gallery.com/0382036a-2d97-4847-9278-73113b3745f6/grid_0.png"
  },
  {
    prompt: "Taxman",
    link: "https://mj-gallery.com/5d154490-f124-4059-930c-6b436bcd5b47/grid_0.png"
  },
  {
    prompt: "Crippling Gut Pain",
    link: "https://mj-gallery.com/c2c53559-7a20-43c0-8532-a419b6520c18/grid_0.png"
  },
  {
    prompt: "Crippling Gut Pain",
    link: "https://mj-gallery.com/225c858d-5e11-4f57-a437-e272ba9c1bd9/grid_0.png"
  },
  {
    prompt: "Dominating Your Fears",
    link: "https://mj-gallery.com/0e8bf4a3-4578-4017-b133-864f6f965fc0/grid_0.png"
  },
  {
    prompt: "Monster Olympics",
    link: "https://mj-gallery.com/4359536c-4d23-4dbc-838e-164ecc7a4867/grid_0.png"
  },
  {
    prompt: "FBI Raid",
    link: "https://mj-gallery.com/32eaf287-ac28-46ce-bdc9-1d220ed6d34e/grid_0.png"
  },
  {
    prompt: "Monster Olympics",
    link: "https://mj-gallery.com/e645e3ef-5638-40ad-b572-a78b91d234c5/grid_0.png"
  },
  {
    prompt: "Monster Olympics",
    link: "https://mj-gallery.com/2197508a-76ca-4449-9992-c1fb97162dd3/grid_0.png"
  },
  {
    prompt: "Textbook Creep",
    link: "https://mj-gallery.com/28d9c634-4b5b-471f-9a5a-295caafadf36/grid_0.png"
  },
  {
    prompt: "It Lurks in the Sewers",
    link: "https://mj-gallery.com/36e0cd3a-f594-441a-a6b5-d041bb95d80f/grid_0.png"
  },
  {
    prompt: "It Lurks in the Sewers",
    link: "https://mj-gallery.com/97da980e-8676-4f9f-a2e8-1c9d529e4a71/grid_0.png"
  },
  {
    prompt: "It Lurks in the Sewers",
    link: "https://mj-gallery.com/664ce387-0a9e-4dd6-b27d-6e02c811684f/grid_0.png"
  },
  {
    prompt: "It Lurks in the Sewers",
    link: "https://mj-gallery.com/de9a06e0-91d7-45a9-abb5-5d50f5f33a06/grid_0.png"
  },
  {
    prompt: "It Lurks in the Sewers",
    link: "https://mj-gallery.com/c485f59d-2b5d-4c04-836f-e8a5ba4a3832/grid_0.png"
  },
  {
    prompt: "It Lurks in the Sewers",
    link: "https://mj-gallery.com/bbeef154-a38f-4b5b-8c89-5edf240aa860/grid_0.png"
  },
  {
    prompt: "It Lurks in the Sewers",
    link: "https://mj-gallery.com/bcc80ad5-9cb1-461d-a65d-45f05667f90e/grid_0.png"
  },
  {
    prompt: "FBI Raid",
    link: "https://mj-gallery.com/66a21cc8-e214-4224-9544-5e51218215ee/grid_0.png"
  },
  {
    prompt: "Textbook Creep",
    link: "https://mj-gallery.com/93b8718d-b0e0-4b1b-b553-31a6e48c5428/grid_0.png"
  },
  {
    prompt: "Defending a Monster",
    link: "https://mj-gallery.com/7a5cd92d-a248-4c61-bc77-9c5a64be4d7c/grid_0.png"
  },
  {
    prompt: "Gold Teeth",
    link: "https://mj-gallery.com/00f1b606-521c-4bc5-b320-5c11dc079d21/grid_0.png"
  },
  {
    prompt: "Best Time to Wear a Striped Sweater",
    link: "https://mj-gallery.com/b0c749bf-0d1e-4f1a-a2fa-866ee95186da/grid_0.png"
  },
  {
    prompt: "Killer Clowns from Space",
    link: "https://mj-gallery.com/4003c45b-8b7f-4858-8fb2-77b39e12b3ad/grid_0.png"
  },
  {
    prompt: "Killer Clowns from Space",
    link: "https://mj-gallery.com/ea51742f-384f-4afa-832c-75681b2a1a73/grid_0.png"
  },
  {
    prompt: "Anime Warfare",
    link: "https://mj-gallery.com/f630b6d9-0ce1-4b24-821c-9754b9221a28/grid_0.png"
  },
  {
    prompt: "Anime Warfare",
    link: "https://mj-gallery.com/81f299b7-ed58-40f1-bdc6-ad796df3266b/grid_0.png"
  },
  {
    prompt: "Obsessive Nerd",
    link: "https://mj-gallery.com/e5f5389a-4904-4be0-b0c4-f01d08c49329/grid_0.png"
  },
  {
    prompt: "Robot Casino Floor Manager",
    link: "https://mj-gallery.com/27bd4085-c453-466e-b084-e0a024fa84dc/grid_0.png"
  },
  {
    prompt: "Robot Casino Floor Manager",
    link: "https://mj-gallery.com/4fdfd398-e955-470b-8edf-6957605789b8/grid_0.png"
  },
  {
    prompt: "Robot Casino Floor Manager",
    link: "https://mj-gallery.com/eb10ae69-183a-4c06-8b1b-986a69db5bb2/grid_0.png"
  },
  {
    prompt: "Robot Casino Floor Manager",
    link: "https://mj-gallery.com/b456f008-4b4b-4d1e-8b9f-802e0cffe5f6/grid_0.png"
  },
  {
    prompt: "Killer Clowns from Space",
    link: "https://mj-gallery.com/7baed3f5-507e-4f92-8fde-3e3c09c8ba68/grid_0.png"
  },
  {
    prompt: "Robot Casino Floor Manager",
    link: "https://mj-gallery.com/40095bc5-21af-42f6-84af-25bb9d52c72b/grid_0.png"
  },
  {
    prompt: "Obsessive Nerd",
    link: "https://mj-gallery.com/49e4f688-f803-4f80-b70d-29cc3a0c8609/grid_0.png"
  },
  {
    prompt: "Obsessive Nerd",
    link: "https://mj-gallery.com/d3e2a833-799e-4207-b0c3-59fc1ad8624b/grid_0.png"
  },
  {
    prompt: "Robot Casino Floor Manager",
    link: "https://mj-gallery.com/825a9954-3f80-45b6-bfc2-5121164a91cd/grid_0.png"
  },
  {
    prompt: "Bender Going on a Bender",
    link: "https://mj-gallery.com/f9f8b16f-fec7-4247-baeb-645c80d12a3e/grid_0.png"
  },
  {
    prompt: "Bender Going on a Bender",
    link: "https://mj-gallery.com/bf776fe7-6c03-4307-8a3f-01b587dc7f36/grid_0.png"
  },
  {
    prompt: "Bender Going on a Bender",
    link: "https://mj-gallery.com/33cdfaab-411e-46b0-aa7b-c1cd983c1f8f/grid_0.png"
  },
  {
    prompt: "Bender Going on a Bender",
    link: "https://mj-gallery.com/68670dda-44e2-4d88-bca6-00710dd7a994/grid_0.png"
  },
  {
    prompt: "Bender Going on a Bender",
    link: "https://mj-gallery.com/dab4dc94-c5b5-46bc-99af-aed9268e2da9/grid_0.png"
  },
  {
    prompt: "Richard and Mortimer",
    link: "https://mj-gallery.com/3a7e22f8-7ef1-4991-96ce-eb3a2cc44732/grid_0.png"
  },
  {
    prompt: "Richard and Mortimer",
    link: "https://mj-gallery.com/cf5e529b-4d93-44bd-b3af-798f645ab4ce/grid_0.png"
  },
  {
    prompt: "Richard and Mortimer",
    link: "https://mj-gallery.com/ce231d9b-e746-49c2-af74-f40d5d12a002/grid_0.png"
  },
  {
    prompt: "Richard and Mortimer",
    link: "https://mj-gallery.com/05e35bfe-a135-4615-9395-637375acb179/grid_0.png"
  },
  {
    prompt: "Melon Monster",
    link: "https://mj-gallery.com/a90943b7-edc4-49d9-9e4e-c322cf4e8c37/grid_0.png"
  },
  {
    prompt: "Melon Monster",
    link: "https://mj-gallery.com/07221161-32cf-4a85-b9a8-aa2a854274c5/grid_0.png"
  },
  {
    prompt: "Futurama",
    link: "https://mj-gallery.com/a01b62fd-5976-4e7a-8ff0-8242bc4c8945/grid_0.png"
  },
  {
    prompt: "Richard and Mortimer",
    link: "https://mj-gallery.com/2dddb749-bdf0-4bb7-8078-6525dd1b1ee0/grid_0.png"
  },
  {
    prompt: "Richard and Mortimer",
    link: "https://mj-gallery.com/7d722ada-148a-4375-b56a-bf5e17d1fc22/grid_0.png"
  },
  {
    prompt: "Futurama",
    link: "https://mj-gallery.com/c6dd3321-b05d-4b38-b730-6bcb3b5bbba6/grid_0.png"
  },
  {
    prompt: "Futurama",
    link: "https://mj-gallery.com/c64a872f-7b0c-464c-b242-c88481059c21/grid_0.png"
  },
  {
    prompt: "Going Gorilla in Paris",
    link: "https://mj-gallery.com/17799f18-629d-4932-95fa-f6c87707ed9b/grid_0.png"
  },
  {
    prompt: "If My Dog Loved Me as Much as I Love Him",
    link: "https://mj-gallery.com/dbaf4e2f-0fc0-4392-b455-03a02b027338/grid_0.png"
  },
  {
    prompt: "Real Life Puppies",
    link: "https://mj-gallery.com/ed0327c3-a75c-46a6-84c6-e1a509198231/grid_0.png"
  },
  {
    prompt: "Futurama",
    link: "https://mj-gallery.com/45383426-8388-408f-8368-db4eea041b96/grid_0.png"
  },
  {
    prompt: "Futurama",
    link: "https://mj-gallery.com/ac25364e-c87a-45dd-b992-f26af45c5605/grid_0.png"
  },
  {
    prompt: "Walrus Theme Park",
    link: "https://mj-gallery.com/d20986b7-50f5-4a0d-9f2e-e6ea50b4bd60/grid_0.png"
  },
  {
    prompt: "Tightrope Skyscraper",
    link: "https://mj-gallery.com/a4ca3592-67e1-4232-817c-a97f18525b5f/grid_0.png"
  },
  {
    prompt: "Going Gorilla in Paris",
    link: "https://mj-gallery.com/acbf3931-6a98-4d6f-b5bc-ceb72a912136/grid_0.png"
  },
  {
    prompt: "Ski Mask tha Slump God",
    link: "https://mj-gallery.com/0913be41-cd70-4574-83b3-4edaf77128f6/grid_0.png"
  },
  {
    prompt: "Runaway Snowman",
    link: "https://mj-gallery.com/f1a08055-890c-47a7-be12-c8bc1dba8bed/grid_0.png"
  },
  {
    prompt: "Coastal Escape",
    link: "https://mj-gallery.com/cd4113c2-8d71-48be-947a-a727c51695b7/grid_0.png"
  },
  {
    prompt: "Runaway Snowman",
    link: "https://mj-gallery.com/ece46b3d-28eb-43ed-836a-8bfe9d96cf28/grid_0.png"
  },
  {
    prompt: "Death from Above",
    link: "https://mj-gallery.com/0b8b68df-5b71-473a-9597-a82b2ed9c230/grid_0.png"
  },
  {
    prompt: "Death from Above",
    link: "https://mj-gallery.com/6aaef2af-ce6c-441f-9693-e72569ae9643/grid_0.png"
  },
  {
    prompt: "Claw Machine with Bombs",
    link: "https://mj-gallery.com/25dbd31c-9ba3-4436-b41b-de7a31559296/grid_0.png"
  },
  {
    prompt: "Alien Claw Machine",
    link: "https://mj-gallery.com/90a31bbf-16db-406d-a196-fa1056c5bbf6/grid_0.png"
  },
  {
    prompt: "Cosmic Charcuterie Board",
    link: "https://mj-gallery.com/a7ffeb21-7b55-4b55-b736-a816c69babbd/grid_0.png"
  },
  {
    prompt: "Cosmic Charcuterie Board",
    link: "https://mj-gallery.com/d4356b58-af71-4942-af52-ec3db58a5447/grid_0.png"
  },
  {
    prompt: "Cosmic Charcuterie Board",
    link: "https://mj-gallery.com/00f8871f-39c1-47ca-a279-3b71c4ec21b9/grid_0.png"
  },
  {
    prompt: "Alien Vending Machine",
    link: "https://mj-gallery.com/bde7355f-2958-4970-a578-de86c1bf7d2d/grid_0.png"
  },
  {
    prompt: "Alien Vending Machine",
    link: "https://mj-gallery.com/e8140227-8059-4526-b718-67561ba1d4a5/grid_0.png"
  },
  {
    prompt: "Bubble Gum Bomb Machine",
    link: "https://mj-gallery.com/fa50c136-7497-4d1b-94be-a034ad48decc/grid_0.png"
  },
  {
    prompt: "Dirt Pie",
    link: "https://mj-gallery.com/62319443-0228-414e-89a2-e4e6d65fe98c/grid_0.png"
  },
  {
    prompt: "Alien Vending Machine",
    link: "https://mj-gallery.com/37015970-3108-4cc6-ad02-46aa571ab381/grid_0.png"
  },
  {
    prompt: "Cajun Cooking",
    link: "https://mj-gallery.com/c6adc5ef-ceaa-4701-ba8c-de075bb5c4e1/grid_0.png"
  },
  {
    prompt: "Cajun Cooking",
    link: "https://mj-gallery.com/6b73d0c1-f7bc-45fb-ad66-6509fd2bfe9c/grid_0.png"
  },
  {
    prompt: "Southern Hospitality",
    link: "https://mj-gallery.com/7115d088-d59c-4065-9ee7-e3a0d3aab906/grid_0.png"
  },
  {
    prompt: "Internet Virus",
    link: "https://mj-gallery.com/8830cb3c-8a16-49a2-b931-4df182b3a39d/grid_0.png"
  },
  {
    prompt: "Internet Virus",
    link: "https://mj-gallery.com/d477ef87-2133-4638-954e-c212a2588aa9/grid_0.png"
  },
  {
    prompt: "Internet Virus",
    link: "https://mj-gallery.com/6af4a29c-4cd5-472f-b222-17bdc5240f6b/grid_0.png"
  },
  {
    prompt: "Robot Being Hacked",
    link: "https://mj-gallery.com/4a138d85-41ac-4eda-8ef4-2e4b893542e9/grid_0.png"
  },
  {
    prompt: "Opium Den",
    link: "https://mj-gallery.com/eb1663aa-165e-4cf4-8458-c02dbfe37721/grid_0.png"
  },
  {
    prompt: "Weed Farmer",
    link: "https://mj-gallery.com/2f2f9f79-4822-4505-9969-49a046dd5ea9/grid_0.png"
  },
  {
    prompt: "Weed Farmer",
    link: "https://mj-gallery.com/f750d423-5569-4000-99ce-b3c8f8132dc3/grid_0.png"
  },
  {
    prompt: "Opium Den",
    link: "https://mj-gallery.com/08c77848-6aeb-4819-b1c5-6fdda2dfb4a9/grid_0.png"
  },
  {
    prompt: "Opium Den",
    link: "https://mj-gallery.com/5361fbd2-7770-4cff-b846-0fae07534edc/grid_0.png"
  },
  {
    prompt: "Opium Den",
    link: "https://mj-gallery.com/ae93b190-0d9e-4a82-a82b-6cf5c534ad12/grid_0.png"
  },
  {
    prompt: "Internet Virus",
    link: "https://mj-gallery.com/40a22684-d35f-42e7-8bd5-0c4851a05fdd/grid_0.png"
  },
  {
    prompt: "Robot Being Hacked",
    link: "https://mj-gallery.com/26d22df1-1b5b-49be-b187-ec12ceee7188/grid_0.png"
  },
  {
    prompt: "Internet Virus",
    link: "https://mj-gallery.com/4421963f-c662-44e3-85f7-c719ee12d0de/grid_0.png"
  },
  {
    prompt: "Opium Den",
    link: "https://mj-gallery.com/83e62d78-f8ee-48df-827e-3b0b86b4ff53/grid_0.png"
  },
  {
    prompt: "Weed Farmer",
    link: "https://mj-gallery.com/f2b6ae95-9617-4963-bb4b-15c79d7e3971/grid_0.png"
  },
  {
    prompt: "Speaking to Mother DMT",
    link: "https://mj-gallery.com/46c4005e-6332-4439-84fb-5bb00c34a937/grid_0.png"
  },
  {
    prompt: "Speaking to Mother DMT",
    link: "https://mj-gallery.com/dff4e867-9b63-4bdf-bdb4-e24bc02399ac/grid_0.png"
  },
  {
    prompt: "Speaking to Mother DMT",
    link: "https://mj-gallery.com/cf07379a-9fa7-4f15-bb4d-f9420cf93143/grid_0.png"
  },
  {
    prompt: "Speaking to Mother DMT",
    link: "https://mj-gallery.com/7b8a862c-0fa3-4e5b-97bb-5f409a03e1a5/grid_0.png"
  },
  {
    prompt: "Crosshair Conundrum",
    link: "https://mj-gallery.com/3a0cf862-2989-499f-a32a-4cf0215fc35c/grid_0.png"
  },
  {
    prompt: "Crosshair Conundrum",
    link: "https://mj-gallery.com/56d90da1-4965-45b3-9bc2-2fb3b9210cb9/grid_0.png"
  },
  {
    prompt: "Blast Off",
    link: "https://mj-gallery.com/44ef7bd9-ff34-4d0d-97b4-3abeb6b35502/grid_0.png"
  },
  {
    prompt: "Tribal Tattoo",
    link: "https://mj-gallery.com/e54907d4-63ad-4081-8078-ec74fefc828d/grid_0.png"
  },
  {
    prompt: "40000 Leagues Under the Sea",
    link: "https://mj-gallery.com/6a5ef2fc-8dc2-4c39-83ab-28f652d25ebe/grid_0.png"
  },
  {
    prompt: "Counter Strike",
    link: "https://mj-gallery.com/1d61e796-79a7-4b56-aed8-fe4e300ecee0/grid_0.png"
  },
  {
    prompt: "Counter Strike",
    link: "https://mj-gallery.com/67778151-6912-41fa-b4ca-fc73fbfa1ecb/grid_0.png"
  },
  {
    prompt: "Speaking to Mother DMT",
    link: "https://mj-gallery.com/66b8c4b6-43c4-424c-a42d-2cfbbf0f396a/grid_0.png"
  },
  {
    prompt: "Speaking to Mother DMT",
    link: "https://mj-gallery.com/058f5362-0aa1-4e6b-ace5-3cd54e139976/grid_0.png"
  },
  {
    prompt: "Conundrum of Body and Spirit",
    link: "https://mj-gallery.com/3ebaa2d7-9e4e-44c8-9aaf-1f6803466fff/grid_0.png"
  },
  {
    prompt: "Conundrum of Body and Spirit",
    link: "https://mj-gallery.com/e428681f-b431-43f7-8c93-5b177b129f3a/grid_0.png"
  },
  {
    prompt: "Conundrum of Body and Spirit",
    link: "https://mj-gallery.com/9cd4944c-c8c5-470a-82e7-c029f46d4f44/grid_0.png"
  },
  {
    prompt: "Conundrum of Body and Spirit",
    link: "https://mj-gallery.com/f6b022c6-32c7-4e74-9a8c-7a7a060274c3/grid_0.png"
  },
  {
    prompt: "Conundrum of Body and Spirit",
    link: "https://mj-gallery.com/d2f3a98c-d024-4d78-ad05-317952948303/grid_0.png"
  },
  {
    prompt: "Conundrum of Body and Spirit",
    link: "https://mj-gallery.com/7c4a5246-a171-4591-b6c6-7cdac282d45a/grid_0.png"
  },
  {
    prompt: "Emotional Thievery",
    link: "https://mj-gallery.com/425af834-03bd-475c-b9b9-ebdff5f80c00/grid_0.png"
  },
  {
    prompt: "Mechanical Watch",
    link: "https://mj-gallery.com/44ee00ba-e871-4ee5-857e-16f26189d746/grid_0.png"
  },
  {
    prompt: "Portal to A New Dimension",
    link: "https://mj-gallery.com/8c5bcf26-38d1-49e9-9301-ec6ad1bbd483/grid_0.png"
  },
  {
    prompt: "Portal to A New Dimension",
    link: "https://mj-gallery.com/7ff0a308-7858-49ab-bd90-cd075ad6fdcb/grid_0.png"
  },
  {
    prompt: "Portal to A New Dimension",
    link: "https://mj-gallery.com/6321d988-d0de-4a1e-96f2-89e2f3d62ec7/grid_0.png"
  },
  {
    prompt: "Portal to A New Dimension",
    link: "https://mj-gallery.com/1ba98ba7-5b7e-49bd-8ad0-224afd599b96/grid_0.png"
  },
  {
    prompt: "GMO Monster",
    link: "https://mj-gallery.com/e6fb14b9-4d27-42da-a243-89058f300195/grid_0.png"
  },
  {
    prompt: "GMO Monster",
    link: "https://mj-gallery.com/f0928567-a70d-4a1d-b570-26ea782ef110/grid_0.png"
  },
  {
    prompt: "GMO Monster",
    link: "https://mj-gallery.com/a23f98dc-0c01-4de4-aeba-71d1112be20f/grid_0.png"
  },
  {
    prompt: "GMO Monster",
    link: "https://mj-gallery.com/f9f3e69f-9ad6-4030-be4f-6e8a15aa23a3/grid_0.png"
  },
  {
    prompt: "Alien Bones",
    link: "https://mj-gallery.com/0c4be308-d2d7-4ccf-8ebd-b87ad3376de8/grid_0.png"
  },
  {
    prompt: "Alien Bones",
    link: "https://mj-gallery.com/3960fa85-7c05-4e6d-b582-eee06a830ab2/grid_0.png"
  },
  {
    prompt: "GMO Monster",
    link: "https://mj-gallery.com/0fe99450-9a5f-4b3c-8439-0b2905329ed0/grid_0.png"
  },
  {
    prompt: "Alien Bones",
    link: "https://mj-gallery.com/6675a1c6-d57b-44b9-bcc3-450751fbf659/grid_0.png"
  },
  {
    prompt: "Alien Bones",
    link: "https://mj-gallery.com/f175e0e8-3117-406d-b0a5-5a9664c272ab/grid_0.png"
  },
  {
    prompt: "Mysteries of the Universe",
    link: "https://mj-gallery.com/2b596ad5-e224-43b7-9299-3b674c4a1d07/grid_0.png"
  },
  {
    prompt: "Mysteries of the Universe",
    link: "https://mj-gallery.com/76ff9b12-610d-4d3c-82df-71ed7076584c/grid_0.png"
  },
  {
    prompt: "Mysteries of the Universe",
    link: "https://mj-gallery.com/2e181471-a0ec-4154-885d-f0ef4a0086c5/grid_0.png"
  },
  {
    prompt: "Mysteries of the Universe",
    link: "https://mj-gallery.com/75303d71-42b5-4505-bed6-8bcca7c3c7e8/grid_0.png"
  },
  {
    prompt: "Mysteries of the Universe",
    link: "https://mj-gallery.com/ba23bc76-8e5f-454b-adaf-af60f0856a43/grid_0.png"
  },
  {
    prompt: "Mysteries of the Universe",
    link: "https://mj-gallery.com/553621d6-1368-437c-9aca-a4cb08f569f5/grid_0.png"
  },
  {
    prompt: "Mysteries of the Universe",
    link: "https://mj-gallery.com/6a8b8e9d-ff73-4380-a42f-a54f4b462f9b/grid_0.png"
  },
  {
    prompt: "Mysteries of the Universe",
    link: "https://mj-gallery.com/7071a913-f80d-44ff-8f8b-4e9cf6f186b5/grid_0.png"
  },
  {
    prompt: "Mysteries of the Universe",
    link: "https://mj-gallery.com/536050ad-0717-48a6-94d8-049ed0d41e20/grid_0.png"
  },
  {
    prompt: "Mysteries of the Universe",
    link: "https://mj-gallery.com/f2947427-13e6-4d02-afad-801aeeb18818/grid_0.png"
  },
  {
    prompt: "Mysteries of the Universe",
    link: "https://mj-gallery.com/a2de8326-a0aa-4cea-8480-536db361d05c/grid_0.png"
  },
  {
    prompt: "Speaking to the Immortal One",
    link: "https://mj-gallery.com/0a6ad276-ffb4-407c-95bf-2ff1cd65c449/grid_0.png"
  },
  {
    prompt: "Speaking to the Immortal One",
    link: "https://mj-gallery.com/8645fb86-41d5-4d0b-a913-5dad63e877cd/grid_0.png"
  },
  {
    prompt: "Speaking to the Immortal One",
    link: "https://mj-gallery.com/1a94e8d9-9234-43bc-831f-bcce27d4cb86/grid_0.png"
  },
  {
    prompt: "Speaking to the Immortal One",
    link: "https://mj-gallery.com/a4832d37-da76-48d2-88e5-7919be3a747e/grid_0.png"
  },
  {
    prompt: "Speaking to the Immortal One",
    link: "https://mj-gallery.com/d21c2cc3-ec76-4365-81ba-292a388a1cee/grid_0.png"
  },
  {
    prompt: "Speaking to the Immortal One",
    link: "https://mj-gallery.com/4b447e7e-b98e-4bc6-80c8-df164554d078/grid_0.png"
  },
  {
    prompt: "Speaking to the Immortal One",
    link: "https://mj-gallery.com/02383aad-d702-4107-83f0-9975bca9779e/grid_0.png"
  },
  {
    prompt: "Speaking to the Immortal One",
    link: "https://mj-gallery.com/ca48bc59-c772-4db8-83b5-9ef88620f923/grid_0.png"
  },
  {
    prompt: "Shakespeare",
    link: "https://mj-gallery.com/121b1dc4-3fe2-4455-bd03-a1169d112ba4/grid_0.png"
  },
  {
    prompt: "Shakespeare",
    link: "https://mj-gallery.com/e8563544-e766-4336-8815-bde6597d53b5/grid_0.png"
  },
  {
    prompt: "Wonder Showzen",
    link: "https://mj-gallery.com/f0d4dc74-97bd-417c-9362-634c5f3ef666/grid_0.png"
  },
  {
    prompt: "Wonder Showzen",
    link: "https://mj-gallery.com/6239344f-b703-4fa4-a14f-5705b0a4909b/grid_0.png"
  },
  {
    prompt: "Wonder Showzen",
    link: "https://mj-gallery.com/dea9b2ae-fe76-4d2e-99eb-2740c310e66b/grid_0.png"
  },
  {
    prompt: "Wonder Showzen",
    link: "https://mj-gallery.com/baa762f3-23ac-4816-98d8-94db79b2348d/grid_0.png"
  },
  {
    prompt: "Wonder Showzen",
    link: "https://mj-gallery.com/3a8ee6fd-a52f-469b-832f-561013dbcc24/grid_0.png"
  },
  {
    prompt: "Wonder Showzen",
    link: "https://mj-gallery.com/84929b8f-d45a-4854-9d8c-d94b42ada6ea/grid_0.png"
  },
  {
    prompt: "Glorzo",
    link: "https://mj-gallery.com/4aa8049d-3fb2-4f51-9511-924157b03070/grid_0.png"
  },
  {
    prompt: "Emperor Zurg",
    link: "https://mj-gallery.com/5fc7cdd7-9aac-4318-8385-8b044735c0fc/grid_0.png"
  },
  {
    prompt: "Soul Bonding",
    link: "https://mj-gallery.com/04808b95-606f-4aa5-833f-077bebf40dd4/grid_0.png"
  },
  {
    prompt: "Freaky Orange",
    link: "https://mj-gallery.com/bd297674-7a43-4474-b201-09781105d129/grid_0.png"
  },
  {
    prompt: "Wondernaut",
    link: "https://mj-gallery.com/1c96c169-0e9b-433c-b95f-9eee497a9714/grid_0.png"
  },
  {
    prompt: "Wondernaut",
    link: "https://mj-gallery.com/c488f219-7d32-4ab5-8d8e-b688c3046e9b/grid_0.png"
  },
  {
    prompt: "Emperor Zurg",
    link: "https://mj-gallery.com/ca64cac8-4f45-4763-837a-fc3b0d254998/grid_0.png"
  },
  {
    prompt: "Emperor Zurg",
    link: "https://mj-gallery.com/25ce44e9-8894-4377-b521-805440638390/grid_0.png"
  },
  {
    prompt: "Freaky Orange",
    link: "https://mj-gallery.com/d858fab4-13a6-4c3d-8a58-0c4b8bc88aa0/grid_0.png"
  },
  {
    prompt: "Wondernaut",
    link: "https://mj-gallery.com/53c09f4d-906b-4993-ba0a-5263204df882/grid_0.png"
  },
  {
    prompt: "Wondernaut",
    link: "https://mj-gallery.com/065d3611-80ef-4675-88e4-39b07fbe53d1/grid_0.png"
  },
  {
    prompt: "Zurg vs. Lightyear",
    link: "https://mj-gallery.com/86e00327-2c6a-49a4-aacd-282a0e93137c/grid_0.png"
  },
  {
    prompt: "Zurg vs. Lightyear",
    link: "https://mj-gallery.com/a2813307-62af-4bed-8e97-e68e20e6e12d/grid_0.png"
  },
  {
    prompt: "Wondernaut",
    link: "https://mj-gallery.com/7d4f2afd-04a4-4c88-aff5-ce9ecbac83d0/grid_0.png"
  },
  {
    prompt: "Wondernaut",
    link: "https://mj-gallery.com/6ce9e823-cf97-453b-b24c-69090c247e20/grid_0.png"
  },
  {
    prompt: "Wondernaut",
    link: "https://mj-gallery.com/19df9b8e-b4f2-47fe-8cc9-01a30626b227/grid_0.png"
  },
  {
    prompt: "Wondernaut",
    link: "https://mj-gallery.com/013efaf9-51e8-4a81-b619-d061b04cb7ac/grid_0.png"
  },
  {
    prompt: "Zurg vs. Lightyear",
    link: "https://mj-gallery.com/418c74a7-0d1f-43b0-8da9-21bb7b2bb61d/grid_0.png"
  },
  {
    prompt: "Purple Villian",
    link: "https://mj-gallery.com/47b81846-db2e-49a3-b4af-acb1ccac6e06/grid_0.png"
  },
  {
    prompt: "Purple Villian",
    link: "https://mj-gallery.com/d03fc611-f41e-4d4c-b58c-47b022abb742/grid_0.png"
  },
  {
    prompt: "Purple Villian",
    link: "https://mj-gallery.com/64a3b458-88de-4f18-b1d1-5a7166a4ca39/grid_0.png"
  },
  {
    prompt: "Purple Villian",
    link: "https://mj-gallery.com/7330dd09-5ffb-4b3a-accf-5aea12da0957/grid_0.png"
  },
  {
    prompt: "Purple Villian",
    link: "https://mj-gallery.com/91338035-186f-4713-bc02-2ae765549aab/grid_0.png"
  },
  {
    prompt: "Zurg vs. Lightyear",
    link: "https://mj-gallery.com/7a68af59-fcdf-43ea-aeee-faf24b043ee5/grid_0.png"
  },
  {
    prompt: "Purple Villian",
    link: "https://mj-gallery.com/84f69c85-eb4e-4741-a78a-20695f48dcf2/grid_0.png"
  },
  {
    prompt: "Danger Mouse",
    link: "https://mj-gallery.com/fba2b6de-c3fd-44d2-8a42-513c4938e392/grid_0.png"
  },
  {
    prompt: "Danger Mouse",
    link: "https://mj-gallery.com/94030361-4780-474b-8ab7-bc126ad7c94b/grid_0.png"
  },
  {
    prompt: "Zed's Dead",
    link: "https://mj-gallery.com/8a59c353-405f-4a24-b038-e0bb2b0bf767/grid_0.png"
  },
  {
    prompt: "Zombie Round Glasses",
    link: "https://mj-gallery.com/09cb6ce7-ee16-48be-95b2-b1f719639f85/grid_0.png"
  },
  {
    prompt: "Zombie with Curly Moustache",
    link: "https://mj-gallery.com/273c54ef-0da8-4a14-8cac-e42513b1ec02/grid_0.png"
  },
  {
    prompt: "Zombie Round Glasses with Beard",
    link: "https://mj-gallery.com/e98d39bf-3d4d-4ebd-8873-26938a3d3b5c/grid_0.png"
  },
  {
    prompt: "Drunk in Space",
    link: "https://mj-gallery.com/a23cb2cf-08bd-4e2d-93aa-7a138c4dad03/grid_0.png"
  },
  {
    prompt: "Two Idiots",
    link: "https://mj-gallery.com/d10296c7-bd88-4487-abff-15bbb0c3dafb/grid_0.png"
  },
  {
    prompt: "Two Degenerates",
    link: "https://mj-gallery.com/256a6828-2967-457d-a068-b581bd030448/grid_0.png"
  },
  {
    prompt: "Two Idiots",
    link: "https://mj-gallery.com/ae46e7e3-935b-4388-8059-a58a11c33943/grid_0.png"
  },
  {
    prompt: "Two Idiots",
    link: "https://mj-gallery.com/75c26549-d62f-471a-b67b-eb33fb3b3995/grid_0.png"
  },
  {
    prompt: "Two Idiots",
    link: "https://mj-gallery.com/1569d235-b507-453c-944c-509a65611d15/grid_0.png"
  },
  {
    prompt: "Big Brother Watching",
    link: "https://mj-gallery.com/a463ef22-7a95-471e-8895-6070061294ab/grid_0.png"
  },
  {
    prompt: "Big Brother Watching",
    link: "https://mj-gallery.com/476d0a5e-082f-4df6-a5f6-eff4fc5c5b53/grid_0.png"
  },
  {
    prompt: "Drowning in Guilt",
    link: "https://mj-gallery.com/f3c5c34a-c27d-4506-bb49-c2fdf7c24a24/grid_0.png"
  },
  {
    prompt: "Drowning in Guilt",
    link: "https://mj-gallery.com/197fa432-8a33-489d-a902-3404dc1119c8/grid_0.png"
  },
  {
    prompt: "Big Brother Watching",
    link: "https://mj-gallery.com/839e0e62-94e2-4e57-8e3d-4a1700320b34/grid_0.png"
  },
  {
    prompt: "Two Idiots",
    link: "https://mj-gallery.com/461ddc9a-8c8d-46e7-a7ff-1034efe6405a/grid_0.png"
  },
  {
    prompt: "Drowning in Guilt",
    link: "https://mj-gallery.com/02eec7f4-b624-4000-b9b4-8e127bd1281b/grid_0.png"
  },
  {
    prompt: "Drowning in Guilt",
    link: "https://mj-gallery.com/f37154f3-fc7b-48e3-a159-608f3ddc2b16/grid_0.png"
  },
  {
    prompt: "Two Degenerates",
    link: "https://mj-gallery.com/4b5186e3-6293-4f85-b847-3498db6da058/grid_0.png"
  },
  {
    prompt: "Two Degenerates",
    link: "https://mj-gallery.com/d6de9755-c9aa-4603-9aa7-820f859d69c3/grid_0.png"
  },
  {
    prompt: "Two Degenerates",
    link: "https://mj-gallery.com/87b1ca71-04fc-41c4-ab71-1db64ff361a8/grid_0.png"
  },
  {
    prompt: "Skeleton Boss",
    link: "https://mj-gallery.com/b56f6d4b-ea3e-4ea4-be34-53015c923eb9/grid_0.png"
  },
  {
    prompt: "Dinosaur DJ",
    link: "https://mj-gallery.com/2eb86234-9791-40b9-a6cc-7966e3d8a80c/grid_0.png"
  },
  {
    prompt: "Skeleton Boss",
    link: "https://mj-gallery.com/ae091840-1e01-4505-8ec4-48fe3ae515e6/grid_0.png"
  },
  {
    prompt: "Dinosaur DJ",
    link: "https://mj-gallery.com/d65e57bd-8c27-424a-a2c7-570f6c709ced/grid_0.png"
  },
  {
    prompt: "Dinosaur DJ",
    link: "https://mj-gallery.com/52241b3b-7c63-4a21-863e-4874c1c5de20/grid_0.png"
  },
  {
    prompt: "Dinosaur DJ",
    link: "https://mj-gallery.com/7cdd64f7-9848-42f6-9d88-3f6f8b0cf631/grid_0.png"
  },
  {
    prompt: "Dinosaur DJ",
    link: "https://mj-gallery.com/1b2d4e6a-782c-4f7f-997d-88a7d09b2a3f/grid_0.png"
  },
  {
    prompt: "Catfish Blackened with Grits",
    link: "https://mj-gallery.com/f2a5ee75-4451-418f-a0ad-e064798ce33b/grid_0.png"
  },
  {
    prompt: "Let the Bass Drop",
    link: "https://mj-gallery.com/ad9cc009-3a09-4974-ad92-e4f41fbd8774/grid_0.png"
  },
  {
    prompt: "Let the Bass Drop",
    link: "https://mj-gallery.com/31244a46-bfad-4c92-a75f-1724b835c99d/grid_0.png"
  },
  {
    prompt: "Let the Bass Drop",
    link: "https://mj-gallery.com/6c9ac410-f448-41f9-a4c3-7afe24f32842/grid_0.png"
  },
  {
    prompt: "Let the Bass Drop",
    link: "https://mj-gallery.com/ded849ed-8eca-4465-8df8-59d9bfc18cb3/grid_0.png"
  },
  {
    prompt: "Let the Bass Drop",
    link: "https://mj-gallery.com/72d45beb-7791-4c44-b610-fd67254f4478/grid_0.png"
  },
  {
    prompt: "Let the Bass Drop",
    link: "https://mj-gallery.com/dcdbe8e6-3d9c-4346-9cc7-c5bdaae0bd1e/grid_0.png"
  },
  {
    prompt: "Let the Bass Drop",
    link: "https://mj-gallery.com/310ef12b-31ce-42f8-9c45-7cb3281025bf/grid_0.png"
  },
  {
    prompt: "Let the Bass Drop",
    link: "https://mj-gallery.com/f9da2127-e100-4ec6-aff3-b42a2c499030/grid_0.png"
  },
  {
    prompt: "Cyborg Walrus",
    link: "https://mj-gallery.com/260ffbfc-d357-4342-a592-e16f89447247/grid_0.png"
  },
  {
    prompt: "Cyborg Walrus",
    link: "https://mj-gallery.com/ede8a7fc-90ec-4c72-b375-31914e80200f/grid_0.png"
  },
  {
    prompt: "Cyborg Walrus",
    link: "https://mj-gallery.com/fe4638c9-c01c-4cde-99da-903b7d971b54/grid_0.png"
  },
  {
    prompt: "Cyborg Walrus",
    link: "https://mj-gallery.com/9f36de58-6c9e-4bc8-a9f4-eef924abc429/grid_0.png"
  },
  {
    prompt: "Cyborg Walrus",
    link: "https://mj-gallery.com/74b14f5c-aa7a-44f2-8c1f-a36fab091c13/grid_0.png"
  },
  {
    prompt: "Cyborg Walrus",
    link: "https://mj-gallery.com/434c5743-72ca-4b2e-933b-65836d6f7b29/grid_0.png"
  },
  {
    prompt: "Cyborg Walrus",
    link: "https://mj-gallery.com/38d2a23e-fd53-4ca3-b973-01e9c1918313/grid_0.png"
  },
  {
    prompt: "Dubstep",
    link: "https://mj-gallery.com/1f38a27b-995a-431c-bfca-b0ad2e059ca6/grid_0.png"
  },
  {
    prompt: "Dubstep",
    link: "https://mj-gallery.com/bfc8e4e7-2408-46a9-86b0-6ea7bcce59ef/grid_0.png"
  },
  {
    prompt: "Dubstep",
    link: "https://mj-gallery.com/6d882df8-8f5b-43da-a2d8-cc42a2880f69/grid_0.png"
  },
  {
    prompt: "Dubstep",
    link: "https://mj-gallery.com/dd12b42e-9546-4c6c-afb5-b6ed81dfbd77/grid_0.png"
  },
  {
    prompt: "Dubstep",
    link: "https://mj-gallery.com/ee7b0086-0f50-413e-af5d-d5a69e482643/grid_0.png"
  },
  {
    prompt: "Speaker Pouring Bass",
    link: "https://mj-gallery.com/12891b91-84ae-476a-a6f4-13ffa30e76be/grid_0.png"
  },
  {
    prompt: "Speaker Pouring Bass",
    link: "https://mj-gallery.com/f2015729-1fef-4fab-925a-45b774d4c0d4/grid_0.png"
  },
  {
    prompt: "Big Brother Watching",
    link: "https://mj-gallery.com/f2015729-1fef-4fab-925a-45b774d4c0d4/grid_0.png"
  }
];

console.log(initialCards.length);

const fishImages = [
  {
    link: "https://mj-gallery.com/773ed323-1b78-4785-84a0-36488da0f7d3/grid_0.png"
  },
  {
    link: "https://mj-gallery.com/7e4f4a5f-d777-4f73-b7b8-09a49106fb2b/grid_0.png"
  },
  {
    link: "https://mj-gallery.com/b7214b27-1dff-44e2-bc37-ad3c7ebda26a/grid_0.png"
  },
  {
    link: "https://mj-gallery.com/7250843a-a2ea-44a3-b455-258568cee147/grid_0.png"
  },
  {
    link: "https://mj-gallery.com/c91bc28d-924e-42c0-bd99-2b4e6af3a6ca/grid_0.png"
  },
  {
    link: "https://mj-gallery.com/70660070-c870-491e-a224-7938ab1fbe71/grid_0.png"
  }
]

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

let projectCount = 0;
const leftArrow = document.querySelector(".fa-arrow-left");
const rightArrow = document.querySelector(".fa-arrow-right");

function checkArrows(num) {
  if (num === 0) {
    leftArrow.setAttribute("style", "opacity: 0;");
    leftArrow.setAttribute("disabled", "");
  } else if (num > 0) {
    leftArrow.setAttribute("style", "opacity: 1;");
    leftArrow.removeAttribute("disabled");
  };
  let index = Math.ceil(initialCards.length / 55);
  if ((num + 1) >= (index)) {
    rightArrow.setAttribute("style", "opacity: 0;");
    rightArrow.setAttribute("disabled", "");
  } else if ((num + 1 ) < (index)) {
    rightArrow.setAttribute("style", "opacity: 1;");
    rightArrow.removeAttribute("disabled");
  }
}

checkArrows(projectCount);

const createCards = (num) => {
  cards.innerHTML = "";
  let cardCount = 0;
  if (num > 0) {
    cardCount = num * 150;
  }
  let tracker = cardCount + 150;
  let newCards = initialCards.slice(cardCount, tracker);

  newCards.forEach((data) => {
    const card = new Card(data, "#card");
    const cardElement = card.generateCard();
    cards.append(cardElement);
  })
}

createCards(projectCount);

function clickRightArrow() {
  projectCount++;
  checkArrows(projectCount);
  createCards(projectCount);
}

function clickLeftArrow() {
  projectCount--;
  checkArrows(projectCount);
  createCards(projectCount);
}

leftArrow.addEventListener("click", clickLeftArrow);
rightArrow.addEventListener("click", clickRightArrow);

const refreshButton = document.querySelector(".refresh");

function handleRefreshButton() {
  cards.innerHTML = "";
  projectCount = 0;
  sortCounter = 0;
  checkArrows(projectCount);
  shuffle(initialCards);
  createCards(projectCount);
}

refreshButton.addEventListener("click", handleRefreshButton);

let sortCounter = 0;
const sortButton = document.querySelector(".sort");

function handleSortButton() {
  cards.innerHTML = "";
  projectCount = 0;
  checkArrows(projectCount);
  if (sortCounter === 1) {
    initialCards.reverse();
    sortCounter--;
  }
  else if (sortCounter === 0) {
    initialCards.sort(function (a, b) {
      if (a.prompt < b.prompt) {
        return -1;
      }
      if (a.prompt > b.prompt) {
        return 1;
      }
      return 0;
    });
    sortCounter++;
    }
  createCards(projectCount);
}

sortButton.addEventListener("click", handleSortButton);