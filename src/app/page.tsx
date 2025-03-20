import CustomSlider, { Settings } from "@/components/CustomSlider";
import Image from "next/image";
import '@/styles/home.scss'

export default function Home() {
  const settings: Settings = {
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    showDot: true,
  }

  return (
    <>
      <CustomSlider {...settings}>
        <div className="banner-item">
          <img src="/assets/banner-1.jpg" />
        </div>
        <div className="banner-item">
          <img src="/assets/banner-2.jpg" />
        </div>
      </CustomSlider>
    </>
  )
}
