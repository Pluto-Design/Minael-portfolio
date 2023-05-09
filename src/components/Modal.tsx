import CloseIcon from '../assets/svg/Close.svg'

interface ModalProps {
    children: React.ReactNode | React.ReactNode[];
    closeModal: VoidFunction
}

const Modal = ({ children, closeModal }: ModalProps) => {
    return (
        <section className="w-screen h-screen absolute top-0 left-0 z-50 flex justify-center items-center bg-opacity-80 bg-black">
            <div className="w-full md:w-10/12 flex h-full md:h-5/6 bg-white opacity-90 flex-col md:rounded-xl">
                <div className="w-full h-12 md:mt-4 flex items-center justify-end px-4 md:px-8 pt-4">
                    <img src={CloseIcon} alt="close modal" className="md:h-12 md:w-12 w-8 h-8 cursor-pointer" onClick={closeModal} />
                </div>
                <div className="w-full h-full py-4 flex flex-1 px-4 md:px-8 scrollbar-hidden overflow-y-scroll">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default Modal;