// import Link from 'next/link';
// import { usePathname } from 'next/navigation'
// import Head from 'next/head'
// import Style from '../../../styles/index.module.css'
// import {
//     HomeOutlined,
//     ContactsOutlined,
//     UserOutlined
   
// } from '@ant-design/icons'
// import { Button } from "antd";
// const menus = [
//     {
//         label: "home",
//         href: "/",
//         icon: <HomeOutlined />
//     },
//     {
//         label: "contact",
//         href: "#contact",
//         icon: <ContactsOutlined />
//     },
//     {
//         label: "about",
//         href: "#about",
//         icon: <UserOutlined />
//     },
//     {
//         label: "skill",
//         href: "#skill",
//         icon:  <UserOutlined />
//     },
//     {
//         label: "project",
//         href: "#project",
//         icon:  <UserOutlined />
//     },
//     {
//         label: "portfolios",
//         href: "/portfolios",
//         icon:  <UserOutlined />
//     }
// ]

// const Layout = ({children, title="Home"})=>{
//     const pathname = usePathname()
//     return (
//         <>
//             <Head>
//                 <title>{title}</title>
//             </Head>
//             <div>
//                 <nav className='bg-white flex p-8 justify-center text-black shadow-2xl font-bold text-xl '  id={Style.menu}>
                  
//                     <div className='flex gap-8 xs:gap-4'>
//                         {
//                             menus.map((item,index)=>(
//                                 <Link href={item.href} legacyBehavior key={index}>
//                                     <a className={`capitalize ${item.href === pathname && 'text-red-500'}`}>{item.label}</a>
//                                 </Link>
//                             ))
//                         }
//                     </div>
//                 </nav>
//                 <section className=''>{children}</section>
//                 <footer>
               
//                 </footer>
//                 {/* <footer className='bg-slate-900 flex p-8 justify-between text-white text-6xl'>footer</footer> */}
//             </div>
//         </>
//     )
// }
            
// export default Layout


import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Head from 'next/head';
import Style from '../../../styles/index.module.css';
import {
  HomeOutlined,
  ContactsOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';

const menus = [
  {
    label: 'home',
    href: '/',
    icon: <HomeOutlined />,
  },
  {
    label: 'contact',
    href: '#contact',
    icon: <ContactsOutlined />,
  },
  {
    label: 'about',
    href: '#about',
    icon: <UserOutlined />,
  },
  {
    label: 'skill',
    href: '#skill',
    icon: <UserOutlined />,
  },
  {
    label: 'project',
    href: '#project',
    icon: <UserOutlined />,
  },
  {
    label: 'portfolios',
    href: '/portfolios',
    icon: <UserOutlined />,
  },
];

const Layout = ({ children, title = 'Home' }) => {
  const pathname = usePathname();
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <nav className={`bg-white flex p-8 justify-center text-black shadow-2xl font-bold text-xl ${Style.menu}`}>
          <div className='flex flex-col md:flex-row gap-8 xs:gap-4'>
            {menus.map((item, index) => (
              <Link href={item.href} legacyBehavior key={index}>
                <a className={`capitalize ${item.href === pathname && 'text-red-500'}`}>{item.label}</a>
              </Link>
            ))}
          </div>
        </nav>
        <section className=''>{children}</section>
        <footer>{/* Your footer content here */}</footer>
      </div>
    </>
  );
};

export default Layout;
