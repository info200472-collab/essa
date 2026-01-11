document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("fullname").value;
  let nationalId = document.getElementById("nationalId").value;
  let department = document.getElementById("department").value;
  let result = document.getElementById("result");

  if (name === "" || nationalId === "" || department === "") {
    result.textContent = "يرجى تعبئة جميع الحقول";
    return;
  }

  // توليد تاريخ اليوم تلقائياً
  let today = new Date();
  let day = String(today.getDate()).padStart(2, "0");
  let month = String(today.getMonth() + 1).padStart(2, "0");
  let year = today.getFullYear();
  let bookingDate = `${day}-${month}-${year}`;

  // توليد رقم دور عشوائي
  let queueNumber = Math.floor(Math.random() * 100) + 1;

  result.innerHTML = `
    <p>تم الحجز بنجاح ✅</p>
    <p>الاسم: ${name}</p>
    <p>الدائرة: ${department}</p>
    <p>تاريخ الحجز: ${bookingDate}</p>
    <p><strong>رقم الدور: ${queueNumber}</strong></p>
  `;
});
function logout() {
  window.location.href = "log.html";
}

