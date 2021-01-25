document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("toggle-price").addEventListener("change", function(event){

    const isMonthly = event.currentTarget.checked;
    const years = document.getElementsByClassName("year");
    const months = document.getElementsByClassName("month");
      
    if(isMonthly){
        for (month of months) {
          month.style.display = 'block';
        }
        for (year of years) {
          year.style.display = 'none';
        }
    } else{
        for (month of months) {
            month.style.display = 'none';
        }
        for (year of years) {
            year.style.display = 'block';
        }
    }
    });
});