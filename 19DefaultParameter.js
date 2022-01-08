function drawChart(width = 200, height = 400) {         // you can set default parameter by using =  등호를 이용해서 기본 매개변수를 설정할 수 있습니다.
    console.log(`Draw chart its size ${width} X ${height}`);
}

drawChart(100);
drawChart();

function drawChart2(width = 200, height = width / 2) {
    console.log(`Draw chart its size ${width} X ${height}`);
}

drawChart2(300);
drawChart2();