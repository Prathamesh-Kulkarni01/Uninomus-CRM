import React from "react";
import Grid from "@mui/material/Grid";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import { Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useEventFormContext } from "./context/EventFormContext";
import { EmojiEvents } from "@mui/icons-material";

function TypeSelector() {
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
          xs={4}
          borderRadius="20px"
          name="multi"
          onClick={()=>updateType("multi")}
          sx={{
            height: "200px",
            textAlign: "center",
            backgroundColor:eventFormData["type"]==="multi"? colors.primary[900]:colors.primary[400],
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.6s ease", 
            "&:hover": {
              transform: "scale(0.95)", 
            },
          }}
        >
          <LocalActivityIcon style={{ fontSize: "100px" }} />
          <Typography variant="h6">Event/Fest</Typography>
          <Typography variant="p" mt={2}>
            Best for events/fests that include multiple sub-events or
            competitions
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          borderRadius="20px"
          name="solo"
          onClick={(s)=>updateType("solo")}
          sx={{
            height: "200px",
            textAlign: "center",
            backgroundColor:eventFormData["type"]==="solo"? colors.primary[900]:colors.primary[400],
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", 
            transition: "transform 0.6s ease",
            "&:hover": {
              transform: "scale(0.95)", 
            },
          }}
        >
          <EmojiEvents style={{ fontSize: "100px" }} />
          <Typography variant="h6">Solo Event/Competition</Typography>
          <Typography variant="p" mt={2}>
            Best for single event/competition
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default TypeSelector;
