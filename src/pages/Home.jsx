import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <section className="lg:max-w-screen-xl h-screen mx-auto pt-20 px-3 md:px-4 lg:px-8 flex flex-col items-center lg:flex-row space-y-7">
        <div className="w-full lg:w-1/2 lg:max-w-lg flex flex-col justify-center items-start space-y-14">
          <h1 className="text-5xl lg:text-7xl font-extralight">
            HEROES WEAR
            <br />
            <span className="text-8xl lg:text-9xl font-bold text-gray-600">
              MASKS.
            </span>
          </h1>
          <div className="flex mx-auto items-center justify-center relative">
            <h2 className="text-3xl">
              CORONA&nbsp;
              <span className="line-through decoration-gray-600">VIRUS</span>
            </h2>
            <img
              className="absolute w-full -z-10"
              src={require("../assets/images/map.png")}
              alt="map"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start space-y-2">
            <p className="font-semibold text-gray-600 border-b-2 border-gray-600 w-fit">
              <span className="text-black">STOP</span> COVID-19!
            </p>
            <p className="font-normal text-xs leading-tight">
              Coronavirus infection COVID-19 (abbreviation for the English
              COrona Virus Disease 2019), previously corona virus infection
              2019-nCoV is a potentially severe acute respiratory infection
              caused by SARS-CoV-2 coronavirus. it;s a dangerous disease that
              can occur both in the form of acute respiratory viral infection of
              a mild course, and in severe form, specific complications of which
              can include viral pneumonia, which entails acute respiratory
              distress syndrome or respiratory failure with the risk of death.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-end">
          <img
            className="lg:w-[400px]"
            src={require("../assets/images/pngwing.com.png")}
            alt="banner"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
