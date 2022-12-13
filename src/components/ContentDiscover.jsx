import "../style/Components.scss";

import type36 from "../assets/type/type36.png";
import type48 from "../assets/type/type45.png";
import typeRuko from "../assets/type/typeRuko.png";

export default function ContentDiscover() {
  return (
    <div className="container-content-discover">
      <div className="card-discover">
        <div className="parents-content-discover">
          <div className="img-discover">
            <img src={type36} alt="" />
          </div>
          <div className="content-discover">
            <p className="title">2. Tipe 45 (komersil)</p>
            <div className="desc-product">
              <ul className="spesifikasi-product">
                <li>Harga: Rp 280.000.000</li>
                <li>Luas Bangunan: 45m</li>
                <li>Luas Lahan: 75m 2</li>
                <li>Kamar Tidur: 2</li>
                <li>Kamar Mandi: 1</li>
              </ul>
              <ul className="spesifikasi-teknis">
                <li>Spesifikasi Teknis</li>
                <li>a. Atap Genteng Metal dan Baja Ringan</li>
                <li>b. Dinding Herbel Plester</li>
                <li>c. Lantai & PondasiKeramik & Batu Belah</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="parents-content-discover">
          <div className="img-discover">
          <img src={type48} alt="" />
          </div>
          <div className="content-discover">
            <p className="title">2. Tipe 45 (komersil)</p>
            <div className="desc-product">
              <ul className="spesifikasi-product">
                <li>Harga: Rp 280.000.000</li>
                <li>Luas Bangunan: 45m</li>
                <li>Luas Lahan: 75m 2</li>
                <li>Kamar Tidur: 2</li>
                <li>Kamar Mandi: 1</li>
              </ul>
              <ul className="spesifikasi-teknis">
                <li>Spesifikasi Teknis</li>
                <li>a. Atap Genteng Metal dan Baja Ringan</li>
                <li>b. Dinding Herbel Plester</li>
                <li>c. Lantai & PondasiKeramik & Batu Belah</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="parents-content-discover">
          <div className="img-discover">
          <img src={typeRuko} alt="" />
          </div>
          <div className="content-discover">
            <p className="title">2. Tipe 45 (komersil)</p>
            <div className="desc-product">
              <ul className="spesifikasi-product">
                <li>Harga: Rp 280.000.000</li>
                <li>Luas Bangunan: 45m</li>
                <li>Luas Lahan: 75m 2</li>
                <li>Kamar Tidur: 2</li>
                <li>Kamar Mandi: 1</li>
              </ul>
              <ul className="spesifikasi-teknis">
                <li>Spesifikasi Teknis</li>
                <li>a. Atap Genteng Metal dan Baja Ringan</li>
                <li>b. Dinding Herbel Plester</li>
                <li>c. Lantai & PondasiKeramik & Batu Belah</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
