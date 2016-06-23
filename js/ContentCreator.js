
export default class ContentCreator{
  constructor(jsonObject){
    this.jsonObject = jsonObject;
  }

  getTitle(){
    return (this.jsonObject.myCourses[0].courseTitle);
  }

  getShortName(){
    var title = (this.jsonObject.myCourses[0].subjectCode + ' ' + this.jsonObject.myCourses[0].subjectNumber);
    return title;
  }

  getStartDate(){
    //console.log(this.jsonObject);
    var date = new Date(this.jsonObject.myCourses[0].courseInformation[1].courseMeetings[0].startDate);
    return date.getMonth();
    //console.log(date);
  }

  getEndDate(){
    var date = new Date(this.jsonObject.myCourses[0].courseInformation[1].courseMeetings[0].endDate);
    //console.log(date);
    return date.getMonth();
  }

  getStartTime(){
    var date = new Date(this.jsonObject.myCourses[0].courseInformation[1].courseMeetings[0].startTime);
    return date.getHours();
    //console.log(date);
  }

  getMeetDays(){
    var daysString = (this.jsonObject.myCourses[0].courseInformation[1].courseMeetings[0].meetDays);
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
    var date = new Date(this.jsonObject.myCourses[0].courseInformation[1].courseMeetings[0].endTime)
    console.log(date);
  }

  getBuilding(){
    var building = this.jsonObject.myCourses[0].courseInformation[1].courseMeetings[0].buildingRoom;
    return building;
  }
}
