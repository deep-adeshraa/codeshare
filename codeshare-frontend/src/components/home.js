export default function Home() {
    return (
        <div id="home-container" className="col-md-12">
            <h1 className="text-center mt-5 mb-5">Collab, Code and teach</h1>
            <div class="row">
                <div class="col-sm-4">
                    <div class="card feature-card">
                        <div class="card-body">
                            <h5 class="card-title">Create new room</h5>
                            <p class="card-text">Connect with peer and practice with eachother</p>
                            <a href="#" class="btn btn-primary">Create room</a>
                        </div>
                    </div>
                </div>

                <div class="col-sm-4">
                    <div class="card feature-card">
                        <div class="card-body">
                            <h5 class="card-title">Join room</h5>
                            <p class="card-text">Add joining code of someone else's room and practice</p>
                            <a href="#" class="btn btn-primary">Add code</a>
                        </div>
                    </div>
                </div>

                <div class="col-sm-4">
                    <div class="card feature-card">
                        <div class="card-body">
                            <h5 class="card-title">View your rooms</h5>
                            <p class="card-text">The rooms created by you. Join them anytime</p>
                            <a href="#" class="btn btn-primary">Your rooms</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}