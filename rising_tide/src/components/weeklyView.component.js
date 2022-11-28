//WEEKLY VIEW

import React, { Component } from 'react';
import seashell from '../Assets/shell.PNG';
import {addJournalPost,getHabitPost,getJournalPost} from "../features/RequestUserData"

//Stores a random number for random shell rotation
let randomNumber;
//Stores the style string for each rotation
let rotateStrings = [];

//Holds current journal for submission
let currentJournal;
let journalDay;

//Starts list of days from today on moves on from there
//Keeps track of the day of the week
let dayOfTheWeek = new Date().getDate();
let weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let last7Days=[]

//GLOBAL VARIABLES THAT WE FILL WITH DATABASE INFORMATION
let mood = "no mood";
let habits = "no habits";
let dailyAffirmation = "no daily affirmation";

//Finds the last 7 days, turns it into an object and pushes it to an array to be used in the onEditPage functions
for(let i = 0; i < 8; i++){
    let date = new Date();
    date.setDate(date.getDate() - i)
    
    let last7DaysObject = {
        day: date.getDate(), 
        month: date.getMonth() + 1,
        year: date.getFullYear()
    }
    last7Days.push(last7DaysObject);
}

//Allows for random rotating of the shells so they don't look so boring
for(let i = 0; i < 8; i++){

    //Generates random number between 0 and 70
    randomNumber = Math.floor(Math.random() * (70 + 1));

    //Subtracts 35 so the degree of rotation is between -35 and +35
    randomNumber -= 35;

    //Creates the style string for the rotation
    rotateStrings[i] = "rotate(" + randomNumber + "deg)";
}

//1 is for today, 2 is for yesterday, 3 is for the day before yesterday, etc
const onEditPage1 = async event => {

    //Variable for the journal day so the submission function can get it
    journalDay = last7Days[0];

    //comment to silence warnings but uncomment when you start coding
    let weeklyViewPage = document.getElementById("weeklyView");
    let weeklyViewEditPage = document.getElementById("weeklyViewEditPage");
    
    //Sets date chosen
    let loadDate = last7Days[0];

    //Debug view date
    console.log(loadDate);

//COPY PASTE ALL CODE PAST THIS POINT IN THIS FUNCTION TO THE OTHER onEditPage functions once it works

    //Grabs journal from the database
    let journal = await getJournalPost(loadDate);

    //Sets the journal to a variable that the submission function can grab
    currentJournal = journal;

        //If the journal isnt empty we switch to the journal view
        if(journal){

            console.log("Switching views...");

            //GENERATE HABITS STRING HERE. HERE'S SOME PSEUDO CODE/REAL CODE

            //Grabs array of habits from server(ask for more details on the function from backend if this doesn't work though it should)
            let habitString = await getHabitPost(loadDate);

            //sets mood to journal mood
            mood = journal.mood;

            //Sets habits to the habits string we made from the journal habits
            habits = habitString;

            //sets daily affirmation to journal text
            dailyAffirmation = journal.freeResponse;

            //Switches to the journal view 
            weeklyViewPage.setAttribute("hidden", true);
            weeklyViewEditPage.removeAttribute("hidden"); 

            //Loads journal page with the information given
            loadJournalEditPage();

        }
        //else we load a default journal for editing if the user desires
        else {
                //Switches to the journal view 
                weeklyViewPage.setAttribute("hidden", true);
                weeklyViewEditPage.removeAttribute("hidden"); 

                //Loads journal page with default values
                loadJournalEditPage();
        }
   //END COPY PASTE
}

