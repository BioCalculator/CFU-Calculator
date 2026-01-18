      const defaultBtn = document.getElementById("defaultBtn");
      const customBtn = document.getElementById("customBtn");
      const customSection = document.getElementById("customSection");
      const customPower = document.getElementById("customPower");
      const customValue = document.getElementById("customValue");
      const odInput = document.getElementById("odInput");
      const result = document.getElementById("result");

      let useDefault = true;
      let defaultCFU =
  JSON.parse(localStorage.getItem("defaultCFU")) || { base: 8, power: 8 };
      // Populate dropdown 10^0 to 10^10
      const superscripts = "⁰¹²³⁴⁵⁶⁷⁸⁹";
      const super10 = "¹⁰";
      for (let i = 0; i <= 10; i++) {
        const opt = document.createElement("option");
        opt.value = i;
        if (i === 10) {
          opt.textContent = `10${super10}`;
        } else {
          opt.textContent = `10${superscripts[i]}`;
        }

        if (i === 8) opt.selected = true;
        customPower.appendChild(opt);
      }

      defaultBtn.onclick = () => {
        useDefault = true;
        defaultBtn.classList.add("active");
        defaultBtn.classList.remove("inactive");
        customBtn.classList.add("inactive");
        customBtn.classList.remove("active");
        customSection.style.display = "none";
        calculate();
      };

      customBtn.onclick = () => {
        useDefault = false;
        customBtn.classList.add("active");
        customBtn.classList.remove("inactive");
        defaultBtn.classList.add("inactive");
        defaultBtn.classList.remove("active");
        customSection.style.display = "block";
        calculate();
      };

      function calculate() {
        const od = parseFloat(odInput.value);
        if (isNaN(od)) {
          result.textContent = "CFU/ml:";
          return;
        }

        let baseCFU;
        if (useDefault) {
  baseCFU =
    defaultCFU.base * Math.pow(10, defaultCFU.power);
}
         else {
          const val = parseFloat(customValue.value);
          const pow = parseInt(customPower.value);
          if (isNaN(val)) {
            result.textContent = "CFU/ml:";
            return;
          }
          baseCFU = val * Math.pow(10, pow);
        }

        const cfu = baseCFU * od;
        const exp = cfu.toExponential(2).split("e");
        const mantissa = exp[0];
        const power = exp[1].replace("+", "");
        result.innerHTML = `CFU/ml: ${mantissa} × 10<sup>${power}</sup>`;
      }

      odInput.addEventListener("input", calculate);
      customValue.addEventListener("input", calculate);
      customPower.addEventListener("change", calculate);
      const infoBtn = document.getElementById("infoBtn");
      const infoModal = document.getElementById("infoModal");
      const closeInfo = document.getElementById("closeInfo");

      infoBtn.onclick = () => (infoModal.style.display = "flex");
      closeInfo.onclick = () => (infoModal.style.display = "none");

      infoModal.onclick = (e) => {
        if (e.target === infoModal) infoModal.style.display = "none";
      };




  const menuBtn = document.getElementById("menuBtn");
  const sideMenu = document.getElementById("sideMenu");
  const cfuContainer = document.getElementById("cfuContainer");
  const molarityContainer = document.getElementById("molarityContainer");

  // Toggle menu
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent document click
    sideMenu.classList.toggle("open");
    menuBtn.textContent = sideMenu.classList.contains("open") ? "✖" : "☰";
  });

  // Click outside to close menu
  document.addEventListener("click", (e) => {
    if (
      sideMenu.classList.contains("open") &&
      !sideMenu.contains(e.target) &&
      !menuBtn.contains(e.target)
    ) {
      closeMenu();
    }
  });

  function closeMenu() {
    sideMenu.classList.remove("open");
    menuBtn.textContent = "☰";
  }

  function showCFU() {
    cfuContainer.style.display = "block";
    molarityContainer.style.display = "none";
    closeMenu();
  }

  function showMolarity() {
    cfuContainer.style.display = "none";
    molarityContainer.style.display = "block";
    closeMenu();
  }


  const themeBtn = document.getElementById("themeBtn");

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";
  }

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");
    themeBtn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

const editDefaultBtn = document.getElementById("editDefaultBtn");
const editModal = document.getElementById("editDefaultModal");
const baseInput = document.getElementById("defaultBaseInput");
const powerSelect = document.getElementById("defaultPowerSelect");
const saveDefaultBtn = document.getElementById("saveDefaultBtn");

/* Populate dropdown */
powerSelect.innerHTML = "";
for (let i = 0; i <= 10; i++) {
  const opt = document.createElement("option");
  opt.value = i;
  opt.textContent =
    i === 10 ? `10${super10}` : `10${superscripts[i]}`;
  powerSelect.appendChild(opt);
}

/* Update Default button label */
function updateDefaultButton() {
  const powerText =
    defaultCFU.power === 10
      ? super10
      : superscripts[defaultCFU.power];

  defaultBtn.textContent =
    `Default (${defaultCFU.base} × 10${powerText})`;
}

updateDefaultButton();

/* Open editor */
editDefaultBtn.addEventListener("click", () => {
  baseInput.value = defaultCFU.base;
  powerSelect.value = defaultCFU.power;
  editModal.style.display = "flex";
});

saveDefaultBtn.addEventListener("click", () => {
  const base = parseFloat(baseInput.value);
  const power = parseInt(powerSelect.value);

  if (isNaN(base)) return;

  defaultCFU = { base, power };
  localStorage.setItem("defaultCFU", JSON.stringify(defaultCFU));

  updateDefaultButton();
  calculate(); // recalc using new default
  editModal.style.display = "none";
});

document.addEventListener("click", (e) => {
  if (
    infoModal.style.display === "flex" &&
    !infoModal.querySelector(".info-content").contains(e.target) &&
    !infoBtn.contains(e.target)
  ) {
    infoModal.style.display = "none";
  }
});
document.addEventListener("click", (e) => {
  if (
    editModal.style.display === "flex" &&
    !editModal.querySelector(".edit-default-content").contains(e.target) &&
    !editDefaultBtn.contains(e.target)
  ) {
    editModal.style.display = "none";
  }
});

infoModal.querySelector(".info-content").addEventListener("click", e => {
  e.stopPropagation();
});

editModal.querySelector(".edit-default-content").addEventListener("click", e => {
  e.stopPropagation();
});
