import React, { useState } from 'react';
import Cards from './Cards'
import {db,addDoc,collection,storage,ref,uploadBytes} from './config/firebase'

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
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
const Sidebar = () => {

const [title,setTitle] = useState("")
const [Price,setPrice] = useState("")
const [img,setImg] = useState("")
const [Category,setCategory] = useState("")
const [Discription,setDiscription] = useState("")


async function add(){
  console.log(title);

  try {
    const docRef = await addDoc(collection(db, "item"), {
      Title: title,
      Price: Price,
      Category:Category,
      Discription:Discription

    });
    console.log("Document written with ID: ", docRef.id);
    const getId=docRef.id;
    console.log(getId);
    const storageRef = ref(storage,getId);
  
   uploadBytes(storageRef,img ).then((snapshot) => {
   console.log('Uploaded a blob or file!');
});
    
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  
}



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
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <div>
        <h5 style={{color:'green', textAlign:'center', marginTop:30}}>Filter</h5>
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
 <div>
  <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder='title' id='title' />
  <input type="text" onChange={(e) => setPrice(e.target.value)} placeholder='price' id='Price' />
  <input type="file" onChange={(e) => setImg(e.target.files[0])}  id='img' />
  <input type="text" onChange={(e) => setCategory(e.target.value)} placeholder='Category' id='Category' />
  <input type="text" onChange={(e) => setDiscription(e.target.value)} placeholder='discription' id='discription' />
  <button id='btn' onClick={add}>Add</button>
  </div>
          <div style={{display:'flex', justifyContent:'space-around' , flexWrap : 'wrap'}}>
  
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