export const LIST_VIEW = 'list'
export const CHART_VIEW = 'chart'

export const padLeft = n => n < 10 ? '0' + n : n;

export const setRange = (rangeSize, rangeStartAt) => {
    const arr = [];
    for (let i = 0; i < rangeSize; i++) {
        arr[i] = rangeStartAt + i;
    }
    return arr;
}

export const cuttentTimePicker = (timeNumber, timeSelected) => timeNumber === timeSelected ? "dropdown-item active" : "dropdown-item";