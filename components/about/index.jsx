// import {Button, message,Radio,Layout,Image,Card,Col,Row} from 'antd'
// import {CaretRightOutlined } from '@ant-design/icons'
// import { motion } from "framer-motion"
// // import Layout from '../../components/shared/layout'
// import Style from '../../styles/index.module.css'

// import Link from 'next/link'
// import Skill from '../skill'
// import  { useState } from 'react';

// const { Meta } = Card;

// const About = ()=>{
//     return (
//         <Layout title="About">
//             <div>
//                   {/* about menu descriptions  */}
//             <div >
//                 <div className='mx-40' id="about">
//                     <Row>
//                       <Col span={12}>
//                         <div className={Style.leftdiv}>
//                         <div className='flex'>
//                             <div className='w-48 h-60   '>
//                                 <h1 className='text-9xl mb-0 mt-0 p-0 font-bold'>02</h1>
//                                  <div>
//                                     <h2 className='text-xl ml-5 tracking-[6px]' > Y   e    a    r    s </h2>
//                                  </div>
//                             </div>
//                             <div className='ml-5 tracking-[2px] leading-10 w-4/6'>
//                                 <h1>of working experience as a web designer & developer</h1>
//                             </div>
                            
//                          </div>
//                          <div className='mt-10'>
//                             <h2 className='text-base'>Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</h2>
//                           </div>

//                           <div className='mt-5'>
//                               <div className='w-60'>
//                                     <div className='mt-2'>
//                                       <Radio>Afordable Prices</Radio>
//                                     </div>
//                                     <div className='mt-2'>
//                                       <Radio type='true'>High Quality Product</Radio>
//                                     </div>
//                                     <div className='mt-2'>
//                                       <Radio>On Time Project Delivery</Radio>
//                                     </div>
//                                     <button class="relative mt-5 flex  h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56" style={{borderRadius:'5px'}}>
//                                       <span class="relative z-10">Read Me !</span>
//                                     </button>
//                               </div>
//                           </div>
//                         </div>
                        
//                       </Col>

//                       <Col span={12}>
//                           <div className=' pt-2'>
//                             <Row>
//                               <Col span={12}>
//                               <Card
//                               hoverable
//                               style={{
//                                 width: 300,
//                               }}
//                               cover={
//                               <Image alt="example" src="/img/about-1.jpg" />
//                             }
//                             >
                             
//                             </Card> 
//                               </Col>
//                               <Col span={12}>
//                               <Card
//                               hoverable
//                               style={{
//                                 width: 300,
//                               }}
//                               cover={
//                               <Image  src="/img/about-2.jpg" />
//                                 }
//                             >
                              
//                             </Card> 

//                               </Col>
//                             </Row>
//                               <div className='border w-full'>
//                                    <div className='flex'>
//                                       <h2 className='text-black font-bold text-[20px]'>Happy Client | </h2>  <h2 className='text-blue-800 text-[28px] font-bold ml-2'>1234</h2>
//                                    </div>
//                                    <div className='mt-5'>
//                                       <p className='text-base mr-5'>Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam amet diam ipsum clita labore dolor duo clita.</p> 

//                                   </div>
                                      
//                               </div>

//                               <div className='border w-full mt-5'>
//                                    <div className='flex'>
//                                       <h2 className='text-black font-bold text-[20px]'>Project Complated  | </h2>  <h2 className='text-blue-800 text-[28px] font-bold ml-2'>1234</h2>
//                                    </div>
//                                    <div className='mt-5'>
//                                       <p className='text-base mr-5'>Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam amet diam ipsum clita labore dolor duo clita.</p> 

//                                   </div>
                                      
//                               </div>
//                           </div>
//                       </Col>
//                     </Row>
//                 </div>
//             </div>

//             {/* end about page coding ..........  */}
//             </div>
//         </Layout>
//     )
// }

// export default About


import { Button, message, Radio, Layout, Image, Card, Col, Row } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { motion } from "framer-motion";
import Style from '../../styles/index.module.css';
import Link from 'next/link';
import Skill from '../skill';
import { useState } from 'react';

const { Meta } = Card;

const About = () => {
  return (
    <Layout title="About">
      <div>
        {/* about menu descriptions */}
        <div>
          <div className='mx-4 md:mx-10 lg:mx-40' id="about">
            <Row gutter={[16, 16]}>
              <Col xs={24} md={12}>
                <div className={Style.leftdiv}>
                  <div className='flex'>
                    <div className='w-full md:w-48 h-60'>
                      <h1 className='text-6xl md:text-9xl mb-0 mt-0 p-0 font-bold'>02</h1>
                      <div>
                        <h2 className='text-lg md:text-xl ml-0 md:ml-5 tracking-[6px]'>Y   e    a    r    s</h2>
                      </div>
                    </div>
                    <div className='md:ml-5 tracking-[2px] leading-10 w-full md:w-4/6'>
                      <h1 className="text-3xl text-start">of working experience as a web designer & developer</h1>
                    </div>
                  </div>
                  <div className='mt-10'>
                    <h2 className='text-sm md:text-base'>Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</h2>
                  </div>
                  <div className='mt-5'>
                    <div className='w-60'>
                      <div className='mt-2'>
                        <Radio>Afordable Prices</Radio>
                      </div>
                      <div className='mt-2'>
                        <Radio type='true'>High Quality Product</Radio>
                      </div>
                      <div className='mt-2'>
                        <Radio>On Time Project Delivery</Radio>
                      </div>
                      <button className="relative mt-5 flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56" style={{ borderRadius: '5px' }}>
                        <span className="relative z-10">Read Me !</span>
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div className=' pt-2'>
                  <Row gutter={[16, 16]}>
                    <Col xs={12} md={12}>
                      <Card
                        hoverable
                        style={{
                          width: '100%',
                        }}
                        cover={
                          <Image alt="example" src="/img/about-1.jpg" />
                        }
                      >
                        <Meta title="Happy Client" description="1234" />
                      </Card>
                    </Col>
                    <Col xs={12} md={12}>
                      <Card
                        hoverable
                        style={{
                          width: '100%',
                        }}
                        cover={
                          <Image src="/img/about-2.jpg" />
                        }
                      >
                        <Meta title="Project Completed" description="1234" />
                      </Card>
                    </Col>
                  </Row>
                  <div className='border w-full'>
                    <div className='flex'>
                      <h2 className='text-black font-bold text-sm md:text-[20px]'>Happy Client | </h2>  <h2 className='text-blue-800 text-[24px] font-bold ml-2'>1234</h2>
                    </div>
                    <div className='mt-5'>
                      <p className='text-sm md:text-base mr-5'>Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam amet diam ipsum clita labore dolor duo clita.</p>
                    </div>
                  </div>
                  <div className='border w-full mt-5'>
                    <div className='flex'>
                      <h2 className='text-black font-bold text-sm md:text-[20px]'>Project Completed  | </h2>  <h2 className='text-blue-800 text-[24px] font-bold ml-2'>1234</h2>
                    </div>
                    <div className='mt-5'>
                      <p className='text-sm md:text-base mr-5'>Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam amet diam ipsum clita labore dolor duo clita.</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        {/* end about page coding ..........  */}
      </div>
    </Layout>
  )
}

export default About;
