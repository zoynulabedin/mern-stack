const product_from = document.getElementById('product_from');
const alldatashow = document.getElementById('alldatashow');
const msg = document.querySelector('.msg');

product_from.onsubmit = (e) => {
    e.preventDefault();
    const form_data = new FormData(e.target);
    const productData = Object.fromEntries(form_data.entries());
    const {price,image,name,quantity} = productData;
    if(!price ||!image ||!name ||!quantity){
        msg.innerHTML = setAlert('Please fill all fields', 'danger');
    }else{
        createLSData('product',productData);
        msg.innerHTML = setAlert('Product added successfully', 'success');
        product_from.reset();
        location.reload();
    }
   
}

let totalPrice = 0;
getLSData('product').forEach((item,index) => {
    const {price,image,name,quantity} = item;
    totalPrice += price * quantity;
   let output = '';
    output += `
    <tr data-product="${index+1}">
    <td>${index+1}</td>
    <td><img width="80" src="${image}" alt="" /></td>
    <td>${name}</td>
    <td>${price} BDT</td>
    <td>${quantity}</td>
    <td>${price * quantity} BDT</td>
    <td>
      <a href="#product_view" data-bs-toggle="modal"  class="btn btn-primary"
        ><i class="fas fa-eye"></i
      ></a>
      <a href="#product_update" data-bs-toggle="modal" class="btn btn-info"
        ><i class="fas fa-edit"></i
      ></a>
      <a href="#" class="btn btn-danger"
        ><i class="fas fa-trash"></i
      ></a>
    </td>
  </tr>
 
    `;
    alldatashow.innerHTML += output;
});






function ViewProduct(){
  alldatashow.onclick = (e) => {
    e.preventDefault();
  if(e.target.classList.contains('fa-eye')){
    const index = e.target.parentElement.parentElement.parentElement.getAttribute('data-product');
    const productData = getLSData('product')[index-1];
    const {price,image,name,quantity} = productData;
   let view = `
   <img width="150" class="img-responsive"
                src="${image}"
                alt=""
              />
              <div class="card-body">
                <p>Product Name: ${name}</p>
                <p>Price: ${price}</p>
                <p>Quantity: ${quantity}</p>
            </div>
   `
   document.querySelector('.pd').innerHTML = view;
  }
    
  }
}


// proudct deletes from local storage

function itemDelete(){

  alldatashow.onclick = (e) => {
    e.preventDefault();
  if(e.target.classList.contains('fa-trash')){
    const index = e.target.parentElement.parentElement.parentElement.getAttribute('data-product');
    removeLSData('product',index-1);
    location.reload();
  }
  }

}

ViewProduct();


// product update from local storage


alldatashow.addEventListener('click', (e) => {
  e.preventDefault();
  if(e.target.classList.contains('fa-edit')){
    const index = e.target.parentElement.parentElement.parentElement.getAttribute('data-product');
    console.log(index);
}});