const onEditPage2 = async event => {

    //Variable for the journal day so the submission function can get it
    journalDay = last7Days[1];

    //comment to silence warnings but uncomment when you start coding
    let weeklyViewPage = document.getElementById("weeklyView");
    let weeklyViewEditPage = document.getElementById("weeklyViewEditPage");

    //Sets date chosen
    let loadDate = last7Days[1];

    //Debug view date
    console.log(loadDate);

    //Grabs journal from the database
    let journal = await getJournalPost(loadDate);

    //Sets the journal to a variable that the submission function can grab
    currentJournal = journal;

        //If the journal isnt empty we switch to the journal view
        if(journal){

            console.log("Switching views...");

            //GENERATE HABITS STRING HERE. HERE'S SOME PSEUDO CODE/REAL CODE

            //Grabs array of habits from server(ask for more details on the function from backend if this doesn't work though it should)
            let habitString = await getHabitPost(loadDate);

            //sets mood to journal mood
            mood = journal.mood;

            //Sets habits to the habits string we made from the journal habits
            habits = habitString;

            //sets daily affirmation to journal text
            dailyAffirmation = journal.freeResponse;

            //Switches to the journal view 
            weeklyViewPage.setAttribute("hidden", true);
            weeklyViewEditPage.removeAttribute("hidden"); 

            //Loads journal page with the information given
            loadJournalEditPage();

        }
        //else we load a default journal for editing if the user desires
        else {
                //Switches to the journal view 
                weeklyViewPage.setAttribute("hidden", true);
                weeklyViewEditPage.removeAttribute("hidden"); 

                //Loads journal page with default values
                loadJournalEditPage();
        }

}

const onEditPage3 = async event => {

    //Variable for the journal day so the submission function can get it
    journalDay = last7Days[2];

    //comment out to silence warnings but uncomment when you start coding
    let weeklyViewPage = document.getElementById("weeklyView");
    let weeklyViewEditPage = document.getElementById("weeklyViewEditPage");
    

    //Sets date chosen
    let loadDate = last7Days[2];

    //Debug view date
    console.log(loadDate);

    //Grabs journal from the database
    let journal = await getJournalPost(loadDate);

    //Sets the journal to a variable that the submission function can grab
    currentJournal = journal;

        //If the journal isnt empty we switch to the journal view
        if(journal){

            console.log("Switching views...");

            //GENERATE HABITS STRING HERE. HERE'S SOME PSEUDO CODE/REAL CODE

            //Grabs array of habits from server(ask for more details on the function from backend if this doesn't work though it should)
            let habitString = await getHabitPost(loadDate);

            //sets mood to journal mood
            mood = journal.mood;

            //Sets habits to the habits string we made from the journal habits
            habits = habitString;

            //sets daily affirmation to journal text
            dailyAffirmation = journal.freeResponse;

            //Switches to the journal view 
            weeklyViewPage.setAttribute("hidden", true);
            weeklyViewEditPage.removeAttribute("hidden"); 

            //Loads journal page with the information given
            loadJournalEditPage();

        }
        //else we load a default journal for editing if the user desires
        else {
                //Switches to the journal view 
                weeklyViewPage.setAttribute("hidden", true);
                weeklyViewEditPage.removeAttribute("hidden"); 

                //Loads journal page with default values
                loadJournalEditPage();
        }
}

const onEditPage4 = async event => {

    //Variable for the journal day so the submission function can get it
    journalDay = last7Days[3];

    //comment out to silence warnings but uncomment when you start coding
    let weeklyViewPage = document.getElementById("weeklyView");
    let weeklyViewEditPage = document.getElementById("weeklyViewEditPage");
    

    //Sets date chosen
    let loadDate = last7Days[3];

    //Debug view date
    console.log(loadDate);

    //Grabs journal from the database
    let journal = await getJournalPost(loadDate);

    //Sets the journal to a variable that the submission function can grab
    currentJournal = journal;

        //If the journal isnt empty we switch to the journal view
        if(journal){

            console.log("Switching views...");

            //GENERATE HABITS STRING HERE. HERE'S SOME PSEUDO CODE/REAL CODE

            //Grabs array of habits from server(ask for more details on the function from backend if this doesn't work though it should)
            let habitString = await getHabitPost(loadDate);

            //sets mood to journal mood
            mood = journal.mood;

            //Sets habits to the habits string we made from the journal habits
            habits = habitString;

            //sets daily affirmation to journal text
            dailyAffirmation = journal.freeResponse;

            //Switches to the journal view 
            weeklyViewPage.setAttribute("hidden", true);
            weeklyViewEditPage.removeAttribute("hidden"); 

            //Loads journal page with the information given
            loadJournalEditPage();

        }
        //else we load a default journal for editing if the user desires
        else {
                //Switches to the journal view 
                weeklyViewPage.setAttribute("hidden", true);
                weeklyViewEditPage.removeAttribute("hidden"); 

                //Loads journal page with default values
                loadJournalEditPage();
        }
}

