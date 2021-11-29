let DropZone = document.querySelector(".dropZone")
 let tbody = document.querySelector("tbody")
 let table = document.querySelector("table")

 DropZone.addEventListener("drop", (e) => {
     e.preventDefault();
     table.classList.remove("d-none")
     let files = Array.from(e.dataTransfer.files)
     console.log(files);
     files.forEach(file => {
         Imageadd(file)
     })
 })
 DropZone.addEventListener("dragover", (e) => {
     e.preventDefault();
 })

 function Imageadd(file) {
     let fileReader = new FileReader();
     fileReader.readAsDataURL(file);
     fileReader.addEventListener("loadend", () => {
        let tdImage = document.createElement("td")
        let tdSize = document.createElement("td")
        let tdType = document.createElement("td")
        let image = document.createElement("img")
        let btn = document.createElement("button")
        let row = document.createElement("tr")
        let btntd = document.createElement("td")
         btn.className = "btn btn-outline-danger"
         btn.innerText = "delete"


         image.src = fileReader.result
         image.style.width = "70px"
         tdSize.innerHTML = file.size / 1024 + "Kb"
         tdType.innerHTML = file.type
         tdImage.append(image)
         btntd.append(btn)
         row.append(tdImage, tdSize, tdType, btntd)
         tbody.append(row)
         btn.onclick = function() {
             row.remove();
         }
     })
 }