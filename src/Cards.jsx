import React, { useEffect, useState } from 'react';
import { db, collection, storage, ref, uploadBytes, getDownloadURL , query , getDocs } from './config/firebase';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

const Cards = (props) => {

  console.log(props.radioValue);
 console.log(props.SearchValue);
  
  const [val, setVal] = useState([]);
 

  useEffect(() => {
    async function fetchData() {
      const q = query(collection(db, "item"));
      const querySnapshot = await getDocs(q);

      const cardDataPromises = querySnapshot.docs.map(async (doc) => {
        const url = await getDownloadURL(ref(storage, doc.id));
        return {
          id: doc.id,
          data: doc.data(),
          url: url,
        };
      });

      const cardData = await Promise.all(cardDataPromises);
      setVal(cardData);
    }

    fetchData();
  }, []);

 
  const filter = val.filter((item) => {
    return item.data.Price === props.radioValue
  })

  const filterMobileLaptop = val.filter((item) => {
    return item.data.Title == props.radioValue 
  })


  
if (props.radioValue =='' || props.radioValue == 'Card') {

  return (
    <div style={{display:'inline-flex', justifyContent:'space-between', flexWrap:'wrap',}}>
      {val.map((item) => (
        <Card
          key={item.id}
          style={{
            width: 300,
            marginTop: 20,
          }}
          cover={<img alt="example" src={item.url} />
        }
        actions={[
          <>
          <div style={{display:'flex', justifyContent:'space-around'}}>
          <h1><img style={{width:18}} src='https://gw.alipayobjects.com/zos/rmsportal/BiraoJgbXokyzmUFqVuf.png'/></h1>
          <EditOutlined key="edit" />
          </div>
          {/* // <EllipsisOutlined key="ellipsis" />, */}
          </>
        ]}
        >
          <Meta
            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
            title={item.data.Title}
            description={`${item.data.Discription}  Price :  ${item.data.Price}`}
          />
        </Card>
      ))}
    </div>
  );
}

else if (filter!=""){

  return (
    <div style={{display:'inline-flex', justifyContent:'space-around', flexWrap:'wrap',}}>
      {
      filter.map((item) => (
        <Card
          key={item.id}
          style={{
            width: 300,
            marginTop: 20,
          }}
          cover={<img alt="example" src={item.url} />}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
            title={item.data.Title}
            description={`${item.data.Discription}  Price :  ${item.data.Price}`}
          />
        </Card>
      ))}
    </div>
  );

}


else if (filterMobileLaptop!= ''){

  return (
    <div style={{display:'inline-flex', justifyContent:'space-around', flexWrap:'wrap',}}>
      {
      filterMobileLaptop.map((item) => (
        <Card
          key={item.id}
          style={{
            width: 300,
            marginTop: 20,
          }}
          cover={<img alt="example" src={item.url} />}
         
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
            title={item.data.Title}
            description={`${item.data.Discription}  Price :  ${item.data.Price}`}
          />
        </Card>
      ))}
    </div>
  );


}


else{
  return (
    <div style={{display:'flex', justifyContent:'center', fontSize:18, color:'gray', textAlign:'center'}}>
      <div style={{marginLeft:76, marginTop:70}}><h1 style={{fontSize:33,fontWeight:'bold'}}>Not yet Card in this Rupess...😕</h1></div>
    </div>
  );
}
}
 


export default Cards;








/////////////  old code  //////////////////////////////////////////

// import React from 'react';
// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
// import { Avatar, Card } from 'antd';
// const { Meta } = Card;
// const Cards = () => (
//   <Card
//     style={{
//       width: 300,
//       marginTop : 20,
//     }}
//     cover={
//       <img
//         alt="example"
//         src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
//       />
//     }
//     actions={[
//       <SettingOutlined key="setting" />,
//       <EditOutlined key="edit" />,
//       <EllipsisOutlined key="ellipsis" />,
//     ]}
//   >
//     <Meta
//       avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
//       title="Card title"
//       description="This is the description"
//     />
//   </Card>
// );
// export default Cards;