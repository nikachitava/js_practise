const day_output = document.getElementById('outpu')
const day_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

function get_day(clicked_id) {
    console.log('clicked on: ' + day_week[clicked_id-1])
    day_output.innerHTML = day_week[clicked_id-1]
}