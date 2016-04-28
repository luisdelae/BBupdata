# BBupdata

http://blooming-beyond-90461.herokuapp.com/

This app is an individual capstone project.
Time to complete scope and application: 2 weeks.

# Scope of Work Feature Details

This application will serve as a means to organize and stay up-to-date with BeachBody contact statuses and follow-up dates by sending reminders to The Client.

The Client will be able to add contacts and update their 5 different statuses: Like/Comment, Started Convo, Invite, Challenger, and Do Not Contact. The Client will also be able to add more information about each contact in each contact’s info page. This information includes Name, Family, Occupation, Goals, Struggles, and Notes. There will be no delete feature for contacts, as requested.

Further, The Client will be able to add reminders for follow-ups for each contact. These reminders will be created as events in a calendar. Reminders for each contact should be viewable under their respective infomation page.

# Features

LOG IN SCREEN

When visiting the site, user will be able to log in using Google Authentication


CONTACT LIST

Contact list containing clickable names
On click, should take to clicked contact’s info page
Each contact has 5 statuses/attributes that can be checked/unchecked (can be buttons/icons)
These buttons should correspond to statuses/attributes in contact info
Ability to search for a contact
Ability to sort by name and status/attribute
Ability to add new contact from this screen

CONTACT INFO

Can only be reached by clicking on a contact name on Contact List screen
Status/attribute icons that correspond to those on the Contact List screen
Should have Name, Occupation, Family, Goals, Struggles, and Notes fields.
All should be editable and saved
Remind Me button, which will popup a window that prompts for a date and description. This will create a calendar event
Title should be Name of contact + follow-up description
Upcoming follow-ups button to be able to view what events are tied to this contact.

CALENDAR

Shows all events for the user that is logged in
Color of event should change depending on whether or not the task has been test to complete

UPDATES AND FIXES

4/19/2016
- Calendar now includes last names of contacts.
- Changed "undefined" to "No subject" if user does not input a subject for the reminder.
- When adding a contact, autofocus is set to the name text box.
- When adding a contact, can now hit enter to submit the new contact.

4/25/2016
- When adding contact, also able to click to submit new contact
- Able to change between day, week, month views in calendar
- In calendar, able to click event and it will take user to client info page

4/26/2016
- Added new status of PENDING. This status can be used when waiting on client for future date or response.
- Removed some unnecessary code in preparation for future code clean up.

4/27/2016
- Changed "Never Contact" to "Discontinue".
- Changed "Date Added" to "Added".
- Changed date format for Added column to MM/dd/yy
- Added form validation for adding new contact. Button is disabled until at least 2 characters are inputted in the text box.
- Added feature to remove a reminder from a contact, as a trash can icon, with confirmation.
