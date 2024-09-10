
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  
  return (
    <div>
      <section class="banner">
        <div class="banner-content">
            <h1>We are Knulle</h1>
            <p>The future of social media.</p>
            <Link to="/records">
                <a class="cta-button">Meeting Records</a>
            </Link>
        </div>
    </section>
    <main class="grid-container">
        <div class="column">
            <div class="column-item">
                <h2>OUR PRODUCT</h2>
                <p>Knulle: The App.</p>
            </div>
        </div>
        <div class="column">
            <div class="column-item">
                <h2>A MESSAGE FROM OUR CEO:</h2>
                <img class="ceo-portrait" src="src/img/CEOPortrait.png" alt="CEO Portrait"/>
                <p>We have another meeting today.</p>
            </div>
        </div>
    </main>
    </div>
  )
}

export default App
