//Code By Vipul Gupta
const elements = [
    { symbol: "H", name: "Hydrogen", atomicNumber: 1, group: 1, period: 1 },
    { symbol: "He", name: "Helium", atomicNumber: 2, group: 18, period: 1 },
    { symbol: "Li", name: "Lithium", atomicNumber: 3, group: 1, period: 2 },
    { symbol: "Be", name: "Beryllium", atomicNumber: 4, group: 2, period: 2 },
    { symbol: "B", name: "Boron", atomicNumber: 5, group: 13, period: 2 },
    { symbol: "C", name: "Carbon", atomicNumber: 6, group: 14, period: 2 },
    { symbol: "N", name: "Nitrogen", atomicNumber: 7, group: 15, period: 2 },
    { symbol: "O", name: "Oxygen", atomicNumber: 8, group: 16, period: 2 },
    { symbol: "F", name: "Fluorine", atomicNumber: 9, group: 17, period: 2 },
    { symbol: "Ne", name: "Neon", atomicNumber: 10, group: 18, period: 2 },
    { symbol: "Na", name: "Sodium", atomicNumber: 11, group: 1, period: 3 },
    { symbol: "Mg", name: "Magnesium", atomicNumber: 12, group: 2, period: 3 },
    { symbol: "Al", name: "Aluminium", atomicNumber: 13, group: 13, period: 3 },
    { symbol: "Si", name: "Silicon", atomicNumber: 14, group: 14, period: 3 },
    { symbol: "P", name: "Phosphorus", atomicNumber: 15, group: 15, period: 3 },
    { symbol: "S", name: "Sulfur", atomicNumber: 16, group: 16, period: 3 },
    { symbol: "Cl", name: "Chlorine", atomicNumber: 17, group: 17, period: 3 },
    { symbol: "Ar", name: "Argon", atomicNumber: 18, group: 18, period: 3 },
    { symbol: "K", name: "Potassium", atomicNumber: 19, group: 1, period: 4 },
    { symbol: "Ca", name: "Calcium", atomicNumber: 20, group: 2, period: 4 },
    { symbol: "Sc", name: "Scandium", atomicNumber: 21, group: 3, period: 4 },
    { symbol: "Ti", name: "Titanium", atomicNumber: 22, group: 4, period: 4 },
    { symbol: "V", name: "Vanadium", atomicNumber: 23, group: 5, period: 4 },
    { symbol: "Cr", name: "Chromium", atomicNumber: 24, group: 6, period: 4 },
    { symbol: "Mn", name: "Manganese", atomicNumber: 25, group: 7, period: 4 },
    { symbol: "Fe", name: "Iron", atomicNumber: 26, group: 8, period: 4 },
    { symbol: "Co", name: "Cobalt", atomicNumber: 27, group: 9, period: 4 },
    { symbol: "Ni", name: "Nickel", atomicNumber: 28, group: 10, period: 4 },
    { symbol: "Cu", name: "Copper", atomicNumber: 29, group: 11, period: 4 },
    { symbol: "Zn", name: "Zinc", atomicNumber: 30, group: 12, period: 4 },
    { symbol: "Ga", name: "Gallium", atomicNumber: 31, group: 13, period: 4 },
    { symbol: "Ge", name: "Germanium", atomicNumber: 32, group: 14, period: 4 },
    { symbol: "As", name: "Arsenic", atomicNumber: 33, group: 15, period: 4 },
    { symbol: "Se", name: "Selenium", atomicNumber: 34, group: 16, period: 4 },
    { symbol: "Br", name: "Bromine", atomicNumber: 35, group: 17, period: 4 },
    { symbol: "Kr", name: "Krypton", atomicNumber: 36, group: 18, period: 4 },
    { symbol: "Rb", name: "Rubidium", atomicNumber: 37, group: 1, period: 5 },
    { symbol: "Sr", name: "Strontium", atomicNumber: 38, group: 2, period: 5 },
    { symbol: "Y", name: "Yttrium", atomicNumber: 39, group: 3, period: 5 },
    { symbol: "Zr", name: "Zirconium", atomicNumber: 40, group: 4, period: 5 },
    { symbol: "Nb", name: "Niobium", atomicNumber: 41, group: 5, period: 5 },
    { symbol: "Mo", name: "Molybdenum", atomicNumber: 42, group: 6, period: 5 },
    { symbol: "Tc", name: "Technetium", atomicNumber: 43, group: 7, period: 5 },
    { symbol: "Ru", name: "Ruthenium", atomicNumber: 44, group: 8, period: 5 },
    { symbol: "Rh", name: "Rhodium", atomicNumber: 45, group: 9, period: 5 },
    { symbol: "Pd", name: "Palladium", atomicNumber: 46, group: 10, period: 5 },
    { symbol: "Ag", name: "Silver", atomicNumber: 47, group: 11, period: 5 },
    { symbol: "Cd", name: "Cadmium", atomicNumber: 48, group: 12, period: 5 },
    { symbol: "In", name: "Indium", atomicNumber: 49, group: 13, period: 5 },
    { symbol: "Sn", name: "Tin", atomicNumber: 50, group: 14, period: 5 },
    { symbol: "Sb", name: "Antimony", atomicNumber: 51, group: 15, period: 5 },
    { symbol: "Te", name: "Tellurium", atomicNumber: 52, group: 16, period: 5 },
    { symbol: "I", name: "Iodine", atomicNumber: 53, group: 17, period: 5 },
    { symbol: "Cs", name: "Cesium", atomicNumber: 55, group: 1, period: 6 },
    { symbol: "Xe", name: "Xenon", atomicNumber: 54, group: 18, period: 5 },
    { symbol: "Ba", name: "Barium", atomicNumber: 56, group: 2, period: 6 },
    { symbol: "La", name: "Lanthanum", atomicNumber: 57, group: 3, period: 6 },
    { symbol: "Ce", name: "Cerium", atomicNumber: 58, group: "Lanthanoid", period: 6 },
    { symbol: "Pr", name: "Praseodymium", atomicNumber: 59, group: "Lanthanoid", period: 6 },
    { symbol: "Nd", name: "Neodymium", atomicNumber: 60, group: "Lanthanoid", period: 6 },
    { symbol: "Pm", name: "Promethium", atomicNumber: 61, group: "Lanthanoid", period: 6 },
    { symbol: "Sm", name: "Samarium", atomicNumber: 62, group: "Lanthanoid", period: 6 },
    { symbol: "Eu", name: "Europium", atomicNumber: 63, group: "Lanthanoid", period: 6 },
    { symbol: "Gd", name: "Gadolinium", atomicNumber: 64, group: "Lanthanoid", period: 6 },
    { symbol: "Tb", name: "Terbium", atomicNumber: 65, group: "Lanthanoid", period: 6 },
    { symbol: "Dy", name: "Dysprosium", atomicNumber: 66, group: "Lanthanoid", period: 6 },
    { symbol: "Ho", name: "Holmium", atomicNumber: 67, group: "Lanthanoid", period: 6 },
    { symbol: "Er", name: "Erbium", atomicNumber: 68, group: "Lanthanoid", period: 6 },
    { symbol: "Tm", name: "Thulium", atomicNumber: 69, group: "Lanthanoid", period: 6 },
    { symbol: "Yb", name: "Ytterbium", atomicNumber: 70, group: "Lanthanoid", period: 6 },
    { symbol: "Lu", name: "Lutetium", atomicNumber: 71, group: "Lanthanoid", period: 6 },
    { symbol: "Hf", name: "Hafnium", atomicNumber: 72, group: 4, period: 6 },
    { symbol: "Ta", name: "Tantalum", atomicNumber: 73, group: 5, period: 6 },
    { symbol: "W", name: "Tungsten", atomicNumber: 74, group: 6, period: 6 },
    { symbol: "Re", name: "Rhenium", atomicNumber: 75, group: 7, period: 6 },
    { symbol: "Os", name: "Osmium", atomicNumber: 76, group: 8, period: 6 },
    { symbol: "Ir", name: "Iridium", atomicNumber: 77, group: 9, period: 6 },
    { symbol: "Pt", name: "Platinum", atomicNumber: 78, group: 10, period: 6 },
    { symbol: "Au", name: "Gold", atomicNumber: 79, group: 11, period: 6 },
    { symbol: "Hg", name: "Mercury", atomicNumber: 80, group: 12, period: 6 },
    { symbol: "Tl", name: "Thallium", atomicNumber: 81, group: 13, period: 6 },
    { symbol: "Pb", name: "Lead", atomicNumber: 82, group: 14, period: 6 },
    { symbol: "Bi", name: "Bismuth", atomicNumber: 83, group: 15, period: 6 },
    { symbol: "Po", name: "Polonium", atomicNumber: 84, group: 16, period: 6 },
    { symbol: "At", name: "Astatine", atomicNumber: 85, group: 17, period: 6 },
    { symbol: "Rn", name: "Radon", atomicNumber: 86, group: 18, period: 6 },
    { symbol: "Fr", name: "Francium", atomicNumber: 87, group: 1, period: 7 },
    { symbol: "Ra", name: "Radium", atomicNumber: 88, group: 2, period: 7 },
    { symbol: "Ac", name: "Actinium", atomicNumber: 89, group: "Actinoid", period: 7 },
    { symbol: "Th", name: "Thorium", atomicNumber: 90, group: "Actinoid", period: 7 },
    { symbol: "Pa", name: "Protactinium", atomicNumber: 91, group: "Actinoid", period: 7 },
    { symbol: "U", name: "Uranium", atomicNumber: 92, group: "Actinoid", period: 7 },
    { symbol: "Np", name: "Neptunium", atomicNumber: 93, group: "Actinoid", period: 7 },
    { symbol: "Pu", name: "Plutonium", atomicNumber: 94, group: "Actinoid", period: 7 },
    { symbol: "Am", name: "Americium", atomicNumber: 95, group: "Actinoid", period: 7 },
    { symbol: "Cm", name: "Curium", atomicNumber: 96, group: "Actinoid", period: 7 },
    { symbol: "Bk", name: "Berkelium", atomicNumber: 97, group: "Actinoid", period: 7 },
    { symbol: "Cf", name: "Californium", atomicNumber: 98, group: "Actinoid", period: 7 },
    { symbol: "Es", name: "Einsteinium", atomicNumber: 99, group: "Actinoid", period: 7 },
    { symbol: "Fm", name: "Fermium", atomicNumber: 100, group: "Actinoid", period: 7 },
    { symbol: "Md", name: "Mendelevium", atomicNumber: 101, group: "Actinoid", period: 7 },
    { symbol: "No", name: "Nobelium", atomicNumber: 102, group: "Actinoid", period: 7 },
    { symbol: "Lr", name: "Lawrencium", atomicNumber: 103, group: "Actinoid", period: 7 },
    { symbol: "Rf", name: "Rutherfordium", atomicNumber: 104, group: 4, period: 7 },
    { symbol: "Db", name: "Dubnium", atomicNumber: 105, group: 5, period: 7 },
    { symbol: "Sg", name: "Seaborgium", atomicNumber: 106, group: 6, period: 7 },
    { symbol: "Bh", name: "Bohrium", atomicNumber: 107, group: 7, period: 7 },
    { symbol: "Hs", name: "Hassium", atomicNumber: 108, group: 8, period: 7 },
    { symbol: "Mt", name: "Meitnerium", atomicNumber: 109, group: 9, period: 7 },
    { symbol: "Ds", name: "Darmstadtium", atomicNumber: 110, group: 10, period: 7 },
    { symbol: "Rg", name: "Roentgenium", atomicNumber: 111, group: 11, period: 7 },
    { symbol: "Cn", name: "Copernicium", atomicNumber: 112, group: 12, period: 7 },
    { symbol: "Nh", name: "Nihonium", atomicNumber: 113, group: 13, period: 7 },
    { symbol: "Fl", name: "Flerovium", atomicNumber: 114, group: 14, period: 7 },
    { symbol: "Mc", name: "Moscovium", atomicNumber: 115, group: 15, period: 7 },
    { symbol: "Lv", name: "Livermorium", atomicNumber: 116, group: 16, period: 7 },
    { symbol: "Ts", name: "Tennessine", atomicNumber: 117, group: 17, period: 7 },
    { symbol: "Og", name: "Oganesson", atomicNumber: 118, group: 18, period: 7 }
  ];
  
  const tableContainer = document.querySelector('.table-container');
  const tooltip = document.getElementById('tooltip');
  
  elements.forEach(element => {
    const elDiv = document.createElement('div');
    elDiv.classList.add('element');
    elDiv.style.gridColumn = element.group; 
    elDiv.style.gridRow = element.period;  
  
    elDiv.innerHTML = `
      <div><strong>${element.symbol}</strong></div>
      <div>${element.atomicNumber}</div>
    `;
  
    elDiv.addEventListener('mouseenter', () => {
      tooltip.style.display = 'block';
      tooltip.innerHTML = `
        <strong>${element.name}</strong><br>
        Atomic Number: ${element.atomicNumber}<br>
        Group: ${element.group}, Period: ${element.period}
      `;
    });
  
    elDiv.addEventListener('mousemove', (e) => {
      tooltip.style.left = `${e.pageX + 10}px`;
      tooltip.style.top = `${e.pageY + 10}px`;
    });
  
    elDiv.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    });
  
    tableContainer.appendChild(elDiv);
  });
  
