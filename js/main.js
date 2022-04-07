$(document).ready(function(){
    console.log("Page is ready");
});



// $("#id").click(function () {
//     $("<tr>").hide();
// });

// $("#show").click(function () {
//     $("p").show();
// });

$('#addSkill').on('click', function () {
    let input = $('.input').val() 
    console.log(input);
    let newRowElement =`
        <tr>
            <td><button type="button" class="red">X</button>${input}</td>
        </tr>
    `;
    $('tbody').append(newRowElement);
});






// $('#id').on('click', 'button' function() {
//     $(this).closest('tr').fadeOut(1000), function() {
//         $(this).remove();
//     };
// });


$("tr").hide();

// With the element initially shown, we can hide it slowly:
// $("#id").click(function () {
//     $(this).hide("slow", function () {
//         alert("Skill Removed");
//     });
// });

// $('#addHome').on('click', function () {
//     if (!newHomes.length) return;
//     const home = newHomes.pop();


$('#classy tbody').on('click', 'button', function () {
    console.log("Clicked");
    $(this).closest('tr').fadeOut(1000, function () {
        $(this).remove();
    });
});
