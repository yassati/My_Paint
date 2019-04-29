import React, { Component } from 'react';
import gomme from './img/gomme.png';
import pen from './img/pen.png';
import ruler from './img/ruler.png';
import circlev from './img/circle.png';
import circlec from './img/circle1.png';
import carrev from './img/carre1.png';
import carrec from './img/carre.png';
import save from './img/save.png';
import smiley from './img/smiley.png';
import cor from './img/cor.png';
import seau from './img/seau.png';

class Paint extends Component {
  constructor(props) {
    super(props);

    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.endPaintEvent = this.endPaintEvent.bind(this);
    this.onGomme = this.onGomme.bind(this);
    this.onGomme2 = this.onGomme2.bind(this);
    this.setColor = this.setColor.bind(this);
    this.drawLine = this.drawLine.bind(this);
    this.drawCircle = this.drawCircle.bind(this);
    this.drawCircle2 = this.drawCircle2.bind(this);
    this.drawRec = this.drawRec.bind(this);
    this.drawRec2 = this.drawRec2.bind(this);
    this.drawSmiley = this.drawSmiley.bind(this);
    this.saveImg = this.saveImg.bind(this);
    this.uploadImg = this.uploadImg.bind(this);
    this.res = this.res.bind(this);
    this.background = this.background.bind(this);

  }
  isPainting = false;
  userStrokeStyle = '#000000';
  tools = 0;
  prevPos = { offsetX: 0, offsetY: 0 };
  recPos = { offsetX: 0, offsetY: 0 };
  ctx;
  recX = 0;
  recY = 0;
  recCheck = false;

