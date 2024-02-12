import Hand from '../../../public/img/hand-heart.svg';

const Modal = () => {
    return (
        <div className="flex items-center justify-center rounded bg-lavender w-[503px] h-[618px]">
            <div className="flex flex-col gap-10">
                <h3>Дякуємо!</h3>
                <p>Ваше повідомлення було успішно надіслане. Очікуйте, з вами зв'яжеться наш спеціаліст.</p>
                <Hand alt="hand with heart" />
            </div>
        </div >
    )
}

export default Modal;