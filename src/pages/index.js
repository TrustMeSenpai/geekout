import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Donations from "../components/Donations";
import Masthead from "../components/Masthead";

/**
 *  @description
 *  This is the root (or index) page of our application.
 *
 *  @summary
 *  From the folder structure (being the index page), you can access this page via ---> http://localhost:3000/
 * 
 *  @requires
 *  Your server to be running ---> Run `npm run dev` in your terminal
 */

function Home() {
  return (
    <div>
      <Navbar />
      <section>
        <div className="container">
          <h1>The End of the Overworld is upon us</h1>
          <p>
            The Minecraft World is at war. In this time of chaos, blacksmiths and adventurers contribute to the frontline with supplies and equipment. Glory to the Motherland!
          </p>
        </div>
      </section>
      <Donations />
      <Footer />
    </div>
  );
}

export default Home;
