import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './style.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ groupState, setGroupState }) => {
    return (
        <div className='fixed-switch-block'>
        <FormControlLabel
        control={<Switch
            checked={groupState.groupNone}
            onChange={() => setGroupState((prev) => ({...prev, groupNone: !prev.groupNone}))}
            name="checkedA"
            color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
        />}
        label="None"
        />
        <FormControlLabel
        control={<Switch
            checked={groupState.groupLanguage}
            onChange={() => setGroupState((prev) => ({...prev, groupLanguage: !prev.groupLanguage}))}
            name="checkedA"
            color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
        />}
        label="Language"
        />
        <FormControlLabel
        control={<Switch
            checked={groupState.groupProgramming}
            onChange={() => setGroupState((prev) => ({...prev, groupProgramming: !prev.groupProgramming}))}
            name="checkedA"
            color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
        />}
        label="Programming"
        />
        </div>
    )
}