FROM maven:3.6.3-openjdk-11 as build

COPY . /app

WORKDIR /app

RUN mvn clean package

FROM openjdk:11-jre-slim

ENV APP_FILE minibank-0.0.1-SNAPSHOT.jar
ENV APP_HOME /usr/app

EXPOSE 8080

COPY --from=build /app/target/$APP_FILE $APP_HOME/

WORKDIR $APP_HOME

ENTRYPOINT ["sh", "-c"]

CMD ["exec java -jar $APP_FILE"]
