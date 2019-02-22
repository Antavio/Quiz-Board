function addition(q1,q2,q3,q4){
  return q1+q2+q3+q4;
}
$(document).ready(function(){
  $(".question-header").click(function(){
    $(".multi-choices").slideToggle("slow");
  });
  $("#formid").submit(function(event){
    event.preventDefault();
    var q1 = parseInt($("input:radio[name=question-one]:checked").val());
    var q2 = parseInt($("input:radio[name=question-two]:checked").val());
    var q3 = parseInt($("input:radio[name=question-three]:checked").val());
    var q4 = parseInt($("input:radio[name=question-four]:checked").val());

    var final = addition(q1,q2,q3,q4);
    var percent = (final/60)*100;
     $("#results").text("You scored " + percent + "%");
    //alert("You scored " + final + "%");
    if (percent>80 && percent<=100) {
      $("#grading").text("Excellent Performance");
    } else if (percent >=50 && percent <=80) {
      $("#grading").text("Fair Result");
    } else {
      $("#grading").text("POOR! Retake Test");
    }
  });
});
