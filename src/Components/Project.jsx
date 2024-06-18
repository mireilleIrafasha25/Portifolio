import { useState } from 'react';

const projects = [
  
  {
    title: 'Seekconnect Project',
    imageSrc: '/p2.png', 
    githubLink: 'https://seekconnect-front-end.onrender.com/',
    
  },
  {
    title: 'Movie App',
    imageSrc: '/p3.png', 
    githubLink: 'https://netflix-ubhc.onrender.com/',
    
  },
  {
    title: 'Country API App',
    imageSrc: '/p4.png', 
    githubLink: 'https://f-countries.onrender.com/',

  },
  {
    title: 'E-commerce App',
    imageSrc: '/ro.png', 
    githubLink: 'https://uwinezaflorence20.github.io/rock_paper_scissor_app/'
    ,
    
  },
 
  {
    title: 'Age calculator App',
    imageSrc: '/age.png', 
    githubLink: 'https://uwinezaflorence20.github.io/age_calculator/',

  },
  {
    title: 'Roll dice App',
    imageSrc: '/rolla.png', 
    githubLink: 'https://uwinezaflorence20.github.io/roll_dice_generator/',

  },
  {
    title: 'Emoji generator App',
    imageSrc: '/new.png', 
    githubLink: 'https://uwinezaflorence20.github.io/emoji_generator/',

  },
  {
    title: 'Food App',
    imageSrc: '/food.png', 
    githubLink: 'https://uwinezaflorence20.github.io/emoji_generator/',

  },
  // Add more projects here
];

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  

  const visibleProjects = projects.slice(currentIndex, currentIndex + 3);

  return (
    <div className="relative bg-gray-900 w-full p-28  pb-8 mx-auto">
        <div className=" text-4xl text-white pb-12 font-extrabold text-center">
            <p > My Projects</p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {visibleProjects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6">
            <img
              src={project.imageSrc}
              alt={`${project.title} screenshot`}
              className="rounded-t-lg w-full"
            />
            <h3 className="text-xl text-white mt-4">{project.title}</h3>
            <div className="flex justify-between mt-4">
              <a
                href={project.githubLink}
                className="text-green-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 flex justify-center w-full p-4">
        {Array.from({ length: Math.ceil(projects.length / 3) }).map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full mx-2 ${index === Math.floor(currentIndex / 3) ? 'bg-green-400' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index * 3)}
          ></button>
        ))}
      </div>
      
      
    </div>
  );
};

export default Project;
