export default function Footer(){
return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Mohamed Sabbar. All rights reserved.</p>
        <div className="social-links">
          <a href="mailto:tonemail@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/tonprofil" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/tonprofil" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
};