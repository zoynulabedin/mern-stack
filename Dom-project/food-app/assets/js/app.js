const foodForm = document.getElementById('foodForm');
const food = foodForm.querySelectorAll('input[name="food"]');

const output = document.getElementById('output');

food.forEach( item => {
    item.onchange = () => {
        let allFoods = foodForm.querySelectorAll('input[name="food"]:checked');
        
        let selectedFoods = [];
        let totalPrice = 0;
        allFoods.forEach(foods => {
            selectedFoods.push(foods.value);
            totalPrice += Number(foods.getAttribute('price'));
        });

        output.innerHTML = `You have selected ${selectedFoods.join(', ')} food(s) .<br> total price: ${totalPrice} TK .<br><button
        id="orderNow"
        type="submit"
        class="btn btn-primary w-100 my-3"
      >
        Order Now
      </button>`;
    }
});
