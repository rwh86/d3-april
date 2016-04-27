var dataUrl = "https://raw.githubusercontent.com/IsaKiko/D3-visualising-data/gh-pages/code/nations.json";

d3.json(dataUrl, function(nations) {
  //console.log(nations);

  //var filtered_nations = [];
  var filtered_nations = nations.map(function(element) {return element;});

  var chart_area = d3.select("#chart_area");
  //console.log(chart_area);
  var frame = chart_area.append("svg");
  var canvas = frame.append("g");
  
  var margin = {top: 19.5, right: 19.5, bottom: 19.5, left: 39.5};
  var frame_width = 950;
  var frame_height = 350;
  var canvas_width = frame_width - margin.left - margin.right;
  var canvas_height = frame_height - margin.top - margin.bottom;

  var year_idx = parseInt(document.getElementById("year_slider").value)-1950;

  d3.select("#year_slider").on("input", function () {
    year_idx = parseInt(this.value) - 1950;
    console.log(year_idx);
    update_graph();
  });

  frame.attr("width", frame_width);
  frame.attr("height", frame_height);

  // shift the canvas and make is slightly smaller than the svg canvas.
  canvas.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  //var circle = canvas.append("circle")
  //  .attr("cx", 25)
  //  .attr("cy", 25)
  //  .attr("r", 40)
  //  .style("fill", "green")
  //  .attr("stroke-width", "2px")
  //  .attr("stroke", "black");

  //var circ = canvas.append("circle");
  //circ.attr("stroke","black");
  //circ.attr("fill","green");
  //circ.attr("r","50px");

  var xScale = d3.scale.log();
  xScale.domain([250,1e5]);
  xScale.range([0, canvas_width]);

  var yScale = d3.scale.linear();
  yScale.domain([10,85]);
  yScale.range([canvas_height,0]);

  var popScale = d3.scale.sqrt();
  popScale.domain([0,5e8]);
  //popScale.range([0,40]); // for circles
  popScale.range([0,80]); // for squares

  var regionScale = d3.scale.category20();
  regionScale.domain(["Sub-Saharan Africa", "South Asia", "Middle East & North Africa", "America", "Europe & Central Asia", "East Asia & Pacific"]);
  //regionScale.range([0,40]);

  //circ.attr("cy",xScale(nations[0].income[0]));
  //circ.attr("cx",yScale(nations[0].lifeExpectancy[0]));
  //circ.attr("cy",50);
  //circ.attr("cx",50);

  //create an x-axis
  var xAxis_generator = d3.svg.axis().orient("bottom").scale(xScale);

  canvas.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + canvas_height + ")")
    .call(xAxis_generator);

  //create an y-axis
  var yAxis_generator = d3.svg.axis().orient("left").scale(yScale);

  canvas.append("g")
    .attr("class", "y axis")
    .call(yAxis_generator);

  // checkboxes
  d3.selectAll(".region_cb").on("change", function() {
    var type = this.value;
    //console.log(type);
    if(this.checked) {
      var new_nations = nations.filter(function(element) {
        return element.region == type;
      });

      filtered_nations = filtered_nations.concat(new_nations);
      //console.log(filtered_nations);
    }
    else {
      filtered_nations = filtered_nations.filter(function(element) {
        return element.region != type;
      });
    }
    //console.log(filtered_nations);
    update_graph();
  });

  // d3 magical data binding
  var data_canvas = canvas.append("g").attr("class", "data_canvas");

  // update the bubbles when something changes
  function update_graph() {
    var magic_data_bound_object = data_canvas.selectAll(".dot")
      .data(filtered_nations, function(element){return element.name;});
    
    //magic_data_bound_object.enter()
    //  .append("circle")
    //  .attr("class", "dot")
    //  .attr("cx", function(d) {return xScale(d.income[0]);})
    //  .attr("cy", function(d) {return yScale(d.lifeExpectancy[0]);})
    //  .attr("r", function(d) {return popScale(d.population[0]);})
    //  .attr("id", function(d) {return d.name;})
    //  .attr("fill", function(d) {return regionScale(d.region)});
    magic_data_bound_object.enter()
      .append("rect")
      .attr("class", "dot")
      .attr("x", function(d) {return xScale(d.income[0]);})
      .attr("y", function(d) {return yScale(d.lifeExpectancy[0]);})
      .attr("fill", function(d) {return regionScale(d.region)})
      .attr("width", function(d) {return popScale(d.population[0]);})
      .attr("height", function(d) {return popScale(d.population[0]);});

    magic_data_bound_object.exit().remove();

    //magic_data_bound_object.transition().ease("linear").duration(200)
    //  .attr("cx", function(d) {return xScale(d.income[year_idx]);})
    //  .attr("cy", function(d) {return yScale(d.lifeExpectancy[year_idx]);})
    //  .attr("r", function(d) {return popScale(d.population[year_idx]);})
    magic_data_bound_object.transition().ease("linear").duration(200)
      .attr("x", function(d) {return xScale(d.income[year_idx]);})
      .attr("y", function(d) {return yScale(d.lifeExpectancy[year_idx]);})
      .attr("height", function(d) {return popScale(d.population[year_idx]);})
      .attr("width", function(d) {return popScale(d.population[year_idx]);});
  }

  //run once on page load
  update_graph();
});
