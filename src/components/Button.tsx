import ArrowRight from '../assets/svg/ArrowRight.svg'

interface ButtonProps {
    text: string;
    onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} className="group flex relative items-center justify-center bg-white my-4 font-ps2p w-full lg:w-4/12 uppercase rounded-full py-4 text-blue-600 font-bold text-xl xl:text-3xl font-ps2p">
            <img src={ArrowRight} alt="Button select arrow" className="lg:flex hidden group-hover:opacity-100 opacity-0 absolute left-5 pointer-events-none" />
            {text}
        </button>
    )
}

export default Button;