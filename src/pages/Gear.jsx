import React from 'react';
import styled from 'styled-components';
import mics from '../images/SunSpell_Gear.jpg';
import { PageBody, PhotoFrame } from '../components';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const BodyText = styled.p`
  line-height: 1.5;
  font-size: 1.1rem;
  font-family: 'Poppins', sans-serif;
`;

const GearCategory = styled.div`
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid #568a39;
`;

const GearUL = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const GearLI = styled.li`
  margin-bottom: 0.5rem;
`;

const GearHeader = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  color: #568a39;
  text-align: center;
  margin-bottom: 1rem;
`;

const Gear = () => {
  return (
    <>
      <PhotoFrame photo={mics} />
      <PageBody>
        <h2>Gear List</h2>
        <BodyText>
          Call us before your session to make sure the gear you want is
          available. <br />
          We have a ton of great gear, but things can break or get loaned out -
          so let us know what you're looking for, and we'll make sure we have
          it.
        </BodyText>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
          <Masonry columnsCount={4} gutter='16px'>
            <GearCategory>
              <GearHeader>GUITARS:</GearHeader>
              <GearUL>
                <GearLI>Fender Jazzmaster</GearLI>
                <GearLI>Fender Jaguarillo</GearLI>
                <GearLI>Fender Telecaster</GearLI>
                <GearLI>Fender Stratocaster</GearLI>
                <GearLI>Epiphone Dot</GearLI>
                <GearLI>Hagstrom II</GearLI>
                <GearLI>Eastwood Airline Map Baritone</GearLI>
                <GearLI>Gretsch Electromatic Baritone</GearLI>
                <GearLI>Supro White Holiday</GearLI>
                <GearLI>Silvertone 1478</GearLI>
                <GearLI>King Hollowbody Nashville</GearLI>
                <GearLI>Harmony Electric</GearLI>
                <GearLI>Ventura SG</GearLI>
                <GearLI>Gibson SG</GearLI>
                <GearLI>DanElectro 12 string electric</GearLI>
                <GearLI>Martin DX1AE acoustic</GearLI>
                <GearLI>Gretsch Corsair</GearLI>
                <GearLI>Yamaha FG-230 12 string acoustic</GearLI>
                <GearLI>Yamaha acoustic</GearLI>
                <GearLI>Yamaha G-55A classical</GearLI>
                <GearLI>Goldtone Banjo</GearLI>
                <GearLI>Lanai Ukelele</GearLI>
              </GearUL>
            </GearCategory>
            <GearCategory>
              <GearHeader>DRUMS:</GearHeader>
              <GearUL>
                <GearLI>Ludwig Superbeat 1960s (13, 16, 22)</GearLI>
                <GearLI>Pearl Session Custom (10, 12, 14, 24)</GearLI>
                <strong>Snares:</strong>
                <GearLI>Ludwig marine oyster pearl 14”</GearLI>
                <GearLI>Ludwig supraphonic 14”</GearLI>
                <GearLI>Ludwig Acrolite 14”</GearLI>
                <GearLI>Ludwig marching snare 14”</GearLI>
                <GearLI>Ludwig marching snare 14”</GearLI>
                <GearLI>DW Black Beauty nickel plated brass 14”</GearLI>
                <strong>Cymbals:</strong>
                <GearLI>Istanbul AGOP 18” crash</GearLI>
                <GearLI>Istanbul AGOP 20” Ride</GearLI>
                <GearLI>Cymbal & Gong Janavar Ride 22”</GearLI>
                <GearLI>Cymbal & Gong Holy Grail Ride 22”</GearLI>
                <GearLI>Zildjian K crash 18”</GearLI>
                <GearLI>Zildjian K hats 14”</GearLI>
                <GearLI>Zildjian A hats 14”</GearLI>
                <GearLI>Zildjian Z crash 17”</GearLI>
                <GearLI>Zildjian Z crash 18”</GearLI>
                <GearLI>Istanbul Turk hats 13”</GearLI>
                <br />
                <GearLI>Meinl Congas</GearLI>
                <GearLI>Remo Djembe</GearLI>
              </GearUL>
            </GearCategory>
            <GearCategory>
              <GearHeader>BASS:</GearHeader>
              <GearUL>
                <GearLI>Fender Precision bass</GearLI>
                <GearLI>Fender Jazz bass</GearLI>
                <GearLI>Fender PJ Mustang</GearLI>
                <GearLI>EKO 60s bass</GearLI>
                <GearLI>Epiphone bass</GearLI>
              </GearUL>
            </GearCategory>
            <GearCategory>
              <GearHeader>PIANOS/SYNTHS:</GearHeader>
              <GearUL>
                <GearLI>Wurlitzer spinet acoustic piano</GearLI>
                <GearLI>Wurlitzer 200a electric piano</GearLI>
                <GearLI>Lowrey Organ</GearLI>
                <GearLI>Casio CZ3000</GearLI>
                <GearLI>Yamaha SK30 symphonic ensemble</GearLI>
                <GearLI>Casio 7000</GearLI>
                <GearLI>Moog MicroMoog</GearLI>
                <GearLI>Behringer TD3</GearLI>
                <GearLI>Behringer RD8 808</GearLI>
                <GearLI>Roland Juno JU06a</GearLI>
                <GearLI>Akai MPK Mini</GearLI>
                <GearLI>M-Audio Axiom</GearLI>
                <GearLI>Big Briar Theremin</GearLI>
              </GearUL>
            </GearCategory>
            <GearCategory>
              <GearHeader>AMPS:</GearHeader>
              <GearUL>
                <GearLI>Fender Princeton</GearLI>
                <GearLI>Fender Bassman</GearLI>
                <GearLI>Roland JC 120</GearLI>
                <GearLI>Music Man HD 212</GearLI>
                <GearLI>MusicMan HD 130</GearLI>
                <GearLI>Fender HotRod Deluxe x3</GearLI>
                <GearLI>Vox AC30</GearLI>
                <GearLI>Vox Westminster</GearLI>
                <GearLI>Sano 16WR</GearLI>
                <GearLI>Ampeg V4</GearLI>
                <GearLI>Peavey Bandit 112</GearLI>
                <GearLI>720 solid state amp</GearLI>
                <GearLI>Marshall 4x12 cab</GearLI>
                <GearLI>Guild 212</GearLI>
                <GearLI>Rosac 410</GearLI>
                <GearLI>Albatross cab</GearLI>
              </GearUL>
            </GearCategory>
            <GearCategory>
              <GearHeader>PEDALS:</GearHeader>
              <GearUL>
                <GearLI>Death by Audio ECHO MASTER</GearLI>
                <GearLI>JHS Colour Box</GearLI>
                <GearLI>Solid Gold FX surf rider</GearLI>
                <GearLI>Boss Giga Delay</GearLI>
                <GearLI>Earthquaker Devices Spires</GearLI>
                <GearLI>Earthquaker Devices Plumes</GearLI>
                <GearLI>ProCo RAT</GearLI>
                <GearLI>TC Electronics June 60</GearLI>
                <GearLI>Malekko Vibrato</GearLI>
                <GearLI>MXR Carbo Copy</GearLI>
                <GearLI>Jangle Box Comp/Sustain</GearLI>
                <GearLI>Electro Harmonix super switcher</GearLI>
                <GearLI>Zoom GFX707</GearLI>
                <GearLI>Line 6 DL4 Delay modeler</GearLI>
                <GearLI>Boss CS-2</GearLI>
                <GearLI>Boss DS-1</GearLI>
                <GearLI>Boss SD-1</GearLI>
                <GearLI>MXR Classic Overdrive</GearLI>
                <GearLI>Reaper Overdrive</GearLI>
                <GearLI>Boss TR-2</GearLI>
                <GearLI>Boss OC-3</GearLI>
                <GearLI>Xotic Effects RC booster</GearLI>
                <GearLI>Electro Harmonix Bad Stone</GearLI>
                <GearLI>Vox Wah</GearLI>
                <GearLI>Boss DD-3</GearLI>
                <GearLI>Dark Glass Electronics microbes B7K bass pre</GearLI>
                <GearLI>LR Baggs paracoustic DI</GearLI>
                <GearLI>Donner surge rotator</GearLI>
                <GearLI>Electro Harmonix Micro POG</GearLI>
                <GearLI>MXR phase 90</GearLI>
                <GearLI>Electro Harmonix Big Muff</GearLI>
                <GearLI>Mosky Audio silver horse KLON</GearLI>
                <GearLI>Diamond memory lane 2</GearLI>
                <GearLI>Maxon OD-9 Tube Screamer</GearLI>
                <GearLI>Free The Tone Tri-Avatar chorus</GearLI>
                <GearLI>FEA DE-CL Comp/Limiter</GearLI>
                <GearLI>Justin Chancellor TN-30 7PR Was Fuzz</GearLI>
                <GearLI>Visual Sound H20 chorus Echo</GearLI>
              </GearUL>
            </GearCategory>
            <GearCategory>
              <GearHeader>MICS:</GearHeader>
              <GearUL>
                <GearLI>Coles 4038 x2</GearLI>
                <GearLI>AKG 414 x2</GearLI>
                <GearLI>Peluso P12 x2</GearLI>
                <GearLI>RCA 74b</GearLI>
                <GearLI>Josephson C42 x2</GearLI>
                <GearLI>Warm Audio WA47</GearLI>
                <GearLI>Warm Audio WA67</GearLI>
                <GearLI>Warm Audio WA87</GearLI>
                <GearLI>Warm Audio WA251</GearLI>
                <GearLI>Soyuz 1973</GearLI>
                <GearLI>Rhode NTR</GearLI>
                <GearLI>American DR332 ribbon</GearLI>
                <GearLI>Copperphone</GearLI>
                <GearLI>Sennheiser 441 x2</GearLI>
                <GearLI>Sennheiser 421 x2</GearLI>
                <GearLI>AKG D19</GearLI>
                <GearLI>AKG D12</GearLI>
                <GearLI>Lauten Audio Snare Mic</GearLI>
                <GearLI>ElectroVoice 635a x2</GearLI>
                <GearLI>ElectroVoice RE20</GearLI>
                <GearLI>ElectroVoice RE11</GearLI>
                <GearLI>ElectroVoice RE16</GearLI>
                <GearLI>ElectroVoice 664</GearLI>
                <GearLI>Cascade Fathead x2</GearLI>
                <GearLI>Cascade Elroy</GearLI>
                <GearLI>Echolette MD409</GearLI>
                <GearLI>Sennheiser e609</GearLI>
                <GearLI>Shure SM58</GearLI>
                <GearLI>Shure SM58 Beta</GearLI>
                <GearLI>Shure SM57 x 7</GearLI>
                <GearLI>Shure SM57 transformerless</GearLI>
                <GearLI>Shure SM7b x2</GearLI>
                <GearLI>Shure 81</GearLI>
                <GearLI>Shure 91</GearLI>
                <GearLI>Shure PG 56 x3</GearLI>
                <GearLI>Shure PG52</GearLI>
                <GearLI>Shure Unidine 515 SD</GearLI>
                <GearLI>Shure Unidine 515 SB x3</GearLI>
                <GearLI>Shure VP64A x2</GearLI>
                <GearLI>Audix D6</GearLI>
                <GearLI>MXL Genesis</GearLI>
                <GearLI>Sterling ST55</GearLI>
                <GearLI>CAD e100</GearLI>
                <GearLI>Telefunken TD12</GearLI>
                <GearLI>Audio Technica DR4000</GearLI>
                <GearLI>Audio Technica SK90MKII</GearLI>
                <GearLI>M-Audio Pulsar II x2</GearLI>
              </GearUL>
            </GearCategory>
            <GearCategory>
              <GearHeader>PREAMPS:</GearHeader>
              <GearUL>
                <GearLI>Stam 1073 x2</GearLI>
                <GearLI>Warm Audio 273EQ</GearLI>
                <GearLI>Ampex 351</GearLI>
                <GearLI>Universal Audio 6176 x2</GearLI>
                <GearLI>Daking MicPre IV</GearLI>
                <GearLI>Neve 511 x2</GearLI>
                <GearLI>API 512c</GearLI>
                <GearLI>Cartec PreQ5</GearLI>
                <GearLI>Warm Audio WA12 x2</GearLI>
                <GearLI>Radial PreComp</GearLI>
                <GearLI>JoeMeek</GearLI>
                <GearLI>ArtPro MPAII</GearLI>
                <strong>Inline:</strong>
                <GearLI>Cloudlifter x3</GearLI>
                <GearLI>Tierra Audio Mint</GearLI>
                <GearLI>Tierra Audio Chili</GearLI>
              </GearUL>
            </GearCategory>
            <GearCategory>
              <GearHeader>COMPRESSORS:</GearHeader>
              <GearUL>
                <GearLI>Audioscape Opto</GearLI>
                <GearLI>Audioscape G-stereo 2 VCA</GearLI>
                <GearLI>DBX 160a x2</GearLI>
                <GearLI>Overstayer stereo FET</GearLI>
                <GearLI>Gates STA level</GearLI>
                <GearLI>ArtPro CLAII</GearLI>
              </GearUL>
            </GearCategory>
            <GearCategory>
              <GearHeader>EQ:</GearHeader>
              <GearUL>
                <GearLI>Warm Audio EQP x2</GearLI>
                <strong>Special Effects:</strong>
                <GearLI>Roland Space Echo</GearLI>
                <GearLI>Singular Audio TubeDrve</GearLI>
                <GearLI>Pioneer SR 202 Spring Reverb</GearLI>
                <GearLI>DIYRE Colour box x2</GearLI>
              </GearUL>
            </GearCategory>

            <GearCategory>
              <GearHeader>MASTERING / TAPE:</GearHeader>
              <GearUL>
                <strong> MASTERING: </strong>
                <GearLI>SSL Fusion</GearLI>
                <GearLI>Neve Orbit 5057 summing mixer</GearLI>
                <strong> TAPE: </strong>
                <GearLI>Tascam 38 & M-308 Mixer</GearLI>
              </GearUL>
            </GearCategory>
            <GearCategory>
              <GearHeader>CONVERSION / SPEAKERS:</GearHeader>
              <GearUL>
                <strong>CONVERSION:</strong>
                <GearLI>Universal Audio Apollo 16 MKII</GearLI>
                <GearLI>Universal Audio Volt 476P</GearLI>
                <GearLI>Focusrite Clarett</GearLI>
                <strong>SPEAKERS:</strong>
                <GearLI>Adam Audio A77X</GearLI>
                <GearLI>Yamaha NS10</GearLI>
              </GearUL>
            </GearCategory>
          </Masonry>
        </ResponsiveMasonry>
      </PageBody>
    </>
  );
};

export default Gear;
