import { useState } from "react";

const useApp = () => {
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

  return{
    photosAdsPage,
    selectedPhotoIndex,
    setSelectedPhotoIndex,
    nextSlide,
    prevSlide,
  }
}

export default useApp