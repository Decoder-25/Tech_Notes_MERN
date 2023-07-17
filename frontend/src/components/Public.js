import {Link} from 'react-router-dom'

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">OctaRepairs!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in the heart of Bengal, Kolkata, OctaRepairs provides a
          trained staff ready to meet your tech repair needs.
        </p>
        <address className="public__addr">
          OctaRepairs
          <br />
          Techno City, Garia
          <br />
          Kolkata, 700094
          <br />
          <a href="tel:+15555555555">(555) 555-5555</a>
        </address>
        <br />
        <p>Owner:  Miss Dsha Biswas</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
}

export default Public
