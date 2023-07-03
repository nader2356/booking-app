


import Footer from "../../Component/footer/Footer";
import Header from "../../Component/header/Header";
import MailList from "../../Component/mailList/MailList";
import Navbar from "../../Component/navbar/Navbar";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
       
        <h1 className="homeTitle">Browse by property type</h1>
     
        <h1 className="homeTitle">Homes guests love</h1>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
