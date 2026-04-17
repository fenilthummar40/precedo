import Header from "../Component/Header.jsx";
import Hero from "../Component/Hero.jsx";
import Chart from "../Component/Chart.jsx";
import Street from "../Component/Street.jsx";
import Secret from "../Component/Secret.jsx";
import Game from "../Component/Game.jsx";
import Precedo from "../Component/Precedo.jsx";
import Trusted from "../Component/Trusted.jsx";
import Frequently from "../Component/Frequently.jsx";
import Companies from "../Component/Companies.jsx";
import Footer from "../Component/Footer.jsx";
import {assets} from "../assets/assets.js";

function Home() {

    const sectionStyle = {
        backgroundImage: `
        url(${assets.bg_image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
    return (
        <>
            <div className="bg-gradient-to-r from-[#0f172a] to-[#1e1b4b]">
                <div style={sectionStyle}>
                    <Header/>
                    <Hero/>
                    <Chart/>
                    <Street/>
                    <Secret/>
                    <Game/>
                    <Precedo/>
                    <Trusted/>
                    <Frequently/>
                    <Companies/>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default Home
