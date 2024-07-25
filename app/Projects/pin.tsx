import Image from 'next/image';
import Link from 'next/link';
import projects from "./projects";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ProjectPin = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="flex items-center  text-2xl text-white font-bold mb-8">Projects <Link href='/Projects' className="ml-4 flex items-center justify-center w-7 h-7">
                  <FontAwesomeIcon icon={faArrowRight} className="text-white" />
              </Link></h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, 3).map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className="w-full pin-image-height object-scale-down"
            />
            <div className="p-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-700 mb-4">{project.description}</p>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPin;
