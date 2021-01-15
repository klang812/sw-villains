$(document).ready(function() {
  $("form#questions").submit(function(event) {
    const heroes = $("select#heroes").val();
    const phrase = $("select#phrase").val();

    let vader = ();
    //let maul = ('2' + '2' || '2' + '1' || '2' + '3')
    //let kylo = ('3' + '3' || '3' + '2' || '3' + '1')

    if (heroes === '1') {
      villain = vader;
    }
    $("#vader").text(vader);
    $("#resultVader").show();
    
    // if (heroes === '2') {
    //   villain = maul;
    // }
    // $("#maul").text(maul);
    // $("#resultMaul").show();
    
    // if (heroes === '3') {
    //   villain = kylo;
    // }
    // $("#kylo").text(kylo);
    // $("#resultKylo").show();
    
    event.preventDefault();
    });
  });