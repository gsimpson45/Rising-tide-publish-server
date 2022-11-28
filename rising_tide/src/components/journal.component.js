//JOURNAL PAGE

import React, { Component } from 'react';
import seashell from '../Assets/shell.PNG'
import happy from '../Assets/happy.PNG'
import ecstatic from '../Assets/ecstatic.PNG'
import excited from '../Assets/excited.PNG'
import sad from '../Assets/sad.PNG'
import depressed from '../Assets/depressed.PNG'
import hopeless from '../Assets/hopeless.PNG'
import mad from '../Assets/mad.PNG'
import angry from '../Assets/angry.PNG'
import disgusted from '../Assets/disgusted.PNG'
import {addHabitPost,addJournalPost} from "../features/RequestUserData"

//Value for if the habit input textbox is out or not
let textBoxUp = false;

//Creates array for habits (current habits should be loaded into this array from the database)
let habitsArray = [];

//Creates a date for this journal (should either be today or a day from the past week)
let day = new Date().getDate();
let month = new Date().getMonth()
month = month+1;
let year = new Date().getFullYear();

//False if not showing the delete buttons
let showingDeleteButtons = false;

//Temporary variables for the email and post commands
let email, emailString;


//Function for counting how many characters are left in the daily affirmation
const countChars = event => {

    //Value for an ! if the limit is reached
    let end = "";

    //If limit is reached color the text red and add a !
    if(event.target.value.length === 500)
    {
        document.getElementById("charactersLeft").style = "color: red";
        end = "!";
    }
    else{
        document.getElementById("charactersLeft").style = "color: black";
        end = "";
    }

    //Set up a string for the message counter # + "characters left" + optional !
    let val = 500-event.target.value.length;
    let string = " characters left";
    let fullString = val + string + end;

    //Display message
    document.getElementById("charactersLeft").innerHTML = fullString;
}

//Adds a new habit upon pressing the + button
const addHabit = event => {

    //Hides delete buttons
    if(showingDeleteButtons === true){
        showingDeleteButtons = false;
        let buttons = document.getElementsByClassName("deleteButton");
        let i;
        for (i = 0; i < buttons.length; i++) {
            buttons[i].setAttribute("hidden", true); 
        }
    }

    //Finds habit table element
    let habitTable = document.getElementById("habitTable");

    //Temporary row and cell variables
    let row;
    let cell;

    //Creates a habit object for the habit being added
    let habitObject = {
        activity: "",
        activated: false,
        isCompleted: false,
        completionDate:{
            day:0,
            month:0,
            year:0,
        }
    }

    //Saves ID for the habit
    let id;

    //Saves ID for delete buttons
    let deleteId;

    //Saves habit checkbox string for the table
    let habitHTMLString;

    //If the add habit textbox is not open, it will be opened so the user can add input
    if(textBoxUp === false){

        //The textbox row is now up
        textBoxUp = true;

        //creates a row
        row = habitTable.insertRow(1);

        //inserts a cell into the new row
        cell = row.insertCell(0);

        //Puts the textbox in the new row and focuses the user on the textbox
        cell.innerHTML = "<input type='text' id='newHabitInput' placeholder='Enter New Habit!' maxlength=50></input>";
        document.getElementById("newHabitInput").focus();
    }
    //Else the add habit textbox is already visible
    else{

        //Set textbox to invisible
        textBoxUp = false;

        //Finds the textbox and gets the user given input
        let newHabit = document.getElementById("newHabitInput").value;

        //If the textbox wasn't empty
        if(newHabit.length > 0){

            //Adds information to the habit object
            habitObject.activity = newHabit;
            habitObject.activated = true;

            //Pushes the new habit into the habit array
            habitsArray.push(habitObject);

            //Add a new row to the end of the table
            row = habitTable.insertRow(-1);
            row.id = "tableRow" + (habitTable.rows.length - 2);

            //Insert two cells into the row
            cell = row.insertCell(0);

            //Sets ID based on how many habits there are example: habit1, habit2....
            id="habit"
            id += (habitTable.rows.length - 2);

            //Sets delete button ID example delete1, delete2....
            deleteId = "delete" + (habitTable.rows.length - 2);

            //Sets up habit with the checkbox string
            habitHTMLString = "<button type='button' hidden class='deleteButton' id='"
            habitHTMLString += deleteId + "'>-</button><label class='habitText'htmlFor='";
            habitHTMLString += id + "'>";
            habitHTMLString +="<input type='checkbox' id='";
            habitHTMLString +=id + "'></input>"
            habitHTMLString += newHabit + "</label>";
    
            //The cell will have the text of the habit
            cell.innerHTML = habitHTMLString;
        }
        //Delete the textbox row because the user has added the habit now
        //Index 1 because index 0 is the header row with the button
        habitTable.deleteRow(1);
    }

}

