$(()=>{
    $('#city-dropdown').on('change', (e)=>{
        getDealer(e.target.value);
    })

    $('#test-form').on('submit', (e)=>{
        e.preventDefault();
        saveTest()
    })
})

async function getDealer(cityName){
    let apiUrl = baseUrl + 'api/getDealer?city='+cityName;
    let options = {
        method: 'GET'
    }

    let resp = await fetch(apiUrl, options);
    resp = await resp.json();
    console.log(resp, 'resp')
    if(resp.status == 200){
        let temp = '<option value="">Select Dealer</option>';
        for(let item of resp.data){
            temp += `<option value="${item._id}">${item.name}</option>`;
        }
        $('#dealer-dropdown').html(temp);
    }else{
        let temp = '<option value="">No Dealers</option>';
        $('#dealer-dropdown').html(temp);
    }
}

async function saveTest(){
    let dataArr = $('#test-form').serializeArray();
    
    let data = {};
    for(let key of dataArr){
        data[key.name] = key.value;
    }
    console.log(data, 'data')
    let apiUrl = baseUrl + 'api/saveRide';
    let options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    let response = await fetch(apiUrl, options);
    response = await response.json();
    console.log(response, 'response');
    if(response.status == 200){
        alert('Enquiry Submitted')
        $('#test-form').trigger('reset');
    }else{
        alert('Some Error Test Ride Not Submitted')
    }
}