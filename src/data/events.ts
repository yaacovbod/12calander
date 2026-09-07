export type EventCategory = 'bagrut' | 'metakonet' | 'holiday' | 'army' | 'mivhan' | 'gdna' | 'special' | 'memorial' | 'trip' | 'marathon'

export interface EventItem {
  title: string
  cat: EventCategory
  tags: string[]
  time?: string     // HH:MM
  teacher?: string  // מרתונים: שם המורה
  subject?: string  // מרתונים: שם המקצוע לפילטר
}

export interface DateItem {
  id?: string     // ייחודי רק כשיש שני כרטיסים לאותו תאריך
  start: string   // YYYYMMDD
  end: string     // YYYYMMDD
  day: string
  display: string
  events: EventItem[]
}

export interface MonthGroup {
  month: string
  items: DateItem[]
}

export const CUTOFF_DATE = new Date(2026, 1, 1) // 01/02/2026 — past end of calendar

export const schedule: MonthGroup[] = [
  {
    month: 'אוקטובר 2025',
    items: [
      { start: '20251019', end: '20251020', day: 'יום ראשון', display: '19/10/2025', events: [
        { title: 'מבחן משלימים היסטוריה', cat: 'mivhan', tags: ['מבחן'] },
      ]},
      { start: '20251026', end: '20251027', day: 'יום ראשון', display: '26/10/2025', events: [
        { title: 'מבחן באנגלית', cat: 'mivhan', tags: ['מבחן'] },
      ]},
    ],
  },
  {
    month: 'נובמבר 2025',
    items: [
      { start: '20251116', end: '20251117', day: 'יום ראשון', display: '16/11/2025', events: [
        { title: 'מבחן באזרחות', cat: 'mivhan', tags: ['מבחן'] },
      ]},
      { start: '20251119', end: '20251120', day: 'יום רביעי', display: '19/11/2025', events: [
        { title: 'מבחן במתמטיקה', cat: 'mivhan', tags: ['מבחן'] },
      ]},
      { start: '20251122', end: '20251123', day: 'יום שבת', display: '22/11/2025', events: [
        { title: 'סימולציה בגרות BOOST/COBE באנגלית', cat: 'metakonet', tags: ['סימולציה', 'BOOST/COBE'] },
      ]},
      { start: '20251130', end: '20251201', day: 'יום ראשון', display: '30/11/2025', events: [
        { title: 'מבחן אשכול א׳ — תקשורת, מוט"ל, אמנות, מדעי המחשב', cat: 'mivhan', tags: ['מבחן', 'אשכול א׳'] },
      ]},
    ],
  },
  {
    month: 'דצמבר 2025',
    items: [
      { start: '20251202', end: '20251203', day: 'יום שלישי', display: '02/12/2025', events: [
        { title: 'בגרות BOOST/COBE באנגלית', cat: 'bagrut', tags: ['בגרות', 'BOOST/COBE'] },
      ]},
      { start: '20251214', end: '20251215', day: 'יום ראשון', display: '14/12/2025', events: [
        { title: 'בגרות BOOST/COBE באנגלית מועד ב׳', cat: 'bagrut', tags: ['בגרות', 'מועד ב׳', 'BOOST/COBE'] },
      ]},
      { start: '20251215', end: '20251216', day: 'יום שני', display: '15/12/2025', events: [
        { title: 'מבחן אשכול ב׳ — ניהול עסקי ויזמות, ביולוגיה, מידע ונתונים, מדעי החברה', cat: 'mivhan', tags: ['מבחן', 'אשכול ב׳'] },
      ]},
      { start: '20251221', end: '20251222', day: 'יום ראשון', display: '21/12/2025', events: [
        { title: 'הבגרות הפנימית באזרחות מועד א׳', cat: 'bagrut', tags: ['בגרות', 'מועד א׳'] },
      ]},
      { start: '20251223', end: '20251224', day: 'יום שלישי', display: '23/12/2025', events: [
        { title: 'מבחן באנגלית', cat: 'mivhan', tags: ['מבחן'] },
      ]},
      { start: '20251228', end: '20251229', day: 'יום ראשון', display: '28/12/2025', events: [
        { title: 'מבחן בהיסטוריה משלימים', cat: 'mivhan', tags: ['מבחן'] },
      ]},
      { start: '20251230', end: '20251231', day: 'יום שלישי', display: '30/12/2025', events: [
        { title: 'מבחן במתמטיקה', cat: 'mivhan', tags: ['מבחן'] },
      ]},
    ],
  },
  {
    month: 'ינואר 2026',
    items: [
      { start: '20260104', end: '20260105', day: 'יום ראשון', display: '04/01/2026', events: [
        { title: 'הבגרות הפנימית באזרחות מועד ב׳', cat: 'bagrut', tags: ['בגרות', 'מועד ב׳'] },
      ]},
      { start: '20260106', end: '20260107', day: 'יום שלישי', display: '06/01/2026', events: [
        { title: 'מבחן אשכול א׳', cat: 'mivhan', tags: ['מבחן', 'אשכול א׳'] },
      ]},
      { start: '20260119', end: '20260120', day: 'יום שני', display: '19/01/2026', events: [
        { title: 'מבחן אשכול ב׳', cat: 'mivhan', tags: ['מבחן', 'אשכול ב׳'] },
      ]},
      { start: '20260125', end: '20260126', day: 'יום ראשון', display: '25/01/2026', events: [
        { title: 'מתכונת בהיסטוריה משלימים', cat: 'metakonet', tags: ['מתכונת'] },
      ]},
      { start: '20260126', end: '20260129', day: 'שני עד רביעי', display: '26–28/01/2026', events: [
        { title: 'מרתון מטלה מתוקשבת בתנ"ך', cat: 'marathon', tags: ['מרתון', 'תנ"ך'] },
      ]},
    ],
  },
]

export const catColors: Record<EventCategory, { bg: string; color: string; border: string }> = {
  bagrut:    { bg: '#fceee8', color: '#8B2200', border: '#d4a090' },
  metakonet: { bg: '#e8f0f8', color: '#1A4A6B', border: '#90b8d8' },
  holiday:   { bg: '#eaf4ec', color: '#2A6030', border: '#90c898' },
  army:      { bg: '#eaedda', color: '#3D4E1A', border: '#8A9A50' },
  mivhan:    { bg: '#e4f5f2', color: '#1A7A6A', border: '#80c4b8' },
  gdna:      { bg: '#fdf5d8', color: '#7A5000', border: '#e0c050' },
  special:   { bg: '#fdf0e0', color: '#7A3000', border: '#e0b070' },
  memorial:  { bg: '#ededf0', color: '#2a2a3a', border: '#9090a8' },
  trip:      { bg: '#e8f4fd', color: '#1A4A6B', border: '#80b8d8' },
  marathon:  { bg: '#e0f2fe', color: '#0369a1', border: '#7dd3fc' },
}
