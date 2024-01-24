// Header.js
import Container from "../Container";
import BreadCrumbs from "../BreadCrumbs";

const TendersHeader = ({ handleTabClick, activeTab }) => (
  <div className="bg-image-tenders min-h-[620px]">
    <Container>
      <BreadCrumbs
        className="pt-11 mb-[319px] z-10"
        href="/"
        text="Назад"
        textColor="white"
      />
      <h2 className="text-3xl text-white font-bold mb-16">Тендери</h2>
      <div className="flex space-x-4 gap-8">
        <button
          onClick={() => handleTabClick("all")}
          className={`focus:outline-none w-[180px] text-start text-2xl pb-2 ${
            activeTab === "all"
              ? " text-white z-10 border-b-2"
              : "bg-gray-300 text-fontGray border-b-2 hover:text-white transition border-transparent"
          }`}
        >
          Усі
        </button>
        <button
          onClick={() => handleTabClick("active")}
          className={`focus:outline-none w-[180px] text-start text-2xl pb-2 ${
            activeTab === "active"
              ? " text-white border-b-2"
              : "bg-gray-300 text-fontGray border-b-2 hover:text-white transition border-transparent "
          }`}
        >
          Активні
        </button>
      </div>
    </Container>
  </div>
);

export default TendersHeader;