const onEditPage5 = async event => {

    //Variable for the journal day so the submission function can get it
    journalDay = last7Days[4];

    //comment out to silence warnings but uncomment when you start coding
    let weeklyViewPage = document.getElementById("weeklyView");
    let weeklyViewEditPage = document.getElementById("weeklyViewEditPage");
    

    //Sets date chosen
    let loadDate = last7Days[4];

    //Debug view date
    console.log(loadDate);

    //Grabs journal from the database
    let journal = await getJournalPost(loadDate);

    //Sets the journal to a variable that the submission function can grab
    currentJournal = journal;

        //If the journal isnt empty we switch to the journal view
        if(journal){

            console.log("Switching views...");

            //GENERATE HABITS STRING HERE. HERE'S SOME PSEUDO CODE/REAL CODE

            //Grabs array of habits from server(ask for more details on the function from backend if this doesn't work though it should)
            let habitString = await getHabitPost(loadDate);

            //sets mood to journal mood
            mood = journal.mood;

            //Sets habits to the habits string we made from the journal habits
            habits = habitString;

            //sets daily affirmation to journal text
            dailyAffirmation = journal.freeResponse;

            //Switches to the journal view 
            weeklyViewPage.setAttribute("hidden", true);
            weeklyViewEditPage.removeAttribute("hidden"); 

            //Loads journal page with the information given
            loadJournalEditPage();

        }
        //else we load a default journal for editing if the user desires
        else {
                //Switches to the journal view 
                weeklyViewPage.setAttribute("hidden", true);
                weeklyViewEditPage.removeAttribute("hidden"); 

                //Loads journal page with default values
                loadJournalEditPage();
        }
}

const onEditPage6 = async event => {

    //Variable for the journal day so the submission function can get it
    journalDay = last7Days[5];

    //comment out to silence warnings but uncomment when you start coding
    let weeklyViewPage = document.getElementById("weeklyView");
    let weeklyViewEditPage = document.getElementById("weeklyViewEditPage");
    

    //Sets date chosen
    let loadDate = last7Days[5];

    //Debug view date
    console.log(loadDate);

    //Grabs journal from the database
    let journal = await getJournalPost(loadDate);

    //Sets the journal to a variable that the submission function can grab
    currentJournal = journal;

        //If the journal isnt empty we switch to the journal view
        if(journal){

            console.log("Switching views...");

            //GENERATE HABITS STRING HERE. HERE'S SOME PSEUDO CODE/REAL CODE

            //Grabs array of habits from server(ask for more details on the function from backend if this doesn't work though it should)
            let habitString = await getHabitPost(loadDate);

            //sets mood to journal mood
            mood = journal.mood;

            //Sets habits to the habits string we made from the journal habits
            habits = habitString;

            //sets daily affirmation to journal text
            dailyAffirmation = journal.freeResponse;

            //Switches to the journal view 
            weeklyViewPage.setAttribute("hidden", true);
            weeklyViewEditPage.removeAttribute("hidden"); 

            //Loads journal page with the information given
            loadJournalEditPage();

        }
        //else we load a default journal for editing if the user desires
        else {
                //Switches to the journal view 
                weeklyViewPage.setAttribute("hidden", true);
                weeklyViewEditPage.removeAttribute("hidden"); 

                //Loads journal page with default values
                loadJournalEditPage();
        }

}

const onEditPage7 = async event => {

    //Variable for the journal day so the submission function can get it
    journalDay = last7Days[6];

    //comment out to silence warnings but uncomment when you start coding
    let weeklyViewPage = document.getElementById("weeklyView");
    let weeklyViewEditPage = document.getElementById("weeklyViewEditPage");
    

    //Sets date chosen
    let loadDate = last7Days[6]

    //Debug view date
    console.log(loadDate);

    //Grabs journal from the database
    let journal = await getJournalPost(loadDate);

    //Sets the journal to a variable that the submission function can grab
    currentJournal = journal;

        //If the journal isnt empty we switch to the journal view
        if(journal){

            console.log("Switching views...");

            //GENERATE HABITS STRING HERE. HERE'S SOME PSEUDO CODE/REAL CODE

            //Grabs array of habits from server(ask for more details on the function from backend if this doesn't work though it should)
            let habitString = await getHabitPost(loadDate);

            //sets mood to journal mood
            mood = journal.mood;

            //Sets habits to the habits string we made from the journal habits
            habits = habitString;

            //sets daily affirmation to journal text
            dailyAffirmation = journal.freeResponse;

            //Switches to the journal view 
            weeklyViewPage.setAttribute("hidden", true);
            weeklyViewEditPage.removeAttribute("hidden"); 

            //Loads journal page with the information given
            loadJournalEditPage();

        }
        //else we load a default journal for editing if the user desires
        else {
                //Switches to the journal view 
                weeklyViewPage.setAttribute("hidden", true);
                weeklyViewEditPage.removeAttribute("hidden"); 

                //Loads journal page with default values
                loadJournalEditPage();
        }
}

