const date = (date) => {
    let day = new Date(date);
    let mm = day.getMonth() + 1;
    if (mm < 10) {
      mm = "0" + mm;
    }
    let dd = day.getDate();
    if (dd < 10) {
      dd = "0" + dd;
    }
    let yyyy = day.getFullYear();
  
    return mm + "/" + dd + "/" + yyyy;
  };

  export { date };