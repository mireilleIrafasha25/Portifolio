import '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Homepage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col gap-40 md:flex-row items-center ">
        <div className="text-center md:text-left md:w-1/2">
          <p className="text-lg md:text-xl text-gray-400 mb-2">
            Software Developer
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Hello I'm</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-green-400">
            Florence Uwineza
          </h2>
          <p className="mt-4 text-gray-400">
            I am Front-End and UI/UX designer and
            <br />
            am proficient in various programming languages and technologies.
          </p>
          <button className="mt-6 bg-green-500 text-black py-2 px-6 rounded-full hover:bg-green-600">
            Download CV
          </button>
          <div className="flex space-x-8 mt-4 justify-center md:justify-start">
            <a href="https://github.com/uwinezaflorence20" className="text-green-400 text-xl">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/uwineza-florence-3b9463280/" className="text-green-400 text-xl">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.linkedin.com/in/uwineza-florence-3b9463280/" className="text-green-400 text-xl">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/_uwineza_/" className="text-green-400 text-xl">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.instagram.com/_uwineza_/" className="text-green-400 text-xl">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>
        <div className="relative mt-10 md:mt-0 md:ml-10">
  <div className="relative w-60 h-60 md:w-80 md:h-80">
    <img
      src="/f.jpg"
      alt="Florence Uwineza"
      className="absolute inset-0 w-full h-full rounded-full border-4 border-green-400"
      style={{ boxShadow: "0 0 0 4px rgba(79, 208, 154, 0.6), 0 0 0 4px rgba(79, 208, 154, 0.6)" }}
    />
  </div>
</div>

      </div>
      <div className="mt-12 flex space-x-12 gap-24">
  <div className="text-center flex gap-2">
    <div className="rounded-full bg-green-400 w-16 h-16 flex items-center justify-center mx-auto">
      <h3 className="text-white text-2xl font-bold">1</h3>
    </div>
    <p className="text-gray-400 text-sm mt-2">Years of <br /> experience</p>
  </div>
  <div className="text-center flex gap-2">
    <div className="rounded-full bg-green-400 w-16 h-16 flex items-center justify-center mx-auto">
      <h3 className="text-white text-2xl font-bold">5</h3>
    </div>
    <p className="text-gray-400 mt-2">Projects <br /> completed</p>
  </div>
  <div className="text-center flex gap-2">
    <div className="rounded-full bg-green-400 w-16 h-16 flex items-center justify-center mx-auto">
      <h3 className="text-white text-2xl font-bold">8</h3>
    </div>
    <p className="text-gray-400 mt-2">Technologies <br /> mastered</p>
  </div>
  <div className="text-center flex gap-2">
    <div className="rounded-full bg-green-400 w-16 h-16 flex items-center justify-center mx-auto">
      <h3 className="text-white text-3xl font-bold">500</h3>
    </div>
    <p className="text-gray-400 mt-2">Code <br /> commits</p>
  </div>
</div>

    </div>
  );
};

export default Homepage;
