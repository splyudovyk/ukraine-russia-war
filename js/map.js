$(document).ready(function () {
    east = ['#Kyiv',
    '#SevastopolCity',
    '#Crimea',
    '#CherkasycityCherkasy',
    '#Chernivtsi'
    ]
    west = [
    '#KyivCity',
    '#Dnipropetrovsk',
    '#Donetsk',
    '#Ivano-Frankivsk',
    '#Kharkiv',
    '#Kherson .path',
    '#Khmelnytskyi .path',
    '#Kirovohrad',
    '#Luhansk',
    '#Lviv',
    '#Mykolaiv',
    '#Odessa',
    '#Poltava',
    '#Rivne',
    '#Sumu',
    '#Chernihiv',
    '#Ternopil',
    '#Zakarpattia',
    '#Vinnytsia',
    '#Volyn',
    '#Zaporizhia',
    '#Zhytomyr']

    highlightOnHover('.east', '#13d8c8', '#0da79a');
    highlightOnHover('.west', '#0a9875', '#00674d');

    highlightOnHover('.lessthan5', '#33d4d4', '#17b4b4');
    highlightOnHover('.fiveto24', '#09a7bf', '#057e91');
    highlightOnHover('.twentyfiveto74', '#3268dc', '#2d55ab');
    highlightOnHover('.morethan75', '#0d3fac', '#062f86');

    highlightOnHover('.none', '#ffffff', '#dadada');
    highlightOnHover('.protests', '#17a2de', '#0077ab');
    highlightOnHover('.occupation', '#10c854', '#01a03b');
    highlightOnHover('.insurgency', '#07ae87', '#008566');
    highlightOnHover('.annexed', '#174dbf', '#062f86');


    function highlightOnHover(district, colora, colorb) {
        $(district).hover(() => {
            $(district).css('fill', colora);
            
        }, () => {
            $(district).css('fill', colorb);
        });
    }

    mapHoverText('.east', '#easthovertext');
    mapHoverText('.west', '#westhovertext');

    mapHoverText('.lessthan5', '#hovertextlessthan5');
    mapHoverText('.fiveto24', '#hovertext5to24');
    mapHoverText('.twentyfiveto74', '#hovertext25to74');
    mapHoverText('.morethan75', '#hovertextmorethan75');

    mapHoverText('.none', '#hovertextnone');
    mapHoverText('.protests', '#hovertextprotests');
    mapHoverText('.occupation', '#hovertextoccupation');
    mapHoverText('.insurgency', '#hovertextinsurgency');
    mapHoverText('.annexed', '#hovertextannexed');

    
    /*Instructions for choice selection appear when user hovers over background image choice list*/
    function mapHoverText(section, hovertext) {
        $(section).hover(() => {
            //Instructions become visible
            $(hovertext).css('display', 'block');
    
            //Instructions follow cursor with an offset
            $(document).mousemove(function (e) {
                $(hovertext).offset({ top: e.pageY + 12, left: e.pageX + 15 });
            });
        }, () => {
            //Instructions disappear when user stops hovering over 
            $(hovertext).css("display", "none");
        });
    }
    
})