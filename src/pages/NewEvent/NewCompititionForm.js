import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DateRangePicker from '../../components/FormComponents.tsx/DateRangePicker';
import TimePickerValue from '../../components/FormComponents.tsx/TimePicker';

const CompetitionForm = ({ onSave }) => {
  const [competitionData, setCompetitionData] = useState({
    title: '',
    startDate: null,
    endDate: null,
    startTime: null,
    endTime: null,
    // Add other competition fields here
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompetitionData({ ...competitionData, [name]: value });
  };

  const handleSave = () => {
    onSave(competitionData);
    // Clear the form or perform any other necessary actions
  };

  return (
    <div>
      <Typography variant="h5">Add Competition</Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Competition Title"
              name="title"
              value={competitionData.title}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DateRangePicker
              startDate={competitionData.startDate}
              endDate={competitionData.endDate}
              onChange={(startDate, endDate) =>
                setCompetitionData({
                  ...competitionData,
                  startDate,
                  endDate,
                })
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TimePickerValue
              label="Start Time"
              value={competitionData.startTime}
              onChange={(startTime) =>
                setCompetitionData({ ...competitionData, startTime })
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TimePickerValue
              label="End Time"
              value={competitionData.endTime}
              onChange={(endTime) =>
                setCompetitionData({ ...competitionData, endTime })
              }
              fullWidth
            />
          </Grid>
          {/* Add more form fields here */}
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CompetitionForm;
