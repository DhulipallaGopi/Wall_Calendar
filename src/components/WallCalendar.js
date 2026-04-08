import React, { useState, useEffect, useCallback } from 'react';
import './WallCalendar.css';
import CalendarGrid from './CalendarGrid';
import NotesPanel from './NotesPanel';
import MonthImage from './MonthImage';

const MONTH_NAMES = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
];

const DAY_LABELS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

const THEMES = {
  0:  { label: 'Winter Frost',   bg: '#c8d8e8', accent: '#2563eb', emoji: '❄️' },
  1:  { label: 'Blush Spring',   bg: '#f9d5e5', accent: '#be185d', emoji: '🌸' },
  2:  { label: 'Mint Forest',    bg: '#d1fae5', accent: '#065f46', emoji: '🌿' },
  3:  { label: 'Blossom',        bg: '#fce7f3', accent: '#9d174d', emoji: '🌷' },
  4:  { label: 'Sunlit Gold',    bg: '#fef9c3', accent: '#a16207', emoji: '☀️' },
  5:  { label: 'Ocean Breeze',   bg: '#dbeafe', accent: '#1d4ed8', emoji: '🌊' },
  6:  { label: 'Sunburn',        bg: '#fff7ed', accent: '#c2410c', emoji: '🏖️' },
  7:  { label: 'Harvest',        bg: '#ffedd5', accent: '#9a3412', emoji: '🍂' },
  8:  { label: 'Autumn Ember',   bg: '#fed7aa', accent: '#7c2d12', emoji: '🍁' },
  9:  { label: 'Smoky Oak',      bg: '#e7e5e4', accent: '#44403c', emoji: '🌫️' },
  10: { label: 'Deep Night',     bg: '#e0e7ff', accent: '#3730a3', emoji: '🌙' },
  11: { label: 'Holly',          bg: '#dcfce7', accent: '#14532d', emoji: '🎄' },
};

function getHolidays(year) {
  return {
    [`${year}-01-01`]: "New Year's Day",
    [`${year}-01-26`]: "Republic Day",
    [`${year}-03-17`]: "Holi",
    [`${year}-04-14`]: "Ambedkar Jayanti",
    [`${year}-04-18`]: "Good Friday",
    [`${year}-05-01`]: "Labour Day",
    [`${year}-08-15`]: "Independence Day",
    [`${year}-10-02`]: "Gandhi Jayanti",
    [`${year}-10-24`]: "Dussehra",
    [`${year}-11-01`]: "Diwali",
    [`${year}-12-25`]: "Christmas",
  };
}

function toKey(year, month, day) {
  return `${year}-${String(month + 1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
}

function loadStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch { return fallback; }
}

export default function WallCalendar() {
  const today = new Date();
  const [viewYear, setViewYear]   = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [rangeStart, setRangeStart] = useState(null);
  const [rangeEnd, setRangeEnd]     = useState(null);
  const [hoverDay, setHoverDay]     = useState(null);
  const [notes, setNotes]           = useState(() => loadStorage('wc_notes', {}));
  const [flipping, setFlipping]     = useState(false);
  const [flipDir, setFlipDir]       = useState('next');
  const [showThemePicker, setShowThemePicker] = useState(false);

  const theme = THEMES[viewMonth];
  const holidays = getHolidays(viewYear);

  // Persist notes
  useEffect(() => {
    localStorage.setItem('wc_notes', JSON.stringify(notes));
  }, [notes]);

  // Apply theme accent to CSS var
  useEffect(() => {
    document.documentElement.style.setProperty('--accent', theme.accent);
  }, [theme]);

  const animateFlip = useCallback((dir, cb) => {
    setFlipDir(dir);
    setFlipping(true);
    setTimeout(() => {
      cb();
      setFlipping(false);
    }, 320);
  }, []);

  const prevMonth = () => {
    animateFlip('prev', () => {
      if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
      else setViewMonth(m => m - 1);
    });
  };

  const nextMonth = () => {
    animateFlip('next', () => {
      if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
      else setViewMonth(m => m + 1);
    });
  };

  const handleDayClick = (day) => {
    const key = toKey(viewYear, viewMonth, day);
    if (!rangeStart || (rangeStart && rangeEnd)) {
      setRangeStart(key);
      setRangeEnd(null);
    } else {
      const start = new Date(rangeStart);
      const clicked = new Date(key);
      if (clicked < start) {
        setRangeEnd(rangeStart);
        setRangeStart(key);
      } else {
        setRangeEnd(key);
      }
    }
  };

  const clearRange = () => { setRangeStart(null); setRangeEnd(null); };

  const selectedDateKey = rangeStart && !rangeEnd ? rangeStart :
    rangeStart && rangeEnd ? rangeStart : null;

  const rangeLabel = () => {
    if (!rangeStart) return null;
    const fmt = k => {
      const [y, m, d] = k.split('-');
      return `${MONTH_NAMES[parseInt(m)-1].slice(0,3)} ${parseInt(d)}, ${y}`;
    };
    if (!rangeEnd) return fmt(rangeStart);
    return `${fmt(rangeStart)} → ${fmt(rangeEnd)}`;
  };

  return (
    <div
      className="calendar-wrapper"
      style={{ '--theme-bg': theme.bg, '--theme-accent': theme.accent }}
    >
      {/* Hanging holes */}
      <div className="hang-holes">
        {[...Array(6)].map((_,i) => <div key={i} className="hole" />)}
      </div>

      <div className={`calendar-body ${flipping ? `flip-${flipDir}` : ''}`}>

        {/* LEFT: Image Panel */}
        <MonthImage
          month={viewMonth}
          year={viewYear}
          theme={theme}
          monthName={MONTH_NAMES[viewMonth]}
          onPrev={prevMonth}
          onNext={nextMonth}
          onTheme={() => setShowThemePicker(v => !v)}
          showThemePicker={showThemePicker}
          onSelectTheme={() => setShowThemePicker(false)}
        />

        {/* RIGHT: Calendar + Notes */}
        <div className="calendar-right">
          {/* Month Header */}
          <div className="month-header">
            <div className="month-title-row">
              <h2 className="month-name">{MONTH_NAMES[viewMonth]}</h2>
              <span className="year-badge">{viewYear}</span>
            </div>
            {rangeStart && (
              <div className="range-pill">
                <span>{rangeLabel()}</span>
                <button className="clear-range" onClick={clearRange} title="Clear selection">✕</button>
              </div>
            )}
          </div>

          {/* Day Labels */}
          <div className="day-labels">
            {DAY_LABELS.map(d => (
              <div key={d} className={`day-label ${d === 'Sun' ? 'sun' : d === 'Sat' ? 'sat' : ''}`}>
                {d}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <CalendarGrid
            year={viewYear}
            month={viewMonth}
            today={today}
            rangeStart={rangeStart}
            rangeEnd={rangeEnd}
            hoverDay={hoverDay}
            holidays={holidays}
            notes={notes}
            onDayClick={handleDayClick}
            onDayHover={setHoverDay}
            onDayLeave={() => setHoverDay(null)}
          />

          {/* Notes */}
          <NotesPanel
            notes={notes}
            setNotes={setNotes}
            rangeStart={rangeStart}
            rangeEnd={rangeEnd}
            monthKey={`${viewYear}-${String(viewMonth+1).padStart(2,'0')}`}
            monthName={MONTH_NAMES[viewMonth]}
            year={viewYear}
          />
        </div>
      </div>
    </div>
  );
}
