import CustomSlider, { Settings } from "@/components/CustomSlider";
import Image from "next/image";
import '@/styles/home.scss'
import Link from "next/link";
import { lobbies, menuDrinks, sponsors } from "@/common/const";

export default function Home() {
  const settings: Settings = {
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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

  return (
    <div className="page-wrapper">
      <CustomSlider {...settings}>
        <div className="banner-item">
          <img src="/assets/banner-1.jpg" />
        </div>
        <div className="banner-item">
          <img src="/assets/banner-2.jpg" />
        </div>
      </CustomSlider>
      <main className="content-area">
        <section className="section">
          <div className="section-content">
            <div className="title-col">
              <div className="col-inner">
                <div className="section-title-container">
                  <h2>SOÁI CA</h2>
                </div>
                <p>ĐIỂM CHẠM DIỄM LỆ CỦA TINH HOA ĐÔNG DƯƠNG</p>
              </div>
            </div>
            {
              sponsors.map(sponsor => {
                return (
                  <div key={sponsor.src} className="col-logo">
                    <div className="col-inner">
                      <div className="text-center">
                        <Link title={sponsor.src} className="brand-logo-item" href="/">
                          <img height={sponsor.height} alt={sponsor.src} src={sponsor.src} />
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </section>
        <section className="section">
          <div className="section-content">
            <div className="title-col">
              <div className="col-inner">
                <div className="section-title-container">
                  <h2>THỰC ĐƠN</h2>
                </div>
                <p>Thập Phương Mỹ Vị</p>
              </div>
            </div>
            <div className="menu-wrapper">
              <ul className="nav">
                <li id="tab-món-ăn" className="tab has-icon" role="presentation">
                  <a href="#tab_món-ăn" role="tab" aria-selected="false" aria-controls="tab_món-ăn">
                    <span>Món ăn</span>
                  </a>
                </li>
                <li id="tab-thức-uống" className="tab has-icon active" role="presentation">
                  <a href="#tab_thức-uống" role="tab" aria-selected="true" aria-controls="tab_thức-uống">
                    <span>Thức uống</span>
                  </a>
                </li>
              </ul>
              <div className="tab-panels">
                <div className="panel active">
                  <CustomSlider {...settings}>
                    {
                      menuDrinks.slice(0, Math.ceil(menuDrinks.length / 4)).map((_, i) => {
                        return (
                          <div className="col-menu-wrapper" key={i}>
                            {
                              menuDrinks.slice(i * 4, (i * 4) + 4).map(menu => {
                                return (
                                  <div key={menu.img} className="col-menu-item">
                                    <div className="featured-box">
                                      <div className="icon-box-img">
                                        <img alt={menu.img} src={menu.img} />
                                      </div>
                                      <div className="icon-box-text">
                                        <h4 className="title">{menu.name}</h4>
                                        <p>{menu.type}</p>
                                        <hr />
                                        <p>{menu.name}</p>
                                      </div>
                                    </div>
                                  </div>
                                )
                              })
                            }
                          </div>
                        )
                      })
                    }
                  </CustomSlider>
                </div>
                <div className="panel">
                  <CustomSlider {...settings}>
                  </CustomSlider>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="section-content">
            <div className="title-col">
              <div className="col-inner">
                <div className="section-title-container">
                  <h2>KHÔNG GIAN QUÁN</h2>
                </div>
                <p>Các gian phòng tại Nam Phương Lầu</p>
              </div>
            </div>
            <div className="lobby-wrapper">
              <div className="col-inner">
                <CustomSlider {...lobbySettings}>
                  {
                    lobbies.map(lobby => {
                      return (
                        <div key={lobby.img} className="gallery-item">
                          <Link href='/'>
                            <div className="box-blog-post">
                              <div className="box-image">
                                <div className="image-cover">
                                  <img src={lobby.img} alt={lobby.name} />
                                </div>
                              </div>
                              <div className="box-text">
                                <h5 className="post-title">{lobby.name}</h5>
                              </div>
                            </div>
                          </Link>
                        </div>
                      )
                    })
                  }
                </CustomSlider>
                <button className="see-more">
                  <span>XEM THÊM</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
