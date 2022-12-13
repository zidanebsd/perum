import "../style/Components.scss";

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="marketing-office">
        <p>Marketing Office</p>
        <div></div>
        <p>(021) 5437 4777</p>
        <p>
          Soho Blok D.02 No. 10-11, Aeroworld 8, CitraGarden City, Jakarta Barat
        </p>
      </div>
      <div className="cm-service">
        <p>Customer Service</p>
        <div></div>
        <p>(021) 5437 4777 <span>sehu</span></p>
        <p>
        3888info@citragardencity.com
        </p>
      </div>
      <div className="sosmed">
        <p>Connect with Us</p>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
