$(function(){
    /*formatDate(date){
      var date = new Date(date);
      var dateFormated = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
      return dateFormated;
  }*/
    function updateClock() {
        var date = new Date();
        var dateFormated = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
        $("#dateIncidencia").val(dateFormated);
        $("#datePerson").val(dateFormated);
    }
    setInterval(updateClock, 1000);
});
