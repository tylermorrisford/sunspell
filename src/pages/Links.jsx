import React from 'react';
import styled from 'styled-components';
import LinksPhoto from '../images/SunSpell_Links.jpg';
import { PageBody, YouTubePlayer, PhotoFrame } from '../components';
import spotify from '../images/spotify_logo.png';

const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  margin: 1rem;
`;

const PlaylistContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  margin: 1rem;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

const Links = () => {
  return (
    <>
      <PhotoFrame photo={LinksPhoto} />
      <PageBody>
        <h2>Links</h2>
        <PlaylistContainer>
          <a
            href='https://open.spotify.com/playlist/0d2zLnAvffKO60MfrDqECo?si=db7e4a6f68004024'
            target='_blank'
            rel='noreferrer'
          >
            <img src={spotify} alt='Spotify' height='20px' /> The Sunspell
            Spotify Playlist
          </a>
        </PlaylistContainer>
        <LinksContainer>
          <YouTubePlayer youtubeUrl='https://youtu.be/8WlhNseD2H4?feature=shared' />
          <YouTubePlayer youtubeUrl='https://youtu.be/7iEtt-Z8_C4?si=l1zoM966OFR1umFm' />
          <YouTubePlayer youtubeUrl='https://youtu.be/Tho3h8PdJ6s?si=BfxDxCUw1rqlMCkI' />
          <YouTubePlayer youtubeUrl='https://youtu.be/Vh18YnJStiQ?si=xCRKRRPvuz0a_Wvj' />
          <YouTubePlayer youtubeUrl='https://youtu.be/Tjf5LrapT-w?si=iazEeLnUPIcD8wgU' />
          <YouTubePlayer youtubeUrl='https://youtu.be/6iDiHr1ByVQ' />
        </LinksContainer>
      </PageBody>
    </>
  );
};

export default Links;
