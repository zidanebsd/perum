import "../style/Components.scss";
// import "../style/style.css"

// import wave from "../assets/wave.png";
import house from "../assets/house.png";

import type36 from "../assets/type/type36.png";
import type48 from "../assets/type/type45.png";
import typeRuko from "../assets/type/typeRuko.png";

import consultan from "../assets/feature/consultan.png";
import housecluster from "../assets/feature/house.png";
import retail from "../assets/feature/retail.png";
import land from "../assets/feature/land.png";

const Header = () => {
  return (
    <div className="container-content_home">
      <div className="container">
        <div className="hero-content">
          <h1 className="title">
            Perumahan Bumi Semingkir Damai
          </h1>
          <p className="text">
            Hunian impian dengan harga terjangkau dan lokasi yang strategis.
          </p>
        </div>
        <figure className="banner">
          <img src={house} alt="hero banner" className="img-banner" />
        </figure>
      </div>
      
      <div className="feature-home-1">
        <div className="content-feature">
          <img className="acd" alt="" src={consultan} />
          <h3>24 Hour Consultan</h3>
          <p className="card-text">
            layanan konsultasi 24 jam
          </p>
        </div>
        <div className="content-feature">
          <img alt="" src={housecluster} />
          <h3>70 Cluster</h3>
          <p className="card-text">
            Total 88 termasuk subsidi dan komersial
          </p>
        </div>
        <div className="content-feature">
          <img alt="" src={retail} />
          <h3>15 Retail Outlets</h3>
          <p className="card-text">
            Fasilitas umum & strategis
          </p>

        </div>
        <div className="content-feature">
          <img alt="" src={land} />
          <h3>9912 M<sup>2</sup> Land Area</h3>
          <p className="card-text">
            Mempunyai luas tanah yang luas
          </p>
        </div>
      </div>

       <div className="feature-home-2">
        <h1 className="title">Selamat Datang Di Perumahan Bumi Semingkir Damai</h1>
        <div className="article">
          <p>
            Perumahan BSD adalah proyek pertama yang mulai dikembangkan
            oleh PT.RHEMANANDA PUTRI GRAHA pada November 2021 sampai saat ini.
            Hingga saat ini Perumahan BSD sudah memiliki beberapa
            proyek bangunan cluster, subsidi, komersil dan fasilitas umum lainnya.
          </p>
          <p>
            Perumahan BSD merupakan perumahan yang ditujukan bagi
            masyarakat menengah ke atas maupun menengah kebawah. Proyek ini memiliki keunggulan lokasi
            yang berjarak hanya 15 km dari pusat kota serta dilengkapi dengan
            berbagai fasilitas. Perumahan BSD telah semakin berkembang
            sebagai kota mandiri yang terintegrasi dengan total luas pengembangan mencapai 9912 M<sup>2</sup>. Sekitar 49 Subsidi, 21 Komersil, 15 Ruko.
          </p>
        </div>
      </div>
      <div className="feature-home-3">
        <h1>Type Rumah</h1>
        <div className="card">
          <div className="content-card">
            <img alt="" src={type36} />
            <p>Tipe 38 (Subsidi)</p>
          </div>  
          <div className="content-card">
            <img alt="" src={type48} />
            <p>Tipe 48 (Komersil)</p>
          </div>
          <div className="content-card">  
            <img alt="" src={typeRuko} />
            <p>Tipe RUKO (Komersil)</p>
          </div>
        </div>
      </div>
      <div className="feature-home-4">
        <h1>Testimoni</h1>
        <h3>Apa kata mereka yang sudah memiliki rumah di disini?</h3>
        <div className="container-box-testimoni">
          <div>
            <q>
              Membeli rumah disini sangatlah worth it dengan letak yang
              strategis, nyaman, sekolah, rumah sakit dan tempat wisata yang
              sangat dekat.
            </q>
            <p>Pak Darmono</p>
          </div>
          <div>
            <q>
              Saya sudah 6 bulan tinggal disini yang saya rasakan adalah
              kenyamanan dan respon yang cepat ketika pemiliik rumah mengalami
              kendala.
            </q>
            <p>Pak Darmono</p>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Header;
