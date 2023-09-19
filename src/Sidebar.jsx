import React, { useState } from 'react';
import Cards from './Cards';
import  './sidebar.css'
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
  const num=' > 100'
  const num2=' > 200'
  const num3=' > 300'
  const num4= ' > 400'


const [title,setTitle] = useState("")
const [Price,setPrice] = useState("")
const [img,setImg] = useState("")
const [Category,setCategory] = useState("")
const [Discription,setDiscription] = useState("")
const [Radio,setRadio] = useState("")
const [Search,setSearch] = useState("")



async function add(){

  console.log(Radio);
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
      <Sider collapsible style={{backgroundColor:'white'}} collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <div className='main'>
        <h5  className='firstH'>Filter</h5>
        <input onChange={(e)=>setSearch(e.target.value)} className='input1'  type="text" placeholder='Input seacrh text' id="Sort"/>
        <h6 className='secondH' >Price</h6>
        <div className='same'><input name='Rbtn' value={100} onChange={(e)=>setRadio(e.target.value)} type="radio"/><h6 className='sameH'>{num}</h6></div>
        <div className='same'><input name='Rbtn' value={200} onChange={(e)=>setRadio(e.target.value)} type="radio"/><h6 className='sameH'>{num2}</h6></div>
        <div className='same'><input name='Rbtn' value={300} onChange={(e)=>setRadio(e.target.value)} type="radio"/><h6 className='sameH'>{num3}</h6></div>
        <div className='same'><input name='Rbtn' value={400} onChange={(e)=>setRadio(e.target.value)} type="radio"/><h6 className='sameH'>{num4}</h6></div>
        <h6 className='thirdH'>Sort By</h6>
        <div className='same'><input name='Rbtn' value={'High'} onChange={(e)=>setRadio(e.target.value)} type="radio"/><h6 className='high'>H to L</h6>
        <div className='second'>< input name='Rbtn' value={'Low'} onChange={(e)=>setRadio(e.target.value)} type="radio"/><h6 className='high'>L to H</h6></div>
        </div>
        <h6 className='fourthH'>Sort By Categories</h6>
        <div className='same'><input name='Rbtn' value={'Mobile'} onChange={(e)=>setRadio(e.target.value)} type="radio"/><h6 className='sameinput'>Mobile</h6></div>
        <div className='same'><input name='Rbtn' value={'Laptop'} onChange={(e)=>setRadio(e.target.value)}  type="radio"/><h6 className='sameinput'>Laptop</h6></div>
        <div className='same'><input name='Rbtn' value={'Card'}   onChange={(e)=>setRadio(e.target.value)} type="radio"/><h6 className='sameinput'>Cards</h6></div>
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
                <input className='sameinput2' type='text'onChange={(e) => setTitle(e.target.value)} placeholder='title' id='title' />
                <input className='sameinput2' type='file' onChange={(e) => setImg(e.target.files[0])}  id='img'/>
                <input className='sameinput2' type='number' onChange={(e) => setPrice(e.target.value)} placeholder='price' id='Price' />
                </div>
                <div className='newDiv'>
                <input  className='match' type='text'  onChange={(e) => setCategory(e.target.value)} placeholder='Category' id='Category' />
                <input className='match' type='text'onChange={(e) => setDiscription(e.target.value)} placeholder='discription' id='discription' />
                <button className='btn' onClick={add} id='btn'>Add / Edit Service</button>
                </div>
            </div>


 
        <div style={{display:'inline-flex', flexDirection:'row', flexWrap : 'wrap', justifyContent:'space-around'}}>
       <Cards radioValue={Radio} SearchValue={Search} />
      {/* //  title={setTitle} Price={setPrice} img={setImg} Category={setCategory} Discription={setDiscription}  */}
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





















// import React, { useState } from 'react';
// import Cards from './Cards'
// import './sidebar.css'
// // import { db,addDoc,collection } from "./config/firebase";

// import {
//   DesktopOutlined,
//   FileOutlined,
//   PieChartOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from '@ant-design/icons';
// import { Breadcrumb, Layout, Menu, theme } from 'antd';
// import { Radio } from 'react-bootstrap';


// const { Header, Content, Footer, Sider } = Layout;
// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }

// const items = [
  
//   getItem('User', 'sub1', <UserOutlined />, [
//     getItem('Tom', '3'),
//     getItem('Bill', '4'),
//     getItem('Alex', '5'),
//   ]),
//   getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//   getItem('Files', '9', <FileOutlined />),
// ];
// const Sidebar = async() => {


//   const num=' > 100'
//   const num2=' > 200'
//   const num3=' > 300'
//   const num4= ' > 400'

//   const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();
//   return (
//     <Layout
//       style={{
//         minHeight: '100vh',
//       }}
      
//     >
//       <Sider  className='side' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        
//         <div className="demo-logo-vertical" />
//         <div className='main'>
//         <h5  className='firstH'>Filter</h5>
//         <input className='input1' type="text" placeholder='Input seacrh text' id="Sort"/>
//         <h6 className='secondH' >Price</h6>
//         <div className='same'><input type="radio"/><h6 className='sameH'>{num}</h6></div>
//         <div className='same'><input type="radio"/><h6 className='sameH'>{num2}</h6></div>
//         <div className='same'><input type="radio"/><h6 className='sameH'>{num3}</h6></div>
//         <div className='same'><input type="radio"/><h6 className='sameH'>{num4}</h6></div>
//         <h6 className='thirdH'>Sort By</h6>
//         <div className='same'><input type="radio"/><h6 className='high'>H to L</h6>
//         <div className='second'>< input type="radio"/><h6 className='high'>L to H</h6></div>
//         </div>
//         <h6 className='fourthH'>Sort By Categories</h6>
//         <div className='same'><input type="radio"/><h6 className='sameinput'>Mobile</h6></div>
//         <div className='same'><input type="radio"/><h6 className='sameinput'>Laptop</h6></div>
//         <div className='same'><input type="radio"/><h6 className='sameinput'>Cards</h6></div>
//         </div>
//       </Sider>
//       <Layout>
//         <Header
//           style={{
//               padding: 0,
//               background: colorBgContainer,
//             }}
//         />
//         <Content
//           style={{
//               margin: '0 16px',
//             }}
//             >
//           <Breadcrumb
//             style={{
//                 margin: '16px 0',
//             }}
//             >
            
//           </Breadcrumb>
//           <div
//             style={{
//                 padding: 24,
//                 minHeight: 360,
//               background: colorBgContainer,
//             }}
//             >
//             <div className='secondMain'>
//               <div className='secondlite'>
//                 <input className='sameinput2' type='text' placeholder='Service Title' id='title' />
//                 <input className='sameinput2' type='file' id='img' />
//                 <input className='sameinput2' type='number' placeholder='Price' id='price' />
//                 </div>
//                 <div className='newDiv'>
//                 <input  className='match' type='text' placeholder='Category' id='Category' />
//                 <input className='match' type='text' placeholder='Discription' id='Discription' />
//                 <button className='btn' type='number' placeholder='Price' id='btn'>Add / Edit Service</button>
//                 </div>
//             </div>
//           <div className='Cards'>
//         <Cards/>
//         <Cards/>
//         <Cards/>
//         <Cards/>
//         </div>
//           </div>
//         </Content>
//         <Footer
//           style={{
//               textAlign: 'center',
//             }}
//             >
//           Ant Design ©2023 Created by Ant UED
//         </Footer>
//       </Layout>
//     </Layout>
//   );
// };
// export default Sidebar;