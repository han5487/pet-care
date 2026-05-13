"use client";

import { FormEvent, useRef, useState } from "react";

function getTomorrow() {
  const now = new Date();
  now.setDate(now.getDate() + 1);
  const offset = now.getTimezoneOffset();
  const local = new Date(now.getTime() - offset * 60 * 1000);
  return local.toISOString().slice(0, 10);
}

export function BookingForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");
  const defaultExpectedDate = getTomorrow();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = data.get("name")?.toString().trim() ?? "";
    const pet = data.get("pet")?.toString().trim() ?? "";
    const expectedDate = data.get("expectedDate")?.toString().trim() ?? "";
    const expectedTime = data.get("expectedTime")?.toString().trim() ?? "";
    const arrivalText = expectedDate && expectedTime ? `，期望 ${expectedDate} ${expectedTime} 到店` : "";

    setStatus(`${name}，已收到 ${pet} 的預約需求${arrivalText}。我們會在營業時間內與你確認時段。`);
    formRef.current?.reset();
  }

  return (
    <form className="booking-form" id="bookingForm" ref={formRef} onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">姓名</label>
        <input id="name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="phone">電話</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" required />
      </div>
      <div className="field">
        <label htmlFor="pet">毛孩名稱</label>
        <input id="pet" name="pet" type="text" required />
      </div>
      <div className="field">
        <label htmlFor="service">服務項目</label>
        <select id="service" name="service" required defaultValue="">
          <option value="">請選擇</option>
          <option>基礎洗護</option>
          <option>皮毛調理</option>
          <option>全身造型修剪</option>
          <option>貓咪舒緩洗護</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="expectedDate">期望到店日期</label>
        <input id="expectedDate" name="expectedDate" type="date" required defaultValue={defaultExpectedDate} />
      </div>
      <div className="field">
        <label htmlFor="expectedTime">期望到店時間</label>
        <select id="expectedTime" name="expectedTime" required defaultValue="09:30">
          <option>09:30</option>
          <option>10:00</option>
          <option>11:00</option>
          <option>13:00</option>
          <option>14:00</option>
          <option>15:00</option>
          <option>16:00</option>
          <option>17:00</option>
          <option>18:00</option>
        </select>
      </div>
      <div className="field full">
        <label htmlFor="note">毛況與需求</label>
        <textarea id="note" name="note" placeholder="例如：容易緊張、皮膚偏乾、想修短但保留臉型" />
      </div>
      <div className="field full">
        <button className="button" type="submit">送出預約需求</button>
        <p className="form-status" id="formStatus" role="status" aria-live="polite">
          {status}
        </p>
      </div>
    </form>
  );
}
