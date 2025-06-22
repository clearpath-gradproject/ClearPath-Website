<<<<<<< Updated upstream
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  return (
    <>
      {/* Global style */}
      <style>
        {`
          body {
            font-family: "Times New Roman", Times, serif; /* Tüm yazı tiplerini Times New Roman yap */
          }
          .navbar {
            z-index: 1050; /* Navbar'ı 1050 yaparak modal ve dropdown menüsünün altında kalmamasını sağlarız */
            position: relative; /* Position property to make sure navbar stays above other content */
          }
          .modal-backdrop {
            z-index: 1040 !important; /* Modal arka planının navbar'ın altına yerleşmesi için */
          }
          .modal {
            z-index: 1060 !important; /* Modal'ı navbar'ın üstüne çıkarmak için */
            position: fixed; /* Sayfada sabit konum */
            top: 50%; /* Modal'ı sayfanın ortasına yerleştir */
            left: 50%; /* Modal'ı yatayda ortala */
            transform: translate(-50%, -50%); /* Modal'ı tam ortada konumlandır */
          }

          .dropdown-menu {
            border-radius: 8px; /* Menü kenarlarını yuvarla */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Menüye hafif bir gölge ekle */
            background-color: #333; /* Menü arka plan rengini koyulaştır */
            border: none; /* Menü sınırını kaldır */
          }
          .dropdown-item {
            color: #fff; /* Menü öğelerinin beyaz renk olması */
          }
          .dropdown-item:hover {
            background-color: #555; /* Menü öğelerinin üzerine gelindiğinde koyulaşma */
          }
          .dropdown-toggle::after {
            color: #fff; /* Dropdown ok simgesinin rengini beyaz yap */
          }
        `}
      </style>

      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{
          backgroundColor: "#333", // Koyu gri arka plan
          padding: "0.8rem 1rem", // Navbar paddingini artırdık
          position: "relative", // Dropdown menüsünün düzgün görünmesini sağlar
        }}
      >
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a
            className="navbar-brand d-flex align-items-center"
            href="#"
            style={{
              fontSize: "2rem",
              color: "#ffffff", // Beyaz yazı
              fontWeight: "bold",
              padding: "5px 10px",
            }}
          >
            {/* Logo */}
            <img
              src="https://i.hizliresim.com/3meys61.png" // Logonuzun URL'sini buraya ekleyin
              alt="Logo"
              style={{
                width: "60px", // Logo genişliği artırıldı
                height: "60px", // Logo yüksekliği artırıldı
                objectFit: "contain", // Orantılı sıkıştır
              }}
            />
            ClearPath
          </a>
          <div className="d-flex align-items-center"> {/* Butonlar için flexbox kullanımı */}
            {/* About Project Button */}
            <button
              className="btn btn-dark me-2"
              data-bs-toggle="modal"
              data-bs-target="#aboutProjectModal"
            >
              About Project
            </button>

            {/* About Us Button */}
            <button
              className="btn btn-dark me-2"
              data-bs-toggle="modal"
              data-bs-target="#aboutUsModal"
            >
              About Us
            </button>

            {/* Dropdown for Document Downloads */}
            <div className="dropdown d-inline-block">
              <button
                className="btn btn-dark dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Download Documents
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
                style={{
                  position: "absolute", // Dropdown menüsünün konumunu ayarladık
                  zIndex: "1050", // Menü içeriklerin altında kalmasın diye z-index ekledik
                }}
              >
                {/* List of downloadable documents */}
                <li>
                  <a className="dropdown-item" href="https://drive.google.com/uc?id=1mDZqteDueiiFF5cJKoNyvrF1-70dGMXD&export=download" download>
                    RSD
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="https://drive.google.com/uc?id=1c25ahsIl5xcE0cOR2kp-q7Ume4fLPck8&export=download" download>
                    DSD
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="https://drive.google.com/uc?id=10liFBwGoNKJepIpNpGE0D-OK5Acw01iT&export=download" download>
                    Final Report
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="https://drive.google.com/uc?id=1UEzN1FEUi3xsZ7WpXhS8Qxeommt-jkdG&export=download" download>
                    UI Presentation
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="https://docs.google.com/presentation/d/1jLa0-DEZ4X04YUelTUSHE51zaZntsv84/export/pptx" download>
                    Project Presentation
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="https://docs.google.com/presentation/d/1HSEFvoB0pxTRf1dAmqzmnF8wrqu95gDf/export/pptx" download>
                    Project Poster
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* About Project Modal */}
      <div
        className="modal fade"
        id="aboutProjectModal"
        tabIndex="-1"
        aria-labelledby="aboutProjectModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="aboutProjectModalLabel">
                About Project
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            The ClearPath Routing System is designed to optimize the routing of emergency vehicles through traffic, reducing response times and enhancing safety. The system leverages advanced technologies, including real-time communication between vehicles, machine learning for optimal routing, and sensor data processing for lane detection.
The project involves simulating various traffic scenarios using Unity to test the effectiveness and reliability of the system under different conditions. It aims to ensure that emergency vehicles can navigate traffic efficiently, while also maintaining the flow of regular vehicles.
The system's modular design allows for scalability and future enhancements, making it adaptable for integration with smart city infrastructure and autonomous vehicle technologies. The project demonstrates a reliable and scalable solution for improving emergency vehicle routing and overall traffic management.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Modal */}
      <div
        className="modal fade"
        id="aboutUsModal"
        tabIndex="-1"
        aria-labelledby="aboutUsModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="aboutUsModalLabel">
                About Us
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
                <p>We are <strong>Nağme Uğurtan</strong>, <strong>Ezgi Atatanır</strong>, and <strong>Bahadır Erdem</strong>, 4th-year students at <strong>Yaşar University</strong>, studying <strong>Computer Engineering</strong>.</p>
                <p><strong>Nağme Uğurtan</strong> (20070001080)</p>
                <p><strong>Ezgi Atatanır</strong> (21070001053)</p>
                <p><strong>Bahadır Erdem</strong> (21070001048)</p>
                <p>As part of our academic journey, we have worked together on the <strong>ClearPath Routing System</strong> project, focusing on optimizing emergency vehicle routing and traffic flow using cutting-edge technologies. Our project combines theoretical knowledge with practical applications, providing a scalable solution for urban traffic management.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
