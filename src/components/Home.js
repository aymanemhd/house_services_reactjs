import  Navigation  from "./Navigation";
import Header from "./header";
import  Features  from "./features";
import  About  from "./about";
import  Gallery  from "./gallery";
import  Testimonials  from "./testimonials";
import  Team  from "./Team";
import  {Contact}  from "./contact";
import JsonData from "../data/data.json";


function Home() {
  return (
    <div>
      <Navigation />
      <Header data={JsonData.Features} />
      <Features data={JsonData.Features} />
      <About data={JsonData.About} />
      <Gallery data={JsonData.Gallery}/>
      <Testimonials data={JsonData.Testimonials} />
      <Team data={JsonData.Team} />
      <Contact data={JsonData.Contact} />
    </div>
  );
}

export default Home;
