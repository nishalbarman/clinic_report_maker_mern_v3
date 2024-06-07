import { Link } from "react-router-dom";
import landingPageLogo from "../assets/logo/logo.png";

const LandingPage: React.FC = () => {
  return (
    <>
      <div>
        <div className="px-4 py-5 my-5 text-center" id="top">
          <img
            className="d-block mx-auto mb-5"
            src={landingPageLogo}
            alt=""
            width="auto"
            height="70"
          />
          {/* <h1 className="display-5 fw-bold mb-4">Report Maker</h1> */}
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              Healthkind is an online and offline service, that provides reports
              such as blood reports, urine reports, liver function test reports
              etc. etc. by collecting theire blood sample or any other samples
              required to get.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button
                type="button"
                className="btn btn-outline-danger btn-lg px-4 gap-3"
                onClick={() => {}}>
                Book a Technician
              </button>
            </div>
          </div>
        </div>
        <div className="product-device shadow-sm d-none d-md-block" />
        <div className="product-device product-device-2 shadow-sm d-none d-md-block" />

        <div className="b-example-divider" />

        <div className="container px-4 py-5" id="hanging-icons">
          <h2 className="pb-2 border-bottom">What we OFFER</h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="col d-flex align-items-start">
              <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg className="bi" width="1em" height="1em">
                  <use to="#toggles2" />
                </svg>
              </div>
              <div>
                <h3 className="fs-2">Online booking</h3>
                <p>
                  Our users here can make a request for an technician to visit
                  their home location to collect samples after paying a small
                  amount of booking fees.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg className="bi" width="1em" height="1em">
                  <use to="#cpu-fill" />
                </svg>
              </div>
              <div>
                <h3 className="fs-2">Home Collection</h3>
                <p>
                  On a successfull booking for a service, our technician will
                  visit clients home location, they will colelct the required
                  samples according to booking. After the process will continue
                  to the next step.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg className="bi" width="1em" height="1em">
                  <use to="#tools" />
                </svg>
              </div>
              <div>
                <h3 className="fs-2">Organized Reports</h3>
                <p>
                  Using our service will make your all the availble reports
                  accsisible over the internet, anytime anywhere. Whenver
                  required you can download the reports and use as you want.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="b-example-divider" />

        <div className="container px-4 py-5" id="custom-cards">
          <h2 className="pb-2 border-bottom">What our clients say</h2>

          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <div className="col">
              <div
                className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{ backgroundImage: "url('unsplash-photo-1.jpg')" }}>
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Short title, long jacket
                  </h3>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img
                        src="https://github.com/twbs.png"
                        alt="Bootstrap"
                        width="32"
                        height="32"
                        className="rounded-circle border border-white"
                      />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em">
                        <use to="#geo-fill" />
                      </svg>
                      <small>Nalbari</small>
                    </li>
                    <li className="d-flex align-items-center">
                      <svg className="bi me-2" width="1em" height="1em">
                        <use to="#calendar3" />
                      </svg>
                      <small>3d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col">
              <div
                className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{ backgroundImage: "url('unsplash-photo-2.jpg')" }}>
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Much longer title that wraps to multiple lines
                  </h3>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img
                        src="https://github.com/twbs.png"
                        alt="Bootstrap"
                        width="32"
                        height="32"
                        className="rounded-circle border border-white"
                      />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em">
                        <use to="#geo-fill" />
                      </svg>
                      <small>Nalbari</small>
                    </li>
                    <li className="d-flex align-items-center">
                      <svg className="bi me-2" width="1em" height="1em">
                        <use to="#calendar3" />
                      </svg>
                      <small>4d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col">
              <div
                className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{ backgroundImage: "url('unsplash-photo-3.jpg')" }}>
                <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Another longer title belongs here
                  </h3>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img
                        src="https://github.com/twbs.png"
                        alt="Bootstrap"
                        width="32"
                        height="32"
                        className="rounded-circle border border-white"
                      />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em">
                        <use to="#geo-fill" />
                      </svg>
                      <small>Nalbari</small>
                    </li>
                    <li className="d-flex align-items-center">
                      <svg className="bi me-2" width="1em" height="1em">
                        <use to="#calendar3" />
                      </svg>
                      <small>5d</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="b-example-divider" />

        <div className="container px-4 py-5" id="icon-grid">
          <h2 className="pb-2 border-bottom">Available Services</h2>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
            <div className="col d-flex align-items-start">
              <svg
                className="bi text-muted flex-shrink-0 me-3"
                width="1.75em"
                height="1.75em">
                <use to="#bootstrap" />
              </svg>
              <div>
                <h3 className="fw-bold mb-0 fs-4">Featured title</h3>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <svg
                className="bi text-muted flex-shrink-0 me-3"
                width="1.75em"
                height="1.75em">
                <use to="#cpu-fill" />
              </svg>
              <div>
                <h3 className="fw-bold mb-0 fs-4">Featured title</h3>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <svg
                className="bi text-muted flex-shrink-0 me-3"
                width="1.75em"
                height="1.75em">
                <use to="#calendar3" />
              </svg>
              <div>
                <h3 className="fw-bold mb-0 fs-4">Featured title</h3>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <svg
                className="bi text-muted flex-shrink-0 me-3"
                width="1.75em"
                height="1.75em">
                <use to="#home" />
              </svg>
              <div>
                <h3 className="fw-bold mb-0 fs-4">Featured title</h3>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <svg
                className="bi text-muted flex-shrink-0 me-3"
                width="1.75em"
                height="1.75em">
                <use to="#speedometer2" />
              </svg>
              <div>
                <h3 className="fw-bold mb-0 fs-4">Featured title</h3>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <svg
                className="bi text-muted flex-shrink-0 me-3"
                width="1.75em"
                height="1.75em">
                <use to="#toggles2" />
              </svg>
              <div>
                <h3 className="fw-bold mb-0 fs-4">Featured title</h3>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <svg
                className="bi text-muted flex-shrink-0 me-3"
                width="1.75em"
                height="1.75em">
                <use to="#geo-fill" />
              </svg>
              <div>
                <h3 className="fw-bold mb-0 fs-4">Featured title</h3>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <svg
                className="bi text-muted flex-shrink-0 me-3"
                width="1.75em"
                height="1.75em">
                <use to="#tools" />
              </svg>
              <div>
                <h3 className="fw-bold mb-0 fs-4">Featured title</h3>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="b-example-divider" />

        <div className="container px-4 py-5" id="our-technicians">
          <h2 className="pb-2 border-bottom">Our Technicians</h2>

          <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
            <div className="col d-flex flex-column align-items-start gap-2">
              <h3 className="fw-bold">
                The available technicians that we have.
              </h3>
              <p className="text-muted">
                They will demonstrate the options by which you can gather the
                reports.
              </p>
              <button type="button" className="btn btn-outline-primary btn-lg">
                {" "}
                <Link to="./reg.php" style={{ textDecoration: "none" }}>
                  Book Now
                </Link>
              </button>
            </div>

            <div className=" col">
              <div className="row row-cols-1 row-cols-sm-2 g-4">
                <div className="col d-flex flex-column gap-2">
                  <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                    <svg className="bi" width="1em" height="1em">
                      <use to="#collection" />
                    </svg>
                  </div>
                  <h4 className="fw-semibold mb-0">Hirak Barman</h4>
                  <p className="text-muted">
                    Qualification details. ALL BLL ALLL BLLL.
                  </p>
                </div>

                <div className="col d-flex flex-column gap-2">
                  <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                    <svg className="bi" width="1em" height="1em">
                      <use to="#gear-fill" />
                    </svg>
                  </div>
                  <h4 className="fw-semibold mb-0">Hirak Barman</h4>
                  <p className="text-muted">
                    Qualification details. ALL BLL ALLL BLLL.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
