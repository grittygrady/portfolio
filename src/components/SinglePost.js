import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
        title,
        _id,
        slug,
        mainImage{
          asset->{
            _id,
            url
          }
        },
        body,
        "name": author->name,
        "authorImage: author->image
      }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <main className='bg-gray-200 min-h-screen p-12'>
      <article className='container shadow-lg mx-auto bg-puprple-100 rounded-lg'>
        <header className='relative'>
          <div className='absolute h-full w-full flex items-center justify-center p-8'>
            <div className='bg-white bg-opacity-75 rounded p-12'>
              <h1 className='cursive text-3xl lg:text-5xl mb-4'>
                {singlePost.title}
              </h1>
              <div className='flex justify-center text-gray-800'>
                <img
                  src={urlFor(singlePost.authorIamage.url())}
                  alt={singlePost.name}
                  className='w-10 h-10 rounded full'
                />
                <p></p>
              </div>
            </div>
          </div>
          <img src='' alt='' />
        </header>
        <div>BLOCK CONTENT</div>
      </article>
    </main>
  );
};

export default SinglePost;
