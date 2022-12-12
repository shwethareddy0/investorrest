const City = () => {
    return (
        <section className="container-fluid">
        <div className = "row">
            <div className="card col-4">
                <form>
                <div className="form-group">
                    <div className="form-group col-md-10">
                    <label for="inputCity">City</label>
                    <input type="text" className="form-control" id="inputCity"/>
                    </div>
                    <div className="form-group col-md-10">
                    <label for="inputState">State</label>
                    <input type="text" className="form-control" id="inputState" required />
                    </div>
                </div>
                <div className="form-group">
                <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
                </form> 
            </div>

            <div className="col-lg-6 mb-4">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Area Stats</h3>
                        <h4 className="areaStat"> Average Occupency Rate:</h4>
                            <h5 className="abbStat">"${airbnb.occupencyRate}"</h5> 
                        <h4 className="areaStat"> Number of Airbnbs:</h4>
                            <h5 className="abbStat">"${airbnb.occupencyRate}"</h5> 
                        <h4 className="areaStat"> Average Nighlty Rate:</h4>
                            <h5 className="abbStat">"${airbnb.occupencyRate}"</h5>
                        <h4 className="areaStat"> Average Monthly Earning:</h4>
                            <h5 className="abbStat">"${airbnb.occupencyRate}"</h5>
                        <h4 className="areaStat"> Average Property Price:</h4>
                            <h5 className="abbStat">"${airbnb.occupencyRate}"</h5>   
                        <a href="#" className="btn btn-outline-secondary btn-sm">
                            <i className="far fa-heart"></i></a>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default City;