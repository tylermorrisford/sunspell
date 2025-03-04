import React from 'react';
import styled from 'styled-components';
import studio from '../images/SunSpell_Gallery.jpg';
import { PageBody, PhotoFrame } from '../components';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const Gallery = () => {
  return (
    <>
      <PhotoFrame photo={studio} />
      <PageBody>
        <h2>Gallery</h2>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
          <Masonry columnsCount={4} gutter='16px'>
            <>hi</>
            <>hi</>
            <>hi</>
            <>hi</>
            <>hi</>
            <>hi</>
            <>hi</>
          </Masonry>
        </ResponsiveMasonry>
      </PageBody>
    </>
  );
};

export default Gallery;

// unused
const BodyText = styled.p`
  line-height: 1.5;
  font-size: 1.1rem;
  font-family: 'Poppins', sans-serif;
`;
