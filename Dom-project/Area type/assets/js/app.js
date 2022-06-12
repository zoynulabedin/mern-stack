
const areaType = document.getElementById('areaType');
const msg = document.querySelector('.msg');
const rec = document.querySelector('.rec');
const trys = document.querySelector('.try');
const squ = document.querySelector('.squ');
const cir = document.querySelector('.cir');

areaType.onchange =()=>{
    let area = areaType.value;
    if(area == 'Rectangle'){
        rec.style.display = 'block';
      
    }else{
        rec.style.display = '';
    }
    if(area == 'tryangle'){
        trys.style.display = 'block';
    }else{
        trys.style.display = '';
    }
    if(area == 'square'){
        squ.style.display = 'block';
    }else{
        squ.style.display = '';
    }
    if(area == 'circle'){
        cir.style.display = 'block';
    }else{
        cir.style.display = '';
    }
}