import CustomSlider, { Settings } from "@/components/CustomSlider";
import Image from "next/image";
import '@/styles/home.scss'
import Link from "next/link";
import { contents, events, lobbies, menuDrinks, sponsors } from "@/common/const";
import { icons } from "@/common/icons";

export default function Home() {
  const { FaChevronRight } = icons
  const settings: Settings = {
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    infinite: true,
    showDot: true,
  }
  const lobbySettings: Settings = {
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 8000,
    infinite: true,
    showDot: true,
  }
  const eventSettings: Settings = {
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 8000,
    infinite: true,
    showDot: false,
  }

  return (
    <div className="page-wrapper">
      <CustomSlider {...settings}>
        <div className="banner-item">
          <img src="/assets/banners/slide1-01.jpg" />
        </div>
        <div className="banner-item">
          <img src="/assets/banners/master-slides-02.jpg" />
        </div>
        <div className="banner-item">
          <img src="/assets/banners/master-slides-01.jpg" />
        </div>
      </CustomSlider>
      <main className="content-area">
        <section className="section-welcome">
          <div className="section-container">
            <div className="section-row">
              <div className="welcome-text-container">
                <div className="wrap-text-welcome">
                  <span className="title-2">
                    Quán ăn soái ca
                  </span>
                  <h3 className="title-3">
                    Chào mừng
                  </h3>
                  <p className="title-4">
                    Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.
                  </p>
                  <a href="about.html">
                    Our Story
                    <FaChevronRight />
                  </a>
                </div>
              </div>
              <div className="welcome-image-container">
                <div className="wrap-image-welcome">
                  <img src="/assets/our-story-01.jpg" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-intro">
          <div className="header-intro">
            <span className="title-1">Khám phá</span>
            <h3 className="title-2">Soái Ca</h3>
          </div>
          <div className="content-intro">
            <div className="content-intro-container">
              <div className="content-intro-row">
                {
                  contents.map(content => {
                    return (
                      <div key={content.img} className="content-intro-col">
                        <div className="wrap-pic-block">
                          <img src={content.img} alt="IMG-INTRO" />
                        </div>
                        <div className="wrap-text-block">
                          <h4 className="title-1">{content.name}</h4>
                          <p className="title-2">{content.description}</p>
                          <a href="#" className="title-3">
                            Learn More
                            <FaChevronRight size={10} />
                          </a>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </section>
        <section className="section-menu">
          <div className="section-container">
            <div className="title-section-ourmenu t-center m-b-22">
              <span className="tit2 t-center">Khám phá</span>
              <h3 className="tit5 t-center m-t-2">Menu của chúng tôi</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
