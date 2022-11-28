import React, { Component }from 'react';


export default class SignIn extends Component {
    render() {
        return(
            <div className="container" id="container">
                <center>
                    <h1 id="helpPageHeader">
                        Help Page
                    </h1>
                </center>
                    <div className="helpDiv">
                        <h3>Logging in or Signing Up</h3>
                        <p>Log in or sign up with the buttons in the Account dropdown in the navigation bar above.</p>
                    </div>
                    <div class="helpDiv">
                        <h3>Creating a Journal</h3>
                        <p>There are three sections to your journal:</p>
                            <p className="indented"><strong>Mood Section:</strong> This section allows you to select a mood for the day. Click on one to select your mood. Don't like the mood selection? You can type in your exact mood in the weekly view page!</p>
                            <p className="indented"><strong>Habits Section:</strong> This section allows you record what you do daily. You can add and delete habits at any time with the "+" or "-" widget buttons. Check them to indicate that you have completed the daily habit.</p>
                            <p className="indented"><strong>Self-Reflection Section:</strong> This section allows you write anything you want. Write about your day, or what you've accomplished to keep track of your life in this journal!</p>
                    </div>
                    <div class="helpDiv">
                        <h3>View Past Journals</h3>
                        <p>Click "Weekly View" on the navigation bar above to review and edit your week's journals</p>
                            <p className="indented">From the weekly view, you may click on any shell from a day of the week to review or edit it.</p>
                            <p>To see journal past 7 days ago, Click on "Archive Page" in the navigation bar above.</p>
                            <p className="indented">The archive page will allow you to see all journals made between the two dates given. Put in two dates and the page will show all journals made in that time.</p>
                    </div>
                    <div className="helpDiv">
                        <h3>Logging out</h3>
                        <p>Log out with the "Log out" button in the Account dropdown in the navigation bar above.</p>
                    </div>
                    <div className="helpDiv">
                        <h3>Printing Journals as a PDF</h3>
                        <p>You can print past journal entries using the archive page! </p>
                            <p className="indented">Simply generate your journal list page by entering two dates and clicking the "submit" button.</p>
                            <p className="indented"> When your journal list page loads, right click the page, and select "Print..."</p>
                            <p className="indented">From there, you can click save and your PDF will download.</p>
                    </div>
            </div>

        )
    }

}