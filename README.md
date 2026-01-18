# CFU/ml Calculator 🧫

A web-based **CFU/ml (Colony Forming Units per millilitre) calculator** that estimates bacterial concentration from optical density (OD) values.

This tool is designed for students and researchers working with microbial cultures and spectrophotometer data.



## 🚀 Features

- Calculate **CFU/ml from OD values**
- Toggle between **Default** and **Custom** CFU/ml per 1 O.D.
- **Editable default value** (base × 10ⁿ)
  - Change using the ▲ button
  - Saved automatically in the browser (localStorage)
- **Dark mode**
- Informational modal explaining CFU/ml and assumptions
- Responsive, mobile-friendly UI
- Pure **Vanilla JavaScript** (no frameworks)

<img width="1919" height="823" alt="image" src="https://github.com/user-attachments/assets/0535d205-a9d2-4adf-a83c-cbd9ae2cdbcb" />


## 🧮 How the Calculation Works

The calculator uses the formula:
CFU/ml = (CFU per 1 O.D.) × (Measured O.D.)

By default, it assumes: 1.0 OD₆₀₀ ≈ 8 × 10⁸ CFU/ml (for E. coli)


This value can be edited to suit different organisms or experimental conditions.

---

## 🧑‍💻 How to Use

1. Enter the **O.D. value**
2. Select **Default** or **Custom**
3. (Optional) Click the **▲ button** to edit the default CFU/ml value
4. The calculated **CFU/ml** is displayed instantly

---

## 🌙 Dark Mode

- Toggle dark mode using the button in the top-right corner
- Preference is saved automatically

<img width="1919" height="824" alt="image" src="https://github.com/user-attachments/assets/af074f45-a16d-4640-8c88-a5c9b9c348df" />

---

## 🛠 Built With

- **HTML**
- **CSS**
- **JavaScript (Vanilla)**

No external libraries or frameworks are required.

---





