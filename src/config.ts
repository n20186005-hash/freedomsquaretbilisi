/**
 * ერთადერთი მონაცემთა წყარო საიტისთვის:
 * დომენი, ობიექტის (TouristAttraction) NAP მონაცემები, ახლომდებარე
 * ღირსშესანიშნაობები და ოფიციალური წყაროები (E-E-A-T).
 *
 * შეცვალეთ მხოლოდ ეს ფაილი, როცა ობიექტის მონაცემები განახლდება.
 */

export const DOMAIN = 'freedomsquaretbilisi.com';
export const SITE_URL = `https://${DOMAIN}`;

/** საიტის ბოლო განახლების თარიღი (ISO 8601). */
export const LAST_UPDATED = '2026-10-26';

export const ATTRACTION = {
  /** ქართული ოფიციალური სახელი (Google Maps-ის NAP-ის შესაბამისი). */
  name: 'თავისუფლების მოედანი',
  /** ინგლისური სახელი — დომენის მნიშვნელობის შესაბამისი (freedomsquaretbilisi.com). */
  nameEn: 'Freedom Square',
  /** რუსული სახელი. */
  nameRu: 'Площадь Свободы',
  /** მოკლე/ხმარებაში გავრცელებული სახელი. */
  shortName: 'Freedom Square',
  /** ყველა ალტერნატიული სახელი ერთად, Schema.org-ისთვის. */
  alternateNames: [
    'Freedom Square',
    'Liberty Square',
    'Freedom Square Tbilisi',
    'Площадь Свободы',
    'თავისუფლების მოედანი',
  ],
  city: 'თბილისი',
  cityEn: 'Tbilisi',
  cityRu: 'Тбилиси',
  region: 'Tbilisi',
  country: 'საქართველო',
  countryEn: 'Georgia',
  countryCode: 'GE',
  streetAddress: '2 Freedom Square',
  plusCode: 'MRV2+8J',
  latitude: 41.6933186,
  longitude: 44.8015038,
  mapsShareUrl: 'https://maps.app.goo.gl/rqxiNyCApkLgwuFy7',
  /** Place identity is retained; embed viewport coordinates are not the place point. */
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5298.9932149490005!2d44.80150381312099!3d41.693992271142584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d57d314f4a7%3A0x692f47f1da1dd66a!2z56ys5q-U5Yip5pav6Ieq55Sx5bm_5Zy6!5e1!3m2!1ska!2sge!4v1789027312134!5m2!1ska!2sge',
  rating: 4.7,
  reviewCount: 17715,
  mapsChecked: '2026-10-26',
} as const;

/** ოფიციალური/სამთავრობო რესურსები (.gov / .org). */
export const GOVT_TOURISM_URL = 'https://georgia.travel/';
export const GOVT_CITY_URL = 'https://tbilisi.gov.ge/';
export const NATIONAL_MUSEUM_URL = 'https://museum.ge/';

/** ახლომდებარე ღირსშესანიშნაობების სემანტიკური კლასტერი. */
export const NEARBY_LANDMARKS = [
 {name:'რუსთაველის გამზირი',nameEn:'Rustaveli Avenue',nameRu:'Проспект Руставели',distance:'ქალაქის მარშრუტი',distanceEn:'City itinerary',distanceRu:'Городской маршрут'},
 {name:'ძველი თბილისი',nameEn:'Old Tbilisi',nameRu:'Старый Тбилиси',distance:'ცალკე გასეირნება',distanceEn:'Separate walk',distanceRu:'Отдельная прогулка'},
 {name:'მშვიდობის ხიდი',nameEn:'Bridge of Peace',nameRu:'Мост Мира',distance:'მდინარის გადაკვეთა',distanceEn:'River crossing',distanceRu:'Переправа через реку'},
] as const;
export const SOURCES = [
 {name:'Georgia Travel — Liberty Square',url:'https://georgia.travel/liberty-square-tbilisi'},
 {name:'Georgia Travel — Rustaveli Avenue',url:'https://georgia.travel/popular-trips/architectural-tour-of-rustaveli-avenue'},
 {name:'Tbilisi Transport Company',url:'https://ttc.com.ge/en'},
 {name:'Google Maps — Liberty Square',url:'https://maps.app.goo.gl/rqxiNyCApkLgwuFy7'},
 {name:'Tbilisi City Hall',url:'https://tbilisi.gov.ge/'},
 {name:'Georgia Travel — Old Tbilisi',url:'https://georgia.travel/strolling-through-the-old-city-of-tbilisi'},
] as const;
