import { icons } from '@/common/icons'
import '@/styles/contact.scss'

const ContactPage = () => {
    const { FaClock, FaPhoneAlt, FaLocationDot } = icons
    return (
        <div>
            <section className="bg-title-page">
                <h2 className="title-6">Liên hệ</h2>
            </section>
            <section className='section-contact'>
                <div className='map-container'>
                    <div className='map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2390670549053!2d106.64488487662585!3d10.792993189356746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175294b5b401ff1%3A0xac71b101abf90640!2zNzYgVHLhuqduIE1haSBOaW5oLCBQaMaw4budbmcgMTIsIFTDom4gQsOsbmgsIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1742803156499!5m2!1sen!2s"
                            width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
                <div className='contact-container'>
                    <div className='message-container'>
                        <h3 className="title-7">Gửi tin nhắn cho chúng tôi</h3>
                    </div>
                    <form className="wrap-form-reservation">
                        <div className="row">
                            <div className="col-md-4">
                                <span className="txt9">Name</span>
                                <div className="input-wrapper">
                                    <input className="" type="text" name="name" placeholder="Name" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <span className="txt9">Email</span>
                                <div className="input-wrapper">
                                    <input className="" type="text" name="email" placeholder="Email" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <span className="txt9">Phone</span>
                                <div className="input-wrapper">
                                    <input className="" type="text" name="phone" placeholder="Phone" />
                                </div>
                            </div>
                            <div className="col-12">
                                <span className="txt9">Message</span>
                                <textarea rows={10} name="message" placeholder="Message"></textarea>
                            </div>
                        </div>

                        <div className="wrap-btn-booking">
                            <button type="submit" className="btn3 flex-c-m size36 txt11 trans-0-4">Submit</button>
                        </div>
                    </form>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <FaLocationDot size={20} />
                                </div>
                                <div className="flex-col-l">
                                    <span className="txt5">Location</span>
                                    <span className="txt23 details">8th floor, 379 Hudson St, New York, NY 10018</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <FaPhoneAlt size={20} />
                                </div>
                                <div className="flex-col-l">
                                    <span className="txt5">Call Us</span>
                                    <span className="txt23 details">(+1) 96 716 6879</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <FaClock size={20} />
                                </div>
                                <div className="flex-col-l">
                                    <span className="txt5">Opening Hours</span>
                                    <span className="txt23 details">09:30 AM - 11:00 PM <br />Every Day</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactPage