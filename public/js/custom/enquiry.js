$(()=>{
    getStates();

    $('#state-dropdown').on('change', (e)=>{
        console.log(e.target.value, 'value state')
        getCity(e.target.value);
    })

    $('#enquiry-form').on('submit', (e)=>{
        e.preventDefault();
        saveEnquiry()
    })
})

async function getStates(){
    let apiUrl = baseUrl + 'api/allStates';
    let options = {
        method: 'GET'
    }

    let resp = await fetch(apiUrl, options);
    resp = await resp.json();
    console.log(resp, 'resp')
    if(resp.status == 200){
        let temp = '<option value="">Select State</option>';
        for(let item of resp.data){
            temp += `<option value="${item.state}">${item.state}</option>`;
        }
        $('#state-dropdown').html(temp);
    }
}

async function getCity(stateName){
    let apiUrl = baseUrl + 'api/allCities?state='+stateName;
    let options = {
        method: 'GET'
    }

    let resp = await fetch(apiUrl, options);
    resp = await resp.json();
    console.log(resp, 'resp')
    if(resp.status == 200 && (resp.district[0].districts).length > 0){
        let temp = '<option value="">Select City</option>';
        for(let item of resp.district[0].districts){
            temp += `<option value="${item}">${item}</option>`;
        }
        $('#city-dropdown').html(temp);
    }else{
        let temp = '<option value="">No City</option>';
        $('#city-dropdown').html(temp);
    }
}

async function saveEnquiry(){
    let dataArr = $('#enquiry-form').serializeArray();
    
    let data = {};
    for(let key of dataArr){
        data[key.name] = key.value;
    }
    console.log(data, 'data')
    let apiUrl = baseUrl + 'api/saveEnquiry';
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
        $('#enquiry-form').trigger('reset');
    }else{
        alert('Some Error Enquiry Not Submitted')
    }
}