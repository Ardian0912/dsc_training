$('#banner').text("Hello, JQuery!");

function gantikalimat(){
    var nama = $('#nama').val();
    $('#banner').text('Hallo, '+nama+'!');

}

function jumlah(){
    // alert("oke");
    var angka1 = parseInt($('#angka1').val());
    var angka2 = parseInt($('#angka2').val());

    var hasil = angka1 + angka2;

    $('#hasil').val(hasil);
}