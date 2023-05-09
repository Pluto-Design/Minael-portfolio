import BackgroundPersonShade from '../../assets/images/SmilingPersonShade.png';
import BackgroundPerson from '../../assets/images/SmilingPerson.png';
import ArrowRight from '../../assets/svg/ArrowRightWhite.svg'
import { useTranslate } from '../../hooks/useTranslate';

const ContactModal = () => {
    const { t } = useTranslate();

    return (
        <section className="w-full flex flex-row h-full pb-12 overflow-hidden">
            <div className="w-7/12 hidden 2xl:flex h-full items-center justify-center relative">
                <img src={BackgroundPersonShade} alt="Background Person Shade" className="absolute -left-1/5 w-full h-full top-0 bg-cover" />
                <img src={BackgroundPerson} alt="Background Person" className="absolute left-[10%] top-[10%]" />
            </div>
            <div className="w-full 2xl:w-5/12 flex h-full justify-center items-end flex-col">
                <h1 className={`w-full text-center 2xl:text-end text-4xl text-blue-600 py-12`}>{t.contactModal.contact}</h1>
                <ContactButton text={t.contactModal.emailMe} />
                <ContactButton text={t.contactModal.linkedin} />
                <ContactButton text={t.contactModal.facebook} />
                <ContactButton text={t.contactModal.instagram} />
            </div>
        </section>
    )
}

const ContactButton = ({ text, href }: { text: string, href?: string }) => {
    return (
        <a href={href} className={`text-center group flex relative items-center justify-center hover:bg-blue-500 text-white my-4 w-full cursor-pointer uppercase rounded-full py-6 bg-blue-600 font-bold text-xl sm:text-3xl`}>
            <img src={ArrowRight} alt="Button select arrow" className="md:group-hover:opacity-100 opacity-0 absolute left-5 pointer-events-none" />
            {text}
        </a>
    )
}

export default ContactModal;