import CustomSlider, { Settings } from "@/components/CustomSlider";
import Image from "next/image";
import '@/styles/home.scss'
import Link from "next/link";

export default function Home() {
  const settings: Settings = {
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    showDot: true,
  }
  const sponsors = [
    {
      src: '/assets/districtk.png',
      height: 140
    },
    {
      src: '/assets/doridori.png',
      height: 140
    },
    {
      src: '/assets/khefoodgarden.png',
      height: 80
    },
    {
      src: '/assets/footer-logo.png',
      height: 140
    },
    {
      src: '/assets/Sac.png',
      height: 140
    },
    {
      src: '/assets/saynua.png',
      height: 80
    },
  ]

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
                  <div className="col-logo">
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
            <ul className="nav">
              <li id="tab-món-ăn" className="tab has-icon" role="presentation">
                <a href="#tab_món-ăn" role="tab" aria-selected="false" aria-controls="tab_món-ăn"><span>Món ăn</span></a>
              </li>
              <li id="tab-thức-uống" className="tab has-icon active" role="presentation">
                <a href="#tab_thức-uống" role="tab" aria-selected="true" aria-controls="tab_thức-uống"><span>Thức uống</span></a>
              </li>
            </ul>
            <div className="tab-panels">

            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
