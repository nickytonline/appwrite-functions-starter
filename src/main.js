import { Client } from 'node-appwrite';

// This is your Appwrite function
// It's executed each time we get a request
export default async ({ req, res, log, error }) => {
  // Why not try the Appwrite SDK?
  //
  // const client = new Client()
  //    .setEndpoint('https://cloud.appwrite.io/v1')
  //    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
  //    .setKey(process.env.APPWRITE_API_KEY);

  // You can log messages to the console
  log('Hello, Logsm Nick & Aditya!!!');

  // If something goes wrong, log an error
  error('Hello, Errors! Oh no!');

  // The `req` object contains the request data
  if (req.method === 'GET') {
    // Send a response with the res object helpers
    // `res.send()` dispatches a string back to the client
    // return res.send('Hello, World!', 200);
    // generate a random object of pokemon characters
    const pokemon = [
      {
        name: 'Pikachu',
        type: 'Electric',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
      },
      {
        name: 'Charizard',
        type: 'Fire',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
      }]

    return res.json(pokemon);
  }

  // `res.json()` is a handy helper for sending JSON
  return res.json({
    motto: 'Build Fast. Scale Big. All in One Place.',
    learn: 'https://appwrite.io/docs',
    connect: 'https://appwrite.io/discord',
    getInspired: 'https://builtwith.appwrite.io',
  });
};