const onEditPage8 = async event => {

    //Variable for the journal day so the submission function can get it
    journalDay = last7Days[7];

    //comment out to silence warnings but uncomment when you start coding
    let weeklyViewPage = document.getElementById("weeklyView");
    let weeklyViewEditPage = document.getElementById("weeklyViewEditPage");
    

    //Sets date chosen
    let loadDate = last7Days[7];

    //Debug view date
    console.log(loadDate);

    //Grabs journal from the database
    let journal = await getJournalPost(loadDate);

    //Sets the journal to a variable that the submission function can grab
    currentJournal = journal;

        //If the journal isnt empty we switch to the journal view
        if(journal){

            console.log("Switching views...");

            //GENERATE HABITS STRING HERE. HERE'S SOME PSEUDO CODE/REAL CODE

            //Grabs array of habits from server(ask for more details on the function from backend if this doesn't work though it should)
            let habitString = await getHabitPost(loadDate);

            //sets mood to journal mood
            mood = journal.mood;

            //Sets habits to the habits string we made from the journal habits
            habits = habitString;

            //sets daily affirmation to journal text
            dailyAffirmation = journal.freeResponse;

            //Switches to the journal view 
            weeklyViewPage.setAttribute("hidden", true);
            weeklyViewEditPage.removeAttribute("hidden"); 

            //Loads journal page with the information given
            loadJournalEditPage();

        }
        //else we load a default journal for editing if the user desires
        else {
                //Switches to the journal view 
                weeklyViewPage.setAttribute("hidden", true);
                weeklyViewEditPage.removeAttribute("hidden"); 

                //Loads journal page with default values
                loadJournalEditPage();
        }

}

let loadJournalEditPage = function(){
    let displayMood = document.getElementById("displayMood");
    let displayHabits = document.getElementById("displayHabits");
    let displayTextInput = document.getElementById("displayTextInput");
    let capitalizedMood = mood.charAt(0).toUpperCase() + mood.slice(1);
    displayMood.innerHTML = "<input type='text' id='weeklyViewMoodInput' value='" + capitalizedMood + "'></input>";
    displayHabits.innerHTML = habits;
    displayTextInput.innerHTML = "<textarea id ='weeklyViewTextArea'>" + dailyAffirmation + "</textarea>";
}

const onBackButton = event => {
    let weeklyViewPage = document.getElementById("weeklyView");
    let weeklyViewEditPage = document.getElementById("weeklyViewEditPage");
    weeklyViewEditPage.setAttribute("hidden", true);
    weeklyViewPage.removeAttribute("hidden"); 

    document.getElementById("weeklyViewHeader").innerHTML = "Weekly View";

    mood = "no mood";
    habits = "no habits";
    dailyAffirmation = "no daily affirmation";

}

const onSubmitJournalEdit = event => {
    //Grab page elements
    let weeklyViewPage = document.getElementById("weeklyView");
    let weeklyViewEditPage = document.getElementById("weeklyViewEditPage");

    //Gets the value of the textarea so it can be resubmitted
    let newJournalTextString = document.getElementById("weeklyViewTextArea").value;
    let newJournalMoodString = document.getElementById("weeklyViewMoodInput").value;

    //Removes non-ascii characters
    let nonAsciiInput = newJournalTextString.replaceAll(/[^\x00-\x7F]/g, '');
    let nonAsciiMood = newJournalMoodString.replaceAll(/[^\x00-\x7F]/g, '');
    console.log(nonAsciiInput);
    console.log(nonAsciiMood);

    
    //If current journal is not null
    if(currentJournal){
        //Updates the journal's free response and mood to the new ones
        currentJournal.freeResponse = nonAsciiInput;
        currentJournal.mood = nonAsciiMood;
        currentJournal.date={
            day:journalDay.day,
            month:journalDay.month,
            year:journalDay.year,
        }

        //Submits this journal again with the new data
        addJournalPost(currentJournal);
    }
    //else make a new journal
    else{
        let newJournal = {
            date:{
                day:journalDay.day,
                month:journalDay.month,
                year:journalDay.year,
            },
                
            freeResponse: nonAsciiInput,
                
            mood: nonAsciiMood
        }

        //Adds a new journal with the set values
         addJournalPost(newJournal);
    }
    

    //Switch back to the weekly view page
    weeklyViewEditPage.setAttribute("hidden", true);
    weeklyViewPage.removeAttribute("hidden"); 

    //Set globals back to dafault values
    mood = "no mood";
    habits = "no habits";
    dailyAffirmation = "no daily affirmation";

    //Show submitted to confirm submission
    document.getElementById("weeklyViewHeader").innerHTML = "Updated!";
}

