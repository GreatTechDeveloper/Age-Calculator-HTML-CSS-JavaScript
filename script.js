const userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
const result = document.getElementById("result");

function calculateAge() {
  const birthDate = new Date(userInput.value);
  const d1 = birthDate.getDate();
  const m1 = birthDate.getMonth() + 1;
  const y1 = birthDate.getFullYear();

  const today = new Date();
  const d2 = today.getDate();
  const m2 = today.getMonth();
  const y2 = today.getFullYear();

  let d3, m3, y3;

  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }

  result.innerHTML = `You are <span>${y3}</span> Years, <span>${m3}</span> Months and <span>${d3}</span> Days Old`;

  const isBirthday = d1 === d2 && m1 === m2;
  if (isBirthday) {
    result.innerHTML += "<br>Happy Birthday!";
  }

  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  const nextBirthday = new Date(y2, m1 - 1, d1);
  if (today > nextBirthday) {
    nextBirthday.setFullYear(y2 + 1);
  }
  const diffTime = Math.abs(nextBirthday - today);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  result.innerHTML += `<br>Your next birthday is in <span>${diffDays}</span> days.`;
}
