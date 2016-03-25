# BBupdata

http://blooming-beyond-90461.herokuapp.com/

This app is an individual capstone project.

# Scope of Work Feature Details

This application will serve as a means to organize and stay up-to-date with BeachBody contact statuses and follow-up dates by sending reminders to The Client.

The Client will be able to add contacts and update their 5 different statuses: Like/Comment, Started Convo, Invite, Challenger, and Do Not Contact. The Client will also be able to add more information about each contact in each contact’s info page. This information includes Name, Family, Occupation, Goals, Struggles, and Notes. There will be no delete feature for contacts, as requested.

Further, The Client will be able to add reminders for follow-ups for each contact. These reminders will be created as events in The Client’s Google Calendar. Reminders will be sent out on the day the event is due, at 8 AM. If time allows, The Client will be able to modify and delete these events from the contact info page.

The calendar view will be a Google Calendar that shows any upcoming events tagged in The Client’s Google account. If time allows, The Client will be able to add, modify, and delete follow-up reminders from this page.

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
