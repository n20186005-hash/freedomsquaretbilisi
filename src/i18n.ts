/**
 * ენათა ცენტრალიზებული ლექსიკონი (ka / en / ru).
 * ყველა ხილული ტექსტი ამ ერთ ფაილშია, რომ გვერდის შაბლონი
 * (GuidePage.astro) იყოს ენა-ცნობიერი და არ იყოს სამჯერ გადუმრელი.
 *
 * ენის დამატებისას: დაამატე ჩანაწერი LOCALES-ში, შექმენი შესაბამისი
 * გვერდი (src/pages/<locale>/index.astro) და შევსე ამ ობიექტი იგივე კლავიშებით.
 */

export type Locale = 'ka' | 'en' | 'ru';

export const LOCALES: Locale[] = ['ka', 'en', 'ru'];
export const DEFAULT_LOCALE: Locale = 'ka';

/** თითოეული ენის გვერდის ფართი (canonical/hreflang-ისთვის). */
export const LOCALE_PATHS: Record<Locale, string> = {
  ka: '/',
  en: '/en/',
  ru: '/ru/',
};

/** <html lang> ატრიბუტი. */
export const HTML_LANG: Record<Locale, string> = {
  ka: 'ka',
  en: 'en',
  ru: 'ru',
};

/** Open Graph-ის რეგიონული კოდი. */
export const OG_LOCALE: Record<Locale, string> = {
  ka: 'ka_GE',
  en: 'en_US',
  ru: 'ru_RU',
};

export interface UI {
  consentMessages: Record<string,string>;
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  ogImageAlt: string;
  heroImgAlt: string;
  nightImgAlt: string;

  nav: { about: string; story: string; visit: string; transport: string; nearby: string; map: string; sources: string };

  heroEyebrow: string;
  heroTitleMain: string;
  heroTitleSub: string;
  heroSub: string;
  heroBtnPlan: string;
  heroBtnMap: string;
  googleReviews: string;
  heroFreeStrong: string;
  heroFreeSpan: string;
  heroHoursStrong: string;
  heroHoursSpan: string;
  heroPcStrong: string;
  heroPcSpan: string;
  photoCreditLabel: string;
  photoCreditAuthor: string;
  photoCreditAuthorNight: string;

  aboutKicker: string;
  aboutTitle: string;
  aboutIntro: string;
  aboutCluster: string;
  lastUpdatedLabel: string;
  factLabels: { official: string; address: string; plusCode: string; coords: string; rating: string; hours: string; reach: string };
  factValues: { official: string; address: string; plusCode: string; coords: string; hours: string; reach: string };

  storyKicker: string;
  storyTitle: string;
  storyParas: [string, string];
  timeline: { time: string; text: string }[];

  photoBreakEyebrow: string;
  photoBreakTitle: string;
  photoBreakText: string;
  photoBreakBtn: string;

  visitKicker: string;
  visitTitle: string;
  visitLead: string;
  visitPanels: { title: string; text: string }[];

  transportKicker: string;
  transportTitle: string;
  transportNote: string;
  routes: { tag: string; title: string; text: string }[];

  nearbyKicker: string;
  nearbyTitle: string;
  nearbyLead: string;
  nearbyBlocks: { heading: string; places: { name: string; text: string; dist: string }[] }[];

  mapKicker: string;
  mapTitle: string;
  mapAddress: string;
  mapBtn: string;
  mapAuthorityPre: string;
  mapAuthorityA: string;
  mapAuthorityB: string;

  sourcesKicker: string;
  sourcesTitle: string;
  sourcesLead: string;
  sourcesNotes: string[];
  sourcesMetaUpdated: string;
  sourcesMetaPhoto: string;

  faqKicker: string;
  faqTitle: string;
  faq: [string, string][];

  footerText: string;
  footerNapName: string;
  footerNapAddress: string;
  footerNapPc: string;
  footerPhotoPolicy: string;
  footerLinks: { about: string; faq: string; sources: string; maps: string; govTravel: string; city: string; museum: string };
  cookiePanelText: string;
  cookieAccept: string;
  cookieDecline: string;
  disclaimer: string;

  breadcrumb: { home: string; city: string; country: string };
}

