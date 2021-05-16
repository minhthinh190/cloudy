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

export function toVietnamese(description) {
   const translation = {
      // Clear weather
      'clear sky': 'Quang mây',
      
      // Clouds weather
      'few clouds': 'Ít mây',
      'scattered clouds': 'Mây rải rác',
      'broken clouds': 'Nhiều mây',
      'overcast clouds': 'Nhiều mây',
      
      // Rain weather
      'light rain': 'Mưa nhẹ',
      'moderate rain': 'Mưa vừa',
      'heavy intensity rain': 'Mưa to',
      'very heavy rain': 'Mưa rất to',
      'extreme rain': 'Mưa rất to',
      'freezing rain': 'Mưa lạnh',
      'light intensity shower rain': 'Mưa rào nhẹ',
      'shower rain': 'Mưa rào',
      'heavy intensity shower rain': 'Mưa to',
      'ragged shower rain': 'Mưa rất to',      
   };
   
   return translation[description];
}
