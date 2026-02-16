const AdsPage = ({
  photosAdsPage,
  selectedPhotoIndex,
  onPrevSlide,
  onNextSlide,

}) => {
  return (
    <div className="w-full px-20 flex flex-col justify-center">
      <h2 className="uppercase text-[#424242] font-medium text-[64px] md:text-9xl mb-10">
        ОБЪЯВЛЕНИЯ
      </h2>

      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-x-4">
        <div className="flex flex-col h-full">
          <div className="flex relative w-full h-full">
            <button
              className="absolute top-1/2"
              onClick={onPrevSlide}
            >
              <div className="bg-black opacity-50 p-4 hover:opacity-40">
                <svg
                  width="22"
                  height="40"
                  viewBox="0 0 22 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 2L2 20L20 38"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </button>

            <img
              className="max-w-full w-full h-auto object-cover block"
              src={photosAdsPage[selectedPhotoIndex].src}
            />

            <button
              className="absolute top-1/2 right-0"
              onClick={onNextSlide}
            >
              <div className="bg-black opacity-50 p-4 hover:opacity-40">
                <svg
                  width="22"
                  height="40"
                  viewBox="0 0 22 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L20 20L2 38"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>

          <div className="hidden lg:grid grid-cols-4 gap-4 mt-4 ">
            {photosAdsPage.map((img, index) => {
              if (index !== selectedPhotoIndex) {
                return (
                  <img
                    key={img.id}
                    className="w-full h-full object-fit h-auto"
                    src={img.src}
                    alt=""
                  />
                );
              }
            })}
          </div>
        </div>

        <div className="flex flex-col justify-between bg-gray-900 px-4 py-10  gap-y-4  h-full">
          <div className="flex flex-col gap-y-8">
            <h3 className="font-bold text-white uppercase text-xl md:text-4xl ">
              Новое отделение Царицыно
            </h3>

            <p className="text-sm  md:text-[13px] 2xl:text-3xl  text-[#D1D1D1] whitespace-normal break-words leading-relaxed ">
              Осенью 2025 года футбольная школа «АдмиралВМФ» открыла новое
              отделение на базе современного стадиона «Огонёк» в районе
              Царицыно. Это значимый шаг в развитии школы: новая площадка
              позволяет существенно повысить качество подготовки. Стадион
              отвечает всем требованиям для тренировок и игр в формате 11 × 11!
              На базе нового объекта осуществляется подготовка команд к участию
              в соревнованиях под эгидой Московской Федерации футбола!
            </p>
          </div>

          <button className="w-full bg-white text-[8px] text-black font-semibold uppercase px-4 py-3 xl:text-[20px]  bg-gray-200 transition">
            Записаться на первое занятие
          </button>
        </div>
      </div>
    </div>
  );
};
export default AdsPage;
