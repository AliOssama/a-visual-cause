var genderData = d3.csv("gender.csv");
var residenceData= d3.csv("residence.csv")
var mentalData= d3.csv("mental.csv")


var genderCsv = function(data){
  var width = 500;
  var height = 300;
  var barWidth = width/data.length;

  var svg = d3.select("#svg1")
              .attr("width",width/2)
              .attr("height",height)
  drawBars(data,svg,width,height,barWidth)
}

var residenceCsv = function(data){
  var width = 500;
  var height = 300;
  var barWidth = width/data.length;

  var svg = d3.select("#svg2")
              .attr("width",width/2)
              .attr("height",height)
  drawBars(data,svg,width,height,barWidth)
}

var mentalCsv = function(data){
  var width = 500;
  var height = 300;
  var barWidth = width/data.length;

  var svg = d3.select("#svg3")
              .attr("width",width/2)
              .attr("height",height)
  drawBars(data,svg,width,height,barWidth)
}

var drawBars = function(barData,svg,width,height,barWidth){

  svg.selectAll("rect")
     .data(barData)
     .enter()
     .append("rect")
     .attr("x",function(d,i)
      {
        return i * barWidth/2;
      })
    .attr("y",function(d)
    {
      return height - d.amount * 4;
    })
    .attr("width",barWidth/2)
    .attr("height",function(d)
    {
      return d.amount*4;
    })
    .attr("fill",function(d)
    {
      return d.color;
    })
    .attr("data-legend",function(d) {return d.color});


  svg.selectAll("text")
    .data(barData)
    .enter()
    .append("text")
    .text(function(d) {
      return d.amount+"%";
    })
    .attr("x", function(d,i){
       return i*barWidth/2 + (barWidth/4);
    })
    .attr("y", function(d)
    {
      return height - (d.amount*4);
    })
    .attr("fill","black")
    .attr("text-anchor","middle");

}


genderData.then(function(data)
  {
    genderCsv(data);
  },
  function(err){
    console.log(err);
  });

residenceData.then(function(data)
    {
      residenceCsv(data);
    },
    function(err){
      console.log(err);
    })

mentalData.then(function(data)
        {
          mentalCsv(data);
        },
        function(err){
          console.log(err);
        })
