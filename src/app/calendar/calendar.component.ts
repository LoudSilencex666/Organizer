import { Component, OnInit } from '@angular/core';

const MONTH: string[] = [
    'Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'
]

var day: number[] = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
]

@Component({
    selector: 'calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css']
})



export class CalendarComponent implements OnInit {
// calendar vars
    
    calendar; 
    calendarFakeArray;
    calendarFirstDay; 
    calendarDay; 
    calendarWeek; 
    calendarMonth;
    calendarYear; 
    calendarMonthNames;
    calendarWeekDaySkip; 

// calendarToday vars 

    calendarForToday;
    calendarToday;
    calendarMonthForToday;
    calendarYearForToday;
    calendarAfterToday;
    calendarBeforeToday;
    calendarDayForToday;
    calendarEmptyDay;
    calendarEmptyDayArray;

// events vars
    
    selectedDay;
    selectedDayVal;

    onSelectDayEvent() {
        this.selectedDay = !this.selectedDay;
    }
    
    calendarFunction() {
        this.calendar = new Date();
        this.calendarFakeArray = [];
        this.calendarFirstDay = this.calendar.setDate(1);
        this.calendarDay = this.calendar.getDate();
        this.calendarWeek = this.calendar.getDay();
        this.calendarMonth = this.calendar.getMonth();
        this.calendarYear = this.calendar.getFullYear();

        this.calendarMonthNames = MONTH;

        this.calendarForToday = new Date();
        this.calendarToday = this.calendarForToday.getDate();
        this.calendarMonthForToday = this.calendarForToday.getMonth();
        this.calendarYearForToday = this.calendarForToday.getFullYear();
        this.calendarDayForToday = this.calendarFakeArray.concat(day);
        

        if(this.calendarWeek == 0) {
            this.calendarWeek = 7;
        } else if(this.calendarWeek == 1) {
            this.calendarWeekDaySkip = [];
        } else {
            this.calendarWeek = this.calendarWeek;
        }

        if(this.calendarMonth == this.calendarMonthForToday && this.calendarYear == this.calendarYearForToday) {
            this.calendarAfterToday = 1;
        } else {
            this.calendarAfterToday = 0;
        }

        if(this.calendarMonth >= this.calendarMonthForToday && this.calendarYear >= this.calendarYearForToday || this.calendarYear < this.calendarYearForToday) {
            this.calendarBeforeToday = 1;
        } else {
            this.calendarBeforeToday = 0;
        }

        this.calendarWeekDaySkip = new Array(this.calendarWeek);
       
        

     

        this.fuckingLutyTyDebilu();

        this.calendarEmptyDay = 7 - (this.calendarWeekDaySkip.length - 1 + this.calendarDayForToday.length) % 7;
        if (this.calendarEmptyDay == 7) {
            this.calendarEmptyDay = 0;
        }
        this.calendarEmptyDayArray = new Array(this.calendarEmptyDay);

           console.log(this.calendarDayForToday.length);
        console.log(this.calendarWeekDaySkip.length);
    }

 
 // funkcje odejmowania / dodawania miesięcy

    minusMon() {

        if(this.calendarMonth == 0) {
            this.calendarYear--;
            this.calendar.setFullYear(this.calendarYear);
            this.calendar.setMonth(11);
            this.calendarMonth = 12;
        }
        this.calendarMonth --;
        this.calendar.setMonth(this.calendarMonth);
        
        this.calendarWeek = this.calendar.getDay();
        
        if(this.calendarWeek == 0) {
            this.calendarWeek = 7;
        } else if(this.calendarWeek == 1) {
            this.calendarWeekDaySkip = [];
        } else {
            this.calendarWeek = this.calendarWeek;
        }
        this.calendarDayForToday = this.calendarFakeArray.concat(day);
        this.calendarWeekDaySkip = new Array(this.calendarWeek);
        
        if(this.calendarMonth == this.calendarMonthForToday && this.calendarYear == this.calendarYearForToday) {
            this.calendarAfterToday = 1;
        } else {
            this.calendarAfterToday = 0;
        }

        if(this.calendarMonth <= this.calendarMonthForToday && this.calendarYear <= this.calendarYearForToday || this.calendarYear < this.calendarYearForToday) {
            this.calendarBeforeToday = 1;
        } else {
            this.calendarBeforeToday = 0;
        }

        

      
        
        this.fuckingLutyTyDebilu();

        this.calendarEmptyDay = 7 - (this.calendarWeekDaySkip.length - 1 + this.calendarDayForToday.length) % 7;

        if (this.calendarEmptyDay == 7) {
            this.calendarEmptyDay = 0;
        }

        this.calendarEmptyDayArray = new Array(this.calendarEmptyDay);

          console.log(this.calendarDayForToday.length);
        console.log(this.calendarWeekDaySkip.length);
    }

