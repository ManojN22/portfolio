import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { experiences, education } from './about-me-data';

const AboutMe = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">About Me</h1>
      <div className="pearl grid grid-cols-1 md:grid-cols-2 gap-8 p-5">
        {/* Experience Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Experience</h2>
          <div className="relative">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-8 flex items-center">
                <div className="w-full flex items-center">
                  {/* Timeline Icon */}
                  <div className="w-12 flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full">
                      <FontAwesomeIcon icon={faBriefcase} />
                    </div>
                  </div>
                  {/* Timeline Content */}
                  <div className="ml-4 w-full">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-sm text-gray-300">{exp.company}</p>
                    <p className="text-sm text-gray-300">{exp.date}</p>
                    <p className="mt-2 text-sm text-gray-200">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Education Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Education</h2>
          <div className="relative">
            {education.map((edu, index) => (
              <div key={index} className="mb-8 flex items-center">
                <div className="w-full flex items-center">
                  {/* Timeline Icon */}
                  <div className="w-12 flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full">
                      <FontAwesomeIcon icon={faGraduationCap} />
                    </div>
                  </div>
                  {/* Timeline Content */}
                  <div className="ml-4 w-full">
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    <p className="text-sm text-gray-300">{edu.institution}</p>
                    <p className="text-sm text-gray-300">{edu.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
