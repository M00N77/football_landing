const AdvantagesPage = () => {
  return (
    <div className="w-full px-5 md:px-20 ">
      <h2 className="uppercase text-[#424242] font-medium text-[64px] md:text-9xl mb-10">
        Наши преимущества
      </h2>

      <div className=" w-full flex justify-between gap-x-4 overflow-x-auto no-scrollbar md:overflow-x-hidden">
        <article className="max-w-[300px]  flex-[0_0_85%]  md:max-w-[500px] md:flex-1">
          <div className="relative">
            <h3 className="absolute bottom-0 left-4 text-white text-[26px] md:text-[32px] uppercase font-medium z-10">
              Школа вратарей
            </h3>
            <img
              className="w-full brightness-75"
              src="/public/img/advantages_page/Goalkeeping_school_img.png"
              alt=""
            />
          </div>
          <div className="bg-[#252525]">
            <p className="text-[20px] text-[#9F9F9F] px-6 py-10">
              В нашей школе организованы специализированные тренировки для
              вратарей-ключевого звена любой футбольной команды. Занятия
              проходят под руководством опытного тренера. Программа тренировок
              выстроена системно и охватывает все ключевые аспекты подготовки
              вратаря.
            </p>
          </div>
        </article>

        <article className="max-w-[300px] md:max-w-[500px]  flex-[0_0_85%] md:flex-1">
          <div className="relative">
            <h3 className="absolute bottom-0 left-4 text-white text-[26px] md:text-[32px] uppercase font-medium z-10">
              Летние сборы и <br /> выездные турниры
            </h3>

            <img
              className="w-full brightness-75"
              src="/public/img/advantages_page/Goalkeeping_school_img.png"
              alt=""
            />
          </div>
          <div className="bg-[#252525]">
            <p className="text-[20px] text-[#9F9F9F] px-6 py-10">
              В нашей школе организованы специализированные тренировки для
              вратарей-ключевого звена любой футбольной команды. Занятия
              проходят под руководством опытного тренера. Программа тренировок
              выстроена системно и охватывает все ключевые аспекты подготовки
              вратаря.
            </p>
          </div>
        </article>

        <article className="max-w-[300px] md:max-w-[500px]  flex-[0_0_85%] md:flex-1">
          <div className="relative">
            <h3 className="absolute bottom-0 left-4 text-white text-[26px] md:text-[32px] uppercase font-medium z-10">
              Школа вратарей
            </h3>
            <img
              className="w-full brightness-75"
              src="/public/img/advantages_page/Goalkeeping_school_img.png"
              alt=""
            />
          </div>
          <div className="bg-[#252525]">
            <p className="text-[20px] text-[#9F9F9F] px-6 py-10">
              В нашей школе организованы специализированные тренировки для
              вратарей-ключевого звена любой футбольной команды. Занятия
              проходят под руководством опытного тренера. Программа тренировок
              выстроена системно и охватывает все ключевые аспекты подготовки
              вратаря.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};
export default AdvantagesPage;
