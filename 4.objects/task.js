function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
    }
  new Student ()


Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
     if (this.hasOwnProperty('marks') === true) {
        this.marks.push(...marksToAdd);
    }
}

/* Student.prototype.getAverage = function () {
    if (this.hasOwnProperty('marks') === !true || this.marks.length === 0) {
        return 0;
    } else {
            this.marks.reduce((acc, item, index) => {
              if (index === this.marks.length-1) {
              return acc+item/this.marks.length
              }
      },0) }
} */

Student.prototype.getAverage = function () {
  if (this.hasOwnProperty('marks') === !true || this.marks.length === 0) {
      return 0;
  } else { 
      return this.marks.reduce( ( a, v ) => a + v, 0 ) / this.marks.length; }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason; 
}

