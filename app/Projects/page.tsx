import Image from 'next/image';
import Link from 'next/link';
import projects from "./projects";


const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl text-white font-bold mb-8">Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className="w-full  object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <Link href={project.github}>
                {/* <a
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                > */}
                  View on GitHub
                {/* </a>s */}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;