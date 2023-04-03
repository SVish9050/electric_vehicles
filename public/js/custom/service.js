let finalServiceObj = {};

$(()=>{
    $('#service-form').on('submit', (e)=>{
        e.preventDefault();
        saveService('#service-form');
    })

    $('.road-map-form').find($('#step-first')).find($('.count')).addClass('active');
    // let map = $('.road-map-form').find($('#step-first')).find($('.count')).addClass('active');
    // console.log(map, 'map');
    // let count = map.find($('.count')).addClass('active')

    $('.package-section').show();
    $('.review-section').hide();
    $('.detail-section').hide();

    $('#package-form').on('submit', (e)=>{
        e.preventDefault();
        finalServiceObj[$('select[name="customerPackage"]')[0].name] = $('select[name="customerPackage"]').val();
        console.log(finalServiceObj, 'finalObj')

        if(Object(finalServiceObj).hasOwnProperty('customerPackage') && (finalServiceObj.customerPackage != '' || null)){
            console.log(finalServiceObj.customerPackage)
            $('.road-map-form').find($('#step-first')).find($('.count')).removeClass('active');
            $('.road-map-form').find($('#step-second')).find($('.count')).addClass('active');
            $('.package-section').hide();
            $('.review-section').show();
        }else{
            console.log('no')
        }
    })

    $('#review-form').on('submit', (e)=>{
        e.preventDefault();
        finalServiceObj[$('input[name="serviceImage"]')[0].name] = $('input[name="serviceImage"]').val();
        finalServiceObj[$('textarea[name="customerRequirement"]')[0].name] = $('textarea[name="customerRequirement"]').val();

        console.log(finalServiceObj, 'finalObj')

        if(Object(finalServiceObj).hasOwnProperty('serviceImage') && Object(finalServiceObj).hasOwnProperty('customerRequirement')){
            $('.road-map-form').find($('#step-first')).find($('.count')).removeClass('active');
            $('.road-map-form').find($('#step-second')).find($('.count')).removeClass('active');
            $('.road-map-form').find($('#step-third')).find($('.count')).addClass('active');
            $('.package-section').hide();
            $('.review-section').hide();
            $('.detail-section').show();
        }else{
            console.log('No')
        }
    })

    $('#detail-form').on('submit', (e)=>{
        e.preventDefault();
        saveService('#detail-form');
    })
})

async function saveService(formName){
    let dataArr = $(`${formName}`).serializeArray();
    
    for(let key of dataArr){
        finalServiceObj[key.name] = key.value;
    }
    console.log(finalServiceObj, 'data')
    let apiUrl = baseUrl + 'api/saveService';
    let options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(finalServiceObj)
    }

    let response = await fetch(apiUrl, options);
    response = await response.json();
    console.log(response, 'response');
    if(response.status == 200){
        alert('Service Submitted')
        $(`${formName}`).trigger('reset');
        window.location.reload();
    }else{
        alert('Some Error Service Not Submitted')
    }
}