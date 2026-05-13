"use client";

import { FormEvent, useState } from "react";

const timeSlots = [
  "09:30",
  "10:00",
  "11:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

function getToday() {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  const local = new Date(now.getTime() - offset * 60 * 1000);
  return local.toISOString().slice(0, 10);
}

function getTomorrow() {
  const now = new Date();
  now.setDate(now.getDate() + 1);
  const offset = now.getTimezoneOffset();
  const local = new Date(now.getTime() - offset * 60 * 1000);
  return local.toISOString().slice(0, 10);
}

export function ArrivalTimePicker() {
  const [date, setDate] = useState(getTomorrow);
  const [time, setTime] = useState("09:30");
  const [message, setMessage] = useState("");
  const today = getToday();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!date || !time) {
      setMessage("請先選擇期望到店日期與時間。");
      return;
    }

    const dateField = document.getElementById("expectedDate") as HTMLInputElement | null;
    const timeField = document.getElementById("expectedTime") as HTMLSelectElement | null;

    if (dateField) {
      dateField.value = date;
      dateField.dispatchEvent(new Event("input", { bubbles: true }));
      dateField.dispatchEvent(new Event("change", { bubbles: true }));
    }

    if (timeField) {
      timeField.value = time;
      timeField.dispatchEvent(new Event("input", { bubbles: true }));
      timeField.dispatchEvent(new Event("change", { bubbles: true }));
    }

    setMessage(`已先帶入 ${date} ${time}，請補完下方資料。`);
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <form className="arrival-picker" aria-label="選擇期望到店時間" onSubmit={handleSubmit}>
      <div className="arrival-head">
        <span>期望到店時間</span>
        <b>先選時段，再補資料</b>
      </div>
      <div className="arrival-fields">
        <label>
          <span>日期</span>
          <input
            type="date"
            min={today}
            value={date}
            onChange={(event) => setDate(event.target.value)}
            required
          />
        </label>
        <label>
          <span>時間</span>
          <select value={time} onChange={(event) => setTime(event.target.value)} required>
            <option value="">選擇時段</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </label>
        <button className="button" type="submit">帶入預約</button>
      </div>
      <p className="arrival-status" role="status" aria-live="polite">{message}</p>
    </form>
  );
}
