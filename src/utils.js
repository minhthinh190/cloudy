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
   let translation = '';

   switch (description) {
      // Clouds weather
      case 'few clouds':
         translation = 'Ít mây';
         break;
      case 'scattered clouds':
         translation = 'Mây rải rác';
         break;
      case 'broken clouds':
         translation = 'Nhiều mây';
         break;
      case 'overcast clouds':
         translation = 'Nhiều mây';
         break;
      
      // Rain weather
      case 'light rain':
         translation = 'Mưa nhẹ';
         break;
      case 'moderate rain':
         translation = 'Mưa vừa';
         break;
      case 'heavy intensity rain':
         translation = 'Mưa to';
         break;
      case 'very heavy rain':
         translation = 'Mưa rất to';
         break;
      case 'extreme rain':
         translation = 'Mưa rất to';
         break;
      case 'freezing rain':
         translation = 'Mưa lạnh';
         break;
      case 'light intensity shower rain':
         translation = 'Mưa rào nhẹ';
         break;
      case 'shower rain':
         translation = 'Mưa rào';
         break;
      case 'heavy intensity shower rain':
         translation = 'Mưa to';
         break;
      case 'ragged shower rain':
         translation = 'Mưa rất to';
         break;

      // Clear weather
      case 'clear sky':
         translation = 'Quang mây';
         break;

      default: 
         translation = description;
   }

   return translation;
}