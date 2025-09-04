```mermaid
graph TD
    %% --- User Layer ---
    subgraph UserLayer [User Layer]
        User["🧑‍🌾 Farmer (App/Chatbot)"]
        SoilInput["📄 Soil Test Report"]
        WaterInput["💧 Water Availability"]
        LocationInput["📍 GPS Location"]
        ImageInput["📸 Crop/Leaf Image"]
        VoiceInput["🎤 Voice Query"]
    end

    %% --- Cloud Infrastructure ---
    subgraph CloudInfra [Cloud Infrastructure]
        subgraph APILayer [API Layer]
            APIGateway["🌐 API Gateway"]
            Cache["⚡ Redis Cache"]
        end

        subgraph AppLayer [Application Layer]
            UserFarmService["👤 User and Farm Service"]
            PestService["🪳 Pest and Disease Service"]
            CropService["🌱 Crop Advisory Service"]
            WeatherService["☁️ Weather and Market Service"]
            VoiceService["🗣️ Voice Assist Service"]
            NotificationService["🔔 Notification Service"]
        end

        subgraph AIServing [AI/ML Serving Layer]
            CNN_Model["🤖 CNN (ResNet/EfficientNet)"]
            RecoEngine["💡 Recommendation Engine (XGBoost/Random Forest)"]
            ForecastModel["📈 Forecast Model (LSTM/Prophet)"]
            NLP_Models["🎤 NLP Models (BERT/Whisper/TTS)"]
        end

        subgraph DBLayer [Data Persistence Layer]
            PrimaryDB["✍️ Primary DB (Writes)"]
            ReadReplicas["📖 Read Replicas (Reads)"]
        end
    end

    subgraph MLOps [MLOps Training & Deployment]
        DataSources["💾 Data Sources (Soil, Images, Weather, Market, Feedback)"]
        TrainingPipeline["⚙️ Model Training & Validation"]
    end

    %% --- User Inputs to Services ---
    SoilInput --> APIGateway --> CropService
    WaterInput --> APIGateway --> CropService
    LocationInput --> APIGateway --> WeatherService
    ImageInput --> APIGateway --> PestService
    VoiceInput --> APIGateway --> VoiceService
    User --> APIGateway

    %% --- Service to AI Connections ---
    PestService --> CNN_Model
    CropService --> RecoEngine
    WeatherService --> ForecastModel
    VoiceService --> NLP_Models

    %% --- Service to DB Connections ---
    CropService --> PrimaryDB
    WeatherService --> PrimaryDB
    PestService --> PrimaryDB
    UserFarmService --> PrimaryDB
    PrimaryDB --> ReadReplicas

    %% --- Feedback Loop for Retraining ---
    CropService --> DataSources
    PestService --> DataSources
    WeatherService --> DataSources
    VoiceService --> DataSources

    DataSources --> TrainingPipeline
    TrainingPipeline --> CNN_Model
    TrainingPipeline --> RecoEngine
    TrainingPipeline --> ForecastModel
    TrainingPipeline --> NLP_Models
