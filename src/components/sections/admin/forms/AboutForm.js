import { Paper, Button, TextField, Box, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../../../firestore";
import { getData, uploadImageToCloudinary } from "../../../../firestore/utils";
import { useEffect, useState, useContext } from "react";
import NotificationContext from "../../../../context/notification-context";

const AboutForm = () => {
  const [about, setAbout] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const notificationCtx = useContext(NotificationContext);

  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      text: "",
    },
  });

  useEffect(() => {
    getData("about")
      .then((about) => {
        setValue("text", about[0].text);
        setAbout(about[0]);
      })
      .catch(() => {
        notificationCtx.createNotification(
          "error",
          "Accsess to database failed"
        );
      });
  }, [setValue]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  const sumbitHandler = async (data) => {
    try {
      let imageUrl = about.imageUrl; // Keep existing image URL if no new image is uploaded
      if (imageFile) {
        imageUrl = await uploadImageToCloudinary(imageFile);
      }

      await updateDoc(doc(db, "about", about.id), { ...data, imageUrl });
      notificationCtx.createNotification(
        "success",
        "Successfully updated About section"
      );
    } catch (error) {
      notificationCtx.createNotification(
        "error",
        "There was an error trying to update About section"
      );
    }
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
            <Button
              variant="contained"
              component="label"
            >
              Upload Image
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImageChange}
              />
            </Button>
            <Button variant="contained" type="submit">
              Edit
            </Button>
          </Box>
        </form>
      </Paper>
    </>
  );
};

export default AboutForm;
