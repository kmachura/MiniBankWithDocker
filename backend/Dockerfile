FROM openjdk:11-jdk-slim

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY target/*.jar minibank-0.0.1-SNAPSHOT.jar

EXPOSE 8082

CMD ["java", "-jar", "minibank-0.0.1-SNAPSHOT.jar"]
