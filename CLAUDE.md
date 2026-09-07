@AGENTS.md

# exam12 — לוח מבחנים שכבת י"ב נעימת הלב

## מטרת הפרויקט
לוח מבחנים ואירועים לשכבת י"ב בבית הספר נעימת הלב, עם תצוגת אירועים כרונולוגית ולוח שנה.

## טכנולוגיות
- Next.js 16.2.3, React 19
- TypeScript, Tailwind CSS v4
- פריסה: GitHub repo `yaacovbod/12calander`

## מבנה קבצים מרכזי
- הקובץ `src/app/page.tsx` — דף הבית: כותרת, לוגו, תאריך עדכון אחרון
- הקובץ `src/app/globals.css` — עיצוב גלובלי, ערכת צבעים כחול-כסף (בוגרים), RTL
- הקובץ `src/data/events.ts` — כל הנתונים: אירועים, קטגוריות, צבעים, CUTOFF_DATE
- הקובץ `src/components/SchedulePage.tsx` — תצוגת אירועים עם פיצ'ר עבר/עתיד
- הקובץ `src/components/EventCard.tsx` — כרטיס אירוע עם טאבים, תגיות, כפתורי Google/Apple Calendar
- הקובץ `src/components/CalendarView.tsx` — תצוגת לוח שנה חודשי (אפריל–יולי 2026)
- הקובץ `src/components/FloatingElements.tsx` — אנימציית אלמנטים צפים ברקע
- הקובץ `public/neimat.png` — לוגו בית הספר

## נתוני האירועים (`events.ts`)
- **קטגוריות:** `bagrut`, `metakonet`, `holiday`, `army`, `mivhan`, `gdna`, `special`, `memorial`, `trip`
- **CUTOFF_DATE:** 01/08/2026 — תאריך שמעבר לו CalendarView מציג "🚧 בבנייה"
- **טווח אירועים:** אפריל 2026 עד יולי 2026
- **מבנה DateItem:** `start/end` בפורמט YYYYMMDD, `day` (שם היום בעברית), `display` (תצוגה), `events[]`
- אירועים מרובי-ימים: שדה `day` מכיל "ראשון עד חמישי" (לא מספרים)

## פילטר קטגוריות (`SchedulePage.tsx`)
הלג'נד הוחלף בכפתורי פילטר לחיצים. קליק על אותו כפתור שוב מבטל את הסינון (toggle). ארבע קבוצות מאוחדות:
- **מבחן** — כולל `mivhan` + `metakonet` (מבחנים ומתכונות)
- **בגרויות** — כולל `bagrut`
- **מועדים וחגים** — כולל `holiday` + `memorial` + `special`
- **פעילות וטיולים** — כולל `army` + `trip`

## קהל יעד
תלמידי ומורי שכבת י"ב, הורים — צפייה בלוח מבחנים ומתכונות לשנת הלימודים תשפ"ו

## עדכון נתונים — זרימת עבודה
כל עדכון נתונים נעשה ישירות בקובץ `src/data/events.ts` ולא דרך ממשק אדמין.

**קובץ העריכה:** `exam12/events-schedule.xlsx` — טבלת אקסל עם כל האירועים.
עמודות: `תאריך_התחלה`, `תאריך_סיום`, `כותרת`, `קטגוריה`, `תגיות`

**ערכי קטגוריה תקינים:**
- `בגרות` → `bagrut`
- `מתכונת` → `metakonet`
- `מבחן` → `mivhan`
- `חג / חופשה` → `holiday`
- `יום זיכרון` → `memorial`
- `הכנה לצהל` → `army`
- `טיול` → `trip`
- `מיוחד` → `special`

**תהליך עדכון:**
1. המשתמש עורך את `events-schedule.xlsx` (מוסיף/משנה/מוחק שורות)
2. המשתמש אומר "עדכן לפי הקובץ"
3. קרא את הקובץ דרך PowerShell COM, שמור ל-`events-read.txt`, קרא אותו
4. השווה לנתונים הנוכחיים ב-`events.ts`, החל שינויים
5. `git commit` + `git push origin master` — Vercel מדפלוי אוטומטית