    plusMon() {
        if(this.calendarMonth == 11) {
           this.calendarYear++;
            this.calendar.setFullYear(this.calendarYear);
            this.calendar.setMonth(0);
            this.calendarMonth = -1;
        }

        this.calendarMonth ++;
        this.calendar.setMonth(this.calendarMonth );
        
        this.calendarWeek = this.calendar.getDay();
        
        if(this.calendarWeek == 0) {
            this.calendarWeek = 7;
        } else if(this.calendarWeek == 1) {
            this.calendarWeekDaySkip = [];
        } else {
            this.calendarWeek = this.calendarWeek;
        }
        this.calendarDayForToday = this.calendarFakeArray.concat(day);
        this.calendarWeekDaySkip = new Array(this.calendarWeek);
        
        if(this.calendarMonth == this.calendarMonthForToday && this.calendarYear == this.calendarYearForToday) {
            this.calendarAfterToday = 1;
        } else {
            this.calendarAfterToday = 0;
        }

        if(this.calendarMonth <= this.calendarMonthForToday && this.calendarYear <= this.calendarYearForToday || this.calendarYear < this.calendarYearForToday) {
            this.calendarBeforeToday = 1;
        } else {
            this.calendarBeforeToday = 0;
        }

        

        

        this.fuckingLutyTyDebilu();    

        this.calendarEmptyDay = 7 - (this.calendarWeekDaySkip.length - 1 + this.calendarDayForToday.length) % 7;
        if (this.calendarEmptyDay == 7) {
            this.calendarEmptyDay = 0;
        }
        this.calendarEmptyDayArray = new Array(this.calendarEmptyDay); 

        console.log(this.calendarDayForToday.length);
        console.log(this.calendarWeekDaySkip.length);
    }

    fuckingLutyTyDebilu() {
        if(this.calendarYear % 4 == 0) {
            if(this.calendarMonth == 0) {
                this.calendarDayForToday.splice(31, 0);
            }

            if(this.calendarMonth == 1) {
                this.calendarDayForToday.splice(29, 2);
            }

            if(this.calendarMonth == 2) {
                this.calendarDayForToday.splice(31, 0);
            }

            if(this.calendarMonth == 3) {
                this.calendarDayForToday.splice(30, 1);
            }

            if(this.calendarMonth == 4) {
                this.calendarDayForToday.splice(31, 0);
            }

            if(this.calendarMonth == 5) {
                this.calendarDayForToday.splice(30, 1);
            }

            if(this.calendarMonth == 6) {
                this.calendarDayForToday.splice(31, 0);
            }

            if(this.calendarMonth == 7) {
                this.calendarDayForToday.splice(31, 0);
            }

            if(this.calendarMonth == 8) {
                this.calendarDayForToday.splice(30, 1);
            }

            if(this.calendarMonth == 9) {
                this.calendarDayForToday.splice(31, 0);
            }

            if(this.calendarMonth == 10) {
                this.calendarDayForToday.splice(30, 1);
            }

            if(this.calendarMonth == 11) {
                this.calendarDayForToday.splice(31, 0);
            }
        
    } else {
            
            if(this.calendarMonth == 0) {
                this.calendarDayForToday.splice(31, 0);
            }

            if(this.calendarMonth == 1) {
                this.calendarDayForToday.splice(28, 3);
            }

            if(this.calendarMonth == 2) {
                this.calendarDayForToday.splice(31, 0);
            }

            if(this.calendarMonth == 3) {
                this.calendarDayForToday.splice(30, 1);
            }

            if(this.calendarMonth == 4) {
                this.calendarDayForToday.splice(31, 0);
            }

            if(this.calendarMonth == 5) {
                this.calendarDayForToday.splice(30, 1);
            }

            if(this.calendarMonth == 6) {
                this.calendarDayForToday.splice(31, 0);
            }

            if(this.calendarMonth == 7) {
                this.calendarDayForToday.splice(31, 0);
            }

            if(this.calendarMonth == 8) {
                this.calendarDayForToday.splice(30, 1);
            }

            if(this.calendarMonth == 9) {
                this.calendarDayForToday.splice(31, 0);
            }

            if(this.calendarMonth == 10) {
                this.calendarDayForToday.splice(30, 1);
            }

            if(this.calendarMonth == 11) {
                this.calendarDayForToday.splice(31, 0);
            }
        }
    }
    
    ngOnInit() {
       this.calendarFunction();  
       this.selectedDay = false;
    }
 }
   