FROM openjdk:11-jdk-slim

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY target/*.jar app.jar

EXPOSE 8082

CMD ["java", "-jar", "app.jar"]
