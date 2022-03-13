

const viewPostCode = () => {
  const search = document.getElementById('search');
  const searchValue=search.value;
  warning.style.display="none";
  if(searchValue==''){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: 'Please enter a post code.'
    })
  }
  url = `https://api.zippopotam.us/bd/${searchValue}`;
  
  fetch(url)
    .then(res => res.json())
    .then(data => showData(data));
   // clear
   search.value='';
   parent.innerHTML = "";
}
const parent = document.getElementById('parent');
const warning=document.getElementById('warning');
const showData = (data) => {
 
  if(Object.keys(data).length === 0){
    warning.style.display="block";
  }
  else{
    
    const div = document.createElement('div');
  div.innerHTML = `
    <div class="card mb-3 mx-auto py-2 glass text-color" style="max-width: 24rem;">
  <div class="card-header"><h2 class="text-center p-1">${data.country}<h2></div>
  <div class="card-body ps-3">
    <h5 class="card-title">District: ${data.places[0].state}</h5>
    <p class="card-text"><span class="fw-bold">State Name:</span> ${data.places[0]["place name"]}</p>
    <p class="card-text"><span class="fw-bold">Post Code:</span> ${data["post code"]}</p>
  </div>
</div>
    `;
  parent.appendChild(div);
  }
}