
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  
  return (
    <div>
        <section class="banner">
    		<div class="banner-content">
	    		<h1>We are Knulle</h1>
    			<p>The future of social media.</p>
                <Link to={'/records'}>
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
                    <p>"Here at Knule group, we value equality and worker’s rights. We have strong computer science talent with a variety of expertises and skills. We understand that development in the modern world requires a modern approach. Our developers guide important design decisions, shaping the product, and its future."\n-Blake Lastname</p>
                </div>
            </div>
        </main>
    </div>
  )
}

export default App
