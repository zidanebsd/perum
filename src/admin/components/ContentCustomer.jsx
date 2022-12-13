import "../style/Components.scss";

const ContentCustomer = () => {
  return (
    <div className="contentCustomer-admin">
      <div className="section-one">
        <div className="box-customer-title">
          <p>Customer</p>
          <p>export PDF</p>
        </div>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>No telephone</th>
            <th>Pesan</th>
          </tr>
          <tr>
            <td>amad mail</td>
            <td>mail@gmail.com</td>
            <td>085714884325</td>
            <td>butuh informasi lebih lanjut nih!</td>
          </tr>
          <tr>
            <td>mail</td>
            <td>mail@gmail.com</td>
            <td>085714884325</td>
            <td>
              butuh informasi lebih lanjut nih!butuh informasi butuh informasi
              lebih lanjut nih!butuh informasi lebih lanjut nih!lebih lanjut
              nih!butuh informasi lebih lanjut nih!
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ContentCustomer;
