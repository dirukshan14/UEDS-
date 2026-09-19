
export type StorySection = {
  heading?: string;
  paragraphs: string[];
  isList?: boolean;
};

export type AboutStory = {
  title: string;
  intro: string[];
  sections: StorySection[];
};

export const aboutStory: Record<'en' | 'ta' | 'si', AboutStory> = {
  // =========================================================
  // ENGLISH
  // =========================================================
  en: {
    title: 'Upcountry Education Development Society',

    intro: [
      'The Upcountry Education Development Society was established in 2006 on Sea Street, Colombo, by young people and working professionals employed in the capital. For the past 20 years, the Society has worked to improve the prospects of students from economically disadvantaged upcountry communities. Its aims are to strengthen their education, provide essential support to schools with limited resources, help students remain in school, and develop their talents in education, sport, art and culture.',

      'Guided by the goal of “a graduate in every household across the upcountry,” we provide monthly scholarships to university students. We also offer assistance to students pursuing higher education overseas.',

      'Each year, we conduct special seminars to help students achieve better results in the Grade 5 Scholarship Examination and the G.C.E. Ordinary Level and Advanced Level examinations. We also hold free practice examinations for students studying in Tamil-medium schools.',

      'We identify schools facing resource shortages and provide students with learning materials, uniforms, footwear and school bags so they can continue their education without interruption. We also help renovate school buildings and improve facilities such as drinking water, electricity, toilets and boundary walls.',

      'To expand opportunities for modern learning, we provide equipment such as smart boards and photocopy machines. We also conduct yoga training programmes to support students’ physical health and mental well-being.',

      'With members in Colombo and beyond, the Society carries out a range of community activities and provides immediate relief when disasters occur. As a government-registered and recognised social service organisation, the Upcountry Education Development Society looks forward to bringing together more young people, business leaders and well-wishers to continue advancing the education of upcountry students.'
    ],

    sections: []
  },

  // =========================================================
  // TAMIL
  // =========================================================
  ta: {
    title: 'மலையகக் கல்வி அபிவிருத்தி மன்றம்',

    intro: [
      'தலைநகரில் தொழில் புரியும் இளைஞர்களாலும், தொழில் தருணர்களாலும் 2006ஆம் ஆண்டில் கொழும்பு செட்டியார் தெருவில் மலையகக் கல்வி அபிவிருத்தி மன்றம் ஆரம்பிக்கப்பட்டது. பொருளாதார ரீதியில் பின்தங்கியுள்ள மலையக மாணவர்களின் எதிர்காலத்தை மேம்படுத்துவதும், அவர்களின் கல்வித் திறனை ஊக்குவிப்பதும், வளப் பற்றாக்குறை நிலவும் பாடசாலைகளுக்கு அத்தியாவசிய உதவிகளை வழங்குவதும் மன்றத்தின் நோக்கங்களாகும். இதன் மூலம் மாணவர்கள் கல்வியை இடைநிறுத்துவதைத் தவிர்க்கவும், கல்வி, விளையாட்டு, கலை மற்றும் கலாசாரம் போன்ற துறைகளில் அவர்களின் ஆற்றலை வளர்க்கவும் கடந்த 20 ஆண்டுகளாக எமது மன்றம் செயற்பட்டு வருகின்றது.',

      '“மலையகமெங்கும் வீட்டுக்கொரு பட்டதாரியை உருவாக்க வேண்டும்” என்ற இலக்குடன், பல்கலைக்கழக மாணவர்களுக்கு மாதாந்தப் புலமைப்பரிசில்களை வழங்கி வருகின்றோம். வெளிநாடுகளுக்குச் சென்று உயர்கல்வி பெறுபவர்களுக்கும் தேவையான உதவிகளை வழங்கி வருகின்றோம்.',

      'தரம் 5 புலமைப்பரிசில் பரீட்சை, க.பொ.த. சாதாரண தரம் மற்றும் உயர்தரப் பரீட்சைகளுக்குத் தோற்றும் மாணவர்கள் சிறந்த பெறுபேறுகளைப் பெற உதவும் வகையில், விசேட கருத்தரங்குகளை ஆண்டுதோறும் நடத்தி வருகின்றோம். தமிழ்மொழி மூலப் பாடசாலைகளின் மாணவர்களுக்காக இலவச முன்னோடிப் பரீட்சைகளையும் நடத்துகின்றோம்.',

      'வளப் பற்றாக்குறையுடன் இயங்கும் பாடசாலைகளை அடையாளம் கண்டு, அங்கு கல்வி பயிலும் மாணவர்கள் தங்கள் கற்றலைத் தடையின்றித் தொடரத் தேவையான கற்றல் உபகரணங்கள், சீருடைகள், பாதணிகள் மற்றும் புத்தகப்பைகளை வழங்கி வருகின்றோம். பாடசாலைக் கட்டிடங்களைப் புனரமைப்பதுடன், குடிநீர், மின்சாரம், கழிவறைகள் மற்றும் பாதுகாப்பு மதில்கள் போன்ற உட்கட்டமைப்பு வசதிகளை ஏற்படுத்தவும் உதவி வருகின்றோம்.',

      'மாணவர்களின் நவீன கற்றல் வாய்ப்புகளை விரிவுபடுத்துவதற்காக Smart Board, Photocopy Machine போன்ற சாதனங்களையும் வழங்கி வருகின்றோம். அவர்களின் உடல் ஆரோக்கியத்தையும் மனவலிமையையும் மேம்படுத்த யோகாசனப் பயிற்சி முகாம்களையும் நடத்தி வருகின்றோம்.',

      'தலைநகரிலும் தலைநகருக்கு வெளியிலும் உள்ள அங்கத்தவர்களை இணைத்துக்கொண்டு, பல்வேறு சமூகப் பணிகளையும் மன்றம் முன்னெடுத்து வருகின்றது. திடீர் அனர்த்தங்கள் ஏற்படும்போது உடனடி நிவாரண உதவிகளையும் வழங்குகின்றது. அரசாங்கத்தில் பதிவுசெய்யப்பட்டு அங்கீகரிக்கப்பட்ட சமூக சேவை அமைப்பாக இயங்கும் மலையகக் கல்வி அபிவிருத்தி மன்றம், எதிர்காலத்தில் மேலும் பல இளைஞர்கள், வர்த்தகப் பெருமக்கள் மற்றும் நலன்விரும்பிகளை இணைத்துக்கொண்டு, மலையக மாணவர்களின் கல்வி வளர்ச்சிக்காகத் தொடர்ந்து பணியாற்றத் தயாராக உள்ளது என்பதைப் பெருமையுடன் தெரிவித்துக்கொள்கின்றோம்.'
    ],

    sections: []
  },

  // =========================================================
  // SINHALA
  // =========================================================
  si: {
    title: 'කඳුරට අධ්‍යාපන සංවර්ධන සංගමය',

    intro: [
      'අගනුවර රැකියාවල නිරත තරුණයන් සහ වෘත්තිකයන් විසින් 2006 වසරේදී කොළඹ චෙට්ටියාර් වීදියේ කඳුරට අධ්‍යාපන සංවර්ධන සංගමය ආරම්භ කරන ලදී. ආර්ථික දුෂ්කරතාවලට මුහුණ දෙන කඳුරට සිසුන්ගේ අනාගතය යහපත් කිරීම, ඔවුන්ගේ අධ්‍යාපන හැකියාවන් වර්ධනය කිරීම සහ සම්පත් හිඟ පාසල්වලට අත්‍යවශ්‍ය සහාය ලබා දීම අපගේ අරමුණු වේ. සිසුන් පාසල් අධ්‍යාපනය අතරමඟ නතර කිරීම වැළැක්වීමටත්, අධ්‍යාපනය, ක්‍රීඩා, කලාව සහ සංස්කෘතිය යන ක්ෂේත්‍රවල ඔවුන්ගේ දක්ෂතා වර්ධනය කිරීමටත් අප සංගමය පසුගිය වසර 20 පුරා කටයුතු කරමින් සිටී.',

      '“කඳුරට සෑම නිවසකින්ම උපාධිධාරියෙකු බිහි කිරීම” යන අරමුණ ඇතිව විශ්වවිද්‍යාල සිසුන්ට මාසික ශිෂ්‍යත්ව ලබා දෙන්නෙමු. විදේශගතව උසස් අධ්‍යාපනය හදාරන සිසුන්ට ද අවශ්‍ය සහාය ලබා දෙන්නෙමු.',

      '5 ශ්‍රේණියේ ශිෂ්‍යත්ව විභාගයට සහ අ.පො.ස. සාමාන්‍ය පෙළ හා උසස් පෙළ විභාගවලට පෙනී සිටින සිසුන්ට වඩා හොඳ ප්‍රතිඵල ලබා ගැනීමට උපකාරී වන විශේෂ සම්මන්ත්‍රණ සෑම වසරකම පවත්වන්නෙමු. දෙමළ මාධ්‍ය පාසල්වල සිසුන් සඳහා නොමිලේ පෙරහුරු විභාග ද පවත්වන්නෙමු.',

      'සම්පත් හිඟයෙන් පෙළෙන පාසල් හඳුනාගෙන, එම පාසල්වල සිසුන්ට බාධාවකින් තොරව අධ්‍යාපනය කරගෙන යාම සඳහා ඉගෙනුම් උපකරණ, නිල ඇඳුම්, පාවහන් සහ පාසල් බෑග් ලබා දෙන්නෙමු. පාසල් ගොඩනැගිලි ප්‍රතිසංස්කරණය කිරීමටත්, පානීය ජලය, විදුලිය, වැසිකිළි සහ ආරක්ෂිත තාප්ප වැනි යටිතල පහසුකම් වැඩිදියුණු කිරීමටත් සහාය වෙන්නෙමු.',

      'නවීන ඉගෙනුම් අවස්ථා පුළුල් කිරීම සඳහා ස්මාර්ට් පුවරු සහ ඡායා පිටපත් යන්ත්‍ර වැනි උපකරණ ලබා දෙන්නෙමු. සිසුන්ගේ ශාරීරික සෞඛ්‍යය හා මානසික ශක්තිය වර්ධනය කිරීමට යෝග පුහුණු වැඩසටහන් ද පවත්වන්නෙමු.',

      'කොළඹ සහ ඉන් පිටත සිටින සාමාජිකයන්ගේ සහභාගීත්වයෙන් සංගමය විවිධ ප්‍රජා සේවා කටයුතු සිදු කරයි. හදිසි ආපදා අවස්ථාවලදී කඩිනම් සහන ද ලබා දෙයි. රජයේ ලියාපදිංචි, පිළිගත් සමාජ සේවා සංවිධානයක් වන කඳුරට අධ්‍යාපන සංවර්ධන සංගමය, තවත් තරුණයන්, ව්‍යාපාරිකයන් සහ සුබපතන්නන් එක් කර ගනිමින් කඳුරට සිසුන්ගේ අධ්‍යාපනික දියුණුව සඳහා අඛණ්ඩව කටයුතු කිරීමට අපේක්ෂා කරයි.'
    ],

    sections: []
  }
};

