import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { tokens } from "../../theme";
import { Box, Container, Grid, useTheme } from "@mui/material";
import Content from "./Content";
import { EventFormProvider } from "./context/EventFormContext";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function NewEventButton() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="text"
        sx={{
          color: colors.grey[100],
          m: 1,
          backgroundColor: colors.blueAccent[700],
          fontSize: "14px",
          fontWeight: "bold",
          border: "none",
          padding: "10px 20px",
        }}
        onClick={handleClickOpen}
      >
        Create Event
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{
          zIndex: "999999",
          // backgroundColor: colors.primary[00],
        }}
      >
        <AppBar
          sx={{
            width: "100%",
            // backgroundColor: colors.primary[400],
            color: colors.grey[100],
          }}
        >
          <Toolbar
            sx={{
              backgroundColor: colors.primary[400],
              width: "100vw",
              color: colors.grey[100],
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Back
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <Grid sx={{ height: "100%" }}>
          <Grid
            item
            sx={{
              backgroundColor: colors.primary[400],
              m: "10px 80px ",
              height: "98%",
              overflow: "hidden",
              width: "calc(100%-80px)",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box>
              <EventFormProvider>
                <Content />
              </EventFormProvider>
            </Box>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
