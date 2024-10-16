import timelineData from "../data/timelineData";
import educationData from "../data/educationData";

export default function Home() {
  return (
    <div className="bg-black py-12 flex flex-col items-center justify-center space-y-12">
      <div className="w-full md:w-3/5 flex flex-col items-center mb-8 px-4">
      <h2 className="text-white text-3xl font-bold mb-6 text-center">
        Cinematography Showreel 2024
      </h2>
      <div
        className="relative w-full overflow-hidden rounded-lg shadow-lg"
        style={{ paddingTop: "56.25%" }}
      >
        <iframe
        className="absolute top-0 left-0 w-full h-full border-4 border-white rounded-lg"
        src="https://www.youtube.com/embed/FKLfUNrqGhU?autoplay=1&mute=1"
        title="Cinematography Showreel 2024"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        ></iframe>
      </div>
      </div>

      <div className="w-full md:w-3/5 flex flex-col items-center px-4">
      <section className="text-white flex flex-col md:flex-row items-start my-8">
        <article className="flex flex-col w-full md:w-4/5 pr-4 mb-6 md:mb-0">
        <h1 className="text-4xl font-bold mb-4 text-custom-color">
          Sanjeet Singh
        </h1>
        <p className="text-lg mb-4 leading-relaxed">
          As a Director of Photography with over five years of diverse
          experience, I bring a unique perspective shaped by my roots in
          Kanpur and enriched by experiences across Europe and India. My
          career in the film industry has honed my ability to deliver
          high-quality visual content under demanding timelines.
        </p>
        <p className="text-lg mb-4 leading-relaxed">
          My portfolio includes notable contributions to advertisement
          campaigns for Puma India. I've had the privilege of collaborating
          on shorts and documentaries that have won at various film
          festivals, and have expanded my expertise across music videos.
        </p>
        <p className="text-lg leading-relaxed">
          I'm eager to leverage my international experience and technical
          proficiency to create compelling visual narratives.
        </p>
        </article>
        <img
        src="src/assets/pfp.jpg"
        alt="Profile of Sanjeet Singh"
        className="w-2/3 md:w-1/3 h-auto mt-4 md:mt-0 mx-auto shadow-lg"
        loading="lazy"
        />
      </section>
      </div>

      <div className="w-full md:w-3/5 text-white px-4">
      <h2 className="text-4xl font-bold mb-8 text-center text-custom-color">
        Education
      </h2>
      <div className="timeline relative">
        {educationData.map((item, index) => (
        <div
          key={index}
          className="timeline-item flex flex-col md:flex-row items-start md:items-center relative mb-8"
        >
          <div className="timeline-date text-2xl font-bold w-full md:w-1/4 mb-4 md:mb-0 text-left relative flex items-center justify-start flex-shrink-0">
          {item.date}
          </div>

          <div className="w-px md:h-16 h-px bg-gray-400 mx-4 hidden md:block flex-shrink-0"></div>

          <div className="timeline-content flex-grow p-4 relative">
          <h3 className="text-2xl font-semibold mb-2 text-custom-color">
            {'link' in item && item.link ? (
            <a
              href={typeof item.link === 'string' ? item.link : ''}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors duration-200"
            >
              {item.title}
            </a>
            ) : (
            item.title
            )}
          </h3>
          <p className="text-lg">{item.role}</p>
          </div>

          <div className="w-full h-px bg-gray-400 my-4 md:hidden"></div>
        </div>
        ))}
      </div>
      </div>

      <div className="w-full md:w-3/5 text-white px-4">
      <h2 className="text-4xl font-bold mb-8 text-center text-custom-color">
        Work Experience/Filmography
      </h2>
      <div className="timeline relative">
        {timelineData.map((item, index) => (
        <div
          key={index}
          className="timeline-item flex flex-col md:flex-row items-start md:items-center relative mb-8"
        >
          <div className="timeline-date text-2xl font-bold w-full md:w-1/4 mb-4 md:mb-0 text-left relative flex items-center justify-start flex-shrink-0">
          {item.date}
          </div>

          <div className="w-px md:h-16 h-px bg-gray-400 mx-4 hidden md:block flex-shrink-0"></div>

          <div className="timeline-content flex-grow p-4 relative">
          <h3 className="text-2xl font-semibold mb-2 text-custom-color">
            {item.link ? (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors duration-200"
            >
              {item.title}
            </a>
            ) : (
            item.title
            )}
          </h3>
          <p className="text-lg">{item.role}</p>
          </div>

          <div className="w-full h-px bg-gray-400 my-4 md:hidden"></div>
        </div>
        ))}
      </div>
      </div>
    </div>
  );
}
