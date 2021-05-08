export const areaList = [
   {
      name: 'Bắc Bộ',
      sub_area: [
         {
               name: 'Đồng bằng sông Hồng',
               location: [
                  { value: 'Hà Nội', title: 'Hà Nội' },
                  { value: 'Bắc Ninh', title: 'Bắc Ninh' },
                  { value: 'Hải Dương', title: 'Hải Dương' },
                  { value: 'Nam Định', title: 'Nam Định' },
                  { value: 'Hải Phòng', title: 'Hải Phòng' },
               ],
         },
         {
               name: 'Tây Bắc Bộ',
               location: [
                  { value: 'Điện Biên', title: 'Điện Biên' },
                  { value: 'Sơn La', title: 'Sơn La' },
                  { value: 'Yên Bái', title: 'Yên Bái' },
                  { value: 'Hòa Bình', title: 'Hòa Bình' },
               ],
         },
         {
               name: 'Đông Bắc Bộ',
               location: [
                  { value: 'Hà Giang', title: 'Hà Giang' },
                  { value: 'Cao Bằng', title: 'Cao Bằng' },
                  { value: 'Lạng Sơn', title: 'Lạng Sơn' },
                  { value: 'Quảng Ninh', title: 'Quảng Ninh' },
                  { value: 'Bắc Giang', title: 'Bắc Giang' },
               ],
         },
      ],
   },
   {
      name: 'Trung Bộ',
      sub_area: [
         {
               name: 'Bắc Trung Bộ',
               location: [
                  { value: 'Thanh Hóa', title: 'Thanh Hóa' },
                  { value: 'Nghệ An', title: 'Nghệ An' },
                  { value: 'Hà Tĩnh', title: 'Hà Tĩnh' },
                  { value: 'Quảng Bình', title: 'Quảng Bình' },
                  { value: 'Quảng Trị', title: 'Quảng Trị' },
                  { value: 'Thừa Thiên - Huế', title: 'Thừa Thiên - Huế' },
               ],
         },
         {
               name: 'Duyên hải Nam Trung Bộ',
               location: [
                  { value: 'Đà Nẵng', title: 'Đà Nẵng' },
                  { value: 'Quảng Ngãi', title: 'Quảng Ngãi' },
                  { value: 'Bình Định', title: 'Bình Định' },
                  { value: 'Phú Yên', title: 'Phú Yên' },
                  { value: 'Khánh Hòa', title: 'Khánh Hòa' },
                  { value: 'Bình Thuận', title: 'Bình Thuận' },
               ],
         },
         {
               name: 'Tây nguyên',
               location: [
                  { value: 'Gia Lai', title: 'Gia Lai' },
                  { value: 'Đắk Lắk', title: 'Đắk Lắk' },
                  { value: 'Lâm Đồng', title: 'Lâm Đồng' },
                  { value: 'Kon Tum', title: 'Kon Tum' },
               ],
         },
      ],
   },
   {
      name: 'Nam Bộ',
      sub_area: [
         {
               name: 'Đông Nam Bộ',
               location: [
                  { value: 'TP Hồ Chí Minh', title: 'TP Hồ Chí Minh' },
                  { value: 'Bình Dương', title: 'Bình Dương' },
                  { value: 'Bà Rịa - Vũng Tàu', title: 'Bà Rịa - Vũng Tàu' },
               ],
         },
         {
               name: 'Đồng bằng sông Cửu Long',
               location: [
                  { value: 'Bến Tre', title: 'Bến Tre' },
                  { value: 'An Giang', title: 'An Giang' },
                  { value: 'Cần Thơ', title: 'Cần Thơ' },
                  { value: 'Cà Mau', title: 'Cà Mau' },
               ],
         },
      ],
   },
];

