import React from 'react';
import './App.css';
import Nav from './Nav.js'


function CreateForm() {
    
	return (
		<>
        <Nav/>
        <h1 style={{backgroundColor:"#e3f0f5"}}>Challenge Details</h1>
		<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <label for="startDate">
              Start Date
            </label>
            <input
              type="date"
              name="startDate"
              onChange={this.handleForm}
             
              placeholder="date placeholder"
             
            />
  <label for="endDate">
              End Date
            </label>
            <input
              type="date"
              name="endDate"
              onChange={this.handleForm}
              
              placeholder="date placeholder"
            
            />
  <textarea>
 Description
</textarea>
<input type="file">Image upload:</input>
<select>Difficulty level:
  <option value="easy">Easy</option>
  <option value="medium">Medium</option>
   <option value="hard">Hard</option>
</select>
  <input type="submit" value="Submit">Create challenge</input>
</form>
</>
	)
}

export default CreateForm;