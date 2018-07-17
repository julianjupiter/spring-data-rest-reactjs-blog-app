#!/bin/sh

#./mvnw package
mvn clean package
java -jar ./target/spring-data-rest-reactjs-blog-app-0.0.1-SNAPSHOT.jar