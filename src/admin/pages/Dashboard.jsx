import "../style/Pages.scss";
import "../style/MediaQuery.scss";

import Header from "../components/Header";
import Navigation from "../components/Navigation";
import ContentDashboard from "../components/ContentDashboard";

const Dashboard = () => {
  return (
    <div className="container-admin">
      <div className="box-admin">
        <div className="box-header">
          <Header />
        </div>
        <div className="section-two">
          <div className="box-navigation">
            <Navigation />
          </div>
          <div className="box-contentDashboard">
            <ContentDashboard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
