// tangkap elemen absensi form
let absensiForm = document.getElementById('absensiForm');
let root = document.getElementById('root');

// kita buat data array untuk enampung data absensi

let absensiData = [];

// tambahkan evenLIstener
absensiForm.addEventListener('submit', (e) => {
  // mencegah form dari relod
  e.preventDefault();
  let fullName = e.target.fullName.value;
  if (fullName == '') {
    alert('Nama Lengkap');
    return;
  }
  // karna absesi adl Array data yang dimasukkan bisa("STRING", NUMBER, OBJECT{PROPERTI : "VALUE"})
  // push data kedalam array absesi data
  absensiData.push({
    namaLengkap: fullName,
    time: new Date().toLocaleTimeString(),
    tanggal: new Date().toLocaleDateString(),
  });

  e.target.fullName.value = '';

  // panggil funtion render
  renderToHrml();
});

// buat function untuk render ke div root

function renderToHrml() {
  // reset div root
  root.innerHTML = '';

  // mapping array
  absensiData.forEach((e, i) => {
    root.innerHTML += `
    <div class="card" draggable="true" ondragend="handleDelete(${i})">
    <span> ${i + 1}. &nbsp</span>
    ${e.namaLengkap} <span> ${e.time} </span> <span> ${e.tanggal}</span>
    </div>
    `;
  });
}

// membuat function handleDelete

function handleDelete(index) {
  absensiData.splice(index, 1);

  renderToHrml();
}

