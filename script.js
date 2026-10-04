const APP_TOURS = [
  {
    "name": "Kashmir Tour",
    "description": "Explore the beautiful valleys, mountains and lakes of Kashmir.",
    "places": [
      "Srinagar",
      "Gulmarg",
      "Sonamarg",
      "Pahalgam"
    ],
    "image": "kashmir.jpg"
  },
  {
    "name": "Amarnath Yatra",
    "description": "Spiritual journey to the holy Amarnath Cave.",
    "places": [
      "Delhi",
      "Amritsar",
      "Attari - Wagha Border",
      "Katra Vaishnodevi",
      "Srinagar",
      "Baltal",
      "Amarnath Gufa",
      "Chintapurni",
      "Jwalamukhi",
      "Kangra Devi",
      "Chamunda",
      "Kurukshetra"
    ],
    "image": "amarnath.jpg"
  },
  {
    "name": "Vaishnodevi Katra Tour",
    "description": "Spiritual journey to the holy Vaishnodevi shrine.",
    "places": [
      "Raghunath Mandir",
      "Vaishnodevi",
      "Bhairavnath Baba"
    ],
    "image": "vaishnodevi.jpg"
  },
  {
    "name": "Golden Triangle Tour",
    "description": "Explore the famous destinations of North India.",
    "places": [
      "Agra",
      "Mathura",
      "Vrindavan",
      "Jaipur"
    ],
    "image": "golden_triangle.jpg"
  },
  {
    "name": "Shimla - Manali Tour",
    "description": "Enjoy the beautiful mountains and scenic destinations of Himachal Pradesh.",
    "places": [
      "Shimla",
      "Manali",
      "Kufri",
      "Kasol"
    ],
    "image": "shimla_manali.jpg"
  },
  {
    "name": "Chardham Yatra",
    "description": "A spiritual journey covering the sacred Char Dham destinations.",
    "places": [
      "Haridwar",
      "Yamunotri",
      "Uttarkashi",
      "Gangotri",
      "Kedarnath",
      "Badrinath",
      "Mana",
      "Gupta Kashi",
      "Dhaari Devi",
      "Joshi Math",
      "Rishikesh",
      "Pancha Prayaga View Points"
    ],
    "image": "chardham.jpg"
  },
  {
    "name": "Do Dham Yatra",
    "description": "Spiritual journey covering Kedarnath and Badrinath.",
    "places": [
      "Gupta Kashi",
      "Kedarnath",
      "Badrinath",
      "Dhaari Devi"
    ],
    "image": "do_dham.jpg"
  },
  {
    "name": "Agra - Mathura - Vrindavan Tour",
    "description": "Explore the famous spiritual and historical destinations.",
    "places": [
      "Agra",
      "Mathura",
      "Vrindavan",
      "Gokul",
      "Govardhan",
      "Barsana"
    ],
    "image": "agra_mathura_vrindavan.jpg"
  },
  {
    "name": "Kashi - Ayodhya - Prayagraj Tour 4 Days",
    "description": "4 Days spiritual journey covering Kashi, Ayodhya and Prayagraj.",
    "places": [
      "Kashi",
      "Ayodhya",
      "Prayagraj",
      "naimisharanyam",
      "lucknow"
    ],
    "image": "kashi_ayodhya_prayagraj.jpg"
  },
  {
    "name": "Kashi Yatra 9 Nights - 10 Days",
    "description": "Spiritual journey covering important pilgrimage destinations.",
    "places": [
      "Kashi",
      "Ayodhya",
      "Prayagraj",
      "Sitamadi",
      "Vindyachal",
      "Sarnath",
      "Gaya",
      "Bodh Gaya"
    ],
    "image": "kashi_yatra.jpg"
  },
  {
    "name": "Rajasthan Tour",
    "description": "Explore the royal heritage and beautiful destinations of Rajasthan.",
    "places": [
      "Jaipur",
      "Jodhpur",
      "Bikaner",
      "Jaisalmer",
      "Pushkar",
      "Udaipur",
      "Nathdwara",
      "Mount Abu"
    ],
    "image": "rajasthan_tour.jpg"
  },
  {
    "name": "Gujarat Tour 7 Days",
    "description": "Explore the temples, heritage and famous destinations of Gujarat.",
    "places": [
      "Ahmedabad",
      "Dwarka",
      "Bet Dwarka",
      "Nageshwar Jyothirling",
      "Mul Dwarka",
      "Porbandar",
      "Somnath Jyothirling",
      "Gir Forest",
      "Bhavnagar",
      "Statue of Unity"
    ],
    "image": "gujarat_tour.jpg"
  },
  {
    "name": "Gujarat - Madhya Pradesh tour 12 Days",
    "description": "Explore the spiritual and cultural destinations of Gujarat and Madhya Pradesh.",
    "places": [
      "Ahmedabad",
      "Dwarka",
      "Bet Dwarka",
      "Nageshwar Jyothirling",
      "Mul Dwarka",
      "Porbandar",
      "Somnath Jyothirling",
      "Gir Forest",
      "Bhavnagar",
      "Statue of Unity",
      "Mathrugaya",
      "Ambaji",
      "Nathdwara",
      "Udaipur",
      "Ujjain",
      "Omkareshwar"
    ],
    "image": "gujarat_madhya_pradesh_tour_12days.jpg"
  },
  {
    "name": "Odisha Tour",
    "description": "Explore the temples, beaches and cultural heritage of Odisha.",
    "places": [
      "Bhubaneshwar",
      "Girija Devi Shakthi Peeth",
      "Konark",
      "Puri",
      "Chilika Lake",
      "Raghurajpur",
      "Sakhi Gopal",
      "Pipli"
    ],
    "image": "odisha_tour.jpg"
  },
  {
    "name": "Maharashtra Jyothirlinga Yatra",
    "description": "Spiritual journey covering important Jyothirlinga and pilgrimage destinations.",
    "places": [
      "Trimbakeshwar Jyotirlinga",
      "Bhimashankar Jyotirlinga",
      "Grishneshwar Jyotirlinga",
      "Shirdi Sai Baba",
      "Shani Shingnapur",
      "Nashik",
      "Ellora Caves",
      "Aurangabad"
    ],
    "image": "maharashtra_jyothirlinga_tour.jpg"
  },
  {
    "name": "Karnataka Tour",
    "description": "Explore the heritage, temples, nature and beautiful destinations of Karnataka.",
    "places": [
      "Bengaluru",
      "Mysuru Palace",
      "Chamundi Hills",
      "Coorg",
      "Hampi",
      "Badami",
      "Pattadakal",
      "Aihole",
      "Belur",
      "Halebidu",
      "Udupi",
      "Gokarna"
    ],
    "image": "karnataka_tour.jpg"
  },
  {
    "name": "Kerala Tour",
    "description": "Explore the beautiful backwaters, hills and beaches of Kerala.",
    "places": [
      "Kochi",
      "Munnar",
      "Thekkady",
      "Alleppey",
      "Kumarakom",
      "Kovalam",
      "Thiruvananthapuram",
      "Varkala"
    ],
    "image": "kerala_tour.jpg"
  },
  {
    "name": "Tamilanadu Tour",
    "description": "Explore the temples, heritage and famous destinations of Tamil Nadu.",
    "places": [
      "Chennai",
      "Mahabalipuram",
      "Pondicherry",
      "Thanjavur",
      "Trichy",
      "Madurai",
      "Rameswaram",
      "Dhanushkodi",
      "Kanyakumari",
      "Meenakshi Amman Temple"
    ],
    "image": "tamilanadu_tour.jpg"
  },
  {
    "name": "Hyderabad Tour",
    "description": "Explore the historical and cultural attractions of Hyderabad.",
    "places": [
      "Charminar",
      "Golconda Fort",
      "Chowmahalla Palace",
      "Salar Jung Museum",
      "Qutb Shahi Tombs",
      "Hussain Sagar",
      "Birla Mandir",
      "Ramoji Film City",
      "Shilparamam"
    ],
    "image": "hyderabad_tour.jpg"
  },
  {
    "name": "Gangtok - Darjeeling Tour",
    "description": "Explore the mountains, lakes and beautiful attractions of Sikkim and Darjeeling.",
    "places": [
      "Gangtok",
      "Tsomgo Lake",
      "Baba Mandir",
      "Nathula Pass",
      "Rumtek Monastery",
      "Darjeeling",
      "Tiger Hill",
      "Batasia Loop",
      "Darjeeling Himalayan Railway",
      "Himalayan Mountaineering Institute"
    ],
    "image": "gangtok_darjeeling_tour.jpg"
  },
  {
    "name": "Northeast Tours",
    "description": "Explore the beautiful mountains, valleys and cultural destinations of Northeast India.",
    "places": [
      "Guwahati",
      "Kamakhya Temple",
      "Shillong",
      "Cherrapunji",
      "Dawki",
      "Kaziranga National Park",
      "Tawang",
      "Bomdila",
      "Gangtok",
      "Pelling",
      "Kohima",
      "Imphal"
    ],
    "image": "northeast_tours.jpg"
  },
  {
    "name": "Goa Beach & Heritage Tour",
    "description": "Explore the sun-kissed beaches, Portuguese heritage and vibrant culture of Goa.",
    "places": [
      "Panaji",
      "Calangute Beach",
      "Baga Beach",
      "Palolem Beach",
      "Dudhsagar Waterfalls",
      "Aguada Fort",
      "Basilica of Bom Jesus"
    ],
    "image": "goa_tour.jpg"
  },
  {
    "name": "Andaman Islands Paradise Tour",
    "description": "Discover the pristine white sand beaches, coral reefs and historic sites of Andaman.",
    "places": [
      "Port Blair",
      "Cellular Jail",
      "Havelock Island",
      "Radhanagar Beach",
      "Ross Island",
      "Neil Island",
      "Elephant Beach"
    ],
    "image": "andaman_tour.jpg"
  },
  {
    "name": "Leh - Ladakh Adventure Tour",
    "description": "Experience the breathtaking mountain passes, high-altitude lakes and Buddhist monasteries of Ladakh.",
    "places": [
      "Leh",
      "Shanti Stupa",
      "Khardung La Pass",
      "Nubra Valley",
      "Pangong Tso",
      "Magnetic Hill",
      "Thiksey Monastery"
    ],
    "image": "leh_ladakh.webp"
  },
  {
    "name": "Uttarakhand Divine & Valley Tour",
    "description": "Journey through the serene hill stations, holy rivers and beautiful valleys of Uttarakhand.",
    "places": [
      "Mussoorie",
      "Kempty Falls",
      "Nainital",
      "Bhimtal",
      "Jim Corbett National Park"
    ],
    "image": "rishikesh_tour.jpg"
  },
  {
    "name": "Andhra Pradesh Temple & Heritage Tour",
    "description": "Spiritual journey covering ancient temples, sacred shrines and historical wonders of Andhra Pradesh.",
    "places": [
      "Tirupati",
      "Tirumala",
      "Srisailam",
      "Vijayawada",
      "Kanaka Durga Temple",
      "Lepakshi",
      "Belum Caves",
      "Annavaram"
    ],
    "image": "andhra_tour.webp"
  },
  {
    "name": "Meghalaya Waterfall & Nature Tour",
    "description": "Explore the abode of clouds, living root bridges, stunning waterfalls and crystal clear rivers.",
    "places": [
      "Shillong",
      "Umiam Lake",
      "Elephant Falls",
      "Cherrapunji",
      "Nohkalikai Falls",
      "Living Root Bridges",
      "Dawki River"
    ],
    "image": "meghalaya_tour.jpg"
  },
  {
    "name": "Madhya Pradesh Heritage & Wildlife Tour",
    "description": "Discover the architectural masterpieces, ancient temples and rich wildlife of Madhya Pradesh.",
    "places": [
      "Khajuraho",
      "Sanchi Stupa",
      "Bhopal",
      "Pachmarhi",
      "Bhedaghat Marble Rocks",
      "Kanha National Park",
      "Ujjain"
    ],
    "image": "madhya_pradesh_tour.jpg"
  },
  {
    "name": "Punjab & Golden Temple Heritage Tour",
    "description": "Experience the warmth, patriotism and spiritual grace of Punjab.",
    "places": [
      "Amritsar",
      "Golden Temple",
      "Jallianwala Bagh",
      "Wagah Border",
      "Gobindgarh Fort",
      "Chandigarh",
      "Anandpur Sahib"
    ],
    "image": "punjab_golden_temple.png"
  }
];
const LOCAL_PLACES = [{"name":"Srinagar","lat":34.0837,"lon":74.7973},{"name":"Gulmarg","lat":34.0484,"lon":74.3805},{"name":"Sonamarg","lat":34.302,"lon":75.2937},{"name":"Pahalgam","lat":34.0161,"lon":75.315},{"name":"Katra","lat":32.9904,"lon":74.7935},{"name":"Jammu","lat":32.7266,"lon":74.857},{"name":"Delhi","lat":28.6139,"lon":77.209},{"name":"Amritsar","lat":31.634,"lon":74.8723},{"name":"Agra","lat":27.1767,"lon":78.0081},{"name":"Mathura","lat":27.4924,"lon":77.6737},{"name":"Vrindavan","lat":27.5684,"lon":77.6917},{"name":"Jaipur","lat":26.9124,"lon":75.7873},{"name":"Shimla","lat":31.1048,"lon":77.1734},{"name":"Manali","lat":32.2432,"lon":77.1892},{"name":"Haridwar","lat":29.9457,"lon":78.1642},{"name":"Rishikesh","lat":30.0869,"lon":78.2676},{"name":"Kedarnath","lat":30.7352,"lon":79.0669},{"name":"Badrinath","lat":30.7433,"lon":79.4938},{"name":"Varanasi","lat":25.3176,"lon":82.9739},{"name":"Ayodhya","lat":26.7922,"lon":82.1998},{"name":"Prayagraj","lat":25.4358,"lon":81.8463},{"name":"Kashi","lat":25.3176,"lon":82.9739},{"name":"Lucknow","lat":26.8467,"lon":80.9462},{"name":"Naimisharanyam","lat":27.4437,"lon":80.495},{"name":"Baltal","lat":34.298,"lon":75.312},{"name":"Amarnath Gufa","lat":34.214,"lon":75.503},{"name":"Vaishnodevi","lat":33.029,"lon":74.9515},{"name":"Raghunath Mandir","lat":32.7266,"lon":74.857},{"name":"Bhairavnath Baba","lat":33.036,"lon":74.958},{"name":"Attari - Wagha Border","lat":31.603,"lon":74.571},{"name":"Chintapurni","lat":31.9167,"lon":76.2167},{"name":"Jwalamukhi","lat":31.8753,"lon":76.315},{"name":"Kangra Devi","lat":32.1,"lon":76.268},{"name":"Chamunda","lat":32.167,"lon":76.35},{"name":"Kurukshetra","lat":29.9695,"lon":76.8783},{"name":"Yamunotri","lat":31.0141,"lon":78.4554},{"name":"Uttarkashi","lat":30.7268,"lon":78.4387},{"name":"Gangotri","lat":30.9947,"lon":78.9398},{"name":"Mana","lat":30.7761,"lon":79.4891},{"name":"Gupta Kashi","lat":30.5226,"lon":79.0881},{"name":"Dhaari Devi","lat":30.224,"lon":78.935},{"name":"Joshi Math","lat":30.5543,"lon":79.563},{"name":"Pancha Prayaga View Points","lat":30.2798,"lon":78.9867},{"name":"Gokul","lat":27.433,"lon":77.7167},{"name":"Govardhan","lat":27.5,"lon":77.4667},{"name":"Barsana","lat":27.65,"lon":77.3833},{"name":"Sitamadi","lat":26.59,"lon":85.48},{"name":"Vindyachal","lat":25.04,"lon":82.58},{"name":"Sarnath","lat":25.3811,"lon":83.0228},{"name":"Gaya","lat":24.7914,"lon":85.0002},{"name":"Bodh Gaya","lat":24.6961,"lon":84.9912},{"name":"Jodhpur","lat":26.2389,"lon":73.0243},{"name":"Bikaner","lat":28.0229,"lon":73.3119},{"name":"Jaisalmer","lat":26.9157,"lon":70.9083},{"name":"Pushkar","lat":26.4899,"lon":74.5511},{"name":"Udaipur","lat":24.5854,"lon":73.7125},{"name":"Nathdwara","lat":24.9317,"lon":73.8222},{"name":"Mount Abu","lat":24.5926,"lon":72.7156},{"name":"Ahmedabad","lat":23.0225,"lon":72.5714},{"name":"Dwarka","lat":22.2442,"lon":68.9685},{"name":"Bet Dwarka","lat":22.4556,"lon":69.1172},{"name":"Nageshwar Jyothirling","lat":22.482,"lon":69.115},{"name":"Mul Dwarka","lat":20.76,"lon":70.4},{"name":"Porbandar","lat":21.6417,"lon":69.6293},{"name":"Somnath Jyothirling","lat":20.888,"lon":70.401},{"name":"Gir Forest","lat":21.1245,"lon":70.8242},{"name":"Bhavnagar","lat":21.7645,"lon":72.1519},{"name":"Statue of Unity","lat":21.838,"lon":73.719},{"name":"Mathrugaya","lat":22.24,"lon":68.96},{"name":"Ambaji","lat":24.3314,"lon":72.8465},{"name":"Ujjain","lat":23.1793,"lon":75.7849},{"name":"Omkareshwar","lat":22.2478,"lon":76.1477},{"name":"Bhubaneshwar","lat":20.2961,"lon":85.8245},{"name":"Girija Devi Shakthi Peeth","lat":20.64,"lon":86.65},{"name":"Konark","lat":19.8876,"lon":86.0945},{"name":"Puri","lat":19.8135,"lon":85.8312},{"name":"Chilika Lake","lat":19.7049,"lon":85.3103},{"name":"Raghurajpur","lat":19.923,"lon":85.821},{"name":"Sakhi Gopal","lat":19.95,"lon":85.8167},{"name":"Pipli","lat":20.113,"lon":85.834},{"name":"Trimbakeshwar Jyotirlinga","lat":19.9328,"lon":73.5309},{"name":"Bhimashankar Jyotirlinga","lat":19.0742,"lon":73.535},{"name":"Grishneshwar Jyotirlinga","lat":20.0226,"lon":75.1783},{"name":"Shirdi Sai Baba","lat":19.7668,"lon":74.4754},{"name":"Shani Shingnapur","lat":19.4975,"lon":74.6536},{"name":"Nashik","lat":20.0059,"lon":73.7798},{"name":"Ellora Caves","lat":20.026,"lon":75.177},{"name":"Aurangabad","lat":19.8762,"lon":75.3433},{"name":"Chamundi Hills","lat":12.305,"lon":76.671},{"name":"Hampi","lat":15.335,"lon":76.46},{"name":"Badami","lat":15.92,"lon":75.685},{"name":"Pattadakal","lat":15.9458,"lon":75.8156},{"name":"Aihole","lat":16.015,"lon":75.89},{"name":"Belur","lat":13.1587,"lon":75.8596},{"name":"Halebidu","lat":13.21,"lon":75.99},{"name":"Udupi","lat":13.3409,"lon":74.7421},{"name":"Gokarna","lat":14.5479,"lon":74.3188},{"name":"Munnar","lat":10.0889,"lon":77.0595},{"name":"Thekkady","lat":9.6015,"lon":77.1659},{"name":"Kumarakom","lat":9.6171,"lon":76.4326},{"name":"Kovalam","lat":8.402,"lon":76.9787},{"name":"Thiruvananthapuram","lat":8.5241,"lon":76.9366},{"name":"Varkala","lat":8.7378,"lon":76.7163},{"name":"Mahabalipuram","lat":12.6269,"lon":80.1927},{"name":"Pondicherry","lat":11.9416,"lon":79.8083},{"name":"Thanjavur","lat":10.787,"lon":79.1378},{"name":"Trichy","lat":10.7905,"lon":78.7047},{"name":"Madurai","lat":9.9252,"lon":78.1198},{"name":"Rameswaram","lat":9.2881,"lon":79.3129},{"name":"Dhanushkodi","lat":9.1764,"lon":79.4445},{"name":"Kanyakumari","lat":8.0883,"lon":77.5385},{"name":"Meenakshi Amman Temple","lat":9.9195,"lon":78.1193},{"name":"Charminar","lat":17.3616,"lon":78.4747},{"name":"Golconda Fort","lat":17.3833,"lon":78.4011},{"name":"Chowmahalla Palace","lat":17.359,"lon":78.472},{"name":"Salar Jung Museum","lat":17.3713,"lon":78.4804},{"name":"Qutb Shahi Tombs","lat":17.397,"lon":78.3995},{"name":"Hussain Sagar","lat":17.4239,"lon":78.4738},{"name":"Birla Mandir","lat":17.4071,"lon":78.4704},{"name":"Ramoji Film City","lat":17.2543,"lon":78.6841},{"name":"Shilparamam","lat":17.4503,"lon":78.3803},{"name":"Tsomgo Lake","lat":27.3735,"lon":88.761},{"name":"Baba Mandir","lat":27.39,"lon":88.84},{"name":"Nathula Pass","lat":27.3875,"lon":88.835},{"name":"Rumtek Monastery","lat":27.3317,"lon":88.6075},{"name":"Tiger Hill","lat":27.025,"lon":88.2833},{"name":"Batasia Loop","lat":27.03,"lon":88.26},{"name":"Kamakhya Temple","lat":26.1664,"lon":91.7068},{"name":"Shillong","lat":25.5788,"lon":91.8933},{"name":"Cherrapunji","lat":25.29,"lon":91.7},{"name":"Dawki","lat":25.1917,"lon":92.0167},{"name":"Kaziranga National Park","lat":26.5775,"lon":93.1711},{"name":"Tawang","lat":27.5856,"lon":91.859},{"name":"Bomdila","lat":27.265,"lon":92.416},{"name":"Kohima","lat":25.6751,"lon":94.1086},{"name":"Imphal","lat":24.817,"lon":93.9368}];
const VEHICLES = [{"name": "Sedan", "capacity": 3, "dailyRate": 4000, "extraKmRate": 20}, {"name": "SUV", "capacity": 5, "dailyRate": 7000, "extraKmRate": 30}, {"name": "Tempo Traveller 12 Seater", "capacity": 12, "dailyRate": 14000, "extraKmRate": 45}, {"name": "Tempo Traveller 15 Seater", "capacity": 15, "dailyRate": 15000, "extraKmRate": 46}, {"name": "Tempo Traveller 17 Seater", "capacity": 17, "dailyRate": 16000, "extraKmRate": 48}, {"name": "Tempo Maharaja 10/12 Seater", "capacity": 12, "dailyRate": 16000, "extraKmRate": 48}, {"name": "Urbania 12 Seater", "capacity": 12, "dailyRate": 17000, "extraKmRate": 50}, {"name": "Urbania 15 Seater", "capacity": 15, "dailyRate": 17000, "extraKmRate": 52}, {"name": "Urbania Maharaja 12 Seater", "capacity": 12, "dailyRate": 17000, "extraKmRate": 55}, {"name": "Bus 25 Seater", "capacity": 25, "dailyRate": 20000, "extraKmRate": 65}, {"name": "Bus 27 Seater", "capacity": 27, "dailyRate": 22000, "extraKmRate": 66}, {"name": "Bus 35 Seater", "capacity": 35, "dailyRate": 23000, "extraKmRate": 66}, {"name": "Bus 40 Seater", "capacity": 40, "dailyRate": 25000, "extraKmRate": 68}, {"name": "Bus 45 Seater", "capacity": 45, "dailyRate": 25000, "extraKmRate": 68}, {"name": "Bus 49 Seater", "capacity": 49, "dailyRate": 25000, "extraKmRate": 68}];
const HOTEL_RATES = [{"type": "Deluxe", "Single": 2500, "Double": 3500, "Triple": 4500, "Quad": 6000, "extraBed": 1000}, {"type": "3 Star", "Single": 3500, "Double": 5000, "Triple": 6500, "Quad": 9000, "extraBed": 2000}, {"type": "4 Star", "Single": 4500, "Double": 8000, "Triple": 10000, "Quad": 16000, "extraBed": 2500}, {"type": "5 Star", "Single": 10000, "Double": 18000, "Triple": 25000, "Quad": 35000, "extraBed": 5000}];
const FOOD_ADJUSTMENTS = {"No Food": -1000, "Breakfast Only": -500, "Breakfast + Dinner": 0, "All Meals": 1500};
const WHATSAPP_NUMBER = "919966130722";

