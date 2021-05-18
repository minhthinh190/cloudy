const weather = {
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

   // Thunderstorm weather
   'thunderstorm with light rain': 'Mưa dông nhẹ',
   'thunderstorm with rain': 'Mưa dông vừa',
   'thunderstorm with heavy rain': 'Mưa dông lớn',
   'light thunderstorm': 'Dông rải rác',
   'thunderstorm': 'Dông nhẹ',
   'heavy thunderstorm': 'Mưa rào và dông',
   'ragged thunderstorm': 'Mưa rào và dông',
   'thunderstorm with light drizzle': 'Mưa dông nhẹ',
   'thunderstorm with drizzle': 'Mưa dông vừa',
   'thunderstorm with heavy drizzle': 'Mưa dông lớn',

   // Drizzle
   'light intensity drizzle': 'Mưa phùn nhẹ',
   'drizzle': 'Mưa phùn',
   'heavy intensity drizzle': 'Mưa vừa',
   'light intensity drizzle rain': 'Mưa phùn nhẹ',
   'drizzle rain': 'Mưa phùn',
   'heavy intensity drizzle rain': 'Mưa to',
   'shower rain and drizzle': 'Mưa vừa',
   'heavy shower rain and drizzle': 'Mưa to',
   'shower drizzle': 'Mưa phùn',

   // Snow
   'light snow': 'Tuyết rơi nhẹ',
   'Snow': 'Tuyết rơi vừa',
   'Heavy snow': 'Tuyết rơi dày',
   'Sleet': 'Mưa và tuyết',
   'Light shower sleet': 'Mưa nhẹ và tuyết',
   'Shower sleet': 'Mưa và tuyết',
   'Light rain and snow': 'Mưa nhẹ và tuyết',
   'Rain and snow':'Mưa và tuyết',
   'Light shower snow': 'Tuyết rơi nhẹ',
   'Shower snow': 'Tuyết rơi vừa',
   'Heavy shower snow': 'Tuyết rơi dày',
};

export function toVietnamese(weatherDescription) {
   return weather[weatherDescription];
}
