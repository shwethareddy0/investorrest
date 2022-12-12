const Compare = () => {
    return (
        <section className="container-fluid">
        <div className = "row">
        {/* look into mortgage calculator api */}
        <form className="col-4">
        <div className="form-group">
            <label for="inputAddress2">Address</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
        </div>
        <div className="form-row">
            <div className="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity"/>
            </div>
            <div className="form-group col-md-4">
                <label for="inputState">State</label>
                <input type="text" classNameName="form-control" id="inputState" />
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col-md-5">
                <label for="inputCity">Property Price</label>
                <input type="number" className="form-control" id="inputPrice"/>
            </div>
            <div className="form-group col-md-5">
                <label for="inputState">Down Payment</label>
                <input type="number" classNameName="form-control" id="inputDownPayent" />
            </div>
        </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
                
            
            <div classNameName="col-lg-7 mb-4">
                <div classNameName="card">
                    <div classNameName="card-body">
                        <div className="cardLeft col-3">
                        <h3 classNameName="card-title">Area Stats</h3>
                        <h4 classNameName="areaStat"> Average Occupency Rate:</h4>
                            <h5 classNameName="abbStat">"${airbnb.occupencyRate}"</h5> 
                        <h4 classNameName="areaStat"> Number of Airbnbs:</h4>
                            <h5 classNameName="abbStat">"${airbnb.occupencyRate}"</h5> 
                        <h4 classNameName="areaStat"> Average Nighlty Rate:</h4>
                            <h5 classNameName="abbStat">"${airbnb.occupencyRate}"</h5>
                        <h4 classNameName="areaStat"> Average Monthly Earning:</h4>
                            <h5 classNameName="abbStat">"${airbnb.occupencyRate}"</h5>
                        <a href="#" classNameName="btn btn-outline-secondary btn-sm">
                            <i classNameName="far fa-heart"></i></a>
                            </div>
                        <div className="cardRight col-3">
                        <h3 classNameName="card-title">Break Even Stats</h3>
                        <h4 classNameName="betitle"> Nightly Rate:</h4>
                            <h5 id="nightRate" classNameName="beStat">((${airbnb.occupencyRate}*30)*${mortgage})</h5> 
                        <h4 classNameName="betitle"> Potential Monthly Earnings:</h4>
                            <h5 id="monthly" classNameName="beStat">"${airbnb.occupencyRate}*${airbnb.night_price}"</h5> 
                        <h4 classNameName="betitle"> ROI:</h4>
                            <h5 classNameName="beStat">"${#monthly}/${mortgage}"</h5>
                        <h4 classNameName="betitle"> Average Monthly Earning:</h4>
                            <h5 classNameName="beeStat">"${airbnb.occupencyRate}"</h5>
                        <a href="#" classNameName="btn btn-outline-secondary btn-sm">
                            <i classNameName="far fa-heart"></i></a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Compare;