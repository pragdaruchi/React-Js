import React, { useState } from "react";
import Nav from "./Nav";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Footer from "./Footer";



const movies = [
  {
    id: 1,
    title: "Jolly LLB 3",
    age: "UA16+",
    language: "Hindi",
    image: "src/img1.jpg",
  },
  {
    id: 2,
    title: "Mirai",
    age: "UA16+",
    language: "Hindi and 1 more",
    image: "src/img2.jpg",
  },
  {
    id: 3,
    title: "The Bengal Files",
    age: "A",
    language: "Hindi",
    image: "src/img3.jpg",
  },
  {
    id: 4,
    title: "Nishaanchi",
    age: "UA16+",
    language: "Hindi",
    image: "src/img4.jpg",
  },
];
const movies1 = [
  {
    id: 1,
    title: "Jolly LLB 3",
    age: "UA16+",
    language: "Hindi",
    image: "src/img1.jpg",
  },
  {
    id: 2,
    title: "Demon Slayer: Kimestu  no yaiba..",
    age: "UA13+",
    language: "Japanese and 2...",
    image: "src/img23.jpg",
  },
  {
    id: 3,
    title: "The Conjuring: Last Rites",
    age: "A",
    language: "English and 1 more",
    image: "src/img22.jpg",
  },
   {
    id: 4,
    title: "Mirai",
    age: "UA16+",
    language: "Hindi and 1 more",
    image: "src/img2.jpg",
  },
];
const places = [
  {
    id: 1,
    title: "Oodles Doodles - The Play Cafe",
    subtitle: "Ooodles Doodles - The Play Cafe, Faridabad",
    date: "Sun, 21 Sept - Thu, 25 Sept, 11:00 AM",
    price: "₹472 onwards",
    discount: "20% off up to ₹150",
    img: "src/img5.png",
  },
  {
    id: 2,
    title: "Sky Gamer | Faridabad",
    subtitle: "SKY GAMER, Faridabad",
    date: "Daily, 11:00 AM onwards",
    price: "₹500 onwards",
    discount: "20% off up to ₹150",
    img: "src/img6.jpg",
  },
  {
    id: 3,
    title: "Cheerbox - Kids Play Area & Gaming Zone",
    subtitle: "Cheerbox - Kids Play Area & Gaming Zone i...",
    date: "Daily, 11:00 AM onwards",
    price: "₹700 onwards",
    discount: "20% off up to ₹150",
    img: "src/img7.jpg",
  },
  {
    id: 4,
    title: "Jack N Joey | The Joystick Jungle Arcade Zone",
    subtitle: "JACK N JOEY, Delhi/NCR",
    date: "Daily, 12:00 PM onwards",
    price: "₹1000 onwards",
    discount: "20% off up to ₹300",
    img: "src/img8.jpg",
  },
  {
    id: 5,
    title: "NxGT Gaming Lounge",
    subtitle: "NxGT  Gaming Language , Delhi/NCR",
    date: "Daily, Multiple slots",
    price: "₹80 onwards",
    discount: "20% off up to ₹300",
    img: "src/img9.png",
  },
  {
    id: 6,
    title: "Arcade & Golf Simulator at Bzurkk!!",
    subtitle: "Bzurkk!! Gaming Arcade and Golf Simulator,...",
    date: "Daily, 11:00 AM onwards",
    price: "₹1500 onwards",
    discount: "20% off up to ₹300",
    img: "src/img10.png",
  },
  {
    id: 7,
    title: "Jack N Joey | The Joystick Jungle Arcade Zone",
    subtitle: "JACK N JOEY, Delhi/NCR",
    date: "Daily, 12:00 PM onwards",
    price: "₹1000 onwards",
    discount: "20% off up to ₹300",
    img: "src/img11.png",
  },
  {
    id: 8,
    title: "Galaxy Laser Tag | Omaxe World Street | Faridabad",
    subtitle: "Galaxy Laser Tag,Faridbad",
    date: "Daily, 12:00 PM onwards",
    price: "₹1000 onwards",
    discount: "20% off up to ₹300",
    img: "src/img12.png",
  },
]
const places1 = [
  {
    id: 1,
    title: "Dandiya Night | Float by Duty Free",
    subtitle: "Float by Duty Free , Noida",
    date: "Fri,26 Sep-Sun , 28 Sep, 7:30 PM",
    price: "₹249 onwards",
    img: "src/img24.jpg",
  },
  {
    id: 2,
    title: "Oodles Doodles - The Play Cafe",
    subtitle: "Ooodles Doodles - The Play Cafe, Faridabad",
    date: "Sun, 21 Sept - Thu, 25 Sept, 11:00 AM",
    price: "₹472 onwards",
    img: "https://media.insider.in/image/upload/c_crop,g_custom/v1758201425/xj9fsl2n7cgbm8nreg78.jpg",
  },
  {
    id: 3,
    title: "Cheerbox - Kids Play Area & Gaming Zone",
    subtitle: "Cheerbox - Kids Play Area & Gaming Zone i...",
    date: "Daily, 11:00 AM onwards",
    price: "₹700 onwards",
    discount: "20% off up to ₹150",
    img: "src/img26.jpg",
  },
  {
    id: 4,
    title: "Jack N Joey | The Joystick Jungle Arcade Zone",
    subtitle: "JACK N JOEY, Delhi/NCR",
    date: "Daily, 12:00 PM onwards",
    price: "₹1000 onwards",
    img: "src/img27.jpg",
  },
  {
    id: 5,
    title: "Jack N Joey | The Joystick Jungle Arcade Zone",
    subtitle: "JACK N JOEY, Delhi/NCR",
    date: "Daily, 12:00 PM onwards",
    price: "₹1000 onwards",
      img: "src/img28.png",
  },
  {
    id: 6,
    title: "Jack N Joey | The Joystick Jungle Arcade Zone",
    subtitle: "JACK N JOEY, Delhi/NCR",
    date: "Daily, 12:00 PM onwards",
    price: "₹1000 onwards",
    discount: "20% off up to ₹300",
    img: "src/img29.jpg",
  },
  {
    id: 7,
    title: "Jack N Joey | The Joystick Jungle Arcade Zone",
    subtitle: "JACK N JOEY, Delhi/NCR",
    date: "Daily, 12:00 PM onwards",
    price: "₹1000 onwards",
    img: "src/img30.jpg",
  },
  {
    id: 8,
    title: "Jack N Joey | The Joystick Jungle Arcade Zone",
    subtitle: "JACK N JOEY, Delhi/NCR",
    date: "Daily, 12:00 PM onwards",
    price: "₹1000 onwards",
    img: "src/img31.jpg",
  },
]

