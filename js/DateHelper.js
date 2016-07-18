export default class DateHelper{

  static getWeeksOfMonth(day){
    var firstDay = new Date(day.setDate(1)).getDay();
    var totalDays = new Date(day.getFullYear(), day.getMonth() + 1, 0).getDate();
    return Math.ceil((firstDay + totalDays) / 7);
  }

  static getWeekArray(month, year, weekNumber){
    var day = new Date(year, month, 1);
    var weeksOfMonth = this.getWeeksOfMonth(day);
    var startDay = day.getDay();
    var daysInMonth = new Date(year, month + 1, 0);
    daysInMonth = daysInMonth.getDate();
    var weekArray = [];

    if (weekNumber == 1){
      var dayNumber = 1;
      for (var i = 0; i < 7; i++){
        if (startDay > i){
          weekArray[i] = 0;
        }else{
          weekArray[i] = dayNumber;
          dayNumber++;
        }
      }
      return weekArray;
    }else if (weekNumber == weeksOfMonth){
      var endWeekStart = (
        (7 * (weeksOfMonth - 2)) + (7 - startDay) + 1
      );
      //console.log("daysInMonth : " + daysInMonth);
      for (var i = 0; i < 7; i++){
        if (endWeekStart <= daysInMonth){
          weekArray[i] = endWeekStart;
        }else{
          weekArray[i] = 0;
        }
        endWeekStart++;
      }
      return weekArray;
    }else {
      var weekStart = (((7 * (weekNumber -1)) - startDay) + 1);
      for (var i = 0; i < 7; i++){
        weekArray[i] = weekStart;
        weekStart++;
      }
      return weekArray;
    }

  }

  static getWeekDateRange(month, year, weekNumber){
    var day = new Date(year, month, 1);
    var weeksOfMonth = this.getWeeksOfMonth(day);
    var startDay = day.getDay();
    var daysInMonth = new Date(year, month + 1, 0);
    daysInMonth = daysInMonth.getDate();
    var weekArray = [];
    var firstNum, endNum;


    if (weekNumber == 1){
      firstNum = 1;
      endNum = 7 - startDay;
    }else if (weekNumber == weeksOfMonth){
      firstNum = (
        (7 * (weeksOfMonth - 2)) + (7 - startDay) + 1
      );
      endNum = daysInMonth;
    }else{
      firstNum = (((7 * (weekNumber -1)) - startDay) + 1);
      endNum = firstNum + 6;
    }

    return(firstNum + " - " +  endNum);
  }

  static getMonthNames(){
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    return monthNames;
  }

  static getSundayWeek(){
    const sundayWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return sundayWeek;
  }

  static getTodayDate(){
    var today = new Date();
    return {
      year: today.getFullYear(),
      month: today.getMonth(),
      day: today.getDate(),
    }
  }

  //This is the text displayed on the left of dayView. It goes from 7-11
  //because those are the times that classes are offered at the school that this
  //is for.
  static getPrettyHours(){
    const prettyHours = ["7am", "8am", "9am", "10am", "11am", "12am", "1pm",
        "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"];
    return prettyHours;
  }

}
