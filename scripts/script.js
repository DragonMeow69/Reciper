function saveFoodContentAsImage() {
  var recipeOutput = document.getElementById('recipeOutput');
  var id = Date.now()

  html2canvas(recipeOutput).then(function(canvas) {
      var imgData = canvas.toDataURL('image/png');
      var link = document.createElement('a');
      link.href = imgData;
      link.download = `recipe${id}.png`;
      link.click();
  });
}

