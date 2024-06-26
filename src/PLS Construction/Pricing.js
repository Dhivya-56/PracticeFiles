

import { Card, Select, Typography, Button,Input ,Modal} from 'antd';
import { useState } from 'react';
import {Form} from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const Pricing = () => {
  const [selectedHouseType, setSelectedHouseType] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const[modalOpen,setModalOpen]=useState(false)
  const { Paragraph, Title } = Typography;

  const HouseTypes = [
    { value: 'Apartments', label: 'Apartments' },
    { value: '2BHK', label: '2BHK' },
    { value: '3BHK', label: '3BHK' },
    { value: 'Glass Made House', label: 'Glass Made House' },
    { value: 'Wood House', label: 'Wood House' },
  ];

  const PriceList = [
    { value: '30 lakhs', label: '30 lakhs' },
    { value: '70 lakhs', label: '70 lakhs' },
    { value: '60 lakhs', label: '60 lakhs' },
    { value: '10 lakhs', label: '10 lakhs' },
    { value: '1 crore', label: '1 crore' },
  ];

  const CardData = [
    { image: 'pls2Bhk.jpeg', cost: '30 lakhs', type: '2BHK' },
    { image: 'plsApartment1.jpeg', cost: '1 crore', type: 'Apartments' },
    { image: 'pls3bhk2.jpeg', cost: '1 crore', type: '3BHK' },
    { image: 'plsglasshouse2.jpeg', cost: '70 lakhs', type: 'Glass Made House' },
    { image: 'plsApartment2.jpeg', cost: '1 crore', type: 'Apartments' },
    { image: 'pls3bhk.jpeg', cost: '1 crore', type: '3BHK' },
    { image: 'plswoodhouse2.jpeg', cost: '90 lakhs', type: 'Wood House' },
    { image: 'plsApartment3.jpeg', cost: '60 lakhs', type: 'Apartments' },
    { image: 'pls2bhk4.jpeg', cost: '30 lakhs', type: '2BHK' },
    { image: 'plsApartment4.jpeg', cost: '1 crore', type: 'Apartments' },
    { image: 'pls2bhk2.jpeg', cost: '30 lakhs', type: '2BHK' },
    { image: 'plsglasshouse1.jpeg', cost: '70 lakhs', type: 'Glass Made House' },
    { image: 'plswoodhouse1.jpeg', cost: '90 lakhs', type: 'Wood House' },
  ];

  function handleHouseTypeChange(value) {
    setSelectedHouseType(value);
  }

  function handlePriceChange(value) {
    setSelectedPrice(value);
  }
  function handleBookNow(){
setModalOpen(true)
  }
  

  const filteredCards = CardData.filter((card) => {
    if (selectedHouseType && selectedPrice) {
      return card.type === selectedHouseType && card.cost === selectedPrice;
    } else if (selectedHouseType) {
      return card.type === selectedHouseType;
    } else if (selectedPrice) {
      return card.cost === selectedPrice;
    } else {
      return true;
    }
  });
  const handleOk = () => {
   setModalOpen(false)
  };
  const handleCancel = () => {
   setModalOpen(false)
  };
console.log(filteredCards,"filteredCards")
  return (
    <div className='flex flex-col items-center justify-center gap-10'>
      <div className='flex gap-10  justify-center items-center mt-3'>
        <div>
          <Typography className='text-xl font-medium'>House Varieties</Typography>
          <Select
            className='w-[200px]'
            placeholder="Select Your House Type"
            options={HouseTypes}
            onChange={handleHouseTypeChange}
          />
        </div>
        <div>
          <Typography className='text-xl font-medium'>Approx. Prices List</Typography>
          <Select
            className='w-[200px]'
            placeholder="Select your Budget"
            options={PriceList}
            onChange={handlePriceChange}
          />
        </div>
      </div>
      {filteredCards.length ?(
      <div className='grid grid-flow-row gap-4 grid-cols-4 items-center justify-center ml-[30px] mt-[20px]'>
        {filteredCards.map((item, index) => (
          <Card
            key={index}
            hoverable
            className='w-[240px]'
            cover={<img alt="example" src={item.image} />}
          >
            <Typography className='text-md font-bold bg-lime-400 p-2 rounded'>Approx. Cost: {item.cost}</Typography>

            <Button className='bg-blue-500 ml-10 mt-10 text-white' onClick={()=>handleBookNow(item.type,item.cost,index)}>Book Now</Button>
            <Modal title="Basic Modal" open={modalOpen} onOk={handleOk} onCancel={handleCancel}>
      <div className='border-solid border-2'>
        <Typography>Details Form</Typography>
        <Form.Item>
<Input/>
  </Form.Item>     
   </div>
      </Modal>
          </Card>
        ))}
      </div>
      ):<div className='flex  gap-10 items-center justify-center '>
        <img src="plsreachout.png" className='w-full'/>
        <Typography className=' bg-[#ede240] rounded p-3 w-full font-bold text-xl text-[#d61e83]'>connect us : <Link>alagu_projects@gmail.com</Link></Typography></div>}
    </div>
  );
}

export default Pricing;
