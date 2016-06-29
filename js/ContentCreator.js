
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
    //console.log(this.jsonObject);
    var date = new Date(this.jsonObject.myCourses[this.classNumber].courseInformation[0].courseMeetings[0].startDate);
    return date.getMonth();
    //console.log(date);
  }

  getStartDay(){
    var date = new Date(this.jsonObject.myCourses[this.classNumber].courseInformation[0].courseMeetings[0].startDate);
    return date.getDate();
  }

  getEndMonth(){
    var date = new Date(this.jsonObject.myCourses[this.classNumber].courseInformation[0].courseMeetings[0].endDate);
    //console.log(date);
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


  getBuilding(){
    var building = this.jsonObject.myCourses[this.classNumber].courseInformation[0].courseMeetings[0].buildingRoom;
    return building;
  }

  getDesiredHeight(){
    var startHour = getStartTimeInfo("hours");
    var endHour = getEndTimeInfo("hours");
    return
  }
}
