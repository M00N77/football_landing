import "./index.css";

import MainPage from "./components/MainPage";
import AdsPage from "./components/AdsPage";
import AboutPage from "./components/AboutPage";
import AdvantagesPage from "./components/AdvantagesPage";
import { useState } from "react";

function App() {
  const photosAdsPage = [
    {
      id: 1,
      src: "/public/img/adt_page/adt_page_photo_1.png",
    },
    {
      id: 2,
      src: "/public/img/adt_page/adt_page_photo_2.png",
    },
    {
      id: 3,
      src: "/public/img/adt_page/adt_page_photo_3.png",
    },
    {
      id: 4,
      src: "/public/img/adt_page/adt_page_photo_4.png",
    },
    {
      id: 5,
      src: "/public/img/adt_page/adt_page_photo_5.png",
    },
  ];

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const nextSlide = () => {
    const nextindex = selectedPhotoIndex + 1;

    if (nextindex % photosAdsPage.length === 0) {
      setSelectedPhotoIndex(0);
      return;
    }
    setSelectedPhotoIndex(nextindex);
  };

  const prevSlide = () => {
    const prevIndex = selectedPhotoIndex - 1;
    if (prevIndex < 0) {
      setSelectedPhotoIndex(photosAdsPage.length - 1);
      return;
    }

    setSelectedPhotoIndex(prevIndex);
  };
  return (
    <>
      <MainPage />

      <div className="bg-[#1F1F1F] ">
        <AdsPage
          photosAdsPage={photosAdsPage}
          selectedPhotoIndex={selectedPhotoIndex}
          setSelectedPhotoIndex={setSelectedPhotoIndex}
          onNextSlide={nextSlide}
          onPrevSlide={prevSlide}
        />
        <AboutPage />

        <AdvantagesPage />
      </div>

      <footer>footer</footer>
    </>
  );
}

export default App;
