import React from "react";

const Map = () => {
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Locate Us</h1>
                        <hr />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mb-5">
                        <h3 className="card-title mb-0">Ranga Mart Collection Shopping Complex</h3>
                        <br />
                        <h5 className="card-text lead fw-bold">50B, Grace Pieris Road, Panadura, Srilanka</h5>
                        <br />
                        {/* <p className="card-text lead fw-bold">+94 5864 154</p> */}
                    </div>
                </div>

                <div className="map-section" style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="gmap-frame" style={{ width: '100%' }}>
                        <iframe
                            width="100%"
                            height="500"
                            title="Ranga Mart Shopping Center" // Set title using the title prop
                            frameborder="0"
                            scrolling="no"
                            marginheight="0"
                            marginwidth="0"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=50B,%20Grace%20Peiris%20Road,%20Panadura+(Ranga%20Mart%20Collection%20Shopping%20Complexess%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            <a href="https://www.gps.ie/">gps vehicle tracker</a>
                        </iframe>
                    </div>
                </div>

                {/* <div className="map-section" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="gmap-frame" style={{ width: '100%' }}>
                        <iframe
                            width="100%"
                            height="500"
                            title="Ranga Mart Shopping Center" // Set title using the title prop
                            frameborder="0"
                            scrolling="no"
                            marginheight="0"
                            marginwidth="0"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=50B,%20Grace%20Peiris%20Road,%20Panadura+(Ranga%20Mart%20Collection%20Shopping%20Complexess%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            <a href="https://www.gps.ie/">gps vehicle tracker</a>
                        </iframe>

                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Map;


// <div style="width: 100%"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=50B,%20Grace%20Peiris%20Road,%20Panadura+(Ranga%20Mart%20Collection%20Shopping%20Complexess%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe></div>