class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {  //добавляет новый звонок в коллекцию существующих
        if (!time || !callback) {
          throw new Error('Отсутствуют обязательные аргументы');
        }
        else if (this.intervalId === time) {
          console.warn('Уже присутствует звонок на это же время');
        }
        this.alarmCollection.push({
            canCall: true,
            time,
            callback})
    }

    removeClock(time){  //удаляет звонки по определённому времени
      this.alarmCollection.filter(time => this.intervalId !== time);
    }

    getCurrentFormattedTime(){ //возвращает текущее время
      return new Date().toTimeString().slice(0, 5);
    }
    start(){  //запускает будильник
      if (isNaN(this.intervalId) === true){
        return;
      }
      setInterval(()=>{
        this.intervalId = this.alarmCollection.forEach(function(time, i) {
          if(this.time[i] === this.getCurrentFormattedTime & 
          this.canCall[i] === true){
             this.canCall[i] === false;
             this.callback();}
          })
        },1000)
    }
        

    stop(){  //останавливает выполнение интервала будильника
      clearInterval(this.intervalId);
      this.intervalId === null;
    }

    resetAllCalls(){  //сбрасывает возможность запуска всех звонков
      this.alarmCollection.forEach(function(item, i){
        this.canCall[i] === true;
      })
    }

    clearAlarms(){  //удаляет все звонки
      this.stop();
      this.alarmCollection = [];
    }
}