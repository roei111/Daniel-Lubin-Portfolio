import { Paper, Button, TextField, Box, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../../../firestore";
import { getAbout } from "../../../../firestore/utils";
import { useEffect, useState, useContext } from "react";
import NotificationContext from "../../../../context/notification-context";

const AboutForm = () => {
  const [about, setAbout] = useState({});
  const notificationCtx = useContext(NotificationContext);

  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      text: "",
    },
  });
  useEffect(() => {
    getAbout().then((about) => {
      setValue("text", about[0].text);
      setAbout(about[0]);
    });
  }, [setValue]);

  const sumbitHandler = async (data) => {
    await updateDoc(doc(db, "about", about.id), data)
      .then(() => {
        notificationCtx.createNotification(
          "success",
          "Successfully updated About text"
        );
      })
      .catch((error) => {
        notificationCtx.createNotification(
          "error",
          "There was an error trying to update About text"
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
              Edit About Me
            </Typography>
            <Controller
              control={control}
              name="text"
              rules={{ required: true }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  helperText={error ? "About me text is required" : null}
                  size="small"
                  error={!!error}
                  onChange={onChange}
                  value={value}
                  fullWidth
                  label={"Text"}
                  variant="outlined"
                  multiline
                  rows={10}
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

export default AboutForm;
