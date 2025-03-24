import '@/styles/footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer-container'>
                <div className='row'>
                    <div className='col-sm-6 col-md-4'>
                        <h4 className="txt13">Liên hệ</h4>
                        <ul className="m-b-70">
                            <li className="txt14 m-b-14">
                                <i className="fa fa-map-marker fs-16 dis-inline-block size19" aria-hidden="true"></i>
                                8th floor, 379 Hudson St, New York, NY 10018
                            </li>

                            <li className="txt14 m-b-14">
                                {/* <i className="fa fa-phone fs-16 dis-inline-block size19" aria-hidden="true"></i> */}
                                (+1) 96 716 6879
                            </li>

                            <li className="txt14 m-b-14">
                                {/* <i className="fa fa-envelope fs-13 dis-inline-block size19" aria-hidden="true"></i> */}
                                contact@site.com
                            </li>
                        </ul>
                        <h4 className="txt13">Giờ mở cửa</h4>
                        <ul>
                            <li className="txt14">09:30 AM - 11:00 PM</li>
                            <li className="txt14">Every Day</li>
                        </ul>
                    </div>
                    <div className='col-sm-6 col-md-4'>
                        <h4 className="txt13 m-b-33">Latest twitter</h4>
                        <div className="m-b-25">
                            <span className="fs-13 color2 m-r-5">
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </span>
                            <a href="#" className="txt15">
                                @colorlib
                            </a>

                            <p className="txt14 m-b-18">
                                Activello is a good option. It has a slider built into that displays the featured image in the slider.
                                <a href="#" className="txt15">
                                    https://buff.ly/2zaSfAQ
                                </a>
                            </p>

                            <span className="txt16">21 Dec 2017</span>
                        </div>
                        <div>
                            <span className="fs-13 color2 m-r-5">
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </span>
                            <a href="#" className="txt15">@colorlib</a>

                            <p className="txt14 m-b-18">
                                Activello is a good option. It has a slider built into that displays
                                <a href="#" className="txt15">
                                    https://buff.ly/2zaSfAQ
                                </a>
                            </p>

                            <span className="txt16">21 Dec 2017</span>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4'>
                        <h4 className="txt13">Gallery</h4>
                        <div className="wrap-gallery-footer">
                            <div className="item-gallery-footer wrap-pic-w" data-lightbox="gallery-footer">
                                <img src="/assets/gallery/photo-gallery-01.jpg" alt="GALLERY" />
                            </div>

                            <div className="item-gallery-footer wrap-pic-w" data-lightbox="gallery-footer">
                                <img src="/assets/gallery/photo-gallery-02.jpg" alt="GALLERY" />
                            </div>

                            <div className="item-gallery-footer wrap-pic-w" data-lightbox="gallery-footer">
                                <img src="/assets/gallery/photo-gallery-03.jpg" alt="GALLERY" />
                            </div>

                            <div className="item-gallery-footer wrap-pic-w" data-lightbox="gallery-footer">
                                <img src="/assets/gallery/photo-gallery-04.jpg" alt="GALLERY" />
                            </div>

                            <div className="item-gallery-footer wrap-pic-w" data-lightbox="gallery-footer">
                                <img src="/assets/gallery/photo-gallery-05.jpg" alt="GALLERY" />
                            </div>

                            <div className="item-gallery-footer wrap-pic-w" data-lightbox="gallery-footer">
                                <img src="/assets/gallery/photo-gallery-06.jpg" alt="GALLERY" />
                            </div>

                            <div className="item-gallery-footer wrap-pic-w" data-lightbox="gallery-footer">
                                <img src="/assets/gallery/photo-gallery-07.jpg" alt="GALLERY" />
                            </div>

                            <div className="item-gallery-footer wrap-pic-w" data-lightbox="gallery-footer">
                                <img src="/assets/gallery/photo-gallery-08.jpg" alt="GALLERY" />
                            </div>

                            <div className="item-gallery-footer wrap-pic-w" data-lightbox="gallery-footer">
                                <img src="/assets/gallery/photo-gallery-09.jpg" alt="GALLERY" />
                            </div>

                            <div className="item-gallery-footer wrap-pic-w" data-lightbox="gallery-footer">
                                <img src="/assets/gallery/photo-gallery-10.jpg" alt="GALLERY" />
                            </div>

                            <div className="item-gallery-footer wrap-pic-w" data-lightbox="gallery-footer">
                                <img src="/assets/gallery/photo-gallery-11.jpg" alt="GALLERY" />
                            </div>

                            <div className="item-gallery-footer wrap-pic-w" data-lightbox="gallery-footer">
                                <img src="/assets/gallery/photo-gallery-12.jpg" alt="GALLERY" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer