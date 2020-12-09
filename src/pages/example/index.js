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

function Minecraft() {
  return (
    <div>
      <Navbar />
      <section>
        <div className="container">
          <h1>Geyyyy</h1>
          <p>
            Lmao ya gay
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Minecraft;