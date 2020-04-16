/*function validar(){
	var txt = document.getElementByName("txtNome");
	var nome = txt.value;
	if(nome.length < 2){
		alert("Preencha o campo NOME! ");
		return false;
	}else{
		return true;
	}
}*/

function validar(){
  
if(document.form.txtNome.value == "" ){
	alert( "Preencha campo NOME corretamente!" );
	document.form.txtNome.focus();
	return false;
	}else {
	return true;
	}
}

if(document.form.txtPreco.value == "" || document.form.txtPreco.value.length < 0 ){
	alert( "Preencha campo PREÇO corretamente!" );
	document.form.txtPreco.focus();
	return false;
	}else {
	return true;
	}
}

if(document.form.txtQuantidade.value == ""){
	alert( "Preencha campo QUANTIDADE corretamente!" );
	document.form.txtQuantidade.focus();
	return false;
	}else {
	return true;
	}
}

if(document.form.txtValidade.value == "" || ){
	alert( "Preencha campo VALIDADE corretamente!" );
	document.form.txtValidade.focus();
	return false;
	}else {
	return true;
	}
}

if(document.form.foto.value == ""){
	alert( "Preencha campo FOTO corretamente!" );
	document.form.foto.focus();
	return false;
	}else {
	return true;
	}
}


if(document.form.categoria.value == "" || document.form.categoria.options[categoria.selectedIndex].value == ""){
	alert( "Selecione uma categoria!" );
	document.form.categoria.focus();
	return false;
	}else {
	return true;
	}
	}

}
