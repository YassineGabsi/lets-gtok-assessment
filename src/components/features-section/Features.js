import React from 'react';
import './Features.css'
import user from '../../assets/images/user.png'

function Features() {
    return(
        <div className="text-center mt-5 features-section">
            <h3>A community to spread <span style={{color: '#6930db', fontWeight: 'bold'}}>Positivity</span></h3>
            <hr/>
            <div className="mt-4 container">
                <div className="text-start px-3">
                    <h2 className="big-title">Share feeling</h2>
                    <p className="normal-text">Share what's on your mind with the community</p>
                </div>
                <div className="col-12 row mt-4">
                    <div className="col-md-4">
                        <div className="feature-card mb-5">
                            <div className="text-start feature-tag">
                                Current Feeling
                            </div>
                            <div className="text-start">
                                <img className="img-fluid mx-2 " style={{maxHeight: '40px'}} src={user} alt=""/>
                                <span className="fw-bold">Yassine Gabsi</span>
                            </div>
                            <div className="feature-card-text">So excited to finally get my hands on the latest PS5</div>
                            <p className="feature-card-time">a few seconds ago</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="feature-card mb-5">
                            <div className="text-start feature-tag">
                                Current Feeling
                            </div>
                            <div className="text-start">
                                <img className="img-fluid mx-2 " style={{maxHeight: '40px'}} src={user} alt=""/>
                                <span className="fw-bold">Yassine Gabsi</span>
                            </div>
                            <div className="feature-card-text">So excited to finally get my hands on the latest PS5</div>
                            <p className="feature-card-time">a few seconds ago</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="feature-card mb-5">
                            <div className="text-start feature-tag">
                                Current Feeling
                            </div>
                            <div className="text-start">
                                <img className="img-fluid mx-2 " style={{maxHeight: '40px'}} src={user} alt=""/>
                                <span className="fw-bold">Yassine Gabsi</span>
                            </div>
                            <div className="feature-card-text">So excited to finally get my hands on the latest PS5</div>
                            <p className="feature-card-time">a few seconds ago</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="mt-4  container">
                    <div className="text-end px-3">
                        <h2 className="big-title" style={{color: '#ffffff'}}>Share Activity</h2>
                        <p className="normal-text" style={{color: '#ffffff'}}>Share what you want doing with the community</p>
                    </div>
                    <div className="col-12 row mt-4">
                        <div className="col-md-4">
                            <div className="feature-card mb-5">
                                <div className="text-start feature-tag">
                                    Watching
                                </div>
                                <div className="text-start">
                                    <img className="img-fluid mx-2 " style={{maxHeight: '40px'}} src={user} alt=""/>
                                    <span className="fw-bold">Yassine Gabsi</span>
                                </div>
                                <div className="feature-card-text">The wolf of wall street is a must watch</div>
                                <p className="feature-card-time">a few seconds ago</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-card mb-5">
                                <div className="text-start feature-tag">
                                    Watching
                                </div>
                                <div className="text-start">
                                    <img className="img-fluid mx-2 " style={{maxHeight: '40px'}} src={user} alt=""/>
                                    <span className="fw-bold">Yassine Gabsi</span>
                                </div>
                                <div className="feature-card-text">The wolf of wall street is a must watch</div>
                                <p className="feature-card-time">a few seconds ago</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-card mb-5">
                                <div className="text-start feature-tag">
                                    Watching
                                </div>
                                <div className="text-start">
                                    <img className="img-fluid mx-2 " style={{maxHeight: '40px'}} src={user} alt=""/>
                                    <span className="fw-bold">Yassine Gabsi</span>
                                </div>
                                <div className="feature-card-text">The wolf of wall street is a must watch</div>
                                <p className="feature-card-time">a few seconds ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Features;

