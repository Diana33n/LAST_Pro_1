# **Journey Planner Application**  

## **About This Project**  
The **Journey Planner Application** simplifies trip planning! Just enter your **destination** and **departure date**, and instantly receive a **weather forecast** along with a relevant **image** of your location.  

This app is built using **JavaScript, Webpack, and Express** and even works **offline** using service workers!  

---  

## **Key Features**  
- Enter a **destination** and **departure date**  
- Get **real-time weather predictions**  
- View a **high-quality image** of your location  
- Works **offline** using service workers  
- **Live updates** powered by Webpack Dev Server  

---  

## **Requirements**  
- **Node.js v22.12.0**  

---  

## **Technology Stack**  
- **Frontend:** JavaScript (ES6+), Webpack, SCSS  
- **Backend:** Node.js, Express  
- **APIs:** Geonames, Weatherbit, Pixabay  
- **Testing:** Jest  
- **Offline Functionality:** Workbox Service Workers  

---  

## **How to Set Up & Run the Project**  

### **1. Clone the Repository**  
```sh
cd journey-planner-app
```  

### **2. Install Project Dependencies**  
```sh
npm install
```  

### **3. Set Up API Keys (Create a `.env` File)**  
```sh
GEONAMES_USER=your_geonames_username
WEATHERBIT_KEY=your_weatherbit_api_key
PIXABAY_KEY=your_pixabay_api_key
```  

### **4. Run in Development Mode**  
```sh
npm run development
```  
Open **`http://localhost:8081/`** in your browser.  

### **5. Build & Launch for Production**  
```sh
npm run build
npm start
```  
Open **`http://localhost:8080/`**  

---  

## **Running Tests**  
To run tests using Jest:  
```sh
npm test
```  

---  

### **License**  
This project is open-source and licensed under the **MIT License**.  

