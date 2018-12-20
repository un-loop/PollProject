# Project Assignment: Polling App

## Background

<p>We have an important event coming up. There will be a lot of technical people at this event, both employers and job seekers. We would like to get a sense of what technologies people are using in the field, so we get a better idea of what technologies we want to teach and use at XYZ Univeristy. We love web development, so let's create a web app to do this!</p>

## Your Assignment
<p>Create a web app to use for a poll.</>

**User**
<p>We don't think that the general population will be interested in our poll, so your user will be Professor Smith from XYZ University who will be having conversations with event attendees. She will be entering the poll responses into the app.</p>

**Requirements**
<p>Professor Smith sat down with us last week and told us a little about what she is looking for. Let us relate to you now what she said. She wants to be able to talk to attendees and ask what technologies they use to manipulate the [Document Object Model](https://www.w3.org/TR/1998/WD-DOM-19980720/introduction.html).
</p>


Lucky for us, her department has a private VPN, so we don't need to worry about securing the app.


bounus:



Develop an application to conduct a poll. The application should allow for the addition of categories, and each of those categories will have a count. For example: the user may want to conduct a poll to count which technologies are in use at a convention. The user needs to be able to have a pre-populated list of technologies, (like "React", "Javascript", "Node"), but also be able to add new technologies at any time. These technologies should display in a list and include a count of how many people polled use that technology. The pollster should be able to increment or decrement the count for a given technology, or remove the category entirely. The counter should not allow a decrement below zero, and any removal of a technology that has a non-zero value should display a confirmation prompt before deleting. The list of categories should display in a sorted alphabetical order (case-insensitive). The poll app should contain a filter option. When the filter toggle is on, the ability to add new category is disabled. The input box then becomes a live case-insensitive filter of technologies that begin with the text input into the filter. The items shown should still be able to be incremented/decremented/removed. If there are no items that match the filter, a message should be shown in place of the list that no items match. While the filter is active, a "clear" button is presented to clear the filter and resume normal functionality. All data is persisted in a DB.
