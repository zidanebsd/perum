import "../style/Pages.scss";

import Header from "../components/Header";
import Navigation from "../components/Navigation";
import ContentCustomer from "../components/ContentCustomer"

const Customer = () => {
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
            <ContentCustomer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customer