import CheckIcon from "@/components/icon/CheckIcon";
import { LeftArrow } from "@/components/icon/LeftArrow";
import RightArrow from "@/components/icon/RightArrow";
import useMyStore from "@/store/useMyStore";
import useUserStore from "@/store/useUserStore";
import { SubjectType } from "@/types/common";
import dayjs from "dayjs";
import { useCallback, useMemo, useState } from "react";

export interface CalendarProps {
  onClose(): Promise<void>;
  onConfirm(value: string): Promise<void>;
  value?: string;
}

export default function Calendar(props: CalendarProps) {
  const { onConfirm, onClose, value = new Date().toDateString() } = props;
  const userType = useMyStore((state) => state.tendency);

  const [currentDate, setCurrentDate] = useState(dayjs(value));
  const [selectedDate, setSelectedDate] = useState(value);
  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");
  const startDate = startOfMonth.startOf("week");
  const endDate = endOfMonth.endOf("week");

  const handleConfirm = useCallback(() => {
    onConfirm(selectedDate as string);
    onClose();
  }, [onClose, onConfirm, selectedDate]);

  const days = useMemo(() => {
    const dates = [];
    let date = startDate;
    while (date.isBefore(endDate) || date.isSame(endDate, "day")) {
      dates.push(date);
      date = date.add(1, "day");
    }
    return dates;
  }, [startDate, endDate]);

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  return (
    <>
      <div className="fixed z-[100] top-0 left-0 bg-black opacity-[.7] w-screen h-screen" />

      <div className="fixed z-[100] w-[335px] min-h-[418px] flex flex-col pt-[16px] px-[20px] pb-[8px] rounded-[12px] bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center justify-between h-[64px]">
          <button
            onClick={handlePrevMonth}
            className="flex-center rounded-[4px] border-[1px] w-[48px] h-[48px]"
          >
            <LeftArrow />
          </button>
          <h2 className="font-[600] text-[20px]">
            {currentDate.format("YYYY. MM")}
          </h2>
          <button
            onClick={handleNextMonth}
            className="flex-center rounded-[4px] border-[1px] w-[48px] h-[48px]"
          >
            <RightArrow />
          </button>
        </div>
        <div className="my-[8px] grid grid-cols-7 text-center">
          {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
            <div
              key={day}
              className={`w-[42px] h-[40px] flex-center text-gray900 opacity-50 ${
                day === "일" ? "text-negative" : ""
              }`}
            >
              {day}
            </div>
          ))}
          {days.map((day) => (
            <button
              key={day.format("YYYY-MM-DD")}
              onClick={() => setSelectedDate(day.toString())}
              className={`w-[42px] h-[40px] flex-center ${
                day.month() !== currentDate.month() ? "opacity-50" : ""
              } ${
                day.isSame(selectedDate, "day")
                  ? `${
                      userType === SubjectType.BAEZZANGE
                        ? "bg-mainGreen"
                        : "bg-mainBlack"
                    } text-white rounded-full`
                  : ""
              }
                  ${day.day() === 0 ? "text-negative" : ""}`}
            >
              {day.date()}
            </button>
          ))}
        </div>
        <div className="flex-center gap-[8px] mt-[12px] font-[600]">
          <button
            onClick={onClose}
            className="flex-center h-[48px] w-full rounded-[12px] border-[1px]"
          >
            취소
          </button>
          <button
            onClick={handleConfirm}
            className={`flex-center gap-[8px] h-[48px] w-full rounded-[12px] text-white ${
              userType === SubjectType.BAEZZANGE
                ? "bg-mainGreen"
                : "bg-mainBlack"
            }`}
          >
            <CheckIcon />
            <div>선택완료</div>
          </button>
        </div>
      </div>
    </>
  );
}
