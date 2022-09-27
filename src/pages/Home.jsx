import React from "react";
import CardList from "../components/CardList";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home(){
    return(
        <div className="home">
            <Header/>
            <CardList/>
            <Footer/>
        </div>
    )
}

export default Home