import React from 'react';
import AddNewMaterial from '../common/AddData';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import "./style.css"
import Switches from './Switches';


// eslint-disable-next-line import/no-anonymous-default-export
export default ({materialState, setMaterialState}) => {
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
            <AddNewMaterial
            selectGroup={['None', 'Language', 'Programming']}
            type={'material'} state={materialState} setState={setMaterialState} open={open} setOpen={setOpen} />
            <div>
                {materialState.filter(item => {
                    if (item.group === "None" && groupState.groupNone) {
                        return true
                    }                   
                    if (item.group === "Language" && groupState.groupLanguage) {
                        return true
                    }                    
                    if (item.group === "Programming" && groupState.groupProgramming) {
                        return true
                    }
                    return false
                }).map(item => (
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
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}