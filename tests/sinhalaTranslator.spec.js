import { test, expect } from '@playwright/test';

test.describe('Singlish to Sinhala – Excel Based Test Cases', () => {

  const testCases = [


    { id: 'Pos_Fun_0001', input: 'mama office yanna hadhanne', expected: 'මම office යන්න හදන්නෙ' },
    { id: 'Pos_Fun_0002', input: 'oyaa adha ammalaagee gedhara yanavaadha?', expected: 'ඔයා අද අම්මලාගේ ගෙදර යනවාද?' },
    { id: 'Pos_Fun_0003', input: 'oyaata gihin car eka aran enna puluvandha?', expected: 'ඔයාට ගිහින් car එක අරන් එන්න පුලුවන්ද?' },
    { id: 'Pos_Fun_0004', input: 'api yanna hadhadhdhi eyaalaath ennam kivvaa', expected: 'අපි යන්න හදද්දි එයාලාත් එන්නම් කිව්වා' },
    { id: 'Pos_Fun_0005', input: 'apee ayiyaa heta kandy yanavaa kivvaa matath yanna aasayi', expected: 'අපේ අයියා හෙට kandy යනවා කිව්වා මටත් යන්න ආසයි' },
    { id: 'Pos_Fun_0006', input: 'akkaa edhdhi siini 1kg k geennam kivvaa', expected: 'අක්කා එද්දි සීනි 1kg ක් ගේන්නම් කිව්වා' },

    {id: 'Pos_Fun_0007',  input: `oyaa udhee 8.30 vedhdhi campus ekee inna.
                                  \nmama innam oyaa enakan`,
      expected: `ඔයා උදේ 8.30 වෙද්දි campus එකේ ඉන්න.
                 \nමම ඉන්නම් ඔයා එනකන්`},
    { id: 'Pos_Fun_0008', input: 'elakiri supiri kiri machan!!!', expected: 'එලකිරි සුපිරි කිරි මචන්!!!' },
    { id: 'Pos_Fun_0009', input: 'mamagedharayanavaaikmanatamataparakkuyi', expected: 'මමගෙදරයනවාඉක්මනටමටපරක්කුයි' },
    { id: 'Pos_Fun_0010', input: 'please mata podi help ekak karanna puluvandha oyaata?', expected: 'please මට පොඩි help එකක් කරන්න පුලුවන්ද ඔයාට?' },
    { id: 'Pos_Fun_0011', input: 'karuNaakaralaa yanna', expected: 'කරුණාකරලා යන්න' },
    { id: 'Pos_Fun_0012', input: 'thaaththaa kadee innee', expected: 'තාත්තා කඩේ ඉන්නේ' },
    {id: 'Pos_Fun_0013',
      input: `ethana loku accident ekak unaa.polisiye ayayi gamee ayayi okkoma ethana vatavelaa hitiyaa`, expected: `එතන ලොකු accident එකක් උනා.පොලිසියෙ අයයි ගමේ අයයි ඔක්කොම එතන වටවෙලා හිටියා`
    },
  {
      id: 'Pos_Fun_0014',
      input: `magee jiivithee mama aasama kaalee thamayi magee saamaanya pela liyapu kaalee.ee kaalee mama godak sathuten hitiyaa vageema mata kisima dhukak kalakiriimak thibbee naee . dhaen vagee loku vagakiim godak anaagathee gaena loku bayak ee kaalee mata thibbee naee.mama harima sathuten thamayi hitiyee.`,
      expected: `මගේ ජීවිතේ මම ආසම කාලේ තමයි මගේ සාමාන්ය පෙල ලියපු කාලේ.ඒ කාලේ මම ගොඩක් සතුටෙන් හිටියා වගේම මට කිසිම දුකක් කලකිරීමක් තිබ්බේ නෑ . දැන් වගේ ලොකු වගකීම් ගොඩක් අනාගතේ ගැන ලොකු බයක් ඒ කාලේ මට තිබ්බේ නෑ.මම හරිම සතුටෙන් තමයි හිටියේ.`
    },

    { id: 'Pos_Fun_0015', input: 'mama dhaen thamaa kaeema kanna hadhannee.oyath enavadha kaeema kanna?', expected: 'මම දැන් තමා කෑම කන්න හදන්නේ.ඔයත් එනවද කෑම කන්න?' },
    { id: 'Pos_Fun_0016', input: 'apee ammaa OTP eka ara manussayata dhiilaa dhan', expected: 'අපේ අම්මා OTP එක අර මනුස්සයට දීලා දන්' },
    { id: 'Pos_Fun_0017', input: 'mama   vaedata   yanavaa.', expected: 'මම   වැඩට   යනවා.' },
    { id: 'Pos_Fun_0018', input: 'karuNaakaralaa meeka ganna.mama kaemaeththen nee dhennee.', expected: 'කරුණාකරලා මේක ගන්න.මම කැමැත්තෙන් නේ දෙන්නේ.' },
    { id: 'Pos_Fun_0019', input: 'appatasiri, eyaa ehema kenek kiyalaa mama dhaenan hitiyee naeenee yakoo.', expected: 'අප්පටසිරි, එයා එහෙම කෙනෙක් කියලා මම දැනන් හිටියේ නෑනේ යකෝ.' },
    { id: 'Pos_Fun_0020', input: 'mata aasayi sindhuvak kiyanna issarahata  gihin.', expected: 'මට ආසයි සින්දුවක් කියන්න ඉස්සරහට  ගිහින්.' },
    { id: 'Pos_Fun_0021', input: 'dhaen mama enavaa.mama aavaata pasu api kanna yamu.iitapasse api film eka balala nidhaaganna ammalaage gedhara yamu.', expected: 'දැන් මම එනවා.මම ආවාට පසු අපි කන්න යමු.ඊටපස්සෙ අපි film එක බලල නිදාගන්න අම්මලාගෙ ගෙදර යමු.' },
    { id: 'Pos_Fun_0022', input: 'ganvathura nisaa avathaen vuu janathaavata rajayen sahana saelasiimata piyavara gena aetha.', expected: 'ගන්වතුර නිසා අවතැන් වූ ජනතාවට රජයෙන් සහන සැලසීමට පියවර ගෙන ඇත' },
    { id: 'Pos_Fun_0023', input: 'mama yanna hadhannee.', expected: 'මම යන්න හදන්නේ.' },
    
    
    
    { id: 'Pos_UI_001', input: 'mata gedhara yanna ona', expected: 'මට ගෙදර යන්න' },
    { id: 'Pos_UI_002', input: 'api heta iskoolee yamu', expected: 'අපි හෙට ඉස්කෝලේ යමු' },

   
    {
      id: 'Neg_Fun_001',
      input: 'mapi heta school yamu kiyala hithuwa namuth ehema yanna bari unaa mokada udeta loku waassayak thibuna saha parana paara walin wathura gala basala thibuna ehema nisa bus eka hariyata enne nethi unaa api godak wela balagena hitiya namuth hariyata kisi deyak venne nethi unaa ehema unaa nisa ammayi kiwwa gedara innna kiyala namuth mama hithuwa school giya nam hari kiyala ehema namuth loku loku loku traffic ekak thibuna saha minissu godak kalabala wela hitiya ehema welaa mama phone eka aran message ekak gahuwa teacher ta namuth eka hariyata yawanna bari unaa mokada network awul wela thibuna ehema unaama api gedara inne kiyala thirana gaththa namuth thawa tikak passe waassaya adu unaa ehema unaama apita hithuna yanna puluwan kiyala namuth time eka hariyata nethi unaa mokada loku delay ekak unaa bus eka enne nethi unaa ehema unaa nisa apita honda widihak nethi unaa mehema loku singlish sentence ekak type karama system eka hariyata wada karanawada kiyala balanna mehema godak akuru thiyenawa spelling errors thiyenawa grammar hariyata nethi thana thiyenawa comma full stop nathi thana thiyenawa ehema thiyeddi system eka kohomada react karanne kiyala balanna tamai meka use karanne',
      expected: 'අපි හෙට school යමු කියල හිතුwඅ නමුත් එහෙම යන්න bari උනා මොකඩ උඩෙට ලොකු wආස්සයක් තිබුන සහ පරන පාර wඅලින් wඅතුර ගල බසල තිබුන එහෙම නිස bus එක හරියට එන්නෙ නෙති උනා අපි ගොඩක් wඑල බලගෙන හිටිය නමුත් හරියට කිසි ඩෙයක් වෙන්නෙ නෙති උනා එහෙම උනා නිස අම්මයි කිwwඅ ගෙඩර ඉන්න්න කියල නමුත් මම හිතුwඅ school ගිය නම් හරි කියල එහෙම නමුත් ලොකු ලොකු ලොකු traffic එකක් තිබුන සහ මිනිස්සු ගොඩක් කලබල wඑල හිටිය එහෙම wඑලා මම phone එක අරන් message එකක් ගහුwඅ teacher ට නමුත් එක හරියට යwඅන්න bari උනා මොකඩ network අwඋල් wඑල තිබුන එහෙම උනාම අපි ගෙඩර ඉන්නේ කියල තිරන ගත්ත නමුත් තwඅ ටිකක් පස්සෙ wආස්සය අඩු උනා එහෙම උනාම අපිට හිතුන යන්න පුලුwඅන් කියල නමුත් time එක හරියට නෙති උනා මොකඩ ලොකු delay එකක් උනා bus එක එන්නෙ නෙති උනා එහෙම උනා නිස අපිට හොන්ඩ wඉඩිහක් නෙති උනා මෙහෙම ලොකු සින්ග්ලිශ් sentence එකක් type කරම system එක හරියට wඅඩ කරනwඅඩ කියල බලන්න මෙහෙම ගොඩක් අකුරු තියෙනwඅ spelling errors තියෙනwඅ grammar හරියට නෙති තන තියෙනwඅ comma full stop නති තන තියෙනwඅ එහෙම තියෙඩ්ඩි system එක කොහොමඩ react කරන්නේ කියල බලන්න ටමෛ මෙක use කරන්නේ'
    },

    {
      id: 'Neg_Fun_002',
      input: 'oyata kohomadaaaaa?????',
      expected: 'ඔයාට කොහොමද?'
    },

    {
      id: 'Neg_Fun_003',
      input: '',
      expected: ''
    },

    {
      id: 'Neg_Fun_004',
      input: 'aaaaaaa bbbbbbb ccccccc',
      expected: 'aaaaaaa bbbbbbb ccccccc'
    },

    {
      id: 'Neg_Fun_005',
      input: '4.75787E+16',
      expected: '4.75787E+16'
    },

    {
      id: 'Neg_Fun_006',
      input: 'mamaaa yannnnneeee',
      expected: 'මම යන්නෙ නෑ'
    },

    {id: 'Neg_Fun_007',
     
      input: 'mama office yannawa today',
      expected: 'මම වැඩට යනවා අද'
    },

    {
      id: 'Neg_Fun_008',
      input: 'anna kanna dunna yanna',
      expected: 'අන්න කන්න දුන්නා යන්න'
    },

    {
      id: 'Neg_UI_001',
      input: '#$%%$!%^^@$^%!& oyaa enavaadha maath ekka gedhara yanna',
      expected: 'ඔයා එනවාද මාත් එක්ක ගෙදර යන්න'
    },

    {
      id: 'Neg_UI_002',
      input: `mama yannawa\n\n\n

             oya enne nadda`,
      expected: 'මම යනවා \n\n\nඔයා එන්නෙ නැද්ද' },

    {id: 'Neg_UI_003',input: 'yanna mama eka inne',expected: 'යන්න මම ඒකේ ඉන්නේ'
    }
  ];

  for (const tc of testCases) {
    test(tc.id, async ({ page }) => {
      await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });
      await page.fill('textarea', tc.input);
      await page.waitForTimeout(4000);
      await expect(page.locator('body')).toContainText(tc.expected);
    });
  }
});
