import BackgroundImg from './assets/images/background.jpg'
import FranceFlag from './assets/svg/France.svg';
import UKFlag from './assets/svg/UK.svg';
import Button from './components/Button'
import { useState } from 'react';
import Modal from './components/Modal';
import AboutModal from './components/Modals/About';
import ContactModal from './components/Modals/Contact';
import OfferModal from './components/Modals/Offer';
import PortfolioModal from './components/Modals/Portfolio';
import { useTranslate } from './hooks/useTranslate';

const Home = () => {
  const { t, invertLang } = useTranslate();

  const [ModalsView, setModalsView] = useState<{ [key: string]: boolean }>({
    About: false,
    Portfolio: false,
    Offer: false,
    Contact: false,
  })

  const switchModal = (name: string) => {
    setModalsView({ ...ModalsView, [name]: !ModalsView[name] })
  }

  return (
    <>
      <main
        className={`w-full h-screen items-center flex justify-center relative lg:pt-16`}
      >
        <img src={BackgroundImg} className="w-full h-full absolute object-cover top-0 left-0 pointer-events-none" alt="background image" />
        <section className="z-50 w-11/12 md:w-8/12 h-full pt-4 flex flex-col items-center justify-center">
          <p className={`text-white text-base lg:text-xl py-4 text-center font-ps2p`}>{t.common.professional}</p>
          <h1 className={`text-white text-2xl lg:text-5xl text-center uppercase font-ps2p`}>{t.common.TRANSLATION}</h1>
          <p className={`text-white text-sm lg:text-lg py-4 text-center font-ps2p`}>{t.common["for your video game"]}</p>

          <div className="flex justify-center w-full items-center xl:mt-8 flex-col">
            <Button onClick={() => switchModal("About")} text={t.common.about} />
            <Button onClick={() => switchModal("Portfolio")} text={t.common.portfolio} />
            <Button onClick={() => switchModal("Offer")} text={t.common.offer} />
            <Button onClick={() => switchModal("Contact")} text={t.common.contact} />

            <div className="flex flex-col w-full lg:w-1/3 md:mt-4 items-center">
              <p>{t.common.languages}</p>
              <div className="flex flex-row w-11/12 justify-evenly items-center">
                <button onClick={() => invertLang("en")}>
                  <img src={UKFlag} alt="Flag United Kingdom" className="w-24 h-24 pointer-events-none cursor-pointer" />
                </button>
                <button onClick={() => invertLang("fr")}>
                  <img src={FranceFlag} alt="Flag France" className="w-24 h-24 pointer-events-none cursor-pointer" />
                </button>
              </div>
              {/* <p className="fixed bottom-4">Made by <a href="https://plutodesign.xyz" className="text-blue-600">Pluto Design</a></p> */}
            </div>
          </div>
        </section>
      </main>
      {ModalsView.About && (
        <Modal closeModal={() => switchModal("About")}>
            <AboutModal  />
        </Modal>  
      )}
      {ModalsView.Portfolio && (
        <Modal closeModal={() => switchModal("Portfolio")}>
          <PortfolioModal />
        </Modal>
      )}
      {ModalsView.Offer && (
        <Modal closeModal={() => switchModal("Offer")}>
            <OfferModal />
        </Modal>
      )}
      {ModalsView.Contact && (
        <Modal closeModal={() => switchModal("Contact")}>
          <ContactModal />
        </Modal>
      )}
    </>
  )
}

export default Home;