import React, { useMemo } from 'react';
import './CalendarGrid.css';

function toKey(year, month, day) {
  return `${year}-${String(month + 1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
}

function isInRange(key, start, end) {
  if (!start || !end) return false;
  const [s, e] = start <= end ? [start, end] : [end, start];
  return key > s && key < e;
}

function buildCalendar(year, month) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrev = new Date(year, month, 0).getDate();
  const cells = [];
  // Prev month spillover
  for (let i = firstDay - 1; i >= 0; i--) {
    cells.push({ day: daysInPrev - i, current: false, type: 'prev' });
  }
  // Current month
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, current: true, type: 'current' });
  }
  // Next month spillover
  const remaining = 42 - cells.length;
  for (let d = 1; d <= remaining; d++) {
    cells.push({ day: d, current: false, type: 'next' });
  }
  return cells;
}

export default function CalendarGrid({
  year, month, today, rangeStart, rangeEnd,
  hoverDay, holidays, notes, onDayClick, onDayHover, onDayLeave
}) {
  const cells = useMemo(() => buildCalendar(year, month), [year, month]);

  const todayKey = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;

  // Effective range end (hover preview when only start set)
  const effectiveEnd = rangeStart && !rangeEnd && hoverDay
    ? toKey(year, month, hoverDay)
    : rangeEnd;

  return (
    <div className="calendar-grid">
      {cells.map((cell, idx) => {
        const key = cell.current ? toKey(year, month, cell.day) : null;
        const isToday = key === todayKey;
        const isStart = key === rangeStart;
        const isEnd = key === effectiveEnd;
        const inRange = key ? isInRange(key, rangeStart, effectiveEnd) : false;
        const isWeekend = idx % 7 === 0 || idx % 7 === 6;
        const isSunday = idx % 7 === 0;
        const isSaturday = idx % 7 === 6;
        const isHoliday = key && holidays[key];
        const hasNote = key && notes[key];

        let cls = 'cal-day';
        if (!cell.current) cls += ' other-month';
        if (isToday) cls += ' today';
        if (isStart) cls += ' range-start';
        if (isEnd && rangeEnd) cls += ' range-end';
        if (inRange) cls += ' in-range';
        if (isWeekend && cell.current) cls += isSunday ? ' sunday' : ' saturday';
        if (isHoliday) cls += ' holiday';

        return (
          <div
            key={idx}
            className={cls}
            onClick={() => cell.current && onDayClick(cell.day)}
            onMouseEnter={() => cell.current && onDayHover(cell.day)}
            onMouseLeave={onDayLeave}
          >
            <span className="day-num">{cell.day}</span>
            {isToday && <span className="today-dot" />}
            {isHoliday && cell.current && (
              <span className="holiday-dot" title={holidays[key]} />
            )}
            {hasNote && cell.current && (
              <span className="note-dot" title="Has note" />
            )}
          </div>
        );
      })}
    </div>
  );
}
