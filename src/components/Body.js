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
    "https://i.hizliresim.com/3x3vy1m.png", //1
    "https://i.hizliresim.com/846wh6d.png", //2
    "https://i.hizliresim.com/2wdow3w.png", //3
    "https://i.hizliresim.com/1ndtxsa.png", //4
    "https://i.hizliresim.com/si3kve8.png", //5
    "https://i.hizliresim.com/atrsuc4.png", //6
    "https://i.hizliresim.com/8a34rjl.png", //7
    "https://i.hizliresim.com/iao01jr.png", //8
    "https://i.hizliresim.com/asu87vu.png", //9
    "https://i.hizliresim.com/3tv942f.png", //10
    "https://i.hizliresim.com/dc8ezrv.png", //11,
    "https://i.hizliresim.com/tt1nxww.png", //class diagram
    "https://i.hizliresim.com/eaoionm.png", //activity diagram giriş
    "https://i.hizliresim.com/iq6x8ys.png", //algorithm structure 
    "https://i.hizliresim.com/gm6wbmk.png", //activity diagram çıkış
    "https://i.hizliresim.com/i2ij9xp.png", //vehicle structure
    "https://i.hizliresim.com/gm6wbmk.png", //activity diagram çıkış 2
    "https://i.hizliresim.com/ixzrwf8.png", //vehicle display
    "https://i.hizliresim.com/du0pdjs.png", //use case 1 
    "https://i.hizliresim.com/nlv2knp.png", //1
    "https://i.hizliresim.com/du0pdjs.png", //use case 1 
    "https://i.hizliresim.com/pnxpvee.png", //2
    "https://i.hizliresim.com/btb97ro.png", //model development
    "https://i.hizliresim.com/h1xvqd5.png", //lane
    "https://i.hizliresim.com/3cx82rv.png",
    "https://i.hizliresim.com/98259z5.png",
    "https://i.hizliresim.com/nap9jey.png",
    "https://i.hizliresim.com/m6iw6yo.png",
    "https://i.hizliresim.com/ed4nfde.png", //how it works
    "https://i.hizliresim.com/tkoqpjt.png",
    "https://i.hizliresim.com/bnmqfxw.png", //thanks
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
              src="https://i.hizliresim.com/dxkyvyx.png"
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
                openModal("https://i.hizliresim.com/dxkyvyx.png")
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
