import Fade from "react-reveal/Fade";

const Features = () => (
  <div>
    <h1>Features</h1>

  <section id="features" className="features-section">
    <Fade bottom>
      <div className="feature">
        <span role="img" aria-label="chat">💬</span>
        <h3>AI Chat</h3>
        <p>Engage with our AI-powered assistant to get personalized recipe ideas based on your preferences and ingredients at hand. Discover creative culinary inspirations effortlessly.</p>
      </div>
    </Fade>
    <Fade bottom>
      <div className="feature">
        <span role="img" aria-label="camera">📸</span>
        <h3>Image-to-Recipe</h3>
        <p>Take or upload a photo of your dish, and let our AI analyze it to recommend the best matching recipes. Perfect for recreating or improving your cooking ideas!</p>
      </div>
    </Fade>
    <Fade bottom>
      <div className="feature">
        <span role="img" aria-label="shopping cart">🛒</span>
        <h3>Smart Shopping List</h3>
        <p>Plan your meals with ease by adding missing ingredients from recipes directly to your shopping list. Simplify grocery shopping with just a tap!</p>
      </div>
    </Fade>
    <Fade bottom>
      <div className="feature">
        <span role="img" aria-label="notebook">📖</span>
        <h3>Recipe Collections</h3>
        <p>Create and organize your favorite recipes into personalized collections. Keep all your culinary creations and inspirations in one place.</p>
      </div>
    </Fade>
    <Fade bottom>
      <div className="feature">
        <span role="img" aria-label="star">⭐</span>
        <h3>Top-rated Recipes</h3>
        <p>Discover highly-rated recipes from the community. Save time searching and enjoy cooking the most-loved dishes from around the world.</p>
      </div>
    </Fade>
    <Fade bottom>
      <div className="feature">
        <span role="img" aria-label="magnifying glass">🔍</span>
        <h3>Powerful Search</h3>
        <p>Find recipes by ingredient, cuisine, or dietary preferences with our intuitive search feature. Making your next meal starts here.</p>
      </div>
    </Fade>
  </section>
  </div>
);

export default Features;
