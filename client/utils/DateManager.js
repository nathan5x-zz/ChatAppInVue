
/*
Computes the difference between to different timestamps
*/
export function diffTimeStamps(timeStampThen, timeStampNow) {

    let dateThen = new Date(timeStampThen);
    let dateNow = new Date(timeStampNow);

    if(!isDate(dateThen)){
        return new Error("Invalid Timestamps");
    }

    if(!isDate(dateNow)) {
        dateNow = new Date(Date.now());
    }

    let absDifference = Math.abs(dateThen - dateNow) / 1000;

    const secondsInDays = 86400;
    const secondsInHours = 3600;
    const secondsInMins = 60;

    let days = Math.floor(absDifference / secondsInDays);
    let hours = Math.floor(absDifference / secondsInHours) % 24;
    let mins = Math.floor(absDifference / secondsInMins) % 60;
    let seconds = absDifference % 60;

    return {
        days: days, hours: hours, mins: mins, seconds: seconds
    }
}

export function isDate(date) {
    return date instanceof Date && !isNaN(date.valueOf());
}