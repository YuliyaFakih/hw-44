import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AddNewStudent from './../common/AddData';

const Students = ({studentsState, setStudentsState}) => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <Button
                onClick={() => setOpen(true)}
                variant="contained"
                color="primary"
                size="large"
                startIcon={<AddIcon />}>
                   Add student
            </Button>
            <AddNewStudent 
            state={studentsState}
            setState={setStudentsState}
            open={open}
            setOpen={setOpen}
            type={'student'}
            selectGroup={['FE-107', 'FE-108', 'FE-109', 'FE-110']}
             />
             {studentsState.map(item => (
               <Card className="card-block">
                 <CardContent>
                     <Typography variant="h2" component="h2">
                         {item.name}
                     </Typography>
                     <Typography variant="h6" component="h4">
                         {item.email}
                     </Typography>
                     <Typography variant="h6" component="h4" color="textSecondary">
                         {item.group}
                     </Typography>
                 </CardContent>
             </Card>
             ))}
        </div>
    )
}

export default Students