export const province = {
   // BẮC BỘ
   // Đồng bằng sông Hồng
   'Hà Nội': {
      name: 'Hà Nội', sub_area: 'Đồng bằng sông Hồng', area: 'Bắc Bộ', coord: { lon: '105.8412', lat: '21.0245' },
   },
   'Bắc Ninh' : {
      name: 'Bắc Ninh', sub_area: 'Đồng bằng sông Hồng', area: 'Bắc Bộ', coord: { lon: '106.050003', lat: '21.183331' },
   },
   'Hải Dương' : {
      name: 'Hải Dương', sub_area: 'Đồng bằng sông Hồng', area: 'Bắc Bộ', coord: { lon: '106.316673', lat: '20.933331' },
   },
   'Nam Định' : {
      name: 'Nam Định', sub_area: 'Đồng bằng sông Hồng', area: 'Bắc Bộ', coord: { lon: '106.1667', lat: '20.4167' },
   },
   'Hải Phòng' : {
      name: 'Hải Phòng', sub_area: 'Đồng bằng sông Hồng', area: 'Bắc Bộ', coord: { lon: '106.5833', lat: '20.8333' },
   },
   // Tây Bắc Bộ
   'Điện Biên' : {
      name: 'Điện Biên', sub_area: 'Tây Bắc Bộ', area: 'Bắc Bộ', coord: { lon: '103.0167', lat: '21.3833' },
   },
   'Sơn La' : {
      name: 'Sơn La', sub_area: 'Tây Bắc Bộ', area: 'Bắc Bộ', coord: { lon: '104', lat: '21.1667' },
   },
   'Yên Bái' : {
      name: 'Yên Bái', sub_area: 'Tây Bắc Bộ', area: 'Bắc Bộ', coord: { lon: '104.6667', lat: '21.5' },
   },
   'Hòa Bình' : {
      name: 'Hòa Bình', sub_area: 'Tây Bắc Bộ', area: 'Bắc Bộ', coord: { lon: '105.338333', lat: '20.81333' },
   },
   // Đông Bắc Bộ
   'Hà Giang' : {
      name: 'Hà Giang', sub_area: 'Đông Bắc Bộ', area: 'Bắc Bộ', coord: { lon: '105', lat: '22.75' },
   },
   'Cao Bằng' : {
      name: 'Cao Bằng', sub_area: 'Đông Bắc Bộ', area: 'Bắc Bộ', coord: { lon: '106.25', lat: '22.6667' },
   },
   'Lạng Sơn' : {
      name: 'Lạng Sơn', sub_area: 'Đông Bắc Bộ', area: 'Bắc Bộ', coord: { lon: '106.5', lat: '21.75' },
   },
   'Quảng Ninh' : {
      name: 'Quảng Ninh', sub_area: 'Đông Bắc Bộ', area: 'Bắc Bộ', coord: { lon: '107.3333', lat: '21.25' },
   },
   'Bắc Giang' : {
      name: 'Bắc Giang', sub_area: 'Đông Bắc Bộ', area: 'Bắc Bộ', coord: { lon: '106.3333', lat: '21.3333' },
   },

   // TRUNG BỘ
   // Bắc Trung Bộ
   'Thanh Hóa' : {
      name: 'Thanh Hóa', sub_area: 'Bắc Trung Bộ', area: 'Trung Bộ', coord: { lon: '105.7667', lat: '19.8' },
   },
   'Nghệ An' : {
      name: 'Nghệ An', sub_area: 'Bắc Trung Bộ', area: 'Trung Bộ', coord: { lon: '104.8333', lat: '19.3333' },
   },
   'Hà Tĩnh' : {
      name: 'Hà Tĩnh', sub_area: 'Bắc Trung Bộ', area: 'Trung Bộ', coord: { lon: '105.900002', lat: '18.33333' },
   },
   'Quảng Bình' : {
      name: 'Quảng Bình', sub_area: 'Bắc Trung Bộ', area: 'Trung Bộ', coord: { lon: '106.3333', lat: '17.5' },
   },
   'Quảng Trị' : {
      name: 'Quảng Trị', sub_area: 'Bắc Trung Bộ', area: 'Trung Bộ', coord: { lon: '107.2', lat: '16.75' },
   },
   'Thừa Thiên - Huế' : {
      name: 'Thừa Thiên - Huế', sub_area: 'Bắc Trung Bộ', area: 'Trung Bộ', coord: { lon: '107.6', lat: '16.4667' },
   },
   // Duyên hải Nam Trung Bộ
   'Đà Nẵng' : {
      name: 'Đà Nẵng', sub_area: 'Duyên hải Nam Trung Bộ', area: 'Trung Bộ', coord: { lon: '108.0833', lat: '16.0833' },
   },
   'Quảng Ngãi' : {
      name: 'Quảng Ngãi', sub_area: 'Duyên hải Nam Trung Bộ', area: 'Trung Bộ', coord: { lon: '108.8', lat: '15.1167' },
   },
   'Bình Định' : {
      name: 'Bình Định', sub_area: 'Duyên hải Nam Trung Bộ', area: 'Trung Bộ', coord: { lon: '109.0', lat: '14.16667' },
   },
   'Phú Yên' : {
      name: 'Phú Yên', sub_area: 'Duyên hải Nam Trung Bộ', area: 'Trung Bộ', coord: { lon: '109.166672', lat: '13.16667' },
   },
   'Khánh Hòa' : {
      name: 'Khánh Hòa', sub_area: 'Duyên hải Nam Trung Bộ', area: 'Trung Bộ', coord: { lon: '109', lat: '12.3333' },
   },
   'Bình Thuận' : {
      name: 'Bình Thuận', sub_area: 'Duyên hải Nam Trung Bộ', area: 'Trung Bộ', coord: { lon: '108.0', lat: '11.08333' },
   },
   // Tây Nguyên
   'Gia Lai' : {
      name: 'Gia Lai', sub_area: 'Tây Nguyên', area: 'Trung Bộ', coord: { lon: '108.25', lat: '13.75' },
   },
   'Đắk Lắk' : {
      name: 'Đắk Lắk', sub_area: 'Tây Nguyên', area: 'Trung Bộ', coord: { lon: '108.166672', lat: '12.83333' },
   },
   'Lâm Đồng' : {
      name: 'Lâm Đồng', sub_area: 'Tây Nguyên', area: 'Trung Bộ', coord: { lon: '108.3333', lat: '11.5' },
   },
   'Kon Tum' : {
      name: 'Kon Tum', sub_area: 'Tây Nguyên', area: 'Trung Bộ', coord: { lon: '108.0', lat: '14.35' },
   },

   // NAM BỘ
   // Đông Nam Bộ
   'TP Hồ Chí Minh' : {
      name: 'TP Hồ Chí Minh', sub_area: 'Đông Nam Bộ', area: 'Nam Bộ', coord: { lon: '106.6667', lat: '10.8333' },
   },
   'Bình Dương' : {
      name: 'Bình Dương', sub_area: 'Đông Nam Bộ', area: 'Nam Bộ', coord: { lon: '106.6667', lat: '11.1667' },
   },
   'Bà Rịa - Vũng Tàu' : {
      name: 'Bà Rịa - Vũng Tàu', sub_area: 'Đông Nam Bộ', area: 'Nam Bộ', coord: { lon: '107.0843', lat: '10.346' },
   },
   // Đồng bằng sông Cửu Long
   'Bến Tre' : {
      name: 'Bến Tre', sub_area: 'Đồng bằng sông Cửu Long', area: 'Nam Bộ', coord: { lon: '106.5', lat: '10.16667' },
   },
   'An Giang' : {
      name: 'An Giang', sub_area: 'Đồng bằng sông Cửu Long', area: 'Nam Bộ', coord: { lon: '105.166672', lat: '10.5' },
   },
   'Cần Thơ' : {
      name: 'Cần Thơ', sub_area: 'Đồng bằng sông Cửu Long', area: 'Nam Bộ', coord: { lon: '105.6667', lat: '9.8333' },
   },
   'Cà Mau' : {
      name: 'Cà Mau', sub_area: 'Đồng bằng sông Cửu Long', area: 'Nam Bộ', coord: { lon: '105.15', lat: '9.1769' },
   },
};