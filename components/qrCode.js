import QRcode from 'qrcode'
const qrCode = ()=>{
const canvas = document.getElementById("canvas");
if (canvas){
    QRcode.toCanvas(canvas, 'sample text', function (error) {
        if (error) console.error(error)
        console.log('success!');
      })}
      else{
          console.log("error")
      }

return(
    <canvas id="canvas"></canvas>
)
}

export default qrCode;
