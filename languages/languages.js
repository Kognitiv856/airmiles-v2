const languages = [
    {
        id: "1615819740993", 
        englishText: "Introducing great new features<span class=\"hero__subtitle\">Have you downloaded <span>the new Air Miles app?</span></span>",
        arabicText: "تقديم ميزات جديدة رائعة<span class=\"hero__subtitle\">هل قمت بتنزيل ملفات<span>تطبيق أميال جوية الجديد؟</span></span>"
    }, 
    {
        id: "1615820792396",
        englishText: "The Upgraded Air Miles App<span>Designed to enhance your experience</span>",
        arabicText: "ترقية تطبيق أميال جوية<span>مصممة لتحسين تجربتك</span>"
    },
    {
        id: "1615821458728",
        englishText: "Easy map navigation to find partner locations",
        arabicText: "سهولة التنقل في الخريطة للعثور على مواقع الشركاء"
    },
    {
        id: "1615821695069",
        englishText: "Our geolocation feature guarantees an easier shopping experience. Effortlessly navigate through maps to find the Air Miles partners nearest to you.",
        arabicText: "تضمن ميزة تحديد الموقع الجغرافي لدينا تجربة تسوق أسهل. تصفح الخرائط بسهولة للعثور على شركاء Air Miles الأقرب إليك."
    },
    {
        id: "1615822150783",
        englishText: "Book Air Miles travel rewards via the app",
        arabicText: "احجز مكافآت سفر أميال جوية عبر التطبيق"
    },
    {
        id: "1615822326015",
        englishText: "Flights, hotels, car rentals and activities can be booked with Air Miles, Air Miles plus cash and now cash only.",
        arabicText: "يمكن حجز الرحلات الجوية والفنادق واستئجار السيارات والأنشطة باستخدام أميال جوية و أميال جوية بالإضافة إلى النقد والآن نقدًا فقط."
    },
    {
        id: "1615823603030",
        englishText: "Receive personalised notifications and messages",
        arabicText: "تلقي الإخطارات والرسائل الشخصية"
    },
    {
        id: "1615823747371",
        englishText: "With the new Air Miles app, we will keep you up to date with offers via push notifications. Remember to turn notifications on so that you will never miss an offer!",
        arabicText: "مع تطبيق أميال جوية الجديد ، سنبقيك على اطلاع دائم بالعروض عبر دفع الإخطارات. تذكر تشغيل الإشعارات حتى لا يفوتك أي عرض!"
    },
    {
        id: "1615823933576",
        englishText: "Discover app exclusive partner offers",
        arabicText: "اكتشف عروض شركاء التطبيق الحصرية"
    },
    {
        id: "1615824162448",
        englishText: "As a valued Air Miles member, you deserve the best from our app. We have partner offers and competitions only on the app that await you.",
        arabicText: "بصفتك عضوًا مهمًا في Air Miles ، فأنت تستحق الأفضل من تطبيقنا. لدينا عروض ومسابقات شركاء فقط على التطبيق الذي ينتظرك."
    },
    {
        id: "1615824262189",
        englishText: "Instant Air Miles exchange to some of your favourite airlines",
        arabicText: "تبادل أميال أميال جوية مع بعض شركات الطيران المفضلة لديك"
    },
    {
        id: "1615824370198",
        englishText: "Exchange your Air Miles into airline frequent flyer programmes allowing you to fly sooner to your dream destination.",
        arabicText: "استبدل أميال جوية الخاصة بك ببرامج المسافر الدائم لشركة الطيران ، مما يتيح لك السفر في وقت أقرب إلى الوجهة التي تحلم بها."
    },
    {
        id: "1615824529376",
        englishText: "Access account information on the go",
        arabicText: "الوصول إلى معلومات الحساب أثناء التنقل"
    },
    {
        id: "1615824718186",
        englishText: "With a single login, you can view your account, check recent transactions and any Air Miles due to expire.",
        arabicText: "من خلال تسجيل دخول واحد ، يمكنك عرض حسابك ، والتحقق من المعاملات الأخيرة وأي أميال جوية على وشك الانتهاء."
    },
    {
        id: "1615824893543",
        englishText: "Easy map navigation to find partner locations",
        arabicText: "سهولة التنقل في الخريطة للعثور على مواقع الشركاء"
    },
    {
        id: "1615824951916",
        englishText: "Our geolocation feature guarantees an easier shopping experience. Effortlessly navigate through maps to find the Air Miles partners nearest to you.",
        arabicText: "تضمن ميزة تحديد الموقع الجغرافي لدينا تجربة تسوق أسهل. تصفح الخرائط بسهولة للعثور على شركاء أميال جوية الأقرب إليك."
    },
    {
        id: "1615824997601",
        englishText: "Book Air Miles travel rewards via the app",
        arabicText: "احجز مكافآت سفر أميال جوية عبر التطبيق"
    },
    {
        id: "1615825092021",
        englishText: "Flights, hotels, car rentals and activities can be booked with Air Miles, Air Miles plus cash and now cash only.",
        arabicText: "يمكن حجز الرحلات الجوية والفنادق واستئجار السيارات والأنشطة باستخدام أميال جوية و أميال جوية بالإضافة إلى النقد والآن نقدًا فقط."
    },
    {
        id: "1615825193277",
        englishText: "Receive personalised notifications and messages",
        arabicText: "تلقي الإخطارات والرسائل الشخصية"
    },
    {
        id: "1615825231920",
        englishText: "With the new Air Miles app, we will keep you up to date with offers via push notifications. Remember to turn notifications on so that you will never miss an offer!",
        arabicText: "مع تطبيق أميال جوية الجديد ، سنبقيك على اطلاع دائم بالعروض عبر دفع الإخطارات. تذكر تشغيل الإشعارات حتى لا يفوتك أي عرض!"
    },
    {
        id: "1615825320543",
        englishText: "Discover app exclusive partner offers",
        arabicText: "اكتشف عروض شركاء التطبيق الحصرية"
    },
    {
        id: "1615825352473",
        englishText: "As a valued Air Miles member, you deserve the best from our app. We have partner offers and competitions only on the app that await you.",
        arabicText: "بصفتك عضوًا مهمًا في أميال جوية ، فأنت تستحق الأفضل من تطبيقنا. لدينا عروض ومسابقات شركاء فقط على التطبيق الذي ينتظرك."
    },
    {
        id: "1615825393243",
        englishText: "Instant Air Miles exchange to some of your favourite airlines",
        arabicText: "تبادل أميال أميال جوية مع بعض شركات الطيران المفضلة لديك"
    },
    {
        id: "1615825479192",
        englishText: "Exchange your Air Miles into airline frequent flyer programmes allowing you to fly sooner to your dream destination.",
        arabicText: "استبدل أميال جوية الخاصة بك ببرامج المسافر الدائم لشركة الطيران ، مما يتيح لك السفر في وقت أقرب إلى الوجهة التي تحلم بها."
    },
    {
        id: "1615825612921",
        englishText: "Access account information on the go",
        arabicText: "الوصول إلى معلومات الحساب أثناء التنقل"
    },
    {
        id: "1615825657115",
        englishText: "With a single login, you can view your account, check recent transactions and any Air Miles due to expire.",
        arabicText: "من خلال تسجيل دخول واحد ، يمكنك عرض حسابك ، والتحقق من المعاملات الأخيرة وأي أميال جوية على وشك الانتهاء."
    },
    {
        id: "1615825824853",
        englishText: "Explore the app today and spoil yourself with some amazing features, offers and rewards!",
        arabicText: "استكشف التطبيق اليوم ودلل نفسك ببعض الميزات والعروض والمكافآت المذهلة!"
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
