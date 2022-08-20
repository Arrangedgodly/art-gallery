# ARTOFFISH - The Art Gallery Powered by AI

## About the Page
- **ARTOFFISH** (pronounced: Art - uh - fish) is a play on the word Artificial. I liked the double entendre enough though that I couldn't help but overload the AI with Fish related prompts to fill the header with "Art of Fish"
- Images are generated via a premium Midjourney subscription and logged in a collection JSON file. JavaScript classes are utilized to generate the 'cards' on the page based on the JSON content.
- **New Additions**
  * *Pagination*
    - Pages are loaded discretely in the background simulateously. The user is displayed 90 images at a time, but once all images have been loaded, you can change between pages without entirely refreshing the content on the page
  * *Refresh Button*
    - Allows you to randomize the order the images are displayed across all pages. This function is also discretely called every time the page is refreshed, to ensure users get a fresh experience on each revisit
  * *Sort Button*
    - Has 2 alternative click functions. On first click, the images are sorted via their prompts A-Z. On second click, they are sorted Z-A
  * *Search Bar*
    - Whenever a user types in the search, the page live updates to only include images with the user's query inside of the prompts.

## Ideas for the Future
- *Public Voting*
  * I would like to eventually add a function to the site to allow users to publically vote on which images they think the AI performed the best on. Then, I could extend the sort button functionality to include sorting by highest voted, lowest voted, or no votes / votes
- *Grid Customizations*
  * create a button that allows users to view the cards in a grid or make an infinite scroll experience where the Prompts are visible without needing to hover / click any images
- *Themes*
  * create more extensive color schemes than the standard grey gradient and white background the site currently utilizes
- *Sharing*
  * allow users to share links to individual images in a more streamlined manner
- *User Submissions*
  * create an alternative page extension that allows users to submit images via a prompt and link set up
- *Category Tags*
  * add an additional data category to all of the images adding keyword categories, allowing the search feature to group like images together easier
  
 ## Live Link
 - You can find the art gallery live [here](https://artoffish.graydonwasil.com/)
