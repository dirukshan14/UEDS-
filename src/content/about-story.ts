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
  en: {
    title: 'History of Upcountry Education Development Society – Colombo',

    intro: [
      'Recognizing the hardship poverty inflicted on the lives of estate workers, two friends, Mr. Thanaraj and Mr. Thavakumar, became close acquaintances in Chettiar Street in the 1990s. Believing that education was the one force capable of transforming the hill-country community and the future of its students, they set out to bring together hill-country people living in the capital to form an organisation.',

      'As a result, the Upcountry Education Development Society was born on 26 August 2006 in Chettiar Street, Colombo. Of the more than 50 friends who gathered that day, many remain connected with the Society to this day.',

      'Mr. Thavakumar, who took office as the first Chairman, laid the foundation for the Society by forming its management committee with the support of his friend Mr. Thanaraj. Mr. Pangirasu served as the first Secretary. Mr. Thanaraj, who later became Chairman, drafted the Society\'s constitution, launched its website, and introduced the May Day sports meet as well as free educational seminars and mock examinations for students from scholarship level up to G.C.E. Advanced Level. Secretary A.S. Gnanam, Treasurer Mr. Ragadas, and Mr. M. Sivakumar, who promoted sports alongside education, also made notable contributions.'
    ],

    sections: [
      {
        paragraphs: [
          'In the years that followed, under the leadership of Mr. K. Sivasubramaniam, Mr. A. Baskaran, Mr. S. Rajprabu, Mr. M. Sivakumar, Mr. M. Devarasan, and Mr. Sangar Suresh, the Society:'
        ]
      },

      {
        isList: true,
        paragraphs: [
          'Appointed volunteer teachers to schools in underprivileged hill-country areas',
          'Formed a youth wing and expanded the Society\'s work (2015)',
          'Successfully conducted guidance seminars to help graduates enter the Sri Lankan state administrative service',
          'Donated medical equipment and supplies worth over one crore rupees to hill-country hospitals during the COVID-19 period (2019)',
          'Introduced online education via YouTube to make learning accessible from home'
        ]
      },

      {
        paragraphs: [
          'Today, with 19 years of history behind it, the Society continues its work under the leadership of Mr. Sivagnanam, backed by the full support of its management committee. Guided by the vision of "a graduate in every household," our goal remains the self-sufficiency of education in the hill country.'
        ]
      }
    ]
  },

  ta: {
    title: 'மலையகக் கல்வி அபிவிருத்தி மன்றம் – கொழும்பு இன் வரலாறு',

    intro: [
      'உழைப்பாளர் தோட்டத் தொழிலாளர்களின் வாழ்க்கையில் வறுமை ஏற்படுத்தும் பாதிப்பை உணர்ந்த திரு.தனராஜ் மற்றும் திரு.தவக்குமார் ஆகிய இரு நண்பர்கள், 1990களில் செட்டியார் தெருவில் அறிமுகமானார்கள். மலையகச் சமூகத்தையும் மாணவர்களின் எதிர்காலத்தையும் மாற்றக்கூடிய சக்தி கல்வியே என்பதை உணர்ந்த இவர்கள், தலைநகரில் வாழும் மலையக மக்களை ஒன்றிணைத்து ஒரு அமைப்பை உருவாக்க திட்டமிட்டனர்.',

      'இதன் விளைவாக, 2006 ஆகஸ்ட் 26 அன்று மலையகக் கல்வி அபிவிருத்தி மன்றம் கொழும்பு செட்டியார் தெருவில் உதயமானது. அன்று கூடிய 50க்கும் மேற்பட்ட நண்பர்கள் இன்றும் மன்றத்துடன் தொடர்ந்து இணைந்திருக்கின்றனர்.',

      'முதல் தலைவராகப் பொறுப்பேற்ற திரு.தவக்குமார், நண்பர் திரு.தனராஜின் துணையுடன் நிர்வாகக் குழுவை அமைத்து மன்றத்திற்கு அடித்தளமிட்டார். திரு. பங்கிராசு முதல் செயலாளராகப் பணியாற்றினார். பின்னர் தலைமையேற்ற திரு.தனராஜ், மன்ற யாப்பை உருவாக்கி, இணையதளம் ஆரம்பித்து, மேதின விளையாட்டுப் போட்டி மற்றும் இலவச கல்விக் கருத்தரங்குகள், முன்னோடிப் பரீட்சைகள் ஆகியவற்றை அறிமுகப்படுத்தினார். செயலாளர் ஏ.எஸ்.ஞானம், நிதிப் பொறுப்பாளர் திரு.ராகதாஸ், விளையாட்டுத் துறையை வளர்த்த திரு.எம்.சிவக்குமார் ஆகியோரும் குறிப்பிடத்தக்க பங்களிப்பாற்றினர்.'
    ],

    sections: [
      {
        paragraphs: [
          'பின்வந்த ஆண்டுகளில், திரு.கே.சிவசுப்பிரமணியம், திரு.ஏ.பாஸ்கரன், திரு.எஸ்.ராஜ்பிரபு, திரு.எம்.சிவகுமார், திரு.எம்.தேவராசன், திரு.சங்கர் சுரேஸ் ஆகியோர் தலைமையேற்று:'
        ]
      },

      {
        isList: true,
        paragraphs: [
          'பின்தங்கிய பகுதிப் பாடசாலைகளுக்கு தொண்டர் ஆசிரியர்களை நியமித்தனர்',
          'இளைஞர் அணியை உருவாக்கி மன்றத்தை விரிவாக்கினர் (2015)',
          'பட்டதாரிகளுக்கான அரசுத் துறை வழிகாட்டல் கருத்தரங்குகளை நடத்தினர்',
          'கொரோனா காலத்தில் மலையக வைத்தியசாலைகளுக்கு ஒருகோடி ரூபாய்க்கும் மேற்பட்ட உபகரணங்கள் வழங்கினர் (2019)',
          'YouTube வழி இணையக் கல்வியை அறிமுகப்படுத்தினர்'
        ]
      },

      {
        paragraphs: [
          'தற்போது, 19 ஆண்டுகால அனுபவத்துடன் திரு.சிவஞானம் தலைமையில், நிர்வாகக் குழுவின் முழு ஆதரவோடு மன்றம் தொடர்ந்து செயல்படுகின்றது. "வீட்டுக்கொரு பட்டதாரி" என்ற இலக்கோடு, மலையகக் கல்வித்துறை தன்னிறைவு பெற வேண்டும் என்பதே எங்கள் நோக்கம்.'
        ]
      }
    ]
  },

  si: {
    title: 'කඳුරට අධ්‍යාපන සංවර්ධන සංගමය – කොළඹ හි ඉතිහාසය',

    intro: [
      'වතු කම්කරුවන්ගේ ජීවිතවලට දරිද්‍රතාවය ගෙන එන දුෂ්කරතා හඳුනාගත් මිතුරන් දෙදෙනෙකු වන තිරු. තනරාජ් සහ තිරු. තවක්කුමාර්, 1990 දශකයේදී චෙට්ටියාර් වීදියේදී සමීප මිතුරන් බවට පත් වූහ. උඩරට ප්‍රජාවේත් ශිෂ්‍යයන්ගේ අනාගතයේත් වෙනසක් ඇති කළ හැකි එකම බලවේගය අධ්‍යාපනය බව විශ්වාස කළ ඔවුන්, අගනුවර ජීවත් වන උඩරට ජනතාව එක්සත් කර සංවිධානයක් පිහිටුවීමට තීරණය කළහ.',

      'මේ අනුව, 2006 අගෝස්තු 26 වන දින කොළඹ චෙට්ටියාර් වීදියේදී Upcountry Education Development Society බිහි විය. එදින රැස් වූ මිතුරන් 50කට වඩා අද දක්වාම සංගමය සමඟ බැඳී සිටිති.',

      'ප්‍රථම සභාපතිවරයා ලෙස වගකීම භාර ගත් තිරු. තවක්කුමාර්, තම මිතුරා වන තිරු. තනරාජ්ගේ සහාය ඇතිව කළමනාකරණ මණ්ඩලය පිහිටුවා සංගමයට අඩිතාලම දැමීය. තිරු. පංගිරාසු ප්‍රථම ලේකම්වරයා ලෙස කටයුතු කළේය. පසුව සභාපති වූ තිරු. තනරාජ්, සංගමයේ ව්‍යවස්ථාව සකස් කර, වෙබ් අඩවියක් ආරම්භ කර, මැයි දින ක්‍රීඩා උළෙල මෙන්ම ශිෂ්‍යත්ව මට්ටමේ සිට උසස් පෙළ දක්වා ශිෂ්‍යයන් සඳහා නොමිලේ අධ්‍යාපනික සම්මන්ත්‍රණ හා පුරෝකථන විභාග හඳුන්වා දුන්නේය. ලේකම් ඒ.එස්.ඤානම්, භාණ්ඩාගාරික තිරු. රාගදාස් සහ අධ්‍යාපනයට සමගාමීව ක්‍රීඩාව දිරිගැන්වූ තිරු. එම්.සිවකුමාර් ද වැදගත් දායකත්වයක් ලබා දුන්හ.'
    ],

    sections: [
      {
        paragraphs: [
          'ඉන් අනතුරුව, තිරු. කේ.සිවසුබ්‍රමනියම්, තිරු. ඒ.බාස්කරන්, තිරු. එස්.රාජ්ප්‍රභු, තිරු. එම්.සිවකුමාර්, තිරු. එම්.දේවරාසන් සහ තිරු. සංකර් සුරේෂ් ගේ නායකත්වය යටතේ, සංගමය:'
        ]
      },

      {
        isList: true,
        paragraphs: [
          'උඩරට අවතක්සේරු වූ ප්‍රදේශවල පාසල්වලට ස්වේච්ඡා ගුරුවරුන් පත් කළේය',
          'තරුණ අංශයක් පිහිටුවා සංගමයේ කටයුතු පුළුල් කළේය (2015)',
          'උපාධිධාරීන්ට ශ්‍රී ලංකා රාජ්‍ය පරිපාලන සේවයට ඇතුළත් වීමට මගපෙන්වීමේ සම්මන්ත්‍රණ සාර්ථකව පවත්වා ගෙන ගියේය',
          'කොවිඩ්-19 සමයේදී උඩරට රෝහල්වලට රුපියල් කෝටියකට වැඩි වටිනාකමින් යුත් වෛද්‍ය උපකරණ හා ද්‍රව්‍ය පරිත්‍යාග කළේය (2019)',
          'නිවසේ සිටම ඉගෙනීම පහසු කිරීම සඳහා YouTube හරහා අන්තර්ජාල අධ්‍යාපනය හඳුන්වා දුන්නේය'
        ]
      },

      {
        paragraphs: [
          'අද වන විට, වසර 19ක ඉතිහාසයක් සහිතව, තිරු. සිවඥානම්ගේ නායකත්වය යටතේ, කළමනාකරණ මණ්ඩලයේ පූර්ණ සහයෝගය ඇතිව සංගමය තම කටයුතු ඉදිරියට ගෙන යයි. "සෑම නිවසකටම උපාධිධාරියෙක්" යන දැක්මට අනුව, උඩරට අධ්‍යාපන අංශයේ ස්වයංපෝෂිත භාවය අපගේ ඉලක්කය වේ.'
        ]
      }
    ]
  }
};