//Hides or shows buttons if the delete button is pressed
const toggleDeleteButton = event => {
    if(showingDeleteButtons === false){
        let i;
        showingDeleteButtons=true;
        let buttons = document.getElementsByClassName("deleteButton");
        for (i = 0; i < buttons.length; i++) {
            buttons[i].removeAttribute("hidden"); 
        }
    }
    else{
        showingDeleteButtons = false;
        let buttons = document.getElementsByClassName("deleteButton");
        let i;
        for (i = 0; i < buttons.length; i++) {
            buttons[i].setAttribute("hidden", true); 
        }
    }
}

//Checks for checked and unchecked habits as you click them
const checkedHabit = event => {
    //Creates an index from the id of the habit. ex. habit1 becomes 0 for the first index of the array
    let index = event.target.id;

    //If the id has a number in it
    if(/\d/.test(index) && index.includes("habit")){

        //Remove 'habit' from the id and leave just the number
        index = index.replaceAll('habit', '');

        //Turn the string into a number
        index = Number(index);

        //Subtract 1 from our index
        index -= 1;

        //If it is now checked, set completion to true and add a date of completion
        if(event.target.checked){
            habitsArray[index].isCompleted = true;
            habitsArray[index].completionDate.day = day;
            habitsArray[index].completionDate.month = month;
            habitsArray[index].completionDate.year = year;

        }
        //If it is now unchecked, set completion to false and remove date of completion
        else{
            //0 means not completed
            habitsArray[index].isCompleted = false;
            habitsArray[index].completionDate.day = 0;
            habitsArray[index].completionDate.month = 0;
            habitsArray[index].completionDate.year = 0;
            
        }
    }
    else if(/\d/.test(index))
    {
        //Stores habit number and not the array index
        let habitNumber;

        //Remove 'delete' from the id and leave just the number
        index = index.replaceAll('delete', '');

        //Turn the string into a number
        index = Number(index);
        habitNumber = index;

        //Subtract 1 from our index
        index -= 1;

        //Sets habit to no longer active
        habitsArray[index].activated = false;

        //Hides the delete buttons after row deletion
        showingDeleteButtons = false;
        let buttons = document.getElementsByClassName("deleteButton");
        let i;
        for (i = 0; i < buttons.length; i++) {
            buttons[i].setAttribute("hidden", true); 
        }

        //Finds the habit row by id and hides it
        document.getElementById("tableRow" + habitNumber).setAttribute("hidden", true);

    }
}

//Temporary function to update email
const updateEmail = event => {
    email = document.getElementById("emailInput");
    emailString = "mailto:" + email.value;
}

export default class Journal extends Component {

