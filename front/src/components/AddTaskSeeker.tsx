import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Input from "@material-ui/core/Input";
import Select from "react-select";

interface IFormInput {
  taskName: string;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AddTaskSeeker() {

  const { control, handleSubmit } = useForm({
    defaultValues: {
      taskName: ''
    }
  });

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data)
  };

  return (
    <Box sx={{ flexGrow: 1, marginTop: "40px" }}>
      <Grid container spacing={4}>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Item>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="taskName"
              control={control}
              render={({ field }) => <>
                <TextField id="outlined-basic" label="Task Name" variant="outlined" style={{ width: "80%"}} {...field} />
                <Button variant="contained" endIcon={<SendIcon />} style={{ padding: "15px", marginLeft: "30px"}} type='submit'>
                  Add
                </Button>
                </>
              }
            />
    {/* <Controller
      name="iceCreamType"
      control={control}
      render={({ field }) => <Select 
        {...field} 
        options={[
          { value: "chocolate", label: "Chocolate" },
          { value: "strawberry", label: "Strawberry" },
          { value: "vanilla", label: "Vanilla" }
        ]} 
      />}
    /> */}
  </form>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}