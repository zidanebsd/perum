import "../style/Components.scss";

import img1 from "../assets/image 16.png";
import img2 from "../assets/image 17.png";

export default function ContentAbout() {
  return (
    <div className="container-content-about">
      <div className="about-img">
        <img src={img1} alt="" />
      </div>
      <div className="parents-content">
        <h1 className="title">PERUMAHAN BUMI SEMINGKIR DAMAI </h1>
        <p className="content">
          Perumahan Bumi Semingkir Damai adalah proyek pertama yang mulai dikembangkan oleh
          PT.RHEMANANDA PUTRI GRAHA pada November 2020 sampai saat ini. Dahulu Citra
          Garden City dikenal dengan nama Citra Garden atau Perumahan Citra.
        </p>
        <p className="content">
          Hingga saat ini CitraGarden City sudah memiliki beberapa proyek Citra,
          yakni Citra 1, Citra 1 Ext, Citra 2, Citra 2 Ext, Citra 3, Citra 3
          Ext, Citra 5, Citra 6, Citra 7, Citra 7 Ext, dan Aeroworld8.
          CitraGarden City merupakan perumahan yang ditujukan bagi masyarakat
          menengah ke atas. Proyek ini memiliki keunggulan lokasi yang berjarak
          hanya 15 km dari pusat kota serta dilengkapi dengan berbagai fasilitas
          komersil dan rekreasi yang komprehensif bagi penghuni dan penduduk
          sekitarnya. Saat ini, CitraGarden City Jakarta telah semakin
          berkembang sebagai kota mandiri yang terintegrasi dengan total luas
          pengembangan 450.9 ha. Citra Garden City Jakarta telah membangun
          sekitar 10.000 unit rumah dengan tingkat hunian mencapai 90%.
        </p>
      </div>
      <div className="about-img">
        <img src={img2} alt="" />
      </div>
      <div className="parents-content">
        <h1 className="title">Pengembangan Perumahan Terpadu</h1>
        <p className="content">
          Lokasi yang strategis dan dengan dilengkapi
          fasilitas yang saling menunjang untuk sebuah kawasan besar berskala
          kota. Fasilitas yang tersedia diantaranya adalah:
        </p>
        <ol>
          <li className="content">Pengolahan Air Bersih (Water Treatment Plant)</li>
          <li className="content">
            Sport Club (Kolam Renang, Lapangan Bulutangkis, Lapangan Basket,
            Lapangan Volley, Lapangan Tenis, Lapangan Futsal, Gym & Aerobic
            Center)
          </li>
          <li className="content">
            Fasum / fasos : Sekolah, Gedung Pertemuan, Pos Polisi, Pemadam
            Kebakaran, Kantor Pos, Tempat Ibadah, Taman.
          </li>
          <li className="content">
            Fasilitas Komersial : Pasar Modern, Pasar Tradisional, 6.
            Supermarket, Perkantoran, Ruko, Bank, Klinik. Rumah Sakit, dan
            lainnya
          </li>
          <li className="content">
            Layanan Purna Jual dan Estate Management, yang dilayani oleh staff
            profesional dan pelayanan yang berorientasi pada Customer Excellent.
          </li>
        </ol>
        <p className="content">
          Konsep modern community living ini pun melekat dengan berbagai
          fasilitas yang ada didalamnya sehingga konsep kota dalam kota pun
          pantas disematkan pada perumahan CitraGarden City.
        </p>
        <p className="content">
          Perumahan CitraGarden City terletak Jakarta Barat dengan kantor
          Marketing Gallery yang beralamat lengkap di Soho Blok D.02 No.10-11,
          AeroWorld 8, CitraGarden City Jakarta. Marketing Gallery bisa diakses
          melalui nomor telepon +6221 5437 4777.
        </p>
        <p className="content">
          Perkembangan CitraGarden City hingga kini terus menunjukan bukti bahwa
          perumahan yang memiliki populasi hingga 50 ribu jiwa ini makin
          bersinar.
        </p>
      </div>
    </div>
  );
}
