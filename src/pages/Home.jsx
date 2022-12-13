import "../style/Pages.scss";

import Header from "../components/Header";
import ContentHome from "../components/ContentHome";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="container-home">
      <Header />
      <ContentHome />
      <Footer />
    </div>
  );
};

export default Home;
