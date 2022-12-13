import "../style/Components.scss";

import tk from "../assets/tk.png"

export default function ContentContact() {
    return(
        <div className="container-contact">
            <div className="parents-contact">
                <div className="content-contact">
                    <p>Mau bertanya tanya? </p>
                    <p>Team marketing kami siap melayani anda</p>
                    <p>Tinggalkan pesan no anda kami segera mungkin membalas pesan anda</p>
                    <div className="img-contact">
                        <img src={tk} alt="" />
                    </div>    
                </div>
                <form className="form-contact">
                    <div className="list-form-contact">
                        <label>Nama Lengkap</label>
                        <input type="text" required />
                    </div>
                    <div className="list-form-contact">
                        <label>e-mail</label>
                        <input type="email" required />
                    </div>
                    <div className="list-form-contact">
                        <label>No Tlp</label>
                        <input type="number" required />
                    </div>
                    <div className="list-form-contact">
                        <label>Nama Lengkap</label>
                        <textarea type="text" required />
                    </div>
                    <button className="btn-form-contact">Kirim Pesan</button>
                </form>
            </div>
        </div>
    )
}