const movies2 = [
  {
    id: 1,
    title: "The Conjuring: Last Rites",
    age: "A",
    language: "English and 1 more",
    image: "https://cdn.district.in/movies-assets/images/cinema/The-Conjuring_Poster-86ebe5e0-7857-11f0-8de0-9d1c38983d05-8c5c0300-8727-11f0-8e2c-67968f98ef92.jpg",
  },
  {
    id: 2,
    title: "The Godfather",
    age: "A",
    language: "English  ",
     image: "src/img23.jpg",
  },
  {
    id: 3,
    title: "F1 The Movie",
    age: "UA16+",
    language: "English",
    image: "src/img2.jpg",
  },
  {
    id: 4,
    title: "The Roses",
    age: "A",
    language: "English",
    image: "src/img4.jpg",
  },
];

const places2 = [
  {
    id: 1,
    title: "Oodles Doodles - The Play Cafe",
    subtitle: "Ooodles Doodles - The Play Cafe, Faridabad",
    date: "Sun, 21 Sept - Thu, 25 Sept, 11:00 AM",
    price: "₹472 onwards",
    discount: "20% off up to ₹150",
    img: "src/img5.png",
  },
  {
    id: 2,
    title: "Sky Gamer | Faridabad",
    subtitle: "SKY GAMER, Faridabad",
    date: "Daily, 11:00 AM onwards",
    price: "₹500 onwards",
    discount: "20% off up to ₹150",
    img: "src/img6.jpg",
  },
  {
    id: 3,
    title: "Cheerbox - Kids Play Area & Gaming Zone",
    subtitle: "Cheerbox - Kids Play Area & Gaming Zone i...",
    date: "Daily, 11:00 AM onwards",
    price: "₹700 onwards",
    discount: "20% off up to ₹150",
    img: "src/img7.jpg",
  },
  {
    id: 4,
    title: "Jack N Joey | The Joystick Jungle Arcade Zone",
    subtitle: "JACK N JOEY, Delhi/NCR",
    date: "Daily, 12:00 PM onwards",
    price: "₹1000 onwards",
    discount: "20% off up to ₹300",
    img: "src/img8.jpg",
  },
  {
    id: 5,
    title: "NxGT Gaming Lounge",
    subtitle: "NxGT  Gaming Language , Delhi/NCR",
    date: "Daily, Multiple slots",
    price: "₹80 onwards",
    discount: "20% off up to ₹300",
    img: "src/img9.png",
  },
  {
    id: 6,
    title: "Arcade & Golf Simulator at Bzurkk!!",
    subtitle: "Bzurkk!! Gaming Arcade and Golf Simulator,...",
    date: "Daily, 11:00 AM onwards",
    price: "₹1500 onwards",
    discount: "20% off up to ₹300",
    img: "src/img10.png",
  },
  {
    id: 7,
    title: "Jack N Joey | The Joystick Jungle Arcade Zone",
    subtitle: "JACK N JOEY, Delhi/NCR",
    date: "Daily, 12:00 PM onwards",
    price: "₹1000 onwards",
    discount: "20% off up to ₹300",
    img: "src/img11.png",
  },
  {
    id: 8,
    title: "Galaxy Laser Tag | Omaxe World Street | Faridabad",
    subtitle: "Galaxy Laser Tag,Faridbad",
    date: "Daily, 12:00 PM onwards",
    price: "₹1000 onwards",
    discount: "20% off up to ₹300",
    img: "src/img12.png",
  },
]

