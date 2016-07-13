import ContentCreator from './ContentCreator';


export default class ICalCreator{
  constructor(courseObject){
    this.courseObject = courseObject;
  }


  makeFile(){
    startICalFile();
  }



  startICalFile(){
    return(
      "BEGIN:VCALENDAR%0A" +
      'PRODID:-//Oakland University//Courses Calendar//EN' +
      "%0AVERSION:2.0" +
      "%0ACALSCALE:GREGORIAN" +
      "%0AMETHOD:PUBLISH"
    );
  }


  addClass(classNumber){
    if (this.courseObject != "empty"){
      //console.log(this.courseObject);
      var content = new ContentCreator(this.courseObject, classNumber);
      var event={
        DTSTART: content.getICalStartEnd().dtstart,
        DTEND: content.getICalStartEnd().dtend,
        LOCATION: content.getBuilding(),
        SUMMARY: content.getShortName(),
        DTSTAMP: ICalCreator.createDateStamp(),
        RRULE: "FREQ=WEEKLY;" + "UNTIL=" + content.getICalUntil() +";BYDAY=" + content.getICalMeetDays(),
      }
      //console.log(JSON.parse(event));
    }else{
      //console.log("asdfghjkl");
    }
  }

  endICalFile(){
    return "END:VCALENDAR";
  }

  static createDateStamp(){
    var date = new Date();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var day = date.getDate();

    if(month < 10){
      month = "0" + month;
    }
    if (day < 10){
      day = "0" + day;
    }
    return (year + "" + month + "" + day + "T" + (date.getHours() -1) + "" + date.getMinutes() + "00");
  }


  replacer(){

  }



}