export default class WeeklyView extends Component {

    render() {
        return(
            <div className="container" id="weeklyViewContainer">
               <center>
                    <h1 id = "weeklyViewHeader">
                        Weekly View
                    </h1>
                </center>
                <div id="weeklyView">
                    <center>
                        <table id="weeklyViewTable">
                            <tbody>
                                <tr>
                                    <td>
                                        <label htmlFor="day1Shell">
                                            Today
                                        </label>
                                    </td>
                                    <td className="weeklyViewTableBorder">
                                        <input class = "shellButton" onClick={onEditPage1} type="image" src={seashell} style={{transform: rotateStrings[0]}} alt="seashell"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            {weekDay[(dayOfTheWeek + 6) % 7]}
                                        </label>
                                    </td>
                                    <td className="weeklyViewTableBorder">
                                        <input class = "shellButton" onClick={onEditPage2} type="image" src={seashell} style={{transform: rotateStrings[1]}} alt="seashell"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            {weekDay[(dayOfTheWeek + 5) % 7]}
                                        </label>
                                    </td>
                                    <td className="weeklyViewTableBorder">
                                        <input class = "shellButton" onClick={onEditPage3} type="image" src={seashell} style={{transform: rotateStrings[2]}} alt="seashell"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            {weekDay[(dayOfTheWeek + 4) % 7]}
                                        </label>
                                    </td>
                                    <td className="weeklyViewTableBorder">
                                        <input class = "shellButton" onClick={onEditPage4} type="image" src={seashell} style={{transform: rotateStrings[3]}} alt="seashell"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            {weekDay[(dayOfTheWeek + 3) % 7]}
                                        </label>
                                    </td>
                                    <td className="weeklyViewTableBorder">
                                        <input class = "shellButton" onClick={onEditPage5} type="image" src={seashell} style={{transform: rotateStrings[4]}} alt="seashell"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            {weekDay[(dayOfTheWeek + 2) % 7]}
                                        </label>
                                    </td>
                                    <td className="weeklyViewTableBorder">
                                        <input class = "shellButton" onClick={onEditPage6} type="image" src={seashell} style={{transform: rotateStrings[5]}} alt="seashell"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            {weekDay[(dayOfTheWeek + 1) % 7]}
                                        </label>
                                    </td>
                                    <td className="weeklyViewTableBorder">
                                        <input class = "shellButton" onClick={onEditPage7} type="image" src={seashell} style={{transform: rotateStrings[6]}} alt="seashell"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            {weekDay[(dayOfTheWeek) % 7]}
                                        </label>
                                    </td>
                                    <td className="weeklyViewTableBorder">
                                        <input class = "shellButton" onClick={onEditPage8} type="image" src={seashell} style={{transform: rotateStrings[7]}} alt="seashell"/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </center>
                </div>
                <div id="weeklyViewEditPage" hidden>

                    <button type="button" onClick={onBackButton} id="weeklyViewBackBtn" className="btn btn-primary">Back</button>
                    <center>
                        <h3>Mood:</h3>
                        <p id="displayMood"></p>
                        <br></br>

                        <h3>Habits:</h3>
                        <p id="displayHabits"></p>
                        <br></br>

                        <h3>Self Reflection:</h3>
                        <p id="displayTextInput"></p>
                        <br></br>
                        <button type="button" onClick={onSubmitJournalEdit} id="weeklyViewEditJournalBtn" className="btn btn-primary">Edit Journal</button>
                    </center>
                </div>

            </div>

        )
    }
}