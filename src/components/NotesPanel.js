import React, { useState, useEffect, useRef } from 'react';
import './NotesPanel.css';

export default function NotesPanel({
  notes, setNotes, rangeStart, rangeEnd, monthKey, monthName, year
}) {
  const [tab, setTab] = useState('range'); // 'range' | 'month'
  const textareaRef = useRef(null);

  // Switch to range tab when a selection is made
  useEffect(() => {
    if (rangeStart) setTab('range');
  }, [rangeStart]);

  const rangeNoteKey = rangeStart
    ? (rangeEnd ? `${rangeStart}::${rangeEnd}` : rangeStart)
    : null;

  const rangeNoteValue = rangeNoteKey ? (notes[rangeNoteKey] || '') : '';
  const monthNoteValue = notes[monthKey] || '';

  const handleRangeNote = (e) => {
    if (!rangeNoteKey) return;
    setNotes(prev => ({ ...prev, [rangeNoteKey]: e.target.value }));
  };

  const handleMonthNote = (e) => {
    setNotes(prev => ({ ...prev, [monthKey]: e.target.value }));
  };

  const clearNote = () => {
    if (tab === 'range' && rangeNoteKey) {
      setNotes(prev => { const n = {...prev}; delete n[rangeNoteKey]; return n; });
    } else if (tab === 'month') {
      setNotes(prev => { const n = {...prev}; delete n[monthKey]; return n; });
    }
  };

  const currentValue = tab === 'range' ? rangeNoteValue : monthNoteValue;
  const placeholder = tab === 'range'
    ? (rangeStart
        ? `Notes for ${formatKey(rangeStart)}${rangeEnd ? ' → '+formatKey(rangeEnd) : ''}…`
        : 'Select a date or range first…')
    : `General memo for ${monthName} ${year}…`;

  return (
    <div className="notes-panel">
      <div className="notes-tabs">
        <button
          className={`notes-tab ${tab === 'range' ? 'active' : ''}`}
          onClick={() => setTab('range')}
        >
          📅 Date Note
        </button>
        <button
          className={`notes-tab ${tab === 'month' ? 'active' : ''}`}
          onClick={() => setTab('month')}
        >
          📋 Month Memo
        </button>
        {currentValue && (
          <button className="note-clear-btn" onClick={clearNote} title="Clear note">
            Clear
          </button>
        )}
      </div>

      <div className="notes-body">
        <textarea
          ref={textareaRef}
          className="notes-textarea"
          value={tab === 'range' ? rangeNoteValue : monthNoteValue}
          onChange={tab === 'range' ? handleRangeNote : handleMonthNote}
          placeholder={placeholder}
          disabled={tab === 'range' && !rangeStart}
          rows={4}
        />
        <div className="notes-footer">
          <span className="char-count">
            {currentValue.length} chars
          </span>
          {currentValue.length > 0 && (
            <span className="saved-indicator">✓ Saved locally</span>
          )}
        </div>
      </div>
    </div>
  );
}

function formatKey(key) {
  const [y, m, d] = key.split('-');
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${months[parseInt(m)-1]} ${parseInt(d)}`;
}
