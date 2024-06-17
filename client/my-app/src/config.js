export const BASE_URL = "http://localhost:3000/";

export const MAIN_COLOR = "#d76996";

export const timeFormat = (time) => {
  const post = new Date(time);
  const now = new Date();
  const diff = now - post;

  const sec = Math.floor(diff / 1000);
  const min = Math.floor(sec / 60);
  const hour = Math.floor(min / 60);
  const day = Math.floor(hour / 24);

  if (sec < 60) {
    return `${sec}초 전`;
  } else if (min < 60) {
    return `${min}분 전`;
  } else if (hour < 24) {
    return `${hour}시간 전`;
  } else {
    return `${day}일 전`;
  }
};
