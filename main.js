var arrayNumber = [];
var arrayFloat = [];
document.getElementById("tinhToan").addEventListener("click", function (e) {
  e.preventDefault();
  var valueEle = document.getElementById("inputNumber").value;
  var valueEleFloat = document.getElementById("inputNumberFloat").value;
  var inputLocation1 = document.getElementById("inputLocation1").value;
  var inputLocation2 = document.getElementById("inputLocation2").value;
  if (
    valueEle.trim() != "" &&
    valueEleFloat.trim() != "" &&
    inputLocation1.trim() != "" &&
    inputLocation2.trim() != ""
  ) {
    var getNumber = valueEle.trim() * 1;
    var getNumberFloat = valueEleFloat.trim() * 1;
    arrayNumber.push(getNumber);
    arrayFloat.push(getNumberFloat);
  }
  render();
  document.getElementById("form").reset();
});

function render() {
  var inputLocation1 = document.getElementById("inputLocation1").value;
  var inputLocation2 = document.getElementById("inputLocation2").value;
  var stringResult = "";
  stringResult = `
    <div>Mảng nhập vào: [${arrayNumber}]</div>
    <div>Mảng số thực nhập vào: [${arrayFloat}]</div>
    <div>1.Tổng các số dương trong mảng: ${tongSoDuongMang()}</div>
    <div>2.Đếm có bao nhiêu số dương trong mảng: ${soDuongTrongMang()}</div>
    <div>3.Số nhỏ nhất trong mảng: ${soNhoNhat()}</div>
    <div>4.Số dương nhỏ nhất trong mảng: ${soDuongNhoNhat()}</div>
    <div>5.Số chẵn cuối cùng trong mảng: ${soChanCuoiCung()}</div>
    <div>6.Đổi chỗ 2 giá trị trong mảng theo vị trí ${inputLocation1} và ${inputLocation2}: ${doiChoViTri2So()}</div>
    <div>7.Sắp xếp mảng theo vị trí tăng dần: ${sapXepMang()}</div>
    <div>8.Số nguyên tố đầu tiên của mảng: ${timSoNguyenTo()}</div>
    <div>9.Số nguyên trong mảng là: ${demSoNguyen()}</div>
    <div>10.So sánh số lượng số âm số dương trong mảng: ${soSanhSoAm_SoDuong()}</div>`;
  document.getElementById("result").innerHTML = stringResult;
}

function tongSoDuongMang() {
  var arrayPlus = arrayNumber.filter(function (item) {
    return item > 0;
  });
  var sumPlus = 0;
  arrayPlus.map(function (item) {
    sumPlus += item;
  });
  return sumPlus;
}
function soDuongTrongMang() {
  var arrayPlus = arrayNumber.filter(function (item) {
    return item > 0;
  });
  return arrayPlus.length;
}

function soNhoNhat() {
  var minNumber = arrayNumber[0];
  arrayNumber.map(function (item) {
    if (item < minNumber) {
      minNumber = item;
    }
  });
  return minNumber;
}

function soDuongNhoNhat() {
  var minNumberPlus = arrayNumber[0];
  var arrayPlus = arrayNumber.filter(function (item) {
    return item > 0;
  });
  arrayPlus.map(function (item) {
    if (item < minNumberPlus) {
      minNumberPlus = item;
    }
  });
  return minNumberPlus;
}

function soChanCuoiCung() {
  var arrayEven = arrayNumber.filter(function (item) {
    return item % 2 == 0;
  });
  if (arrayEven.length === 0) {
    return -1;
  }
  return arrayEven[arrayEven.length - 1];
}

function doiChoViTri2So() {
  var inputLocation1 = document.getElementById("inputLocation1").value;
  var inputLocation2 = document.getElementById("inputLocation2").value;
  var getValueLocation1 = inputLocation1.trim() * 1;
  var getValueLocation2 = inputLocation2.trim() * 1;
  var arrayNumberCopy = arrayNumber.slice();

  if (
    arrayNumberCopy.length >= 2 &&
    getValueLocation1 < arrayNumberCopy.length &&
    getValueLocation2 < arrayNumberCopy.length
  ) {
    var soViTriDau = arrayNumberCopy[getValueLocation1];
    arrayNumberCopy.splice(
      getValueLocation1,
      1,
      arrayNumberCopy[getValueLocation2]
    );
    arrayNumberCopy.splice(getValueLocation2, 1, soViTriDau);
    console.log(arrayNumberCopy[getValueLocation2]);
    return arrayNumberCopy;
  }
  return "Mảng chưa đủ lớn";
}

function sapXepMang() {
  var arrayNumberSort = arrayNumber.slice();
  arrayNumberSort.sort();
  return arrayNumberSort;
}

function timSoNguyenTo() {
  var soNguyenToDauTien = arrayNumber.find(function (item) {
    return kiemTraSoNguyenTo(item);
  });
  if (soNguyenToDauTien === undefined) {
    return -1;
  }

  return soNguyenToDauTien;
}

function kiemTraSoNguyenTo(n) {
  var flag = true;
  // Nếu n bé hơn 2 tức là không phải số nguyên tố
  if (n < 2) {
    flag = false;
  } else {
    // lặp từ 2 tới n-1
    for (var i = 2; i < n - 1; i++) {
      if (n % i == 0) {
        flag = false;
        break;
      }
    }
  }
  return flag;
}

function demSoNguyen() {
  var arrayInteger = arrayFloat.filter(function (item) {
    return Number.isInteger(item);
  });
  return arrayInteger.length;
}

function soSanhSoAm_SoDuong() {
  var arrayDuong = arrayNumber.filter(function (item) {
    return item > 0;
  });
  var arrayAm = arrayNumber.filter(function (item) {
    return item < 0;
  });
  if (arrayDuong.length > arrayAm.length) {
    return "Số dương lớn hơn";
  } else if (arrayDuong.length < arrayAm.length) {
    return "Số âm lớn hơn";
  } else {
    return "Bằng nhau";
  }
}
