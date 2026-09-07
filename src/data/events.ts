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

export const CUTOFF_DATE = new Date(2027, 1, 1) // 01/02/2027 — past end of current data

export const schedule: MonthGroup[] = [
  {
    month: 'אוקטובר 2026',
    items: [
      { start: '20261019', end: '20261020', day: 'יום שני', display: '19/10/2026', events: [
        { title: 'מבחן משלימים היסטוריה', cat: 'mivhan', tags: ['מבחן'] },
      ]},
      { start: '20261026', end: '20261027', day: 'יום שני', display: '26/10/2026', events: [
        { title: 'מבחן באנגלית', cat: 'mivhan', tags: ['מבחן'] },
      ]},
    ],
  },
  {
    month: 'נובמבר 2026',
    items: [
      { start: '20261116', end: '20261117', day: 'יום שני', display: '16/11/2026', events: [
        { title: 'מבחן באזרחות', cat: 'mivhan', tags: ['מבחן'] },
      ]},
      { start: '20261119', end: '20261120', day: 'יום חמישי', display: '19/11/2026', events: [
        { title: 'מבחן במתמטיקה', cat: 'mivhan', tags: ['מבחן'] },
      ]},
      { start: '20261122', end: '20261123', day: 'יום ראשון', display: '22/11/2026', events: [
        { title: 'סימולציה בגרות BOOST/COBE באנגלית', cat: 'metakonet', tags: ['סימולציה', 'BOOST/COBE'] },
      ]},
      { start: '20261130', end: '20261201', day: 'יום שני', display: '30/11/2026', events: [
        { title: 'מבחן אשכול א׳ — תקשורת, מוט"ל, אמנות, מדעי המחשב', cat: 'mivhan', tags: ['מבחן', 'אשכול א׳'] },
      ]},
    ],
  },
  {
    month: 'דצמבר 2026',
    items: [
      { start: '20261202', end: '20261203', day: 'יום רביעי', display: '02/12/2026', events: [
        { title: 'בגרות BOOST/COBE באנגלית', cat: 'bagrut', tags: ['בגרות', 'BOOST/COBE'] },
      ]},
      { start: '20261214', end: '20261215', day: 'יום שני', display: '14/12/2026', events: [
        { title: 'בגרות BOOST/COBE באנגלית מועד ב׳', cat: 'bagrut', tags: ['בגרות', 'מועד ב׳', 'BOOST/COBE'] },
      ]},
      { start: '20261215', end: '20261216', day: 'יום שלישי', display: '15/12/2026', events: [
        { title: 'מבחן אשכול ב׳ — ניהול עסקי ויזמות, ביולוגיה, מידע ונתונים, מדעי החברה', cat: 'mivhan', tags: ['מבחן', 'אשכול ב׳'] },
      ]},
      { start: '20261221', end: '20261222', day: 'יום שני', display: '21/12/2026', events: [
        { title: 'הבגרות הפנימית באזרחות מועד א׳', cat: 'bagrut', tags: ['בגרות', 'מועד א׳'] },
      ]},
      { start: '20261223', end: '20261224', day: 'יום רביעי', display: '23/12/2026', events: [
        { title: 'מבחן באנגלית', cat: 'mivhan', tags: ['מבחן'] },
      ]},
      { start: '20261228', end: '20261229', day: 'יום שני', display: '28/12/2026', events: [
        { title: 'מבחן בהיסטוריה משלימים', cat: 'mivhan', tags: ['מבחן'] },
      ]},
      { start: '20261230', end: '20261231', day: 'יום רביעי', display: '30/12/2026', events: [
        { title: 'מבחן במתמטיקה', cat: 'mivhan', tags: ['מבחן'] },
      ]},
    ],
  },
  {
    month: 'ינואר 2027',
    items: [
      { start: '20270104', end: '20270105', day: 'יום שני', display: '04/01/2027', events: [
        { title: 'הבגרות הפנימית באזרחות מועד ב׳', cat: 'bagrut', tags: ['בגרות', 'מועד ב׳'] },
      ]},
      { start: '20270106', end: '20270107', day: 'יום רביעי', display: '06/01/2027', events: [
        { title: 'מבחן אשכול א׳', cat: 'mivhan', tags: ['מבחן', 'אשכול א׳'] },
      ]},
      { start: '20270119', end: '20270120', day: 'יום שלישי', display: '19/01/2027', events: [
        { title: 'מבחן אשכול ב׳', cat: 'mivhan', tags: ['מבחן', 'אשכול ב׳'] },
      ]},
      { start: '20270125', end: '20270126', day: 'יום שני', display: '25/01/2027', events: [
        { title: 'מתכונת בהיסטוריה משלימים', cat: 'metakonet', tags: ['מתכונת'] },
      ]},
      { start: '20270126', end: '20270129', day: 'שלישי עד חמישי', display: '26–28/01/2027', events: [
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
