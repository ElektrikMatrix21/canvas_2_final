class data{
    constructor(){
        this.draw = null;
    }

    saveDrawing(){
        var ref = database.ref('draw');
        var data = {
            draw: this.drawing
        }
        ref.push(data);
    }
}