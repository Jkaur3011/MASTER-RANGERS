var canvas = new fabric.Canvas("frozen_canvas");

block_x = 16;
block_y = 48;
block_object = "";
block_height = 200;
block_width = 100;

function New_image(get_image){

    fabric.Image.fromURL(get_image, function(Img){
        block_object_img = Img;

        block_object_img.scaleToWidth(block_width);
        block_object_img.scaleToHeight(block_height);
        block_object_img.set({
            top:block_y,
            left:block_x
        })
        canvas.add(block_object_img);
    })
}

window.addEventListener("keydown", key_D)

function key_D(f){
    keyPressed = f.keyCode;
    console.log(keyPressed);

    if(keyPressed == "65"){
        New_image("elsa.png");
        console.log("elsa added");
    }
}