  onMouseDown({ nativeEvent }) {
    console.log('color : '+document.getElementById('color').value);
    if (this.tools === 0) {
      this.userStrokeStyle=document.getElementById('color').value;
      this.ctx.lineWidth = document.getElementById('brush-size').value;
      const { offsetX, offsetY } = nativeEvent;
      this.isPainting = true;
      this.prevPos = { offsetX, offsetY };
    } else if (this.tools === 1) {
      this.userStrokeStyle = "#FFFFFF";
      this.ctx.lineWidth = document.getElementById('brush-size').value;
      const { offsetX, offsetY } = nativeEvent;
      this.isPainting = true;
      this.prevPos = { offsetX, offsetY };
    } else if (this.tools === 2) {

      if (this.recCheck === false) {
        const { offsetX, offsetY } = nativeEvent;
        this.recPos = { offsetX, offsetY };
        const { offsetX: x, offsetY: y } = this.recPos;
        this.recCheck = true;
        this.recX = x;
        this.recY = y;


      } else {
        const { offsetX, offsetY } = nativeEvent;
        this.recPos = { offsetX, offsetY };
        const { offsetX: x, offsetY: y } = this.recPos;

        this.userStrokeStyle=document.getElementById('color').value;
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.userStrokeStyle;
        this.ctx.lineWidth = document.getElementById('brush-size').value;
        this.ctx.moveTo(this.recX,this.recY);
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
        this.recCheck = false;
      }
    }
    else if (this.tools === 3) {


      if (this.recCheck === false) {
        const { offsetX, offsetY } = nativeEvent;
        this.recPos = { offsetX, offsetY };
        const { offsetX: x, offsetY: y } = this.recPos;
        this.recCheck = true;
        this.recX = x;
        this.recY = y;


      } else {
        const { offsetX, offsetY } = nativeEvent;
        this.recPos = { offsetX, offsetY };
        const { offsetX: x, offsetY: y } = this.recPos;

        this.userStrokeStyle=document.getElementById('color').value;
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.userStrokeStyle;
        this.ctx.lineWidth = document.getElementById('brush-size').value;
        this.ctx.arc(this.recX , this.recY , Math.sqrt(Math.pow((x - this.recX) , 2) + Math.pow((y - this.recY),2)) , 0 ,2 * Math.PI);
        this.ctx.stroke();
        this.recCheck = false;
      }
    }
    else if (this.tools === 4) {


      if (this.recCheck === false) {
        const { offsetX, offsetY } = nativeEvent;
        this.recPos = { offsetX, offsetY };
        const { offsetX: x, offsetY: y } = this.recPos;
        this.recCheck = true;
        this.recX = x;
        this.recY = y;

      } else {
        const { offsetX, offsetY } = nativeEvent;
        this.recPos = { offsetX, offsetY };
        const { offsetX: x, offsetY: y } = this.recPos;

        this.userStrokeStyle=document.getElementById('color').value;
        this.ctx.beginPath();
        this.ctx.fillStyle = this.userStrokeStyle;
        this.ctx.lineWidth = document.getElementById('brush-size').value;
        this.ctx.arc(this.recX , this.recY , Math.sqrt(Math.pow((x - this.recX) , 2) + Math.pow((y - this.recY),2)) , 0 ,2 * Math.PI);
        this.ctx.fill();
        this.recCheck = false;
      }
    }
    else if (this.tools === 5) {
      if (this.recCheck === false) {
        const { offsetX, offsetY } = nativeEvent;
        this.recPos = { offsetX, offsetY };
        const { offsetX: x, offsetY: y } = this.recPos;
        this.recCheck = true;
        this.recX = x;
        this.recY = y;

      } else {
        const { offsetX, offsetY } = nativeEvent;
        this.recPos = { offsetX, offsetY };
        const { offsetX: x, offsetY: y } = this.recPos;

        this.userStrokeStyle=document.getElementById('color').value;
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.userStrokeStyle;
        this.ctx.lineWidth = document.getElementById('brush-size').value;
        this.ctx.rect(this.recX,this.recY,(x - this.recX),(y - this.recY));
        this.ctx.stroke();
        this.recCheck = false;
      }
    }
    else if (this.tools === 6) {
      if (this.recCheck === false) {
        const { offsetX, offsetY } = nativeEvent;
        this.recPos = { offsetX, offsetY };
        const { offsetX: x, offsetY: y } = this.recPos;
        this.recCheck = true;
        this.recX = x;
        this.recY = y;

      } else {
        const { offsetX, offsetY } = nativeEvent;
        this.recPos = { offsetX, offsetY };
        const { offsetX: x, offsetY: y } = this.recPos;

        this.userStrokeStyle=document.getElementById('color').value;
        this.ctx.beginPath();
        this.ctx.fillStyle = this.userStrokeStyle;
        this.ctx.lineWidth = document.getElementById('brush-size').value;
        this.ctx.rect(this.recX,this.recY,(x - this.recX),(y - this.recY));
        this.ctx.fill();
        this.recCheck = false;
      }
    }
    else if (this.tools === 7) {

        const { offsetX, offsetY } = nativeEvent;
        this.recPos = { offsetX, offsetY };
        const { offsetX: x, offsetY: y } = this.recPos;

      this.ctx.beginPath();
      this.ctx.strokeStyle = this.userStrokeStyle;
      this.ctx.arc(x, y, 50, 0, Math.PI * 2, true);
      this.ctx.moveTo((x+35), y);
      this.ctx.arc(x, y, 35, 0, Math.PI, false);
      this.ctx.moveTo((x-10), (y-10));
      this.ctx.arc((x-15), (y-10), 5, 0, Math.PI * 2, true);
      this.ctx.moveTo((x+20), (y-10));
      this.ctx.arc((x+15), (y-10), 5, 0, Math.PI * 2, true);
      this.ctx.stroke();

      }
    else if (this.tools === 9) {
      const { offsetX, offsetY } = nativeEvent;
      this.recPos = { offsetX, offsetY };
      const { offsetX: x, offsetY: y } = this.recPos;
      this.ctx.lineWidth = document.getElementById('brush-size').value;
      this.ctx.clearRect(x,y,this.ctx.lineWidth,this.ctx.lineWidth)
    }
  }

  onMouseMove({ nativeEvent }) {
    if (this.isPainting) {
      const { offsetX, offsetY } = nativeEvent;
      const offSetData = { offsetX, offsetY };
      this.paint(this.prevPos, offSetData, this.userStrokeStyle);
    }
  }

  endPaintEvent() {
    if (this.isPainting) {
      this.isPainting = false;
    }
  }

