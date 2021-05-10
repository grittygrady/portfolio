import React, { useEffect, useState } from 'react';
import sanityClient from '../client';

const Project = () => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
      title,
      date,
      place,
      description,
      projectType,
      link,
      tags
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className='bg-purple-100 min-h-screen p-12'>
      <section className='container mx-auto'>
        <h1 className='text-5xl flex justify-center cursive'>MY prOJeCtS</h1>
        <h2 className='text-lg text-gray-600 flex justify-center mb-12'>
          My Brain on a Screen
        </h2>
        <section className='grid grid-cols-2 gap-8'>
          {projectData &&
            projectData.map((project, index) => (
              <article className='relative rounded-lg shadow-xl bg-white p-16'>
                <h3 className='text-gray-800 text-3xl font-bold mb-2 hover:text-blue-700'>
                  <a
                    href={project.link}
                    alt={project.alt}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {project.title}
                  </a>
                </h3>
                <div className='text-gray-500 text-xs space-x-4'>
                  <span>
                    <strong className='font-bold'>Published: </strong>:{' '}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className='font-bold'>Company</strong>:{' '}
                    {project.place}
                  </span>
                  <span>
                    <strong className='font-bold'>Type </strong>:{' '}
                    {project.projectType}
                  </span>
                  <p className='mr-6 text-lg text-gray-700 leading-relaxed'>
                    {project.description}
                  </p>

                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500 font-bold hover:underline hover:text-blue-400'
                  >
                    View the Project{' '}
                    <span role='img' aria-label='right pointer'>
                      🔎
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
};

export default Project;
