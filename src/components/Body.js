import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Body = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  // Array to simulate the images
  const images = [
    "https://i.hizliresim.com/h7w656d.png",
    "https://i.hizliresim.com/qqd8ty9.png",
    "https://i.hizliresim.com/6q1n1jh.png",
    "https://i.hizliresim.com/rwc9qgr.png",
    "https://i.hizliresim.com/8107a30.png",
    "https://i.hizliresim.com/lwby1uh.png",
    "https://i.hizliresim.com/4fgipup.png",
    "https://i.hizliresim.com/mrgko1i.png",
    "https://i.hizliresim.com/223pz0r.png",
    "https://i.hizliresim.com/of4e9dg.png",
    "https://i.hizliresim.com/c41bqfj.png",
    "https://i.hizliresim.com/30heafq.png", //conclusion 1
    "https://i.hizliresim.com/15oyj21.png",
    "https://i.hizliresim.com/qrdtvp2.png",
    "https://i.hizliresim.com/i037k3v.png",
    "https://i.hizliresim.com/gtgfiaf.png",
    "https://i.hizliresim.com/5mxkant.png"
  ];

  return (
    <div
      className="container-fluid py-4"
      style={{
        paddingLeft: "2rem",
        paddingRight: "2rem",
        maxWidth: "100%", // Sabit genişlik
        overflowX: "hidden", // Yatay kaydırmayı engelle
      }}
    >
      <div className="row">
        {/* Sol Kısım: Carousel ve Poster Alt Alta */}
        <div className="col-md-6">
          <h3 className="text-center">Presentation of Our Project</h3>
          <Carousel showThumbs={false} autoPlay infiniteLoop>
            {images.map((image, index) => (
              <div key={index} onClick={() => openModal(image)}>
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  style={{
                    border: "5px solid black",
                    padding: "10px",
                    cursor: "pointer",
                    width: "100%", // Sabit genişlik
                    height: "auto", // Yükseklik oranı korunur
                  }}
                />
              </div>
            ))}
          </Carousel>

          <div className="mt-4">
            <h3 className="text-center">Poster</h3>
            <img
              src="https://i.hizliresim.com/jy25569.jpg"
              alt="Poster"
              className="img-fluid rounded shadow"
              style={{
                border: "5px solid black",
                padding: "10px",
                boxShadow: "0px 10px 30px hsla(0, 0.00%, 0.00%, 0.70)",
                width: "100%", // Sabit genişlik
                height: "auto", // Yükseklik oranı korunur
                display: "block",
                margin: "0 auto",
                cursor: "pointer",
              }}
              onClick={() =>
                openModal("https://i.hizliresim.com/jy25569.jpg")
              }
            />
          </div>
        </div>

        {/* Sağ Kısım: PDF */}
        <div className="col-md-6">
          <h3>Final Report*</h3>
          <iframe
            src="https://drive.google.com/file/d/10liFBwGoNKJepIpNpGE0D-OK5Acw01iT/preview"
            title="PDF Görüntüleyici"
            className="w-100"
            style={{
              height: "1000px",
              border: "5px solid black",
              borderRadius: "10px",
              padding: "10px",
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.7)",
            }}
          ></iframe>
          <p style={{ fontSize: "0.8rem", color: "#555", marginTop: "10px" }}>
            (*)RSD and DSD documents are provided in the appendix of the final report.
          </p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1050, // Modal z-index değeri artırıldı
          }}
          onClick={closeModal}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "95%",  // Modal içerisindeki resim için genişlik sınırı
              maxHeight: "90%", // Modal içerisindeki resmin yüksekliği
            }}
          >
            <img
              src={modalImage}
              alt="Modal Görseli"
              style={{
                width: "100%",  // Resmin genişliği %100 olarak ayarlandı
                height: "auto",
                borderRadius: "10px",
                maxHeight: "85vh", // Resmin yüksekliğini sınırladım
                zIndex: 1060,
              }}
            />
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "-10px",
                right: "-10px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                cursor: "pointer",
                zIndex: 1060, // Close button z-index değeri artırıldı
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
