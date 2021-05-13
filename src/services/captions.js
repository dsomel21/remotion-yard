import async from 'async';

/* Refactored From: https://github.com/TinyNova/aws-transcription-to-srt/blob/master/index.js*/
export const formatCaptions = (json, fps) => {
  console.log(`Formatting Captions: @ ${fps}fps`);
  if (json.results.items.length === 0) {
    return '';
  }

  const output = [];
  let subtitleIndex = 1;
  let currentStart = json.results.items[0].start_time;
  let formattedStart;
  let formattedEnd;
  let nextLine = '';

  async.eachOf(json.results.items, function (item, index) {
    const row = {};
    if (item.type === 'punctuation') {
      nextLine = nextLine.slice(0, -1); //Remove the space before punctuation
      nextLine += item.alternatives[0].content;
      formattedStart = secondsToMinutes(currentStart);
      const currentEnd = json.results.items[index - 1].end_time;
      formattedEnd = secondsToMinutes(currentEnd);

      output.push({
        id: subtitleIndex++,
        timestamps: [formattedStart, formattedEnd],
        framestamps: [
          Math.floor(currentStart * fps),
          Math.floor(currentEnd * fps),
        ],
        content: nextLine,
      });

      nextLine = '';
      let nextItem = json.results.items[index + 1];
      if (nextItem) {
        currentStart = json.results.items[index + 1].start_time;
      }
    } else if (
      item.end_time - currentStart > 5 &&
      json.results.items[index - 1]
    ) {
      formattedStart = secondsToMinutes(currentStart);
      const currentEnd = json.results.items[index - 1].end_time;
      formattedEnd = secondsToMinutes(currentEnd);
      output.push({
        id: subtitleIndex++,
        timestamps: [formattedStart, formattedEnd],
        framestamps: [
          Math.floor(currentStart * fps),
          Math.floor(currentEnd * fps),
        ],
        content: nextLine,
      });
      nextLine = item.alternatives[0].content + ' ';
      currentStart = item.start_time;
    } else {
      nextLine += item.alternatives[0].content + ' ';
    }
  });

  formattedStart = secondsToMinutes(currentStart);
  if (
    json.results.items[json.results.items.length - 1].type !== 'punctuation'
  ) {
    formattedEnd = secondsToMinutes(
      json.results.items[json.results.items.length - 1].end_time
    );
  } else {
    formattedEnd = secondsToMinutes(
      json.results.items[json.results.items.length - 2].end_time
    );
  }

  if (nextLine) {
  }

  return output;
};

function padString(string, length) {
  return (new Array(length + 1).join('0') + string).slice(-length);
}

function secondsToMinutes(seconds) {
  let hours;
  let minutes;
  hours = Math.floor(seconds / 3600);
  seconds = seconds - hours * 3600;
  minutes = Math.floor(seconds / 60);
  seconds = (seconds - minutes * 60).toFixed(3);
  return (
    padString(hours, 2) +
    ':' +
    padString(minutes, 2) +
    ':' +
    padString(seconds, 6)
  );
}
