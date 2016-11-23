/**
 * Created by Zach on 10/4/16.
 */

$("document").ready(function(){

    $(".wordsInNavigation").hide();


    $(".individualNavigation").mouseenter(function () {



        $element = $(this).find('h3');

        length = $element.innerWidth() + 5;

        $(this).animate({
            width: '+=' + length.toString() + "px",
            marginLeft: '-=' + length.toString() + "px",
            opacity: 1
        });

        $(this).promise().done(function () {
            $(this).find('h3').fadeIn();
        })


    });

    $(".individualNavigation").mouseleave(function () {

        $(this).promise().done(function () {
            $(this).find('h3').fadeOut();
        })

        $(this).animate({
            width: '-=' + length.toString() + "px",
            marginLeft: '+=' + length.toString() + "px",
            opacity: 0.5
        });


    });
});