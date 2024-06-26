import React, { useState } from "react";
import Slider from "react-slick";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { Button, Typography } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "plsconstruction.jpg",
  "plsconstruction1.jpg",
  "plsconstruction2.jpg",
  "plsconstruction3.jpg",
  "plsconstruction4.jpg",
  "plsconstruction5.jpg",
  "plsconstruction6.jpg",
];
const { Title, Paragraph } = Typography;
const Contentbar1 = () => {
  const [read, setRead] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setCurrentIndex(next),
  };
  function handleClick() {
    setRead(!read);
  }

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`transform scale-${
              index === currentIndex ? "105" : "100"
            } transition-transform duration-500 ease-in-out`}
          >
            <img
              src={image}
              alt={`Image ${index}`}
              className="w-full h-[400px]"
            />
          </div>
        ))}
      </Slider>
      <Typography
        variant="h5"
        className="font-serif italic text-2xl text-center font-semibold"
      >
        "We Are Not Only Constructing Your House, <br />
        But Your Dreams Too...."
      </Typography>
      <div className="w-full">
        <Paragraph className="text-yellow-700 text-2xl font-mono  tracking-wider font-semibold ml-2">
          ABOUT THE COMPANY
        </Paragraph>
        <div className="flex">
          <div className="">
            <Paragraph className="text-[17px] font-semibold font-sans ml-7 text--600">
              PLS Property Developers ventured with a goal of offering the best
              product in affordable price range. We the PLS Property Developers
              are committed to excellence in all that we do. We believe that on
              time delivery of highest quality projects will bring many more
              valuable customers. We create positive, memorable experiences and
              lasting relationships because our actions are guided by our
              values.
            </Paragraph>
            <Paragraph className="text-[17px] font-semibold font-sans ml-7 text--600">
              Our success lies on employees dedication to excellent work,
              customer service that exceeds expectation. It is the result of our
              dedication and hard work that we have become one of the best
              promoters in Trichy, Tamilnadu.
            </Paragraph>
            {read && (
              <div>
                <Typography className="ml-7 text-xl text-green-700 font-medium">
                  Vision
                </Typography>
                <Paragraph className="text-[17px] font-semibold font-sans ml-7 text--600">
                  To be the leading provider of quality construction in
                  Trichy,Tamilnadu.
                </Paragraph>

                <Typography className="ml-7 text-xl text-green-700 font-medium">
                  Mission
                </Typography>
                <Paragraph className="text-[17px] font-semibold font-sans ml-7 text--600">
                  To form long-term relationships of value with our customers by
                  using quality construction and employing the best resources.
                </Paragraph>

                <Typography className="ml-7  text-xl text-green-700 font-medium">
                  Quality Policy
                </Typography>
                <Paragraph className="text-[17px] font-semibold font-sans ml-7 text--600">
                  Total involvement of employees.
                  <br />
                  Meeting the customer requirement.
                  <br />
                  Continue to improve the quality system and achieve zero
                  tolerance.
                  <br />
                </Paragraph>
              </div>
            )}
            <Button
              icon={read ?<FaAngleDoubleLeft /> :  <FaAngleDoubleRight /> }
              onClick={handleClick}
              className="bg-blue-600 text-white ml-3"
            >
              {read ? "Readless" : "Readmore"}{" "}
            </Button>
          </div>
          <div className="">
            <img
              src="plsabout.jpg"
              className="w-[1200px] mt-[-60px] rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contentbar1;
