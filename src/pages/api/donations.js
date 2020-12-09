var sampleDonations = [
  {
    id: "1",
    unit: "blades",
    quantity: "111",
    division: "Nether",
    name: "Diamond Swords",
  },
  {
    id: "2",
    unit: "picks",
    quantity: "20",
    division: "Overworld",
    name: "Diamond Pickaxes",
  },
  {
    id: "3",
    unit: "pearls",
    quantity: "30",
    division: "Overworld",
    name: "Ender Pearls",
  },
];


/**
 *  @description
 *  This how an API Route is defined in Next.JS.
 *  It is a function that accepts 2 parameters:
 *  1. Request - A call from the client/browser
 *  2. Response - What we should return to the client/browser
 *  
 *  Learn more about HTTP Status codes here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 * 
 *  @summary
 *  From the folder structure, you can access this API via ---> http://localhost:3000/api/donations
 * 
 *  @requires
 *  Your server to be running ---> Run `npm run dev` in your terminal
 */

function api(req, res) {
  res.statusCode = 200;
  res.json(sampleDonations);
}

export default api;
