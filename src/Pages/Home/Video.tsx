export default function Video() {
  return (
    <div className="bg-black py-8 flex items-center justify-center">
      <div className="w-full md:w-3/5 flex flex-col items-center">
        <h2 className="text-white text-2xl font-bold mb-4">
          Cinematography Showreel 2024
        </h2>
        <div className="w-full aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full border-4 border-white rounded-lg"
            src="https://www.youtube.com/embed/FKLfUNrqGhU?autoplay=1&mute=1"
            title="Cinematography Showreel 2024"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
