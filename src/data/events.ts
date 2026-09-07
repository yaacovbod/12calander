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

export const CUTOFF_DATE = new Date(2026, 7, 1) // 01/08/2026 — past end of calendar

export const schedule: MonthGroup[] = []

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
