# Project Assignment: Polling App

## Background

We have an important event coming up. There will be a lot of technical people at this event, both employers and job seekers. We would like to get a sense of what technologies people are using in the field, so we get a better idea of what technologies we want to teach and use at XYZ Univeristy. We love web development, so let's create a web app to do this!

## Your Assignment

Create a web app to use for a poll.

**User**

We don't think that the general population will be interested in our poll, so your user will be Professor Smith from XYZ University who will be having conversations with event attendees. She will be entering the poll responses into the app.

**Requirements**

Professor Smith sat down with us last week and told us a little about what she is looking for. Let us relate to you now what she said. She wants to be able to talk to attendees and ask what technologies they use to manipulate the [Document Object Model](https://www.w3.org/TR/1998/WD-DOM-19980720/introduction.html). In particular, she wants to compare usage of HTML DOM, JQuery, Angular, and React. We asked her how she would like to compare usage. She told us that a simple count of attendees using each method will suffice. She wants the data to persist, so that she can come back to it later.

**Implementation**

We use React, so let's create a React application. It sounds like we need a list of technologies, and we want to be able to increment a counter for each technology. We know it is easy to make mistakes, so let's add the ability to decrement, too. Keep in mind, there can never be a negative count, so let's be sure to not allow a decrement below 0. [MLab](https://mlab.com/) is a good choice for MongoDB hosting, but feel free to use the provider and DB of your choice.

**styling bonus**: You can try using [plus circle](https://fontawesome.com/icons/plus-circle?style=solid) and [minus circle](https://fontawesome.com/icons/minus-circle?style=solid) icons from [font-awesome](https://fontawesome.com/start) for some nice icons for the increment and decrement. If you have another icon solution you like (glyphicons, material-ui), feel free to try that instead.

[Let us know](https://github.com/un-loop/PollProject/blob/master/instructions/PART2.md) when you are finished.

# Notes

Your task will involve modifying your fork of the PollProject repository. If you take a look at the existing code, you will see that it is a simple app to show a list of cats and add cats to the list. You can start your app via
```
npm start
```

to start listening on port 3000. Browse to http://localhost:3000 to view the app an you should see something like:

npm start
debugging


## Project Structure



