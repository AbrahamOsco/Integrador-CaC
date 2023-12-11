const categorySelect = document.getElementById('categoria')
const licenseSelect = document.getElementById('licencia') 
const inputNameProduct = document.getElementById('nombre')
const inputDescription = document.getElementById('descripcion')
const inputSku = document.getElementById('sku')
const inputPrice = document.getElementById('precio')
const inputStock = document.getElementById('stock')
const inputDiscount = document.getElementById('descuento')
const inputDues = document.getElementById('cuotas')
const addProductBtn = document.getElementById('addProduct')
const cleanFieldsBtn = document.getElementById('cleanFields')

const getCurrentDateTime = () => {
    const now = new Date();
    const offset = now.getTimezoneOffset();
    now.setMinutes(now.getMinutes() - offset);
    const formattedDateTime = now.toISOString().slice(0, 19).replace('T', ' ');
    return formattedDateTime;
}

let currenImgType = 'Frente'
let ImgNames = []
const inputFileImg = document.getElementById('fileImg')

inputFileImg.addEventListener('change', () => {
    console.log('inputFileImg.value, ', inputFileImg.value)
    const aImgName = inputFileImg.value.replace('C:\\fakepath\\','') 
    if(currenImgType == 'Frente'){
        frenteLabel.style.display = 'inline'
        frenteFileName.style.display = 'inline'
        frenteFileName.textContent = aImgName
        currenImgType = 'Dorso'
        ImgNames[0] = aImgName 
    } else if ( currenImgType == 'Dorso'){
        dorsoLabel.style.display = 'inline'
        dorsoFileName.style.display = 'inline'
        dorsoFileName.textContent = aImgName
        currenImgType = 'Frente'
        ImgNames[1] = aImgName
    }
})

const isAValidNumber = (aInputNumber, type) => {
    let value = parseFloat(aInputNumber.value)
    if(type == 'STOCK' || type == 'DISC'){
        value = parseInt(aInputNumber.value)
    } if( isNaN(value) ){
        return false
    } if (type == 'DISC' && (value < 0 || value >= 100) ){
        return false
    } if (type == '' && value <= 0){
        return false
    }
    return true
}

const areOkInputs = () => {
    if(categorySelect.value == 'Seleccionar' || licenseSelect.value == 'Seleccionar' 
        || inputNameProduct == '' || inputDescription.value == '' || (inputSku.value == '' || isFinite(inputSku.value)) 
        || !isAValidNumber(inputPrice, '') || ! isAValidNumber(inputStock,'STOCK') || !isAValidNumber(inputDiscount,'DISC') || ImgNames.length < 2 ){
        return false;
    }
    return true;
}

const sendData = () => {
    if (!areOkInputs()){
        alert('Error en los datos: asegurate de completar de forma correcta todos los campos!')
        return;
    }
    const licenceName = licenseSelect.value;
    let pathInitialImg = '/img/pokemon/'
    if( licenceName.includes('Star Wars') ){
        pathInitialImg = '/img/star-wars/'
    } else if ( licenceName.includes('Harry Potter')){
        pathInitialImg = '/img/harry-potter/'
    }

    console.log('Se ha ingresado con exito todos los datos del producto')
    fetch(`/admin/create`,{
      method:'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        aCategory: categorySelect.value,
        aLicense: licenseSelect.value,
        aNameProduct: inputNameProduct.value,
        aDescription: inputDescription.value,
        aSku: inputSku.value,
        aPrice: parseFloat(inputPrice.value),
        aStock: parseInt(inputStock.value),
        aDiscount : parseInt(inputDiscount.value),
        aDues: parseInt(inputDues.value),
        aFrontImg : (pathInitialImg + ImgNames[0]),
        aBackImg : (pathInitialImg + ImgNames[1]),
        aCreationTime : getCurrentDateTime()
      }),
    })
    .then( (res) => {
      window.alert("Producto agregado a la tabla producto con exito!\n");
      return res.json()
    })
    .catch( (error) => {
      console.error("Entro a la excepcion del fetch: Error:", error)
    })
}


addProductBtn.addEventListener('click', sendData)