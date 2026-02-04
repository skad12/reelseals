import React, { useState } from "react";
import Link from "next/link";

const PRODUCT_CATEGORIES = [
  {
    id: "meter-seals",
    title: "Meter Seals",
    description: "Connection locks and meter security seals for utilities.",
    image: "/assets/imgs/banner/popup-1.png",
    items: [
      { code: "Connection Locks", name: "" },
      { code: "GP111", name: "Twist Seal" },
      { code: "GP125", name: "Anchor Seal" },
      { code: "GP130", name: "Twist Seal" },
      { code: "GP140", name: "Combi Seal" },
      { code: "GP150", name: "Sealing Wires" },
      { code: "GP570", name: "Pull Up Seal with Metal Insert" },
    ],
  },
  {
    id: "pull-up-seals",
    title: "Pull-Up Seals",
    description: "Versatile pull-up seals with and without metal inserts.",
    image: "/assets/imgs/banner/fillter-widget-bg.png",
    items: [
      { code: "GP410", name: "Pull-up Seal without Metal Insert" },
      { code: "GP411", name: "Pull-up Seal with Metal Insert" },
      { code: "GP412", name: "Pull-up Seal with Metal Insert" },
      { code: "GP413", name: "Pull-up Seal with Metal Insert" },
      { code: "GP414", name: "Pull-up Seal with Metal Insert" },
      { code: "GP415", name: "Pull-up Seal with Metal Insert" },
      { code: "GP416", name: "Pull-up Seal with Metal Insert" },
      { code: "GP540", name: "Pull-up Seal with Metal Insert" },
      { code: "GP570", name: "Pull-up Seal with Metal Insert" },
    ],
  },
  {
    id: "high-security-seals",
    title: "High Security Seals",
    description: "Bolt and cable seals for high‑risk applications.",
    image: "/assets/imgs/banner/banner-11.png",
    items: [
      { code: "GP422", name: "Container Bolt Seal with Metal Body" },
      { code: "GP423", name: "Container Bolt Seal with Plastic Body" },
      { code: "GP433", name: "Container Cable Seal with Plastic Body" },
      { code: "GP434", name: "ISO Certified Container Cable Seal" },
    ],
  },
  {
    id: "fixed-length-seals",
    title: "Fix Length Seals",
    description: "Fixed length seals with metal or plastic inserts.",
    image: "/assets/imgs/banner/banner-5.png",
    items: [
      { code: "GP415-ST", name: "Fix Length Seal with Metal Insert" },
      { code: "GP443", name: "Fix Length Seal" },
      { code: "GP560", name: "Fix Length Seal" },
      { code: "GP565", name: "Fix Length Seal with Plastic Insert" },
    ],
  },
  {
    id: "other-seals-products",
    title: "Other Seals & Products",
    description: "Complementary products and accessories for secure operations.",
    image: "/assets/imgs/banner/banner-6.png",
    items: [
      { code: "GP150", name: "Sealing Wires" },
      { code: "GP510", name: "Drum Seal" },
      { code: "GP520", name: "Padlock Seal" },
      { code: "GP530", name: "Padlock Seal with Metal Hook" },
      { code: "GP586", name: "Big Flag Plastic Label Seal" },
      { code: "GP587", name: "Big Flag Seal for Label Applications" },
      { code: "GP625", name: "Sample Bottle" },
      { code: "GP640", name: "Security Label" },
      { code: "GP731", name: "Ziplock Seal" },
    ],
  },
  {
    id: "detectable-seals",
    title: "Detectable Seals",
    description: "Metal-detectable seals for food, pharma and hygiene‑critical use.",
    image: "/assets/imgs/banner/banner-7.png",
    items: [
      { code: "GP410", name: "Pull-up Seal without Metal Insert" },
      { code: "GP411", name: "Pull-up Seal with Metal Insert" },
    ],
  },
];

