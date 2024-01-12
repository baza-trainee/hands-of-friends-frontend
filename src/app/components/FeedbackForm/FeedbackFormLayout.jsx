import img from "../../assets/hand-holds-smartphone.png";
import Button from "../Button";

export default function FeedbackFormLayout() {
  return (
    <>
      <div className="relative">
        <form
          className="absolute top-20 right-0 flex w-[31.4rem] flex-col items-center bg-white shadow-md z-10"
          action="/submit_form"
          method="post"
        >
          {/* something */}
          <div className="w-[28.4rem] mb-6 mt-6">
            <label className="text-lg" htmlFor="name">
              Ім'я
            </label>
            <input
              className="w-full h-10 rounded-[0.3rem] mt-2 px-2 border-[#D1D5DB] hover:border-[#4B5563] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent border "
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
              className="w-full h-10 rounded-[0.3rem] mt-2 px-2 border-[#D1D5DB] hover:border-[#4B5563] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent border"
              type="text"
              autoComplete="off"
              id="gmail"
              name="gmail"
              required
            />
          </div>

          <div className="w-[28.4rem] mb-6">
            <label className="text-lg" htmlFor="phone">
              Контактний телефон
            </label>
            <input
              className="w-full h-10 rounded-[0.3rem] mt-2 px-2 border-[#D1D5DB] hover:border-[#4B5563] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent border"
              type="text"
              autoComplete="off"
              id="phone"
              name="phone"
              required
            />
          </div>

          <div className="w-[28.4rem] mb-6">
            <label className="text-lg" htmlFor="message">
              Ваше повідомлення
            </label>
            <textarea
              className="w-[28.4rem] rounded-[0.3rem] h-32 mt-2 px-2 py-1 border-[#D1D5DB] hover:border-[#4B5563] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent border resize-none"
              id="message"
              name="message"
              rows="4"
              required
            ></textarea>
          </div>
          <Button
            type="button"
            className="mb-6 min-w-[12.38rem]  bg-deepBlue  hover:text-deepBlue  hover:border-deepBlue"
          >
            Надіслати
          </Button>
        </form>
      </div>

      <div>
        <img src={img.src} />
      </div>
    </>
  );
}
