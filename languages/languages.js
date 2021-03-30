const languages = [
    {
        id: "1615819740993", 
        englishText: "Introducing great new features<span class=\"hero__subtitle\">Have you downloaded <span>the new Air Miles app?</span></span>",
        arabicText: "تقديم ميزات جديدة رائعة<span class=\"hero__subtitle\">هل قمت بتحميل تطبيق إيرمايلز الجديد؟</span>"
    }, 
    {
        id: "1615820792396",
        englishText: "The Upgraded Air Miles App<span>Designed to enhance your experience</span>",
        arabicText: "تطبيق إيرمايلز المستحدث<span>صممت لتجربة أفضل</span>"
    },
    {
        id: "1615821458728",
        englishText: "Easy map navigation to find partner locations",
        arabicText: "سهولة البحث عن مواقع الشركاء على الخريطة"
    },
    {
        id: "1615821695069",
        englishText: "Our geolocation feature guarantees an easier shopping experience. Effortlessly navigate through maps to find the Air Miles partners nearest to you.",
        arabicText: "تتضمن ميزة الموقع الجغرافي لدينا تجربة تسوق أسهل. ابحث عن شركاء إيرمايلز الأقرب إليك من خلال تصفح الخريطة"
    },
    {
        id: "1615822150783",
        englishText: "Book Air Miles travel rewards via the app",
        arabicText: "استخدم تطبيق إيرمايلز لحجز مكافآت السفر"
    },
    {
        id: "1615822326015",
        englishText: "Flights, hotels, car rentals and activities can be booked with Air Miles, Air Miles plus cash and now cash only.",
        arabicText: "يمكنكم حجز الرحلات الجوية والفنادق بالإضافة إلى استئجار السيارات من خلال استخدام اميال إيرمايلز وحدها او من خلال استخدام اميال إيرمايلز والدفع نقداً ويمكنكم الحجز الآن من خلال الدفع نقداً فقط"
    },
    {
        id: "1615823603030",
        englishText: "Receive personalised notifications and messages",
        arabicText: "تلقي الإشعارات والرسائل الشخصية"
    },
    {
        id: "1615823747371",
        englishText: "With the new Air Miles app, we will keep you up to date with offers via push notifications. Remember to turn notifications on so that you will never miss an offer!",
        arabicText: "مع تطبيق إيرمايلز الجديد، سنبقيك على إطلاع بالعروض من خلال الإشعارات. تذكر بتشغيل الإشعارات كي لا يفوتك أي من العروض"
    },
    {
        id: "1615823933576",
        englishText: "Discover app exclusive partner offers",
        arabicText: "اكتشف عروض الشركاء الحصرية عبر التطبيق"
    },
    {
        id: "1615824162448",
        englishText: "As a valued Air Miles member, you deserve the best from our app. We have partner offers and competitions only on the app that await you.",
        arabicText: "بصفتك عضواً مهماً في برنامج إير مايلز، ولأنك تستحق الأفضل، لدينا عروض ومسابقات من الشركاء صممت خصيصاً لك على التطبيق فقط"
    },
    {
        id: "1615824262189",
        englishText: "Instant Air Miles exchange to some of your favourite airlines",
        arabicText: "استبدال فوري من اميال إيرمايلز إلى بعض الخطوط الجوية المفضلة لديك"
    },
    {
        id: "1615824370198",
        englishText: "Exchange your Air Miles into airline frequent flyer programmes allowing you to fly sooner to your dream destination.",
        arabicText: "إستبدل اميال إيرمايلز بأميال برنامج المسافر الدائم لدى شركات الطيران وقم بالسفر بأسرع وقت إلى الوجهة التي تحلم بها"
    },
    {
        id: "1615824529376",
        englishText: "Access account information on the go",
        arabicText: "التمكن من الوصول إلى معلومات الحساب أينما كنت"
    },
    {
        id: "1615824718186",
        englishText: "With a single login, you can view your account, check recent transactions and any Air Miles due to expire.",
        arabicText: "من خلال تسجيل الدخول مرة واحدة، يمكنك الاضطلاع على حسابك وعلى آخر العمليات واميال إيرمايلز التي ستنتهي صلاحيتها"
    },
    {
        id: "1615824893543",
        englishText: "Easy map navigation to find partner locations",
        arabicText: "سهولة البحث عن مواقع الشركاء على الخريطة"
    },
    {
        id: "1615824951916",
        englishText: "Our geolocation feature guarantees an easier shopping experience. Effortlessly navigate through maps to find the Air Miles partners nearest to you.",
        arabicText: "تتضمن ميزة الموقع الجغرافي لدينا تجربة تسوق أسهل. ابحث عن شركاء إيرمايلز الأقرب إليك من خلال تصفح الخريطة"
    },
    {
        id: "1615824997601",
        englishText: "Book Air Miles travel rewards via the app",
        arabicText: "استخدم تطبيق إيرمايلز لحجز مكافآت السفر"
    },
    {
        id: "1615825092021",
        englishText: "Flights, hotels, car rentals and activities can be booked with Air Miles, Air Miles plus cash and now cash only.",
        arabicText: "يمكنكم حجز الرحلات الجوية والفنادق بالإضافة إلى استئجار السيارات من خلال استخدام اميال إيرمايلز وحدها او من خلال استخدام اميال إيرمايلز والدفع نقداً ويمكنكم الحجز الآن من خلال الدفع نقداً فقط"
    },
    {
        id: "1615825193277",
        englishText: "Receive personalised notifications and messages",
        arabicText: "تلقي الإشعارات والرسائل الشخصية"
    },
    {
        id: "1615825231920",
        englishText: "With the new Air Miles app, we will keep you up to date with offers via push notifications. Remember to turn notifications on so that you will never miss an offer!",
        arabicText: "مع تطبيق إيرمايلز الجديد، سنبقيك على إطلاع بالعروض من خلال الإشعارات. تذكر بتشغيل الإشعارات كي لا يفوتك أي من العروض"
    },
    {
        id: "1615825320543",
        englishText: "Discover app exclusive partner offers",
        arabicText: "اكتشف عروض الشركاء الحصرية عبر التطبيق"
    },
    {
        id: "1615825352473",
        englishText: "As a valued Air Miles member, you deserve the best from our app. We have partner offers and competitions only on the app that await you.",
        arabicText: "بصفتك عضواً مهماً في برنامج إير مايلز، ولأنك تستحق الأفضل، لدينا عروض ومسابقات من الشركاء صممت خصيصاً لك على التطبيق فقط"
    },
    {
        id: "1615825393243",
        englishText: "Instant Air Miles exchange to some of your favourite airlines",
        arabicText: "استبدال فوري من اميال إيرمايلز إلى بعض الخطوط الجوية المفضلة لديك"
    },
    {
        id: "1615825479192",
        englishText: "Exchange your Air Miles into airline frequent flyer programmes allowing you to fly sooner to your dream destination.",
        arabicText: "إستبدل اميال إيرمايلز بأميال برنامج المسافر الدائم لدى شركات الطيران وقم بالسفر بأسرع وقت إلى الوجهة التي تحلم بها"
    },
    {
        id: "1615825612921",
        englishText: "Access account information on the go",
        arabicText: "التمكن من الوصول إلى معلومات الحساب أينما كنت"
    },
    {
        id: "1615825657115",
        englishText: "With a single login, you can view your account, check recent transactions and any Air Miles due to expire.",
        arabicText: "من خلال تسجيل الدخول مرة واحدة، يمكنك الاضطلاع على حسابك وعلى آخر العمليات واميال إيرمايلز التي ستنتهي صلاحيتها"
    },
    {
        id: "1615825824853",
        englishText: "Explore the app today and spoil yourself with some amazing features, offers and rewards!",
        arabicText: "!قم باستكشاف التطبيق اليوم ودلل نفسك ببعض الميزات الرائعة بالإضافة إلى العروض والمكافآت المذهلة"
    },
    {
        id: "1615826022193",
        englishText: "Copyright 2020 Aimia Middle East",
        arabicText: "حقوق النشر 2020 ايميا الشرق الاوسط"
    },
    {
        id: "1615826124885",
        englishText: "Privacy",
        arabicText: "خصوصية"
    },
    {
        id: "1615826324498",
        englishText: "FAQs",
        arabicText: "أسئلة وأجوبة"
    }
];
