let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetdone: 0,

    addMeeting: function (num) {           //method: member function
        this.meetings = this.meetings + num

    },

    summary: function () {
        return `you have ${this.meetings} meetings today`
    },

    reset: function () {
        this.meetings = 0;
        this.meetdone = 0;
        return `you had ${this.meetings} meetings and you done ${this.meetdone} meetings.`

    }
}

/*How to access data membes and member functions:
myTodos.day
myTodos.addMeeting()*/


myTodos.addMeeting(4)
console.log(myTodos.summary());
console.log(myTodos.reset());

//you have 4 meetings today
//you had 0 meetings and you done 0 meetings.
