import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <section className="lg:max-w-screen-xl h-screen mx-auto pt-20 px-3 md:px-4 lg:px-8 flex flex-col items-center lg:flex-row lg:justify-between">
        <div className="w-full md:w-1/2 md:max-w-lg flex flex-col justify-center items-start space-y-3">
          <div className="flex mx-auto lg:mx-0">
            <h1 className="text-5xl lg:text-7xl font-extralight">
              HEROES WEAR
              <br />
              <span className="text-8xl lg:text-9xl font-bold text-gray-600">
                MASKS.
              </span>
            </h1>
          </div>
          {/* <div className="flex mx-auto items-center justify-center relative">
            <h2 className="text-3xl">
              CORONA&nbsp;
              <span className="line-through decoration-gray-600">VIRUS</span>
            </h2>
            <img
              className="absolute w-full -z-10"
              src={require("../assets/images/map.png")}
              alt="map"
            />
          </div> */}
          <div className="flex flex-col items-center md:items-start space-y-2">
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
        <div className="w-full md:w-1/2 flex justify-center items-end relative">
          {/* <div className="absolute w-full h-full flex justify-center items-center -z-10">
            <div className="flex mx-auto items-center justify-center relative h-60 w-full">
              <h2 className="text-3xl z-10">
                CORONA&nbsp;
                <span className="line-through decoration-gray-600">VIRUS</span>
              </h2>
              <img
                className="w-10/12 h-40 absolute z-0"
                src={require("../assets/images/map.png")}
                alt="map"
              />
            </div>
          </div> */}
          <img
            className="md:w-[400px] z-20"
            src={require("../assets/images/pngwing.com.png")}
            alt="banner"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
