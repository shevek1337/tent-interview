import { TFunction } from "i18next";

export const howLongAgo = (dateString: string, tFunction: TFunction) => {
  const now = new Date();
  const pastDate = new Date(dateString);
  const diffInSeconds = Math.floor((now.getTime() - pastDate.getTime()) / 1000);

  const secondsInHour = 3600;
  const secondsInDay = 86400;
  const secondsInWeek = 604800;
  const secondsInMonth = 2592000;

  if (diffInSeconds < secondsInDay) {
    const hours = Math.floor(diffInSeconds / secondsInHour);
    return tFunction("NUMBER_HOURS_AGO", { number: hours });
  } else if (diffInSeconds < secondsInWeek) {
    const days = Math.floor(diffInSeconds / secondsInDay);
    return tFunction("NUMBER_DAYS_AGO", { number: days });
  } else if (diffInSeconds < secondsInMonth) {
    const weeks = Math.floor(diffInSeconds / secondsInWeek);
    return tFunction("NUMBER_WEEKS_AGO", { number: weeks });
  } else {
    const months = Math.floor(diffInSeconds / secondsInMonth);
    return tFunction("NUMBER_MONTHS_AGO", { number: months });
  }
};
