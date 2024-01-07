import { Col, Row, Button } from "antd";
import React, { useState, useEffect } from "react";
import Layout from "../../shared/layout";
import Style from "../../../styles/index.module.css";
import jsPDF from "jspdf";

const Hero = () => {
  useEffect(() => {
    const resumeUrl = "../../../public/img/gudduraj.pdf";
    const a = document.createElement("a");
    if (!sessionStorage.getItem("download")) a.href = resumeUrl;
    a.download = "../../../public/img/gudduraj.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    return sessionStorage.setItem("download", "true");
  }, []);

  const downloadPdf = () => {
    const pdf = new jsPDF();
    pdf.text("Hello, this is a PDF!", 10, 10);
    pdf.save("../../../public/img/gudduraj.pdf");
  };

  return (
    <div>
      <Layout title="Homepage">
        <div>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12}>
              <div className={Style.mypic}>
                <div className="">
                  <div className={`${Style.one} ml-2 md:ml-32`}>
                    <div className="flex">
                      <div className="mt-20">
                        <div>
                          <h1 className="font-bold text-2xl"> I'm </h1>
                        </div>

                        <div>
                          <h1
                            className="font-bold text-4xl md:text-6xl"
                            id={Style.textone}
                          >
                            Er Guddu Raj
                          </h1>
                        </div>

                        <div>
                          <h1 className="text-3xl font-bold"> App Developer | Website Developer </h1>
                        </div>

                        <div>
                          <h1 className="text-3xl font-bold">Front & End | Fullstack Mern Developer  </h1>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-8 cursor-pointer">
                      <a href="../../../public/img/gudduraj.pdf" download>
                        <Button
                          onClick={downloadPdf}
                          type="primary"
                          className={`${Style.dbutton} mt-2 relative mt-5 flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56`}
                          style={{ borderRadius: "5px" }}
                        >
                          <span className="relative z-10"> Download CV</span>
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <div className={` ${Style.mainpage}`}>
                <div className="">
                  <div className={Style.profilebg}></div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Layout>
    </div>
  );
};

export default Hero;
