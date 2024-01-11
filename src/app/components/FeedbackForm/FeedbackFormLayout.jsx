import img from "../../assets/hand-holds-smartphone.png";
import Button from "../Button";

export default function FeedbackFormLayout() {
  return (
    <>
      <div className="relative">
        <form
          className="absolute top-20 right-0 flex flex-col items-center text-18px bg-white w-[31.4rem] z-10"
          action="/submit_form"
          method="post"
        >
          <div className="w-[28.4rem] mb-6 mt-6">
            <label className="text-lg" htmlFor="name">Ім'я</label>
            <input
              className="w-full h-9 rounded-[0.3rem] border-#D1D5DB focus:border-blue-500 hover:border-gray-700  border mt-2"
              type="text"
              autoComplete="off"
              id="name"
              name="name"
              required
            />
          </div>

          <div className="w-[28.4rem] mb-6">
            <label className="text-lg" htmlFor="gmail">
              Електронна пошта
            </label>
            <input
              className="w-full h-9 rounded-[0.3rem] border-#D1D5DB hover:border-gray-700 focus:border-blue-500 border mt-2"
              type="text"
              autoComplete="off"
              id="gmail"
              name="gmail"
              required
            />
          </div>

          <div className="w-[28.4rem] mb-6">
            <label className="text-lg" htmlFor="phone">Контактний телефон</label>
            <input
              className="w-full h-9 rounded-[0.3rem] border-#D1D5DB hover:border-gray-700 border mt-2"
              type="text"
              autoComplete="off"
              id="phone"
              name="phone"
              required
            />
          </div>

          <div className="w-[28.4rem] mb-6">
            <label className="text-lg" htmlFor="message">Ваше повідомлення</label>
            <textarea
              className="w-[28.4rem] rounded-[0.3rem] border-#D1D5DB hover:border-gray-700 focus:border-blue-500 border resize-none mt-2"
              id="message"
              name="message"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <Button
              type="button"
              className="px-0 mt-8 min-w-[12.38rem] font-normal bg-[deepBlue] border border-transparent hover:text-deepBlue hover:border hover:border-deepBlue"
            >
              Надіслати
            </Button>
          </div>
        </form>
      </div>

      <div>
        <img src={img.src} />
      </div>
    </>
  );
}
