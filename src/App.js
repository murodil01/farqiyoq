// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="apple container">
        <header className="navbar">
            <div className="logo">
                <a className="logo-link">APPSTORE.UZ <br/> Uzbekistan</a>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="!">Home</a></li>
                    <li><a href="!">Gallery</a></li>
                    <li><a href="!">News</a></li>
                    <li><a href="!">About Us</a></li>
                </ul>
            </nav>
        </header>

        <main className="hero-section">
            <div className="hero">
                <div className="text-content">
                    <h1>iPhone 12 Pro</h1>
                    <p>The iPhone 12 Pro and iPhone 12 Pro Max are part of Apple's latest generation of smartphones,
                        offering 5G connectivity, the A14 chip for better performance.</p>
                    <div className="buttons">
                        <button className="btn order-now">Order now</button>
                        <button className="btn learn-more">Learn more</button>
                    </div>
                    {/* <div></div> */}

                    <footer className="pagination">
                        <span className="span">01</span>
                        <span className="span">02</span>
                        <span className="span">03</span>
                        <span className="span">04</span>
                    </footer>
                </div>
            </div>
        </main>
    </div>
  );
}

export default App;

