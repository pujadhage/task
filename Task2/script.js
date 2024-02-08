
var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik = "a0d7195930ad9354ba708c6f17ba6146" 
function convertion (val)
{
    return(val - 273).toFixed(3)
}
btn.addEventListener('click',function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())
    .then(data=>
        {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var wndspeed = data['wind']['speed']

            city.innerHTML='weather of <span>${nameval}<span>'
            temp.innerHTML='temperature: <span>${convertion(tempature)}c</span>'
            description.innerHTML = 'sky conditions: <span>${discrip}<span>'
            wind.innerHTML = 'wind speed: <span>${wndspeed} km/h<span>'
        })
        .catch(err=>alert('you entered wrong city name'))
})