import Layout from "../components/layout/Layout";

import Link from "next/link";
import dynamic from "next/dynamic";
const Gmap = dynamic(() => import("../components/elements/Gmap"), {
  ssr: false,
});

function Contact() {
  return (
    <>
      <Layout parent="Home" sub="Pages" subChild="Contact">
        <div className="page-content pt-50">
          <div className="container">
            <div className="row">
              <div className="col-xl-10 col-lg-12 m-auto">
                <section className="row align-items-end mb-50">
                  <div className="col-lg-4 mb-lg-0 mb-md-5 mb-sm-5">
                    <h4 className="mb-20 text-brand">How can we help?</h4>
                    <h1 className="mb-30">
                      Security & Industrial Seals <br />
                    </h1>
                    <p className="mb-20">
                      We provide tamper-evident and industrial sealing solutions
                      for logistics, utilities, manufacturing and heavy
                      equipment. From supply and installation to testing and
                      certification, our team helps you protect assets and
                      maintain chain-of-custody.
                    </p>
                    <p>
                      Our services are designed around industry best practices
                      and standards, with options for custom-molded seals,
                      serialized tracking, and on-site inspections. Contact our
                      team for a quote or site assessment.
                    </p>
                  </div>

                  <div className="col-lg-8">
                    <div className="row">
                      <div className="col-lg-6 mb-4">
                        <h5 className="mb-20">
                          01. On-Site Inspection & Audits
                        </h5>
                        <p>
                          Comprehensive inspections and audit reports for sealed
                          assets — container checks, record verification, tamper
                          evidence review and corrective recommendations to keep
                          your operations compliant.
                        </p>
                      </div>

                      <div className="col-lg-6 mb-4">
                        <h5 className="mb-20">02. Supply & Installation</h5>
                        <p>
                          Secure supply of bolt seals, cable seals, padlocks,
                          and high-security tags plus professional installation
                          services to ensure correct fit and tamper resistance.
                        </p>
                      </div>

                      <div className="col-lg-6 mb-lg-0 mb-4">
                        <h5 className="mb-20 text-brand">
                          03. Testing, Certification & Traceability
                        </h5>
                        <p>
                          Laboratory testing, compliance verification and
                          serialized tracking for chain-of-custody. We provide
                          documentation and test certificates to meet your
                          regulatory or internal audit requirements.
                        </p>
                      </div>

                      <div className="col-lg-6">
                        <h5 className="mb-20">
                          04. Custom Solutions & Support
                        </h5>
                        <p>
                          Custom-engineered seals (material, temperature and
                          chemical resistance), rapid replacement, and 24/7
                          technical support for emergency reseals and field
                          troubleshooting.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <section className="container mb-50 d-none d-md-block">
            <div className="border-radius-15 overflow-hidden">
              <div id="map-panes" className="leaflet-map">
                <Gmap />
              </div>
            </div>
          </section>
          <div className="container">
            <div className="row">
              <div className="col-xl-10 col-lg-12 m-auto">
                <section className="mb-50">
                  <div className="row mb-60">
                    <div className="col-md-4 mb-4 mb-md-0">
                      <h4 className="mb-15 text-brand">Office</h4>
                      Abuja, NIgeria.
                      <br />
                      <abbr title="Phone">Phone:</abbr> +234 703-622-3891
                      <br />
                      <abbr title="Email">Email: </abbr>info@reelseals.com
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-8">
                      <div className="contact-from-area padding-20-row-col">
                        <h5 className="text-brand mb-10">Contact form</h5>
                        <h2 className="mb-10">Drop Us a Line</h2>
                        <p className="text-muted mb-30 font-sm">
                          Your email address will not be published. Required
                          fields are marked *
                        </p>
                        <form
                          className="contact-form-style mt-30"
                          id="contact-form"
                          action="#"
                          method="post"
                        >
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <div className="input-style mb-20">
                                <input
                                  name="name"
                                  placeholder="First Name"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="input-style mb-20">
                                <input
                                  name="email"
                                  placeholder="Your Email"
                                  type="email"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="input-style mb-20">
                                <input
                                  name="telephone"
                                  placeholder="Your Phone"
                                  type="tel"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="input-style mb-20">
                                <input
                                  name="subject"
                                  placeholder="Subject"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                              <div className="textarea-style mb-30">
                                <textarea
                                  name="message"
                                  placeholder="Message"
                                ></textarea>
                              </div>
                              <button
                                className="submit submit-auto-width"
                                type="submit"
                              >
                                Send message
                              </button>
                            </div>
                          </div>
                        </form>
                        <p className="form-messege"></p>
                      </div>
                    </div>
                    <div className="col-lg-4 pl-50 d-lg-block d-none">
                      <img
                        className="border-radius-15 mt-50"
                        src="assets/imgs/page/contact-2.png"
                        alt=""
                      />
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Contact;
