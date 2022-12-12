return (
    <section className="container-fluid">
        <div className="card col-4">
            <form>
            <div class="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
            </div>
            <div class="form-row">
                <div class="form-group col-md-5">
                <label for="inputCity">City</label>
                <input type="text" class="form-control" id="inputCity">
                </div>
                <div class="form-group col-md-5">
                <label for="inputState">State</label>
                <input type="text" class="form-control" id="inputState">
                </div>
            </div>
            <div class="form-group">
            <button type="submit" class="btn btn-primary">Sign in</button>
            </form> 
        </div>
    </section>
);