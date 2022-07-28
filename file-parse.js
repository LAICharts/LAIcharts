var ExcelToJSON = function () {
  this.parseExcel = function (file) {
    var reader = new FileReader();

    reader.onload = function (e) {
      var data = e.target.result;
      var workbook = XLSX.read(data, {
        type: "binary",
      });
      workbook.SheetNames.forEach(function (sheetName) {
        // Here is your object
        const XL_row_object = XLSX.utils.sheet_to_row_object_array(
          workbook.Sheets[sheetName], {header: 1}
        );
        const json_object = JSON.stringify(XL_row_object);
        json_object1 = [];
        let XL_row_object_Json = XL_row_object.map((obj, index) => {
          if (index > 1) {
            const item = {
              [XL_row_object[1][0]]: obj[0],
              [XL_row_object[1][1]]: obj[1],
              [XL_row_object[1][2]]: obj[2],
              [XL_row_object[1][3]]: obj[3],
              [XL_row_object[1][4]]: obj[4],
              [XL_row_object[1][5]]: obj[5],
              [XL_row_object[1][6]]: obj[6],
              [XL_row_object[1][7]]: obj[7],
              [XL_row_object[1][8]]: obj[8],
              [XL_row_object[1][9]]: obj[9],
              [XL_row_object[1][10]]: obj[10],
              [XL_row_object[1][11]]: obj[11],
              [XL_row_object[1][12]]: obj[12],
            };
            return item;
          }
        });
        XL_row_object_Json = XL_row_object_Json.filter(obj => obj)
        const xValues = XL_row_object_Json.map((obj) => obj.DateTime);
        const ETc_mm = XL_row_object_Json.map((obj) => Number(obj.ETc_mm));
        const ETr_mm = XL_row_object_Json.map((obj) => Number(obj.ETr_mm));
        const VPDmax = XL_row_object_Json.map((obj) => Number(obj.VPDmax));
        const VPDMovAvg = calculateMovingAverage(VPDmax)
        jQuery("#xlx_json").val(json_object);
        drawChart1(xValues, [ETr_mm, ETc_mm, VPDMovAvg]);

        
        const Tmax_F = XL_row_object_Json.map((obj) => Number(obj.Tmax_F));
        const Tmin_F = XL_row_object_Json.map((obj) => Number(obj.Tmin_F));
        const GDD_cum = XL_row_object_Json.map((obj) => Number(obj.GDD_cum));
        drawChart2(xValues, [Tmax_F, Tmin_F, GDD_cum]);

        
        const Precip_mm = XL_row_object_Json.map((obj) => Number(obj.Precip_mm));
        const Precip_Cum = XL_row_object_Json.map((obj) => Number(obj["Precip Cum"]));
        const Etc_cum = XL_row_object_Json.map((obj) => Number(obj["Etc cum"]));
        const Water_Required = XL_row_object_Json.map((obj) => Number(obj.Water_Required));
        drawChart3(xValues, [Precip_mm, Precip_Cum, Etc_cum, Water_Required]);

        
        const Kc = XL_row_object_Json.map((obj) => Number(obj.Kc));
        const KcMovAvg = calculateMovingAverage(Kc);
        drawChart4(xValues, [Kc, KcMovAvg]);
      });
    };

    reader.onerror = function (ex) {
      console.log(ex);
    };

    reader.readAsBinaryString(file);
  };
};

function handleFileSelect(evt) {
  $('canvas').remove();
  $('body').append(`
  <canvas id="chart1" style="width: 100%;"></canvas>
  <canvas id="chart2" style="width: 100%;"></canvas>
  <canvas id="chart3" style="width: 100%;"></canvas>
  <canvas id="chart4" style="width: 100%;"></canvas>`)
  var files = evt.target.files; // FileList object
  var xl2json = new ExcelToJSON();
  xl2json.parseExcel(files[0]);
}

function calculateMovingAverage(valuesList) {
  movingAverage = [];  
  let temp = [null, null, null, null, null, null];
  for(i=0; i< valuesList.length - 6; i++){
    dataPoints = valuesList.slice(i, 7 + i);
    movingAverage.push(dataPoints.reduce((total, num) => total + Number(num))/7);    
  }
  return temp.concat(movingAverage);
}
