let year_hand = document.getElementById('year');
let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let msecond1 = document.getElementById('msecond1');
let msecond2 = document.getElementById('msecond2');
let msecond3 = document.getElementById('msecond3');

let rev_hour = document.getElementById('rev_hour');
let rev_minute = document.getElementById('rev_minute');
let rev_second = document.getElementById('rev_second');

let month_span = document.getElementById('month');
let date_span = document.getElementById('date');

let hour_span = document.getElementById('digital_hour');
let minute_span = document.getElementById('digital_minute');
let second_span = document.getElementById('digital_second');
let msecond_span = document.getElementById('digital_msecond');

let utc_hour_span = document.getElementById('utc_digital_hour');
let utc_minute_span = document.getElementById('utc_digital_minute');
let utc_second_span = document.getElementById('utc_digital_second');
let utc_msecond_span = document.getElementById('utc_digital_msecond');
let utc_month_span = document.getElementById('utc_month');
let utc_date_span = document.getElementById('utc_date');

let ad_month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

function days_of_year(date) {
    return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / (24 * 60 * 60 * 1000);
}

function displayTime() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let mmss = date.getMilliseconds();
    let year = date.getFullYear();
    let month = date.getMonth();
    let ddate = date.getDate();
    let yearly_days = days_of_year(date);
    let is_leap_year = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);

    let utc_hh = date.getUTCHours();
    let utc_mm = date.getUTCMinutes();
    let utc_ss = date.getUTCSeconds();
    let utc_mmss = date.getUTCMilliseconds();
    let utc_month = date.getUTCMonth();
    let utc_ddate = date.getUTCDate();

    month_span.innerHTML = ad_month[month];
    date_span.innerHTML = ddate;

    hour_span.innerHTML = hh.toString().padStart(2, "0");
    minute_span.innerHTML = mm.toString().padStart(2, "0");
    second_span.innerHTML = ss.toString().padStart(2, "0");
    msecond_span.innerHTML = mmss.toString().padStart(3, "0");

    utc_hour_span.innerHTML = utc_hh.toString().padStart(2, "0");
    utc_minute_span.innerHTML = utc_mm.toString().padStart(2, "0");
    utc_second_span.innerHTML = utc_ss.toString().padStart(2, "0");
    utc_msecond_span.innerHTML = utc_mmss.toString().padStart(3, "0");
    utc_month_span.innerHTML = ad_month[utc_month];
    utc_date_span.innerHTML = utc_ddate.toString();

    // let h_rotation = 30 * hh + mm / 2 + ss / 120;
    let h_rotation = 30 * hh + mm / 2 + ss / 120 + mmss / 120000;
    // let m_rotation = 6 * mm + ss / 10;
    let m_rotation = 6 * mm + ss / 10 + mmss / 10000;
    // let s_rotation = 6 * ss;
    let s_rotation = 6 * ss + (mmss * 3) / 500;

    let ms_rotation = (mmss * 9) / 25;

    let y_rotation = is_leap_year ? yearly_days / 366 * 360 : yearly_days / 365 * 360;

    year_hand.style.transform = `rotate(${y_rotation}deg)`;
    hour.style.transform = `rotate(${h_rotation}deg)`;
    rev_hour.style.transform = `rotate(${h_rotation + 180}deg)`;
    minute.style.transform = `rotate(${m_rotation}deg)`;
    rev_minute.style.transform = `rotate(${m_rotation + 180}deg)`;
    second.style.transform = `rotate(${s_rotation}deg)`;
    rev_second.style.transform = `rotate(${s_rotation + 180}deg)`;
    msecond1.style.transform = `rotate(${ms_rotation}deg)`;
    msecond2.style.transform = `rotate(${ms_rotation + 120}deg)`;
    msecond3.style.transform = `rotate(${ms_rotation + 240}deg)`;
}

setInterval(displayTime, 25);