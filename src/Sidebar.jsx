import React, { useState } from 'react';
import Cards from './Cards'
import './sidebar.css'
// import { db,addDoc,collection } from "./config/firebase";

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Radio } from 'react-bootstrap';


const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];
const Sidebar = async() => {

  // document.getElementById("btn").addEventListener('click', async () => {
  
  // let title=document.getElementById("title");
  // let img=document.getElementById("img").files;
  // let price=document.getElementById("price");
  // let Category=document.getElementById("Category");
  // let Discription=document.getElementById("Discription");

  // try {
  //   const docRef = await addDoc(collection(db, "item"), {
  //     Title:title.value,
  //     Price:price.value,
  //     Category:Category.value,
  //     Discription:Discription.value

  //   });
  //   console.log("Document written with ID: ", docRef.id);
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }
  // })

  const num=' > 100'
  const num2=' > 200'
  const num3=' > 300'
  const num4= ' > 400'

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
      
    >
      <Sider  className='side' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        
        <div className="demo-logo-vertical" />
        <div className='main'>
        <h5  className='firstH'>Filter</h5>
        <input className='input1' type="text" placeholder='Input seacrh text' id="Sort"/>
        <h6 className='secondH' >Price</h6>
        <div className='same'><input type="radio"/><h6 className='sameH'>{num}</h6></div>
        <div className='same'><input type="radio"/><h6 className='sameH'>{num2}</h6></div>
        <div className='same'><input type="radio"/><h6 className='sameH'>{num3}</h6></div>
        <div className='same'><input type="radio"/><h6 className='sameH'>{num4}</h6></div>
        <h6 className='thirdH'>Sort By</h6>
        <div className='same'><input type="radio"/><h6 className='high'>H to L</h6>
        <div className='second'>< input type="radio"/><h6 className='high'>L to H</h6></div>
        </div>
        <h6 className='fourthH'>Sort By Categories</h6>
        <div className='same'><input type="radio"/><h6 className='sameinput'>Mobile</h6></div>
        <div className='same'><input type="radio"/><h6 className='sameinput'>Laptop</h6></div>
        <div className='same'><input type="radio"/><h6 className='sameinput'>Cards</h6></div>
        </div>
      </Sider>
      <Layout>
        <Header
          style={{
              padding: 0,
              background: colorBgContainer,
            }}
        />
        <Content
          style={{
              margin: '0 16px',
            }}
            >
          <Breadcrumb
            style={{
                margin: '16px 0',
            }}
            >
            
          </Breadcrumb>
          <div
            style={{
                padding: 24,
                minHeight: 360,
              background: colorBgContainer,
            }}
            >
            <div className='secondMain'>
              <div className='secondlite'>
                <input className='sameinput2' type='text' placeholder='Service Title' id='title' />
                <input className='sameinput2' type='file' id='img' />
                <input className='sameinput2' type='number' placeholder='Price' id='price' />
                </div>
                <div className='newDiv'>
                <input  className='match' type='text' placeholder='Category' id='Category' />
                <input className='match' type='text' placeholder='Discription' id='Discription' />
                <button className='btn' type='number' placeholder='Price' id='btn'>Add / Edit Service</button>
                </div>
            </div>
          <div className='Cards'>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        </div>
          </div>
        </Content>
        <Footer
          style={{
              textAlign: 'center',
            }}
            >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Sidebar;