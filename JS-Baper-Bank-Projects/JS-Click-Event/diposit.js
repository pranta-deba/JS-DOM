const dipositAddBtn = document.getElementById("dipositAddBtn");
const withdrawAddBtn = document.getElementById("withdrawAddBtn");

dipositAddBtn.addEventListener("click", () => {
  const dipositAddInput = document.getElementById("dipositAddInput");
  const dipositAmount = parseFloat(dipositAddInput.value);

  const dipositBalanceEle = document.getElementById("dipositBalance");
  const dipositBalanceStr = dipositBalanceEle.innerText;
  const dipositBalance = parseFloat(dipositBalanceStr);

  const totalDiposit = dipositAmount + dipositBalance;
  dipositBalanceEle.innerText = totalDiposit;

  const totalBalanceEle = document.getElementById("totalBalance");
  const totalBalanceStr = totalBalanceEle.innerText;
  const previewsTotalBalance = parseFloat(totalBalanceStr);

  const newTotalBalance = dipositAmount + previewsTotalBalance;
  totalBalanceEle.innerText = newTotalBalance;

  dipositAddInput.value = "";
});

withdrawAddBtn.addEventListener("click", () => {
  const withdrawAddInput = document.getElementById("withdrawAddInput");
  const withdrawAmount = parseFloat(withdrawAddInput.value);

  const withdrawBalanceEle = document.getElementById("withdrawBalance");
  const withdrawBalanceStr = withdrawBalanceEle.innerText;
  const withdrawBalance = parseFloat(withdrawBalanceStr);

  const totalWithdraw = withdrawAmount + withdrawBalance;
  withdrawBalanceEle.innerText = totalWithdraw;

  const totalBalanceEle = document.getElementById("totalBalance");
  const totalBalanceStr = totalBalanceEle.innerText;
  const previewsTotalBalance = parseFloat(totalBalanceStr);

  const newTotalBalance = previewsTotalBalance - withdrawAmount;
  totalBalanceEle.innerText = newTotalBalance;

  withdrawAddInput.value = '';
});
