$(document).ready(function() {
    const sortField = $("#sort-field");
    const cropField = $("#crop-field");
    const costField = $("#cost-field");
    const areaField = $("#area-field");
    const result = $("#result");

    function validateData() {
        let isValidate = true;
        $(".error").remove();
        $.each($(".field"), function() {    
            if($(this).val() === "") {
                $(this).after("<div class='error'>Заполните поле! Используйте только цифры.</div>");
                isValidate = false;
            } else {
                $("error").remove();
            }
        });
        return isValidate;
    }

    function calculateProfit() {   
        const isValidate = validateData(); 
        if(!isValidate) {
            result.text("-");
            return false;
        }
        const total = Math.floor(0.1*cropField.val()*areaField.val()*sortField.val() - costField.val()*areaField.val());
        result.text(total);
    }


    sortField.change(calculateProfit);
    cropField.keyup(calculateProfit);
    costField.keyup(calculateProfit);
    areaField.keyup(calculateProfit);

    $('.slider').slick({
        autoplay: true,
        prevArrow: null,
        nextArrow: null,
        autoplaySpeed: 5000,
    });
    
});