import React from 'react';
import AddNewHomework from '../common/AddData';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import "./style.css"
import Switches from './Switches';


// eslint-disable-next-line import/no-anonymous-default-export
export default ({setPersonName, personName, homeWorkState, setHomeWorkState, studentsState}) => {
    const [open, setOpen] = React.useState(false)
    const [groupState, setGroupState] = React.useState({
        groupNone: true,
        groupLanguage: true,
        groupProgramming: true
    })

    return (
        <div>
            <Switches groupState={groupState} setGroupState={setGroupState} />
            <Button
                onClick={() => setOpen(true)}
                variant="contained"
                color="primary"
                size="large"
                startIcon={<AddIcon />}>
                    Add new material
            </Button>
            <AddNewHomework personName={personName} setPersonName={setPersonName}
            selectGroup={['None', 'Language', 'Programming']}
            type={'homework'} studentsState={studentsState} state={homeWorkState} setState={setHomeWorkState} open={open} setOpen={setOpen} />
            <div>
                {homeWorkState.map(item => (
                     <Card className="card-block">
                        <CardContent>
                            <Typography variant="h2" component="h2">
                                {item.title}
                            </Typography>

                            <Typography variant="h6" component="h4">
                                {item.description}
                            </Typography>
                            <Typography variant="h6" component="h4" color="textSecondary">
                                {item.group}
                            </Typography>
                            <div>
                                {studentsState.map(item => (
                                        <Typography variant="h6" component="h4">
                                            {item.name}
                                        </Typography>
                                    ))}
                            </div>
                            <Typography variant="h6" component="h4" color="textSecondary">
                                {item.deadLine.toString()}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
                
            </div>
            
        </div>
    )
}