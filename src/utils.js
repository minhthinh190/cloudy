export function timestampToTime(timestamp) {
    let defaultDate = new Date(timestamp * 1000);

    let hours = defaultDate.getHours();
    let minutes = '0' + defaultDate.getMinutes();

    let time = hours + ':' + minutes.substr(-2);

    return time;
}

export function timestampToDate(timestamp) {
    let defaultDate = new Date(timestamp * 1000);

    let day = defaultDate.getDate();
    let month = defaultDate.getMonth() + 1;

    let date = day + '-' + month;
    
    return date;
}