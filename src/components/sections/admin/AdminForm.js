import {
  Paper,
  Button,
  TextField,
  Box,
  Typography,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firestore";

const AdminForm = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      description: "",
      year: null,
      youtubeLink: "",
    },
  });

  const sumbitHandler = async (data) => {
    console.log(data);
    await addDoc(collection(db, "works"), data);
    reset();
  };

  return (
    <>
      <Paper elevation={3}>
        <form onSubmit={handleSubmit(sumbitHandler)}>
          <Box
            sx={{ display: "grid", gridRowGap: "20px", padding: "20px" }}
            margin={{ sm: "10px 100px", md: "10px 200px", lg: "10px 300px" }}
          >
            <Typography variant="h5">Add new work</Typography>
            <Controller
              control={control}
              name="title"
              rules={{ required: true }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  helperText={error ? "Title is required" : null}
                  size="small"
                  error={!!error}
                  onChange={onChange}
                  value={value}
                  fullWidth
                  label={"Title"}
                  variant="outlined"
                />
              )}
            />
            <Controller
              control={control}
              name="description"
              rules={{ required: true }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  helperText={error ? "Description is required" : null}
                  size="small"
                  error={!!error}
                  onChange={onChange}
                  value={value}
                  fullWidth
                  label={"Description"}
                  variant="outlined"
                />
              )}
            />
            <Controller
              control={control}
              name="year"
              rules={{ required: true }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  helperText={error ? "Year is required" : null}
                  size="small"
                  error={!!error}
                  onChange={onChange}
                  value={value}
                  fullWidth
                  label={"Year"}
                  variant="outlined"
                  type="number"
                />
              )}
            />
            <Controller
              control={control}
              name="youtubeLink"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  helperText={"Youtube link is not required"}
                  size="small"
                  error={!!error}
                  onChange={onChange}
                  value={value}
                  fullWidth
                  label={"Youtube Link "}
                  variant="outlined"
                />
              )}
            />
            <Button variant="contained" type="sumbit">
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </>
  );
};

export default AdminForm;
