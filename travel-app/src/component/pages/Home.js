import App from '../../App';
import HeroSection from '../HeroSection/HeroSection';
import react from 'react';
import Card from '../CardItem/Card';
import Footer from '../Footer/Footer';

function Home (){
    return(
        <>
        <HeroSection />
        <Card />
        <Footer />
        </>
    );
}

export default Home;