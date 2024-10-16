import React, { Suspense } from 'react';
import workData from '../data/workData';

const Work = () => {
  return (
    <div className="bg-black py-12 flex flex-col items-center justify-center space-y-12">
      {workData.map((work, index) => (
        <div key={index} className="w-full md:w-3/5 flex flex-col items-center mb-12 px-4">
          <h2 className="text-white text-3xl font-bold mb-6 text-center">{work.title}</h2>
          {work.videoSrc && (
            <div className="relative w-full overflow-hidden rounded-lg shadow-lg" style={{ paddingTop: "56.25%" }}>
              <Suspense fallback={<div className="loader">Loading video...</div>}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full border-4 border-white rounded-lg"
                  src={work.videoSrc}
                  title={work.title}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </Suspense>
            </div>
          )}
            {work.images && (
            <div className="flex flex-col items-center mb-4">
                <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-2">
                {work.images.slice(0, 2).map((imageSrc, imgIndex) => (
                    <img
                    key={imgIndex}
                    src={imageSrc}
                    alt={`Image ${imgIndex + 1}`}
                    loading="lazy"
                    className="max-w-md h-auto rounded-lg shadow-md"
                    />
                ))}
                </div>
                <div className="flex justify-center">
                {work.images.length > 2 && (
                    <img
                    src={work.images[2]}
                    alt={`Image 3`}
                    loading="lazy"
                    className="max-w-md h-auto rounded-lg shadow-md"
                    />
                )}
                </div>
            </div>
            )}
          <h1 className="text-custom-color text-3xl text-left w-full m-4">Synopsis</h1>
          <p className="text-white text-2xl text-left w-full mb-4">{work.synopsis}</p>
          {work.awards && (
            <div className="awards mb-4 flex flex-wrap justify-center">
              {work.awards.map((award, awardIndex) => (
                <img key={awardIndex} src={award.src} alt={award.alt} width="150" loading="lazy" className="mx-2" />
              ))}
            </div>
          )}
          {work.links && (
            <div className="additional-links mb-4 flex flex-wrap justify-center">
              {work.links.map((link, linkIndex) => (
                <a key={linkIndex} href={link.href} target="_blank" rel="noopener noreferrer" className="mx-2">
                  <img src={link.iconSrc} alt={link.alt} width="50" height="50" loading="lazy" />
                </a>
              ))}
            </div>
          )}
          <hr
            className="border-0 w-full my-12"
            style={{
              height: "1px",
              background: "linear-gradient(to right, #d85668, #ffffff, #d85668)",
              margin: "2rem auto 3rem",
              boxShadow: "0 2px 10px rgba(255, 205, 0, 0.5)"
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Work;
