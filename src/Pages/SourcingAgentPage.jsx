import React from "react";
import "../styles/SourcingAgent.scss";
import { FaShippingFast, FaWarehouse, FaTruck, FaGlobe } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { Badge } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SourcingAgentPage = () => {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div>
      <div className="sourcing-agent-page">
        {/* Header Section */}
        <div className="header-banner">
          <div className="overlay-content">
            <h1>How We Work At Usha International?</h1>
            <p>
              Usha International provides unmatched sourcing, logistics, and
              export solutions, ensuring quality, reliability, and transparency
              every step of the way.
            </p>
            <div className="icon-box">
              <FaShippingFast className="icon" />
              <FaWarehouse className="icon" />
              <FaTruck className="icon" />
              <FaGlobe className="icon" />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section" ref={statsRef}>
          <div className="stat">
            <h2>
              {statsInView && (
                <CountUp end={1000000} duration={3} separator="," />
              )}
              +
            </h2>
            <p>Cumulative Orders</p>
          </div>
          <div className="stat">
            <h2>
              {statsInView && (
                <CountUp end={10000} duration={2} separator="," />
              )}
              +
            </h2>
            <p>Cooperating Factories</p>
          </div>
          <div className="stat">
            <h2>
              {statsInView && (
                <CountUp end={200000} duration={2.5} separator="," />
              )}
              +
            </h2>
            <p>Happy Customers</p>
          </div>
          <div className="stat">
            <h2>
              {statsInView && <CountUp end={4000} duration={2} separator="," />}
              +
            </h2>
            <p>New Orders per Month</p>
          </div>
        </div>
        <div className="benefits-section">
          <div className="benefits-image-wrapper">
            <img
              src="/sourcingtruck.png"
              alt="Global Shipping"
              className="benefits-image"
            />
            <div className="badge-box">
              <CheckCircleOutlined
                style={{ marginRight: "8px", fontSize: "1.2rem" }}
              />
              <span>3.45M Goods Delivered</span>
            </div>
          </div>
          <div className="benefits-content">
            <h3>Providing a Full Range of Products Delivered Worldwide</h3>
            <h2>What’s Your Benefit?</h2>
            <ul>
              <li>
                You will get totally transparent & satisfied work.
                <p className="point-description">
                  At Usha International, we prioritize transparent practices
                  that keep you fully informed at every stage, ensuring your
                  satisfaction and trust in our work.
                </p>
              </li>
              <li>
                Sourcing multiple products from different states.
                <p className="point-description">
                  With our extensive network, we can source a diverse range of
                  products across multiple regions, ensuring flexibility and
                  variety for your needs.
                </p>
              </li>
              <li>
                We negotiate with shipment lines, logistics & transportation on
                your behalf.
                <p className="point-description">
                  Handling logistics and negotiations for you, we simplify
                  complex arrangements, making shipping smoother and more
                  cost-effective.
                </p>
              </li>
              <li>
                We ensure the quality of products & services.
                <p className="point-description">
                  Our rigorous quality control process guarantees that you
                  receive only the highest-quality products and reliable
                  service.
                </p>
              </li>
              <li>
                You will get on-time delivery of your consignment.
                <p className="point-description">
                  Timeliness is crucial to us; we meticulously plan logistics to
                  ensure your products arrive as scheduled.
                </p>
              </li>
              <li>
                Personal watch on shipment since day one to manufacturing.
                <p className="point-description">
                  From the first step of manufacturing, we keep a close watch on
                  every detail, maintaining quality and preventing delays.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SourcingAgentPage;
