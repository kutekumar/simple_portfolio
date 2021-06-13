import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 100, text: "Freelance Projects" },
  { number: 1000, text: "Students" },
  { number: 100, text: "Hours of Experiences" },
  { number: 20, text: "Clients" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplisments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number} + </BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
