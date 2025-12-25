const content = {
  hero: {
    title: "حول قائمتك إلى تجربة رقمية مميزة",
    subtitle: "ارفع مستوى مطعمك أو مقهاك مع نظام القوائم الرقمية التفاعلية. اجذب عملائك بتصميم أنيق وتجربة مستخدم سلسة.",
    ctas: [
      { label: "ابدأ الآن", action: "#registration-modal" },
      { label: "شاهد العرض التوضيحي", action: "#demo-video" }
    ],
    stats: [
      { label: "عميل راضٍ", value: "1000+" },
      { label: "قائمة رقمية", value: "50000+" },
      { label: "وقت تشغيل", value: "99.9%" }
    ],
    assets: { illustration: "./assets/hero-illustration.svg", blobs: [] } // Blobs will be CSS generated for animation
  },
  features: [
    { icon: "./assets/icon-qr.svg", title: "قوائم QR ذكية", description: "أنشئ قوائم طعام رقمية تفاعلية يمكن لعملائك الوصول إليها عبر مسح رمز QR." },
    { icon: "./assets/icon-updates.svg", title: "تحديثات فورية", description: "غيّر قوائمك وأسعارك في الوقت الفعلي دون الحاجة لإعادة الطباعة." },
    { icon: "./assets/icon-analytics.svg", title: "تحليلات متقدمة", description: "احصل على رؤى قيمة حول تفضيلات عملائك وأداء قوائمك." },
    { icon: "./assets/icon-multilingual.svg", title: "دعم متعدد اللغات", description: "قدم قوائمك بلغات متعددة لتلبية احتياجات جميع عملائك." },
    { icon: "./assets/icon-responsive.svg", title: "تصميم متجاوب", description: "قوائم مصممة لتبدو رائعة على أي جهاز، من الجوال إلى الشاشات الكبيرة." },
    { icon: "./assets/icon-support.svg", title: "دعم فني 24/7", description: "فريق دعم فني متاح على مدار الساعة لمساعدتك في أي وقت." }
  ],
  howItWorks: [
    { step: 1, title: "سجل حسابك", description: "ابدأ بإنشاء حسابك الخاص في منصتنا بضع خطوات بسيطة.", icon: "./assets/step-register.svg" },
    { step: 2, title: "أضف قائمتك", description: "قم بإعداد وتخصيص قائمة طعامك الرقمية بسهولة ومرونة.", icon: "./assets/step-menu.svg" },
    { step: 3, title: "احصل على رمز QR", description: "سنقوم بإنشاء رمز QR فريد لقائمتك لمشاركتها مع عملائك.", icon: "./assets/step-qr.svg" },
    { step: 4, title: "ابدأ الاستخدام", description: "استمتع بتجربة قائمة طعام رقمية متطورة تدهش عملائك." , icon: "./assets/step-use.svg"}
  ],
  pricing: [
    {
      plan: "أساسي",
      price: "99 رس",
      period: "ربع سنوي",
      highlighted: false,
      features: [
        "قائمة رقمية واحدة",
        "50 منتج كحد أقصى",
        "دعم فني محدود",
        "تحليلات أساسية"
      ],
      cta: "اختر الباقة الأساسية"
    },
    {
      plan: "احترافي",
      price: "199 رس",
      period: "نصف سنوي",
      highlighted: true,
      features: [
        "3 قوائم رقمية",
        "منتجات غير محدودة",
        "دعم فني 24/7",
        "تحليلات متقدمة",
        "تخصيص كامل للقائمة"
      ],
      cta: "اختر الباقة الاحترافية"
    },
    {
      plan: "مؤسسي",
      price: "399 رس",
      period: "سنوي",
      highlighted: false,
      features: [
        "قوائم رقمية غير محدودة",
        "منتجات غير محدودة",
        "دعم فني VIP",
        "تحليلات شاملة وتقارير",
        "مدير حساب مخصص"
      ],
      cta: "اختر الباقة المؤسسية"
    }
  ],
  faq: [
    {
      question: "ما هي القوائم الرقمية ولماذا أحتاجها؟",
      answer: "القوائم الرقمية هي نسخ إلكترونية من قوائم الطعام التقليدية، يمكن عرضها على الهواتف الذكية عبر مسح رمز QR. تساعدك على تحديث قائمتك بسهولة، تقليل تكاليف الطباعة، وتحسين تجربة عملائك بتصميم تفاعلي وجذاب."
    },
    {
      question: "هل يمكنني تعديل قائمتي بعد إنشائها؟",
      answer: "نعم بالتأكيد! يمكنك تعديل قائمتك في أي وقت ومن أي مكان عبر لوحة التحكم الخاصة بك. ستظهر التغييرات لعملائك بشكل فوري."
    },
    {
      question: "هل يدعم النظام لغات متعددة؟",
      answer: "نعم، نظامنا يدعم لغات متعددة. يمكنك إضافة قوائمك بلغات مختلفة لخدمة قاعدة أوسع من العملاء وتوفير تجربة مخصصة لهم."
    },
    {
      question: "كيف أحصل على رمز QR لقائمتي؟",
      answer: "بعد إعداد قائمتك، سيقوم النظام تلقائيًا بإنشاء رمز QR فريد يمكنك طباعته وعرضه في مطعمك أو مقهاك. يمكن للعملاء مسحه للوصول إلى قائمتك الرقمية."
    },
    {
      question: "ماذا لو واجهت مشكلة أو احتجت إلى مساعدة؟",
      answer: "فريق الدعم الفني لدينا متاح على مدار الساعة طوال أيام الأسبوع لمساعدتك في أي استفسارات أو مشاكل قد تواجهها. يمكنك التواصل معنا عبر الهاتف، البريد الإلكتروني، أو الدردشة المباشرة."
    }
  ],
  ctaBanner: {
    title: "جاهز لتحويل تجربة عملائك؟",
    subtitle: "ابدأ اليوم واستمتع بجميع الميزات التي نقدمها لعملك.",
    button: { label: "ابدأ تجربتك المجانية الآن", action: "#registration-modal" }
  },
  footer: {
    logo: "شعارك",
    quickLinks: [
      { label: "الرئيسية", href: "#hero" },
      { label: "المميزات", href: "#features" },
      { label: "الأسعار", href: "#pricing" },
      { label: "كيف يعمل", href: "#how-it-works" },
      { label: "الأسئلة الشائعة", href: "#faq" }
    ],
    socials: [
      { icon: "fab fa-facebook-f", href: "#" },
      { icon: "fab fa-twitter", href: "#" },
      { icon: "fab fa-instagram", href: "#" },
      { icon: "fab fa-linkedin-in", href: "#" }
    ],
    copyright: "جميع الحقوق محفوظة &copy; 2023"
  },
  supportModal: {
    title: "كيف يمكننا مساعدتك؟",
    subtitle: "املأ النموذج وسنتواصل معك في أقرب وقت ممكن.",
    formFields: [
      { id: "name", label: "الاسم الكامل", type: "text", placeholder: "أدخل اسمك الكامل" },
      { id: "phone", label: "رقم الهاتف", type: "tel", placeholder: "أدخل رقم هاتفك" },
      { id: "email", label: "البريد الإلكتروني", type: "email", placeholder: "أدخل بريدك الإلكتروني" },
      { id: "service", label: "نوع الخدمة المطلوبة", type: "select", options: ["استفسار عام", "دعم فني", "مشكلة في الحساب", "اقتراح"], placeholder: "اختر نوع الخدمة" },
      { id: "message", label: "رسالتك", type: "textarea", placeholder: "كيف يمكننا مساعدتك اليوم؟" }
    ],
    socialLinks: [
      { icon: "fab fa-whatsapp", href: "#" },
      { icon: "fab fa-twitter", href: "#" },
      { icon: "fas fa-envelope", href: "#" }
    ],
    illustration: "./assets/support-illustration.svg",
    confirmationMessage: "شكراً لك! لقد تم استلام رسالتك بنجاح وسنتواصل معك قريباً."
  }
};
