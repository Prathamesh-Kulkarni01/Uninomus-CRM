import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { Paper, Grid, Typography, withStyles, Button } from "@material-ui/core";
import WizardHeader from "./WisardHeaders";
import SelectService from "./SelectServices";
import Contacts from "./Contacts";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import TypeSelector from "./TypeSelector";
import EventDetails from "./EventDetails";
import Timings from "./Timings";

const style = (theme) => ({
  root: {
    margin: '10px 0',
    padding: "36px 0 0",
    background: theme.palette.primary[1000],
    boxShadow: [
      `0px 16px 26px -10px ${theme.palette.primary.main}99`,
      theme.shadows[15]
    ]
  },
  navigation: {
    width: 110,
    fontSize: 12,
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
      width: 90
    }
  },
  prevBtn: {
    color: theme.palette.grey[700],
    background: theme.palette.common.white,
    boxShadow: theme.shadows[5]
  }
});
const Content = ({ classes }) => {
  const theme=useTheme()
  const colors=tokens(theme.palette.mode)
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const handleChange = (index) => (e) => {
    setActiveStep(index);
    localStorage.setItem("step", index);
  };
  const nandleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handlePrev = () => {
    setActiveStep(activeStep - 1);
    localStorage.setItem("step", activeStep - 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    const data = Array.from(e.target.elements)
      .map((el) => el.id)
      .filter(Boolean)
      .reduce((accObj, field) => {
        accObj[field] = e.target.elements[field].value;
        return accObj;
      }, {});
    alert(JSON.stringify(data, null, 2));
  };
  const tabs = ["Choose Type", "Primary Details", "Organizer Details", "Contact"];
  return (
    <Paper style={{  color: colors.grey[100],height:'97vh',paddingTop:'100px',background:colors.primary[400]}} elevation={1} className={classes.root}>
      <Typography
        variant="h4"
        gutterBottom
        color="primary"
        justify="center"
        align="center"
        style={{ padding: "1px 8px",fontWeight:"bold",}}
      >
        Create Event
      </Typography>
      <Typography gutterBottom align="center">
      Unlock the Magic of Your Event Creation Journey
      </Typography>
      <WizardHeader
        tabs={tabs}
        activeStep={activeStep}
        handleChange={handleChange}
        formSubmitted={formSubmitted}
      />

      <form onSubmit={handleSubmit}>
        <SwipeableViews style={{overFlow:'hidden'}} index={activeStep}  onChangeIndex={handleChange}>
          <TypeSelector />
          <EventDetails/>
          {/* <SelectService /> */}
          <Timings />
          {/* <Box></Box> */}
          <Contacts formSubmitted={formSubmitted} />
        </SwipeableViews>
        <Grid
          container
          justify="space-between"
          style={{ padding: "46px 96px",position:'absolute',bottom:10,left:0 }}
        >
          <Grid item>
            <Button
              disabled={activeStep === 0 || formSubmitted}
              onClick={handlePrev}
              variant="contained"
              color="default"
              className={`${classes.navigation} ${classes.prevBtn}`}
            >
              Back
            </Button>
          </Grid>
          {activeStep < tabs.length - 1 && (
            <Grid item>
              <Button
                color="primary"
                className={classes.navigation}
                variant="contained"
                onClick={nandleNext}
                disabled={formSubmitted}
              >
                Next
              </Button>
            </Grid>
          )}
          {activeStep === tabs.length - 1 && (
            <Grid item>
              <Button
                type="submit"
                color="primary"
                className={classes.navigation}
                variant="contained"
                disabled={formSubmitted}
              >
                Submit
              </Button>
            </Grid>
          )}
        </Grid>
      </form>
    </Paper>
  );
};
export default withStyles(style)(Content);
