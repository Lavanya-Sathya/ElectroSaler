// load header section 
window.addEventListener('DOMContentLoaded',()=>{
    const headerSection = document.getElementById("header-container");
    const xhr = new XMLHttpRequest();
    xhr.open('GET','header.html',true);
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState === 4 && xhr.status === 200){
            headerSection.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
})

// load footer section
window.addEventListener('DOMContentLoaded', ()=>{
    const footerSection = document.getElementById("footer-container");
    const xhr = new XMLHttpRequest();
    xhr.open('GET','footer.html',true);
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState === 4 && xhr.status === 200){
            footerSection.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
})

// Feature Data
let features = document.getElementById("feature");

let generateFeatures = ()=>{
   return (features.innerHTML =  featureData.map((x)=>{
    `<h1 class="text-center text-white p-3" id="features">Features</h1>`
        if (x.num === "1"){
            return `<div class="row mt-3">
            <div class="col-md-5">
                <p class="h2 text-white featureHeading">${x.name}</p>
                <p class="p-2 text-white">${x.desc}</p>
            </div>
            <div class="col-md-7">
                <img src="${x.img}" class="feature_img" alt="feature_performance">
            </div>
         </div>`
        }
        else{
           return  `<div class="row mt-3">
            <div class="col-md-5 order-md-2">
                <p class="h2 text-white featureHeading">${x.name}</p>
                <p class="p-2 text-white">${x.desc}</p>
            </div>
            <div class="col-md-7 order-md-1 ">
                <img src="${x.img}" class="feature_img" alt="display">
            </div>
        </div>`
        }
   })) 
}

generateFeatures();