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
         translation = 'mây rải rác';
         break;
      case 'broken clouds':
         translation = 'nhiều mây';
         break;
      case 'overcast clouds':
         translation = 'nhiều mây';
         break;
      
      // Rain weather
      case 'light rain':
         translation = 'mưa nhẹ';
         break;
      case 'moderate rain':
         translation = 'mưa vừa';
         break;
      case 'heavy intensity rain':
         translation = 'mưa to';
         break;
      case 'very heavy rain':
         translation = 'mưa rất to';
         break;
      case 'extreme rain':
         translation = 'mưa rất to';
         break;
      case 'mưa lạnh':
         translation = '';
         break;
      case 'light intensity shower rain':
         translation = 'mưa rào nhẹ';
         break;
      case 'shower rain':
         translation = 'mưa rào';
         break;
      case 'heavy intensity shower rain':
         translation = 'mưa to';
         break;
      case 'ragged shower rain':
         translation = 'mưa rất to';
         break;

      // Clear weather
      case 'clear sky':
         translation = 'quang mây';
         break;

      default: 
         translation = description;
   }

   return translation;
}