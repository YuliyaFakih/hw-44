import React, { useState } from 'react';
import uuid from 'react-uuid'
import { FormGroup } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import '../Material/style.css'
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({setPersonName, personName, studentsState, open , setOpen, state, setState, type, selectGroup = []}) => {
  const [group, setGroup] = useState(selectGroup[0])
  const [feild1, setField1] = useState('Title')
  const [feild2, setField2] = useState('')
  const [date, setDate] = useState(new Date())
  const [textArea, setTextArea] = useState('Default value')
  //const [personName, setPersonName] = React.useState([]);
  
    
  const submitForm = (event) => {
    event.preventDefault()
    let newItem;
    if(type === 'material') {
      newItem = {id: uuid(),
        title: feild1,
        description: textArea,
        group
      }
    } else if (type === 'student') {
      newItem = {id: uuid(),
        name: feild1,
        email: feild2,
        group
      }
    } else {
      //HomeWork
      newItem = {id: uuid(),
        title: feild1,
        description: textArea,
        deadLine: date,
        student: personName
      }
    }
    setState([...state, newItem])
    setOpen(false)
  }  
  const [check, setCheck] = useState(false);
  
  const checkbox = ({ target: { checked } }) => {
    setCheck(checked)
  }
  
  debugger
    return (
        <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal">
          <h2>Add {type}</h2>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          variant="outlined"
          value={group}
          onChange={(event) => setGroup(event.target.value)}
        >
          {selectGroup.map(item => <MenuItem value={item}>{item}</MenuItem>)}
        </Select>
          <form 
          className='form-block'
          component={FormGroup} onSubmit={submitForm}>
            
            <TextField required id="standard-required"
            label="Add title"
            variant="outlined"
            onChange={(event) => setField1(event.target.value)}
            defaultValue="Title" />

            {(type === 'student') && <TextField required id="standard-required"
            label="Add title"
            variant="outlined"
            onChange={(event) => setField2(event.target.value)}
            defaultValue="Email" />}

            {(type === 'material' || type === 'homework') && <TextField
                id="outlined-multiline-static"
                label="Add description"
                multiline
                rows={7}
                defaultValue="Default Value"
                variant="outlined"
                onChange={(event) => setTextArea(event.target.value)}
                />}
              {(type === "homework") && <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                          disableToolbar
                          variant="inline"
                          format="MM/dd/yyyy"
                          margin="normal"
                          id="date-picker-inline"
                          label="Date picker inline"
                          value={date}
                          onChange={(date) => setDate(date)}
                          KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }}
                        />
                        {/* <button className="new-button">sdlkflk</button> */}
                </MuiPickersUtilsProvider> }

                {(type === "homework") &&<FormControl >
                    <InputLabel id="demo-mutiple-checkbox-label">Student's name</InputLabel>
                    <Select
                      labelId="demo-mutiple-checkbox-label"
                      id="demo-mutiple-checkbox"
                      multiple
                      value={personName}
                      onChange={(event) => setPersonName(event.target.value)}
                      input={<Input />}
                      renderValue={(selected) => selected.join(', ')}
                    >
                      {Object.values(studentsState).map((item) => (
                        <MenuItem key={item.id} value={item.name}>
                          <Checkbox checked={check} onChange={checkbox} />
                          <ListItemText primary={item.name} />
                        </MenuItem>
                      ))}
                    </Select>
                    </FormControl> }
      
               <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                >
                        Add new {type}
                </Button>
              </form>
        </div>
      </Modal>
    )
}