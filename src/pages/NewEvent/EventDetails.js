import React from "react";
import Grid from "@mui/material/Grid";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import { Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useEventFormContext } from "./context/EventFormContext";
import { EmojiEvents } from "@mui/icons-material";
import { Box, Input, TextField } from "@material-ui/core";
import TextFieldInput from "../../components/FormComponents.tsx/TextFieldInput";
import { CloudUpload } from "@mui/icons-material";
import ImageUploadCard from "../../components/FormComponents.tsx/UplaodImageCard";
import DateRangePicker from "../../components/FormComponents.tsx/DateRangePicker";
import TimePickerValue from "../../components/FormComponents.tsx/TimePicker";

function EventDetails() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { eventFormData, updateFormData } = useEventFormContext();
  
  const updateType=(value)=>updateFormData((data)=>({...data,"type":value}))
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid
        container
        item
        xs={8}
        gap={10}
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        sm={12}
        height="60vh"
        p={5}
      >
        <Grid
          item
          container
          xs={12}
          flex
          gap={10}
          justifyContent='center'
          borderRadius="20px"
          sx={{
            textAlign: "center",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.6s ease", 
          }}
        >
            <Grid  backgroundColor={colors.primary[400]} height={300} borderRadius={5} p={2} item xs={12} sm={5}>
          <ImageUploadCard label="Upload Banner"/>
          </Grid>
          <Grid item  backgroundColor={colors.primary[400]} borderRadius={5} p={2} xs={12} sm={5}>
          <TextFieldInput  label="Event Name"/>
          <TextFieldInput  label="Event Tagline"/>
         <Grid container flex justifyContent="space-between">
          <Box  item flex flexDirection="column" xs={12}  sm={6}>
            <Typography variant="h6">Starts On</Typography>
              <DateRangePicker /> 
             <TimePickerValue/>
            </Box>
            <Box item xs={12} sm={6}>
            <Typography variant="h6">Starts On</Typography>
              <DateRangePicker />
              <TimePickerValue/>
            </Box>
            </Grid>
            <TextFieldInput multiline rows={4} label="Event Description..."/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default EventDetails;




