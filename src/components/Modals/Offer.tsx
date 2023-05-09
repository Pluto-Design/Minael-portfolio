import Links from "../../assets/data/Links"
import { useTranslate } from "../../hooks/useTranslate"

const OfferModal = () => {
    const { t } = useTranslate()

    return (
        <section className="w-full flex flex-col h-full">
            <div className="w-full h-full flex my-4 flex-col 2xl:flex-row justify-start items-center 2xl:justify-evenly">
                <OfferCard 
                    description={t.offerModal.translation}
                    title="TRANSLATION" 
                    to={`mailto:${Links.email}?subject=Translation`}
                />
                <OfferCard 
                    description={t.offerModal.proofreading}
                    title="PROOFREADING" 
                    to={`mailto:${Links.email}?subject=Proofreading`}
                />
                <OfferCard 
                    description={t.offerModal.subtitling}
                    title="SUBTITLING" 
                    to={`mailto:${Links.email}?subject=Subtitling`} 
                />
            </div>
        </section>
    )
}

const OfferCard = ({ to, title, description }: { to: string, title: string, description: string }) => {
    const { t } = useTranslate()

    return (
        <div className="2xl:h-full w-full 2xl:w-1/3 flex items-center justify-center flex-col mx-4 2xl:pb-0 pb-12">
            <div className="h-full w-full bg-blue-600 rounded-3xl px-4 flex flex-col items-center justify-start">
                <h1 className={`w-full text-center text-xl md:text-3xl uppercase pt-8`}>{title}</h1>
                <div className="w-10/12 bg-white flex-1 flex mt-8 rounded-3xl items-center justify-center">
                    <p className={`py-3 px-6 text-base lg:text-xl text-blue-600 font-source font-bold text-center`}>{description}</p>
                </div>
                <a className={`my-6 bg-white text-blue-600 text-2xl py-4 rounded-full w-10/12 text-center`} href={to}>{t.offerModal.order}</a>
            </div>
        </div>
    )
}

export default OfferModal;