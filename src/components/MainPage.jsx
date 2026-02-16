import Header from "./Header";

const MainPage = () => {
  return (
    <div className="text-white  grid grid-rows-[100px_1fr] gap-y-10 bg-gradient-to-t from-[#1F1F1F] from-15% to-[#132831] to-85% ">
      <Header />
      <div className="relative flex justify-center items-start w-full">
        <div className="absolute top-0 inset-x-0 flex flex-col justify-center items-center gap-y-5 z-0 pt-5">
          <h4 className="text-[8px] tracking-[0px] shrink-0 min-[360px]:text-[16px] font-semibold uppercase tracking-[10px] sm:text-[18px] sm:tracking-[14px] md:text-[24px] md:tracking-[16px] lg:tracking-[24px]">
            футбольная школа
          </h4>
          <img
            src="/public/img/main_page/main_page_img.png"
            alt="Admiral Text"
            className="max-w-full w-full px-8 h-auto"
          />
        </div>

        <div className="relative z-10 w-full mt-20 md:mt-40 pointer-events-none">
          <picture className="block w-full">
            <source
              media="(max-width: 768px)"
              srcSet="/public/img/main_page/slide_mobile.png"
            />
            <img
              className="w-full h-auto align-bottom"
              src="/public/img/main_page/slide_desktop.png"
              alt="Players"
            />
          </picture>

          <div className="absolute bottom-0 left-0 w-full h-[25%] z-20">
            <picture className="block w-full h-full">
              <source
                media="(max-width: 768px)"
                srcSet="/public/img/main_page/shadow_slide_mobile.png"
              />

              <img
                className="w-full h-full"
                src="/public/img/main_page/shadow_slide_desktop.png"
                alt="Shadow"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
