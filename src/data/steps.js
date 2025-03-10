// src/steps.js
import { FaSearch, FaCheckCircle, FaClock, FaProjectDiagram } from 'react-icons/fa';

// ייבוא תמונות הרקע
import starryBg from '../img/background/starry-sky-2675322_1280.jpg';
import textileBg from '../img/background/textile-2918844_1280.jpg';
import waveBg from '../img/background/wave-7237725_1280.jpg';
import paperBg from '../img/background/paper-1074131_1280.jpg';

// ייבוא תמונות השלבים
import electricianImg from '../img/electrician-1288717_1280.jpg';
import laptopImg from '../img/laptop-3244483_1280.jpg';
import sharkImg from '../img/shark-3483459_1280.jpg';
import boardImg from '../img/board-453758_1280.jpg';

const steps = [
  {
    title: <><FaSearch className="inline-block text-blue-600" /> חקר שוק והגדרת מטרה</>,
    content: "• הגדרת משרה ויעד עם דדליין ברור.\n• חקר שוק ומודעות דרושים באמצעות AI.\n• בחירת תחום התמחות ממוקד.\n✅ פעולה: כתבו תפקיד יעד ותאריך יעד למציאת עבודה.",
    image: laptopImg,
    background: starryBg
  },
  {
    title: <><FaCheckCircle className="inline-block text-green-600" /> תיאום ציפיות</>,
    content: "• בדיקת הידע האישי מול דרישות השוק.\n• השלמת פערים בלמידה עצמית.\n• כיוון ציפיות ריאליות למניעת שחיקה.\n✅ פעולה: דברו עם אנשים שמצאו עבודה ונתחו את הפערים שלכם.",
    image: sharkImg,
    background: textileBg
  },
  {
    title: <><FaClock className="inline-block text-yellow-600" /> ניהול סדר יום</>,
    content: "• חיפוש עבודה זו עבודה לכל דבר.\n• בניית לוח זמנים קבוע ללמידה, תרגול ועבודה על פרויקטים.\n• שמירה על משמעת וזמנים קבועים.\n✅ פעולה: צרו תוכנית שבועית והתייחסו אליה ברצינות כמו לעבודה אמיתית.",
    image: electricianImg,
    background: waveBg
  },
  {
    title: <><FaProjectDiagram className="inline-block text-purple-600" /> פרויקט הפריצה</>,
    content: "• בניית פרויקט אמיתי לשימוש ציבורי.\n• שימוש בטכנולוגיות רלוונטיות (Frontend, Backend, DevOps וכו').\n• הצגת פרויקט אישי בראיונות עבודה.\n✅ פעולה: מצאו בעיה בסביבתכם, בנו לה פתרון והחלו לתעד את תהליך העבודה שלכם.",
    image: boardImg,
    background: paperBg
  }
];

export default steps;
