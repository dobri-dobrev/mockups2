$(function(){
	var ser1 = [];
	ser1.push([0, 675]);
	ser1.push([1, 660]);
	ser1.push([2, 650]);
	ser1.push([3, 665]);
	ser1.push([4, 700]);
	ser1.push([5, 705]);
	ser1.push([6, 640]);
	ser1.push([7, 660]);
	ser1.push([8, 690]);
	ser1.push([9, 700]);
	ser1.push([10, 710]);
	ser1.push([11, 715]);
	var ser2 = [];
	ser2.push([0, 675]);
	ser2.push([11, 700]);

	
	data = [ser1,ser2];

	var ser3 = [];
	ser3.push([0, 70]);
	ser3.push([1, 67]);
	ser3.push([2, 65]);
	ser3.push([3, 55]);
	ser3.push([4, 58]);
	ser3.push([5, 62]);
	ser3.push([6, 64]);
	ser3.push([7, 60]);
	ser3.push([8, 58]);
	ser3.push([9, 55]);
	ser3.push([10, 51]);
	ser3.push([11, 44]);
	var ser4 = [];
	ser4.push([0, 65]);
	ser4.push([11, 50]);


	data2 = [ser3,ser4];

	$.plot($("#retention_chart"), data2, { 
		yaxis: { 
			min: 40, 
			max: 75,
			axisLabel: 'Hours',
			zoomRange: [1, 10]
		},
		xaxis: {
		    ticks: [[0,'Jan'],[1,'Feb'],[2,'Mar'],[3,'Apr'],[4,'May'],[5,'Jun'],[6,'Jul'],[7,'Aug'],[8,'Sep'],[9,'Oct'],[10,'Nov'],[11,'Dec']],
		    show: true,
		    axisLabel: 'Time',
		    position: 'bottom',
		    zoomRange: [1, 10]
		  },
		zoom: {
	            interactive: true
        },
        pan: {
            interactive: true
        }
	 });

	
	$.plot($("#placeholder"), data, { 
		yaxis: { 
			min: 600, 
			max: 725,
			axisLabel: 'Hours',
			zoomRange: [1, 10]
		},
		xaxis: {
		    ticks: [[0,'Jan'],[1,'Feb'],[2,'Mar'],[3,'Apr'],[4,'May'],[5,'Jun'],[6,'Jul'],[7,'Aug'],[8,'Sep'],[9,'Oct'],[10,'Nov'],[11,'Dec']],
		    show: true,
		    axisLabel: 'Time',
		    position: 'bottom',
		    zoomRange: [1, 10]
		  },
		zoom: {
	            interactive: true
        },
        pan: {
            interactive: true
        }
	 });
});