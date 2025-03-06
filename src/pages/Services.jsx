import {PageBody, PhotoFrame} from '../components';
import services from '../images/SunSpell_Services.jpg';

const Services = () => {
  return (
    <>
      <PhotoFrame photo={services} />
      <PageBody>
        <h2>Services</h2>
        <h4>
          Sunspell Records is a multifaceted facility providing multitrack and
          live recording, engineering, producing, mixing, mastering, tape
          bounces, podcasts, reamping, composition, and performance.
        </h4>
      </PageBody>
    </>
  );
};

export default Services;
