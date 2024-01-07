// import Layout from '../../components/shared/layout'
import React from "react";
import { Col, Divider, Row, Layout } from "antd";
import { Space } from "antd";
import Image from "next/image";
import Link from "next/link";
import {
  DownloadOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";

const SkillPage = () => {
  const projects = [
    {
      img: "/img/p-1.png",
      href: "http://www.millenniumworldschoolpatna.com/",
      title: "Portfolios-title",
    },
    {
      img: "/img/p-2.png",
      href: "https://www.speedcarwash.com/",
      title: "Portfolios-title",
    },
    {
      img: "/img/p-3.png",
      href: "https://www.rodeodigital.com/",
      title: "Portfolios-title",
    },
    {
      img: "/img/p-4.png",
      href: "https://fixkartinterio-interiordesignerinjaipur.com/",
      title: "Portfolios-title",
    },
    {
      img: "/img/p-5.png",
      href: "https://veecabs.com/",
      title: "Portfolios-title",
    },
    {
      img: "/img/p-6.png",
      href: "https://www.spotlessfruits.com/",
      title: "Portfolios-title",
    },
  ];

  const onDownload = () => {
    fetch(src)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.download = "image.png";
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(url);
        link.remove();
      });
  };

  return (
    <Layout title="Project">
    <div className="main xs:mx-0 md:mx-0 lg:mx-40" id="project">
    <div className="flex justify-center items-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
        My Projects
      </h1>
    </div>
       
    <Row gutter={[16, 16]}>
  {projects.map((project, index) => (
    <Col xs={24} sm={12} md={8} lg={8} key={index}>
      <Link href={project.href}>
        <div className="p-2 rounded-md shadow-2xl overflow-hidden mb-4 sm:mb-0">
          <div
            className="h-[200px] md:h-[300px] lg:h-[400px] w-full mt-5 project_1 rounded-lg"
            style={{
              backgroundImage: `url(${project.img})`,
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </Link>
    </Col>
  ))}
</Row>

      
      

    </div>
  </Layout>
  );
};

export default SkillPage;
