import { useState } from "react";

const trainersInfo = [
  {
    id: 1,
    name: "Кузнецов никита",
    info: "Педагог, главный тренер Опыт работы с 2014 г.",
    src: "/img/trainers_page/trainer_1.png",
  },
  {
    id: 2,
    name: "Кузнецов никита2",
    info: "Педагог, главный тренер Опыт работы с 2013 г.",
    src: "/img/trainers_page/trainer_2.png",
  },
  {
    id: 3,
    name: "Кузнецов никита3",
    info: "Педагог, главный тренер Опыт работы с 2015 г.",
    src: "/img/trainers_page/trainer_3.png",
  },
];

const TrainersPage = () => {
  const [count, setCount] = useState(0);

  const showNextTrainer = () => {
    const nextIndex = count + 1;
    if (nextIndex >= trainersInfo.length - 1) {
      setCount(0);
      return;
    }

    setCount(nextIndex);
  };

  const showPrevTrainer = () => {

    
    const prevIndex = count - 1;
    if (prevIndex < 0) {
      setCount(trainersInfo.length - 2);
      return;
    }

    setCount(prevIndex);
  };

  return (
    <div className="px-5 flex flex-col gap-y-4 h-auto  md:px-20">
      <h2 className="uppercase text-[#424242] font-medium text-[64px] md:text-9xl mb-10">
        Тренерский штаб
      </h2>

      <div className="grid grid-rows-2 grid-cols-1 gap-y-5 xl:grid-cols-3 xl:grid-rows-none gap-x-6">
        <div className=" h-auto bg-[#252525] py-2 px-10 flex flex-col justify-center gap-y-6">
          <h3 className="uppercase text-white text-[32px]">наши тренера</h3>
          <p className="text-[20px] text-[#9F9F9F] ">
            Тренерский штаб нашей школы — это команда высококвалифицированных
            специалистов, объединённых общей целью: раскрыть потенциал каждого
            ученика и помочь ему достичь значимых результатов. В основе
            деятельности наших тренеров лежит фундаментальный принцип «обучая
            —обучайся сам». Каждый тренер понимает: чтобы эффективно вести за
            собой учеников, необходимо постоянно совершенствовать собственные
            знания и навыки.
          </p>
        </div>

        <div className="w-auto grid grid-cols-[2fr_3fr] bg-[#252525] ">
          <div className="flex flex-col p-5 gap-y-4 items-c">
            <h3 className="text-[20px] md:text-[32px] text-white uppercase font-medium">
              {trainersInfo[count]?.name}
            </h3>
            <p className="text-[#9F9F9F] text-[14px] md:text-[20px]">
              {trainersInfo[count]?.info}
            </p>
            <p className="text-[#9F9F9F] text-[14px] md:text-[20px] flex items-end h-full">
              Лицензия с UEFA
            </p>
          </div>

          <div className=" bg-[linear-gradient(180deg,#1f1f1f_20%,#132831_51%,#1f1f1f_80%)] flex justify-center items-center">
            <img
              className=" object-cover max-h-[400px]"
              src={trainersInfo[count]?.src}
              alt=""
            />
          </div>
        </div>

        <div className=" hidden md:w-auto md:grid md:grid-cols-[2fr_3fr] md:bg-[#252525] ">
          <div className="flex flex-col p-5 gap-y-4 items-c">
            <h3 className="text-[20px] md:text-[32px] text-white uppercase font-medium">
              {trainersInfo[count + 1]?.name}
            </h3>
            <p className="text-[#9F9F9F] text-[14px] md:text-[20px]">
              {trainersInfo[count + 1]?.info}
            </p>
            <p className="text-[#9F9F9F] text-[14px] md:text-[20px] flex items-end h-full">
              Лицензия с UEFA
            </p>
          </div>

          <div className=" bg-[linear-gradient(180deg,#1f1f1f_20%,#132831_51%,#1f1f1f_80%)] flex justify-center items-center">
            <img
              className=" object-cover max-h-[400px]"
              src={trainersInfo[count + 1]?.src}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-x-5 mr-6">
        <button
          onClick={showPrevTrainer}
          className="bg-[#252525] p-2"
        >
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.5262 12.5756L7.1775 12.5756L17.1019 2.65125L14.4506 2.52663e-06L-2.52663e-06 14.4506L14.4506 28.9013L17.1019 26.25L7.1775 16.3256L34.5262 16.3256L34.5262 12.5756Z"
              fill="white"
            />
          </svg>
        </button>
        <button
          onClick={showNextTrainer}
          className="bg-[#252525] p-2"
        >
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.000119355 16.3257L27.3489 16.3257L17.4245 26.2501L20.0757 28.9014L34.5264 14.4507L20.0757 0.000115085L17.4245 2.65137L27.3489 12.5757L0.000119683 12.5757L0.000119355 16.3257Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default TrainersPage;
