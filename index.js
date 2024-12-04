const btnCloseForm = $("#btn-close");
const btnOpenForm = $("#btnAddItem");
const btnSaveForm = $("#btn-save");
const dataItems = [];
var totalPrice = 0;
//function Show all data in list table
function showDataList(id,name,price,stock) {
  let txt = "";
  let txtTotal = "";
      txt += `<tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>${price}</td>
            <td>${stock}</td>
            <td>
              <button id="btn-edit">
                <i class="fas fa-pen-to-square"></i>
              </button>
              <button id="btn-delete">
                <i class="fa-solid fa-trash"></i>
              </button>
            </td>
            </tr>`;
  $(".tbl-items table .header-list").after(txt);
  totalPrice += parseFloat(price);
  txtTotal += `
        <td colspan="3" style="text-align: end;">Total:</td>
        <td colspan="2" style="text-align:left;">${totalPrice} $</td>`;
  $(".row-total").html(txtTotal);
}
//Function Increase ID
function showId() {
  return dataItems.length + 1;
}
//Button Save Items
btnSaveForm.click(function (e) {
  let txtId = showId();
  let txtName = $("#txt-name").val();
  let txtPrice = $("#txt-price").val();
  let txtStock = $("#txt-stock").val();
  if (txtName === " ") {
    alert("Please Input Name!");
    $("#txt-name").focus();
  } else if (txtPrice === null) {
    alert("Please Input Price!");
    $("#txt-price").focus();
  } else if (txtStock === null) {
    alert("Please Input Number In stock!");
    $("#txt-stock").focus();
  } else {
    
  dataItems.push({
  "id": txtId,
  "name": txtName,
  "price": txtPrice,
    "inStock": txtStock
  });
  $(".form-style").fadeOut();
  showDataList(txtId,txtName,txtPrice,txtStock);
  $("#txt-id").val("");
  $("#txt-name").val("");
  $("#txt-price").val("");
  $("#txt-stock").val("");
  }
});
//Button Click Open Form
btnOpenForm.click(function (e) {
  $("#txt-id").val(showId());
  $(".form-style").fadeIn().css("display", "flex");
  $("#txt-name").focus();
});
//Button Click Close form
btnCloseForm.click(function (e) {
  $(".form-style").fadeOut();
});