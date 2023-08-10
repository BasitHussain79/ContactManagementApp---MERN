import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, relationship } = contact;

  const editHandler = () => {
    console.log("edit");
  };

  const deleteHandler = () => {
    console.log("delete");
  };

  return (
    <Card>
      <CardContent>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">{name}</Typography>
          <Typography variant="body1">
            {relationship?.charAt(0).toUpperCase() + relationship?.slice(1)}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button onClick={editHandler}>Edit</Button>
        <Button onClick={deleteHandler}>Delete</Button>
      </CardActions>
    </Card>
  );
};

export default ContactItem;
