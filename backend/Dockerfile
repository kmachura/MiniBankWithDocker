#
# Build
#
FROM maven:3.6.0-jdk-11-slim AS build
COPY src /home/minibankwithdocker/src
COPY pom.xml /home/minibankwithdocker
RUN mvn -f /home/minibankwithdocker/pom.xml clean package
#
# Package stage
#
FROM openjdk:11-jre-slim
COPY --from=build /home/minibankwithdocker/target/minibank-0.0.1-SNAPSHOT.jar /usr/local/lib/minibankwithdocker.jar
ENTRYPOINT ["java","-jar","/usr/local/lib/demo.jar"]