function money(v){ return `₹${Math.round(v).toLocaleString('en-IN')}`; }
function findPlace(name){ const n=(name||'').trim().toLowerCase(); return LOCAL_PLACES.find(p=>p.name.toLowerCase()===n) || LOCAL_PLACES.find(p=>p.name.toLowerCase().includes(n)&&n.length>2); }
function haversine(a,b){ const R=6371, toRad=x=>x*Math.PI/180; const dLat=toRad(b.lat-a.lat), dLon=toRad(b.lon-a.lon); const s=Math.sin(dLat/2)**2+Math.cos(toRad(a.lat))*Math.cos(toRad(b.lat))*Math.sin(dLon/2)**2; return 2*R*Math.atan2(Math.sqrt(s),Math.sqrt(1-s)); }
function routeDistance(pickup, places, drop){ const names=[pickup,...places,drop].map(x=>(x||'').trim()).filter(Boolean); let total=0, known=0; for(let i=0;i<names.length-1;i++){ const a=findPlace(names[i]),b=findPlace(names[i+1]); if(a&&b){ total+=haversine(a,b); known++; } } return {km:total,known,segments:Math.max(0,names.length-1)}; }
function childPct(age){ age=Number(age); if(!Number.isFinite(age)||age<=0)return 0; return age<=11?0.5:1; }
function countedChild(age){ return Number(age)>6; }
function roomCount(adults, sharing){ const d={Single:1,Double:2,Triple:3,Quad:4}[sharing]||2; return Math.max(1,Math.ceil(adults/d)); }
function roomPlan(adults, ages, sharing, customRooms){ const extraBedChildren=ages.filter(a=>Number(a)>=6&&Number(a)<12).length; const adultEquivalentChildren=ages.filter(a=>Number(a)>=12).length; const totalAdults=Number(adults)+adultEquivalentChildren; const totalOccupants=totalAdults+extraBedChildren; const capacity={Single:1,Double:2,Triple:3,Quad:4}[sharing]||2; const baseRooms=roomCount(totalAdults,sharing); const rooms=customRooms?Math.max(1,Number(customRooms)):baseRooms; const extraBeds=Math.max(totalOccupants-rooms*capacity,0); return {extraBedChildren,adultEquivalentChildren,totalAdults,totalOccupants,baseRooms,rooms,roomCapacity:capacity,extraBeds}; }
function adjustedRoomRate(hotelType,sharing,food){ const h=HOTEL_RATES.find(x=>x.type===hotelType)||HOTEL_RATES[0]; return Number(h[sharing]||0)+(FOOD_ADJUSTMENTS[food]??0); }
function nights(days){ return Math.max(Number(days)-1,1); }
function minimumKm(days){ return Number(days)*250; }
function extraKm(actualKm,days){ return Math.max(Number(actualKm)-minimumKm(days),0); }
function vehicleCost(vehicle,days,actualKm,pickup,drop){ const routeEnabled=pickup.trim()&&drop.trim()&&pickup.trim().toLowerCase()!==drop.trim().toLowerCase(); const km=routeEnabled?actualKm:minimumKm(days); const extra=extraKm(km,days); return Number(vehicle.dailyRate)*Number(days)+extra*Number(vehicle.extraKmRate); }
function hotelCost(hotelType,sharing,food,days,adults,ages,customRooms){ const rp=roomPlan(adults,ages,sharing,customRooms); const h=HOTEL_RATES.find(x=>x.type===hotelType)||HOTEL_RATES[0]; const rc=rp.rooms*adjustedRoomRate(hotelType,sharing,food)*nights(days); const eb=rp.extraBeds*Number(h.extraBed); return {cost:rc+eb,roomPlan:rp,roomRate:adjustedRoomRate(hotelType,sharing,food),nights:nights(days),extraBedCost:eb}; }
function calculatePackage(state){ const dist=routeDistance(state.pickup,state.places,state.drop); const v=VEHICLES.find(x=>x.name===state.vehicle)||VEHICLES[0]; const h=hotelCost(state.hotel,state.sharing,state.food,state.days,state.adults,state.childAges,state.rooms||null); const vc=vehicleCost(v,state.days,dist.km,state.pickup,state.drop); const base=vc+h.cost; const profit=base*0.10; const group=base+profit; const perAdult=state.adults>0?group/state.adults:group; const childrenCost=state.childAges.reduce((s,a)=>s+perAdult*childPct(a),0); const final=group+childrenCost; const finalPerAdult=state.adults>0?final/state.adults:final; return {dist,vehicle:v,vehicleCost:vc,hotel:h,base,profit,groupPackageCost:group,childrenCost,final,finalPerAdult}; }
function sendWhatsApp(destination,extra=''){ const name=document.getElementById('name')?.value.trim()||''; const phone=document.getElementById('phone')?.value.trim()||''; const message=document.getElementById('message')?.value.trim()||''; const text=`Hello Vishwa Vikshanam Tours,\nI am interested in ${destination}.\nName: ${name}\nPhone / WhatsApp: ${phone}\nRequirements: ${message}\n${extra}`; window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,'_blank'); }
function closeModal(){const m=document.getElementById('tourModal');m.classList.remove('open');m.setAttribute('aria-hidden','true');}
function openTourModal(tour){ document.getElementById('modalTitle').textContent=tour.name; document.getElementById('modalDescription').textContent=tour.description; const im=document.getElementById('modalImage');im.src=tour.image;im.alt=tour.name; document.getElementById('modalPlaces').innerHTML=tour.places.map(p=>`<li>${p}</li>`).join(''); document.getElementById('tourModal').classList.add('open'); document.getElementById('tourModal').setAttribute('aria-hidden','false'); }
function renderTours(){ const grid=document.getElementById('tourGrid'); grid.innerHTML=APP_TOURS.map((t,i)=>`<article class="card"><img src="${t.image}" alt="${t.name.replace(/"/g,'&quot;')}" loading="lazy"><div class="card-body"><h3>${t.name}</h3><p>${t.description}</p><button class="text-btn view-tour-btn" type="button" data-tour="${i}">View Tour Details →</button></div></article>`).join(''); document.querySelectorAll('.view-tour-btn').forEach(b=>b.addEventListener('click',()=>openTourModal(APP_TOURS[Number(b.dataset.tour)]))); document.getElementById('tourCount').textContent=`${APP_TOURS.length} tours`; }
function fillTourSelect(){const s=document.getElementById('customTour'); s.innerHTML='<option value="">Select a tour</option>'+APP_TOURS.map((t,i)=>`<option value="${i}">${t.name}</option>`).join(''); const d=document.getElementById('destination'); if(d)d.innerHTML='<option value="">Select tour</option>'+APP_TOURS.map(t=>`<option>${t.name}</option>`).join('')+'<option>Other</option>';}
function fillPlaces(){ const list=document.getElementById('placeList'); list.innerHTML=LOCAL_PLACES.map(p=>`<label class="place-option"><input type="checkbox" value="${p.name}"><span>${p.name}</span></label>`).join(''); document.querySelectorAll('#placeList input').forEach(x=>x.addEventListener('change',updateCalculator)); const dl=document.getElementById('placeDatalist'); dl.innerHTML=LOCAL_PLACES.map(p=>`<option value="${p.name}">`).join(''); }
function selectedPlaces(){return [...document.querySelectorAll('#placeList input:checked')].map(x=>x.value);}
function renderTourPlaces(){const i=Number(document.getElementById('customTour').value); const box=document.getElementById('tourSuggestedPlaces'); if(!Number.isInteger(i)||!APP_TOURS[i]){box.innerHTML='';return;} box.innerHTML='<strong>Tour places from app:</strong> '+APP_TOURS[i].places.join(' • '); document.querySelectorAll('#placeList input').forEach(x=>{x.checked=APP_TOURS[i].places.includes(x.value)}); updateCalculator();}
function updateAvailableVehicles(){const adults=Number(document.getElementById('adults').value)||1; const ages=[...document.querySelectorAll('.child-age')].map(x=>Number(x.value)).filter(x=>Number.isFinite(x)); const counted=adults+ages.filter(countedChild).length; const s=document.getElementById('vehicle'); const old=s.value; const avail=VEHICLES.filter(v=>v.capacity>=counted); s.innerHTML=avail.map(v=>`<option>${v.name}</option>`).join(''); if(avail.some(v=>v.name===old))s.value=old;}
function buildChildInputs(){ const n=Math.max(0,Math.min(10,Number(document.getElementById('children').value)||0)); const box=document.getElementById('childAges'); box.innerHTML=Array.from({length:n},(_,i)=>`<input class="child-age" type="number" min="0" max="17" placeholder="Child ${i+1} age">`).join(''); document.querySelectorAll('.child-age').forEach(x=>x.addEventListener('input',updateCalculator)); updateAvailableVehicles(); }
function updateCalculator(){ updateAvailableVehicles(); const ages=[...document.querySelectorAll('.child-age')].map(x=>Number(x.value)).filter(x=>Number.isFinite(x)); const state={days:Number(document.getElementById('days').value)||1,adults:Number(document.getElementById('adults').value)||1,childAges:ages,pickup:document.getElementById('pickup').value,drop:document.getElementById('drop').value,places:selectedPlaces(),vehicle:document.getElementById('vehicle').value,hotel:document.getElementById('hotel').value,sharing:document.getElementById('sharing').value,food:document.getElementById('food').value,rooms:document.getElementById('rooms').value}; const r=calculatePackage(state); document.getElementById('routeDistance').textContent=`${r.dist.km.toFixed(1)} km`; document.getElementById('routeStatus').textContent=r.dist.known===r.dist.segments?'App local route data matched':'Some locations are not in the app local coordinate catalog; distance shown uses matched segments only.'; document.getElementById('vehicleCost').textContent=money(r.vehicleCost); document.getElementById('hotelCost').textContent=money(r.hotel.cost); document.getElementById('profitCost').textContent=money(r.profit); document.getElementById('childrenCost').textContent=money(r.childrenCost); document.getElementById('totalCost').textContent=money(r.final); document.getElementById('perAdultCost').textContent=money(r.finalPerAdult); document.getElementById('roomsSummary').textContent=`${r.hotel.roomPlan.rooms} room(s), ${r.hotel.roomPlan.extraBeds} extra bed(s), ${r.hotel.nights} night(s)`; document.getElementById('minimumKm').textContent=`Minimum included distance: ${minimumKm(state.days)} km`; window.currentQuote={state,r};}
function shareCustomQuote(){const q=window.currentQuote;if(!q)return; const s=q.state,r=q.r; const text=`Hello Vishwa Vikshanam Tours,\nCustom Tour Quote\nTour: ${document.getElementById('customTour').selectedOptions[0]?.text||'Custom Tour'}\nDays: ${s.days}\nAdults: ${s.adults}\nChildren: ${s.childAges.join(', ')||'0'}\nPickup: ${s.pickup}\nDrop: ${s.drop}\nRoute Places: ${s.places.join(', ')||'None'}\nVehicle: ${r.vehicle.name}\nHotel: ${s.hotel}\nFood: ${s.food}\nRoom Sharing: ${s.sharing}\nTotal Distance: ${r.dist.km.toFixed(1)} km\nTotal Package Cost: ${money(r.final)}\nPer Adult Cost: ${money(r.finalPerAdult)}`; window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,'_blank');}
document.addEventListener('DOMContentLoaded',()=>{renderTours();fillTourSelect();fillPlaces();document.querySelectorAll('[data-close-modal]').forEach(x=>x.addEventListener('click',closeModal));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});document.getElementById('modalEnquire')?.addEventListener('click',()=>{const t=document.getElementById('modalTitle').textContent;const idx=APP_TOURS.findIndex(x=>x.name===t);if(idx>=0){document.getElementById('customTour').value=String(idx);renderTourPlaces();}closeModal();document.getElementById('custom-tour')?.scrollIntoView({behavior:'smooth'});});document.getElementById('tourSearch')?.addEventListener('input',e=>{const q=e.target.value.toLowerCase();let n=0;document.querySelectorAll('#tourGrid .card').forEach(c=>{const show=c.innerText.toLowerCase().includes(q);c.hidden=!show;if(show)n++});document.getElementById('tourCount').textContent=`${n} tour${n===1?'':'s'}`});document.getElementById('customTour')?.addEventListener('change',renderTourPlaces);document.getElementById('children')?.addEventListener('input',buildChildInputs);['days','adults','pickup','drop','vehicle','hotel','sharing','food','rooms'].forEach(id=>document.getElementById(id)?.addEventListener('input',updateCalculator));['vehicle','hotel','sharing','food'].forEach(id=>document.getElementById(id)?.addEventListener('change',updateCalculator));document.getElementById('shareQuote')?.addEventListener('click',shareCustomQuote);document.getElementById('enquiryForm')?.addEventListener('submit',e=>{e.preventDefault();sendWhatsApp(document.getElementById('destination').value)});buildChildInputs();updateCalculator();});
