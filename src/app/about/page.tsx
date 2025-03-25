import { icons } from '@/common/icons'
import '@/styles/about.scss'
import Link from 'next/link'

const AboutPage = () => {
    const { FaPlay } = icons

    return (
        <div>
            <section className="bg-title-page">
                <h2 className="title-6">Về chúng tôi</h2>
            </section>
            <section className='section-about'>
                <div className='about-container'>
                    <span className="title-2">Nhà hàng Soái Ca</span>
                    <h3 className="title-3">Câu truyện</h3>
                    <p className="">
                        Fusce at risus eget mi auctor pulvinar. Suspendisse maximus venenatis pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam purus purus, lacinia a scelerisque in, luctus vel felis. Donec odio diam, dignissim a efficitur at, efficitur et est. Pellentesque semper est ut pulvinar ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla et leo accumsan, egestas velit ac, fringilla tortor. Sed varius justo sed luctus mattis.
                    </p>
                </div>
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
            <section className='bg1-pattern'>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-6 text-container">
                            <div className="wrap-text-delicious">
                                <span className="title-2">Ngon miệng</span>
                                <h3 className="title-3">Công thức</h3>
                                <p className="t-center m-b-22 size3 m-l-r-auto">
                                    Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 img-container">
                            <div className="wrap-pic-delicious">
                                <img src="/assets/our-story-01.jpg" alt="IMG-OUR" />
                            </div>
                        </div>
                    </div>
                    <div className='separator'></div>
                    <div className="row">
                        <div className="col-md-6 img-container">
                            <div className="wrap-pic-delicious">
                                <img src="/assets/our-story-02.jpg" alt="IMG-OUR" />
                            </div>
                        </div>

                        <div className="col-md-6 text-container">
                            <div className="wrap-text-delicious">
                                <span className="title-2">Lãng mạng</span>
                                <h3 className="title-3">Nhà hàng</h3>
                                <p className="t-center m-b-22 size3 m-l-r-auto">
                                    Fusce iaculis, quam quis volutpat cursus, tellus quam varius eros, in euismod lorem nisl in ante. Maecenas imperdiet vulputate dui sit amet vestibulum. Nulla quis suscipit nisl.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='parallax'>
                <div className='overlay'></div>
            </section>
            <section className='section-chef'>
                <div className='chef-container'>
                    <span className="title-2">Hãy gặp</span>
                    <h3 className="title-5">đầu bếp</h3>
                    <div className="row">
                        {
                            [1, 2, 3].map(i => {
                                return (
                                    <div key={i} className="col-lg-4 chef-item">
                                        <div className="wrap-cir-pic">
                                            <img src="/assets/reviews/avatar-04.jpg" alt="IGM-AVATAR" />
                                        </div>
                                        <div className="block-info">
                                            <Link href="#" className="txt34">Peter Hart</Link>
                                            <span className="dis-block t-center txt35 p-b-25">Chef</span>
                                            <p className="t-center">
                                                Donec porta eleifend mauris ut effici-tur. Quisque non velit vestibulum, lob-ortis mi eget, rhoncus nunc
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage