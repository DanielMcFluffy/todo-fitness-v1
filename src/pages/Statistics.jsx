
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

export default function Statistics() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);


  };
  return (
    <Container style={{ width: '50%' }} >
      <div style={{
        display: 'block',
        width: 700, padding: 30
      }}>
        <h2 style={{ color: 'white' }}>
          Workout Statistics and News
        </h2>
        <h2 style={{ color: 'grey' }} >Interesting Gym Statistics 2023</h2>
        <Carousel activeIndex={index}
          onSelect={handleSelect}>
          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src=
              "https://origympersonaltrainercourses.co.uk/files/img_cache/2111/450_450__1554909083_gymmeme11.jpg"
              alt="gym guy" />

          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src=
              "https://scontent.fmkz1-2.fna.fbcdn.net/v/t39.30808-6/337358497_920326719113659_1316711486381489492_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=PL4OhXDNtJgAX9lKMcZ&_nc_pt=1&_nc_ht=scontent.fmkz1-2.fna&oh=00_AfAdTh7Ckx3BSDa5nep_1DsLHwVlBzhIrXgESN_cZoR3NQ&oe=65E573FF"
              alt="dog food" />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src=
              "https://origympersonaltrainercourses.co.uk/files/img_cache/2114/450_450__1554909083_gymmeme14.jpg"
              alt="lmao" />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src=
              "https://scontent.fmkz1-2.fna.fbcdn.net/v/t1.6435-9/49785950_2550102575026966_6611081826876260352_n.jpg?stp=dst-jpg_p843x403&_nc_cat=105&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=qL300ZwnGy0AX8ncywz&_nc_pt=1&_nc_ht=scontent.fmkz1-2.fna&oh=00_AfAxVymzEpfkesZcCPwaO_CN5lTfko3uHldJATWdRtl5rQ&oe=66082969"
              alt="bruh" />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src=
              "https://www.bodybuildingmealplan.com/wp-content/uploads/Rest-Muscle-Meme.jpg " />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src=
              "https://scontent.fmkz1-2.fna.fbcdn.net/v/t39.30808-6/299827071_5592875210735507_1466569609858828582_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=c83dfd&_nc_ohc=V69wMFxSmdwAX8jM1l3&_nc_pt=1&_nc_ht=scontent.fmkz1-2.fna&oh=00_AfDlBUw94Z7F9pxZevDVDCj50EX84FsHC-Cln4vDP7mnLw&oe=65E5FF1B " />
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
}



