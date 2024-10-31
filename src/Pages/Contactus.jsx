import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../styles/Contactus.scss";
import office from "../assets/office.png";
import flag from "../assets/flag.png";
import contact from "../assets/contactUs.png";
import call from "../assets/call.png";
import mail from "../assets/mail.png";
import social from "../assets/SocialMedia.png";
import facebook from "../assets/Facebook.png";
import insta from "../assets/Instagram.png";
import linkedin from "../assets/LinkedIN.png";
import map from "../assets/map.png";
import banner from "../assets/Contactus_banner.png";

const Contactus = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phoneNumber: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://api.shihaantech/admin/Contact/CreateVisitor",
        {
          method: "POST",
          body: JSON.stringify({
            name: formData.firstName + formData.lastName,
            email: formData.email,
            company: formData.company,
            phoneNumber: formData.phoneNumber,
            message: formData.message,
            formType: "contact-us",
            industry: formData.industy,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
        //   body: JSON.stringify(formData),
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        console.log("send response succesfully");
        window.location.href = "/thank-you";
      }
      const data = await response.json();
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  };

  const contactCard = [
    {
      image: office,
      heading: "Office",
      image2: flag,
      para1: "Kala Pahar, Guwahati, 560068, India",
    },
    {
      image: contact,
      heading: "Contact",
      image2: call,
      image3: mail,
      para1: "+919599513207",
      para2: "Usha@insternational.com",
    },
    {
      image: social,
      heading: "Socials",
      image2: linkedin,
      image3: facebook,
      image4: insta,
      para1: "Usha International",
      para2: "Usha International",
      para3: "Usha International",
    },
  ];

  return (
    <>
      <div className="banner">
        <img src={banner}/>
      </div>
      <div className="sectionwrapper">
        <div className="">
        <div className="heading">Contact Us</div>
        <p>
          Your questions, feedback, and inquiries are important to us—reach out
          today for personalized support and seamless solutions!
        </p>
        </div>
        <div className="contentwrapper">
          <div>
            {contactCard.map((item, index) => {
              return (
                <div key={index} className="cardtwrapper">
                  <div className="carditem">
                    <div className="carditemheading">
                      <img src={item.image} />
                      <div>{item.heading}</div>
                    </div>
                    <div className="carditemcontent">
                      <div className="carditempara">
                        <div>
                          <img src={item.image2} />
                        </div>
                        {item.para1}
                      </div>
                      <div className="carditempara">
                        <div>
                          <img src={item.image3} />
                        </div>
                        {item.para2}
                      </div>
                      <div className="carditempara">
                        <div>
                          <img src={item.image4} />
                        </div>
                        {item.para3}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="form">
            <form onSubmit={handleOnSubmit}>
              <div className="namefieldwrapper">
                <div className="namefield">
                  <label>First Name*</label>
                  <input
                    name="firstName"
                    onChange={handleInputChange}
                    {...register("firstName", { required: true })}
                  />
                  {errors.firstName && <span>This field is required</span>}
                </div>

                <div>
                  <label>Last Name</label>
                  <input
                    name="lastName"
                    onChange={handleInputChange}
                    {...register("lastName")}
                  />
                </div>
              </div>
              <div>
                <label>Email*</label>
                <input
                  name="email"
                  type="email"
                  onChange={handleInputChange}
                  {...register("email", { required: true })}
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="namefieldwrapper">
                <div className="namefield">
                  <label>Phone no*</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    onChange={handleInputChange}
                    {...register("phoneNo", { required: true })}
                  />
                  {errors.phoneNo && <span>This field is required</span>}
                </div>

                <div>
                  <label>Company Name</label>
                  <input
                    name="company"
                    onChange={handleInputChange}
                    {...register("companyName")}
                  />
                </div>
              </div>

              <div className="helpfield">
                <label>How can we help you?</label>
                <textarea
                  name="message"
                  rows={5}
                  onChange={handleInputChange}
                  {...register("help")}
                />
              </div>
              <div className="helpfield">
                By clicking on ‘Send’, I agree to the
                <span>
                  {" "}
                  <a href={"/page-terms"}>Terms of Use</a>
                </span>{" "}
                and our
                <span>
                  {" "}
                  <a href={"/privacy-policy"}>Privacy Policy</a>
                </span>
              </div>
              <input type="submit" value={"Send"} />
            </form>
          </div>
        </div>
      </div>

      <div className="worldwrapper">
        <div className="secttion2heading">Global Presence</div>
        <img src={map} />
      </div>
    </>
  );
};

export default Contactus;
