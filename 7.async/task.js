class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {  //добавляет новый звонок в коллекцию существующих
        if (!time || !callback) {
          throw new Error('Отсутствуют обязательные аргументы');
        }
        else if (this.alarmCollection.find(item => item.time === time)) {
          console.warn('Уже присутствует звонок на это же время');
        }
        this.alarmCollection.push({
            canCall: true,
            time,
            callback})
    }

    removeClock(time){  //удаляет звонки по определённому времени
      this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
    }

    getCurrentFormattedTime(){ //возвращает текущее время
      return new Date().toTimeString().slice(0, 5);
    }

    start() {  //запускает будильник
      if (this.intervalId){
        return;
      }
      this.intervalId = setInterval(() => {
        this.alarmCollection.forEach(item => { 
          if (item.time === this.getCurrentFormattedTime() && item.canCall === true)
             item.canCall = false;
             item.callback();
            }         
          )}
        ,1000)
    }
        
    stop(){  //останавливает выполнение интервала будильника
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    resetAllCalls(){  //сбрасывает возможность запуска всех звонков
      this.alarmCollection.forEach(item => item.canCall = true)
    }

    clearAlarms(){  //удаляет все звонки
      this.stop();
      this.alarmCollection = [];
    }
}