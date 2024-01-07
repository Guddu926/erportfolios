// import Layout from "../shared/layout";
import { FacebookOutlined } from "@ant-design/icons";
import Style from "../../styles/index.module.css";
import Icon from "@mui/material/Icon";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import React from "react";
import { Button, Checkbox, Form, Input, Row, Col, Layout } from "antd";
import { BiSolidUpArrowCircle } from "react-icons/bi";
import axios from "axios";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Contact = () => {
  const sendMessage = async (e) => {
    e.preventDefault();
    console.log("rakeshraj");
    await axios.post("/api/mail", {
      name: "Rakesh",
      email: "gudduprajapati586@gmail.com",
      message: "Hallo How are you",
    });
  };

  return (
    // <Layout title="Contact">
    //   <div className="main p-8 mx-32 mt-10" id="contact">
    //     <Row>
    //       <Col span="9">
    //         <div>
    //           <h1 className="text-3xl font-bold">Let's Work Together</h1>
    //         </div>

    //         <div className="officetext mt-10">
    //           <h2 className="text-lg text-gray-500">My office</h2>
    //           <h1 className="font-bold">Company Name : Techsunset - Bengaluru Electronic City phase-1</h1>
    //           <hr className="border border-gray-200 text-gray-200" />

    //           <h2 className="text-lg text-gray-500">Call me:</h2>
    //           <h1 className="font-bold"> + 91 9006648119</h1>
    //           <hr className="border border-gray-200 text-gray-200" />

    //           <h2 className="text-lg text-gray-500">Mail me:</h2>
    //           <h1 className="font-bold">mernguddu@gmail.com</h1>
    //           <hr className="border border-gray-200 text-gray-200" />

    //           <h2 className="text-lg text-gray-500">Follow me:</h2>
    //           <div className="flex gap-2 mt-5">
    //             <div
    //               className="text-center pt-1 bg-violet-800  border border-white w-12 h-12 text-lg "
    //               style={{ border: "2px solid white", borderRadius: "20px" }}
    //             >
    //               <center>
    //                 <a href="www.linkedin.com/in/guddu-mern-9a76062a7">
    //                   <FaLinkedin
    //                     className="text-white mt-1 "
    //                     style={{ fontSize: "25px", cursor: "pointer " }}
    //                   />
    //                 </a>
    //               </center>
    //             </div>

    //             <div
    //               className="text-center pt-1 bg-violet-800  border border-white w-12 h-12 text-lg "
    //               style={{ border: "2px solid white", borderRadius: "20px" }}
    //             >
    //               <center>
    //                 <a href="">
    //                   <FaYoutube
    //                     className="text-white mt-1 "
    //                     style={{ fontSize: "25px", cursor: "pointer " }}
    //                   />
    //                 </a>
    //               </center>
    //             </div>

    //             <div
    //               className="text-center pt-1 bg-violet-800  border border-white w-12 h-12 text-lg "
    //               style={{ border: "2px solid white", borderRadius: "20px" }}
    //             >
    //               <center>
    //                 <a>
    //                   <FaSquareTwitter
    //                     className="text-white mt-1 "
    //                     style={{ fontSize: "25px", cursor: "pointer " }}
    //                   />
    //                 </a>
    //               </center>
    //             </div>

    //             <div
    //               className="text-center pt-1 bg-violet-800  border border-white w-12 h-12 text-lg "
    //               style={{ border: "2px solid white", borderRadius: "20px" }}
    //             >
    //               <center>
    //                 <a>
    //                   <FaFacebook
    //                     className="text-white mt-1 "
    //                     style={{ fontSize: "25px", cursor: "pointer " }}
    //                   />
    //                 </a>
    //               </center>
    //             </div>
    //           </div>
    //         </div>
    //       </Col>

    //       <Col span="15">
    //         <div className="text-right mt-10">
    //           <button
    //             className="text-lg text-white font-bold py-2 px-4 w-40 h-16 rounded-xl bg-violet-800 mt-2 cursor-pointer"
    //             id={Style.dbutton}
    //           >
    //             Say Hellow{" "}
    //           </button>
    //           <div className="mt-10 ">
    //             <h2 className="text-xl">
    //               The contact form is currently Download Now.
    //             </h2>
    //           </div>
    //           <div className="mt-10 ml-10">
    //             <form onSubmit={sendMessage}>
    //               <Row>
    //                 <Col span={12}>
    //                   <div className="Name">
    //                     <input
    //                       type="text"
    //                       name="name"
    //                       placeholder="Your Name"
    //                       className="w-full border h-14 pl-2 "
    //                       style={{
    //                         border: "5px solid #a78bfa",
    //                         borderRadius: "10px",
    //                       }}
    //                       required="required"
    //                     />
    //                   </div>
    //                 </Col>
    //                 <Col span={12}>
    //                   <div className="email ml-2">
    //                     <input
    //                       type="email"
    //                       name="email"
    //                       placeholder="Your Email"
    //                       className="w-full border h-14 pl-2 "
    //                       style={{
    //                         border: "5px solid #a78bfa",
    //                         borderRadius: "10px",
    //                       }}
    //                       required="required"
    //                     />
    //                   </div>
    //                 </Col>
    //               </Row>
    //               <div className="mt-5">
    //                 <Row>
    //                   <Col span={24}>
    //                     <div>
    //                       <input
    //                         type="text"
    //                         name="subject"
    //                         placeholder="subject"
    //                         className="w-full border h-14 pl-2 text-lg "
    //                         style={{
    //                           border: "5px solid #a78bfa",
    //                           borderRadius: "10px",
    //                         }}
    //                         required="required"
    //                       />
    //                     </div>

    //                     <div className="mt-5">
    //                       <textarea
    //                         type="text"
    //                         name="message"
    //                         placeholder="subject"
    //                         className="w-full border h-20 pl-2 text-lg "
    //                         style={{
    //                           border: "5px solid #a78bfa",
    //                           borderRadius: "10px",
    //                         }}
    //                         required="required"
    //                       />
    //                     </div>

    //                     <button
    //                       type="submit"
    //                       className="text-lg text-white font-bold py-2 px-4 w-40 h-16 rounded-xl bg-violet-800 mt-2 cursor-pointer"
    //                       id={Style.dbutton}
    //                     >
    //                       Send Message{" "}
    //                     </button>
    //                   </Col>
    //                 </Row>
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //       </Col>
    //     </Row>
    //   </div>
    //   <div className="text-right">
    //     <Button className="h-20 w-20">
    //       <BiSolidUpArrowCircle style={{ fontSize: "50px" }} />
    //     </Button>
    //   </div>
    // </Layout>
    <Layout title="Contact">
      <div className="main p-8 mx-4 md:mx-32 mt-10" id="contact">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={9}>
            <div>
              <h1 className="text-3xl font-bold">Let's Work Together</h1>
            </div>

            <div className="officetext mt-10 xs:w-[50%] sm:w-full md:w-3/4 lg:w-full xl:w-full mx-auto">
              <div>
                <h2 className="text-lg text-gray-500 ">My office</h2>
              </div>

              <div>
                <h1 className="font-bold text-xl">
                  Company : Techsunset - Bengaluru Electronic City phase-1
                </h1>
              </div>
              <div>
                <hr className="border border-gray-200 text-gray-200" />
              </div>
              <div>
                <h2 className="text-lg text-gray-500">Call me:</h2>
              </div>
              <div>
                <h1 className="font-bold"> + 91 9006648119</h1>
              </div>
              <div>
                <hr className="border border-gray-200 text-gray-200" />
              </div>
              <div>
                <h2 className="text-lg text-gray-500">Mail me:</h2>
              </div>
              <div>
                <h1 className="font-bold">mernguddu@gmail.com</h1>
              </div>
              <div>
                <hr className="border border-gray-200 text-gray-200" />
              </div>
              <div>
                <h2 className="text-lg text-gray-500">Follow me:</h2>
              </div>
              <div className="flex gap-2 mt-5">
                <div
                  className="text-center pt-1 bg-violet-800 border border-white w-12 h-12 text-lg"
                  style={{
                    border: "2px solid white",
                    borderRadius: "20px",
                  }}
                >
                  <center>
                    <a href="www.linkedin.com/in/guddu-mern-9a76062a7">
                      <FaLinkedin
                        className="text-white mt-1 "
                        style={{ fontSize: "25px", cursor: "pointer " }}
                      />
                    </a>
                  </center>
                </div>

                <div
                  className="text-center pt-1 bg-violet-800 border border-white w-12 h-12 text-lg"
                  style={{
                    border: "2px solid white",
                    borderRadius: "20px",
                  }}
                >
                  <center>
                    <a href="">
                      <FaYoutube
                        className="text-white mt-1 "
                        style={{ fontSize: "25px", cursor: "pointer " }}
                      />
                    </a>
                  </center>
                </div>

                <div
                  className="text-center pt-1 bg-violet-800 border border-white w-12 h-12 text-lg"
                  style={{
                    border: "2px solid white",
                    borderRadius: "20px",
                  }}
                >
                  <center>
                    <a>
                      <FaSquareTwitter
                        className="text-white mt-1 "
                        style={{ fontSize: "25px", cursor: "pointer " }}
                      />
                    </a>
                  </center>
                </div>

                <div
                  className="text-center pt-1 bg-violet-800 border border-white w-12 h-12 text-lg"
                  style={{
                    border: "2px solid white",
                    borderRadius: "20px",
                  }}
                >
                  <center>
                    <a>
                      <FaFacebook
                        className="text-white mt-1 "
                        style={{ fontSize: "25px", cursor: "pointer " }}
                      />
                    </a>
                  </center>
                </div>
              </div>
            </div>
          </Col>

          <Col xs={24} md={15}>
            <div className="text-center mt-10 md:text-right">
              <button
                className="text-lg text-white font-bold py-2 px-4 w-40 h-16 rounded-xl bg-violet-800 mt-2 cursor-pointer"
                id={Style.dbutton}
              >
                Say Hello{" "}
              </button>
              <div className="mt-10 ">
                <h2 className="text-xl">
                  The contact form is currently Download Now.
                </h2>
              </div>
              <div className="mt-10 md:ml-10">
                <form onSubmit={sendMessage}>
                  <Row gutter={[16, 16]}>
                    <Col xs={24} md={12}>
                      <div className="Name">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          className="w-full border h-14 pl-2"
                          style={{
                            border: "5px solid #a78bfa",
                            borderRadius: "10px",
                          }}
                          required="required"
                        />
                      </div>
                    </Col>
                    <Col xs={24} md={12}>
                      <div className="email mt-2 md:ml-2">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          className="w-full border h-14 pl-2"
                          style={{
                            border: "5px solid #a78bfa",
                            borderRadius: "10px",
                          }}
                          required="required"
                        />
                      </div>
                    </Col>
                  </Row>
                  <div className="mt-5">
                    <Row gutter={[16, 16]}>
                      <Col xs={24}>
                        <div>
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="w-full border h-14 pl-2 text-lg"
                            style={{
                              border: "5px solid #a78bfa",
                              borderRadius: "10px",
                            }}
                            required="required"
                          />
                        </div>

                        <div className="mt-5">
                          <textarea
                            type="text"
                            name="message"
                            placeholder="Message"
                            className="w-full border h-20 pl-2 text-lg"
                            style={{
                              border: "5px solid #a78bfa",
                              borderRadius: "10px",
                            }}
                            required="required"
                          />
                        </div>

                        <button
                          type="submit"
                          className="text-lg text-white font-bold py-2 px-4 w-40 h-16 rounded-xl bg-violet-800 mt-2 cursor-pointer"
                          id={Style.dbutton}
                        >
                          Send Message{" "}
                        </button>
                      </Col>
                    </Row>
                  </div>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="text-right">
        <Button className="h-20 w-20">
          <BiSolidUpArrowCircle style={{ fontSize: "50px" }} />
        </Button>
      </div>
    </Layout>
  );
};

export default Contact;