const USAGE_AREAS = [
  {
    id: "cargo-postal",
    name: "Cargo and Postal Services",
    products: [
      "GP411",
      "GP412",
      "GP413",
      "GP415",
      "GP415-ST",
      "GP443",
      "GP530",
      "GP560",
      "GP565",
      "GP586",
      "GP587",
      "GP731",
      "GP732",
    ],
  },
  {
    id: "banks",
    name: "Banks",
    products: ["GP412", "GP413", "GP415", "GP416", "GP587", "GP731"],
  },
  {
    id: "atm",
    name: "ATM",
    products: ["GP414", "GP416", "GP520"],
  },
  {
    id: "utility-meters",
    name: "Utility Meter, Gas – Water Meters",
    products: ["Connection Locks", "GP125", "GP130", "GP140", "GP150", "GP530", "GP570", "GP625"],
  },
  {
    id: "airlines-ground",
    name: "Airlines / Ground Services",
    products: ["GP411", "GP520", "GP530", "GP540", "GP565", "GP732"],
  },
  {
    id: "supermarkets",
    name: "Supermarkets",
    products: [
      "GP412",
      "GP415",
      "GP415-ST",
      "GP416",
      "GP565",
      "GP586",
      "GP587",
      "GP731",
      "GP732",
    ],
  },
  {
    id: "textile",
    name: "Textile",
    products: ["GP111", "GP130", "GP416", "GP520", "GP540", "GP570"],
  },
  {
    id: "road-freight",
    name: "Road Freight",
    products: [
      "GP412",
      "GP413",
      "GP414",
      "GP415-ST",
      "GP434",
      "GP510",
      "GP530",
      "GP560",
      "GP565",
    ],
  },
  {
    id: "rail-freight",
    name: "Rail Freight",
    products: [
      "GP411",
      "GP412",
      "GP415-ST",
      "GP422",
      "GP434",
      "GP443",
      "GP560",
      "GP565",
    ],
  },
  {
    id: "maritime",
    name: "Maritime Transport - Containers",
    products: ["GP412", "GP422", "GP434", "GP560", "GP586"],
  },
  {
    id: "hotels",
    name: "Hotels",
    products: ["GP416", "GP520"],
  },
  {
    id: "hospitals",
    name: "Hospitals",
    products: [
      "GP411",
      "GP414",
      "GP415",
      "GP416",
      "GP520",
      "GP540",
      "GP570",
      "GP586",
      "GP625",
    ],
  },
  {
    id: "fire-extinguishers",
    name: "Fire Extinguishers",
    products: ["GP540", "GP570", "GP586"],
  },
  {
    id: "customs",
    name: "Customs Administration",
    products: ["GP111", "GP130", "GP434"],
  },
];

const SecuritySealsCatalog = () => {
  const [activeUsage, setActiveUsage] = useState(USAGE_AREAS[0]?.id);

  return (
    <div className="mb-50">
      <div className="row align-items-center mb-30">
        <div className="col-md-7">
          <h2 className="section-title style-1 mb-10">
            Product Catalog: <span className="text-brand">Place with Pictures</span>
          </h2>
          <p className="text-muted">
            Explore our full range of security seals and related products, grouped by seal type.
          </p>
        </div>
        <div className="col-md-5 text-md-end mt-15 mt-md-0">
          <Link href="/shop-grid-right">
            <a className="btn btn-sm btn-brand">
              View all Security Seals
            </a>
          </Link>
        </div>
      </div>

      <div className="row mb-40">
        {PRODUCT_CATEGORIES.map((cat) => (
          <div className="col-lg-4 col-md-6 mb-30" key={cat.id}>
            <div className="card-1 hover-up h-100">
              <figure className="img-hover-scale overflow-hidden border-radius-10 mb-15">
                <img src={cat.image} alt={cat.title} />
              </figure>
              <h4 className="mb-10">{cat.title}</h4>
              {cat.description && (
                <p className="font-xs text-muted mb-10">{cat.description}</p>
              )}
              <ul className="font-xs color-grey">
                {cat.items.map((item) => (
                  <li key={`${cat.id}-${item.code}`}>
                    <strong>{item.code}</strong>
                    {item.name ? ` – ${item.name}` : null}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-20">
        <h3 className="section-title style-1 mb-10">Security Seals Usage Areas</h3>
        <p className="text-muted">
          There are more than 30 different security seals with applications in various sectors of the
          economy. Use the tabs below to explore recommended seals by industry.
        </p>
      </div>

      <div className="usage-areas-tabs">
        <ul className="nav nav-tabs mb-3 flex-nowrap overflow-auto">
          {USAGE_AREAS.map((area) => (
            <li className="nav-item" key={area.id}>
              <button
                type="button"
                className={
                  activeUsage === area.id
                    ? "nav-link active font-xs"
                    : "nav-link font-xs"
                }
                onClick={() => setActiveUsage(area.id)}
              >
                {area.name}
              </button>
            </li>
          ))}
        </ul>
        <div className="tab-content border p-20 border-radius-10 bg-grey">
          {USAGE_AREAS.map((area) =>
            activeUsage === area.id ? (
              <div
                className="tab-pane fade show active"
                key={area.id}
              >
                <h5 className="mb-10">{area.name}</h5>
                <p className="font-xs text-muted mb-10">
                  Recommended security seals for this application:
                </p>
                <div className="d-flex flex-wrap">
                  {area.products.map((code) => (
                    <span
                      key={`${area.id}-${code}`}
                      className="badge rounded-pill bg-brand-2 mr-5 mb-5"
                    >
                      {code}
                    </span>
                  ))}
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default SecuritySealsCatalog;

