// export default SkillPage;
import React from 'react';
import {
  FacebookOutlined,
  HomeOutlined,
  ContactsOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Style from "../../styles/index.module.css";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { Button, Checkbox, Form, Input, Row, Col, Progress, Layout } from "antd";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SkillPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout title="Contact">
      <div className="main mx-5 md:mx-20 lg:mx-40" id="skill">
        <div>
          <Row gutter={[16, 16]}>
            <Col xs={24} lg={12}>
              <div className="header">
                <h1 className="text-5xl font-bold">Skills & Experience</h1>
              </div>

              <div>
                <p className="text-lg">
                  Stet no et lorem dolor et diam, amet duo ut dolore vero eos.
                  No stet est diam rebum amet diam ipsum clita dolor duo clita
                  sit.
                </p>
              </div>
              <div className="">
                <div>
                  <h1>My Skills</h1>
                </div>
                <div>
                  <Row gutter={[16, 16]}>
                    <Col xs={24} lg={12}>
                      <div className="one">
                      <div className="one">
                        <div>
                          <h2>HTML</h2>
                          <Progress percent={98} status="active" />
                        </div>

                        <div>
                          <h2>Css</h2>
                          <Progress percent={95} status="active" />
                        </div>

                        <div>
                          <h2>Bootsrap</h2>
                          <Progress percent={90} status="active" />
                        </div>

                        <div>
                          <h2>Java Script </h2>
                          <Progress percent={90} status="active" />
                        </div>

                        <div>
                          <h2>PHP</h2>
                          <Progress percent={88} status="active" />
                        </div>
                      </div>
                      </div>
                    </Col>
                    <Col xs={24} lg={12}>
                      <div className="two ml-3">
                      <div className="two ml-3">
                        <div>
                          <h2>Angular</h2>
                          <Progress percent={90} status="active" />
                        </div>

                        <div>
                          <h2>React Js </h2>
                          <Progress percent={95} status="active" />
                        </div>

                        <div>
                          <h2>Next js </h2>
                          <Progress percent={95} status="active" />
                        </div>

                        <div>
                          <h2>Node Js </h2>
                          <Progress percent={90} status="active" />
                        </div>

                        <div>
                          <h2>React Native</h2>
                          <Progress percent={75} status="active" />
                        </div>
                      </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className="mt-10 md:mt-20 ml-0 md:ml-20">
                <Box sx={{ width: "100%" }}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="basic tabs example"
                    >
                      <Tab
                        label="Experience"
                        className="font-bold text-lg w-60 h-12 border border-green-500 text-white font-bold py-2 px-4 w-40 h-16 rounded-xl bg-violet-800 mt-2 cursor-pointer"
                        {...a11yProps(0)}
                      />
                      <Tab
                        label="Education"
                        className="ml-16 font-bold text-lg w-60 h-12 border border-green-500 text-white font-bold py-2 px-4 w-40 h-16 rounded-xl bg-violet-800 mt-2 cursor-pointer"
                        {...a11yProps(1)}
                      />
                    </Tabs>
                  </Box>
                  <CustomTabPanel value={value} index={0}>
                  <div class="w-full grid grid-cols-2  ">
                        <div className="p-2 ">
                            <h2 className="mt-2">Company - Techsunset  </h2> 
                            <h2 className="mt-2">Located - Banguluru Electronic city - phase - 1  </h2> 
                            <h2 className="mt-2">2021 - 2023 - 2 Year + </h2> 
                            <h2 className="mt-2">Full Mernstack Developer</h2> 
                            <h2 className="mt-2">Backend and Fronted </h2>
                        </div>

                        <div className="p-2 ml-5">
                        <h2 className="mt-2">Company - Techsunset  </h2> 
                            <h2 className="mt-2">Located - Banguluru Electronic city - phase - 1  </h2> 
                            <h2 className="mt-2">2021 - 2023 - 2 Year + </h2> 
                            <h2 className="mt-2">Full Mernstack Developer</h2> 
                            <h2 className="mt-2">Backend and Fronted </h2>
                        </div>
                       
                    </div>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={1}>
                  <div class="w-full grid grid-cols-2 gap-20 ">
                        <div className="p-2 ">
                            <h2 className="mt-2">BA -  2018 - 2022 </h2> 
                            <h2 className="mt-10"></h2> 
                            <h2 className="mt-2">ISC - 12th - 2015 - 2017</h2> 
                            <h2 className="mt-5">10th - Board - 2015</h2>
                        </div>

                        <div className="p-2 ">
                            <h2 className="mt-2">NPU - Nilamber Pitamber University - Daltonganj</h2> 
                            <h2 className="mt-2"></h2> 
                            <h2 className="mt-2">Jharkhand Academic Council, Ranchi </h2> 
                            <h2 className="mt-2">Jharkhand Academic Council, Ranchi </h2>
                        </div>
                       
                    </div>
                  </CustomTabPanel>
                </Box>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  );
};

export default SkillPage;