  paint(prevPos, currPos, strokeStyle) {
    const { offsetX, offsetY } = currPos;
    const { offsetX: x, offsetY: y } = prevPos;

    this.ctx.beginPath();
    this.ctx.strokeStyle = strokeStyle;
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(offsetX, offsetY);
    this.ctx.stroke();
    this.prevPos = { offsetX, offsetY };
  }

  setColor(){
     this.tools = 0;
    console.log('toto');
  }

  onGomme(){
    console.log('gomme');
    this.tools = 1 ;
  }
  drawLine(){
    this.tools = 2;
    console.log('line');

  }
  drawCircle(){
      this.tools = 3;
      console.log('circle');
  }
  drawCircle2(){
    this.tools = 4;
    console.log('circle2');
  }
  drawRec(){
    this.tools = 5;
    console.log('rec');
  }  drawRec2(){
    this.tools = 6;
    console.log('rec2');
  }
 drawSmiley(){
  this.tools = 7;
  console.log('smiley');
}
  saveImg(){
    this.tools = 8;
    console.log('save');
    const canvasSave = document.getElementById('myCanvas');
    var d = canvasSave.toDataURL('image/png').replace("image/png", "image/octet-stream");
    window.location.href = d;
  }
  onGomme2(){
    console.log('gomme');
    this.tools = 9 ;
  }

  uploadImg(){
    let img = new Image();
    img.onload = this.importImage;
    img.onerror = this.failed;
    img.src = URL.createObjectURL(this.files[0]);
  }
  importImage() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx.drawImage(this, 0,0);
  }

  failed() {
    console.error("The provided file couldn't be loaded as an Image media");
  }
  res() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "#FFFFFF";
    this.ctx.rect(0, 0, 1000,  800);
    this.ctx.fill();
  }
  background() {
    this.ctx.beginPath();
    this.ctx.fillStyle = document.getElementById('color').value;
    this.ctx.rect(0, 0, 1000,  800);
    this.ctx.fill();
  }


  componentDidMount() {
    this.canvas.width = 1000;
    this.canvas.height = 800;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.lineJoin = 'round';
    this.ctx.lineCap = 'round';

    const offSetData = this.prevPos;
    this.paint(this.prevPos, offSetData, this.userStrokeStyle);
  }

  render() {
    return (
        <div className="main">

          <div className="btns">
            <input type="color" id="color" /> <br/>
            <input type="range"  min="1" max="50" id="brush-size" /> <br/>
            <img src={pen} alt="pen"  id="btn" onClick={this.setColor} />
            <img src={seau} alt="pen"  id="btn" onClick={this.background} /> <br/>  <br/>
            <img src={gomme} alt="logo"  id="btn" onClick={this.onGomme}/>
            <img src={gomme} alt="logo"  id="btn" onClick={this.onGomme2}/> <br/>  <br/>
            <img src={cor} alt="logo"  id="btn" onClick={this.res}/> <br/>  <br/>
            <img src={ruler} alt="logo"  id="btn" onClick={this.drawLine}/> <br/>  <br/>
            <div>
              <img src={circlev} alt="logo"  id="btn" onClick={this.drawCircle}/>
              <img src={circlec} alt="logo"  id="btn" onClick={this.drawCircle2}/> <br/>  <br/>
            </div>
          <div>
            <img src={carrev} alt="logo"  id="btn" onClick={this.drawRec}/>
            <img src={carrec} alt="logo"  id="btn" onClick={this.drawRec2}/>
          </div><br/>
            <img src={smiley} alt="logo"  id="btn" onClick={this.drawSmiley}/> <br/>  <br/>
            <img src={save} alt="logo"  id="btn" onClick={this.saveImg}/>
            <div>
              {/*<button type="submit" id="up" onClick={this.background}>res</button>*/}
            <input type="file" id="upload" onClick={this.uploadImg} />
            </div>
          </div>
          {/*<input type="file" id="upload" id="btn" />*/}

      <canvas
        ref={(ref) => (this.canvas = ref)}
        style={{ background: '#FFFFFF' , border: '10px solid black' }}
        onMouseDown={this.onMouseDown}
        onMouseLeave={this.endPaintEvent}
        onMouseUp={this.endPaintEvent}
        onMouseMove={this.onMouseMove}
        id="myCanvas"
      />

        </div>
    );
  }
}

export default Paint;
