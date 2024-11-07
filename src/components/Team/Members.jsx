import React, { useState } from "react";
import "../../styles/Team/Members.scss";
import { Drawer } from "antd";

const members = [
  {
    name: "Suman Saha",
    designation: "Founder & CEO",
    image: "/members/suman_img.jpeg",
    description:
      "Suman Saha founded Usha International with a mission to connect global markets and elevate export-import standards. With extensive experience in international trade, we brings expertise, quality focus, and a commitment to customer satisfaction, making Usha International a trusted partner for clients worldwide. His leadership drives the company’s goal of ensuring seamless, secure global trade.",
  },
  {
    name: "Parineeta Das",
    designation: "Co-Founder, IT Department Head & Data Analyst",
    image: "/members/parineeta.jpg",
    description:
      "As the co-founder and head of IT, Parineeta Das leverages her technical expertise and data analytics skills to optimize operations and drive growth at Usha International. With a background in Computer Science and a passion for data-driven insights, she ensures that the company stays at the forefront of technology, delivering efficient and reliable solutions for global trade. Her commitment to innovation and operational excellence makes her an integral part of Usha International mission to connect markets worldwide.",
  },
  {
    name: "Suvadra Saha",
    designation: "Co-founder, Senior Logistics Manager",
    image: "/members/meeta.jpg",
    description:
      "Suvadra saha, as co-founder and senior logistics manager at Usha International with over 7 years of experience in the logistics sector. Suvadra is known for expertise in overseeing complex supply chain operations, optimizing transportation, and ensuring the seamless distribution of Usha International's diverse range of high-quality products, including spices, tea, coffee, handicrafts, and more. With a strategic mindset and a commitment to efficiency, Suvadra has played a key role in enhancing logistics solutions, guaranteeing timely and secure deliveries that uphold the company’s commitment to quality and exceptional packaging.",
  },
  {
    name: "Subir Saha",
    designation: "Co-Founder, Head of Marketing & Sourcing",
    image: "/members/subir.jpg",
    description:
      "Subir Saha, as co-founder and head of the Marketing and Sourcing departments, plays a pivotal role in building strategic partnerships and expanding Usha International reach in the global market. With a keen eye for market trends and a deep understanding of sourcing strategies, Subir ensures that clients receive high-quality products while maintaining competitive pricing. His dedication to fostering strong client relationships and his expertise in global sourcing make him an essential force behind Usha International success in international trade.",
  },
];

const Members = () => {
  const [current, setCurrent] = useState({
    data: null,
    isOpen: false,
  });

  return (
    <div className="members-wrapper">
      {members.map((item) => (
        <div
          className="members-item"
          onClick={() => {
            setCurrent({
              isOpen: true,
              data: item,
            });
          }}
        >
          <div className="member-img">
            <img src={item?.image} alt="" />
          </div>
          <div className="member-data">
            <div>{item?.name}</div>
            <div>{item?.designation}</div>
          </div>
        </div>
      ))}
      {current.isOpen && (
        <Drawer
          closable={false}
          open={current.isOpen}
          onClose={() => {
            setCurrent({
              isOpen: false,
              data: null,
            });
          }}
          className="member-info-drawer"
          width={600}
        >
          <div>
            <img src={current.data?.image} alt="" height={340} />
          </div>
          <div className="member-data">
            {current.data?.name?.split(" ").map((item) => (
              <div>{item}</div>
            ))}
            <div>{current.data?.designation}</div>
            <div>{current.data?.description}</div>
          </div>
        </Drawer>
      )}
    </div>
  );
};

export default Members;
