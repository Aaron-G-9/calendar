
export default class ContentCreator{
  constructor(jsonObject, classNumber){
    this.jsonObject = jsonObject;
    this.classNumber = classNumber;
  }

  getTitle(){
    return (this.jsonObject.myCourses[this.classNumber].courseTitle);
  }

  getShortName(){
    var title = (this.jsonObject.myCourses[this.classNumber].subjectCode + ' ' + this.jsonObject.myCourses[0].subjectNumber);
    return title;
  }

  getStartMonth(){
    ////console.log(this.jsonObject);
    var date = new Date(this.jsonObject.myCourses[this.classNumber].courseInformation[0].courseMeetings[0].startDate);
    return date.getMonth();
    ////console.log(date);
  }

  getStartDay(){ //Returns a number between 1 and 31
    var date = new Date(this.jsonObject.myCourses[this.classNumber].courseInformation[0].courseMeetings[0].startDate);
    return date.getDate();
  }

  getICalStartEnd(){
      var date = new Date(this.jsonObject.myCourses[this.classNumber].courseInformation[0].courseMeetings[0].startDate);
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
      var day = date.getDate();

      if(month < 10){
        month = "0" + month;
      }
      if (day < 10){
        day = "0" + day;
      }

      var timeStartDate = new Date(this.jsonObject.myCourses[this.classNumber].courseInformation[0].courseMeetings[0].startTime);
      var timeEndDate = new Date(this.jsonObject.myCourses[this.classNumber].courseInformation[0].courseMeetings[0].endTime);
      var dtstart = (year + "" + month + "" + day + "T" + (timeStartDate.getHours() -1) + "" + timeStartDate.getMinutes() + "00")
      var dtend = (year + "" + month + "" + day + "T" + (timeEndDate.getHours() -1) + "" + timeEndDate.getMinutes() + "00")
      return{
        dtstart: dtstart,
        dtend: dtend,
      }

    

  }

  getICalUntil(){
    var date = new Date(this.jsonObject.myCourses[this.classNumber].courseInformation[0].courseMeetings[0].endDate);
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var day = date.getDate();

    if(month < 10){
      month = "0" + month;
    }
    if (day < 10){
      day = "0" + day;
    }
    var timeEndDate = new Date(this.jsonObject.myCourses[this.classNumber].courseInformation[0].courseMeetings[0].endTime);
    return (year + "" + month + "" + day + "T" + (timeEndDate.getHours() -1) + "" + timeEndDate.getMinutes() + "00");

  }

  getICalEndTime(){

  }






  getEndMonth(){
    var date = new Date(this.jsonObject.myCourses[this.classNumber].courseInformation[0].courseMeetings[0].endDate);
    ////console.log(date);
    return date.getMonth();
  }
  getEndDay(){
    var date = new Date(this.jsonObject.myCourses[this.classNumber].courseInformation[0].courseMeetings[0].endDate);
    return date.getDate();
  }


  getStartTimeInfo(request){
    var date = new Date(this.jsonObject.myCourses[this.classNumber].courseInformation[0].courseMeetings[0].startTime);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    hours = hours - 1;
    var stringMinutes;
    if (minutes == 0){
      stringMinutes = "";
    }else{
      stringMinutes = (":" + minutes);
    }
    if (request === "hours"){
      return hours;
    }else if (request === "minutes"){
      return minutes;
    }else if (request === "string"){
      var hours;
      if(hours > 12){
        hours = hours - 12;
        return (hours + stringMinutes + "pm");
      }else if (hours == 12){
        return (hours +  stringMinutes + "pm");
      }else{
        return (hours + stringMinutes + "am");
      }
    }

  }

  getEndTimeInfo(request){
    var date = new Date(this.jsonObject.myCourses[this.classNumber].courseInformation[0].courseMeetings[0].endTime);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    hours = hours - 1;
    var stringMinutes;
    if (minutes == 0){
      stringMinutes = "";
    }else if(minutes < 10){
      stringMinutes = (":0" + minutes);
    }else{
      stringMinutes = (":" + minutes);
    }
    if (request === "hours"){
      return hours;
    }else if (request === "minutes"){
      return minutes;
    }else if (request === "string"){
      var hours;
      if(hours > 12){
        hours = hours - 12;
        return (hours + stringMinutes + "pm");
      }else if (hours == 12){
        return (hours +  stringMinutes + "pm");
      }else{
        return (hours + stringMinutes + "am");
      }
    }
  }

  getMeetDays(){
    var daysString = (this.jsonObject.myCourses[this.classNumber].courseInformation[0].courseMeetings[0].meetDays);
    var dayOfWeekArr = [false, false, false, false, false, false, false];
    for (var i = 0; i < daysString.length; i++){
      switch(daysString.substring(i, i+1)){
        case "M":
          dayOfWeekArr[1] = true;
          break;
        case "T":
          dayOfWeekArr[2] = true;
          break;
        case "W":
          dayOfWeekArr[3] = true;
          break;
        case "R":
          dayOfWeekArr[4] = true;
          break;
        case "F":
          dayOfWeekArr[5] = true;
          break;
      }
    }
    return dayOfWeekArr;
  }

  getICalMeetDays(){
    var daysString = (this.jsonObject.myCourses[this.classNumber].courseInformation[0].courseMeetings[0].meetDays);
    var iCalArray = [];
    for (var i = 0; i < daysString.length; i++){
      switch(daysString.substring(i, i+1)){
        case "M":
          iCalArray.push("MO");
          break;
        case "T":
          iCalArray.push("TU");
          break;
        case "W":
          iCalArray.push("WE");
          break;
        case "R":
          iCalArray.push("TH");
          break;
        case "F":
          iCalArray.push("FR");
          break;
      }
    }
    return iCalArray;
  }


  getBuilding(){
    var building = this.jsonObject.myCourses[this.classNumber].courseInformation[0].courseMeetings[0].buildingRoom;
    return building;
  }

  getDesiredHeight(){
    var startHour = this.getStartTimeInfo("hours");
    var startMinutes = this.getStartTimeInfo("minutes");
    var endHour = this.getEndTimeInfo("hours");
    var endMinutes = this.getEndTimeInfo("minutes");

    var minutes = (endMinutes - startMinutes)/60;
    var hours = endHour - startHour;
    ////console.log(startHour + ", " + endHour);
    return ((hours + minutes) * 4.6);
  }

  getWeekViewPosition(){
    var startHour = this.getStartTimeInfo("hours");
    var startMinutes = (this.getStartTimeInfo("minutes")/60)

    if (startMinutes >= .5 ){
      startMinutes = 1;
    }
    return (startHour + startMinutes - 7) * 2;
  }
}
