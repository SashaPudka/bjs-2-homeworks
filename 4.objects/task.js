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
     if (this.HasOwnProperty('marks') === true) {    //как будто должно быть не this а обращение к объекту, но не понимаю как//
        this.marks.push(...marksToAdd);
    }
}

Student.prototype.getAverage = function () {
    if (this.HasOwnProperty('marks') === false && this.marks.length === 0) { //как будто должно быть не this а обращение к объекту, но не понимаю как//
        return 0;
    }
      const getData = this.marks.reduce((acc, item, index, arr) => {
            if (index === this.marks.length-1) {
              return acc+=item/this.marks.length
            }
            return 0;
      },0)
} 

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason; //как будто должно быть не this а обращение к объекту, но не понимаю как//
}

