import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
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

  console.log(contact, "contact***");

  const editHandler = () => {
    console.log("edit");
  };

  const deleteHandler = () => {
    console.log("delete");
  };

  return (
    <Card sx={{ my: 3, boxShadow: "1px 4px 5px rgba(0,0,0,0.2)", p: 1 }}>
      <CardContent>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography
            variant="h4"
            fontSize={16}
            fontWeight={600}
            color={"#1976D2"}
          >
            {name}
          </Typography>
          <Typography
            variant="body1"
            fontSize={12}
            fontWeight={500}
            sx={{
              backgroundColor:
                relationship === "professional" ? "#1976D2" : "lightblue",
              borderRadius: "0.2rem",
              padding: "0.4rem 0.5rem",
              color: relationship === "professional" ? "#fff" : "#333",
            }}
          >
            {relationship?.charAt(0).toUpperCase() + relationship?.slice(1)}
          </Typography>
        </Box>
        {email && (
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "7px",
              color: "#1976D2",
              mb: 1,
            }}
          >
            <div>
              <EmailIcon fontSize="small" sx={{ fontSize: "16px" }} />
            </div>
            <Typography variant="h4" fontSize={16} mt={-0.3}>
              {email}
            </Typography>
          </Box>
        )}
        {phone && (
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "4px",
              color: "#1976D2",
            }}
          >
            <div>
              <LocalPhoneIcon
                fontSize="small"
                sx={{ fontSize: "16px" }}
                mt={-0.3}
              />
            </div>
            <Typography variant="h4" fontSize={16}>
              {phone}
            </Typography>
          </Box>
        )}
      </CardContent>
      <CardActions>
        <Button
          onClick={editHandler}
          variant="contained"
          sx={{ padding: "0.3rem 1rem" }}
        >
          Edit
        </Button>
        <Button
          onClick={deleteHandler}
          variant="contained"
          color="error"
          sx={{ padding: "0.3rem 1rem" }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default ContactItem;
