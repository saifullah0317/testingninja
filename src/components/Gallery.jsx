import React, { useState, useEffect } from "react";
// ... (other imports)
import { Typography, Box, Stack } from "@mui/material";
// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// components
import Title from "./Title";
import Paragraph from "./Paragraph";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageData = [
    // ... (image data)
    {
      alt: "image1",
      url: "https://thumbs.dreamstime.com/b/recruitment-hiring-career-job-emplyment-concept-73027720.jpg",
    },
    {
      alt: "image2",
      url: "https://media.istockphoto.com/id/1398462038/photo/online-exam-or-test.webp?b=1&s=170667a&w=0&k=20&c=rPmfkbaVJ5zY_WcFe5TV9LfLGaamTIW6F-YGrC1jzmc=",
    },
    {
      alt: "image3",
      url: "https://media.istockphoto.com/id/1473928511/photo/considering-buying-a-home-investing-in-real-estate-broker-signs-a-sales-agreement-agent-lease.webp?b=1&s=170667a&w=0&k=20&c=ifaTZAhEa2KmKcbP91as9ZPa9sZl3IjYGjljTj88twc=",
    },
    {
      alt: "image4",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyNvSSGZU0oFi6y0TRm4sp0WeVnL8lBR0H0V74RoPj1g&s",
    },
    {
      alt: "image5",
      url: "https://img.freepik.com/premium-vector/test-icon-illustration_430232-32.jpg",
    },
  ];

  const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
      <img src={image.url} alt={image.alt} />
    </div>
  ));

  const handleChange = (index) => {
    setCurrentIndex(index);
  };

  // Automatically change the slide every 5 seconds (adjust the interval as needed)
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % imageData.length;
      setCurrentIndex(nextIndex);
    }, 1000); // Change image every 1 seconds

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, imageData]);

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 8,
        px: 2,
        display: { xs: "flex" },
      }}
    >
      <Box
        component="section"
        sx={{
          paddingBottom: 3,
        }}
      >
        <Title text={"Plans and Offerings"} textAlign={"center"} />
        <Typography
          variant="h5"
          component="h4"
          align="center"
          sx={{
            paddingTop: 1,
          }}
        >
          Testing Ninja
        </Typography>
        <Paragraph
          text={
            "We have more 5000 reviews and our\
                    customers trust on our quality product\
                    and trust own our product. If you interested,\
                    contact us."
          }
          maxWidth={"sm"}
          mx={"auto"}
          textAlign={"center"}
        />
      </Box>
      {/* ... (rest of the code) */}
      <Box
        sx={{
          maxWidth: 700,
          width: "100%",
        }}
      >
        <Carousel
          centerSlidePercentage={40}
          thumbWidth={180}
          dynamicHeight={false}
          centerMode={false}
          showArrows={false}
          autoPlay={true} // Set autoPlay to true
          infiniteLoop={true}
          selectedItem={imageData[currentIndex]}
          onChange={handleChange}
          className="carousel-container"
        >
          {renderSlides}
        </Carousel>
      </Box>
    </Stack>
  );
};

export default Gallery;
