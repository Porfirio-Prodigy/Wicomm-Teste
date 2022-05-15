import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Carousel from './components/Carousel';
import ContactUs from './components/ContactUs';
import HeaderMenuBar from './components/HeaderMenuBar';
import HeaderSubMenu from './components/HeaderSubMenu';
import Ofertas from './components/Ofertas';
import Items from './components/Items';
import HelpButton from './components/HelpButton';
import MultipleItems from './components/MultipleCarousel';
import Anuncios from './components/Anuncios';
import Empresas from './components/Empresas';
import Artigos from './components/Artigos';
import Comentarios from './components/Comentarios';
import Newsletter from './components/Newsletter';
import Sobre from './components/Sobre';
import Footer from './components/Footer';

// Imagens
import aacd from './assets/empresas/aacd.svg';
import apae from './assets/empresas/apae.svg';
import assocsanta from './assets/empresas/associacao_santa_catarina.svg';
import caedu from './assets/empresas/caedu.svg';
import carrefour from './assets/empresas/carrefour.svg';
import safra from './assets/empresas/safra.svg';
import cristofoli from './assets/empresas/cristofoli.svg';
import ecafix from './assets/empresas/ecafix.svg';
import mikatos from './assets/empresas/mikatos.svg';
import supermedy from './assets/empresas/supermedy.svg';
import techline from './assets/empresas/techline.svg';
import welmy from './assets/empresas/welmy.svg';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContactUs/>
        <HeaderMenuBar/>
        <HeaderSubMenu/>
      </header>
      <main className='main'>
        <Carousel />
        <Ofertas/>
        <Items />
        <HelpButton />
        <MultipleItems txt="Mais vendidos"/>
        <Anuncios />
        <Empresas 
          titulo="Quem conhece aprova"
          src1={aacd}
          src2={apae}
          src3={safra}
          src4={assocsanta}
          src5={caedu}
          src6={carrefour}
          src7={mikatos}
          />
        <MultipleItems txt="Novidades"/>
        <Empresas 
        titulo="As melhores marcas"
          src1={mikatos}
          src2={techline}
          src3={supermedy}
          src4={ecafix}
          src5={cristofoli}
          src6={welmy}
          src7={aacd}/>
        <Artigos/>
        <Comentarios/>
        <Sobre />
        <Newsletter />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