=======
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  return (
    <>
      {/* Global style */}
      <style>
        {`
          body {
            font-family: "Times New Roman", Times, serif; /* Tüm yazı tiplerini Times New Roman yap */
          }
          .navbar {
            z-index: 1050; /* Navbar'ı 1050 yaparak modal ve dropdown menüsünün altında kalmamasını sağlarız */
            position: relative; /* Position property to make sure navbar stays above other content */
          }
          .modal-backdrop {
            z-index: 1040 !important; /* Modal arka planının navbar'ın altına yerleşmesi için */
          }
          .modal {
            z-index: 1060 !important; /* Modal'ı navbar'ın üstüne çıkarmak için */
            position: fixed; /* Sayfada sabit konum */
            top: 50%; /* Modal'ı sayfanın ortasına yerleştir */
            left: 50%; /* Modal'ı yatayda ortala */
            transform: translate(-50%, -50%); /* Modal'ı tam ortada konumlandır */
          }

          .dropdown-menu {
            border-radius: 8px; /* Menü kenarlarını yuvarla */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Menüye hafif bir gölge ekle */
            background-color: #333; /* Menü arka plan rengini koyulaştır */
            border: none; /* Menü sınırını kaldır */
          }
          .dropdown-item {
            color: #fff; /* Menü öğelerinin beyaz renk olması */
          }
          .dropdown-item:hover {
            background-color: #555; /* Menü öğelerinin üzerine gelindiğinde koyulaşma */
          }
          .dropdown-toggle::after {
            color: #fff; /* Dropdown ok simgesinin rengini beyaz yap */
          }
        `}
      </style>

      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{
          backgroundColor: "#333", // Koyu gri arka plan
          padding: "0.8rem 1rem", // Navbar paddingini artırdık
          position: "relative", // Dropdown menüsünün düzgün görünmesini sağlar
        }}
      >
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a
            className="navbar-brand d-flex align-items-center"
            href="#"
            style={{
              fontSize: "2rem",
              color: "#ffffff", // Beyaz yazı
              fontWeight: "bold",
              padding: "5px 10px",
            }}
          >
            {/* Logo */}
            <img
              src="https://i.hizliresim.com/3meys61.png" // Logonuzun URL'sini buraya ekleyin
              alt="Logo"
              style={{
                width: "60px", // Logo genişliği artırıldı
                height: "60px", // Logo yüksekliği artırıldı
                objectFit: "contain", // Orantılı sıkıştır
              }}
            />
            ClearPath
          </a>
          <div className="d-flex align-items-center"> {/* Butonlar için flexbox kullanımı */}
            {/* About Project Button */}
            <button
              className="btn btn-dark me-2"
              data-bs-toggle="modal"
              data-bs-target="#aboutProjectModal"
            >
              About Project
            </button>

            {/* About Us Button */}
            <button
              className="btn btn-dark me-2"
              data-bs-toggle="modal"
              data-bs-target="#aboutUsModal"
            >
              About Us
            </button>

            {/* Dropdown for Document Downloads */}
            <div className="dropdown d-inline-block">
              <button
                className="btn btn-dark dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Download Documents
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
                style={{
                  position: "absolute", // Dropdown menüsünün konumunu ayarladık
                  zIndex: "1050", // Menü içeriklerin altında kalmasın diye z-index ekledik
                }}
              >
                {/* List of downloadable documents */}
                <li>
                  <a className="dropdown-item" href="https://drive.google.com/uc?id=1mDZqteDueiiFF5cJKoNyvrF1-70dGMXD&export=download" download>
                    RSD
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="https://drive.google.com/uc?id=1c25ahsIl5xcE0cOR2kp-q7Ume4fLPck8&export=download" download>
                    DSD
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="https://drive.google.com/uc?id=10liFBwGoNKJepIpNpGE0D-OK5Acw01iT&export=download" download>
                    Final Report
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="https://drive.google.com/uc?id=1UEzN1FEUi3xsZ7WpXhS8Qxeommt-jkdG&export=download" download>
                    UI Presentation
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="https://docs.google.com/presentation/d/1jLa0-DEZ4X04YUelTUSHE51zaZntsv84/export/pptx" download>
                    Project Presentation
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="https://docs.google.com/presentation/d/1HSEFvoB0pxTRf1dAmqzmnF8wrqu95gDf/export/pptx" download>
                    Project Poster
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="https://drive.google.com/uc?export=download&id=1m2gMGfqBhzO0hEFkes0rcqew0DIPSXjn" download>
                    Project Manual
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* About Project Modal */}
      <div
        className="modal fade"
        id="aboutProjectModal"
        tabIndex="-1"
        aria-labelledby="aboutProjectModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="aboutProjectModalLabel">
                About Project
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            The ClearPath Routing System is designed to optimize the routing of emergency vehicles through traffic, reducing response times and enhancing safety. The system leverages advanced technologies, including real-time communication between vehicles, machine learning for optimal routing, and sensor data processing for lane detection.
The project involves simulating various traffic scenarios using Unity to test the effectiveness and reliability of the system under different conditions. It aims to ensure that emergency vehicles can navigate traffic efficiently, while also maintaining the flow of regular vehicles.
The system's modular design allows for scalability and future enhancements, making it adaptable for integration with smart city infrastructure and autonomous vehicle technologies. The project demonstrates a reliable and scalable solution for improving emergency vehicle routing and overall traffic management.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Modal */}
      <div
        className="modal fade"
        id="aboutUsModal"
        tabIndex="-1"
        aria-labelledby="aboutUsModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="aboutUsModalLabel">
                About Us
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
                <p>We are <strong>Nağme Uğurtan</strong>, <strong>Ezgi Atatanır</strong>, and <strong>Bahadır Erdem</strong>, 4th-year students at <strong>Yaşar University</strong>, studying <strong>Computer Engineering</strong>.</p>
                <p><strong>Nağme Uğurtan</strong> (20070001080)</p>
                <p><strong>Ezgi Atatanır</strong> (21070001053)</p>
                <p><strong>Bahadır Erdem</strong> (21070001048)</p>
                <p>As part of our academic journey, we have worked together on the <strong>ClearPath Routing System</strong> project, focusing on optimizing emergency vehicle routing and traffic flow using cutting-edge technologies. Our project combines theoretical knowledge with practical applications, providing a scalable solution for urban traffic management.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
>>>>>>> Stashed changes
