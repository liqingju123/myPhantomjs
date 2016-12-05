var page  = require('webpage').create();
var system = require('system');
var url =system.args[1];
url =url.replace(/__/g,'&');
// url ='https://www.ssqsign.com/openpage/ViewContract.page?mid=14078f42fc864f66ba5aef80f6868319&sign=U2yqgOrQCou69GoLYgZ%2FJQGP8vJtW9v6MtfF5Cw2SdUN%2FBh4nBOE2I2bBFEMJJed1lcVjfh9iEn1KgR8ofn2g5lCaDEVNwMGuougeHA4%2FqlTofxJy1XVTL3IEN3nDdVX0NeJ2G4QHgu7zsAqw208gNw29UjCkkM4WF447RDa70Q%3D&fsdid=1478867495952X26N2&docid=1478867495952KKP21';
// console.log('=====  '+url);
console.log('system.args.length=='+url);

page.onResourceRequested = function (requestData, networkRequest) {
    console.log('Request (#' + requestData.id + '): ' + JSON.stringify(requestData));
};

page.open(url, function() {
  page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js", function() {
        var images = page.evaluate(function() {
            var images = [];
            function getImgDimensions($i) {

    //         	var screenImage = $i
				// var theImage = new Image();
				// var src = screenImage.attr("src");
				// theImage.src =src;
				// console.error('==='+src)
				// theImageInfo = $(theImage).load(function(){
    //   			       var imageWidth = this.width;
    //   			       var imageHeight = this.height;
    //   			       console.error(imageHeight+'   '+imageWidth);
    //   			       return {
				// 				width:imageWidth,
				// 				height:imageHeight
    //   			       }
    //               });
                    $i.width(826)
                    $i.height(1169)

                return {
                    top :  $i.offset().top,
                    left : $i.offset().left,
                    width :826,
                    height :1169
                }
            }

            $('img').each(function() {
                var img = getImgDimensions($(this));
                images.push(img);
            });

            return images;
        });

        images.forEach(function(imageObj, index, array){
             // index 给文件命名
            page.viewportSize = { width: 826, height: 1169 };
            page.clipRect = imageObj;
            page.render('images/'+index+'.jpeg')
        });

    phantom.exit()
  });
});
