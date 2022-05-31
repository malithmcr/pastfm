import moment from "moment";

export const formatDuration = (s: any) => {
  var duration = moment.duration(s, "seconds");
  // @ts-ignore: Unreachable code error
  return `${duration._data.minutes}: ${duration._data.seconds}`;
};
