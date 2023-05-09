import { PortfolioCardData, PortfolioCard } from "../../assets/data/PortfolioCardData";

const PortfolioModal = () => {
    return (
        <section className="w-full flex flex-wrap items-center justify-center flex-row overflow-y-scroll max-h-full mb-6 scrollbar-hidden md:px-24">
            {PortfolioCardData.map((data: PortfolioCard, index) => {
                return <PortfolioCard key={index} title={data.title} description={data.description} bgImage={data.bgImage} date={data.date} />
            })}
        </section>
    )
}

const PortfolioCard = ({ title, description, bgImage, date }: { title: string, description: string, bgImage: string, date: string }) => {
    return (
        <div className="w-full h-1/2 lg:w-5/12 lg:h-[48%] mt-4 md:mt-0 rounded-3xl md:mx-8 relative flex items-center justify-center mb-3 cursor-pointer group">
            <div className="z-40 rounded-3xl w-full bg-black opacity-70 absolute left-0 top-0 h-full"></div>
            <img src={bgImage} alt={description} className="absolute left-0 top-0 opacity-100 object-cover rounded-3xl w-full h-full z-20 pointer-events-none" />
            <div className="z-50 absolute left-0 top-0 w-full h-full rounded-3xl flex justify-center items-center">
                <div className="flex items-start flex-col w-full h-full justify-center opacity-0 group-hover:opacity-100 ease-in-out transition-all duration-200">
                    <p className={`text-4xl font-bold pt-8 text-center w-full font-source`}>{title}</p>
                    <div className="w-full h-full flex flex-1 justify-center items-center px-8">
                        <p className={`text-sm wd:text-base font-bold text-center w-full max-h-full scrollbar-hidden overflow-y-scroll font-source`}>{description}</p>
                    </div>
                </div>
            </div>
            <div className="z-50 flex-col group-hover:opacity-0 ease-in-out transition-all duration-200 w-full h-full rounded-3xl flex justify-center items-center">
                <p className={`text-4xl font-bold text-center font-source`}>{title}</p>
                <p className={`text-2xl font-bold text-center font-source`}>{date}</p>
            </div>
        </div>
    )
}

export default PortfolioModal;