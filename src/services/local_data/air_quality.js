export const AIR_QUALITY_LEVEL = {
   1: { score: 1, description: 'good', vietnameseDescription: 'Tốt', },
   2: { score: 2, description: 'fair', vietnameseDescription: 'Khá tốt',},
   3: { score: 3, description: 'moderate', vietnameseDescription: 'Trung bình',},
   4: { score: 4, description: 'poor', vietnameseDescription: 'Kém', },
   5: { score: 5, description: 'very-poor', vietnameseDescription: 'Rất kém', },
};

export const UNNECESSARY_POLLUTANT = ['co', 'nh3', 'no', 'no2', 'so2'];

// Pollution Level Calculation
//
// The pollution level of each pollutant is estimated to be 'poor' when 
// the pollutant's concentration reaches it's limit.
//
// - very poor: > 200% limit
// - poor:      (100 => 200)% limit 
// - moderate:  (50 => 100)% limit
// - fair:      (25 => 50)% limit
// - good:      (0 => 25)% limit

export const POLLUTANT = {
   unit: 'μg/m3',

   pm10: {
      name: 'PM10',
      limit: '50',
      level: [
         { level: 'good', min: 0, max: 12.5 },
         { level: 'fair', min: 12.5, max: 25 },
         { level: 'moderate', min: 25, max: 50 },
         { level: 'poor', min: 50, max: 100 },
         { level: 'very-poor', min: 100, max: Infinity },
      ]
   },
   pm2_5: {
      name: 'PM2.5',
      limit: '25',
      level: [
         { level: 'good', min: 0, max: 6.25 },
         { level: 'fair', min: 6.25, max: 12.5 },
         { level: 'moderate', min: 12.5, max: 25 },
         { level: 'poor', min: 25, max: 50 },
         { level: 'very-poor', min: 50, max: Infinity },
      ]
   },
   so2: {
      name: 'SO2',
      limit: '50',
      level: [
         { level: 'good', min: 0, max: 12.5 },
         { level: 'fair', min: 12.5, max: 25 },
         { level: 'moderate', min: 25, max: 50 },
         { level: 'poor', min: 50, max: 100 },
         { level: 'very-poor', min: 100, max: Infinity },
      ],
   },
   o3: {
      name: 'O3',
      limit: '120',
      level: [
         { level: 'good', min: 0, max: 30 },
         { level: 'fair', min: 30, max: 60 },
         { level: 'moderate', min: 60, max: 120 },
         { level: 'poor', min: 120, max: 240 },
         { level: 'very-poor', min: 240, max: Infinity },
      ],
   },
   no2: {
      name: 'NO2',
      limit: '200',
      level: [
         { level: 'good', min: 0, max: 50 },
         { level: 'fair', min: 50, max: 100 },
         { level: 'moderate', min: 100, max: 200 },
         { level: 'poor', min: 200, max: 400 },
         { level: 'very-poor', min: 400, max: Infinity },
      ],
   }
};
