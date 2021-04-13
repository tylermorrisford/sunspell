import React from 'react';
import styled from 'styled-components';

const Home = () => {

    const sunspellImageLink = `https://images.squarespace-cdn.com/content/v1/5e96368483eca662e151a62e/1605116424962-0XCY44759WMN6APDBFAQ/ke17ZwdGBToddI8pDm48kO6t_FIigFZlD-2ukJs68NZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UdQnRCmyfmE32mt8hf8jTbpNOvskeoRv-ygqK_y0NLe3pygZMNSAPtQr-kV0SxGO-A/Photo+Aug+24%2C+17+33+12.jpg`

    return(
        <Holder>
            <Hero src={sunspellImageLink} alt="Sunspell Logo"/>
        </Holder>
    );

}

export default Home;

const Holder = styled.div`
width: 100%;
height: inherit;
background-color: #d8bc96;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
`

const Hero = styled.img`
width: 50%;
`