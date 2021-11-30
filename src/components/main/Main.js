import "./Main.css";
import Customers from "../../assets/fakeData/fakeData";
import { RiMore2Fill, RiFilterFill } from 'react-icons/ri';
import { AiOutlinePlus } from 'react-icons/ai';

const Main = () => {
    return (
        <main>
            <div className="main__container">
                {/* <!-- MAIN TITLE STARTS HERE --> */}

                <div className="main__title">
                    <div className="main__greeting">
                        <h1>Customer Detail</h1>
                    </div>
                </div>

                {/* <!-- MAIN TITLE ENDS HERE --> */}

                {/* <!-- MAIN CARDS STARTS HERE --> */}
                <div className="main__cards">
                    <div className="card">

                        <div className="card_inner">
                            <p className="text-primary-p">Total Customer</p>
                            <span className="font-bold text-theme">50</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card_inner">
                            <p className="text-primary-p">Birthday Tomorrow</p>
                            <span className="font-bold text-theme">21</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card_inner">
                            <p className="text-primary-p">Birthday Weeks</p>
                            <span className="font-bold text-theme">40</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card_inner">
                            <p className="text-primary-p">Birthday Month</p>
                            <span className="font-bold text-theme">32</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card_inner">
                            <p className="text-primary-p">Anniversary Tomorrow</p>
                            <span className="font-bold text-theme">10</span>
                        </div>
                    </div>
                </div>
                {/* <!-- MAIN CARDS ENDS HERE --> */}

                {/* <!-- TABLE STARTS HERE --> */}
                <div className="table-div">
                    <h2>All Customer </h2>
                    <hr />
                    <div className="search-bar">
                        <input className="input-box" type="text" name="search" placeholder="Search by name or phone number"></input>
                        <select className="input-box" id="cars" name="cars">
                            <option value="volvo">Sold</option>
                            <option value="saab">Pending</option>
                        </select>
                        <button className="silver-button" type="submit"><RiFilterFill
                            style={{ color: "white", fontSize: "1.2em", marginRight: "0.5em" }}
                        />Filter</button>
                        <button className="right-button silver-button" type="submit">Export</button>
                        <button className="diamond-button" type="submit"><AiOutlinePlus
                            style={{ color: "white", fontSize: "1.2em", marginRight: "0.5em" }}
                        />Add Customer</button>
                    </div>
                    <table class="myTable">
                        <tr className="table-header">
                            <th>Name</th>
                            <th>Date Of Birth</th>
                            <th>Anniversary</th>
                            <th>Mobile No</th>
                            <th>Membership</th>
                            <th>Last Shopping</th>
                            <th>Action</th>
                        </tr>
                        {
                            Customers.map(Customer => {
                                return Customer.Membership === "Diamond" ?
                                    <tr className="table-row diamond-row">
                                        <td>{Customer.Name}</td>
                                        <td>{Customer.DateOfBirth}</td>
                                        <td>{Customer.Anniversary}</td>
                                        <td>{Customer.MobileNo}</td>
                                        <td><button className="diamond-btn">{Customer.Membership}</button></td>
                                        <td>{Customer.LastShopping}</td>
                                        <td><RiMore2Fill
                                            style={{ color: "black", fontSize: "1.2em", marginRight: "1.2em" }}
                                        />
                                        </td>
                                    </tr>
                                    :
                                    <tr className="table-row silver-row">
                                        <td>{Customer.Name}</td>
                                        <td>{Customer.DateOfBirth}</td>
                                        <td>{Customer.Anniversary}</td>
                                        <td>{Customer.MobileNo}</td>
                                        <td><button className="silver-btn">{Customer.Membership}</button></td>
                                        <td>{Customer.LastShopping}</td>
                                        <td><RiMore2Fill
                                            style={{ color: "black", fontSize: "1.2em", marginRight: "1.2em" }}
                                        />
                                        </td>
                                    </tr>

                            })
                        }
                    </table>
                </div>

            </div>
        </main >
    );
};

export default Main;
