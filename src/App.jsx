import "./index.css";
import useApp from "./hooks/useApp";
import MainPage from "./components/MainPage";
import AdsPage from "./components/AdsPage";
import AboutPage from "./components/AboutPage";
import AdvantagesPage from "./components/AdvantagesPage";
import TrainersPage from "./components/TrainersPage";



function App() {

  const {
  photosAdsPage,
  selectedPhotoIndex,
  setSelectedPhotoIndex,
  nextSlide,
  prevSlide,
} = useApp();

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
