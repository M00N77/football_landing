const AboutPage = () => {
  return (
    <div className="px-20 bg-[linear-gradient(180deg,#1f1f1f_20%,#132831_51%,#1f1f1f_80%)] h-auto">

      <h2 className="uppercase text-[#424242] font-medium text-[64px] md:text-9xl mb-10 ">
        О нас
      </h2>

      <div className=" grid  md:grid-cols-[2fr_4fr] md:grid-rows-1 md:items-center md:justify-items-center ">
        <div className="relative h-auto">

  <picture className="w-full relative z-10">
    <source
      media="(max-width: 768px)"
      srcSet="/public/img/about_page/about_human_mobile.png"
    />
    <img
      className="w-full"
      src="/public/img/about_page/about_human_desktop.png"
      alt="Players"
    />
  </picture>


  <img
    className="w-full absolute top-0 md:hidden "
    src="public/img/main_page/shadow_slide_mobile.png"
    alt=""
  />
</div>


        <div className="  relative  ">

          <div className=" bg-[#252525] p-6 flex flex-col gap-y-12 justify-center  justify-items-center  md:gap-y-6 md:px-8 md:py-40 ">

            <h3 className="uppercase text-white text-[36px] md:text-[52px] flex justify-start">
              о футбольной школе “адмирал-вмф”
            </h3>

            <p className="text-[#9F9F9F] text-[20px]">
              С 2009 года футбольная школа «Адмирал-ВМФ» успешно развивает
              молодых спортсменов и помогает им раскрыть свой потенциал. За эти
              годы мы стали настоящей футбольной семьей, где каждый воспитанник
              получает индивидуальное внимание и профессиональную поддержку.
              Наша миссия - комплексное развитие личности! Мы не просто учим
              футболу, мы воспитываем сильных, целеустремленных и здоровых
              людей. Наша главная задача — помочь каждому юному спортсмену стать
              успешным как на поле, так и в жизни.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