    constructor(props){
        super(props);
        
        this.onChangeMood = this.onChangeMood.bind(this);
        this.onChangeHabit = this.onChangeHabit(this);
        this.onChangeDailyText = this.onChangeDailyText.bind(this);
        
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
			_id:"",//Username
			password:"",
			

			habit:habitsArray,
			
			date:{
				day:0,
				month:0,
				year:0,
			},
				
			freeResponse:"",
				
			mood:""
		}
    }
    
    onChangeMood = e =>{
        this.setState({
            mood: e.target.value
      });
      let shellImage = document.getElementById("seashellImg");
      switch (e.target.value) {
        case "neutral":
            shellImage.src = seashell;
            break;
        case "happy":
            shellImage.src = happy;
            break;
        case "ecstatic":
            shellImage.src = ecstatic;
            break;

        case "excited":
            shellImage.src = excited;
            break;

        case "sad":
            shellImage.src = sad;
            break;
        case "depressed":
            shellImage.src = depressed;
            break;

        case "hopeless":
            shellImage.src = hopeless;
            break;

        case "mad":
            shellImage.src = mad;
            break;

        case "angry":
            shellImage.src = angry;
            break;

        case "disgusted":
            shellImage.src = disgusted;
            break;

        default:
            shellImage.src = seashell;     
      }
    }

    onChangeHabit = e =>{
        this.setState({
            habit: habitsArray
      });

    }

    onChangeDailyText = e =>{

        let textAreaText = e.target.value;

        this.setState({
            freeResponse: textAreaText.replaceAll(/[^\x00-\x7F]/g, '')
            
      });
    }

    //SUBMITTING
    onSubmit(e) {
        email = document.getElementById("emailInput");

        if (window.confirm("Would you like to send an email with your journal entry? Select 'Cancel' if not.")) {
            console.log("sending email...");
          } else {
            //txt = "You pressed Cancel!";
            console.log("no email");
            e.preventDefault();
          }
        
        //Creates an array to store completed habits
        let completedHabits = [];
        for(let i = 0; i < habitsArray.length; i++){
            if(habitsArray[i].isCompleted === true)
            {
                completedHabits.push(habitsArray[i].activity);
            }
        }
        //Turns array into a string
        completedHabits = completedHabits.toString();

        //Sets the string to a hidden input value for email functionality
        let habitString = document.getElementById("completedHabitsString");
        habitString.value=completedHabits.replaceAll(',', ', ');

        let journal = {
            date:{
                day:day,
                month:month,
                year:year,
            },
            
            freeResponse: this.state.freeResponse,
            
            mood: this.state.mood
        }

        let habitList = this.state.habit;

        if(journal.freeResponse.length > 500)
        {
            console.log("journal is too long!")
            return;
        }
        console.log(journal);
        console.log(habitList);
        console.log(habitList.length);
        for(let i=0;i<habitList.length;i++)
            addHabitPost(habitList[i]);
        addJournalPost(journal);
        //Placeholder text change when form is submitted
        document.getElementById("journalHeader").innerHTML = "<center>Submitted!</center>"
        if(email.value===""){
            e.preventDefault();
            return;
        }
    }

    render() {
        return(
            <div className="container" id="container">
                <h1 className="journalHeader" id="journalHeader"> 
                    <center>
                        Rising Tide Bullet Journal
                    </center> 
                </h1>

                

                <form onSubmit={this.onSubmit} action={emailString} method="post" target="_blank" encType='text/plain'>
                <center><label>Enter Email</label></center>
                <center><input onInput={updateEmail} id="emailInput" type="email" required></input></center>
                    <div id="moodTrackingDiv">
                        <table id="moodTable">
                            <tbody>
                                <tr>
                                    <td>
                                        <center>
                                            <img id="seashellImg" src={seashell} height="200px" alt="seashell"/>
                                        </center>
                                    </td>
                                    <td>
                                        <center  onChange={this.onChangeMood}>
                                            <input type="radio" id="mtNeutral" name="moodTracker" value="neutral" className="moodTracker" img={seashell}></input>
                                            <label htmlFor="mtNeutral">Neutral</label><br/>

                                            <input type="radio" id="mtHappy" name="moodTracker" value="happy" className="moodTracker" img={happy}></input>
                                            <label htmlFor="mtHappy">Happy</label><br/>

                                            <input type="radio" id="mtEcstatic" name="moodTracker" value="ecstatic" className="moodTracker"></input>
                                            <label htmlFor="mtEcstatic">Ecstatic</label><br/>

                                            <input type="radio" id="mtExcited" name="moodTracker" value="excited" className="moodTracker"></input>
                                            <label htmlFor="mtExcited">Excited</label><br/>
                                            
                                            <input type="radio" id="mtSad" name="moodTracker" value="sad" className="moodTracker"></input>
                                            <label htmlFor="mtSad">Sad</label><br/>
                                        </center>
                                    </td>

                                    <td>
                                        <center  onChange={this.onChangeMood}>
                                            <input type="radio" id="mtDepressed" name="moodTracker" value="depressed" className="moodTracker"></input>
                                            <label htmlFor="mtDepressed">Depressed</label><br/>

                                            <input type="radio" id="mtHopeless" name="moodTracker" value="hopeless" className="moodTracker"></input>
                                            <label htmlFor="mtHopeless">Hopeless</label><br/>

                                            <input type="radio" id="mtMad" name="moodTracker" value="mad" className="moodTracker"></input>
                                            <label htmlFor="mtMad">Mad</label><br/>

                                            <input type="radio" id="mtAngry" name="moodTracker" value="angry" className="moodTracker"></input>
                                            <label htmlFor="mtAngry">Angry</label><br/>

                                            <input type="radio" id="mtDisgusted" name="moodTracker" value="disgusted" className="moodTracker"></input>
                                            <label htmlFor="mtDisgusted">Disgusted</label><br/>
                                        </center>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br/>
                        <div id="habitWidget">
                            <table id="habitTable">
                                <tbody onClick={checkedHabit}>
                                    <tr>
                                        <th>
                                            <button type="button" id="addHabitButton" onClick={addHabit}>+</button>
                                            <button type="button" id="deleteHabitButton" onClick={toggleDeleteButton}>-</button>
                                            <label id="habitsLabel">Habits</label>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    <br/>
                    <center>
                        <input hidden id = "completedHabitsString" type="text" name="completedHabits"></input>
                        <textarea required onInput={countChars} onChange={this.onChangeDailyText} placeholder="How was your day? How are you feeling?" maxLength={500} id="dailyAffText" name = "freeResponse" value={this.state.freeResponse}></textarea>
                        <p id="charactersLeft">500 characters left</p>
                    
                        <button type="submit" id="journalSubmitBtn" className="btn btn-primary">Submit</button>
                    
                    </center>
                </form>
            </div>
        )
    }
}