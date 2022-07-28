const products = [
  {
    id: 1,
    name: "AMD RYZEN 5 5600X",
    category: "CPU",
    price: 49000,
    img: "https://i.ibb.co/KqZLK93/amd-Ryzen55600-X.jpg",
    stock: 7,
  },
  {
    id: 2,
    name: "AMD RYZEN 7 5800X",
    category: "CPU",
    price: 49000,
    img: "https://i.ibb.co/2Km69Db/amd-Ryzen75800-X.jpg",
    stock: 7,
  },
  {
    id: 3,
    name: "AMD RYZEN 9 5900X",
    category: "CPU",
    price: 49000,
    img: "https://i.ibb.co/CmyYJCY/amd-Ryzen95900-X.jpg",
    stock: 7,
  },
  {
    id: 4,
    name: "CORSAIR VENGEANCE",
    category: "RAM",
    price: 30000,
    img: "https://i.ibb.co/JvKwmyS/corsair-Vengeance16-Gb-Ddr4.jpg",
    stock: 6,
  },
  {
    id: 5,
    name: "CORSAIR VENGEANCE PRO",
    category: "RAM",
    price: 30000,
    img: "https://i.ibb.co/Vwr3YXV/corsair-Vengeance-Rgb-Pro16-Gb-Ddr4.jpg",
    stock: 6,
  },
  {
    id: 6,
    name: "CORSAIR VENGEANCE PRO WHITE",
    category: "RAM",
    price: 30000,
    img: "https://i.ibb.co/PFKzzWj/corsair-Vengeance-Rgb-Pro16-Gb-Ddr4-White.jpg",
    stock: 6,
  },
  {
    id: 7,
    name: "EVGA RTX 3070",
    category: "VGA",
    price: 30000,
    img: "https://i.ibb.co/JncGpb8/evga-Rtx3070.jpg",
    stock: 6,
  },
  {
    id: 8,
    name: "EVGA RTX 3080",
    category: "VGA",
    price: 30000,
    img: "https://i.ibb.co/NSkNn13/evga-Rtx3080.jpg",
    stock: 6,
  },
  {
    id: 9,
    name: "EVGA RTX 3090",
    category: "VGA",
    price: 30000,
    img: "https://i.ibb.co/kBfxJLL/evga-Rtx3090.jpg",
    stock: 6,
  },
  {
    id: 10,
    name: "TUF GAMING X570 AM4",
    category: "MOTHER",
    price: 30000,
    img: "https://i.ibb.co/W5MscgL/tuf-Gaming-X570-Amd.jpg",
    stock: 6,
  },
  {
    id: 11,
    name: "COOLER MASTER V850",
    category: "PSU",
    price: 30000,
    img: "https://i.ibb.co/mHdYxpT/sfxV850W.jpg",
    stock: 6,
  },
  {
    id: 12,
    name: "COOLER MASTER M2000",
    category: "PSU",
    price: 30000,
    img: "https://i.ibb.co/vz72Kgf/m2000-Platinum.jpg",
    stock: 6,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });
};
