import {
  Button,
  Toolbar,
  Drawer,
  Box,
  List,
  Stack,
  AppBar,
  ListItem,
  ListItemButton,
  ListIcon,
  ListItemText,
  IconButton,
  ListItemIcon,
} from "@mui/material";
import useSWR, { mutate } from "swr";
import { RiAngularjsFill } from "react-icons/ri";
import { FaPhp } from "react-icons/fa6";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { GiCrystalWand } from "react-icons/gi";
import { SiMaterialdesign } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
import { RiReactjsFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaAngular } from "react-icons/fa6";
import { FaVuejs } from "react-icons/fa";
import { SiNuxtdotjs } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiZoho } from "react-icons/si";
import { SiJirasoftware } from "react-icons/si";
import { IoLogoBitbucket } from "react-icons/io5";
import { FaGitlab } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDigitalOcean } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { SiApachekafka } from "react-icons/si";
import { GiMushroomsCluster } from "react-icons/gi";
import { FaDocker } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import axios from "axios";
import { useState, useEffect } from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiAmazondynamodb } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { SiFastify } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";

import {
  Tabs,
  Form,
  Input,
  message,
  Spin,
  Card,
  Modal,
  Select,
  Empty,
  Skeleton,
  Pagination,
  Progress,
} from "antd";
import {
  FormOutlined,
  PlusCircleOutlined,
  LoadingOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import Image from 'next/image'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import { FiMapPin } from "react-icons/fi";
import { Row, Col } from "antd";
import Style from "../../../styles/index.module.css";
import Layout from '../../../components/shared/layout'
const Resume = () => {
  return (
    <>
    
    <div className="">
        <Row>
          <Col span={5} xs={24} sm={24} md={12} lg={5} className="left_div" >
            <div className="fixed w-[325px]">
              <div 
                className="w-full xs:w-full md:w-full h-full sticky "
                style={{ background: "#163853", height: "1000px" }}
              >
                <div className="p-5">
                  <div
                    className="w-auto h-auto rounded-full ml-12 mt-1"
                    style={{ border: "" }}
                  >
                    <div className="image">
                    <Image
                        width={200}
                        height={200}
                        src="/img/raj123.png"
                        style={{ borderRadius: "100px" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center text-white text-bold text-xl tracking-widest mt-5">
                  <h2>CONTACT</h2>
                  <hr className="border border-gray-500 text-white w-full h-1 bg-white mt-2" />
                  <br />

                  <div className="mx-5 flex">
                    <FaPhoneAlt className="mt-1 text-sm" />{" "}
                    <span className="pl-3 text-sm"> 91 9006648119</span>
                  </div>

                  <div className="mx-5 flex mt-3">
                    <MdOutlineMail className="mt-1 text-sm" />{" "}
                    <span className="pl-3 text-sm">
                      mernguddu@gmail.com
                    </span>
                  </div>

                  <div className="mx-5 flex mt-3">
                    <FiMapPin className="mt-1 text-sm" />{" "}
                    <span className="pl-3 text-sm"> Daltonganj - Palamu</span>
                  </div>

                  <div className="mx-5 flex mt-3">
                    <TbWorldWww className="mt-1 text-sm" />{" "}
                    <span className="pl-3 text-sm">Pin Code - 822116</span>
                  </div>
                 
                  <div className="mt-5">
                    <h2 className="font-bold">LANGUAGES</h2>
                    <hr className="border border-gray-500 text-white w-full h-1 bg-white mt-2" />
                    <h5 className="text-sm">English (Fluent)</h5>
                    <h5 className="text-sm">Hindi (Fluent)</h5>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col span={19} xs={24} sm={24} md={12} lg={19} className={Style.Right_dive}  >
            <div className="bg-gradient-to-r from-lime-400 to-lime-#163853 pl-10" >
              <Row>
                <Col span={24} >
                  <div className="text-center mt-20  whitespace-pre-line" >
                    <div>
                        <Button href="http://localhost:3000/">Back - Home Menu</Button>
                    </div>
                    <h1 className="text-center text-5xl font-bold text-gray-500">
                      Er Guddu Raj
                    </h1>
                    <h1 className="text-center text-5xl font-bold text-gray-500">
                      Mern full Stack | Front & End Developer{" "}
                    </h1>

                    <div className="profilename flex">
                      <h1 className="font-bold">Profile</h1>
                    </div>
                    <hr className="text-black-500 border border-gray-500 w-full" />
                    <div className="text-start mt-5">
                      <h2 className="text-sm">
                        Accomplished Full-Stack MERN Developer adept at crafting
                        robust web applications with expertise in MongoDB,
                        Express.js, React, and Node.js. Specialized in both
                        front-end and back-end development, consistently
                        delivering user-friendly and scalable solutions. Proven
                        track record of creating high-performance applications
                        through a comprehensive understanding of the MERN stack.
                        Experienced in translating project requirements into
                        seamless user experiences, ensuring optimal
                        functionality and efficiency. A skilled professional
                        committed to delivering innovative, maintainable
                        solutions that meet the highest standards of quality and
                        client satisfaction.
                      </h2>
                    </div>

                    <div className="flex">
                      <h1 className="font-bold">SKILLS</h1>
                    </div>
                    <hr className="text-black-500 border border-gray-500 w-full" />
                    <div className="mt-2">
                      <Row>
                        <Col span={4}>
                          <div className="one h-auto">
                            <div className="text-start mt-2">
                              <Button
                                className="font-bold "
                                style={{ fontSize: "24px" }}
                              >
                                FRONTED UI
                              </Button>

                              <div className="mt-3 ">
                                <div className="pl-5">
                                  <div className="flex mb-2">
                                    <FaHtml5 style={{ fontSize: "25px" }} />
                                    <h2 className="text-black-500 font-bold ml-1 mt-1">
                                      Html
                                    </h2>
                                  </div>

                                  <div className="flex mb-2 ">
                                    <IoLogoCss3
                                      style={{
                                        fontSize: "25px",
                                        marginLeft: "1px",
                                        color: "red",
                                      }}
                                    />
                                    <h2 className="text-black-500 font-bold ml-1 mt-1">
                                      Css
                                    </h2>
                                  </div>
                                  <div className="flex  mb-2">
                                    <FaBootstrap
                                      style={{
                                        fontSize: "25px",
                                        marginLeft: "1px",
                                        color: "blue",
                                      }}
                                    />
                                    <h2 className="text-black-500 font-bold ml-1 mt-1">
                                      Bootstrap
                                    </h2>
                                  </div>

                                  <div className="flex  mb-2">
                                    <GiCrystalWand
                                      style={{
                                        fontSize: "25px",
                                        marginLeft: "1px",
                                        color: "green",
                                      }}
                                    />
                                    <h2 className="text-black-500 font-bold ml-1 mt-1 ">
                                      Talwind
                                    </h2>
                                  </div>

                                  <div className="flex mb-2">
                                    <SiMaterialdesign
                                      style={{
                                        fontSize: "25px",
                                        marginLeft: "1px",
                                        background:
                                          "bg-gradient-to-r from-teal-400 to-yellow-200",
                                      }}
                                      className="from-slate-500"
                                    />
                                    <h2 className="text-black-500 font-bold ml-1 mt-1">
                                      Material Ui
                                    </h2>
                                  </div>
                                  <div className="flex mb-2">
                                    <SiAdobexd
                                      style={{
                                        fontSize: "25px",
                                        marginLeft: "1px",
                                        color: "darkblue ",
                                      }}
                                    />
                                    <h2 className="text-black-500 font-bold ml-1 mt-1">
                                      ADOBE XD
                                    </h2>
                                  </div>

                                  <div className="flex mb-2">
                                    <FaFigma
                                      style={{
                                        fontSize: "25px",
                                        marginLeft: "1px",
                                        color: "yellow",
                                      }}
                                    />
                                    <h2 className="text-black-500 font-bold ml-1 mt-1">
                                      FIGMA
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col span={4}>
                          <div className="one ">
                            <div className="">
                              <Button
                                className="font-bold"
                                style={{ fontSize: "24px" }}
                              >
                                JAVA SCRIPT FRAMEWORK
                              </Button>

                              <div className="">
                                <div className="ml-5">
                                  <div className="flex mb-2 ">
                                    <RiReactjsFill
                                      style={{
                                        fontSize: "25px",
                                        color: "green",
                                      }}
                                    />
                                    <h2 className="text-black-500 font-bold ml-1 mt-1 ">
                                      React Js
                                    </h2>
                                  </div>
                                  <div className="flex mb-2">
                                    <TbBrandNextjs
                                      style={{
                                        fontSize: "25px",
                                        marginLeft: "1",
                                        color: "red",
                                      }}
                                    />
                                    <h2 className="text-black-500 font-bold ml-1 mt-1">
                                      Next Js
                                    </h2>
                                  </div>

                                  <div className="flex mb-2">
                                    <FaAngular
                                      style={{
                                        fontSize: "25px",
                                        marginLeft: "1px",
                                        color: "darkyellow",
                                      }}
                                    />
                                    <h2 className="text-black-500 font-bold ml-1 mt-1">
                                      Angular js
                                    </h2>
                                  </div>

                                  <div className="flex mb-2">
                                    <FaVuejs
                                      style={{
                                        fontSize: "25px",
                                        marginLeft: "1px",
                                      }}
                                    />
                                    <h2 className="text-black-500 font-bold ml-1 mt-1 ">
                                      Vue Js
                                    </h2>
                                  </div>

                                  <div className="flex mb-2">
                                    <SiNuxtdotjs
                                      style={{
                                        fontSize: "25px",
                                        marginLeft: "1px",
                                        color: "#ff0000",
                                      }}
                                    />
                                    <h2 className="text-black-500 font-bold ml-1 mt-1">
                                      Nuxt Js
                                    </h2>
                                  </div>
                                  <div className="flex mb-2">
                                    <SiAdobexd
                                      style={{
                                        fontSize: "25px",
                                        marginLeft: "1px",
                                        color: "#00ff00",
                                      }}
                                    />
                                    <h2 className="text-black-500 font-bold ml-1 mt-1">
                                      ANT MATERIAL
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col span={4}>
                          <div className="one  ">
                            <div className="">
                              <Button
                                className="font-bold"
                                style={{ fontSize: "20px" }}
                              >
                                DevOps Tools
                              </Button>

                              <div className="">
                                <div className="ml-2">
                                  <div className=" flex ml-2 ">
                                    <FaAws
                                      style={{
                                        fontSize: "25px",
                                        color: "#ff0000",
                                      }}
                                    />

                                    <h2 className="text-black-500 font-bold ml-1 mt-1">
                                      AWS Cloud
                                    </h2>
                                  </div>

                                  <div className="">
                                    <div className="flex ml-2">
                                      <SiZoho
                                        style={{
                                          fontSize: "25px",
                                          marginLeft: "2px",
                                          color: "#0000cc",
                                        }}
                                      />
                                      <h2 className="text-black-500 font-bold ml-1 mt-1">
                                        Zoho Sprints
                                      </h2>
                                    </div>

                                    <div className="flex ml-2  ">
                                      <SiJirasoftware
                                        style={{
                                          fontSize: "25px",
                                          marginLeft: "2px",
                                          color: "#00ff00",
                                        }}
                                      />
                                      <h2 className="text-black-500 font-bold ml-1 mt-1">
                                        Jira
                                      </h2>
                                    </div>

                                    <div className="flex mb-2 mt-2 ml-2">
                                      <IoLogoBitbucket
                                        style={{
                                          fontSize: "25px",
                                          marginLeft: "1px",
                                          color: "#ff0000",
                                        }}
                                      />
                                      <h2 className="text-black-500 font-bold ml-1 mt-1 ">
                                        BitBucket
                                      </h2>
                                    </div>

                                    <div className="flex ml-2 mb-2">
                                      <FaGitlab
                                        style={{
                                          fontSize: "25px",
                                          marginLeft: "2px",
                                          color: "#660033",
                                        }}
                                      />
                                      <h2 className="text-black-500 font-bold ml-1 mt-1">
                                        Gitlab
                                      </h2>
                                    </div>
                                    <div className="ml-2 flex">
                                      <FaGithub
                                        style={{
                                          fontSize: "25px",
                                          marginLeft: "2px",
                                          color: "#585654",
                                        }}
                                      />
                                      <h2 className="text-black-500 font-bold ml-1 mt-1">
                                        Github and Git
                                      </h2>
                                    </div>

                                    <div className="flex ml-2  mb-2 mt-2">
                                      <FaDigitalOcean
                                        style={{
                                          fontSize: "25px",
                                          marginLeft: "2px",
                                          color: "#222666",
                                        }}
                                      />
                                      <h2 className="text-black-500 font-bold ml-1 mt-1">
                                        Digital ocean
                                      </h2>
                                    </div>

                                    <div className="mt-2 mb-2 ml-2 flex">
                                      <VscAzure
                                        style={{
                                          fontSize: "25px",
                                          marginLeft: "2px",
                                          color: "#ff3300",
                                        }}
                                      />
                                      <h2 className="text-black-500 font-bold ml-1 mt-1">
                                        Azure
                                      </h2>
                                    </div>
                                    <div className="ml-2 mb-2 flex">
                                      <SiApachekafka
                                        style={{
                                          fontSize: "25px",
                                          marginLeft: "2px",
                                          color: "#00cc99",
                                        }}
                                      />
                                      <h2 className="text-black-500 font-bold ml-1 mt-1">
                                        Apache Kafka
                                      </h2>
                                    </div>

                                    <div className="flex mt-2 ml-2">
                                      <GiMushroomsCluster
                                        style={{
                                          fontSize: "25px",
                                          marginLeft: "2px",
                                        }}
                                      />
                                      <h2 className="text-black-500 font-bold ml-1 mt-1">
                                        Cluster Architecture
                                      </h2>
                                    </div>

                                    <div className="ml-2 mb-2 mt-2 flex">
                                      <FaDocker
                                        style={{
                                          fontSize: "25px",
                                          marginLeft: "2px",
                                          color: "blue",
                                        }}
                                      />
                                      <h2 className="text-black-500 font-bold ml-1 mt-1">
                                        Docker
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col span={4}>
                          <div className="one ">
                            <div className="ml-5">
                              <Button
                                className="font-bold"
                                style={{ fontSize: "24px" }}
                              >
                                Database
                              </Button>

                              <div className="ml-7">
                                <div className="">
                                  <div className="flex mb-2">
                                    <SiMysql
                                      style={{
                                        fontSize: "25px",
                                        color: "#0000cc",
                                      }}
                                    />
                                    <h2 className="text-black-500 font-bold ml-1 mt-1">
                                      My Sql
                                    </h2>
                                  </div>

                                  <div className="flex">
                                    <BiLogoPostgresql
                                      style={{
                                        fontSize: "25px",
                                        marginLeft: "1px",
                                        color: "green",
                                      }}
                                    />
                                    <h2 className="text-black-500 font-bold ml-1 mt-1">
                                      Postgresql
                                    </h2>
                                  </div>

                                  <div className="mt-1 flex mb-2">
                                    <SiAmazondynamodb
                                      style={{
                                        fontSize: "25px",
                                        marginLeft: "1px",
                                      }}
                                    />
                                    <h2 className="text-black-500 font-bold ml-1 mt-1">
                                      {" "}
                                      AWS Dynamodb
                                    </h2>
                                  </div>

                                  <div className="flex">
                                    <BiLogoMongodb
                                      style={{
                                        fontSize: "25px",
                                        marginLeft: "1px",
                                        color: "red",
                                      }}
                                    />
                                    <h2 className="text-black-500 font-bold ml-1 mt-1 ">
                                      MongoDB
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>

                        <Col span={4}>
                          <div className="one ">
                            <div className="ml-5">
                              <Button
                                className="font-bold"
                                style={{ fontSize: "24px" }}
                              >
                                Backend
                              </Button>

                              <div className="ml-7">
                                <div className="">
                                  <div className="flex mb-2">
                                    <FaNodeJs
                                      style={{
                                        fontSize: "25px",
                                        color: "green",
                                      }}
                                    />
                                    <h2 className="text-black-500 font-bold ml-1 mt-1">
                                      Node Js
                                    </h2>
                                  </div>

                                  <div className="flex">
                                    <SiExpress
                                      style={{
                                        fontSize: "25px",
                                        marginLeft: "1px",
                                        color: "#758956",
                                      }}
                                    />
                                    <h2 className="text-black-500 font-bold ml-1 mt-1">
                                      Express
                                    </h2>
                                  </div>

                                  <div className="mt-1 flex mb-2">
                                    <SiFastify
                                      style={{
                                        fontSize: "25px",
                                        marginLeft: "1px",
                                        color: "#785462",
                                      }}
                                    />
                                    <h2 className="text-black-500 font-bold ml-1 mt-1">
                                      {" "}
                                      Fastify
                                    </h2>
                                  </div>

                                  <div className="flex mb-2">
                                    <FaPhp
                                      style={{
                                        fontSize: "25px",
                                        marginLeft: "1px",
                                        color: "#123458",
                                      }}
                                    />
                                    <h2 className="text-black-500 font-bold ml-1 mt-1 ">
                                      PHP{" "}
                                    </h2>
                                  </div>

                                  <div className="flex mb-2">
                                    <FaLaravel
                                      style={{
                                        fontSize: "25px",
                                        marginLeft: "1px",
                                        color: "#478512",
                                      }}
                                    />
                                    <h2 className="text-black-500 font-bold ml-1 mt-1 ">
                                      Laravel{" "}
                                    </h2>
                                  </div>

                                  <div className="flex mb-2">
                                    <SiPython
                                      style={{
                                        fontSize: "25px",
                                        marginLeft: "1px",
                                        color: "#478123",
                                      }}
                                    />
                                    <h2 className="text-black-500 font-bold ml-1 mt-1 ">
                                      Python{" "}
                                    </h2>
                                  </div>

                                  <div className="flex mb-2">
                                    <FaJava
                                      style={{
                                        fontSize: "25px",
                                        marginLeft: "1px",
                                      }}
                                    />
                                    <h2 className="text-black-500 font-bold ml-1 mt-1 ">
                                      Java
                                    </h2>

                                   
                                  </div>
                                  <div className="flex mb-2">
                                    <FaWordpress
                                      style={{
                                        fontSize: "25px",
                                        marginLeft: "1px",
                                      }}
                                    />
                                    <h2 className="text-black-500 font-bold ml-1 mt-1 ">
                                     Wordpress
                                    </h2>
                                    </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                   
                  </div>
                
                 <div className="mt-10">
                    <div>
                        <Row>
                            <Col span={24}>
                                <div className="w-full h-80">
                                      <Button  className="tracking-widest text-xl font-bold text-black">WORK EXPERIENCE</Button>
                                      <hr className="border border-gray-800 w-full  bg-black"/>
                                      <div className="p-2 font-bold ">
                                          <h1>2 Year + Experienced </h1>
                                          <h2 className="mt-1 text-base">Company : Techsunset <a href="https://techsunset.com"></a> </h2>
                                          <h2 className="mt-2 text-base">Location : Bangluru - India </h2>
                                          <h2>Description : Currently i am handling the whole front-end and back-end  part of business related projects . I am done the some project using of ReactJs. And I have experience of 2+ year Software Development .</h2>
                                          <br />
                                          <hr className="border border-gray-800 w-full  bg-black"/>

                                         
                                      </div>
                                  </div>      
                            </Col>
                            <Col span={24}>
                                <div className="w-full ">
                                      <Button  className="tracking-widest text-xl font-bold text-black">EDUCATIONS</Button>
                                      <hr className="border border-gray-800 w-full  bg-black"/>
                                      <div className="p-2 font-bold ">
                                          <h1>BA - Bachelor of Art - 2018 - 2022 </h1>
                                          <h4 className="text-base">Collage - NPU - Nilamber Pitamber University - Daltonganj - Palamu - Jharkhand</h4>
                                          <h1>Intermediate Science 2015 - 2017</h1>
                                          <h4 className="text-base"> Jharkhand Academic Council Ranchi </h4>
                                          <h1> 10th - Jac Board - 2015 </h1>
                                          <h4 className="text-base"> Jharkhand Academic Council Ranchi </h4>
                                        
                                          <br />
                                          <hr className="border border-gray-800 w-full  bg-black"/>

                                         
                                      </div>
                                  </div>      
                            </Col>
                        </Row>
                      </div> 

                 </div>
                
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    
     
    </>
  );
};
export default Resume;