export const ui: Record<Locale, UI> = {
  "ka": {
    "metaTitle": "თავისუფლების მოედანი, თბილისი — Freedom Square",
    "metaDescription": "თბილისის თავისუფლების მოედანი: მდებარეობა, ისტორია, Maps-ის დათარიღებული საათები, ტრანსპორტის დაგეგმვა და კულტურული მიმართულებები. დამოუკიდებელი გზამკვლევი.",
    "ogTitle": "თავისუფლების მოედანი, თბილისი — Freedom Square",
    "ogDescription": "თბილისის თავისუფლების მოედანი: მდებარეობა, ისტორია, Maps-ის დათარიღებული საათები, ტრანსპორტის დაგეგმვა და კულტურული მიმართულებები. დამოუკიდებელი გზამკვლევი.",
    "ogImageAlt": "ორიგინალური ილუსტრაცია · არა ფოტო ან ზუსტი რუკა",
    "heroImgAlt": "ორიგინალური ილუსტრაცია · არა ფოტო ან ზუსტი რუკა",
    "nightImgAlt": "ორიგინალური ილუსტრაცია · არა ფოტო ან ზუსტი რუკა",
    "nav": {
      "about": "მიმოხილვა",
      "story": "ისტორია",
      "visit": "ვიზიტი",
      "transport": "ტრანსპორტი",
      "nearby": "ახლომახლო",
      "map": "რუკა",
      "sources": "წყაროები"
    },
    "heroEyebrow": "თბილისის ისტორიული ცენტრი",
    "heroTitleMain": "თავისუფლების მოედანი",
    "heroTitleSub": "(Freedom Square · თბილისი)",
    "heroSub": "ქალაქის წერტილი, სადაც რუსთაველის გამზირი, სოლოლაკი და ძველი თბილისი ერთმანეთს ხვდება — ოქროსფერი წმინდა გიორგის მონუმენტის გარშემო.",
    "heroBtnPlan": "ვიზიტის დაგეგმვა",
    "heroBtnMap": "Google Maps",
    "googleReviews": "Google შეფასება",
    "heroFreeStrong": "ქალაქის მოედანი",
    "heroFreeSpan": "დაგეგმეთ საფეხმავლო მისვლა",
    "heroHoursStrong": "Maps: 24 საათი",
    "heroHoursSpan": "26.10.2026 · მესამე მხარე",
    "heroPcStrong": "MRV2+8J",
    "heroPcSpan": "თბილისი, საქართველო",
    "photoCreditLabel": "ილუსტრაცია",
    "photoCreditAuthor": "ორიგინალური ილუსტრაცია · არა ფოტო ან ზუსტი რუკა",
    "photoCreditAuthorNight": "ორიგინალური ილუსტრაცია · არა ფოტო ან ზუსტი რუკა",
    "aboutKicker": "მიმოხილვა",
    "aboutTitle": "თავისუფლების მოედანი (Freedom Square) — მოკლე მიმოხილვა.",
    "aboutIntro": "თავისუფლების მოედანი, ცნობილი როგორც Freedom Square ან Liberty Square, თბილისის ცენტრალური ღირსშესანიშნაობაა. სახელების ცვლილებები და წმინდა გიორგის მონუმენტი მას ქალაქის ისტორიის სხვადასხვა პერიოდთან აკავშირებს.",
    "aboutCluster": "ცალკე ვიზიტისთვის შეარჩიეთ რუსთაველის კულტურული შენობები, ძველი თბილისის ქუჩები ან მდინარე და მშვიდობის ხიდი. გადასასვლელები და მისვლა თქვენი საწყისი ადგილის მიხედვით დაგეგმეთ.",
    "lastUpdatedLabel": "26 ოქტომბერი 2026",
    "factLabels": {
      "official": "სახელი",
      "address": "მისამართი",
      "plusCode": "Plus Code",
      "coords": "კოორდინატები",
      "rating": "Google შეფასება",
      "hours": "სამუშაო საათები",
      "reach": "მისვლა"
    },
    "factValues": {
      "official": "თავისუფლების მოედანი (Freedom Square)",
      "address": "2 Freedom Square, თბილისი, საქართველო",
      "plusCode": "MRV2+8J",
      "coords": "41.6933186° N, 44.8015038° E",
      "hours": "2026 წლის 26 ოქტომბერს Google Maps შვიდივე დღეს 24-საათიან წვდომას აჩვენებდა; ეს დათარიღებული ჩანაწერი ღონისძიებების, შეზღუდვების ან სამუშაოების დროს წვდომას არ უზრუნველყოფს.",
      "reach": "გამოიყენეთ TTC-ის მიმდინარე დამგეგმავი"
    },
    "storyKicker": "მოედნის ამბავი",
    "storyTitle": "თავისუფლების მოედნის ისტორია და მნიშვნელობა: ერთი მოედანი, რამდენიმე ეპოქის სახელი.",
    "storyParas": [
      "თავისუფლების მოედანი თბილისის ერთ-ერთი მთავარი ისტორიული და კულტურული კვანძია. მისი მდებარეობა ბუნებრივად აკავშირებს რუსთაველის გამზირს ძველ თბილისთან და სოლოლაკთან, ამიტომ აქ ქალაქის სხვადასხვა ეპოქა ერთ სივრცეში იკითხება.",
      "მე-19 საუკუნის დასაწყისიდან მოედანს სხვადასხვა დანიშნულება და სახელი ჰქონდა. საბჭოთა პერიოდის შემდეგ „თავისუფლების მოედნის“ სახელწოდება კვლავ დამკვიდრდა. დღეს სივრცის ვიზუალური ცენტრი მაღალი სვეტია წმინდა გიორგის ოქროსფერი ქანდაკებით — თანამედროვე თბილისის ერთ-ერთი ყველაზე ამოსაცნობი სილუეტი."
    ],
    "timeline": [
      {
        "time": "მე-19 ს.",
        "text": "XIX საუკუნის დასაწყისში ადგილი შეშით ვაჭრობას უკავშირდებოდა; Georgia Travel შემდგომ სახელების ცვლილებებს აღწერს."
      },
      {
        "time": "1917",
        "text": "„თავისუფლების“ სახელწოდება პირველად გამოჩნდა პოლიტიკურ და საზოგადოებრივ გარდაქმნებთან ერთად."
      },
      {
        "time": "1990-იანი",
        "text": "საბჭოთა სახელწოდებების შემდეგ მოედანს თავისუფლების სახელი დაუბრუნდა."
      },
      {
        "time": "2006",
        "text": "ცენტრში აღმართეს მაღალი სვეტი წმინდა გიორგის ქანდაკებით, ავტორი — ზურაბ წერეთელი."
      }
    ],
    "photoBreakEyebrow": "დღიდან ღამემდე",
    "photoBreakTitle": "ქალაქის მოედანი ორიენტირად.",
    "photoBreakText": "ორიგინალური კონცეპტუალური გრაფიკა ქალაქის სივრცესა და საღამოს ფერებს მიანიშნებს. ეს არ არის მონუმენტის, მიმდინარე განათების, მოძრაობის ან ზუსტი მარშრუტის დოკუმენტური გამოსახულება.",
    "photoBreakBtn": "წყაროები",
    "visitKicker": "ვიზიტის პრაქტიკული ნაწილი",
    "visitTitle": "მდებარეობა და ვიზიტი Freedom Square-ზე — მარტივი გაჩერება, რომელსაც ქალაქის მარშრუტში ჩასმა ყველაზე კარგად მუშაობს.",
    "visitLead": "ორიენტირებისთვის მისამართი და რუკის წერტილი გამოიყენეთ, შემდეგ კი ნებადართული გადასასვლელები და სანახავი ადგილები შეარჩიეთ. ცენტრალურ მონუმენტთან ღია საფეხმავლო მისვლა ავტომატურად არ ივარაუდოთ.",
    "visitPanels": [
      {
        "title": "დრო და განათება",
        "text": "დრო ფოტოების, თანამგზავრებისა და სხვა გაჩერებების მიხედვით შეარჩიეთ. ფიქსირებული ხანგრძლივობა, მშვიდი საათი ან განათების ყოველდღიური განრიგი აქ დადასტურებული არ არის."
      },
      {
        "title": "მოედანი და ცალკე დაწესებულებები",
        "text": "ოფიციალური ტურისტული სტატია ქალაქის მოედანს აღწერს, მაგრამ მოქმედ შესვლის ტარიფს არ უთითებს. მუზეუმებს, ტურებს, ტრანსპორტსა და სხვა მომსახურებებს ცალკე პირობები აქვთ."
      },
      {
        "title": "მანქანით მისვლა",
        "text": "გამგზავრებამდე ნებადართული პარკირება ან ჩამოსმის ადგილი შეარჩიეთ. სპეციალური ვიზიტორთა პარკინგი, მიმდინარე ფასი ან კონკრეტული ოპერატორი აქ გადამოწმებული არ არის."
      },
      {
        "title": "ორიენტაცია ადგილზე",
        "text": "მონუმენტი მოედნის ისტორიული ვიზუალური ორიენტირია. გადაადგილებისთვის რუკის წერტილი და საჯარო ნიშნები გამოიყენეთ, მოძრაობის პირდაპირ გადაკვეთის ნაცვლად."
      },
      {
        "title": "ვიზიტების გაერთიანება",
        "text": "რუსთაველის გამზირი, ძველი თბილისი და მშვიდობის ხიდი სხვადასხვა კულტურულ ან სასეირნო თემას ქმნის. მათი წვდომა და მგზავრობის დრო ცალ-ცალკე დაგეგმეთ."
      }
    ],
    "transportKicker": "დეტალური ტრანსპორტი",
    "transportTitle": "მისასვლელი საწყისი წერტილიდან დაგეგმეთ.",
    "transportNote": "თბილისის სატრანსპორტო კომპანიის გვერდზე მგზავრობის დამგეგმავის, განრიგისა და ავტობუსების მიმდინარე ინფორმაციის ბმულებია. შეამოწმეთ ისინი და ადგილობრივი ცნობები; კონკრეტულ ხაზს, გასასვლელს, ფასს ან დროს არ ვპირდებით.",
    "routes": [
      {
        "tag": "M",
        "title": "მეტროთი მგზავრობის დაგეგმვა",
        "text": "მიმდინარე საქალაქო დამგეგმავში დანიშნულებად Freedom Square ან Liberty Square მოძებნეთ. შეამოწმეთ სადგურის გასასვლელი და საბოლოო საფეხმავლო მისვლა."
      },
      {
        "tag": "B",
        "title": "ავტობუსით მგზავრობა",
        "text": "თქვენი საწყისი ადგილისა და თარიღისთვის ოპერატორის მიმდინარე დამგეგმავი და განრიგი გამოიყენეთ, უცვლელი მარშრუტების სიის ნაცვლად."
      },
      {
        "tag": "↟",
        "title": "ფეხით მისვლა",
        "text": "ძველი თბილისის მარშრუტი მოედანს მოქმედი საჯარო გადასასვლელებით დაუკავშირეთ. სამუშაოებმა ან ღონისძიებებმა გზა შეიძლება შეცვალოს; ყველასთვის ერთიანი დრო არ არსებობს."
      },
      {
        "tag": "T",
        "title": "ტაქსი ან ჩამოსმა",
        "text": "მძღოლთან ნებადართული გაჩერება შეათანხმეთ. ნუ ივარაუდებთ, რომ მანქანა ცენტრალურ მონუმენტთან გაჩერდება."
      }
    ],
    "nearbyKicker": "ახლომახლო",
    "nearbyTitle": "შემდეგი კულტურული გაჩერება შეარჩიეთ.",
    "nearbyLead": "სხვა ღირსშესანიშნაობები ცალკე ვიზიტებად განიხილეთ, საკუთარი საათებითა და დაშვების პირობებით. ქვემოთ თემებია მოცემული და არა გარანტირებული უწყვეტი მარშრუტი.",
    "nearbyBlocks": [
      {
        "heading": "კულტურული მიმართულებები",
        "places": [
          {
            "name": "რუსთაველის გამზირი",
            "text": "Georgia Travel-ის არქიტექტურული მარშრუტი გამზირის კულტურულ შენობებსა და მუზეუმებს მოიცავს. ჯერ კონკრეტული დაწესებულება შეარჩიეთ, შემდეგ მისი მიმდინარე წვდომა შეამოწმეთ.",
            "dist": "კულტურული მარშრუტი"
          },
          {
            "name": "ძველი თბილისი",
            "text": "ისტორიული ქუჩები და მდინარის ნაპირები რუსთაველისგან განსხვავებულ სასეირნო თემას ქმნის. ყველა შესახვევი ხელმისაწვდომ მოკლე გზად არ ჩათვალოთ.",
            "dist": "ცალკე გასეირნება"
          },
          {
            "name": "მშვიდობის ხიდი",
            "text": "მტკვარზე 2010 წელს აშენებული საფეხმავლო ხიდი ქალაქის კიდევ ერთი ღირსშესანიშნაობაა. მისვლა და მიმდინარე წვდომა მოედნისგან ცალკე დაგეგმეთ.",
            "dist": "მდინარის გარემო"
          }
        ]
      },
      {
        "heading": "კვების დაგეგმვა",
        "places": [
          {
            "name": "რეალური ადგილის შერჩევა",
            "text": "დაწესებულების საკუთარი მიმდინარე მენიუ და საათები გამოიყენეთ. გზამკვლევი გადაუმოწმებელ ბიზნესს რეკომენდაციას არ უწევს.",
            "dist": "თქვენი არჩევანი"
          },
          {
            "name": "შეკვეთის დაზუსტება",
            "text": "შეკვეთამდე ჰკითხეთ ინგრედიენტები, ალერგენები, ულუფის ზომა და საბოლოო ფასი, განსაკუთრებით თუ დიეტური მოთხოვნები გაქვთ.",
            "dist": "შეკვეთამდე"
          }
        ]
      }
    ],
    "mapKicker": "რუკაზე",
    "mapTitle": "თავისუფლების მოედანი",
    "mapAddress": "2 Freedom Square<br />თბილისი, საქართველო<br />Plus Code: MRV2+8J",
    "mapBtn": "გახსნა Google Maps-ში",
    "mapAuthorityPre": "ოფიციალური ინფორმაციისთვის იხილეთ",
    "mapAuthorityA": "საქართველოს ტურიზმის ეროვნული ადმინისტრაცია (georgia.travel)",
    "mapAuthorityB": "თბილისის მერია (tbilisi.gov.ge)",
    "sourcesKicker": "წყაროები",
    "sourcesTitle": "წყაროები და დამატებითი ინფორმაცია.",
    "sourcesLead": "ეს გვერდი ეყრდნობა ოფიციალურ და საჯარო წყაროებს. მონაცემები (სატრანსპორტო მარშრუტები, ობიექტების სამუშაო საათები) შეიძლება შეიცვალოს — ვიზიტამდე გადაამოწმეთ შესაბამის ოფიციალურ რესურსზე.",
    "sourcesNotes": [
      "ოფიციალური ტურისტული ისტორია მოედნისა და 2006 წლის მონუმენტის შესახებ.",
      "რუსთაველის ოფიციალური კულტურული მარშრუტი; დაწესებულებებს ცალკე პირობები აქვთ.",
      "ტრანსპორტის ოპერატორის დამგეგმავისა და განრიგის ბმულები.",
      "მესამე მხარის ინფორმაცია შემოწმებულია 26.10.2026; არა ოპერატორის გარანტია.",
      "მუნიციპალური პორტალი მიმდინარე ქალაქური ცნობებისთვის.",
      "ოფიციალური ინფორმაცია ძველი თბილისისა და მდინარის ნაპირების შესახებ."
    ],
    "sourcesMetaUpdated": "ბოლო განახლება:",
    "sourcesMetaPhoto": "ორიგინალური ილუსტრაცია · არა ფოტო ან ზუსტი რუკა",
    "faqKicker": "FAQ",
    "faqTitle": "ხშირად დასმული კითხვები.",
    "faq": [
      [
        "სად მდებარეობს თავისუფლების მოედანი?",
        "თავისუფლების მოედანი (Freedom Square) მდებარეობს თბილისის ცენტრში, საქართველოში, მისამართზე 2 Freedom Square (Plus Code MRV2+8J). ის რუსთაველის გამზირს, სოლოლაკსა და ძველი თბილისს აკავშირებს."
      ],
      [
        "თავისუფლების მოედანზე შესვლა ფასიანია?",
        "ოფიციალურ ტურისტულ სტატიაში მიმდინარე შესვლის ტარიფი ვერ დადასტურდა. მოედანში ნუ აგერევათ მუზეუმი, კერძო ტური ან სხვა ცალკე ფასიანი მომსახურება."
      ],
      [
        "რამდენი დრო დავუთმო მოედანს?",
        "დრო ფოტოების, თანამგზავრებისა და შემდგომი გაჩერებების მიხედვით განსაზღვრეთ. ყველა ვიზიტორისთვის ერთიანი ხანგრძლივობა დადასტურებული არ არის."
      ],
      [
        "რომელია საუკეთესო დრო ფოტოების გადასაღებად?",
        "დღესა და საღამოს პირობები განსხვავდება. გვერდის კონცეპტუალური გრაფიკა მიმდინარე განათებას ან ხალხის რაოდენობას არ ადასტურებს; ადგილზე ნებადართული ხედვის წერტილი შეარჩიეთ."
      ],
      [
        "როგორ მივიდე საზოგადოებრივი ტრანსპორტით?",
        "თქვენი საწყისი ადგილისა და დროისთვის TTC-ის მიმდინარე დამგეგმავი გამოიყენეთ. დანიშნულება Freedom Square ან Liberty Square სახელით მოძებნეთ და საბოლოო საფეხმავლო მისვლა შეამოწმეთ."
      ],
      [
        "სად შეიძლება მანქანის გაჩერება?",
        "მოქმედი პარკინგის ოპერატორი, ფასი ან სპეციალური ვიზიტორთა ადგილი აქ გადამოწმებული არ არის. გამგზავრებამდე ნებადართული პარკირება ან ჩამოსმა დააზუსტეთ."
      ],
      [
        "მოედანი ღამითაც ხელმისაწვდომია?",
        "2026 წლის 26 ოქტომბერს Google Maps შვიდივე დღეს 24-საათიან წვდომას აჩვენებდა. ეს მესამე მხარის დათარიღებული ჩანაწერია და არა შეზღუდვების, ღონისძიებებისა თუ სამუშაოების არყოფნის გარანტია."
      ],
      [
        "რომელი ღირსშესანიშნაობებია მოედნის ახლოს?",
        "განიხილეთ რუსთაველის კულტურული ვიზიტი, ძველი თბილისის გასეირნება ან მშვიდობის ხიდი და მდინარის ნაპირები. თითოეული ადგილის წვდომა და დრო ცალკე დაგეგმეთ."
      ]
    ],
    "footerText": "დამოუკიდებელი, არაკომერციული საგანმანათლებლო ტურისტული გზამკვლევი. ეს არ არის მოედნის, თბილისის მერიის ან საქართველოს ტურიზმის ეროვნული ადმინისტრაციის ოფიციალური საიტი.",
    "footerNapName": "თავისუფლების მოედანი (Freedom Square)",
    "footerNapAddress": "2 Freedom Square, თბილისი, საქართველო",
    "footerNapPc": "Plus Code: MRV2+8J",
    "footerPhotoPolicy": "ორიგინალური ილუსტრაცია · არა ფოტო ან ზუსტი რუკა",
    "footerLinks": {
      "about": "მიმოხილვა",
      "faq": "FAQ",
      "sources": "წყაროები",
      "maps": "Google Maps",
      "govTravel": "Georgia Travel (georgia.travel)",
      "city": "თბილისის მერია",
      "museum": "ეროვნული მუზეუმი"
    },
    "cookiePanelText": "Google Analytics მხოლოდ შენახული თანხმობით იტვირთება; აქვე შეგიძლიათ უარი თქვათ ან თანხმობა გაიტანოთ. ეს არჩევანი მხოლოდ GA-ს აკონტროლებს. გვერდზე Google Maps არის ჩაშენებული; ჰოსტინგმა შეიძლება ცალკე Cloudflare-ის ანალიტიკა დაამატოს. სკრიპტის არსებობა წარმატებულ გაგზავნას არ ადასტურებს.",
    "cookieAccept": "თანხმობა",
    "cookieDecline": "უარი",
    "disclaimer": "დამოუკიდებელი, არაკომერციული საგანმანათლებლო ტურისტული გზამკვლევი. ეს არ არის მოედნის, თბილისის მერიის ან საქართველოს ტურიზმის ეროვნული ადმინისტრაციის ოფიციალური საიტი.",
    "breadcrumb": {
      "home": "მთავარი",
      "city": "თბილისი",
      "country": "საქართველო"
    },
    "consentMessages": {
      "off": "Analytics გამორთულია შენახული თანხმობის დადასტურებამდე.",
      "granted": "თანხმობა შენახულია. Google Analytics შეიძლება ჩაიტვირთოს; თანხმობის გატანა აქვე შეგიძლიათ.",
      "denied": "უარი შენახულია. ამ გვერდზე შემდგომი Analytics გამორთულია; ადრე გაგზავნილი მონაცემები უკან არ ბრუნდება.",
      "removed": "საერთო თანხმობა წაიშალა. აქ Analytics გამორთულია; შემდეგ ვიზიტზე არჩევანი შეიძლება განმეორდეს.",
      "session": "უარი საერთო საცავში ვერ შეინახა. Analytics გამორთულია აქ და ამ ჩანართის სესიაში; სხვა ჩანართში ან ახალ სესიაში ძველი თანხმობა შეიძლება იმოქმედოს.",
      "failed": "უარი ვერ შეინახა. ამ გვერდზე Analytics გამორთულია; ხელახლა გახსნისას ან სხვა ჩანართში ძველი თანხმობა შეიძლება იმოქმედოს.",
      "grantFailed": "თანხმობის შენახვა ვერ დადასტურდა. ამ გვერდზე Analytics გამორთულია; ძველი თანხმობა ხელახლა გახსნისას ან სხვა ჩანართში შეიძლება იმოქმედოს.",
      "remote": "სხვა ჩანართის არჩევანმა აქ Analytics გამორთო. ჩართვა მხოლოდ ამ გვერდზე შენახული თანხმობით შეიძლება.",
      "grantFailedCleared": "თანხმობა ვერ შეინახა. საერთო ნებართვის გაუქმება დადასტურდა; აქ Analytics გამორთულია. შემდეგ ვიზიტზე არჩევანი შეიძლება განმეორდეს.",
      "grantFailedSession": "თანხმობის შენახვა ვერ დადასტურდა. Analytics გამორთულია აქ და ამ ჩანართის სესიაში; ძველი თანხმობა სხვა ჩანართში ან ახალ სესიაში შეიძლება იმოქმედოს."
    }
  },
  "en": {
    "metaTitle": "Freedom Square Tbilisi — Liberty Square, Map & Visiting",
    "metaDescription": "Find Freedom Square in Tbilisi: verified location, the story of Liberty Square, dated Maps hours, transport planning and nearby cultural visits. Independent visitor guide.",
    "ogTitle": "Freedom Square Tbilisi — Liberty Square, Map & Visiting",
    "ogDescription": "Find Freedom Square in Tbilisi: verified location, the story of Liberty Square, dated Maps hours, transport planning and nearby cultural visits. Independent visitor guide.",
    "ogImageAlt": "Original concept illustration · not a photograph or measured map",
    "heroImgAlt": "Original concept illustration · not a photograph or measured map",
    "nightImgAlt": "Original concept illustration · not a photograph or measured map",
    "nav": {
      "about": "Overview",
      "story": "History",
      "visit": "Visit",
      "transport": "Getting there",
      "nearby": "Nearby",
      "map": "Map",
      "sources": "Sources"
    },
    "heroEyebrow": "Historic centre of Tbilisi",
    "heroTitleMain": "Freedom Square",
    "heroTitleSub": "(Liberty Square · Tbilisi)",
    "heroSub": "The city’s meeting point where Rustaveli Avenue, Sololaki and the Old Town converge — around the golden St. George monument.",
    "heroBtnPlan": "Plan your visit",
    "heroBtnMap": "Google Maps",
    "googleReviews": "Google reviews",
    "heroFreeStrong": "City square",
    "heroFreeSpan": "Plan pedestrian access",
    "heroHoursStrong": "Maps: 24 hours",
    "heroHoursSpan": "26 Oct 2026 · third-party listing",
    "heroPcStrong": "MRV2+8J",
    "heroPcSpan": "Tbilisi, Georgia",
    "photoCreditLabel": "Illustration",
    "photoCreditAuthor": "Original concept illustration · not a photograph or measured map",
    "photoCreditAuthorNight": "Original concept illustration · not a photograph or measured map",
    "aboutKicker": "Overview",
    "aboutTitle": "Freedom Square (Liberty Square) — a quick overview.",
    "aboutIntro": "Freedom Square, also called Liberty Square, is a central Tbilisi landmark. Its changing names and the St. George monument connect the square to different periods of the city’s history.",
    "aboutCluster": "Choose a direction for a separate visit: Rustaveli’s cultural buildings, the streets of Old Tbilisi, or the river and Bridge of Peace. Plan crossings and access for your own starting point.",
    "lastUpdatedLabel": "26 October 2026",
    "factLabels": {
      "official": "Name",
      "address": "Address",
      "plusCode": "Plus Code",
      "coords": "Coordinates",
      "rating": "Google rating",
      "hours": "Opening hours",
      "reach": "Getting there"
    },
    "factValues": {
      "official": "Freedom Square (Liberty Square)",
      "address": "2 Freedom Square, Tbilisi, Georgia",
      "plusCode": "MRV2+8J",
      "coords": "41.6933186° N, 44.8015038° E",
      "hours": "Google Maps showed 24 hours all seven days on 26 October 2026; this dated listing does not guarantee access during events, restrictions or works.",
      "reach": "Use the current TTC journey planner"
    },
    "storyKicker": "The square’s story",
    "storyTitle": "The history and meaning of Freedom Square: one square, several eras of names.",
    "storyParas": [
      "Freedom Square is one of Tbilisi’s main historical and cultural crossroads. Its location naturally links Rustaveli Avenue with the Old Town and Sololaki, so here the city’s different eras are read in a single space.",
      "Since the early 19th century the square served different purposes and carried different names. After the Soviet period the name \"Freedom Square\" was restored. Today the visual centre of the space is a tall column with the golden St. George monument — one of modern Tbilisi’s most recognizable silhouettes."
    ],
    "timeline": [
      {
        "time": "19th c.",
        "text": "In the early19th century the area was known for firewood trading; Georgia Travel describes its changing civic names."
      },
      {
        "time": "1917",
        "text": "The name \"Freedom\" first appeared alongside political and social transformations."
      },
      {
        "time": "1990s",
        "text": "After the Soviet-era names, the square regained its freedom name."
      },
      {
        "time": "2006",
        "text": "A tall column with the St. George monument was erected in the centre, by Zurab Tsereteli."
      }
    ],
    "photoBreakEyebrow": "From day to night",
    "photoBreakTitle": "A city square as a point of orientation.",
    "photoBreakText": "The original concept graphics suggest an urban square and evening colours. They do not document the monument, current lighting, traffic or a measured route.",
    "photoBreakBtn": "Sources",
    "visitKicker": "Practical side of the visit",
    "visitTitle": "Location and visiting Freedom Square — a simple stop that fits best into your city route.",
    "visitLead": "Use the address and map point to orient yourself, then choose permitted crossings and viewing places. The central monument and traffic space should not be assumed to have an open pedestrian approach.",
    "visitPanels": [
      {
        "title": "Time and light",
        "text": "Choose a time around the photographs and other stops you want. No fixed visit duration, quiet period or daily lighting schedule is verified here."
      },
      {
        "title": "Admission and separate venues",
        "text": "The official tourism article describes a city square but does not give a current admission tariff. Museums, guided tours, transport and other services have separate conditions."
      },
      {
        "title": "Vehicle arrival",
        "text": "Confirm a permitted parking or drop-off location before travelling. No dedicated visitor parking, current rate or named parking operator is verified by this guide."
      },
      {
        "title": "Finding your position",
        "text": "The monument is the square’s historical visual reference. For navigation use the actual map point and signed public paths, rather than heading directly across traffic."
      },
      {
        "title": "Combining visits",
        "text": "Rustaveli Avenue, Old Tbilisi and the Bridge of Peace offer different cultural or walking themes. Their access and travel time should be planned separately."
      }
    ],
    "transportKicker": "Getting there in detail",
    "transportTitle": "Plan the approach from your starting point.",
    "transportNote": "The Tbilisi Transport Company links a journey planner, timetables and real-time bus information. Check its current planner and local notices; this guide does not guarantee a line, exit, fare or walking time.",
    "routes": [
      {
        "tag": "M",
        "title": "Metro planning",
        "text": "Search for Freedom Square or Liberty Square as your destination in the current city transport planner. Check the station exit and the permitted final walking approach."
      },
      {
        "tag": "B",
        "title": "Bus planning",
        "text": "Use the operator’s current journey planner and timetables for the day and origin of your trip, rather than relying on a fixed list of route numbers."
      },
      {
        "tag": "↟",
        "title": "Walking approach",
        "text": "Connect your Old Tbilisi itinerary to the square using current public crossings. Changes, works or events may affect the route; there is no universal walking time."
      },
      {
        "tag": "T",
        "title": "Taxi or drop-off",
        "text": "Agree on a legal stopping place with the driver. Do not assume a vehicle may stop beside the central monument."
      }
    ],
    "nearbyKicker": "Nearby",
    "nearbyTitle": "Choose the next cultural stop.",
    "nearbyLead": "Treat nearby sights as separate visits with their own opening and admission arrangements. The options below describe themes, not a guaranteed continuous route.",
    "nearbyBlocks": [
      {
        "heading": "Cultural directions",
        "places": [
          {
            "name": "Rustaveli Avenue",
            "text": "Georgia Travel’s architectural itinerary covers cultural buildings and museums along the avenue. Choose the specific institution you want before checking its current access.",
            "dist": "Cultural itinerary"
          },
          {
            "name": "Old Tbilisi",
            "text": "The historical streets and riverbanks form a different walking theme from Rustaveli. Pick stops rather than assuming every lane is an accessible shortcut.",
            "dist": "Separate walk"
          },
          {
            "name": "Bridge of Peace",
            "text": "The pedestrian bridge over the Mtkvari, built in 2010, is another city landmark. Plan its approach and current access separately from the square.",
            "dist": "River setting"
          }
        ]
      },
      {
        "heading": "Planning a meal",
        "places": [
          {
            "name": "Choose an actual venue",
            "text": "Use the venue’s own current menu and opening information. This guide does not endorse an unverified business or claim an address is still trading.",
            "dist": "Your choice"
          },
          {
            "name": "Check the order",
            "text": "Ask about ingredients, allergens, portion sizes and the final price before ordering, especially if you have dietary requirements.",
            "dist": "Before ordering"
          }
        ]
      }
    ],
    "mapKicker": "On the map",
    "mapTitle": "Freedom Square",
    "mapAddress": "2 Freedom Square<br />Tbilisi, Georgia<br />Plus Code: MRV2+8J",
    "mapBtn": "Open in Google Maps",
    "mapAuthorityPre": "For official information see",
    "mapAuthorityA": "National Tourism Administration of Georgia (georgia.travel)",
    "mapAuthorityB": "Tbilisi City Hall (tbilisi.gov.ge)",
    "sourcesKicker": "Sources",
    "sourcesTitle": "Sources and additional information.",
    "sourcesLead": "This page relies on official and public sources. Data (transport routes, opening hours of venues) may change — verify with the relevant official resource before your visit.",
    "sourcesNotes": [
      "Official tourism history of the square and the 2006 monument.",
      "Official cultural itinerary along Rustaveli Avenue; individual venues have separate conditions.",
      "Transport operator’s journey planner and timetable links.",
      "Dated third-party place information checked 26 October 2026; not an operator guarantee.",
      "Municipal portal for current city notices.",
      "Official background on Old Tbilisi and the riverbanks."
    ],
    "sourcesMetaUpdated": "Last updated:",
    "sourcesMetaPhoto": "Original concept illustration · not a photograph or measured map",
    "faqKicker": "FAQ",
    "faqTitle": "Frequently asked questions.",
    "faq": [
      [
        "Where is Freedom Square located?",
        "Freedom Square is in the centre of Tbilisi, Georgia, at 2 Freedom Square (Plus Code MRV2+8J). It links Rustaveli Avenue, Sololaki and the Old Town."
      ],
      [
        "Is entry to Freedom Square paid?",
        "No current admission tariff was verified in the official tourism article. Do not confuse the public square with a museum, private tour or other separately charged service."
      ],
      [
        "How much time should I spend at the square?",
        "Allow time according to your photographs, companions and onward stops. There is no verified standard duration for every visitor."
      ],
      [
        "What is the best time for photos?",
        "Daylight and evening produce different conditions. The concept graphics on this page are not evidence of current lighting or crowd levels; choose a permitted viewpoint on the day."
      ],
      [
        "How do I get there by public transport?",
        "Use the current Tbilisi Transport Company planner for your origin and travel time. Search the destination by Freedom Square or Liberty Square and check the final pedestrian approach."
      ],
      [
        "Where can I park a car?",
        "This guide has not verified a current parking operator, rate or dedicated visitor space. Confirm legal parking or a drop-off before setting out."
      ],
      [
        "Is the square accessible at night?",
        "Google Maps showed 24-hour access all seven days on 26 October 2026. It is a dated third-party snapshot, not a guarantee against restrictions, events or works."
      ],
      [
        "Which landmarks are near the square?",
        "Consider a Rustaveli cultural visit, an Old Tbilisi walk, or the Bridge of Peace and riverbanks. Plan each destination’s access and timing separately."
      ]
    ],
    "footerText": "Independent, nonprofit educational visitor guide. This is not the official website of the square, Tbilisi City Hall or the Georgian National Tourism Administration.",
    "footerNapName": "Freedom Square (Liberty Square)",
    "footerNapAddress": "2 Freedom Square, Tbilisi, Georgia",
    "footerNapPc": "Plus Code: MRV2+8J",
    "footerPhotoPolicy": "Original concept illustration · not a photograph or measured map",
    "footerLinks": {
      "about": "Overview",
      "faq": "FAQ",
      "sources": "Sources",
      "maps": "Google Maps",
      "govTravel": "Georgia Travel (georgia.travel)",
      "city": "Tbilisi City Hall",
      "museum": "National Museum"
    },
    "cookiePanelText": "Google Analytics loads only with a saved grant; you can refuse or withdraw it here. This choice controls GA only. The page embeds Google Maps, and hosting may add separate Cloudflare performance analytics. Script presence does not prove successful delivery.",
    "cookieAccept": "Accept",
    "cookieDecline": "Decline",
    "disclaimer": "Independent, nonprofit educational visitor guide. This is not the official website of the square, Tbilisi City Hall or the Georgian National Tourism Administration.",
    "breadcrumb": {
      "home": "Home",
      "city": "Tbilisi",
      "country": "Georgia"
    },
    "consentMessages": {
      "off": "Analytics is off until a saved grant is confirmed.",
      "granted": "Grant saved. Google Analytics may now load. You can withdraw it here.",
      "denied": "Refusal saved. Further Analytics on this page is off; data already sent cannot be recalled.",
      "removed": "The shared grant was removed. Analytics here is off; a later visit may ask again.",
      "session": "Refusal was not saved in shared storage. Analytics is off here and in this tab session; an old grant may apply in another tab or new session.",
      "failed": "The refusal could not be saved. Analytics is off on this page; an old grant may apply after reopening or in another tab.",
      "grantFailed": "A saved grant was not confirmed. Analytics is off on this page; an old grant may apply after reopening or in another tab.",
      "remote": "A choice in another tab turned Analytics off here. Re-enable only with an explicit saved grant on this page.",
      "grantFailedCleared": "The grant was not saved. Removal of the shared permission was confirmed; Analytics here is off and a later visit may ask again.",
      "grantFailedSession": "A saved grant was not confirmed. Analytics is off here and in this tab session; an old grant may apply in another tab or new session."
    }
  },
  "ru": {
    "metaTitle": "Площадь Свободы в Тбилиси — Liberty Square, карта и посещение",
    "metaDescription": "Площадь Свободы в Тбилиси: точное местоположение, история Liberty Square, датированные часы Maps, планирование транспорта и культурных остановок. Независимый путеводитель.",
    "ogTitle": "Площадь Свободы в Тбилиси — Liberty Square, карта и посещение",
    "ogDescription": "Площадь Свободы в Тбилиси: точное местоположение, история Liberty Square, датированные часы Maps, планирование транспорта и культурных остановок. Независимый путеводитель.",
    "ogImageAlt": "Оригинальная схема · не фотография и не точная карта",
    "heroImgAlt": "Оригинальная схема · не фотография и не точная карта",
    "nightImgAlt": "Оригинальная схема · не фотография и не точная карта",
    "nav": {
      "about": "Обзор",
      "story": "История",
      "visit": "Визит",
      "transport": "Как добраться",
      "nearby": "Рядом",
      "map": "Карта",
      "sources": "Источники"
    },
    "heroEyebrow": "Исторический центр Тбилиси",
    "heroTitleMain": "Площадь Свободы",
    "heroTitleSub": "(Liberty Square · Тбилиси)",
    "heroSub": "Городская точка встречи, где проспект Руставели, Сололаки и Старый город сходятся у золотого памятника Святого Георгия.",
    "heroBtnPlan": "Спланировать визит",
    "heroBtnMap": "Google Maps",
    "googleReviews": "отзывов Google",
    "heroFreeStrong": "Городская площадь",
    "heroFreeSpan": "Спланируйте пешеходный подход",
    "heroHoursStrong": "Maps: 24 часа",
    "heroHoursSpan": "26.10.2026 · третья сторона",
    "heroPcStrong": "MRV2+8J",
    "heroPcSpan": "Тбилиси, Грузия",
    "photoCreditLabel": "Иллюстрация",
    "photoCreditAuthor": "Оригинальная схема · не фотография и не точная карта",
    "photoCreditAuthorNight": "Оригинальная схема · не фотография и не точная карта",
    "aboutKicker": "Обзор",
    "aboutTitle": "Площадь Свободы (Liberty Square) — краткий обзор.",
    "aboutIntro": "Площадь Свободы, также известная как Freedom Square и Liberty Square, — центральная достопримечательность Тбилиси. Смена названий и монумент Святого Георгия связывают её с разными периодами истории города.",
    "aboutCluster": "Выберите отдельное направление: культурные здания Руставели, улицы Старого Тбилиси или реку и Мост Мира. Планируйте переходы и доступ от своей исходной точки.",
    "lastUpdatedLabel": "26 октября 2026",
    "factLabels": {
      "official": "Название",
      "address": "Адрес",
      "plusCode": "Plus Code",
      "coords": "Координаты",
      "rating": "Рейтинг Google",
      "hours": "Часы работы",
      "reach": "Как добраться"
    },
    "factValues": {
      "official": "Площадь Свободы (Liberty Square)",
      "address": "2 Freedom Square, Тбилиси, Грузия",
      "plusCode": "MRV2+8J",
      "coords": "41.6933186° N, 44.8015038° E",
      "hours": "26 октября 2026 года Google Maps показывали круглосуточный доступ все семь дней; эта датированная запись не гарантирует доступ во время мероприятий, ограничений или работ.",
      "reach": "Используйте актуальный планировщик TTC"
    },
    "storyKicker": "История площади",
    "storyTitle": "История и значение площади Свободы: одна площадь, несколько эпох названий.",
    "storyParas": [
      "Площадь Свободы — один из главных исторических и культурных перекрёстков Тбилиси. Её расположение естественным образом связывает проспект Руставели со Старым городом и Сололаки, поэтому здесь разные эпохи города читаются в едином пространстве.",
      "С начала XIX века площадь имела разные назначения и названия. После советского периода название «Площадь Свободы» было восстановлено. Сегодня визуальный центр пространства — высокая колонна с золотым памятником Святого Георгия, один из самых узнаваемых силуэтов современного Тбилиси."
    ],
    "timeline": [
      {
        "time": "XIX в.",
        "text": "В начале XIX века место было связано с торговлей дровами; Georgia Travel описывает дальнейшую смену названий."
      },
      {
        "time": "1917",
        "text": "Название «Свобода» впервые появилось вместе с политическими и общественными преобразованиями."
      },
      {
        "time": "1990-е",
        "text": "После советских названий площадь вновь обрела имя Свободы."
      },
      {
        "time": "2006",
        "text": "В центре установили высокую колонну с памятником Святого Георгия, автор — Зураб Церетели."
      }
    ],
    "photoBreakEyebrow": "От дня к ночи",
    "photoBreakTitle": "Городская площадь как ориентир.",
    "photoBreakText": "Оригинальная концептуальная графика передаёт городское пространство и вечерние цвета. Она не документирует памятник, текущее освещение, движение или точный маршрут.",
    "photoBreakBtn": "Источники",
    "visitKicker": "Практическая сторона визита",
    "visitTitle": "Расположение и посещение площади Свободы — простая остановка, которая лучше всего вписывается в маршрут по городу.",
    "visitLead": "Для ориентации используйте адрес и точку на карте, затем выберите разрешённые переходы и места обзора. Не предполагайте открытый пешеходный подход к центральному монументу через транспортное пространство.",
    "visitPanels": [
      {
        "title": "Время и свет",
        "text": "Выберите время по своим фотографиям и другим остановкам. Фиксированная длительность, тихие часы и ежедневный график подсветки здесь не подтверждены."
      },
      {
        "title": "Площадь и отдельные услуги",
        "text": "Официальная туристическая статья описывает городскую площадь, но не приводит действующего входного тарифа. У музеев, экскурсий, транспорта и других услуг отдельные условия."
      },
      {
        "title": "Прибытие на автомобиле",
        "text": "Заранее уточните разрешённую парковку или место высадки. Специальная парковка посетителей, действующая цена и конкретный оператор здесь не проверены."
      },
      {
        "title": "Ориентация на месте",
        "text": "Монумент — исторический визуальный ориентир площади. Для движения используйте точку карты и общественные указатели, а не прямой путь через транспорт."
      },
      {
        "title": "Сочетание посещений",
        "text": "Руставели, Старый Тбилиси и Мост Мира предлагают разные культурные и прогулочные темы. Планируйте их доступ и время отдельно."
      }
    ],
    "transportKicker": "Как добраться подробно",
    "transportTitle": "Спланируйте подход от исходной точки.",
    "transportNote": "Тбилисская транспортная компания публикует ссылки на планировщик, расписания и информацию об автобусах. Проверяйте актуальные данные и местные объявления; линия, выход, тариф и время пешком не гарантируются.",
    "routes": [
      {
        "tag": "M",
        "title": "Планирование метро",
        "text": "Найдите Freedom Square или Liberty Square как пункт назначения в актуальном городском планировщике. Проверьте выход и разрешённый конечный пешеходный подход."
      },
      {
        "tag": "B",
        "title": "Планирование автобуса",
        "text": "Используйте текущие расписания и планировщик оператора для даты и начала поездки, а не постоянный список номеров маршрутов."
      },
      {
        "tag": "↟",
        "title": "Пешеходный подход",
        "text": "Соединяйте прогулку по Старому Тбилиси с площадью по действующим общественным переходам. Работы или мероприятия могут менять путь; универсального времени нет."
      },
      {
        "tag": "T",
        "title": "Такси или высадка",
        "text": "Согласуйте с водителем законное место остановки. Не предполагайте возможность остановиться у центрального монумента."
      }
    ],
    "nearbyKicker": "Рядом",
    "nearbyTitle": "Выберите следующую культурную остановку.",
    "nearbyLead": "Рассматривайте соседние объекты как отдельные посещения со своими часами и входными условиями. Здесь указаны темы, а не гарантированный непрерывный маршрут.",
    "nearbyBlocks": [
      {
        "heading": "Культурные направления",
        "places": [
          {
            "name": "Проспект Руставели",
            "text": "Архитектурный маршрут Georgia Travel охватывает культурные здания и музеи проспекта. Выберите конкретное учреждение и уточните его действующие условия.",
            "dist": "Культурный маршрут"
          },
          {
            "name": "Старый Тбилиси",
            "text": "Исторические улицы и берега реки предлагают другую прогулочную тему. Не считайте каждый переулок доступным коротким путём.",
            "dist": "Отдельная прогулка"
          },
          {
            "name": "Мост Мира",
            "text": "Пешеходный мост через Мтквари, построенный в 2010 году, — другой городской ориентир. Спланируйте подход и доступ отдельно от площади.",
            "dist": "Речная среда"
          }
        ]
      },
      {
        "heading": "Планирование обеда",
        "places": [
          {
            "name": "Выберите действующее заведение",
            "text": "Используйте его собственное актуальное меню и расписание. Этот путеводитель не рекомендует непроверенные предприятия.",
            "dist": "Ваш выбор"
          },
          {
            "name": "Уточните заказ",
            "text": "Перед заказом спросите об ингредиентах, аллергенах, размере порции и итоговой цене, особенно при диетических ограничениях.",
            "dist": "Перед заказом"
          }
        ]
      }
    ],
    "mapKicker": "На карте",
    "mapTitle": "Площадь Свободы",
    "mapAddress": "2 Freedom Square<br />Тбилиси, Грузия<br />Plus Code: MRV2+8J",
    "mapBtn": "Открыть в Google Maps",
    "mapAuthorityPre": "Официальную информацию см. на",
    "mapAuthorityA": "Национальной туристической администрации Грузии (georgia.travel)",
    "mapAuthorityB": "Мэрии Тбилиси (tbilisi.gov.ge)",
    "sourcesKicker": "Источники",
    "sourcesTitle": "Источники и дополнительная информация.",
    "sourcesLead": "Эта страница опирается на официальные и общедоступные источники. Данные (маршруты транспорта, часы работы заведений) могут меняться — проверьте по соответствующему официальному ресурсу перед визитом.",
    "sourcesNotes": [
      "Официальная туристическая история площади и монумента 2006 года.",
      "Официальный культурный маршрут Руставели; условия учреждений отдельные.",
      "Ссылки оператора на планировщик и расписания.",
      "Сторонняя информация проверена 26.10.2026; не гарантия оператора.",
      "Муниципальный портал актуальных городских объявлений.",
      "Официальный контекст Старого Тбилиси и речных берегов."
    ],
    "sourcesMetaUpdated": "Последнее обновление:",
    "sourcesMetaPhoto": "Оригинальная схема · не фотография и не точная карта",
    "faqKicker": "FAQ",
    "faqTitle": "Часто задаваемые вопросы.",
    "faq": [
      [
        "Где находится площадь Свободы?",
        "Площадь Свободы находится в центре Тбилиси, Грузия, по адресу 2 Freedom Square (Plus Code MRV2+8J). Она связывает проспект Руставели, Сололаки и Старый город."
      ],
      [
        "Вход на площадь Свободы платный?",
        "В официальной туристической статье не подтверждён действующий входной тариф. Не путайте площадь с музеем, частной экскурсией или другой отдельно оплачиваемой услугой."
      ],
      [
        "Сколько времени уделить площади?",
        "Выберите время по фотографиям, спутникам и дальнейшим остановкам. Единой подтверждённой длительности для всех посетителей нет."
      ],
      [
        "Когда лучше фотографировать?",
        "Днём и вечером условия различаются. Концептуальная графика не подтверждает текущую подсветку или число посетителей; выберите разрешённую точку обзора на месте."
      ],
      [
        "Как добраться на общественном транспорте?",
        "Используйте актуальный планировщик Тбилисской транспортной компании для своего начала и времени поездки. Найдите Freedom Square или Liberty Square и проверьте конечный подход."
      ],
      [
        "Где можно припарковать машину?",
        "Здесь не проверены действующий оператор парковки, тариф и специальное место посетителей. Уточните законную парковку или высадку до выезда."
      ],
      [
        "Площадь доступна ночью?",
        "26 октября 2026 года Google Maps показывали круглосуточный доступ все семь дней. Это датированный сторонний снимок, а не гарантия отсутствия ограничений, мероприятий или работ."
      ],
      [
        "Какие достопримечательности рядом с площадью?",
        "Рассмотрите культурный визит на Руставели, прогулку по Старому Тбилиси либо Мост Мира и берега реки. Планируйте доступ и время каждого места отдельно."
      ]
    ],
    "footerText": "Независимый некоммерческий образовательный путеводитель. Это не официальный сайт площади, мэрии Тбилиси или Национальной туристической администрации Грузии.",
    "footerNapName": "Площадь Свободы (Liberty Square)",
    "footerNapAddress": "2 Freedom Square, Тбилиси, Грузия",
    "footerNapPc": "Plus Code: MRV2+8J",
    "footerPhotoPolicy": "Оригинальная схема · не фотография и не точная карта",
    "footerLinks": {
      "about": "Обзор",
      "faq": "FAQ",
      "sources": "Источники",
      "maps": "Google Maps",
      "govTravel": "Georgia Travel (georgia.travel)",
      "city": "Мэрия Тбилиси",
      "museum": "Национальный музей"
    },
    "cookiePanelText": "Google Analytics загружается только при сохранённом согласии; здесь можно отказаться или отозвать его. Выбор управляет только GA. Встроена Google Maps, а хостинг может добавить отдельную аналитику Cloudflare. Наличие скрипта не доказывает успешную передачу.",
    "cookieAccept": "Принять",
    "cookieDecline": "Отклонить",
    "disclaimer": "Независимый некоммерческий образовательный путеводитель. Это не официальный сайт площади, мэрии Тбилиси или Национальной туристической администрации Грузии.",
    "breadcrumb": {
      "home": "Главная",
      "city": "Тбилиси",
      "country": "Грузия"
    },
    "consentMessages": {
      "off": "Analytics выключена до подтверждения сохранённого согласия.",
      "granted": "Согласие сохранено. Google Analytics может загрузиться; отозвать согласие можно здесь.",
      "denied": "Отказ сохранён. Дальнейшая Analytics на странице выключена; ранее отправленные данные не отзываются.",
      "removed": "Общее согласие удалено. Analytics здесь выключена; при следующем визите выбор может повториться.",
      "session": "Отказ не сохранён в общем хранилище. Analytics выключена здесь и в сессии вкладки; старое согласие может действовать в другой вкладке или новой сессии.",
      "failed": "Отказ не удалось сохранить. Analytics на странице выключена; старое согласие может действовать после открытия заново или в другой вкладке.",
      "grantFailed": "Сохранённое согласие не подтверждено. Analytics на странице выключена; старое согласие может действовать после открытия заново или в другой вкладке.",
      "remote": "Выбор в другой вкладке выключил Analytics здесь. Включить её можно только явным сохранённым согласием на этой странице.",
      "grantFailedCleared": "Согласие не сохранено. Отмена общего разрешения подтверждена; Analytics здесь выключена, при следующем визите выбор может повториться.",
      "grantFailedSession": "Сохранённое согласие не подтверждено. Analytics выключена здесь и в сессии вкладки; старое согласие может действовать в другой вкладке или новой сессии."
    }
  }
};

/** ლოკალიზებული სახელი NEARBY_LANDMARKS-ისთვის (name/nameEn/nameRu). */
export function landmarkName(locale: Locale, l: { name: string; nameEn: string; nameRu: string }): string {
  if (locale === 'ka') return l.name;
  if (locale === 'en') return l.nameEn;
  return l.nameRu;
}

/** ლოკალიზებული დისტანცია NEARBY_LANDMARKS-ისთვის. */
export function landmarkDistance(locale: Locale, l: { distance: string; distanceEn: string; distanceRu: string }): string {
  if (locale === 'ka') return l.distance;
  if (locale === 'en') return l.distanceEn;
  return l.distanceRu;
}
