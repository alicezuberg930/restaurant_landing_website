import '@/styles/reservation.scss'

const ReservationPage = () => {
    return (
        <div>
            <section className="bg-title-page">
                <h2 className="title-6">Đặt bàn</h2>
            </section>
            <section className='section-reservation'>
                <div className='reservation-container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className="">
                                <span className="title-2">Đặt bàn</span>
                                <h3 className="title-3">Chọn bàn</h3>
                            </div>
                            <form className="wrap-form-reservation">
                                <div className="row">
                                    <div className="col-md-4">
                                        <span className="txt9">Date</span>
                                        <div className="input-wrapper">
                                            <input className="" type="text" name="name" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <span className="txt9">Time</span>
                                        <div className="input-wrapper">
                                            <input className="" type="text" name="name" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <span className="txt9">People</span>
                                        <div className="input-wrapper">
                                            <input className="" type="text" name="name" placeholder="Name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <span className="txt9">Name</span>
                                        <div className="input-wrapper">
                                            <input className="" type="text" name="name" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <span className="txt9">Phone</span>
                                        <div className="input-wrapper">
                                            <input className="" type="text" name="name" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <span className="txt9">Email</span>
                                        <div className="input-wrapper">
                                            <input className="" type="text" name="name" placeholder="Name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="wrap-btn-booking">
                                    <button type="submit" className="btn3 flex-c-m size13 txt11 trans-0-4">Đặt bàn</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row info-reservation">
                        <div className="col-md-6">
                            <h4 className="txt5">Reserve by Phone</h4>
                            <p className="txt9">
                                Donec quis euismod purus. Donec feugiat ligula rhoncus, varius nisl sed, tincidunt lectus.
                                <span className="txt25">Nulla vulputate</span>
                                , lectus vel volutpat efficitur, orci
                                <span className="txt25">lacus sodales</span>
                                sem, sit amet quam:
                                <span className="txt24">(001) 345 6889</span>
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h4 className="txt5">For Event Booking</h4>
                            <p className="txt9">
                                Donec feugiat ligula rhoncus:
                                <span className="txt24">(001) 345 6889</span>
                                , varius nisl sed, tinci-dunt lectus sodales sem.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ReservationPage