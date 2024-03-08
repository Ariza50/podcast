import {intervalToDuration} from "date-fns";

export const trimLabel = (label, trimAt) => {
  return label.length >= trimAt ? `${label.substring(0, trimAt)}...` : label
}

export const duration = (millis) => {
  const duration = intervalToDuration({ start: 0, end: millis })
  const zeroPad = (num) => String(num).padStart(2, '0')

  return [
    duration.hours,
    duration.minutes,
    duration.seconds,
  ]
    .filter(Boolean)
    .map(zeroPad)
    .join(':')
}
