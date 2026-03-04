const fs = require("fs");
const { parse } = require("path");

// ============================================================
// Function 1: getShiftDuration(startTime, endTime)
// startTime: (typeof string) formatted as hh:mm:ss am or hh:mm:ss pm
// endTime: (typeof string) formatted as hh:mm:ss am or hh:mm:ss pm
// Returns: string formatted as h:mm:ss
// ============================================================
function getShiftDuration(startTime, endTime) {
    let s=parseTimeToSeconds(startTime);
    let e=parseTimeToSeconds(endTime);
    let d=e-s;
    let h=Math.floor(d/3600)
    d-=(h*3600);
    let m=Math.floor(d/60);
    if(m===0){
        m="00";
    }
    d-=(m*60);
    let sec=d;
    if(sec===0){
        sec="00";
    }
    return `${h}:${m}:${sec}`;

}
function parseTimeToSeconds(timeStr) {
    const [clock, suffix] = timeStr.trim().split(" ");
    let [hour, minute, second] = clock.split(":").map(Number);

    if (suffix.toLowerCase() === "pm" && hour !== 12) hour += 12;
    if (suffix.toLowerCase() === "am" && hour === 12) hour = 0;

    return (hour * 3600) + (minute * 60) + second;
}
function changeTosec(timeStr) {
    let [hour, minute, second] = timeStr.split(":").map(Number);
    return (hour * 3600) + (minute * 60) + second;
}
function returnToFormat(d){
   let h=Math.floor(d/3600)
    d-=(h*3600);
    let m=Math.floor(d/60);
    if(m===0){
        m="00";
    }
    d-=(m*60);
    let sec=d;
    if(sec===0){
        sec="00";
    }
    return `${h}:${m}:${sec}`;
}
// ============================================================
// Function 2: getIdleTime(startTime, endTime)
// startTime: (typeof string) formatted as hh:mm:ss am or hh:mm:ss pm
// endTime: (typeof string) formatted as hh:mm:ss am or hh:mm:ss pm
// Returns: string formatted as h:mm:ss
// ============================================================
function getIdleTime(startTime, endTime) {
    let sb=parseTimeToSeconds("8:00:00 am");
    let se=parseTimeToSeconds("10:00:00 pm");
    let s=parseTimeToSeconds(startTime);
    let e=parseTimeToSeconds(endTime);
    let idle=0;
    if(s<sb){
        idle=sb-s;
    }
    if(e>se){
        idle+=(e-se);
    }
    return returnToFormat(idle);
}

// ============================================================
// Function 3: getActiveTime(shiftDuration, idleTime)
// shiftDuration: (typeof string) formatted as h:mm:ss
// idleTime: (typeof string) formatted as h:mm:ss
// Returns: string formatted as h:mm:ss
// ============================================================
function getActiveTime(shiftDuration, idleTime) {
    let shift=changeTosec(shiftDuration);
    let idle=changeTosec(idleTime);
    let d=shift-idle;
    return returnToFormat(d);
}

// ============================================================
// Function 4: metQuota(date, activeTime)
// date: (typeof string) formatted as yyyy-mm-dd
// activeTime: (typeof string) formatted as h:mm:ss
// Returns: boolean
// ============================================================
function metQuota(date, activeTime) {
    let d=date.trim();
    [year,month,day]=d.split("-").map(Number);
    let s;
    if(year==2025 && month==4 && day>=10 && day<=30){
         s=6*3600;
    }else{
         s=(8*3600)+(24*60);
    }
    let t=changeTosec(activeTime);
    if(t>=s){
        return true;
    }else{
        return false;
    }
}

// ============================================================
// Function 5: addShiftRecord(textFile, shiftObj)
// textFile: (typeof string) path to shifts text file
// shiftObj: (typeof object) has driverID, driverName, date, startTime, endTime
// Returns: object with 10 properties or empty object {}
// ============================================================
function addShiftRecord(textFile, shiftObj) {
    // TODO: Implement this function
}

// ============================================================
// Function 6: setBonus(textFile, driverID, date, newValue)
// textFile: (typeof string) path to shifts text file
// driverID: (typeof string)
// date: (typeof string) formatted as yyyy-mm-dd
// newValue: (typeof boolean)
// Returns: nothing (void)
// ============================================================
function setBonus(textFile, driverID, date, newValue) {
    // TODO: Implement this function
}

// ============================================================
// Function 7: countBonusPerMonth(textFile, driverID, month)
// textFile: (typeof string) path to shifts text file
// driverID: (typeof string)
// month: (typeof string) formatted as mm or m
// Returns: number (-1 if driverID not found)
// ============================================================
function countBonusPerMonth(textFile, driverID, month) {
    // TODO: Implement this function
}

// ============================================================
// Function 8: getTotalActiveHoursPerMonth(textFile, driverID, month)
// textFile: (typeof string) path to shifts text file
// driverID: (typeof string)
// month: (typeof number)
// Returns: string formatted as hhh:mm:ss
// ============================================================
function getTotalActiveHoursPerMonth(textFile, driverID, month) {
    // TODO: Implement this function
}

// ============================================================
// Function 9: getRequiredHoursPerMonth(textFile, rateFile, bonusCount, driverID, month)
// textFile: (typeof string) path to shifts text file
// rateFile: (typeof string) path to driver rates text file
// bonusCount: (typeof number) total bonuses for given driver per month
// driverID: (typeof string)
// month: (typeof number)
// Returns: string formatted as hhh:mm:ss
// ============================================================
function getRequiredHoursPerMonth(textFile, rateFile, bonusCount, driverID, month) {
    // TODO: Implement this function
}

// ============================================================
// Function 10: getNetPay(driverID, actualHours, requiredHours, rateFile)
// driverID: (typeof string)
// actualHours: (typeof string) formatted as hhh:mm:ss
// requiredHours: (typeof string) formatted as hhh:mm:ss
// rateFile: (typeof string) path to driver rates text file
// Returns: integer (net pay)
// ============================================================
function getNetPay(driverID, actualHours, requiredHours, rateFile) {
    // TODO: Implement this function
}

module.exports = {
    getShiftDuration,
    getIdleTime,
    getActiveTime,
    metQuota,
    addShiftRecord,
    setBonus,
    countBonusPerMonth,
    getTotalActiveHoursPerMonth,
    getRequiredHoursPerMonth,
    getNetPay
};
