import React, { useEffect, useState } from 'react';
import { db, addDoc, collection, storage, ref, uploadBytes, getDownloadURL , query , getDocs } from './config/firebase'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const Cards = () => {
  const [val,setval]=useState([])
  
  useEffect(()=>{
    async function fechData () {
      const q = query(collection(db, "item"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        getDownloadURL(ref(storage, doc.id))
        .then(async(url) => {
          console.log(url);
          const reru = {
            id : doc.id,
            data : doc.data(),
            url : url
          }
          setval(reru)
          console.log(reru);
        })
        .catch((error) => {
          console.log(error);
      })
    });
  }
  fechData();
},[])


console.log(val);

 
    
  return (
    <>
      <Card
        style={{
          width: 300,
          marginTop: 20,
        }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    </>
  )
};
export default Cards;