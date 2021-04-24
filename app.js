const bounce = document.getElementById('bounce');
const basic = document.getElementById('basic');
const pro = document.getElementById('pro');
const pros = document.getElementById('pro-2');
const bounceContainer = document.getElementById('bounce-container');
const monthValue = document.getElementById('Month');
const monthValue2 = document.getElementById('Month2');
const monthValue3 = document.getElementById('Month3');
const burger = document.getElementById('burger');
const navigation = document.getElementById('navigation')
bounceContainer.addEventListener('click', ()=>{
    if(bounceContainer.classList.contains('justify-start')){
        bounceContainer.classList.remove('justify-start');
        bounceContainer.classList.add('justify-end');
        basic.innerText = '$199';
        pro.innerText = '$499';
        pros.innerText = '$999';
        monthValue.innerText = '/year'
        monthValue2.innerText = '/year'
        monthValue3.innerText = '/year'

    }else{
        bounceContainer.classList.add('justify-start');
        bounceContainer.classList.remove('justify-end');
        basic.innerText = '$19';
        pro.innerText = '$29';
        pros.innerText = '$49';
        monthValue.innerText = '/month'
        monthValue2.innerText = '/month'
        monthValue3.innerText = '/month'
    }
});

burger.addEventListener('click', ()=>{
    if (navigation.classList.contains('hidden')) {
        navigation.classList.remove('hidden');
        navigation.classList.add('smallscreen');
    }else{
        navigation.classList.remove('smallscreen');
        navigation.classList.add('hidden')
    }
})