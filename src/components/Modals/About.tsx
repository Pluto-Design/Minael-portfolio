import BusinessMan from '../../assets/images/business-man.png'
import { useTranslate } from '../../hooks/useTranslate';

const AboutModal = () => {
    const { t } = useTranslate();

    return (
        <section className="w-full flex flex-row h-full max-h-full scrollbar-hidden overflow-y-scroll">
            <div className="w-full xl:w-7/12 h-full flex flex-col justify-start items-start md:px-8 pt-8 max-h-full">
                <h1 className={`text-4xl text-blue-600 w-full text-center md:text-start `}>{t.aboutModal.about}</h1>
                <div className="w-full h-full flex flex-1 max-h-full scrollbar-hidden overflow-y-scroll">
                    <p className={`text-lg lg:text-2xl font-source py-4 text-black max-h-full h-full scrollbar-hidden overflow-y-scroll`}>
                        {t.aboutModal.aboutText}
                    </p>
                </div>
            </div>
            <div className="w-5/12 h-full py-8 hidden xl:flex">
                <img src={BusinessMan} alt="background image" className="w-full h-full object-cover rounded-3xl" />
            </div>
        </section>
    )
}

export default AboutModal;