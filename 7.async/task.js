class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock(time, callback) {
        if (time === NaN || callback === NaN) {
          throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.intervalId === time) {
          console.warn('Уже присутствует звонок на это же время');
        }
    }
}