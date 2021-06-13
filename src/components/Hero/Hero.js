import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        My name is Kumar. <br /> I'm a Web Developer.
      </SectionTitle>
      <SectionText>
        I build value through designs. I'm a web developer, designer and 3D
        generalist.
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "mailto:someone@yoursite.com?subject=Message from My Site")
        }>
        Contact Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
