
let tbody = $('tbody');
let firstTen = Object.keys(data).splice(0,10);
console.log(firstTen)
let i =1
firstTen.forEach(e => {
    console.log()
    tbody.append(`<tr>
    <td>
        ${i}
    </td>
    <td>
    ${data[e].name}
    </td>
    <td>
    ₹ ${data[e].last}
    </td>
    <td>
    ₹ ${data[e].buy} / ${data[e].sell}
    </td>
    <td>
    ${data[e].volume}
    </td>
    <td>
    ${data[e].base_unit}
    </td>
    <td>
        
    </td>
</tr>`)
i++
}); 




/*
let url = 'https://api.wazirx.com/api/v2/tickers';

fetch(url,  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': 'secret',
      'Access-Control-Allow-Origin': '*'
    }
  })
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })
    */
