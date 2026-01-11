document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let errorMsg = document.getElementById("errorMsg");

  if (username === "1" && password === "1") {
    // أنميشن الخروج
    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = "index.html";
    }, 600);

  } else {
    // في حال الخطأ
    errorMsg.textContent = "اسم المستخدم أو كلمة المرور غير صحيحة";
  }
});
