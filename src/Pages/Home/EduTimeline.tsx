const EduTimeline = () => {
  const educationEvents = [
    {
      date: "Oct 2021 - Nov 2022",
      title: "MetFilm School, Berlin",
      description: "Masters of Arts in Cinematography",
    },
    {
      date: "Aug 2014 - June 2019",
      title: "Manipal Institute of Technology",
      description:
        "Bachelor of Technology in Print and Media Technology, Specializing in Media Tech.",
    },
  ];

  return (
    <section className="bg-black py-8 flex items-center justify-center">
      <div className="w-full md:w-3/5 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white text-center mb-6">
          Education
        </h1>

        {educationEvents.map((event, index) => (
          <article
            key={index}
            className="flex flex-col md:flex-row items-start mb-6 text-white"
          >
            <div className="md:w-1/4 pr-4 text-left">
              <h2 className="text-lg font-medium">{event.date}</h2>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-base">{event.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default EduTimeline;
