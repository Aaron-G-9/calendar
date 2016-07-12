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
      "BEGIN:VCALENDAR\n" +
      'PRODID:-//Oakland University//Courses Calendar//EN' +
      "\nVERSION:2.0" +
      "\nCALSCALE:GREGORIAN" +
      "\nMETHOD:PUBLISH"
    );
  }


  addClass(classNumber){
    if (this.courseObject != "empty"){
      var content = new ContentCreator(this.courseObject, classNumber);

      return{
        DTSTART: content.getICalStartEnd().dtstart,
        DTEND: content.getICalStartEnd().dtend,
        LOCATION: content.getBuilding(),
        SUMMARY: content.getShortName(),
        DTSTAMP: ICalCreator.createDateStamp(),
        RRULE: "FREQ=WEEKLY;" + "UNTIL=" + content.getICalUntil() +";BYDAY=" + content.getICalMeetDays(),
      }
    }else{
      console.log("undefined");
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






}
