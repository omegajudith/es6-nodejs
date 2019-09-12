

const displayDate = () => {
  let today = new Date();
  console.log(today);
}
// export  {displayDate};

// let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// let dateTime = date+' '+time;
module.exports = displayDate;

