import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CompetitionForm from './NewCompititionForm';
const CompetitionsList = () => {
  const [competitions, setCompetitions] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddCompetition = (competitionData) => {
    setCompetitions([...competitions, competitionData]);
    setIsDialogOpen(false);
  };

  const handleDeleteCompetition = (index) => {
    const updatedCompetitions = [...competitions];
    updatedCompetitions.splice(index, 1);
    setCompetitions(updatedCompetitions);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsDialogOpen(true)}
      >
        Add Competition
      </Button>

      <Dialog open={isDialogOpen} sx={{zIndex:'9999999999999'}} onClose={() => setIsDialogOpen(false)}>
        <DialogTitle>Add Competition</DialogTitle>
        <DialogContent>
          <CompetitionForm onSave={handleAddCompetition} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDialogOpen(false)} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {competitions.map((competition, index) => (
        <div key={index}>
          <CompetitionCard competition={competition} />
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => handleDeleteCompetition(index)}
          >
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
};

export default CompetitionsList;




const CompetitionCard = ({ competition }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{competition.title}</Typography>
        {/* Display other competition details here */}
      </CardContent>
    </Card>
  );
};


