import Profil from './assets/Profil.jpg'
import TamnelRisk from './assets/TamnelRisk.jpg'
import TamnelFruit from './assets/TamnelFruit.jpg'
import TamnelKlafit from './assets/TamnelKlafit.jpg'
import TamnelWireframe from './assets/TamnelWireframe.jpg'
import TamnelTabungjo from './assets/Tamneltabungjo.jpg'
import davis from './assets/davis.jpg'
import webdavis from './assets/webdavis.jpg'
import './App.css'

function App() {
  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo"></div>

        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-center">
          <p className="hero-subtitle">Welcome To My Portfolio</p>

          <h1 className="hero-title">Joshua Clyford Dadung</h1>

          <h2 className="hero-role">
            Information Systems Graduate
          </h2>

          <p className="hero-description">
            Passionate about Web Development,UI Design, Social Media, Business Intelligence,
            and Creative Digital.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <h2>About Me</h2>

        <div className="about-container">
          <div className="about-left">
            <img
              src={Profil}
              alt="Joshua Profile"
              className="about-image"
            />
          </div>

          <div className="about-right">
            <h3>Joshua Clyford Dadung</h3>

            <p className="about-description">
              Saya merupakan lulusan Universitas Klabat sarjana ilmu komputer jurusan sistem informasi yang memiliki fokus pada bagian UI Design, Multimedia, Digital Marketing,Business Intelligence, dan Social media Analytics. Saya memiliki kemampuan berkomunikasi yang baik, disiplin, serta mampu bertanggung jawab untuk mencapai tujuan pekerjaan. Secara langsung saya bisa bekerja secara personal maupun tim, teliti dalam menganalisis, serta berorientasi pada solusi dan hasil.
            </p>

            <div className="about-info">
              <div className="info-card">
                <span>🎓 Pendidikan</span>
                <p>Universitas Klabat</p>
                <p>S1 Ilmu Komputer - Sistem Informasi</p>
              </div>

              <div className="info-card">
                <span>💻 Bidang</span>
                <p>Creative Digital</p>
              </div>

              <div className="info-card">
                <span>📍 Lokasi</span>
                <p>Kota Tangerang, Green Village. Jln KH Hasyim Ashari</p>
              </div>

              <div className="info-card">
                <span>🚀 Usia</span>
                <p>22 Tahun</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="skills-section" id="skills">
        <h2>Skills</h2>

        <div className="skills-content">
          <div className="skills-progress">
            <div className="progress-item">
              <div className="progress-header">
                <span>Social Media Content</span>
                <span>90%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill social"></div>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-header">
                <span>CSS</span>
                <span>75%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill css"></div>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-header">
                <span>JavaScript</span>
                <span>70%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill js"></div>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-header">
                <span>React JS</span>
                <span>70%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill react"></div>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-header">
                <span>UI Design</span>
                <span>88%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill ui"></div>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-header">
                <span>Video Editing</span>
                <span>88%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill video"></div>
              </div>
            </div>
          </div>

          <div className="tools-section">
            <h3>Tools & Technologies</h3>

            <div className="tools-grid">
              <div className="tool-card">VS Code</div>
              <div className="tool-card">Figma</div>
              <div className="tool-card">Canva</div>
              <div className="tool-card">CapCut</div>
              <div className="tool-card">Google Looker</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="projects-section" id="projects">
        <h2>Projects</h2>

        <div className="project-container">
          <div className="project-card">
            <img
              src={TamnelRisk}
              alt="Risk Management Dashboard"
              className="project-image"
            />

            <h3>Risk Management Dashboard</h3>

            <p>
              Dashboard analisis risiko berbasis PHP dan MySQL
              dengan visualisasi data dan matrix risk untuk mendukung pengambilan keputusan perusahaan.
            </p>

            <a
              href="https://github.com/JoshuaDadung/RiskManagement.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              View GitHub
            </a>
          </div>

          <div className="project-card">
            <img
              src={TamnelKlafit}
              alt="Tamnel Klafit"
              className="project-image"
            />

            <h3>UI Design Aplikasi "Klafit"</h3>

            <p>
              Mendesain antarmuka aplikasi Klafit menggunakan Figma untuk membantu pengguna memantau aktivitas kebugaran, pola makan, dan gaya hidup sehat.
            </p>

            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              View Prototipe
            </a>
          </div>

          <div className="project-card">
            <img
              src={TamnelFruit}
              alt="Tamnel Fruit"
              className="project-image"
            />

            <h3>UI Design E-Commerce: "Fruit Paradise"</h3>

            <p>
              Merancang desain antarmuka aplikasi e-commerce penjualan buah menggunakan Figma dengan mengutamakan kemudahan navigasi, estetika visual, dan pengalaman pengguna.
            </p>

            <a
              href="https://www.figma.com/proto/3ULuby84yG29RJGLOYgFc6/Design-Fruit-Paradise?t=IVdwC1X1I6ierbJk-1"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              View Prototipe
            </a>
          </div>

          <div className="project-card">
            <img
              src={TamnelWireframe}
              alt="Design Wireframe Aplikasi TabungJo!"
              className="project-image"
            />

            <h3>Design Wireframe Aplikasi TabungJo!</h3>

            <p>
              Perancangan wireframe aplikasi TabungJo! sebagai tahap awal
              pengembangan antarmuka pengguna yang berfokus pada struktur,
              navigasi, dan pengalaman pengguna.
            </p>

            <a
              href="https://whimsical.com/joshcd/wireframe-tabungjo-8MNVsQiw16pDaYYNbJaHiZ@or4CdLRbgixsRnG7mZfweKUNNeSCA9y9qxLx7Kopx"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              View Wireframe
            </a>
          </div>

          <div className="project-card">
            <img
              src={TamnelTabungjo}
              alt="Design Aplikasi TabungJo!"
              className="project-image"
            />

            <h3>Design Aplikasi TabungJo!</h3>

            <p>
              Desain UI aplikasi TabungJo! yang membantu pengguna dalam
              mengelola tabungan secara digital dengan tampilan modern,
              intuitif, dan mudah digunakan.
            </p>

            <a
              href="https://www.figma.com/proto/OcO3LB2qH9bepAEjNK0ro7/Design-TabungJo?node-id=0-1&t=IVdwC1X1I6ierbJk-1"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              View Prototipe
            </a>
          </div>

          <div className="project-card">
            <img
              src={davis}
              alt="Project 7"
              className="project-image"
            />

            <h3>Sales Analytics Dashboard</h3>

            <p>
              Dashboard ini dibuatmenggunakan Looker Studio untuk memvisualisasikan data penjualan. Dashboard ini menyajikan indikator kinerja utama (KPI), tren penjualan, metode pembayaran, serta analisis profit guna mendukung pengambilan keputusan berbasis data.
            </p>

            <a
              href="https://datastudio.google.com/reporting/ce34b7db-f70d-4593-bfd4-fe5958682627"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              View Dashboard
            </a>
          </div>

          <div className="project-card">
            <img
              src={webdavis}
              alt="Project 8"
              className="project-image"
            />

            <h3>Flight Ticket Sales Dashboard</h3>

            <p>
              Mengembangkan website visualisasi data berbasis React dengan Chart.js untuk menampilkan dashboard penjualan tiket pesawat secara interaktif.
            </p>

            <a
              href="https://github.com/JoshuaDadung/Dashboard-Davis.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              View Project
            </a>
          </div>
        </div>
      </section>

            {/* Contact */}
      <section className="contact-section" id="contact">
        <h2>Contact Me</h2>

        <p className="contact-subtitle">
          Feel free to contact me for collaboration, job opportunities, or project discussions.
        </p>

        <div className="contact-container">
          <div className="contact-card">
            <span>📧</span>
            <h3>Email</h3>
            <p>joshuacdadung@gmail.com</p>
            <a href="mailto:joshuacdadung@gmail.com">Send Email</a>
          </div>

          <div className="contact-card">
            <span>📸</span>
            <h3>Instagram</h3>
            <p>@joshcdadung</p>
            <a
              href="https://www.instagram.com/joshcdadung"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Instagram
            </a>
          </div>

          <div className="contact-card">
            <span>💼</span>
            <h3>LinkedIn</h3>
            <p>Joshua Clyford Dadung</p>
            <a
              href="https://www.linkedin.com/in/joshua-clyford-dadung-7362b6411"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default App