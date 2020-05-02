let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetdone: 0,

    addMeeting: function (num) {           //method: member function
        this.meetings = this.meetings + num

    },

    summary: function () {
        return `you have ${this.meetings} meetings today`
    }
}

/*How to access data membes and member functions:
myTodos.day
myTodos.addMeeting()*/


myTodos.addMeeting(4)
console.log(myTodos.summary());

//Assignment
//Handle meeting done
//create a function that can reset entire day.0





