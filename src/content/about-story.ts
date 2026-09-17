export type StorySection = {
  heading?: string;
  paragraphs: string[];
};

export type AboutStory = {
  title: string;
  intro: string[];
  sections: StorySection[];
};

export const aboutStory: Record<'en' | 'ta' | 'si', AboutStory> = {
  en: {
    title: 'Our Story',
    intro: [
      "The Upcountry Education Development Society (UEDS) is a community-driven, non-profit social organisation established in 2006 in Colombo. Its origins lie in the experiences of young people who migrated from Sri Lanka's upcountry region to the capital in search of employment and better opportunities. What began as a network of mutual support developed into an organisation dedicated to improving education and strengthening the social development of upcountry communities.",
      'These young people faced considerable challenges while establishing their lives in Colombo. Financial hardship, limited accommodation, social isolation and the absence of a dependable support network created a shared need for cooperation. They began helping one another, irrespective of their occupations or economic circumstances. Their connection to their home communities, combined with their experience of hardship, became the foundation of a wider commitment to service.',
      'As this informal network grew, its members recognised that their collective efforts could extend beyond supporting one another in Colombo. They wanted to contribute to the long-term progress of the communities from which they had come. This shared purpose led to the establishment of UEDS in 2006, with education becoming a central focus of its work.'
    ],
    sections: [
      {
        heading: 'Education as a pathway to progress',
        paragraphs: [
          "UEDS's educational mission reflects the ambition to help children from plantation and other upcountry communities continue their studies, enter higher education and progress towards graduation and professional opportunities.",
          "The organisation's work addresses several barriers to education: household financial difficulties, shortages of learning materials, limited school facilities and uneven access to teaching support. Its approach connects assistance for individual students with support for the schools and teachers serving them.",
          "Over time, UEDS's educational activities have included examination preparation, the provision of learning resources, academic guidance and support for students at different stages of their education. These initiatives aim to help students remain engaged in learning and continue beyond the points at which financial or practical difficulties might otherwise interrupt their studies."
        ]
      },
      {
        heading: 'Examination preparation and teaching support',
        paragraphs: [
          'UEDS has supported students preparing for the Grade 5 Scholarship Examination, G.C.E. Ordinary Level and G.C.E. Advanced Level examinations. Its activities have included providing past papers and model papers, organising preparatory examinations and facilitating educational support.',
          'The organisation has also worked with educators to strengthen learning opportunities through seminars, teacher training and academic guidance. These activities complement the work of schools, particularly where students have limited access to additional educational resources.'
        ]
      },
      {
        heading: 'Monthly scholarships and higher education',
        paragraphs: [
          "An important part of UEDS's work is the provision of monthly scholarships for university students who face financial difficulties in continuing their studies.",
          'This support extends its educational commitment beyond school examinations and university admission. For students from financially vulnerable households, entering university does not remove the challenges of meeting day-to-day study and living expenses. Regular assistance helps recipients continue their education and work towards completing their qualifications.',
          "Alongside financial support, UEDS's broader work includes guidance and encouragement for students pursuing higher education. This reflects its aim of helping young people move from school education towards graduation and greater independence."
        ]
      },
      {
        heading: 'Improving school facilities',
        paragraphs: [
          "UEDS's activities have also included support for under-resourced schools in upcountry areas, including assistance with school buildings, water facilities, furniture, photocopiers, computers and smartboards.",
          'These contributions address practical needs that affect the quality of the learning environment. Better facilities and access to equipment can help teachers conduct lessons and provide students with resources that would otherwise be difficult to obtain.'
        ]
      },
      {
        heading: 'Digital learning and wider access',
        paragraphs: [
          'UEDS has also used Tamil-language educational content on YouTube to extend access to learning. This is particularly relevant to students in areas affected by teacher shortages or limited subject support.',
          "Digital learning forms part of the organisation's effort to make educational resources available beyond individual classrooms and physical events. Earlier plans also included further development of e-learning, reflecting an interest in using technology to reach more students."
        ]
      },
      {
        heading: 'Membership and community participation',
        paragraphs: [
          'From its beginnings among a group of young workers in Colombo, UEDS has grown into an organisation with approximately 3,500 members.',
          'Its membership includes people from varied economic and occupational backgrounds, ranging from businesspeople to daily-wage labourers. This broad participation reflects the spirit of mutual assistance from which the organisation emerged.',
          "Community gatherings, May Day events and cricket tournaments have also formed part of its activities, supporting relationships among members, community participation and fundraising. These events help maintain the connection between UEDS's educational work and the wider community that supports it."
        ]
      },
      {
        heading: 'Twenty years of service',
        paragraphs: [
          'The year 2026 marks twenty years since UEDS was established. Its journey connects the experiences of upcountry youth seeking employment in Colombo with a sustained commitment to educational opportunity in their home communities.',
          'Across that period, its work has developed to encompass school resources, examination support, monthly university scholarships, infrastructure assistance, digital learning and community engagement. At the heart of this work is a continuing purpose: to help upcountry children and young people overcome barriers to education and build a future with greater opportunity.'
        ]
      }
    ]
  },

  ta: {
    title: 'எமது வரலாறு',
    intro: [
      'மேல்நாட்டு கல்வி அபிவிருத்திச் சங்கம் (Upcountry Education Development Society – UEDS) என்பது 2006 ஆம் ஆண்டு கொழும்பில் நிறுவப்பட்ட, சமூக அடிப்படையிலான இலாப நோக்கற்ற சமூக அமைப்பாகும். தொழில் வாய்ப்புகள் மற்றும் சிறந்த எதிர்காலத்தைத் தேடி இலங்கையின் மலையகப் பகுதிகளிலிருந்து கொழும்பிற்கு இடம்பெயர்ந்த இளைஞர்களின் அனுபவங்களிலிருந்தே இந்த அமைப்பின் தோற்றம் உருவானது. பரஸ்பர உதவிக்கான ஒரு சிறிய வலையமைப்பாக ஆரம்பித்த இந்த முயற்சி, பின்னர் மலையக சமூகங்களின் கல்வி மற்றும் சமூக முன்னேற்றத்தை மேம்படுத்துவதற்காக அர்ப்பணிக்கப்பட்ட ஒரு அமைப்பாக வளர்ச்சியடைந்தது.',
      'கொழும்பில் தங்களது வாழ்க்கையை நிலைநிறுத்திக் கொள்ளும் காலத்தில், இந்த இளைஞர்கள் பல்வேறு சவால்களை எதிர்கொண்டனர். பொருளாதார நெருக்கடிகள், தங்குமிட வசதிகளின் பற்றாக்குறை, சமூகத் தனிமை மற்றும் நம்பகமான ஆதரவு வலையமைப்பின்மை போன்ற காரணிகள், ஒருவருக்கொருவர் ஒத்துழைக்க வேண்டிய பொதுவான தேவையை உருவாக்கின. தொழில் அல்லது பொருளாதார நிலைமைகளைப் பொருட்படுத்தாமல் அவர்கள் ஒருவருக்கொருவர் உதவத் தொடங்கினர். தங்களது சொந்த சமூகங்களுடனான தொடர்பும், தாங்கள் எதிர்கொண்ட சிரமங்களும், சமூக சேவைக்கான விரிவான அர்ப்பணிப்பிற்கு அடித்தளமாக அமைந்தன.',
      'இந்த முறைசாரா வலையமைப்பு வளர்ச்சியடைந்தபோது, கொழும்பில் ஒருவருக்கொருவர் வழங்கிய ஆதரவைத் தாண்டி தங்களது கூட்டு முயற்சிகளை விரிவுபடுத்த முடியும் என்பதை அதன் உறுப்பினர்கள் உணர்ந்தனர். தாங்கள் வந்த சமூகங்களின் நீண்டகால முன்னேற்றத்திற்கு பங்களிக்க வேண்டும் என்ற பொதுவான நோக்கம் அவர்களிடையே உருவானது. இந்தப் பகிரப்பட்ட நோக்கத்தின் அடிப்படையில் 2006 ஆம் ஆண்டு UEDS நிறுவப்பட்டது. அதன் செயற்பாடுகளில் கல்வி முக்கிய மையப்புள்ளியாக அமைந்தது.'
    ],
    sections: [
      {
        heading: 'முன்னேற்றத்திற்கான பாதையாக கல்வி',
        paragraphs: [
          'UEDS இன் கல்வி நோக்கம், தோட்டப்புற மற்றும் ஏனைய மலையக சமூகங்களைச் சேர்ந்த மாணவர்கள் தமது கல்வியைத் தொடர்ந்து மேற்கொள்ளவும், உயர்கல்வியில் இணைந்து பட்டப்படிப்பை நிறைவு செய்து தொழில்முறை வாய்ப்புகளை நோக்கி முன்னேறவும் உதவுவதை அடிப்படையாகக் கொண்டுள்ளது.',
          'குடும்பங்களின் பொருளாதார சிரமங்கள், கற்றல் உபகரணங்களின் பற்றாக்குறை, பாடசாலை வசதிகளின் குறைபாடு மற்றும் போதிய கற்பித்தல் ஆதரவுக்கான சமமற்ற அணுகல் போன்ற கல்விக்கான தடைகளை UEDS தனது செயற்பாடுகளின் மூலம் எதிர்கொள்கிறது. மாணவர்களுக்கான தனிப்பட்ட உதவிகளை, அவர்களுக்கு சேவை வழங்கும் பாடசாலைகள் மற்றும் ஆசிரியர்களுக்கான ஆதரவுடன் இணைப்பதே அதன் அணுகுமுறையாகும்.',
          'காலப்போக்கில், UEDS இன் கல்விச் செயற்பாடுகளில் பரீட்சைக்கான தயார்படுத்தல், கற்றல் வளங்களை வழங்குதல், கல்வி வழிகாட்டுதல் மற்றும் கல்வியின் பல்வேறு நிலைகளில் உள்ள மாணவர்களுக்கு ஆதரவு வழங்குதல் ஆகியவை இடம்பெற்றுள்ளன. நிதி அல்லது நடைமுறைச் சிரமங்களின் காரணமாக மாணவர்களின் கல்வி இடைநிறுத்தப்படக்கூடிய சூழ்நிலைகளைத் தவிர்த்து, அவர்கள் கற்றலில் தொடர்ந்து ஈடுபட்டு தமது கல்வியை முன்னெடுத்துச் செல்ல இந்த முயற்சிகள் உதவுகின்றன.'
        ]
      },
      {
        heading: 'பரீட்சைத் தயார்படுத்தல் மற்றும் கற்பித்தல் ஆதரவு',
        paragraphs: [
          'UEDS, தரம் 5 புலமைப்பரிசில் பரீட்சை, க.பொ.த. சாதாரண தரம் மற்றும் க.பொ.த. உயர்தரப் பரீட்சைகளுக்குத் தயாராகும் மாணவர்களுக்கு ஆதரவளித்து வருகிறது. கடந்தகால வினாத்தாள்கள் மற்றும் மாதிரி வினாத்தாள்களை வழங்குதல், பரீட்சைத் தயார்படுத்தல் நடவடிக்கைகளை ஏற்பாடு செய்தல் மற்றும் கல்வி ஆதரவை வழங்குதல் போன்ற செயற்பாடுகள் இதில் அடங்குகின்றன.',
          'மேலும், கருத்தரங்குகள், ஆசிரியர் பயிற்சிகள் மற்றும் கல்வி வழிகாட்டல் ஆகியவற்றின் மூலம் கற்றல் வாய்ப்புகளை மேம்படுத்துவதற்காக கல்வியாளர்களுடனும் UEDS இணைந்து செயற்பட்டுள்ளது. குறிப்பாக, மேலதிக கல்வி வளங்களுக்கான அணுகல் குறைவாக உள்ள மாணவர்களுக்கு இத்தகைய நடவடிக்கைகள் பாடசாலைகளின் கற்பித்தல் பணிகளுக்கு துணையாக அமைகின்றன.'
        ]
      },
      {
        heading: 'மாதாந்த புலமைப்பரிசில்கள் மற்றும் உயர்கல்வி',
        paragraphs: [
          'UEDS இன் முக்கியமான செயற்பாடுகளில் ஒன்று, தமது கல்வியைத் தொடர்ந்து மேற்கொள்வதில் பொருளாதார சிரமங்களை எதிர்கொள்ளும் பல்கலைக்கழக மாணவர்களுக்கு மாதாந்த புலமைப்பரிசில்களை வழங்குவதாகும்.',
          'இந்த ஆதரவு பாடசாலைப் பரீட்சைகள் மற்றும் பல்கலைக்கழக அனுமதியைத் தாண்டி, உயர்கல்வியைத் தொடர்வதற்கான UEDS இன் அர்ப்பணிப்பை வெளிப்படுத்துகிறது. பொருளாதார ரீதியாக பாதிப்புக்குள்ளான குடும்பங்களைச் சேர்ந்த மாணவர்களுக்கு பல்கலைக்கழகத்தில் இணைவது மட்டுமே சவால்களின் முடிவாக அமைவதில்லை. அன்றாட கல்வி மற்றும் வாழ்க்கைச் செலவுகளைச் சமாளிப்பதும் அவர்களுக்கு சவாலாக இருக்கலாம். தொடர்ச்சியான நிதியுதவி, பயனாளி மாணவர்கள் தமது கல்வியைத் தொடர்ந்து தமது பட்டப்படிப்புகளை நிறைவு செய்ய உதவுகிறது.',
          'நிதியுதவியுடன் இணைந்து, உயர்கல்வியைத் தொடரும் மாணவர்களுக்கு வழிகாட்டலும் ஊக்குவிப்பும் வழங்குவது UEDS இன் பரந்த செயற்பாடுகளில் ஒன்றாகும். பாடசாலைக் கல்வியிலிருந்து பட்டப்படிப்பு மற்றும் அதிகளவிலான சுயநிறைவு நோக்கிய பயணத்தில் இளைஞர்களுக்கு ஆதரவளிப்பதே இதன் நோக்கமாகும்.'
        ]
      },
      {
        heading: 'பாடசாலை வசதிகளை மேம்படுத்துதல்',
        paragraphs: [
          'மலையகப் பகுதிகளில் வளங்களின் பற்றாக்குறையை எதிர்கொள்ளும் பாடசாலைகளுக்கும் UEDS ஆதரவளித்து வருகிறது. பாடசாலைக் கட்டிடங்கள், நீர் வசதிகள், தளபாடங்கள், நகலெடுக்கும் இயந்திரங்கள், கணினிகள் மற்றும் ஸ்மார்ட் பலகைகள் போன்றவற்றை வழங்குவதற்கான உதவிகள் இதில் அடங்குகின்றன.',
          'கற்றல் சூழலின் தரத்தைப் பாதிக்கும் நடைமுறைத் தேவைகளை இத்தகைய பங்களிப்புகள் நிவர்த்தி செய்கின்றன. மேம்படுத்தப்பட்ட வசதிகள் மற்றும் கல்வி உபகரணங்களுக்கான அணுகல், ஆசிரியர்கள் சிறந்த முறையில் பாடங்களை நடத்துவதற்கும், மாணவர்கள் இல்லையெனில் பெறுவதற்கு கடினமான கல்வி வளங்களைப் பயன்படுத்துவதற்கும் உதவுகின்றன.'
        ]
      },
      {
        heading: 'டிஜிட்டல் கற்றல் மற்றும் பரந்த அணுகல்',
        paragraphs: [
          'மாணவர்களுக்கான கல்வி அணுகலை விரிவுபடுத்தும் நோக்கில், UEDS தமிழ் மொழியிலான கல்வி உள்ளடக்கங்களை YouTube தளத்தின் ஊடாகவும் வழங்கி வருகிறது. ஆசிரியர் பற்றாக்குறை அல்லது குறிப்பிட்ட பாடங்களுக்கான போதிய கல்வி ஆதரவு இல்லாத பகுதிகளில் உள்ள மாணவர்களுக்கு இது குறிப்பாக பயனுள்ளதாக அமைகிறது.',
          'தனிப்பட்ட வகுப்பறைகள் மற்றும் நேரடி கல்வி நிகழ்வுகளுக்கு அப்பால் கல்வி வளங்களை மாணவர்களிடம் கொண்டு சேர்ப்பதற்கான UEDS இன் முயற்சிகளில் டிஜிட்டல் கற்றலும் ஒரு பகுதியாகும். மேலும், அதிகமான மாணவர்களைச் சென்றடையும் வகையில் மின்னியல் கற்றல் வசதிகளை மேம்படுத்துவதற்கான திட்டங்களும் முன்னர் முன்வைக்கப்பட்டுள்ளன.'
        ]
      },
      {
        heading: 'உறுப்பினர் பங்கேற்பும் சமூக ஈடுபாடும்',
        paragraphs: [
          'கொழும்பில் தொழில் புரிந்த இளைஞர்களின் ஒரு சிறிய குழுவாக ஆரம்பித்த UEDS, தற்போது சுமார் 3,500 உறுப்பினர்களைக் கொண்ட அமைப்பாக வளர்ச்சியடைந்துள்ளது.',
          'அதன் உறுப்பினர்களில் பல்வேறு பொருளாதார மற்றும் தொழில் பின்னணிகளைச் சேர்ந்தவர்கள் உள்ளனர். வர்த்தகத் துறையில் ஈடுபடுபவர்கள் முதல் நாளாந்த கூலி அடிப்படையில் பணிபுரிபவர்கள் வரை பல்வேறு தரப்பினரும் இதில் பங்கேற்கின்றனர். இந்த பரந்த பங்கேற்பு, UEDS உருவான பரஸ்பர உதவி மற்றும் ஒத்துழைப்பு உணர்வை பிரதிபலிக்கிறது.',
          'சமூக ஒன்றுகூடல்கள், மே தின நிகழ்வுகள் மற்றும் கிரிக்கெட் போட்டிகள் போன்றவையும் UEDS இன் செயற்பாடுகளின் ஒரு பகுதியாக அமைந்துள்ளன. இவை உறுப்பினர்களிடையேயான உறவுகளை வலுப்படுத்துவதற்கும், சமூகப் பங்கேற்பை ஊக்குவிப்பதற்கும், நிதி திரட்டுவதற்கும் பங்களிக்கின்றன. இதன் மூலம் UEDS இன் கல்விச் செயற்பாடுகளுக்கும் அதனை ஆதரிக்கும் பரந்த சமூகத்திற்கும் இடையிலான தொடர்பு தொடர்ந்து பேணப்படுகிறது.'
        ]
      },
      {
        heading: 'இருபது ஆண்டுகால சேவை',
        paragraphs: [
          '2026 ஆம் ஆண்டு UEDS நிறுவப்பட்டு இருபது ஆண்டுகள் நிறைவடைவதை குறிக்கிறது. தொழில் வாய்ப்புகளைத் தேடி கொழும்பிற்கு வந்த மலையக இளைஞர்களின் அனுபவங்களிலிருந்து உருவான இந்தப் பயணம், அவர்களின் சொந்த சமூகங்களில் கல்வி வாய்ப்புகளை மேம்படுத்துவதற்கான தொடர்ச்சியான அர்ப்பணிப்பாக வளர்ச்சியடைந்துள்ளது.',
          'இந்தக் காலப்பகுதியில், பாடசாலை வளங்கள், பரீட்சை ஆதரவு, பல்கலைக்கழக மாணவர்களுக்கான மாதாந்த புலமைப்பரிசில்கள், உட்கட்டமைப்பு உதவிகள், டிஜிட்டல் கற்றல் மற்றும் சமூக ஈடுபாடு என UEDS இன் செயற்பாடுகள் விரிவடைந்துள்ளன. இந்த அனைத்து முயற்சிகளின் மையத்திலும் ஒரு தொடர்ச்சியான நோக்கம் நிலைத்திருக்கிறது: மலையகப் பகுதிகளைச் சேர்ந்த குழந்தைகள் மற்றும் இளைஞர்கள் கல்விக்கான தடைகளைத் தாண்டி, அதிகமான வாய்ப்புகளுடன் கூடிய எதிர்காலத்தை உருவாக்குவதற்கு ஆதரவளித்தல்.'
        ]
      }
    ]
  },

  si: {
    title: 'අපගේ කතාව',
    intro: [
      'උඩරට අධ්‍යාපන සංවර්ධන සංගමය (Upcountry Education Development Society – UEDS) යනු 2006 වර්ෂයේදී කොළඹදී ආරම්භ කරන ලද, ප්‍රජා මූලික, ලාභ නොලබන සමාජ සංවිධානයකි. රැකියා අවස්ථා සහ යහපත් අනාගතයක් සොයා ශ්‍රී ලංකාවේ උඩරට ප්‍රදේශවලින් කොළඹට පැමිණි තරුණයන්ගේ අත්දැකීම් මෙම සංවිධානයේ ආරම්භයට පදනම විය. අන්‍යෝන්‍ය සහයෝගය සඳහා වූ කුඩා ජාලයක් ලෙස ආරම්භ වූ මෙම උත්සාහය, පසුව උඩරට ප්‍රජාවන්ගේ අධ්‍යාපනික හා සමාජීය සංවර්ධනය වැඩිදියුණු කිරීම සඳහා කැප වූ සංවිධානයක් බවට වර්ධනය විය.',
      'කොළඹ නගරයේ තම ජීවිත ස්ථාපිත කර ගැනීමේදී මෙම තරුණයන්ට විවිධ අභියෝගවලට මුහුණ දීමට සිදු විය. ආර්ථික දුෂ්කරතා, නවාතැන් පහසුකම් සීමිත වීම, සමාජ හුදකලාව සහ විශ්වාසදායක සහයෝගී ජාලයක නොපැවතීම හේතුවෙන් ඔවුන් අතර අන්‍යෝන්‍ය සහයෝගයේ අවශ්‍යතාවයක් ඇති විය. ඔවුන්ගේ රැකියාව හෝ ආර්ථික තත්ත්වය නොසලකා එකිනෙකාට උපකාර කිරීමට ඔවුහු කටයුතු කළහ. තම මව් ප්‍රජාවන් සමඟ පැවති සබඳතාව සහ තමන් අත්විඳි දුෂ්කරතා, පුළුල් සමාජ සේවා කැපවීමක් සඳහා පදනමක් බවට පත් විය.',
      'මෙම අවිධිමත් සහයෝගී ජාලය වර්ධනය වන විට, කොළඹදී එකිනෙකාට ලබා දුන් සහයෝගයෙන් ඔබ්බට තම සාමූහික උත්සාහයන් පුළුල් කළ හැකි බව එහි සාමාජිකයන් අවබෝධ කර ගත්හ. තමන් පැමිණි ප්‍රජාවන්ගේ දිගුකාලීන ප්‍රගතිය සඳහා දායක වීම ඔවුන්ගේ පොදු අරමුණ විය. මෙම පොදු අරමුණ මත 2006 වර්ෂයේදී UEDS පිහිටුවන ලද අතර, එහි කටයුතුවල ප්‍රධාන අවධානයක් ලෙස අධ්‍යාපනය ස්ථාපිත විය.'
    ],
    sections: [
      {
        heading: 'ප්‍රගතිය කරා යන මාර්ගයක් ලෙස අධ්‍යාපනය',
        paragraphs: [
          'UEDS හි අධ්‍යාපනික මෙහෙවරේ අරමුණ වන්නේ වතු ආශ්‍රිත සහ අනෙකුත් උඩරට ප්‍රජාවන්හි දරුවන්ට තම අධ්‍යාපනය අඛණ්ඩව කරගෙන යාමට, උසස් අධ්‍යාපනයට ප්‍රවේශ වීමට, උපාධි සම්පූර්ණ කිරීමට සහ වෘත්තීය අවස්ථා කරා ඉදිරියට යාමට සහය වීමයි.',
          'පවුල්වල ආර්ථික දුෂ්කරතා, ඉගෙනුම් ද්‍රව්‍යවල හිඟය, පාසල් පහසුකම්වල සීමාවන් සහ ඉගැන්වීම් සහාය සඳහා පවතින අසමාන ප්‍රවේශය වැනි අධ්‍යාපනයට ඇති බාධක සඳහා UEDS සිය ක්‍රියාකාරකම් තුළින් අවධානය යොමු කරයි. තනි ශිෂ්‍යයන් සඳහා ලබා දෙන සහයෝගය, ඔවුන්ට සේවය කරන පාසල් සහ ගුරුවරුන් සඳහා ලබා දෙන සහයෝගය සමඟ සම්බන්ධ කිරීම එහි ප්‍රවේශය වේ.',
          'කාලයත් සමඟ UEDS හි අධ්‍යාපනික ක්‍රියාකාරකම් අතර විභාග සඳහා සූදානම් කිරීම, ඉගෙනුම් සම්පත් ලබා දීම, අධ්‍යාපනික මාර්ගෝපදේශනය සහ අධ්‍යාපනයේ විවිධ අවස්ථාවල සිටින සිසුන් සඳහා සහය ලබා දීම ඇතුළත් වී ඇත. මූල්‍යමය හෝ ප්‍රායෝගික දුෂ්කරතා හේතුවෙන් සිසුන්ගේ අධ්‍යාපනය අතරමග නතර වීම වැළැක්වීමත්, ඔවුන් අඛණ්ඩව ඉගෙනුමට සම්බන්ධ කර ගැනීමත් මෙම වැඩසටහන්වල අරමුණ වේ.'
        ]
      },
      {
        heading: 'විභාග සූදානම සහ ඉගැන්වීම් සහාය',
        paragraphs: [
          'UEDS විසින් 5 ශ්‍රේණියේ ශිෂ්‍යත්ව විභාගය, අ.පො.ස. සාමාන්‍ය පෙළ සහ අ.පො.ස. උසස් පෙළ විභාග සඳහා සූදානම් වන සිසුන්ට සහය ලබා දී ඇත. පසුගිය විභාග ප්‍රශ්න පත්‍ර සහ ආදර්ශ ප්‍රශ්න පත්‍ර ලබා දීම, සූදානම් වීමේ විභාග සංවිධානය කිරීම සහ අධ්‍යාපනික සහයෝගය ලබා දීම එම ක්‍රියාකාරකම් අතර වේ.',
          'එමෙන්ම, සම්මන්ත්‍රණ, ගුරු පුහුණු වැඩසටහන් සහ අධ්‍යාපනික මාර්ගෝපදේශන මඟින් ඉගෙනුම් අවස්ථා ශක්තිමත් කිරීම සඳහා UEDS අධ්‍යාපනඥයන් සමඟද කටයුතු කර ඇත. විශේෂයෙන් අතිරේක අධ්‍යාපනික සම්පත් සඳහා සීමිත ප්‍රවේශයක් ඇති සිසුන් සඳහා මෙම ක්‍රියාකාරකම් පාසල්වල ඉගැන්වීම් කටයුතු සඳහා අමතර සහායක් සපයයි.'
        ]
      },
      {
        heading: 'මාසික ශිෂ්‍යත්ව සහ උසස් අධ්‍යාපනය',
        paragraphs: [
          'UEDS හි වැදගත් ක්‍රියාකාරකමක් වන්නේ තම අධ්‍යාපනය අඛණ්ඩව කරගෙන යාමේදී මූල්‍ය දුෂ්කරතාවලට මුහුණ දෙන විශ්වවිද්‍යාල සිසුන් සඳහා මාසික ශිෂ්‍යත්ව ලබා දීමයි.',
          'මෙම සහයෝගය පාසල් විභාග සහ විශ්වවිද්‍යාල ප්‍රවේශයෙන් ඔබ්බට ගොස් උසස් අධ්‍යාපනය අඛණ්ඩව කරගෙන යාම සඳහා UEDS හි කැපවීම නිරූපණය කරයි. ආර්ථික වශයෙන් අවදානම් සහිත පවුල්වල සිසුන් සඳහා විශ්වවිද්‍යාලයට ඇතුළත් වීමෙන් පසුවද දෛනික අධ්‍යාපනික හා ජීවන වියදම් සපුරා ගැනීම අභියෝගයක් විය හැකිය. අඛණ්ඩ මූල්‍ය සහයෝගය මඟින් ප්‍රතිලාභ ලබන සිසුන්ට තම අධ්‍යාපනය අඛණ්ඩව කරගෙන යමින් තම සුදුසුකම් සම්පූර්ණ කිරීමට සහාය වේ.',
          'මූල්‍ය සහයෝගයට අමතරව, උසස් අධ්‍යාපනය හදාරන සිසුන්ට මාර්ගෝපදේශනය සහ දිරිගැන්වීම ලබා දීමද UEDS හි පුළුල් කාර්යභාරයේ කොටසකි. පාසල් අධ්‍යාපනයේ සිට උපාධිය සම්පූර්ණ කිරීම සහ වැඩි ස්වාධීනත්වයක් කරා යන ගමනේදී තරුණයන්ට සහය වීම මෙහි අරමුණයි.'
        ]
      },
      {
        heading: 'පාසල් පහසුකම් වැඩිදියුණු කිරීම',
        paragraphs: [
          'උඩරට ප්‍රදේශවල සම්පත් හිඟයට මුහුණ දෙන පාසල් සඳහාද UEDS සහය ලබා දී ඇත. පාසල් ගොඩනැගිලි, ජල පහසුකම්, ගෘහ භාණ්ඩ, ඡායා පිටපත් යන්ත්‍ර, පරිගණක සහ ස්මාර්ට් පුවරු වැනි පහසුකම් සඳහා ලබා දුන් සහාය එයට ඇතුළත් වේ.',
          'ඉගෙනුම් පරිසරයේ ගුණාත්මකභාවයට බලපාන ප්‍රායෝගික අවශ්‍යතා සපුරාලීමට මෙම දායකත්වයන් උපකාරී වේ. වැඩිදියුණු කළ පහසුකම් සහ උපකරණ සඳහා ප්‍රවේශය මඟින් ගුරුවරුන්ට පාඩම් වඩාත් ඵලදායී ලෙස පැවැත්වීමටත්, වෙනත් ආකාරයකින් ලබා ගැනීමට අපහසු අධ්‍යාපනික සම්පත් සිසුන්ට භාවිත කිරීමටත් අවස්ථාව ලැබේ.'
        ]
      },
      {
        heading: 'ඩිජිටල් ඉගෙනුම සහ පුළුල් ප්‍රවේශය',
        paragraphs: [
          'UEDS විසින් දෙමළ භාෂාවෙන් සකස් කරන ලද අධ්‍යාපනික අන්තර්ගතයන් YouTube හරහා ලබා දෙමින් අධ්‍යාපනය සඳහා සිසුන්ගේ ප්‍රවේශය පුළුල් කිරීමටද කටයුතු කර ඇත. ගුරු හිඟය හෝ ඇතැම් විෂයන් සඳහා ප්‍රමාණවත් අධ්‍යාපනික සහායක් නොමැති ප්‍රදේශවල සිටින සිසුන් සඳහා මෙය විශේෂයෙන් වැදගත් වේ.',
          'භෞතික පන්තිකාමර සහ සෘජු අධ්‍යාපනික වැඩසටහන්වල සීමාවෙන් ඔබ්බට අධ්‍යාපනික සම්පත් සිසුන් වෙත ගෙන යාමේ UEDS උත්සාහයේ කොටසක් ලෙස ඩිජිටල් ඉගෙනුම ක්‍රියාත්මක වේ. වැඩි සිසුන් සංඛ්‍යාවක් වෙත ළඟා වීම සඳහා විද්‍යුත් ඉගෙනුම් පහසුකම් තවදුරටත් සංවර්ධනය කිරීමේ සැලසුම්ද මීට පෙර ඉදිරිපත් කර ඇත.'
        ]
      },
      {
        heading: 'සාමාජිකත්වය සහ ප්‍රජා සහභාගීත්වය',
        paragraphs: [
          'කොළඹ නගරයේ සේවය කළ තරුණයන් පිරිසකගෙන් ආරම්භ වූ UEDS, මේ වන විට ආසන්න වශයෙන් සාමාජිකයන් 3,500කින් සමන්විත සංවිධානයක් බවට වර්ධනය වී ඇත.',
          'එහි සාමාජිකත්වයට විවිධ ආර්ථික හා වෘත්තීය පසුබිම්වල පුද්ගලයන් ඇතුළත් වේ. ව්‍යාපාරිකයන්ගේ සිට දෛනික වැටුප් පදනම මත සේවය කරන කම්කරුවන් දක්වා විවිධ පාර්ශ්වයන් එහි සාමාජිකත්වයට එක්ව සිටිති. මෙම පුළුල් සහභාගීත්වය UEDS ආරම්භ වූ අන්‍යෝන්‍ය සහයෝගය සහ සහභාගීත්වයේ ආත්මය නිරූපණය කරයි.',
          'ප්‍රජා රැස්වීම්, මැයි දින වැඩසටහන් සහ ක්‍රිකට් තරඟ වැනි ක්‍රියාකාරකම්ද UEDS හි වැඩසටහන් අතරට ඇතුළත් වී ඇත. මෙම ක්‍රියාකාරකම් සාමාජිකයන් අතර සබඳතා ශක්තිමත් කිරීමට, ප්‍රජා සහභාගීත්වය වර්ධනය කිරීමට සහ අරමුදල් රැස් කිරීමට දායක වේ. එමඟින් UEDS හි අධ්‍යාපනික කටයුතු සහ එයට සහයෝගය ලබා දෙන පුළුල් ප්‍රජාව අතර සබඳතාව අඛණ්ඩව පවත්වාගෙන යාමට හැකි වේ.'
        ]
      },
      {
        heading: 'වසර විස්සක සේවය',
        paragraphs: [
          '2026 වර්ෂය UEDS පිහිටුවා වසර විස්සක් සම්පූර්ණ වන වසර ලෙස සනිටුහන් වේ. රැකියා අවස්ථා සොයා කොළඹට පැමිණි උඩරට තරුණයන්ගේ අත්දැකීම්වලින් ආරම්භ වූ මෙම ගමන, ඔවුන්ගේ මව් ප්‍රජාවන් තුළ අධ්‍යාපනික අවස්ථා වැඩිදියුණු කිරීම සඳහා වූ අඛණ්ඩ කැපවීමක් බවට වර්ධනය වී ඇත.',
          'එම කාලය පුරා UEDS හි කටයුතු පාසල් සම්පත්, විභාග සහාය, විශ්වවිද්‍යාල සිසුන් සඳහා මාසික ශිෂ්‍යත්ව, යටිතල පහසුකම් සඳහා සහාය, ඩිජිටල් ඉගෙනුම සහ ප්‍රජා සහභාගීත්වය දක්වා පුළුල් වී ඇත. මෙම සියලු කටයුතුවල මූලික අරමුණ ලෙස අඛණ්ඩව පවතින්නේ උඩරට ප්‍රදේශවල දරුවන් සහ තරුණයන්ට අධ්‍යාපනය සඳහා ඇති බාධක ජයගෙන, වැඩි අවස්ථාවන්ගෙන් සමන්විත අනාගතයක් ගොඩනඟා ගැනීමට සහාය වීමයි.'
        ]
      }
    ]
  }
};
