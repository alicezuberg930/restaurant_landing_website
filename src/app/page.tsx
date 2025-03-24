import CustomSlider, { Settings } from "@/components/CustomSlider";
import Image from "next/image";
import '@/styles/home.scss'
import Link from "next/link";
import { banners, contents, events, lobbies, menuDrinks, sponsors } from "@/common/const";
import { icons } from "@/common/icons";

export default function Home() {
  const { FaChevronRight, FaStar, FaPlay } = icons
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
        {
          banners.map(banner => {
            return (
              <div key={banner} className="banner-item">
                <img src={banner} />
                <div className="wrap-content-slide">
                  <span className="caption-slide-1" data-appear="rollIn">
                    Chào mừng đến
                  </span>
                  <h2 className="caption-slide-2" data-appear="lightSpeedIn">
                    Soái ca
                  </h2>
                  <div className="wrap-btn-slide" data-appear="slideInUp">
                    <Link href="/" className="button">
                      Xem menu
                    </Link>
                  </div>
                </div>
              </div>
            )
          })
        }
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
            <div className="title-section-menu">
              <span className="title-1">Khám phá</span>
              <h3 className="title-2">Menu của chúng tôi</h3>
            </div>
            <div className="row">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="item-menu">
                      <img src="./assets/menu/our-menu-01.jpg" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="item-menu">
                      <img src="./assets/menu/our-menu-02.jpg" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="item-menu">
                      <img src="./assets/menu/our-menu-03.jpg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="col-12">
                  <div className="item-menu">
                    <img src="./assets/menu/our-menu-04.jpg" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="item-menu">
                    <img src="./assets/menu/our-menu-05.jpg" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="item-menu">
                    <img src="./assets/menu/our-menu-06.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-event">
          <CustomSlider {...settings}>
            <div className="wrap-content-slide">
              <img src="/assets/events/bg-event-01.jpg" />
            </div>
            <div className="wrap-content-slide">
              <img src="/assets/events/bg-event-02.jpg" />
            </div>
            <div className="wrap-content-slide">
              <img src="/assets/events/bg-event-04.jpg" />
            </div>
          </CustomSlider>
        </section>
        <section className="section-booking">
          <div className="section-booking-container">
            <div className="row">
              <div className="col-lg-6 ">
                <div className="section-title-container">
                  <span className="title-1">
                    Reservation
                  </span>
                  <h3 className="title-2">Đặt bàn</h3>
                </div>
                <form className="wrap-form-booking">
                  <div className="row">
                    <div className="col-md-6">
                      <span className="txt9">Date</span>
                      <div className="input-wrapper">
                        <input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="name" placeholder="Name" />
                      </div>
                      <span className="txt9">Date</span>
                      <div className="input-wrapper">
                        <input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="name" placeholder="Name" />
                      </div>
                      <span className="txt9">Date</span>
                      <div className="input-wrapper">
                        <input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="name" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <span className="txt9">Date</span>
                      <div className="input-wrapper">
                        <input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="name" placeholder="Name" />
                      </div>
                      <span className="txt9">Date</span>
                      <div className="input-wrapper">
                        <input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="name" placeholder="Name" />
                      </div>
                      <span className="txt9">Date</span>
                      <div className="input-wrapper">
                        <input className="bo-rad-10 sizefull txt10 p-l-20" type="text" name="name" placeholder="Name" />
                      </div>
                    </div>
                  </div>
                </form>
                <div className="wrap-btn-booking">
                  <button type="submit" className="txt11">Đặt bàn</button>
                </div>
              </div>
              <div className="col-lg-6 ">
                <div className="wrap-pic-booking">
                  <img src="/assets/booking-01.jpg" alt="IMG-OUR" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-review">
          <div className="title-review">
            <span className="title-2">Khách hàng nói</span>
            <h3 className="title-8">Review</h3>
          </div>
          <CustomSlider {...settings}>
            {
              [1, 2, 3, 5].map(i => {
                return (
                  <div className="wrap-content-slide">
                    <div className="content-container">
                      <div className="pic-review">
                        <img src="/assets/reviews/avatar-04.jpg" alt="IGM-AVATAR" />
                      </div>
                      <div className="content-review" data-appear="fadeInUp">
                        <p className="txt12">
                          "We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui"
                        </p>
                        <div className="star-review">
                          <FaStar size={16} />
                          <FaStar size={16} />
                          <FaStar size={16} />
                          <FaStar size={16} />
                          <FaStar size={16} />
                        </div>
                        <div className="txt4" data-appear="fadeInUp">
                          Marie Simmons - New York
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </CustomSlider>
        </section>
        <section className="section-video">
          <div className="content-video">
            <span className="title-2">Khám phá</span>
            <h3 className="title-4">Video của chúng tôi</h3>
            <div className="btn-play">
              <FaPlay />
            </div>
          </div>
        </section>
        <section className="section-blog">
          <div className="blog-container">
            <div className="title-section-menu">
              <span className="title-2">Latest News</span>
              <h3 className="title-5">The Blog</h3>
            </div>
            <div className="row">
              {
                [1, 2, 3].map(i => {
                  return (
                    <div key={i} className="col-md-4 p-t-30">
                      <div className="wrap-pic-block">
                        <span className="block-date">14/11/2222</span>
                        <img src='/assets/blog/blog-01.jpg' alt="IMG-INTRO" />
                      </div>
                      <div className="wrap-text-block">
                        <h4 className="title-1">Best Places for Wine</h4>
                        <p className="title-2">Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</p>
                        <a href="#" className="title-3">
                          Continue reading
                          <FaChevronRight size={10} />
                        </a>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
