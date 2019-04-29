import React, { Component } from "react";

class Save extends Component{
    saveCanvas() {
        const canvasSave = document.getElementById('myCanvas');
        var d = canvasSave.toDataURL('image/png').replace("image/png","image/octet-stream");
        window.location.href=d;

        // const w = window.open('about:blank', 'image from canvas');
        // w.document.write("<img src='"+d+"' alt='from canvas'/>");
        console.log('Saved!');
    }

    render(){
        return(
            <div>
                <button onClick={ this.saveCanvas }>Save</button>
            </div>
        )
    }
}

export default Save;