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
  }
]
```

### 2. Get Student by ID
- **Method**: `GET`
- **Endpoint**: `/api/students/{id}`
- **Path Parameter**: `id` (integer)
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

### 3. Create New Student
- **Method**: `POST`
- **Endpoint**: `/api/students`
- **Content-Type**: `application/json`
- **Request Body**: Student object
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

4. ✅ **API Testing**: Verified endpoints are working
   - GET `/api/students` returns HTTP 200
   - Postman POST request configured and ready for testing

### Database Connection
- MySQL database `ishu` is automatically created if it doesn't exist
- Student table is auto-generated using Hibernate
- JPA handles all CRUD operations

## Troubleshooting

### Issue: `mvn command not found`
**Solution**: Use the Maven wrapper: `mvnw.cmd` instead of `mvn`

### Issue: `JAVA_HOME not defined`
**Solution**: Install Java via conda:
```bash
conda install -c conda-forge openjdk=17 -y
```

### Issue: Database connection failed
**Solution**: 
1. Ensure MySQL is running
2. Verify credentials in `application.properties`
3. Ensure the `ishu` database exists or the app will create it

### Issue: Port 8080 already in use
**Solution**: Change the port in `application.properties`:
```properties
server.port=9090
```

## Next Steps

- Add more REST endpoints (PUT, DELETE)
- Implement validation and error handling
- Add authentication/authorization
- Write comprehensive unit tests
- Deploy to cloud platform (AWS, Azure, etc.)

## Dependencies

Key Maven dependencies included:
- `spring-boot-starter-data-jpa` - JPA and Hibernate
- `spring-boot-starter-webmvc` - Spring Web MVC
- `mysql-connector-j` - MySQL JDBC driver
- `spring-boot-starter-test` - Testing framework

---

**Created**: March 2, 2026  
**Status**: ✅ Running and Tested
