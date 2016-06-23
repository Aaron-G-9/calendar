
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

  getStartDate(){
    //console.log(this.jsonObject);
    var date = new Date(this.jsonObject.myCourses[this.classNumber].courseInformation[0].courseMeetings[0].startDate);
    return date.getMonth();
    //console.log(date);
  }

  getEndDate(){
    var date = new Date(this.jsonObject.myCourses[this.classNumber].courseInformation[0].courseMeetings[0].endDate);
    //console.log(date);
    return date.getMonth();
  }

  getStartTimeInfo(request){
    var date = new Date(this.jsonObject.myCourses[this.classNumber].courseInformation[0].courseMeetings[0].startTime);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    if (minutes == 0){
      minutes = "";
    }else{
      minutes = (":" + minutes);
    }
    if (request === "hours"){
      return hours;
    }else if (request === "minutes"){
      return minutes;
    }else if (request === "string"){
      var hours;
      if(hours > 12){
        hours = hours - 12;
        return (hours + minutes + "pm");
      }else if (hours == 12){
        return (hours +  minutes + "pm");
      }else{
        return (hours + minutes + "am");
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

  getEndTime(){
    var date = new Date(this.jsonObject.myCourses[this.classNumber].courseInformation[0].courseMeetings[0].endTime)
    console.log(date);
  }

  getBuilding(){
    var building = this.jsonObject.myCourses[this.classNumber].courseInformation[0].courseMeetings[0].buildingRoom;
    return building;
  }
}
