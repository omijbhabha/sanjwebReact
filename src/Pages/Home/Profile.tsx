export default function Profile() {
  return (
    <div className="bg-black py-8 flex items-center justify-center">
      <div className="w-full md:w-3/5 flex flex-col items-center">
        <section className="text-white flex flex-col md:flex-row items-start my-4">
          <article className="flex flex-col w-full md:w-4/5 pr-4 md:p-0 mr-5">
            <h1 className="text-3xl font-bold">Sanjeet Singh</h1>
            <p className="text-lg mt-2">
              As a Director of Photography with over five years of diverse
              experience, I bring a unique perspective shaped by my roots in
              Kanpur and enriched by experiences across Europe and India. My
              career in the film industry has honed my ability to deliver
              high-quality visual content under demanding timelines.
            </p>
            <p className="text-lg mt-5">
              My portfolio includes notable contributions to advertisement
              campaigns for Puma India. I've had the privilege of collaborating
              on shorts and documentaries that have won at various film
              festivals, and have expanded my expertise across music videos.
            </p>
            <p className="text-lg mt-5">
              I'm eager to leverage my international experience and technical
              proficiency to create compelling visual narratives.
            </p>
          </article>
          <img
            src="https://via.placeholder.com/300"
            alt="Profile of Sanjeet Singh"
            className="w-2/3 md:w-1/3 h-auto mt-4 md:mt-0 mx-auto"
            loading="lazy"
          />
        </section>
      </div>
    </div>
  );
}
