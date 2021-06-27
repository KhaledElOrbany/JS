const dropArea = document.querySelector('.dropArea');

dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    document.getElementById('insiderSpan').innerHTML = 'You can drop it now :D';
    dropArea.classList.add('over');
})

dropArea.addEventListener('dragleave', (e) => {
    e.preventDefault();
    document.getElementById('insiderSpan').innerHTML = 'Drag your files here..';
    dropArea.classList.remove('over');
})

dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    let file = e.dataTransfer.files[0];
    let fileReader = new FileReader();
    fileReader.onload = (result) => {
        let img = "<img id='droppedImg' src='" + result.target.result + "' />";
        dropArea.innerHTML = img;
    }
    fileReader.readAsDataURL(file);
    document.getElementById('removeImgDiv').style.visibility = 'unset';
})

function RemoveImg() {
    dropArea.innerHTML = '<span id="insiderSpan">Drag your files here..</span>';
    dropArea.classList.remove('over');
    document.getElementById('removeImgDiv').style.visibility = 'hidden';
}

function Uploader(file) {
    alert(file.files[0].name);
}