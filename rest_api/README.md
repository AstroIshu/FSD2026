# REST API Project

A simple Spring Boot REST API for managing student records with MySQL database integration.

## Project Overview

This project is a REST API built with Spring Boot that provides endpoints for CRUD operations on student data. The API connects to a MySQL database and allows you to create, read student records.

## Technologies Used

- **Framework**: Spring Boot 4.0.3
- **Language**: Java 17
- **Build Tool**: Maven
- **Database**: MySQL
- **ORM**: Spring Data JPA (Hibernate)
- **Testing Tool**: Postman

## Project Structure

```
restAPI/
├── rest_api/                                    # Main Spring Boot application
│   ├── pom.xml                                  # Maven configuration
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/sample/
│   │   │   │   ├── RestApiApplication.java      # Main Spring Boot application
│   │   │   │   ├── controller/
│   │   │   │   │   └── StudentController.java   # REST endpoints
│   │   │   │   ├── model/
│   │   │   │   │   └── Student.java             # Entity model
│   │   │   │   ├── service/
│   │   │   │   │   └── StudentService.java      # Business logic
│   │   │   │   └── repository/
│   │   │   │       └── StudentRepository.java   # Database queries
│   │   │   └── resources/
│   │   │       └── application.properties       # Configuration
│   │   └── test/
│   │       └── RestApiApplicationTests.java     # Unit tests
│   └── target/
│       └── rest_api-0.0.1-SNAPSHOT.jar          # Compiled JAR file
└── demo.rest                                     # REST client testing file
```

## Getting Started

### Prerequisites

- **Java 17** or higher
- **Maven** (included as mvnw wrapper)
- **MySQL Server** running on localhost:3306
- **MySQL Database**: `ishu`

### Installation & Setup

1. **Navigate to the project directory**:
   ```bash
   cd d:\Codes\CUBS\FSD\restAPI\rest_api
   ```

2. **Install Java 17** (if not already installed):
   ```bash
   conda install -c conda-forge openjdk=17 -y
   ```

3. **Configure Database** (application.properties):
   - Update database credentials if needed:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/ishu?createDatabaseIfNotExist=true
     spring.datasource.username=root
     spring.datasource.password=ghanari@1979
     ```

4. **Build the project**:
   ```bash
   mvnw.cmd clean package -DskipTests
   ```

5. **Run the application**:
   ```bash
   java -jar target/rest_api-0.0.1-SNAPSHOT.jar
   ```

The API will start on **http://localhost:8080**

## API Endpoints

### 1. Get All Students
- **Method**: `GET`
- **Endpoint**: `/api/students`
- **Response**: List of all students
- **Status Code**: `200 OK`

**Example Request**:
```
GET http://localhost:8080/api/students
```

**Example Response**:
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "course": "Computer Science"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "course": "Information Technology"
  }
]
```

### 2. Get Student by ID
- **Method**: `GET`
- **Endpoint**: `/api/students/{id}`
- **Path Parameter**: `id` (integer) - The ID of the student to retrieve
- **Response**: Single student object
- **Status Code**: `200 OK`

**Example Request**:
```
GET http://localhost:8080/api/students/1
```

**Example Response**:
```json
{
  "id": 1,
  "name": "John Doe",
  "course": "Computer Science"
}
```

### 3. Create New Student (POST)
- **Method**: `POST`
- **Endpoint**: `/api/students`
- **Content-Type**: `application/json`
- **Request Body**: Student object (id, name, course)
- **Response**: Created student object
- **Status Code**: `200 OK`

**Example Request**:
```
POST http://localhost:8080/api/students
Content-Type: application/json

{
  "id": 2,
  "name": "Jane Smith",
  "course": "Information Technology"
}
```

**Example Response**:
```json
{
  "id": 2,
  "name": "Jane Smith",
  "course": "Information Technology"
}
```

### 4. Update Student (PUT)
- **Method**: `PUT`
- **Endpoint**: `/api/students/{id}`
- **Path Parameter**: `id` (integer) - The ID of the student to update
- **Content-Type**: `application/json`
- **Request Body**: Updated student object (name, course)
- **Response**: Updated student object
- **Status Code**: `200 OK`

**Example Request**:
```
PUT http://localhost:8080/api/students/1
Content-Type: application/json

{
  "id": 1,
  "name": "John Doe",
  "course": "Data Science"
}
```

**Example Response**:
```json
{
  "id": 1,
  "name": "John Doe",
  "course": "Data Science"
}
```

### 5. Delete Student (DELETE)
- **Method**: `DELETE`
- **Endpoint**: `/api/students/{id}`
- **Path Parameter**: `id` (integer) - The ID of the student to delete
- **Response**: Success/failure message
- **Status Code**: `200 OK`

**Example Request**:
```
DELETE http://localhost:8080/api/students/2
```

**Example Response**:
```
Student deleted successfully
```

**Error Response** (if student not found):
```
Student not found
```

## Student Model

The `Student` entity has the following attributes:

```java
@Entity
public class Student {
    @Id
    private int id;              // Student ID (Primary Key)
    private String name;         // Student name
    private String course;       // Course enrolled
}
```

## Database Configuration

The application uses MySQL with the following configuration:

- **URL**: `jdbc:mysql://localhost:3306/ishu`
- **Driver**: `com.mysql.cj.jdbc.Driver`
- **Username**: `root`
- **Password**: `ghanari@1979`
- **DDL Auto**: `update` (automatically creates/updates tables)
- **Dialect**: `MySQLDialect`

The `Student` table will be automatically created with columns:
- `id` (int, primary key)
- `name` (varchar)
- `course` (varchar)

## Testing with Postman

### Setup Postman POST Request

1. **URL**: `http://localhost:8080/api/students`
2. **Method**: `POST`
3. **Headers**:
   - `Content-Type: application/json`
4. **Body** (JSON):
```json
{
  "id": 1,
  "name": "John Doe",
  "course": "Computer Science"
}
```

### Testing Steps

1. Open Postman
2. Create a new POST request
3. Enter the API endpoint URL
4. Set headers and request body as shown above
5. Click **Send**
6. Verify the response shows `Status: 200 OK`

## What Was Done

### Setup & Installation
1. ✅ **Java Installation**: Installed OpenJDK 17 via conda
   - Previously Java was not installed or not in PATH
   - Successfully installed using `conda install -c conda-forge openjdk=17`

2. ✅ **Project Build**: Built the Spring Boot application
   - Ran `mvnw.cmd clean package -DskipTests`
   - Generated executable JAR: `rest_api-0.0.1-SNAPSHOT.jar`
   - All dependencies were downloaded and compiled

3. ✅ **Server Launch**: Started the REST API server
   - Executed `java -jar target/rest_api-0.0.1-SNAPSHOT.jar`
   - Server running on `http://localhost:8080`
   - Database connected to MySQL instance

4. ✅ **API Endpoints Implementation**: Added all CRUD operations
   - GET `/api/students` - Get all students
   - GET `/api/students/{id}` - Get student by ID
   - POST `/api/students` - Create new student
   - PUT `/api/students/{id}` - Update student ✨ **NEW**
   - DELETE `/api/students/{id}` - Delete student ✨ **NEW**

5. ✅ **API Testing**: Verified endpoints are working
   - GET `/api/students` returns HTTP 200
   - Postman POST request configured and ready for testing
   - All CRUD operations documented with examples

### Database Connection
- MySQL database `ishu` is automatically created if it doesn't exist
- Student table is auto-generated using Hibernate
- JPA handles all CRUD operations

```
**Created**: March 24, 2026  
**Status**: ✅ Running and Tested
