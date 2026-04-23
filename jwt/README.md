# JWT Demo (Spring Boot + MySQL)

This project is a basic JWT authentication demo built with Spring Boot.

It includes:
- A login endpoint that validates user credentials from MySQL
- JWT token generation using `jjwt`
- A sample protected-style hello endpoint (currently open by security config)
<img width="1919" height="1046" alt="Screenshot 2026-03-31 162346" src="https://github.com/user-attachments/assets/43b42253-35a6-40c5-ac00-0c7db3317b8c" />

## Tech Stack

- Java 17
- Spring Boot
- Spring Security
- Spring Data JPA
- MySQL
- JJWT (`io.jsonwebtoken`)

## Project Structure

Key components in this project:
- `controller/AuthController.java` - API endpoints
- `service/AuthService.java` - login validation logic
- `security/JwtUtil.java` - token generation and parsing
- `model/User.java` - JPA entity (`users` table)
- `repository/UserRepository.java` - user lookup by username
- `src/main/resources/Application.properties` - datasource and app settings

## API Endpoints

Base path: `/api`

1. `POST /api/login`
   - Request params: `username`, `password`
   - Returns:
     - JWT token string on success
     - `Invalid Credentials` on failure

2. `GET /api/hello`
   - Returns: `Hello! JWT Authentication Successful`

## Prerequisites

- JDK 17+
- Maven 3.9+
- MySQL running locally on port 3306

## Database Configuration

Current config in `Application.properties`:

- URL: `jdbc:mysql://localhost:3306/JwtDemo?createDatabaseIfNotExist=true`
- Username: `root`
- Password: configured in the properties file
- Hibernate DDL: `update`

Update credentials in `src/main/resources/Application.properties` before running.

## Run the Project

From the `JWT` folder:

```bash
mvn spring-boot:run
```

App starts on:

```text
http://localhost:8080
```

## Quick Test (cURL)

### Login

```bash
curl -X POST "http://localhost:8080/api/login?username=admin&password=admin123"
```

If credentials match a record in `users`, response is a JWT token.

### Hello Endpoint

```bash
curl "http://localhost:8080/api/hello"
```

## Sample SQL Data

Insert a test user in MySQL:

```sql
INSERT INTO users (username, password) VALUES ('admin', 'admin123');
```

## Notes

- Password check in current service compares plain text. For production, store hashed passwords and use `PasswordEncoder.matches(...)`.
- Current `SecurityConfig` allows all requests (`permitAll`). JWT validation filter is not yet enforced for endpoint protection.
- JWT secret is hardcoded in `JwtUtil`. Move it to configuration/env variables for real deployments.
