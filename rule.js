var system = require("system");
var webPage = require("webpage");
var page = webPage.create();
var params = system.args;

page.pageSize = {
    format: "A4",
    orientation: "portrait",
    margin: {
        top: "1cm",
        left: "1.6cm",
        right: "1.6cm",
        bottom: "1cm"
    }
};

function html_pdf(){
      page.render(params[1] + '.pdf', {format: 'pdf', quality: '100'});
    phantom.exit();
}

//格式化时间，如：2015-05-22
function fmtY2D(date) {
    var fmt = "yyyy-MM-dd";
    if (tool.isEmpty(date)) {
        return "";
    }
    return DateFormat.format.date(date, fmt);
};




page.onResourceRequested = function (requestData, networkRequest) {
    console.log('Request (#' + requestData.id + '): ' + JSON.stringify(requestData));
};




page.open('https://www.ssqsign.com/openpage/ViewContract.page?mid=14078f42fc864f66ba5aef80f6868319&sign=U2yqgOrQCou69GoLYgZ%2FJQGP8vJtW9v6MtfF5Cw2SdUN%2FBh4nBOE2I2bBFEMJJed1lcVjfh9iEn1KgR8ofn2g5lCaDEVNwMGuougeHA4%2FqlTofxJy1XVTL3IEN3nDdVX0NeJ2G4QHgu7zsAqw208gNw29UjCkkM4WF447RDa70Q%3D&fsdid=1478867495952X26N2&docid=1478867495952KKP21', function start(status) 
{
    console.log('====111==')
    if (status == 'success') {
        console.log('====222==')
        page.includeJs('http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js', function () 
        {
            page.evaluate(function() {
                 console.error('====3333==')
                 console.info('====3333==')
             });

            
        //   $("img").each(function(){
        //       console.error('=====  '+this.src);

        // });  
            });
    }
// setTimeout(function () {
//                    html_pdf();
//                 }, 1000*15);

phantom.exit();
});





