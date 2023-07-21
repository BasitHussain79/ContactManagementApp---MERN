import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box component="div" mt={10}>
      <Typography
        variant="h1"
        sx={{ fontSize: { xs: "33px" }, fontWeight: 600 }}
        my={2}
      >
        About the Contact Management App
      </Typography>
      <Typography variant="body1">
        This contact management is a full stack MERN application for keeping
        track of all your contacts. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Voluptatibus, cum molestias repellat officia
        laboriosam sunt quaerat aliquam labore, aut atque optio illum earum
        delectus molestiae ipsam? Qui odit nihil ea fugit, rerum accusantium non
        culpa suscipit quaerat error sed numquam vero debitis exercitationem,
        nulla illo earum blanditiis fugiat eos? Molestiae, deserunt aliquid!
        Voluptatum fuga nobis cumque culpa minus explicabo in perspiciatis
        aliquid, quod possimus. Molestiae officia, consectetur ea modi
        cupiditate quaerat maxime commodi fugit explicabo aliquid ipsa repellat,
        esse quam quae nisi? In officia et vel soluta! Eligendi cupiditate iste
        dolore aliquam voluptates dicta, adipisci, nostrum earum impedit
        provident odit ullam dolorum nesciunt repellendus magni sed iusto
        debitis commodi ducimus! Suscipit fugit voluptate facilis dicta dolor!
        Nisi doloremque corrupti quas similique tempora placeat maxime, ipsam
        incidunt dolorum laudantium voluptatibus inventore dolorem ab
        consequuntur hic, illo autem. Iure pariatur voluptas culpa doloribus
        dolor possimus similique at, optio laboriosam repellat animi eligendi
        qui omnis nihil adipisci eum molestias, explicabo deserunt earum
        deleniti provident vel consequuntur ea et? Incidunt eum deserunt fugit
        possimus fugiat architecto eveniet dolor repudiandae aliquam! Enim
        dolore delectus fuga inventore assumenda doloribus quibusdam
        consequuntur rerum itaque cum perspiciatis quod omnis aut quae
        exercitationem, id totam expedita consequatur debitis sunt.
      </Typography>

      <Typography variant="body2" mt={3}>
        <strong>Version: </strong>1.0.0
      </Typography>
    </Box>
  );
};

export default About;