const movies3 = [
  {
    id: 1,
    title: "Mahavatar Narsimha",
    age: "UA13+",
    language: "Hindi",
    image: "https://cdn.district.in/movies-assets/images/cinema/3_Mahavatar-Narsimha_Poster-dac9c310-6ac6-11f0-8b19-eb709a172fc8.jpg",
  },
  {
    id: 2,
    title: "The Bad Guys 2",
    age: "UA13+",
    language: "English",
    image: "https://cdn.district.in/movies-assets/images/cinema/Bad-d9e5e5c0-72a8-11f0-bf18-ef07befd2b97.jpg",
  },
  {
    id: 3,
    title: "How To Train Your Dragon",
    age: "UA7+",
    language: "English",
    image: "https://cdn.district.in/movies-assets/images/cinema/Howtotrain-your-dragon---IMAX-Poster-0b38ce10-a727-11ef-8f1f-a7114947674f.jpg ",
  },
   {
    id: 4,
    title: "Jurassic World Rebirth",
    age: "UA13+",
    language: "English",
    image: "https://cdn.district.in/movies-assets/images/cinema/jurassic_world_rebirth_ver3_xlg_Poster-9d1e2190-57da-11f0-b03a-f9f12779d145.jpg",
  },
];

const places3 = [
  {
    id: 1,
    title: "Oodles Doodles - The Play Cafe",
    subtitle: "Ooodles Doodles - The Play Cafe, Faridabad",
    date: "Sun, 21 Sept - Thu, 25 Sept, 11:00 AM",
    price: "₹472 onwards",
    img: "https://media.insider.in/image/upload/c_crop,g_custom/v1757326320/rpkdszlzjs0cth0vdq64.png",
  },
  {
    id: 2,
    title: "Sky Gamer | Faridabad",
    subtitle: "SKY GAMER, Faridabad",
    date: "Daily, 11:00 AM onwards",
    price: "₹500 onwards",
    img: "https://media.insider.in/image/upload/c_crop,g_custom/v1754655111/ivguxlz8aq4kor8ntdw8.jpg",
  },
  {
    id: 3,
    title: "Cheerbox - Kids Play Area & Gaming Zone",
    subtitle: "Cheerbox - Kids Play Area & Gaming Zone i...",
    date: "Daily, 11:00 AM onwards",
    price: "₹700 onwards",
    img: "https://media.insider.in/image/upload/c_crop,g_custom/v1757230102/kkbuwgw46ur0pehallkw.jpg",
  }]
function App() {

  const [dark, setDark] = useState(false)
  return (
    <div>
      <Nav dark={dark} setDark={setDark}/>
      <div className="bg-gradient-to-b from-[#f4f2ff] to-[#ffffff] px-10 py-10 space-y-10">
        <Card1 movies={movies} title="Top Hindi movies near you" />
        <Card2  places={places} title= "Discover the best of Music Events" />
        <Card1 movies={movies1} title="Hits from previous weeks" />
        <Card2  places={places1} title= "Discover the best of Music Events" />
        <Card1 movies={movies2} title="Hits from previous weeks" />
        <Card2  places={places2} title= "Discover the best of Music Events" />
        <Card1 movies={movies3} title="Hits from previous weeks" />
        <Card2  places={places3} title= "Sports Mania" />
      </div>
      <Footer />
    </div>
  );
}

//  <div className="flex justify-around">
//    {
//     arr.map((e,i) =>{
//       return <Card obj={e}/>;
//       })
//    }
//  </div>

export default App;
