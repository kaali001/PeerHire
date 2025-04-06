const dotenv = require("dotenv");
const path = require("path");
const express = require("express");
const connectDB = require("./db/conn");
const authRoutes = require("./routes/auth");
const jobRoutes = require("./routes/jobs");
const bidRoutes = require("./routes/bids");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger/swagger.json");

const app = express();


dotenv.config({ path: path.resolve(__dirname, "../../config.env") });
connectDB();

app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/jobs", jobRoutes);
app.use("/bids", bidRoutes);

// Swagger Documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Error Handling Middleware
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});




app.use(express.static('public'));

app.get('/status', (req, res) => {
    res.json({
        status: 'ok',
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        environment: process.env.NODE_ENV || 'development'
    });
});

// Update root endpoint
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './../public/status.html'));
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`
    ██████  ███████ ███████ ██   ██ ██ ██████  ███████ 
    ██   ██ ██      ██      ██   ██ ██ ██   ██ ██      
    ██████  █████   █████   ███████ ██ ██████  █████   
    ██      ██      ██           ██ ██ ██   ██ ██      
    ██      ███████ ██           ██ ██ ██   ██ ███████ 
    
    Server running on port ${PORT}
    Environment: ${process.env.NODE_ENV || 'development'}
    Docs: http://localhost:${PORT}/api-docs
    `);
});
