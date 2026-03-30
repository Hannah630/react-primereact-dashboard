import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { Editor } from "primereact/editor";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import styles from "./Settings.module.css";

export default function Settings() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [phone, setPhone] = useState("");
  const [visitorType, setVisitorType] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  const visitorOptions = [
    { label: "訪客", value: "訪客" },
    { label: "學生", value: "學生" },
    { label: "企業", value: "企業" },
    { label: "其他", value: "其他" },
  ];

  const handleClear = () => {
    setName("");
    setEmail("");
    setDate(null);
    setPhone("");
    setVisitorType(null);
    setMessage("");
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    // 這裡可以改成呼叫 API 或其他處理
    console.log({ name, email, date, phone, visitorType, message });
    alert("已送出，請檢查 console.log（開發用）");
    handleClear();
  };

  return (
    <div className={styles.page}>
      <Card className={styles.card}>
        <h2 className={styles.title}>contact me</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.fieldRow}>
            <span>
              <label htmlFor="name" className={styles.fieldLabel}>
                填表人姓名
              </label>
              <InputText
                id="name"
                placeholder="請輸入姓名"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.control}
              />
            </span>

            <span>
              <label htmlFor="email" className={styles.fieldLabel}>
                Email
              </label>
              <InputText
                id="email"
                placeholder="請輸入 email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.control}
              />
            </span>
          </div>

          <div className={styles.fieldRow}>
            <span>
              <label htmlFor="date" className={styles.inlineLabel}>
                填表日期
              </label>
              <Calendar
                id="date"
                value={date}
                onChange={(e) => setDate(e.value as Date)}
                dateFormat="yy/mm/dd"
                showIcon
                className={styles.control}
              />
            </span>

            <span>
              <label htmlFor="phone" className={styles.fieldLabel}>
                電話
              </label>
              <InputText
                id="phone"
                placeholder="請輸入電話"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={styles.control}
              />
            </span>
          </div>

          <div className={styles.fieldRow}>
            <span className={styles.fullWidth}>
              <label htmlFor="visitor" className={styles.inlineLabel}>
                訪客類型
              </label>
              <Dropdown
                id="visitor"
                value={visitorType}
                options={visitorOptions}
                onChange={(e) => setVisitorType(e.value)}
                editable
                placeholder="選擇或輸入"
                className={styles.control}
              />
            </span>
          </div>

          <div className={styles.fieldRow}>
            <span className={styles.fullWidth}>
              <label className={styles.inlineLabel}>留言</label>
              <Editor
                style={{ height: "200px" }}
                value={message}
                onTextChange={(e) => setMessage((e as any).htmlValue)}
                className={styles.editor}
              />
            </span>
          </div>

          <div className={styles.actions}>
            <Button
              type="button"
              label="clear"
              className="p-button-secondary"
              onClick={handleClear}
            />
            <Button type="submit" label="submit" icon="pi pi-check" />
          </div>
        </form>
      </Card>
    </div>
  );
}
