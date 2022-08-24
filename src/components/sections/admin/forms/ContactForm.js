import { Paper, Button, TextField, Box, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../../../firestore";
import { getData } from "../../../../firestore/utils";
import { useEffect, useState, useContext } from "react";
import NotificationContext from "../../../../context/notification-context";

const ContactForm = () => {
  const [contact, setContact] = useState({});
  const notificationCtx = useContext(NotificationContext);

  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      email: "",
      instagramUser: "",
    },
  });
  useEffect(() => {
    getData("contact")
      .then((contact) => {
        const { email, instagramUser } = contact[0];
        setValue("email", email);
        setValue("instagramUser", instagramUser);
        setContact(contact[0]);
      })
      .catch(() => {
        notificationCtx.createNotification(
          "error",
          "Accsess to database failed"
        );
      });
  }, [setValue]); // eslint-disable-line react-hooks/exhaustive-deps

  const sumbitHandler = async (data) => {
    await updateDoc(doc(db, "contact", contact.id), data)
      .then(() => {
        notificationCtx.createNotification(
          "success",
          "Successfully updated Contact text"
        );
      })
      .catch(() => {
        notificationCtx.createNotification(
          "error",
          "There was an error trying to update Contact text"
        );
      });
  };

  return (
    <>
      <Paper elevation={3} sx={{ maxWidth: "700px", margin: "0 auto" }}>
        <form onSubmit={handleSubmit(sumbitHandler)}>
          <Box
            sx={{ display: "grid", gridRowGap: "20px", padding: "20px" }}
            margin={{ xs: "20px 0", sm: "20px 100px" }}
          >
            <Typography variant="h5" textAlign={"center"}>
              Edit Contact
            </Typography>
            <Controller
              control={control}
              name="email"
              rules={{ required: true }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  helperText={error ? "Email is required" : null}
                  size="small"
                  error={!!error}
                  onChange={onChange}
                  value={value}
                  fullWidth
                  label={"Email"}
                  variant="outlined"
                />
              )}
            />
            <Controller
              control={control}
              name="instagramUser"
              rules={{ required: true }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  helperText={error ? "Instagram user is required" : null}
                  size="small"
                  error={!!error}
                  onChange={onChange}
                  value={value}
                  fullWidth
                  label={"Instagram user"}
                  variant="outlined"
                />
              )}
            />
            <Button variant="contained" type="sumbit">
              Edit
            </Button>
          </Box>
        </form>
      </Paper>
    </>
  );
};

export default ContactForm;
